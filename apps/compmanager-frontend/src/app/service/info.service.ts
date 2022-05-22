import {from, Observable, throwError, timer} from 'rxjs';
import {catchError, filter, finalize, map, mergeMap, retryWhen, tap, timeout} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CommonAction} from '../reducers/global-reducers';
import {HttpAuthService} from '../modules/account/service/AuthService';
import * as env from '../../environments/environment';
import produce from 'immer';
import * as allActions from '../actions/actions';
import {CREATE_COMPETITION_COMMAND, errorEvent} from '../actions/actions';
import {Action} from '@ngrx/store';
import {parseISO} from 'date-fns';
import {format, utcToZonedTime} from 'date-fns-tz';
import {generateUuid} from "../modules/account/utils";
import {
  AddCategoryPayload,
  AddCompetitorPayload,
  AddRegistrationPeriodPayload,
  CategoryRestriction,
  CategoryState,
  ChangeCompetitorCategoryPayload,
  ChangeFightOrderPayload,
  Command,
  CommandType,
  CompetitionProperties,
  Competitor,
  CreateCompetitionPayload,
  CreateFakeCompetitorsPayload,
  DeleteRegistrationPeriodPayload,
  FightDescription,
  FightResultOption,
  GenerateBracketsPayload,
  GenerateCategoriesFromRestrictionsPayload, GenerateCategoriesFromRestrictionsResponse,
  GenerateSchedulePayload,
  GetCompetitorsResponse,
  ManagedCompetition,
  MatFightsQueryResult,
  MatsQueryResult,
  MessageInfo,
  QueryServiceResponse,
  RegistrationInfo,
  RemoveCompetitorPayload,
  Schedule,
  SetFightResultPayload,
  StageDescriptor,
  UpdateCompetionPropertiesPayload,
  UpdateCompetitorPayload
} from "@frontend-nx/protobuf";
import {Dictionary} from "@ngrx/entity";
import * as eventManagerActions from "../modules/event-manager/redux/event-manager-actions";
import {
  EVENT_MANAGER_ADD_REGISTRATION_PERIOD_COMMAND,
  EVENT_MANAGER_CREATE_FAKE_COMPETITORS_COMMAND,
  EVENT_MANAGER_DELETE_REGISTRATION_PERIOD_COMMAND,
  EVENT_MANAGER_DROP_CATEGORY_BRACKETS_COMMAND,
  EVENT_MANAGER_GENERATE_BRACKETS_COMMAND,
  EVENT_MANAGER_UPDATE_COMPETITOR_COMMAND,
  GENERATE_CATEGORIES_COMMAND
} from "../modules/event-manager/redux/event-manager-actions";
import {
  DASHBOARD_FIGHT_ORDER_CHANGE_COMMAND,
  DASHBOARD_SET_FIGHT_RESULT_COMMAND
} from "../modules/event-manager/redux/dashboard-actions";

const isoFormat = 'yyyy-MM-dd\'T\'HH:mm:ss.S\'Z\'';

const {
  commandsEndpoint,
  generateCategoriesEndpoint,
  competitionQueryEndpoint,
  defaultRestrictions,
  defaultFightResults,
} = env.environment;

const normalizeCommand = (command: any) => {
  return produce(command, draft => {
    const oldPayload = draft.payload || {};
    draft.payload = produce(oldPayload, pd => {
      for (const key of Object.keys(draft)) {
        if (InfoService.commandFields.indexOf(key) < 0) {
          pd[key] = draft[key];
          delete draft[key];
        }
      }
    });
  }) as any;
};


export const genericRetryStrategy = ({
                                       maxRetryAttempts = 3,
                                       scalingDuration = 500,
                                       excludedStatusCodes = []
                                     }: {
  maxRetryAttempts?: number,
  scalingDuration?: number,
  excludedStatusCodes?: number[]
} = {}) => (attempts: Observable<any>) => {
  return attempts.pipe(
    mergeMap((error, i) => {
      const retryAttempt = i + 1;
      // if maximum number of retries have been met
      // or response is a status code we don't wish to retry, throw error
      if (
        retryAttempt > maxRetryAttempts ||
        excludedStatusCodes.find(e => e === error.status)
      ) {
        return throwError(error);
      }
      console.log(
        `Attempt ${retryAttempt}: retrying in ${retryAttempt * scalingDuration}ms`
      );
      // retry after 1s, 2s, etc...
      return timer(retryAttempt * scalingDuration);
    }),
    finalize(() => console.log('We are done!'))
  );
};

