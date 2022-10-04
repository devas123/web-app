import {Observable, of, throwError} from 'rxjs';
import {filter, map, mergeMap, switchMap, tap} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CommonAction} from '../reducers/global-reducers';
import * as env from '../../environments/environment';
import produce from 'immer';
import * as allActions from '../actions/actions';
import {Action} from '@ngrx/store';
import {parseISO} from 'date-fns';
import {format, utcToZonedTime} from 'date-fns-tz';
import {generateUuid} from "../modules/account/utils";
import {
  AddAcademyPayload,
  AddCategoryPayload,
  AddCompetitorPayload,
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
  FightDescription,
  FightEditorApplyChangesPayload,
  FightResultOption,
  GenerateBracketsPayload,
  GenerateCategoriesFromRestrictionsPayload,
  GenerateCategoriesFromRestrictionsResponse,
  GenerateSchedulePayload,
  GetAcademiesResponse,
  GetAcademyResponse,
  GetCompetitorsResponse,
  ManagedCompetition,
  MatFightsQueryResult,
  MatsQueryResult,
  MessageInfo,
  PageInfo,
  QueryServiceRequest,
  QueryServiceResponse,
  RegistrationInfo,
  RemoveAcademyPayload,
  RemoveCompetitorPayload,
  Schedule,
  SetFightResultPayload,
  StageDescriptor,
  UpdateCompetionPropertiesPayload,
  UpdateCompetitorPayload,
  UpdateRegistrationInfoPayload,
  UpdateStageStatusPayload
} from "@frontend-nx/protobuf";
import {Dictionary} from "@ngrx/entity";
import * as eventManagerActions from "../modules/event-manager/redux/event-manager-actions";
import {CommandCallback, CommandExecutionResult} from "../../../../../libs/protobuf/src/lib/callback";
import {AbstractHttpService, toBytes} from "./abstract.http.service";

const isoFormat = 'yyyy-MM-dd\'T\'HH:mm:ss.S\'Z\'';

const {
  academiesEndpoint,
  commandsEndpoint,
  commandsSyncEndpoint,
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

const competitionIdPrefix = (competitionId: string) => (arg: string) => `${competitionQueryEndpoint}/${competitionId}/${arg}`


@Injectable()
export class InfoService extends AbstractHttpService {

  constructor(http: HttpClient) {
    super(http)
  }

  static async uint8ArrToString(uint8arr: Uint8Array): Promise<string | ArrayBuffer> {
    const bb = new Blob([uint8arr]);
    const f = new FileReader();
    return new Promise<string | ArrayBuffer>((resolve, reject) => {
      f.onload = function (e) {
        resolve(e.target.result);
      };
      f.onerror = function (e) {
        reject(e.target.result)
      }
      f.readAsArrayBuffer(bb);
    });
  }


  static async getFileAsByteArray(file: File): Promise<string | ArrayBuffer> {
    const f = new FileReader();
    return new Promise<string | ArrayBuffer>((resolve, reject) => {
      f.onloadend = function (e) {
        resolve(e.target.result);
      };
      f.onerror = function (e) {
        reject(e.target.result)
      }
      f.readAsArrayBuffer(file);
    });
  }

  static async encodeUint8ArrayAsBase64(array: Uint8Array): Promise<string | ArrayBuffer> {
    const f = new FileReader();
    return new Promise<string | ArrayBuffer>((resolve, reject) => {
      f.onloadend = function (e) {
        resolve(e.target.result);
      };
      f.onerror = function (e) {
        reject(e.target.result)
      }
      f.readAsDataURL(new Blob([array]));
    });
  }

  private encoder = new TextEncoder()

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

  subscribeToCompetition(userId: string | number, competitionId: string) {
    const params = {
      userId: `${userId}`,
      competitionId
    };
    return this.httpGetQueryServiceResponse(competitionQueryEndpoint + '/select', {
      params: params
    });
  }

  getCompetitionInfoImage(competitionId: string): Observable<string> {
    return this.httpGetQueryServiceResponse(`${competitionQueryEndpoint}/${competitionId}/image`, {
      headers: AbstractHttpService.authHeader()
    })
      .pipe(
        map(r => r.getCompetitionInfoImageResponse?.image),
        filter(r => Boolean(r)),
        switchMap(bytes => InfoService.encodeUint8ArrayAsBase64(bytes)),
        map(r => r as string)
      );
  }


  getCompetitions(creatorId?, status?): Observable<ManagedCompetition[]> {
    let params = {};
    if (status) {
      params = {...params, status};
    }
    if (creatorId) {
      params = {...params, creatorId};
    }
    return this.httpGetQueryServiceResponse(competitionQueryEndpoint, {
      params: params
    }).pipe(
      map(r => r.getAllCompetitionsResponse?.managedCompetitions)
    );
  }


  getCompetitor(competitionId: string, fighterId: string): Observable<Competitor> {
    const params = {competitionId, fighterId};
    return this.httpGetQueryServiceResponse(competitionIdPrefix(competitionId)(`competitor/${fighterId}`), {
      params: params
    })
      .pipe(
        map(r => r.getCompetitorResponse.competitor || <Competitor>{})
      );
  }


  getSchedule(competitionId: string): Observable<Schedule> {
    return this.httpGetQueryServiceResponse(competitionIdPrefix(competitionId)('schedule'), {
      headers: AbstractHttpService.authHeader()
    })
      .pipe(
        map(r => r.getScheduleResponse.schedule || <Schedule>{})
      );
  }

  getFightIdsByCategoryId(competitionId: string): Observable<Dictionary<string[]>> {
    return this.httpGetQueryServiceResponse(competitionIdPrefix(competitionId)('fight'), {
      headers: AbstractHttpService.authHeader()
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
    return this.httpGetQueryServiceResponse(competitionIdPrefix(competitionId)('category'), {
      headers: AbstractHttpService.authHeader()
    })
      .pipe(
        map(r => r.getCategoriesResponse.categoryState),
      )
  }


  getCompetitorsForCompetition(competitionId: string, categoryId: string, pageNumber: number, pageSize: number, searchString?: string): Observable<GetCompetitorsResponse> {
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
    return this.httpGetQueryServiceResponse(competitionIdPrefix(competitionId)('competitor'), {
      params: params
    })
      .pipe(
        map(r => r.getCompetitorsResponse),
      );
  }


  getDefaultRestrictions(competitionId: string): Observable<CategoryRestriction[]> {
    const params = {sportsId: 'bjj', competitionId, includeKids: 'false'};
    return this.httpGetQueryServiceResponse(defaultRestrictions, {
      params: params,
      headers: AbstractHttpService.authHeader()
    })
      .pipe(
        map(r => r.getDefaultRestrictionsResponse?.restrictions)
      );
  }


  getCompetitionProperties(competitionId: string): Observable<CompetitionProperties> {
    return this.httpGetQueryServiceResponse(`${competitionQueryEndpoint}/${competitionId}`, {
      headers: AbstractHttpService.authHeader()
    })
      .pipe(
        map(r => r.getCompetitionPropertiesResponse?.competitionProperties)
      );
  }

  getCompetitionInfoTemplate(competitionId: string): Observable<string> {
    return this.httpGetQueryServiceResponse(`${competitionQueryEndpoint}/${competitionId}/info`, {
      headers: AbstractHttpService.authHeader()
    })
      .pipe(
        switchMap(r => InfoService.uint8ArrToString(r.getCompetitionInfoTemplateResponse?.template)),
        map(r => r as string)
      );
  }

  saveCompetitionInfoTemplate(competitionId: string, competitionInfoTemplate: string): Observable<QueryServiceResponse> {
    const request = <QueryServiceRequest>{
      addCompetitionInfoRequest: {
        competitionInfo: this.encoder.encode(competitionInfoTemplate)
      }
    }
    const bytes = toBytes(QueryServiceRequest.encode(request).finish());
    return this.sendByteArrayToEndpoint(`${competitionQueryEndpoint}/${competitionId}/info`, bytes, AbstractHttpService.defaultTimeout)
      .pipe(
        switchMap(arrayBuffer => {
          const response = QueryServiceResponse.decode(new Uint8Array(arrayBuffer))
          if (Boolean(response.errorResponse)) {
            return throwError(response.errorResponse)
          } else {
            return of(response)
          }
        })
      )
  }


  getRegistrationInfo(competitionId: string): Observable<RegistrationInfo> {
    const params = {competitionId};
    return this.httpGetQueryServiceResponse(competitionIdPrefix(competitionId)('reginfo'), {
      params: params,
      headers: AbstractHttpService.authHeader()
    })
      .pipe(
        map(r => r.getRegistrationInfoResponse?.registrationInfo)
      );
  }


  getLatestCategoryState(competitionId, categoryId): Observable<CategoryState> {
    return this.httpGetQueryServiceResponse(competitionIdPrefix(competitionId)(`category/${categoryId}`), {
      headers: AbstractHttpService.authHeader()
    })
      .pipe(
        map(r => r.getCategoryResponse?.categoryState)
      );
  }

  sendCreateCompetitionCommand(action: CommonAction): Observable<Action[]> {
    let competitionId = generateUuid();
    let id = generateUuid();
    let command = InfoService.createCommandWithPayload(action)
    command.messageInfo.competitionId = competitionId;
    command.messageInfo.id = id;
    return this.sendCommandSync(command)
  }

  private sendCommandToEndpoint(payload: Command, endpoint: string): Observable<any> {
    const body = Command.encode(payload).finish();
    const userRequestArrayBuffer = toBytes(body);
    const tmt = AbstractHttpService.defaultTimeout;
    return this.sendByteArrayToEndpoint(endpoint, userRequestArrayBuffer, tmt);
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
    cmd.type = action.type;
    switch (action.type) {
      case CommandType.UPDATE_STAGE_STATUS_COMMAND: {
        cmd.type = CommandType.UPDATE_STAGE_STATUS_COMMAND;
        messageInfo.updateStageStatusPayload = <UpdateStageStatusPayload>{
          ...action.payload
        };
        break;
      }
      case CommandType.FIGHTS_EDITOR_APPLY_CHANGE: {
        messageInfo.fightEditorApplyChangesPayload = <FightEditorApplyChangesPayload>{
          ...action.payload
        };
        break;
      }
      case CommandType.UPDATE_REGISTRATION_INFO_COMMAND: {
        messageInfo.updateRegistrationInfoPayload = <UpdateRegistrationInfoPayload>{
          registrationInfo: action.payload.registrationInfo
        };
        break;
      }
      case CommandType.CREATE_COMPETITION_COMMAND:
        messageInfo.createCompetitionPayload = <CreateCompetitionPayload>{
          reginfo: action.payload.regInfo,
          properties: action.payload.properties
        }
        break;
      case CommandType.DASHBOARD_FIGHT_ORDER_CHANGE_COMMAND:
        messageInfo.changeFightOrderPayload = <ChangeFightOrderPayload>{
          ...action.payload
        }
        break;
      case CommandType.DASHBOARD_SET_FIGHT_RESULT_COMMAND:
        messageInfo.setFightResultPayload = <SetFightResultPayload>{
          ...action.payload
        }
        break;
      case CommandType.CREATE_FAKE_COMPETITORS_COMMAND:
        messageInfo.createFakeCompetitorsPayload = <CreateFakeCompetitorsPayload>{
          ...action.payload
        }
        break;
      case   CommandType.DROP_CATEGORY_BRACKETS_COMMAND:
        break;
      case     CommandType.UPDATE_COMPETITOR_COMMAND:
        messageInfo.updateCompetitorPayload = <UpdateCompetitorPayload>{
          competitor: action.payload.competitor
        }
        break;
      case     CommandType.GENERATE_CATEGORIES_COMMAND:
        messageInfo.generateCategoriesFromRestrictionsPayload = <GenerateCategoriesFromRestrictionsPayload>{
          ...action.payload
        }
        break;
      case     CommandType.GENERATE_BRACKETS_COMMAND:
        messageInfo.generateBracketsPayload = <GenerateBracketsPayload>{
          stageDescriptors: action.payload.stageDescriptors
        }
        break;
      case allActions.START_COMPETITION_COMMAND:
        break;
      case   CommandType.DELETE_COMPETITION_COMMAND:
        break;
      case   CommandType.UPDATE_COMPETITION_PROPERTIES_COMMAND:
        messageInfo.updateCompetionPropertiesPayload = <UpdateCompetionPropertiesPayload>{
          competitionProperties: action.payload.competitionProperties
        }
        break;
      case   CommandType.GENERATE_SCHEDULE_COMMAND:
        messageInfo.generateSchedulePayload = <GenerateSchedulePayload>{
          ...action.payload
        }
        break;
      case   eventManagerActions.ADD_CATEGORY_COMMAND:
        messageInfo.addCategoryPayload = <AddCategoryPayload>{
          ...action.payload
        }
        break;
      case   CommandType.DELETE_CATEGORY_COMMAND:
        break;
      case   CommandType.ADD_COMPETITOR_COMMAND:
        messageInfo.addCompetitorPayload = <AddCompetitorPayload>{
          competitor: action.payload.competitor
        }
        break;
      case   CommandType.REMOVE_COMPETITOR_COMMAND:
        messageInfo.removeCompetitorPayload = <RemoveCompetitorPayload>{
          competitorId: action.payload.competitorId
        }
        break;
      case   CommandType.CHANGE_COMPETITOR_CATEGORY_COMMAND:
        messageInfo.changeCompetitorCategoryPayload = <ChangeCompetitorCategoryPayload>{
          ...action.payload
        }
        break;
      case   CommandType.DROP_SCHEDULE_COMMAND:
        break;
      case   CommandType.DROP_ALL_BRACKETS_COMMAND:
        break;
      case   CommandType.PUBLISH_COMPETITION_COMMAND:
        break;
      case   CommandType.UNPUBLISH_COMPETITION_COMMAND:
        break;
      case CommandType.ADD_ACADEMY_COMMAND:
        cmd.type = <CommandType>action.type;
        messageInfo.addAcademyPayload = <AddAcademyPayload>{
          ...action.payload
        }
        break;
      case CommandType.REMOVE_ACADEMY_COMMAND:
        cmd.type = <CommandType>action.type;
        messageInfo.removeAcademyPayload = <RemoveAcademyPayload>{
          ...action.payload
        }
        break;
    }
    cmd.messageInfo = messageInfo;
    return cmd
  }

  sendCommand(command: Command, competitionId: string): Observable<any> {
    const id = generateUuid();
    const normalizedCommand = {...command, id};
    return this.sendCommandToEndpoint(normalizedCommand, this.withCompetitionId(commandsEndpoint)(competitionId));
  }


  generatePreliminaryCategories(payload: GenerateCategoriesFromRestrictionsPayload, competitionId: string): Observable<GenerateCategoriesFromRestrictionsResponse> {
    return this.sendByteArrayToEndpoint(`${generateCategoriesEndpoint}/${competitionId}`,
      toBytes(GenerateCategoriesFromRestrictionsPayload.encode(payload).finish()),
      AbstractHttpService.defaultTimeout)
      .pipe(
        map(buff => QueryServiceResponse.decode(new Uint8Array(buff as any))),
        map(qsResponse => qsResponse.generateCategoriesFromRestrictionsResponse),
      );
  }

  getPeriodMats(competitionId: any, periodId: string): Observable<MatsQueryResult> {
    return this.httpGetQueryServiceResponse(competitionIdPrefix(competitionId)(`period/${periodId}/mat`), {
      headers: AbstractHttpService.authHeader()
    })
      .pipe(
        map(r => r.getPeriodMatsResponse.matsQueryResults)
      );
  }

  getFight(competitionId: string, fightId: string): Observable<{ fight: FightDescription, options: FightResultOption[] }> {
    return this.httpGetQueryServiceResponse(competitionIdPrefix(competitionId)(`fight/${fightId}`), {
      headers: AbstractHttpService.authHeader()
    }).pipe(
      map(r => r.getFightByIdResponse?.fightDescription),
      mergeMap(result => this.getFightResultOptions(competitionId, result?.stageId)
        .pipe(
          map(options => ({fight: result, options}))
        ))
    );
  }

  getFightResultOptions(competitionId: string, stageId: string): Observable<FightResultOption[]> {
    return this.httpGetQueryServiceResponse(competitionIdPrefix(competitionId)(`stage/${stageId}/resultoptions`), {
      headers: AbstractHttpService.authHeader()
    })
      .pipe(
        map(r => r.getFightResulOptionsResponse?.fightResultOptions)
      );
  }


  getMatFights(competitionId: string, matId: string, maxResults: number = 10, queryString?: any): Observable<MatFightsQueryResult> {
    const params = {matId, queryString: queryString || null, maxResults: `${maxResults}`};
    return this.httpGetQueryServiceResponse(competitionIdPrefix(competitionId)(`mat/${matId}/fight`), {
      params: params,
      headers: AbstractHttpService.authHeader()
    })
      .pipe(
        map(r => r.getMatFightsResponse.matFights)
      );
  }

  withCompetitionId = (endpoint: string) => (competitionId: string) => !!competitionId ? `${endpoint}?competitionId=${competitionId}` : endpoint;

  sendCommandSync(command: Command): Observable<Action[]> {
    const id = generateUuid()
    const competitionId = command.messageInfo.competitionId;
    return this.sendCommandToEndpoint({
      ...command,
      messageInfo: {...command.messageInfo, competitionId, id}
    }, this.withCompetitionId(commandsSyncEndpoint)(competitionId))
      .pipe(
        map(callbackBytes => CommandCallback.decode(new Uint8Array(callbackBytes))),
        tap(cc => console.log("Command callback: ", cc)),
        filter(cc => !!cc),
        mergeMap(callback => {
          if (callback.result == CommandExecutionResult.COMMAND_EXECUTION_RESULT_SUCCESS) {
            return of(callback.events)
          } else {
            return throwError(callback.errorInfo)
          }
        }),
        map(events => events.map(e => <Action>{...e}))
      );
  }

  getCategoryStageFights(competitionId: string, categoryId: string, stageId: string): Observable<FightDescription[]> {
    if (!competitionId || !categoryId || !stageId) {
      return throwError(`something is missing: ${competitionId}, ${categoryId}, ${stageId}`);
    }
    return this.httpGetQueryServiceResponse(competitionIdPrefix(competitionId)(`category/${categoryId}/stage/${stageId}/fight`), {
      headers: AbstractHttpService.authHeader()
    })
      .pipe(
        map(r => r.getStageFightsResponse.fights)
      );
  }

  getCategoryStages(competitionId: string, categoryId: string): Observable<StageDescriptor[]> {
    return this.httpGetQueryServiceResponse(competitionIdPrefix(competitionId)(`category/${categoryId}/stage`), {
      headers: AbstractHttpService.authHeader()
    })
      .pipe(
        map(r => r.getStagesForCategoryResponse.stages)
      );
  }

  getDefaultFightResults(competitionId: string): Observable<FightResultOption[]> {
    const params = {competitionId};
    return this.httpGetQueryServiceResponse(defaultFightResults, {
      params: params,
      headers: AbstractHttpService.authHeader()
    })
      .pipe(
        map(r => r.getDefaultFightResultsResponse.fightResultOptions)
      );
  }

  loadAcademies(pageInfo: PageInfo, searchString: string): Observable<GetAcademiesResponse> {
    const pn = pageInfo.page || 1
    const ps = pageInfo.resultsOnPage || 0
    const startAt = (pn - 1) * ps
    const limit = ps
    let params: any = {
      startAt,
      limit
    }
    if (searchString && searchString.length > 0) {
      params = {
        ...params,
        searchString
      }
    }
    return this.httpGetQueryServiceResponse(academiesEndpoint, {
      params: params,
      headers: AbstractHttpService.authHeader()
    })
      .pipe(
        map(r => r.getAcademiesResponse)
      );
  }

  lookupAcademy(searchString: string): Observable<GetAcademiesResponse> {
    const pageInfo = <PageInfo>{
      page: 1,
      resultsOnPage: 5
    }
    return this.loadAcademies(pageInfo, searchString);
  }

  loadAcademy(id: string): Observable<GetAcademyResponse> {
    return this.httpGetQueryServiceResponse(`${academiesEndpoint}/${id}`, {
      headers: AbstractHttpService.authHeader()
    })
      .pipe(
        map(r => r.getAcademyResponse)
      );
  }
}