const competitionIdPrefix = (competitionId: string) => (arg: string) => `${competitionQueryEndpoint}/${competitionId}/${arg}`


@Injectable()
export class InfoService {

  constructor(private http: HttpClient) {
  }

  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  static commandFields = [
    'payload',
    'type',
    'correlationId',
    'competitionId',
    'categoryId',
    'matId',
    'metadata',
    'executed',
    'id'
  ];

  static parseDate(dateStr: string): Date {
    if (dateStr) {
      return parseISO(dateStr);
    }
    return null;
  }

  static formatDate(date: Date, timeZone: string): string {
    if (date) {
      const zoned = utcToZonedTime(date, timeZone);
      return format(zoned, isoFormat, {timeZone});
    }
    return '';
  }

  private httpGet(url: string, options: any, tmt = 60000): Observable<QueryServiceResponse> {
    return this.http.get<ArrayBuffer>(url, {
      ...options, responseType: 'arraybuffer', headers: {
        Accept: 'application/x-protobuf'
      }
    }).pipe(
      timeout(tmt),
      retryWhen(genericRetryStrategy()),
      map(buff => QueryServiceResponse.decode(new Uint8Array(buff as any))),
      tap(r => console.log("Info service received a response: \n ", QueryServiceResponse.toJSON(r))),
      catchError(error => {
        console.log(error);
        return throwError(error);
      }),
    );
  }

  subscribeToCompetition(userId: string | number, competitionId: string) {
    const params = {
      userId: `${userId}`,
      competitionId
    };
    return this.httpGet(competitionQueryEndpoint + '/select', {
      params: params
    });
  }

  getCompetitions(creatorId?, status?): Observable<ManagedCompetition[]> {
    let params = {};
    if (status) {
      params = {...params, status};
    }
    if (creatorId) {
      params = {...params, creatorId};
    }
    return this.httpGet(competitionQueryEndpoint, {
      params: params
    }).pipe(
      map(r => r.getAllCompetitionsResponse?.managedCompetitions)
    );
  }


  getCompetitor(competitionId: string, fighterId: string): Observable<Competitor> {
    const params = {competitionId, fighterId};
    return this.httpGet(competitionIdPrefix(competitionId)(`competitor/${fighterId}`), {
      params: params
    })
      .pipe(
        map(r => r.getCompetitorResponse.competitor || <Competitor>{})
      );
  }


  getSchedule(competitionId: string): Observable<Schedule> {
    return this.httpGet(competitionIdPrefix(competitionId)('schedule'), {
      headers: this.headers
    })
      .pipe(
        map(r => r.getScheduleResponse.schedule || <Schedule>{})
      );
  }

  getFightIdsByCategoryId(competitionId: string): Observable<Dictionary<string[]>> {
    return this.httpGet(competitionIdPrefix(competitionId)('fight'), {
      headers: this.headers
    })
      .pipe(
        map(r => r.getFightIdsByCategoryIdsResponse.fightIdsByCategoryId),
        map(f => {
          const res = <Dictionary<string[]>>{};
          for (let key of Object.keys(f)) {
            res[key] = f[key].ids
          }
          return res
        }),
      );
  }


  getCategories(competitionId: string): Observable<CategoryState[]> {
    return this.httpGet(competitionIdPrefix(competitionId)('category'), {
      headers: this.headers
    })
      .pipe(
        map(r => r.getCategoriesResponse.categoryState),
      )
  }


  getCompetitorsForCompetition(competitionId: string, categoryId: string, pageNumber: string, pageSize: string, searchString?: string): Observable<GetCompetitorsResponse> {
    const pn = +pageNumber || 1
    const ps = +pageSize || 0
    const startAt = (pn - 1) * ps
    const limit = ps
    let params: any = {
      startAt,
      limit
    };
    if (categoryId && categoryId.length > 0) {
      params = {...params, categoryId};
    }
    if (searchString && searchString.length > 0) {
      params = {...params, searchString};
    }
    return this.httpGet(competitionIdPrefix(competitionId)('competitor'), {
      params: params
    })
      .pipe(
        map(r => r.getCompetitorsResponse),
      );
  }


  getDefaultRestrictions(competitionId: string): Observable<CategoryRestriction[]> {
    const params = {sportsId: 'bjj', competitionId, includeKids: 'false'};
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + HttpAuthService.getToken()
    });
    return this.httpGet(defaultRestrictions, {
      params: params,
      headers
    })
      .pipe(
        map(r => r.getDefaultRestrictionsResponse?.restrictions)
      );
  }


  getCompetitionProperties(competitionId: string): Observable<CompetitionProperties> {
    return this.httpGet(`${competitionQueryEndpoint}/${competitionId}`, {
      headers: this.headers
    })
      .pipe(
        map(r => r.getCompetitionPropertiesResponse?.competitionProperties)
      );
  }

  getRegistrationInfo(competitionId: string): Observable<RegistrationInfo> {
    const params = {competitionId};
    return this.httpGet(competitionIdPrefix(competitionId)('reginfo'), {
      params: params,
      headers: this.headers
    })
      .pipe(
        map(r => r.getRegistrationInfoResponse?.registrationInfo)
      );
  }


  getLatestCategoryState(competitionId, categoryId): Observable<CategoryState> {
    return this.httpGet(competitionIdPrefix(competitionId)(`category/${categoryId}`), {
      headers: this.headers
    })
      .pipe(
        map(r => r.getCategoryResponse?.categoryState)
      );
  }

  static toBytes(encodedRequest: Uint8Array): ArrayBuffer {
    const offset = encodedRequest.byteOffset;
    const length = encodedRequest.byteLength;
    return encodedRequest.buffer.slice(offset, offset + length);
  }

  sendCreateCompetitionCommand(action: CommonAction): Observable<any> {
    let competitionId = generateUuid();
    let id = generateUuid();
    let command = InfoService.createCommandWithPayload(action)
    command.messageInfo.competitionId = competitionId;
    command.messageInfo.id = id;
    const encodedRequest = Command.encode(command).finish();
    const userRequestArrayBuffer = InfoService.toBytes(encodedRequest);
    return this.http.post(`${commandsEndpoint}?competitionId=${competitionId}`, userRequestArrayBuffer, {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
        'Content-Type': 'application/x-protobuf'
      })
    });
  }

  private sendCommandToEndpoint(payload: Command, endpoint: string): Observable<any> {
    const body = Command.encode(payload).finish();
    const userRequestArrayBuffer = InfoService.toBytes(body);
    const tmt = this.defaultTimeout;
    return this.sendByteArrayToEndpoint(endpoint, userRequestArrayBuffer, tmt);
  }

  private sendByteArrayToEndpoint(endpoint: string, body: ArrayBuffer, tmt: number) {
    return this.http.post(endpoint, body, {
      responseType: 'arraybuffer',
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
        'Content-Type': 'application/x-protobuf',
        'Accept': 'application/x-protobuf'
      })
    }).pipe(
      timeout(tmt),
      retryWhen(genericRetryStrategy()),
      catchError(error => {
        console.log(error);
        return throwError(error);
      })
    );
  }

  static createCommandWithPayload(rawAction: any): Command {
    const action = normalizeCommand(rawAction)
    let messageInfo = <MessageInfo>{
      competitionId: action.competitionId,
      categoryId: action.categoryId,
      matId: action.matId,
      competitorId: action.competitorId,
    };
    let cmd = <Command>{};
    switch (action.type) {
      case CREATE_COMPETITION_COMMAND:
        cmd.type = CommandType.CREATE_COMPETITION_COMMAND;
        messageInfo.createCompetitionPayload = <CreateCompetitionPayload>{
          ...action.payload
        }
        break;
      case DASHBOARD_FIGHT_ORDER_CHANGE_COMMAND:
        cmd.type = CommandType.DASHBOARD_FIGHT_ORDER_CHANGE_COMMAND;
        messageInfo.changeFightOrderPayload = <ChangeFightOrderPayload>{
          ...action.payload
        }
        break;
      case DASHBOARD_SET_FIGHT_RESULT_COMMAND:
        cmd.type = CommandType.DASHBOARD_SET_FIGHT_RESULT_COMMAND;
        messageInfo.setFightResultPayload = <SetFightResultPayload>{
          ...action.payload
        }
        break;
      case EVENT_MANAGER_CREATE_FAKE_COMPETITORS_COMMAND:
        cmd.type = CommandType.CREATE_FAKE_COMPETITORS_COMMAND;
        messageInfo.createFakeCompetitorsPayload = <CreateFakeCompetitorsPayload>{
          ...action.payload
        }
        break;
      case   EVENT_MANAGER_DROP_CATEGORY_BRACKETS_COMMAND:
        cmd.type = CommandType.DROP_CATEGORY_BRACKETS_COMMAND;
        break;
      case     EVENT_MANAGER_ADD_REGISTRATION_PERIOD_COMMAND:
        cmd.type = CommandType.ADD_REGISTRATION_PERIOD_COMMAND;
        messageInfo.addRegistrationPeriodPayload = <AddRegistrationPeriodPayload>{
          ...action.payload
        }
        break;
      case     EVENT_MANAGER_DELETE_REGISTRATION_PERIOD_COMMAND:
        cmd.type = CommandType.DELETE_REGISTRATION_PERIOD_COMMAND;
        messageInfo.deleteRegistrationPeriodPayload = <DeleteRegistrationPeriodPayload>{
          ...action.payload
        }
        break;
      case     EVENT_MANAGER_UPDATE_COMPETITOR_COMMAND:
        cmd.type = CommandType.UPDATE_COMPETITOR_COMMAND;
        messageInfo.updateCompetitorPayload = <UpdateCompetitorPayload>{
          ...action.payload
        }
        break;
      case     GENERATE_CATEGORIES_COMMAND:
        cmd.type = CommandType.GENERATE_CATEGORIES_COMMAND;
        messageInfo.generateCategoriesFromRestrictionsPayload = <GenerateCategoriesFromRestrictionsPayload>{
          ...action.payload
        }
        break;
      case     EVENT_MANAGER_GENERATE_BRACKETS_COMMAND:
        cmd.type = CommandType.GENERATE_BRACKETS_COMMAND;
        messageInfo.generateBracketsPayload = <GenerateBracketsPayload>{
          ...action.payload
        }
        break;
      case allActions.START_COMPETITION_COMMAND:
        cmd.type = CommandType.START_COMPETITION_COMMAND
        break;
      case   allActions.DELETE_COMPETITION_COMMAND:
        cmd.type = CommandType.DELETE_COMPETITION_COMMAND
        break;
      case   eventManagerActions.UPDATE_COMPETITION_PROPERTIES_COMMAND:
        cmd.type = CommandType.UPDATE_COMPETITION_PROPERTIES_COMMAND
        messageInfo.updateCompetionPropertiesPayload = <UpdateCompetionPropertiesPayload>{
          competitionProperties: action.payload.competitionProperties
        }
        break;
      case   eventManagerActions.EVENT_MANAGER_GENERATE_SCHEDULE_COMMAND:
        cmd.type = CommandType.GENERATE_SCHEDULE_COMMAND
        messageInfo.generateSchedulePayload = <GenerateSchedulePayload>{
          ...action.payload
        }
        break;
      case   eventManagerActions.ADD_CATEGORY_COMMAND:
        cmd.type = CommandType.ADD_CATEGORY_COMMAND
        messageInfo.addCategoryPayload = <AddCategoryPayload>{
          ...action.payload
        }
        break;
      case   eventManagerActions.DELETE_CATEGORY_COMMAND:
        cmd.type = CommandType.DELETE_CATEGORY_COMMAND
        break;
      case   eventManagerActions.EVENT_MANAGER_ADD_COMPETITOR:
        cmd.type = CommandType.ADD_COMPETITOR_COMMAND
        messageInfo.addCompetitorPayload = <AddCompetitorPayload>{
          ...action.payload
        }
        break;
      case   eventManagerActions.EVENT_MANAGER_REMOVE_COMPETITOR:
        cmd.type = CommandType.REMOVE_COMPETITOR_COMMAND
        messageInfo.removeCompetitorPayload = <RemoveCompetitorPayload>{
          ...action.payload
        }
        break;
      case   eventManagerActions.EVENT_MANAGER_CHANGE_COMPETITOR_CATEGORY_COMMAND:
        cmd.type = CommandType.CHANGE_COMPETITOR_CATEGORY_COMMAND
        messageInfo.changeCompetitorCategoryPayload = <ChangeCompetitorCategoryPayload>{
          ...action.payload
        }
        break;
      case   eventManagerActions.EVENT_MANAGER_DROP_SCHEDULE_COMMAND:
        cmd.type = CommandType.DROP_SCHEDULE_COMMAND
        break;
      case   eventManagerActions.EVENT_MANAGER_DROP_ALL_BRACKETS_COMMAND:
        cmd.type = CommandType.DROP_ALL_BRACKETS_COMMAND
        break;
      case   allActions.PUBLISH_COMPETITION_COMMAND:
        cmd.type = CommandType.PUBLISH_COMPETITION_COMMAND
        break;
      case   allActions.UNPUBLISH_COMPETITION_COMMAND:
        cmd.type = CommandType.UNPUBLISH_COMPETITION_COMMAND
        break;
    }
    cmd.messageInfo = messageInfo;
    return cmd
  }

  sendCommand(command: Command, competitionId: string): Observable<any> {
    const id = generateUuid();
    const normalizedCommand = {...command, id};
    return this.sendCommandToEndpoint(normalizedCommand, `${commandsEndpoint}?competitionId=${competitionId}`);
  }

  private defaultTimeout = 15000;

  generatePreliminaryCategories(payload: GenerateCategoriesFromRestrictionsPayload, competitionId: string): Observable<GenerateCategoriesFromRestrictionsResponse> {
    return this.sendByteArrayToEndpoint(`${generateCategoriesEndpoint}/${competitionId}`,
      InfoService.toBytes(GenerateCategoriesFromRestrictionsPayload.encode(payload).finish()),
      this.defaultTimeout)
      .pipe(
        map(buff => QueryServiceResponse.decode(new Uint8Array(buff as any))),
        map(qsResponse => qsResponse.generateCategoriesFromRestrictionsResponse),
      );
  }

  getPeriodMats(competitionId: any, periodId: any): Observable<MatsQueryResult> {
    return this.httpGet(competitionIdPrefix(competitionId)(`period/${periodId}/mat`), {
      headers: this.headers
    })
      .pipe(
        map(r => r.getPeriodMatsResponse.matsQueryResults)
      );
  }

  getFight(competitionId: string, fightId: string, categoryId: string): Observable<{ fight: FightDescription, options: FightResultOption[] }> {
    return this.httpGet(competitionIdPrefix(competitionId)(`category/${categoryId}/fight/${fightId}`), {
      headers: this.headers
    }).pipe(
      map(r => r.getFightByIdResponse?.fightDescription),
      mergeMap(result => this.getFightResultOptions(competitionId, categoryId, result?.stageId)
        .pipe(
          map(options => ({fight: result, options}))
        ))
    );
  }

  getFightResultOptions(competitionId: string, categoryId: string, stageId: string): Observable<FightResultOption[]> {
    return this.httpGet(competitionIdPrefix(competitionId)(`category/${categoryId}/stage/${stageId}/resultoptions`), {
      headers: this.headers
    })
      .pipe(
        map(r => r.getFightResulOptionsResponse?.fightResultOptions)
      );
  }


  getMatFights(competitionId: string, matId: string, maxResults: number = 10, queryString?: any): Observable<MatFightsQueryResult> {
    const params = {matId, queryString: queryString || null, maxResults: `${maxResults}`};
    return this.httpGet(competitionIdPrefix(competitionId)(`mat/${matId}/fight`), {
      params: params,
      headers: this.headers
    })
      .pipe(
        map(r => r.getMatFightsResponse.matFights)
      );
  }

  sendCommandSync(command: Command): Observable<Action> {
    const id = generateUuid()
    const competitionId = command.messageInfo.competitionId;
    const body = Command.encode({...command, messageInfo: {...command.messageInfo, competitionId, id}});
    return this.http.post<Action[]>(`${commandsEndpoint}?competitionId=${competitionId}`, body, {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
        'Content-Type': 'application/x-protobuf'
      })
    }).pipe(
      timeout(this.defaultTimeout),
      retryWhen(genericRetryStrategy()),
      filter(events => events && events.length > 0),
      mergeMap(events => from(events)),
      map((ev: CommonAction) => produce(ev, draft => {
        draft.payload = ev.payload;
      })),
      catchError(error => {
        console.error(error);
        return throwError(errorEvent(JSON.stringify(error)));
      }));
  }

  getCategoryStageFights(competitionId: string, categoryId: string, stageId: string): Observable<FightDescription[]> {
    if (!competitionId || !categoryId || !stageId) {
      return throwError(`something is smissing: ${competitionId}, ${categoryId}, ${stageId}`);
    }
    return this.httpGet(competitionIdPrefix(competitionId)(`category/${categoryId}/stage/${stageId}/fight`), {
      headers: this.headers
    })
      .pipe(
        map(r => r.getStageFightsResponse.fights)
      );
  }

  getCategoryStages(competitionId: string, categoryId: string): Observable<StageDescriptor[]> {
    return this.httpGet(competitionIdPrefix(competitionId)(`category/${categoryId}/stage`), {
      headers: this.headers
    })
      .pipe(
        map(r => r.getStagesForCategoryResponse.stages)
      );
  }

  getDefaultFightResults(competitionId: string): Observable<FightResultOption[]> {
    const params = {competitionId};
    return this.httpGet(defaultFightResults, {
      params: params,
      headers: this.headers
    })
      .pipe(
        map(r => r.getDefaultFightResultsResponse.fightResultOptions)
      );
  }
}
