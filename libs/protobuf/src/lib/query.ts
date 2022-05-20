/* eslint-disable */
import * as Long from 'long';
import * as _m0 from 'protobufjs/minimal';
import {
  CategoryRestriction,
  AdjacencyList,
  Competitor,
  FightDescription,
  MatState,
  FightResultOption,
  ManagedCompetition,
  CategoryDescriptor,
  CompetitionProperties,
  Schedule,
  Period,
  MatDescription,
  RegistrationInfo,
  CategoryState,
  StageDescriptor,
  FullAcademyInfo,
} from './model';

export interface GenerateCategoriesFromRestrictionsRequest {
  restrictions: CategoryRestriction[];
  idTrees: AdjacencyList[];
  restrictionNames: string[];
}

export interface ListOfString {
  ids: string[];
}

export interface MatFightsQueryResult {
  competitors: Competitor[];
  fights: FightDescription[];
}

export interface PageInfo {
  total: number;
  page: number;
}

export interface MatsQueryResult {
  competitors: Competitor[];
  mats: MatState[];
}

export interface QueryServiceResponse {
  payload?:
    | {
        $case: 'getDefaultRestrictionsResponse';
        getDefaultRestrictionsResponse: GetDefaultRestrictionsResponse;
      }
    | {
        $case: 'getDefaultFightResultsResponse';
        getDefaultFightResultsResponse: GetDefaultFightResultsResponse;
      }
    | {
        $case: 'getAllCompetitionsResponse';
        getAllCompetitionsResponse: GetAllCompetitionsResponse;
      }
    | {
        $case: 'generateCategoriesFromRestrictionsResponse';
        generateCategoriesFromRestrictionsResponse: GenerateCategoriesFromRestrictionsResponse;
      }
    | {
        $case: 'getCompetitionPropertiesResponse';
        getCompetitionPropertiesResponse: GetCompetitionPropertiesResponse;
      }
    | {
        $case: 'getCompetitionInfoTemplateResponse';
        getCompetitionInfoTemplateResponse: GetCompetitionInfoTemplateResponse;
      }
    | { $case: 'getScheduleResponse'; getScheduleResponse: GetScheduleResponse }
    | {
        $case: 'getCompetitorsResponse';
        getCompetitorsResponse: GetCompetitorsResponse;
      }
    | {
        $case: 'getCompetitorResponse';
        getCompetitorResponse: GetCompetitorResponse;
      }
    | {
        $case: 'getDashboardResponse';
        getDashboardResponse: GetDashboardResponse;
      }
    | { $case: 'getMatsResponse'; getMatsResponse: GetMatsResponse }
    | {
        $case: 'getPeriodMatsResponse';
        getPeriodMatsResponse: GetPeriodMatsResponse;
      }
    | { $case: 'getMatResponse'; getMatResponse: GetMatResponse }
    | {
        $case: 'getMatFightsResponse';
        getMatFightsResponse: GetMatFightsResponse;
      }
    | {
        $case: 'getRegistrationInfoResponse';
        getRegistrationInfoResponse: GetRegistrationInfoResponse;
      }
    | {
        $case: 'getCategoriesResponse';
        getCategoriesResponse: GetCategoriesResponse;
      }
    | {
        $case: 'getFightByIdResponse';
        getFightByIdResponse: GetFightByIdResponse;
      }
    | {
        $case: 'getFightIdsByCategoryIdsResponse';
        getFightIdsByCategoryIdsResponse: GetFightIdsByCategoryIdsResponse;
      }
    | { $case: 'getCategoryResponse'; getCategoryResponse: GetCategoryResponse }
    | {
        $case: 'getPeriodFightsByMatsResponse';
        getPeriodFightsByMatsResponse: GetPeriodFightsByMatsResponse;
      }
    | {
        $case: 'getFightResulOptionsResponse';
        getFightResulOptionsResponse: GetFightResulOptionsResponse;
      }
    | {
        $case: 'getStagesForCategoryResponse';
        getStagesForCategoryResponse: GetStagesForCategoryResponse;
      }
    | {
        $case: 'getStageByIdResponse';
        getStageByIdResponse: GetStageByIdResponse;
      }
    | {
        $case: 'getStageFightsResponse';
        getStageFightsResponse: GetStageFightsResponse;
      }
    | {
        $case: 'getAcademiesResponse';
        getAcademiesResponse: GetAcademiesResponse;
      };
}

export interface GetDefaultRestrictionsResponse {
  restrictions: CategoryRestriction[];
}

export interface GetDefaultFightResultsResponse {
  fightResultOptions: FightResultOption[];
}

export interface GetAllCompetitionsResponse {
  managedCompetitions: ManagedCompetition[];
}

export interface GenerateCategoriesFromRestrictionsResponse {
  categories: CategoryDescriptor[];
}

export interface GetCompetitionPropertiesResponse {
  competitionProperties?: CompetitionProperties | undefined;
}

export interface GetCompetitionInfoTemplateResponse {
  template?: string | undefined;
}

export interface GetScheduleResponse {
  schedule?: Schedule | undefined;
}

export interface GetCompetitorsResponse {
  pageInfo?: PageInfo;
  competitors: Competitor[];
}

export interface GetCompetitorResponse {
  competitor?: Competitor | undefined;
}

export interface GetDashboardResponse {
  periods: Period[];
}

export interface GetMatsResponse {
  mats: MatDescription[];
}

export interface GetPeriodMatsResponse {
  matsQueryResults?: MatsQueryResult;
}

export interface GetMatResponse {
  mat?: MatDescription | undefined;
}

export interface GetMatFightsResponse {
  matFights?: MatFightsQueryResult;
}

export interface GetRegistrationInfoResponse {
  registrationInfo?: RegistrationInfo | undefined;
}

export interface GetCategoriesResponse {
  categoryState: CategoryState[];
}

export interface GetFightByIdResponse {
  fightDescription?: FightDescription | undefined;
}

export interface GetFightIdsByCategoryIdsResponse {
  fightIdsByCategoryId: { [key: string]: ListOfString };
}

export interface GetFightIdsByCategoryIdsResponse_FightIdsByCategoryIdEntry {
  key: string;
  value?: ListOfString;
}

export interface GetCategoryResponse {
  categoryState?: CategoryState | undefined;
}

export interface GetPeriodFightsByMatsResponse {
  fightIdsByMatId: { [key: string]: ListOfString };
}

export interface GetPeriodFightsByMatsResponse_FightIdsByMatIdEntry {
  key: string;
  value?: ListOfString;
}

export interface GetFightResulOptionsResponse {
  fightResultOptions: FightResultOption[];
}

export interface GetStagesForCategoryResponse {
  stages: StageDescriptor[];
}

export interface GetStageByIdResponse {
  stage?: StageDescriptor | undefined;
}

export interface GetStageFightsResponse {
  fights: FightDescription[];
}

export interface GetAcademiesResponse {
  academies: FullAcademyInfo[];
}

function createBaseGenerateCategoriesFromRestrictionsRequest(): GenerateCategoriesFromRestrictionsRequest {
  return { restrictions: [], idTrees: [], restrictionNames: [] };
}

export const GenerateCategoriesFromRestrictionsRequest = {
  encode(
    message: GenerateCategoriesFromRestrictionsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.restrictions) {
      CategoryRestriction.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.idTrees) {
      AdjacencyList.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.restrictionNames) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GenerateCategoriesFromRestrictionsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenerateCategoriesFromRestrictionsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.restrictions.push(
            CategoryRestriction.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.idTrees.push(AdjacencyList.decode(reader, reader.uint32()));
          break;
        case 3:
          message.restrictionNames.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenerateCategoriesFromRestrictionsRequest {
    return {
      restrictions: Array.isArray(object?.restrictions)
        ? object.restrictions.map((e: any) => CategoryRestriction.fromJSON(e))
        : [],
      idTrees: Array.isArray(object?.idTrees)
        ? object.idTrees.map((e: any) => AdjacencyList.fromJSON(e))
        : [],
      restrictionNames: Array.isArray(object?.restrictionNames)
        ? object.restrictionNames.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: GenerateCategoriesFromRestrictionsRequest): unknown {
    const obj: any = {};
    if (message.restrictions) {
      obj.restrictions = message.restrictions.map((e) =>
        e ? CategoryRestriction.toJSON(e) : undefined
      );
    } else {
      obj.restrictions = [];
    }
    if (message.idTrees) {
      obj.idTrees = message.idTrees.map((e) =>
        e ? AdjacencyList.toJSON(e) : undefined
      );
    } else {
      obj.idTrees = [];
    }
    if (message.restrictionNames) {
      obj.restrictionNames = message.restrictionNames.map((e) => e);
    } else {
      obj.restrictionNames = [];
    }
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<GenerateCategoriesFromRestrictionsRequest>, I>
  >(object: I): GenerateCategoriesFromRestrictionsRequest {
    const message = createBaseGenerateCategoriesFromRestrictionsRequest();
    message.restrictions =
      object.restrictions?.map((e) => CategoryRestriction.fromPartial(e)) || [];
    message.idTrees =
      object.idTrees?.map((e) => AdjacencyList.fromPartial(e)) || [];
    message.restrictionNames = object.restrictionNames?.map((e) => e) || [];
    return message;
  },
};

function createBaseListOfString(): ListOfString {
  return { ids: [] };
}

export const ListOfString = {
  encode(
    message: ListOfString,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.ids) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListOfString {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListOfString();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ids.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListOfString {
    return {
      ids: Array.isArray(object?.ids)
        ? object.ids.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: ListOfString): unknown {
    const obj: any = {};
    if (message.ids) {
      obj.ids = message.ids.map((e) => e);
    } else {
      obj.ids = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListOfString>, I>>(
    object: I
  ): ListOfString {
    const message = createBaseListOfString();
    message.ids = object.ids?.map((e) => e) || [];
    return message;
  },
};

function createBaseMatFightsQueryResult(): MatFightsQueryResult {
  return { competitors: [], fights: [] };
}

export const MatFightsQueryResult = {
  encode(
    message: MatFightsQueryResult,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.competitors) {
      Competitor.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.fights) {
      FightDescription.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MatFightsQueryResult {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMatFightsQueryResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.competitors.push(Competitor.decode(reader, reader.uint32()));
          break;
        case 2:
          message.fights.push(FightDescription.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MatFightsQueryResult {
    return {
      competitors: Array.isArray(object?.competitors)
        ? object.competitors.map((e: any) => Competitor.fromJSON(e))
        : [],
      fights: Array.isArray(object?.fights)
        ? object.fights.map((e: any) => FightDescription.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MatFightsQueryResult): unknown {
    const obj: any = {};
    if (message.competitors) {
      obj.competitors = message.competitors.map((e) =>
        e ? Competitor.toJSON(e) : undefined
      );
    } else {
      obj.competitors = [];
    }
    if (message.fights) {
      obj.fights = message.fights.map((e) =>
        e ? FightDescription.toJSON(e) : undefined
      );
    } else {
      obj.fights = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MatFightsQueryResult>, I>>(
    object: I
  ): MatFightsQueryResult {
    const message = createBaseMatFightsQueryResult();
    message.competitors =
      object.competitors?.map((e) => Competitor.fromPartial(e)) || [];
    message.fights =
      object.fights?.map((e) => FightDescription.fromPartial(e)) || [];
    return message;
  },
};

function createBasePageInfo(): PageInfo {
  return { total: 0, page: 0 };
}

export const PageInfo = {
  encode(
    message: PageInfo,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.total !== 0) {
      writer.uint32(8).int32(message.total);
    }
    if (message.page !== 0) {
      writer.uint32(16).int32(message.page);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PageInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePageInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.total = reader.int32();
          break;
        case 2:
          message.page = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PageInfo {
    return {
      total: isSet(object.total) ? Number(object.total) : 0,
      page: isSet(object.page) ? Number(object.page) : 0,
    };
  },

  toJSON(message: PageInfo): unknown {
    const obj: any = {};
    message.total !== undefined && (obj.total = Math.round(message.total));
    message.page !== undefined && (obj.page = Math.round(message.page));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PageInfo>, I>>(object: I): PageInfo {
    const message = createBasePageInfo();
    message.total = object.total ?? 0;
    message.page = object.page ?? 0;
    return message;
  },
};

function createBaseMatsQueryResult(): MatsQueryResult {
  return { competitors: [], mats: [] };
}

export const MatsQueryResult = {
  encode(
    message: MatsQueryResult,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.competitors) {
      Competitor.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.mats) {
      MatState.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MatsQueryResult {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMatsQueryResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.competitors.push(Competitor.decode(reader, reader.uint32()));
          break;
        case 2:
          message.mats.push(MatState.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MatsQueryResult {
    return {
      competitors: Array.isArray(object?.competitors)
        ? object.competitors.map((e: any) => Competitor.fromJSON(e))
        : [],
      mats: Array.isArray(object?.mats)
        ? object.mats.map((e: any) => MatState.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MatsQueryResult): unknown {
    const obj: any = {};
    if (message.competitors) {
      obj.competitors = message.competitors.map((e) =>
        e ? Competitor.toJSON(e) : undefined
      );
    } else {
      obj.competitors = [];
    }
    if (message.mats) {
      obj.mats = message.mats.map((e) => (e ? MatState.toJSON(e) : undefined));
    } else {
      obj.mats = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MatsQueryResult>, I>>(
    object: I
  ): MatsQueryResult {
    const message = createBaseMatsQueryResult();
    message.competitors =
      object.competitors?.map((e) => Competitor.fromPartial(e)) || [];
    message.mats = object.mats?.map((e) => MatState.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryServiceResponse(): QueryServiceResponse {
  return { payload: undefined };
}

export const QueryServiceResponse = {
  encode(
    message: QueryServiceResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.payload?.$case === 'getDefaultRestrictionsResponse') {
      GetDefaultRestrictionsResponse.encode(
        message.payload.getDefaultRestrictionsResponse,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.payload?.$case === 'getDefaultFightResultsResponse') {
      GetDefaultFightResultsResponse.encode(
        message.payload.getDefaultFightResultsResponse,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.payload?.$case === 'getAllCompetitionsResponse') {
      GetAllCompetitionsResponse.encode(
        message.payload.getAllCompetitionsResponse,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (
      message.payload?.$case === 'generateCategoriesFromRestrictionsResponse'
    ) {
      GenerateCategoriesFromRestrictionsResponse.encode(
        message.payload.generateCategoriesFromRestrictionsResponse,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.payload?.$case === 'getCompetitionPropertiesResponse') {
      GetCompetitionPropertiesResponse.encode(
        message.payload.getCompetitionPropertiesResponse,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.payload?.$case === 'getCompetitionInfoTemplateResponse') {
      GetCompetitionInfoTemplateResponse.encode(
        message.payload.getCompetitionInfoTemplateResponse,
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.payload?.$case === 'getScheduleResponse') {
      GetScheduleResponse.encode(
        message.payload.getScheduleResponse,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.payload?.$case === 'getCompetitorsResponse') {
      GetCompetitorsResponse.encode(
        message.payload.getCompetitorsResponse,
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.payload?.$case === 'getCompetitorResponse') {
      GetCompetitorResponse.encode(
        message.payload.getCompetitorResponse,
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.payload?.$case === 'getDashboardResponse') {
      GetDashboardResponse.encode(
        message.payload.getDashboardResponse,
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.payload?.$case === 'getMatsResponse') {
      GetMatsResponse.encode(
        message.payload.getMatsResponse,
        writer.uint32(90).fork()
      ).ldelim();
    }
    if (message.payload?.$case === 'getPeriodMatsResponse') {
      GetPeriodMatsResponse.encode(
        message.payload.getPeriodMatsResponse,
        writer.uint32(98).fork()
      ).ldelim();
    }
    if (message.payload?.$case === 'getMatResponse') {
      GetMatResponse.encode(
        message.payload.getMatResponse,
        writer.uint32(106).fork()
      ).ldelim();
    }
    if (message.payload?.$case === 'getMatFightsResponse') {
      GetMatFightsResponse.encode(
        message.payload.getMatFightsResponse,
        writer.uint32(114).fork()
      ).ldelim();
    }
    if (message.payload?.$case === 'getRegistrationInfoResponse') {
      GetRegistrationInfoResponse.encode(
        message.payload.getRegistrationInfoResponse,
        writer.uint32(122).fork()
      ).ldelim();
    }
    if (message.payload?.$case === 'getCategoriesResponse') {
      GetCategoriesResponse.encode(
        message.payload.getCategoriesResponse,
        writer.uint32(130).fork()
      ).ldelim();
    }
    if (message.payload?.$case === 'getFightByIdResponse') {
      GetFightByIdResponse.encode(
        message.payload.getFightByIdResponse,
        writer.uint32(138).fork()
      ).ldelim();
    }
    if (message.payload?.$case === 'getFightIdsByCategoryIdsResponse') {
      GetFightIdsByCategoryIdsResponse.encode(
        message.payload.getFightIdsByCategoryIdsResponse,
        writer.uint32(146).fork()
      ).ldelim();
    }
    if (message.payload?.$case === 'getCategoryResponse') {
      GetCategoryResponse.encode(
        message.payload.getCategoryResponse,
        writer.uint32(154).fork()
      ).ldelim();
    }
    if (message.payload?.$case === 'getPeriodFightsByMatsResponse') {
      GetPeriodFightsByMatsResponse.encode(
        message.payload.getPeriodFightsByMatsResponse,
        writer.uint32(162).fork()
      ).ldelim();
    }
    if (message.payload?.$case === 'getFightResulOptionsResponse') {
      GetFightResulOptionsResponse.encode(
        message.payload.getFightResulOptionsResponse,
        writer.uint32(170).fork()
      ).ldelim();
    }
    if (message.payload?.$case === 'getStagesForCategoryResponse') {
      GetStagesForCategoryResponse.encode(
        message.payload.getStagesForCategoryResponse,
        writer.uint32(178).fork()
      ).ldelim();
    }
    if (message.payload?.$case === 'getStageByIdResponse') {
      GetStageByIdResponse.encode(
        message.payload.getStageByIdResponse,
        writer.uint32(186).fork()
      ).ldelim();
    }
    if (message.payload?.$case === 'getStageFightsResponse') {
      GetStageFightsResponse.encode(
        message.payload.getStageFightsResponse,
        writer.uint32(194).fork()
      ).ldelim();
    }
    if (message.payload?.$case === 'getAcademiesResponse') {
      GetAcademiesResponse.encode(
        message.payload.getAcademiesResponse,
        writer.uint32(202).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryServiceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryServiceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payload = {
            $case: 'getDefaultRestrictionsResponse',
            getDefaultRestrictionsResponse:
              GetDefaultRestrictionsResponse.decode(reader, reader.uint32()),
          };
          break;
        case 2:
          message.payload = {
            $case: 'getDefaultFightResultsResponse',
            getDefaultFightResultsResponse:
              GetDefaultFightResultsResponse.decode(reader, reader.uint32()),
          };
          break;
        case 3:
          message.payload = {
            $case: 'getAllCompetitionsResponse',
            getAllCompetitionsResponse: GetAllCompetitionsResponse.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        case 4:
          message.payload = {
            $case: 'generateCategoriesFromRestrictionsResponse',
            generateCategoriesFromRestrictionsResponse:
              GenerateCategoriesFromRestrictionsResponse.decode(
                reader,
                reader.uint32()
              ),
          };
          break;
        case 5:
          message.payload = {
            $case: 'getCompetitionPropertiesResponse',
            getCompetitionPropertiesResponse:
              GetCompetitionPropertiesResponse.decode(reader, reader.uint32()),
          };
          break;
        case 6:
          message.payload = {
            $case: 'getCompetitionInfoTemplateResponse',
            getCompetitionInfoTemplateResponse:
              GetCompetitionInfoTemplateResponse.decode(
                reader,
                reader.uint32()
              ),
          };
          break;
        case 7:
          message.payload = {
            $case: 'getScheduleResponse',
            getScheduleResponse: GetScheduleResponse.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        case 8:
          message.payload = {
            $case: 'getCompetitorsResponse',
            getCompetitorsResponse: GetCompetitorsResponse.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        case 9:
          message.payload = {
            $case: 'getCompetitorResponse',
            getCompetitorResponse: GetCompetitorResponse.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        case 10:
          message.payload = {
            $case: 'getDashboardResponse',
            getDashboardResponse: GetDashboardResponse.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        case 11:
          message.payload = {
            $case: 'getMatsResponse',
            getMatsResponse: GetMatsResponse.decode(reader, reader.uint32()),
          };
          break;
        case 12:
          message.payload = {
            $case: 'getPeriodMatsResponse',
            getPeriodMatsResponse: GetPeriodMatsResponse.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        case 13:
          message.payload = {
            $case: 'getMatResponse',
            getMatResponse: GetMatResponse.decode(reader, reader.uint32()),
          };
          break;
        case 14:
          message.payload = {
            $case: 'getMatFightsResponse',
            getMatFightsResponse: GetMatFightsResponse.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        case 15:
          message.payload = {
            $case: 'getRegistrationInfoResponse',
            getRegistrationInfoResponse: GetRegistrationInfoResponse.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        case 16:
          message.payload = {
            $case: 'getCategoriesResponse',
            getCategoriesResponse: GetCategoriesResponse.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        case 17:
          message.payload = {
            $case: 'getFightByIdResponse',
            getFightByIdResponse: GetFightByIdResponse.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        case 18:
          message.payload = {
            $case: 'getFightIdsByCategoryIdsResponse',
            getFightIdsByCategoryIdsResponse:
              GetFightIdsByCategoryIdsResponse.decode(reader, reader.uint32()),
          };
          break;
        case 19:
          message.payload = {
            $case: 'getCategoryResponse',
            getCategoryResponse: GetCategoryResponse.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        case 20:
          message.payload = {
            $case: 'getPeriodFightsByMatsResponse',
            getPeriodFightsByMatsResponse: GetPeriodFightsByMatsResponse.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        case 21:
          message.payload = {
            $case: 'getFightResulOptionsResponse',
            getFightResulOptionsResponse: GetFightResulOptionsResponse.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        case 22:
          message.payload = {
            $case: 'getStagesForCategoryResponse',
            getStagesForCategoryResponse: GetStagesForCategoryResponse.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        case 23:
          message.payload = {
            $case: 'getStageByIdResponse',
            getStageByIdResponse: GetStageByIdResponse.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        case 24:
          message.payload = {
            $case: 'getStageFightsResponse',
            getStageFightsResponse: GetStageFightsResponse.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        case 25:
          message.payload = {
            $case: 'getAcademiesResponse',
            getAcademiesResponse: GetAcademiesResponse.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryServiceResponse {
    return {
      payload: isSet(object.getDefaultRestrictionsResponse)
        ? {
            $case: 'getDefaultRestrictionsResponse',
            getDefaultRestrictionsResponse:
              GetDefaultRestrictionsResponse.fromJSON(
                object.getDefaultRestrictionsResponse
              ),
          }
        : isSet(object.getDefaultFightResultsResponse)
        ? {
            $case: 'getDefaultFightResultsResponse',
            getDefaultFightResultsResponse:
              GetDefaultFightResultsResponse.fromJSON(
                object.getDefaultFightResultsResponse
              ),
          }
        : isSet(object.getAllCompetitionsResponse)
        ? {
            $case: 'getAllCompetitionsResponse',
            getAllCompetitionsResponse: GetAllCompetitionsResponse.fromJSON(
              object.getAllCompetitionsResponse
            ),
          }
        : isSet(object.generateCategoriesFromRestrictionsResponse)
        ? {
            $case: 'generateCategoriesFromRestrictionsResponse',
            generateCategoriesFromRestrictionsResponse:
              GenerateCategoriesFromRestrictionsResponse.fromJSON(
                object.generateCategoriesFromRestrictionsResponse
              ),
          }
        : isSet(object.getCompetitionPropertiesResponse)
        ? {
            $case: 'getCompetitionPropertiesResponse',
            getCompetitionPropertiesResponse:
              GetCompetitionPropertiesResponse.fromJSON(
                object.getCompetitionPropertiesResponse
              ),
          }
        : isSet(object.getCompetitionInfoTemplateResponse)
        ? {
            $case: 'getCompetitionInfoTemplateResponse',
            getCompetitionInfoTemplateResponse:
              GetCompetitionInfoTemplateResponse.fromJSON(
                object.getCompetitionInfoTemplateResponse
              ),
          }
        : isSet(object.getScheduleResponse)
        ? {
            $case: 'getScheduleResponse',
            getScheduleResponse: GetScheduleResponse.fromJSON(
              object.getScheduleResponse
            ),
          }
        : isSet(object.getCompetitorsResponse)
        ? {
            $case: 'getCompetitorsResponse',
            getCompetitorsResponse: GetCompetitorsResponse.fromJSON(
              object.getCompetitorsResponse
            ),
          }
        : isSet(object.getCompetitorResponse)
        ? {
            $case: 'getCompetitorResponse',
            getCompetitorResponse: GetCompetitorResponse.fromJSON(
              object.getCompetitorResponse
            ),
          }
        : isSet(object.getDashboardResponse)
        ? {
            $case: 'getDashboardResponse',
            getDashboardResponse: GetDashboardResponse.fromJSON(
              object.getDashboardResponse
            ),
          }
        : isSet(object.getMatsResponse)
        ? {
            $case: 'getMatsResponse',
            getMatsResponse: GetMatsResponse.fromJSON(object.getMatsResponse),
          }
        : isSet(object.getPeriodMatsResponse)
        ? {
            $case: 'getPeriodMatsResponse',
            getPeriodMatsResponse: GetPeriodMatsResponse.fromJSON(
              object.getPeriodMatsResponse
            ),
          }
        : isSet(object.getMatResponse)
        ? {
            $case: 'getMatResponse',
            getMatResponse: GetMatResponse.fromJSON(object.getMatResponse),
          }
        : isSet(object.getMatFightsResponse)
        ? {
            $case: 'getMatFightsResponse',
            getMatFightsResponse: GetMatFightsResponse.fromJSON(
              object.getMatFightsResponse
            ),
          }
        : isSet(object.getRegistrationInfoResponse)
        ? {
            $case: 'getRegistrationInfoResponse',
            getRegistrationInfoResponse: GetRegistrationInfoResponse.fromJSON(
              object.getRegistrationInfoResponse
            ),
          }
        : isSet(object.getCategoriesResponse)
        ? {
            $case: 'getCategoriesResponse',
            getCategoriesResponse: GetCategoriesResponse.fromJSON(
              object.getCategoriesResponse
            ),
          }
        : isSet(object.getFightByIdResponse)
        ? {
            $case: 'getFightByIdResponse',
            getFightByIdResponse: GetFightByIdResponse.fromJSON(
              object.getFightByIdResponse
            ),
          }
        : isSet(object.getFightIdsByCategoryIdsResponse)
        ? {
            $case: 'getFightIdsByCategoryIdsResponse',
            getFightIdsByCategoryIdsResponse:
              GetFightIdsByCategoryIdsResponse.fromJSON(
                object.getFightIdsByCategoryIdsResponse
              ),
          }
        : isSet(object.getCategoryResponse)
        ? {
            $case: 'getCategoryResponse',
            getCategoryResponse: GetCategoryResponse.fromJSON(
              object.getCategoryResponse
            ),
          }
        : isSet(object.getPeriodFightsByMatsResponse)
        ? {
            $case: 'getPeriodFightsByMatsResponse',
            getPeriodFightsByMatsResponse:
              GetPeriodFightsByMatsResponse.fromJSON(
                object.getPeriodFightsByMatsResponse
              ),
          }
        : isSet(object.getFightResulOptionsResponse)
        ? {
            $case: 'getFightResulOptionsResponse',
            getFightResulOptionsResponse: GetFightResulOptionsResponse.fromJSON(
              object.getFightResulOptionsResponse
            ),
          }
        : isSet(object.getStagesForCategoryResponse)
        ? {
            $case: 'getStagesForCategoryResponse',
            getStagesForCategoryResponse: GetStagesForCategoryResponse.fromJSON(
              object.getStagesForCategoryResponse
            ),
          }
        : isSet(object.getStageByIdResponse)
        ? {
            $case: 'getStageByIdResponse',
            getStageByIdResponse: GetStageByIdResponse.fromJSON(
              object.getStageByIdResponse
            ),
          }
        : isSet(object.getStageFightsResponse)
        ? {
            $case: 'getStageFightsResponse',
            getStageFightsResponse: GetStageFightsResponse.fromJSON(
              object.getStageFightsResponse
            ),
          }
        : isSet(object.getAcademiesResponse)
        ? {
            $case: 'getAcademiesResponse',
            getAcademiesResponse: GetAcademiesResponse.fromJSON(
              object.getAcademiesResponse
            ),
          }
        : undefined,
    };
  },

  toJSON(message: QueryServiceResponse): unknown {
    const obj: any = {};
    message.payload?.$case === 'getDefaultRestrictionsResponse' &&
      (obj.getDefaultRestrictionsResponse = message.payload
        ?.getDefaultRestrictionsResponse
        ? GetDefaultRestrictionsResponse.toJSON(
            message.payload?.getDefaultRestrictionsResponse
          )
        : undefined);
    message.payload?.$case === 'getDefaultFightResultsResponse' &&
      (obj.getDefaultFightResultsResponse = message.payload
        ?.getDefaultFightResultsResponse
        ? GetDefaultFightResultsResponse.toJSON(
            message.payload?.getDefaultFightResultsResponse
          )
        : undefined);
    message.payload?.$case === 'getAllCompetitionsResponse' &&
      (obj.getAllCompetitionsResponse = message.payload
        ?.getAllCompetitionsResponse
        ? GetAllCompetitionsResponse.toJSON(
            message.payload?.getAllCompetitionsResponse
          )
        : undefined);
    message.payload?.$case === 'generateCategoriesFromRestrictionsResponse' &&
      (obj.generateCategoriesFromRestrictionsResponse = message.payload
        ?.generateCategoriesFromRestrictionsResponse
        ? GenerateCategoriesFromRestrictionsResponse.toJSON(
            message.payload?.generateCategoriesFromRestrictionsResponse
          )
        : undefined);
    message.payload?.$case === 'getCompetitionPropertiesResponse' &&
      (obj.getCompetitionPropertiesResponse = message.payload
        ?.getCompetitionPropertiesResponse
        ? GetCompetitionPropertiesResponse.toJSON(
            message.payload?.getCompetitionPropertiesResponse
          )
        : undefined);
    message.payload?.$case === 'getCompetitionInfoTemplateResponse' &&
      (obj.getCompetitionInfoTemplateResponse = message.payload
        ?.getCompetitionInfoTemplateResponse
        ? GetCompetitionInfoTemplateResponse.toJSON(
            message.payload?.getCompetitionInfoTemplateResponse
          )
        : undefined);
    message.payload?.$case === 'getScheduleResponse' &&
      (obj.getScheduleResponse = message.payload?.getScheduleResponse
        ? GetScheduleResponse.toJSON(message.payload?.getScheduleResponse)
        : undefined);
    message.payload?.$case === 'getCompetitorsResponse' &&
      (obj.getCompetitorsResponse = message.payload?.getCompetitorsResponse
        ? GetCompetitorsResponse.toJSON(message.payload?.getCompetitorsResponse)
        : undefined);
    message.payload?.$case === 'getCompetitorResponse' &&
      (obj.getCompetitorResponse = message.payload?.getCompetitorResponse
        ? GetCompetitorResponse.toJSON(message.payload?.getCompetitorResponse)
        : undefined);
    message.payload?.$case === 'getDashboardResponse' &&
      (obj.getDashboardResponse = message.payload?.getDashboardResponse
        ? GetDashboardResponse.toJSON(message.payload?.getDashboardResponse)
        : undefined);
    message.payload?.$case === 'getMatsResponse' &&
      (obj.getMatsResponse = message.payload?.getMatsResponse
        ? GetMatsResponse.toJSON(message.payload?.getMatsResponse)
        : undefined);
    message.payload?.$case === 'getPeriodMatsResponse' &&
      (obj.getPeriodMatsResponse = message.payload?.getPeriodMatsResponse
        ? GetPeriodMatsResponse.toJSON(message.payload?.getPeriodMatsResponse)
        : undefined);
    message.payload?.$case === 'getMatResponse' &&
      (obj.getMatResponse = message.payload?.getMatResponse
        ? GetMatResponse.toJSON(message.payload?.getMatResponse)
        : undefined);
    message.payload?.$case === 'getMatFightsResponse' &&
      (obj.getMatFightsResponse = message.payload?.getMatFightsResponse
        ? GetMatFightsResponse.toJSON(message.payload?.getMatFightsResponse)
        : undefined);
    message.payload?.$case === 'getRegistrationInfoResponse' &&
      (obj.getRegistrationInfoResponse = message.payload
        ?.getRegistrationInfoResponse
        ? GetRegistrationInfoResponse.toJSON(
            message.payload?.getRegistrationInfoResponse
          )
        : undefined);
    message.payload?.$case === 'getCategoriesResponse' &&
      (obj.getCategoriesResponse = message.payload?.getCategoriesResponse
        ? GetCategoriesResponse.toJSON(message.payload?.getCategoriesResponse)
        : undefined);
    message.payload?.$case === 'getFightByIdResponse' &&
      (obj.getFightByIdResponse = message.payload?.getFightByIdResponse
        ? GetFightByIdResponse.toJSON(message.payload?.getFightByIdResponse)
        : undefined);
    message.payload?.$case === 'getFightIdsByCategoryIdsResponse' &&
      (obj.getFightIdsByCategoryIdsResponse = message.payload
        ?.getFightIdsByCategoryIdsResponse
        ? GetFightIdsByCategoryIdsResponse.toJSON(
            message.payload?.getFightIdsByCategoryIdsResponse
          )
        : undefined);
    message.payload?.$case === 'getCategoryResponse' &&
      (obj.getCategoryResponse = message.payload?.getCategoryResponse
        ? GetCategoryResponse.toJSON(message.payload?.getCategoryResponse)
        : undefined);
    message.payload?.$case === 'getPeriodFightsByMatsResponse' &&
      (obj.getPeriodFightsByMatsResponse = message.payload
        ?.getPeriodFightsByMatsResponse
        ? GetPeriodFightsByMatsResponse.toJSON(
            message.payload?.getPeriodFightsByMatsResponse
          )
        : undefined);
    message.payload?.$case === 'getFightResulOptionsResponse' &&
      (obj.getFightResulOptionsResponse = message.payload
        ?.getFightResulOptionsResponse
        ? GetFightResulOptionsResponse.toJSON(
            message.payload?.getFightResulOptionsResponse
          )
        : undefined);
    message.payload?.$case === 'getStagesForCategoryResponse' &&
      (obj.getStagesForCategoryResponse = message.payload
        ?.getStagesForCategoryResponse
        ? GetStagesForCategoryResponse.toJSON(
            message.payload?.getStagesForCategoryResponse
          )
        : undefined);
    message.payload?.$case === 'getStageByIdResponse' &&
      (obj.getStageByIdResponse = message.payload?.getStageByIdResponse
        ? GetStageByIdResponse.toJSON(message.payload?.getStageByIdResponse)
        : undefined);
    message.payload?.$case === 'getStageFightsResponse' &&
      (obj.getStageFightsResponse = message.payload?.getStageFightsResponse
        ? GetStageFightsResponse.toJSON(message.payload?.getStageFightsResponse)
        : undefined);
    message.payload?.$case === 'getAcademiesResponse' &&
      (obj.getAcademiesResponse = message.payload?.getAcademiesResponse
        ? GetAcademiesResponse.toJSON(message.payload?.getAcademiesResponse)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryServiceResponse>, I>>(
    object: I
  ): QueryServiceResponse {
    const message = createBaseQueryServiceResponse();
    if (
      object.payload?.$case === 'getDefaultRestrictionsResponse' &&
      object.payload?.getDefaultRestrictionsResponse !== undefined &&
      object.payload?.getDefaultRestrictionsResponse !== null
    ) {
      message.payload = {
        $case: 'getDefaultRestrictionsResponse',
        getDefaultRestrictionsResponse:
          GetDefaultRestrictionsResponse.fromPartial(
            object.payload.getDefaultRestrictionsResponse
          ),
      };
    }
    if (
      object.payload?.$case === 'getDefaultFightResultsResponse' &&
      object.payload?.getDefaultFightResultsResponse !== undefined &&
      object.payload?.getDefaultFightResultsResponse !== null
    ) {
      message.payload = {
        $case: 'getDefaultFightResultsResponse',
        getDefaultFightResultsResponse:
          GetDefaultFightResultsResponse.fromPartial(
            object.payload.getDefaultFightResultsResponse
          ),
      };
    }
    if (
      object.payload?.$case === 'getAllCompetitionsResponse' &&
      object.payload?.getAllCompetitionsResponse !== undefined &&
      object.payload?.getAllCompetitionsResponse !== null
    ) {
      message.payload = {
        $case: 'getAllCompetitionsResponse',
        getAllCompetitionsResponse: GetAllCompetitionsResponse.fromPartial(
          object.payload.getAllCompetitionsResponse
        ),
      };
    }
    if (
      object.payload?.$case === 'generateCategoriesFromRestrictionsResponse' &&
      object.payload?.generateCategoriesFromRestrictionsResponse !==
        undefined &&
      object.payload?.generateCategoriesFromRestrictionsResponse !== null
    ) {
      message.payload = {
        $case: 'generateCategoriesFromRestrictionsResponse',
        generateCategoriesFromRestrictionsResponse:
          GenerateCategoriesFromRestrictionsResponse.fromPartial(
            object.payload.generateCategoriesFromRestrictionsResponse
          ),
      };
    }
    if (
      object.payload?.$case === 'getCompetitionPropertiesResponse' &&
      object.payload?.getCompetitionPropertiesResponse !== undefined &&
      object.payload?.getCompetitionPropertiesResponse !== null
    ) {
      message.payload = {
        $case: 'getCompetitionPropertiesResponse',
        getCompetitionPropertiesResponse:
          GetCompetitionPropertiesResponse.fromPartial(
            object.payload.getCompetitionPropertiesResponse
          ),
      };
    }
    if (
      object.payload?.$case === 'getCompetitionInfoTemplateResponse' &&
      object.payload?.getCompetitionInfoTemplateResponse !== undefined &&
      object.payload?.getCompetitionInfoTemplateResponse !== null
    ) {
      message.payload = {
        $case: 'getCompetitionInfoTemplateResponse',
        getCompetitionInfoTemplateResponse:
          GetCompetitionInfoTemplateResponse.fromPartial(
            object.payload.getCompetitionInfoTemplateResponse
          ),
      };
    }
    if (
      object.payload?.$case === 'getScheduleResponse' &&
      object.payload?.getScheduleResponse !== undefined &&
      object.payload?.getScheduleResponse !== null
    ) {
      message.payload = {
        $case: 'getScheduleResponse',
        getScheduleResponse: GetScheduleResponse.fromPartial(
          object.payload.getScheduleResponse
        ),
      };
    }
    if (
      object.payload?.$case === 'getCompetitorsResponse' &&
      object.payload?.getCompetitorsResponse !== undefined &&
      object.payload?.getCompetitorsResponse !== null
    ) {
      message.payload = {
        $case: 'getCompetitorsResponse',
        getCompetitorsResponse: GetCompetitorsResponse.fromPartial(
          object.payload.getCompetitorsResponse
        ),
      };
    }
    if (
      object.payload?.$case === 'getCompetitorResponse' &&
      object.payload?.getCompetitorResponse !== undefined &&
      object.payload?.getCompetitorResponse !== null
    ) {
      message.payload = {
        $case: 'getCompetitorResponse',
        getCompetitorResponse: GetCompetitorResponse.fromPartial(
          object.payload.getCompetitorResponse
        ),
      };
    }
    if (
      object.payload?.$case === 'getDashboardResponse' &&
      object.payload?.getDashboardResponse !== undefined &&
      object.payload?.getDashboardResponse !== null
    ) {
      message.payload = {
        $case: 'getDashboardResponse',
        getDashboardResponse: GetDashboardResponse.fromPartial(
          object.payload.getDashboardResponse
        ),
      };
    }
    if (
      object.payload?.$case === 'getMatsResponse' &&
      object.payload?.getMatsResponse !== undefined &&
      object.payload?.getMatsResponse !== null
    ) {
      message.payload = {
        $case: 'getMatsResponse',
        getMatsResponse: GetMatsResponse.fromPartial(
          object.payload.getMatsResponse
        ),
      };
    }
    if (
      object.payload?.$case === 'getPeriodMatsResponse' &&
      object.payload?.getPeriodMatsResponse !== undefined &&
      object.payload?.getPeriodMatsResponse !== null
    ) {
      message.payload = {
        $case: 'getPeriodMatsResponse',
        getPeriodMatsResponse: GetPeriodMatsResponse.fromPartial(
          object.payload.getPeriodMatsResponse
        ),
      };
    }
    if (
      object.payload?.$case === 'getMatResponse' &&
      object.payload?.getMatResponse !== undefined &&
      object.payload?.getMatResponse !== null
    ) {
      message.payload = {
        $case: 'getMatResponse',
        getMatResponse: GetMatResponse.fromPartial(
          object.payload.getMatResponse
        ),
      };
    }
    if (
      object.payload?.$case === 'getMatFightsResponse' &&
      object.payload?.getMatFightsResponse !== undefined &&
      object.payload?.getMatFightsResponse !== null
    ) {
      message.payload = {
        $case: 'getMatFightsResponse',
        getMatFightsResponse: GetMatFightsResponse.fromPartial(
          object.payload.getMatFightsResponse
        ),
      };
    }
    if (
      object.payload?.$case === 'getRegistrationInfoResponse' &&
      object.payload?.getRegistrationInfoResponse !== undefined &&
      object.payload?.getRegistrationInfoResponse !== null
    ) {
      message.payload = {
        $case: 'getRegistrationInfoResponse',
        getRegistrationInfoResponse: GetRegistrationInfoResponse.fromPartial(
          object.payload.getRegistrationInfoResponse
        ),
      };
    }
    if (
      object.payload?.$case === 'getCategoriesResponse' &&
      object.payload?.getCategoriesResponse !== undefined &&
      object.payload?.getCategoriesResponse !== null
    ) {
      message.payload = {
        $case: 'getCategoriesResponse',
        getCategoriesResponse: GetCategoriesResponse.fromPartial(
          object.payload.getCategoriesResponse
        ),
      };
    }
    if (
      object.payload?.$case === 'getFightByIdResponse' &&
      object.payload?.getFightByIdResponse !== undefined &&
      object.payload?.getFightByIdResponse !== null
    ) {
      message.payload = {
        $case: 'getFightByIdResponse',
        getFightByIdResponse: GetFightByIdResponse.fromPartial(
          object.payload.getFightByIdResponse
        ),
      };
    }
    if (
      object.payload?.$case === 'getFightIdsByCategoryIdsResponse' &&
      object.payload?.getFightIdsByCategoryIdsResponse !== undefined &&
      object.payload?.getFightIdsByCategoryIdsResponse !== null
    ) {
      message.payload = {
        $case: 'getFightIdsByCategoryIdsResponse',
        getFightIdsByCategoryIdsResponse:
          GetFightIdsByCategoryIdsResponse.fromPartial(
            object.payload.getFightIdsByCategoryIdsResponse
          ),
      };
    }
    if (
      object.payload?.$case === 'getCategoryResponse' &&
      object.payload?.getCategoryResponse !== undefined &&
      object.payload?.getCategoryResponse !== null
    ) {
      message.payload = {
        $case: 'getCategoryResponse',
        getCategoryResponse: GetCategoryResponse.fromPartial(
          object.payload.getCategoryResponse
        ),
      };
    }
    if (
      object.payload?.$case === 'getPeriodFightsByMatsResponse' &&
      object.payload?.getPeriodFightsByMatsResponse !== undefined &&
      object.payload?.getPeriodFightsByMatsResponse !== null
    ) {
      message.payload = {
        $case: 'getPeriodFightsByMatsResponse',
        getPeriodFightsByMatsResponse:
          GetPeriodFightsByMatsResponse.fromPartial(
            object.payload.getPeriodFightsByMatsResponse
          ),
      };
    }
    if (
      object.payload?.$case === 'getFightResulOptionsResponse' &&
      object.payload?.getFightResulOptionsResponse !== undefined &&
      object.payload?.getFightResulOptionsResponse !== null
    ) {
      message.payload = {
        $case: 'getFightResulOptionsResponse',
        getFightResulOptionsResponse: GetFightResulOptionsResponse.fromPartial(
          object.payload.getFightResulOptionsResponse
        ),
      };
    }
    if (
      object.payload?.$case === 'getStagesForCategoryResponse' &&
      object.payload?.getStagesForCategoryResponse !== undefined &&
      object.payload?.getStagesForCategoryResponse !== null
    ) {
      message.payload = {
        $case: 'getStagesForCategoryResponse',
        getStagesForCategoryResponse: GetStagesForCategoryResponse.fromPartial(
          object.payload.getStagesForCategoryResponse
        ),
      };
    }
    if (
      object.payload?.$case === 'getStageByIdResponse' &&
      object.payload?.getStageByIdResponse !== undefined &&
      object.payload?.getStageByIdResponse !== null
    ) {
      message.payload = {
        $case: 'getStageByIdResponse',
        getStageByIdResponse: GetStageByIdResponse.fromPartial(
          object.payload.getStageByIdResponse
        ),
      };
    }
    if (
      object.payload?.$case === 'getStageFightsResponse' &&
      object.payload?.getStageFightsResponse !== undefined &&
      object.payload?.getStageFightsResponse !== null
    ) {
      message.payload = {
        $case: 'getStageFightsResponse',
        getStageFightsResponse: GetStageFightsResponse.fromPartial(
          object.payload.getStageFightsResponse
        ),
      };
    }
    if (
      object.payload?.$case === 'getAcademiesResponse' &&
      object.payload?.getAcademiesResponse !== undefined &&
      object.payload?.getAcademiesResponse !== null
    ) {
      message.payload = {
        $case: 'getAcademiesResponse',
        getAcademiesResponse: GetAcademiesResponse.fromPartial(
          object.payload.getAcademiesResponse
        ),
      };
    }
    return message;
  },
};

function createBaseGetDefaultRestrictionsResponse(): GetDefaultRestrictionsResponse {
  return { restrictions: [] };
}

export const GetDefaultRestrictionsResponse = {
  encode(
    message: GetDefaultRestrictionsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.restrictions) {
      CategoryRestriction.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetDefaultRestrictionsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetDefaultRestrictionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.restrictions.push(
            CategoryRestriction.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetDefaultRestrictionsResponse {
    return {
      restrictions: Array.isArray(object?.restrictions)
        ? object.restrictions.map((e: any) => CategoryRestriction.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GetDefaultRestrictionsResponse): unknown {
    const obj: any = {};
    if (message.restrictions) {
      obj.restrictions = message.restrictions.map((e) =>
        e ? CategoryRestriction.toJSON(e) : undefined
      );
    } else {
      obj.restrictions = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetDefaultRestrictionsResponse>, I>>(
    object: I
  ): GetDefaultRestrictionsResponse {
    const message = createBaseGetDefaultRestrictionsResponse();
    message.restrictions =
      object.restrictions?.map((e) => CategoryRestriction.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGetDefaultFightResultsResponse(): GetDefaultFightResultsResponse {
  return { fightResultOptions: [] };
}

export const GetDefaultFightResultsResponse = {
  encode(
    message: GetDefaultFightResultsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.fightResultOptions) {
      FightResultOption.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetDefaultFightResultsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetDefaultFightResultsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fightResultOptions.push(
            FightResultOption.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetDefaultFightResultsResponse {
    return {
      fightResultOptions: Array.isArray(object?.fightResultOptions)
        ? object.fightResultOptions.map((e: any) =>
            FightResultOption.fromJSON(e)
          )
        : [],
    };
  },

  toJSON(message: GetDefaultFightResultsResponse): unknown {
    const obj: any = {};
    if (message.fightResultOptions) {
      obj.fightResultOptions = message.fightResultOptions.map((e) =>
        e ? FightResultOption.toJSON(e) : undefined
      );
    } else {
      obj.fightResultOptions = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetDefaultFightResultsResponse>, I>>(
    object: I
  ): GetDefaultFightResultsResponse {
    const message = createBaseGetDefaultFightResultsResponse();
    message.fightResultOptions =
      object.fightResultOptions?.map((e) => FightResultOption.fromPartial(e)) ||
      [];
    return message;
  },
};

function createBaseGetAllCompetitionsResponse(): GetAllCompetitionsResponse {
  return { managedCompetitions: [] };
}

export const GetAllCompetitionsResponse = {
  encode(
    message: GetAllCompetitionsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.managedCompetitions) {
      ManagedCompetition.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetAllCompetitionsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAllCompetitionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.managedCompetitions.push(
            ManagedCompetition.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetAllCompetitionsResponse {
    return {
      managedCompetitions: Array.isArray(object?.managedCompetitions)
        ? object.managedCompetitions.map((e: any) =>
            ManagedCompetition.fromJSON(e)
          )
        : [],
    };
  },

  toJSON(message: GetAllCompetitionsResponse): unknown {
    const obj: any = {};
    if (message.managedCompetitions) {
      obj.managedCompetitions = message.managedCompetitions.map((e) =>
        e ? ManagedCompetition.toJSON(e) : undefined
      );
    } else {
      obj.managedCompetitions = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetAllCompetitionsResponse>, I>>(
    object: I
  ): GetAllCompetitionsResponse {
    const message = createBaseGetAllCompetitionsResponse();
    message.managedCompetitions =
      object.managedCompetitions?.map((e) =>
        ManagedCompetition.fromPartial(e)
      ) || [];
    return message;
  },
};

function createBaseGenerateCategoriesFromRestrictionsResponse(): GenerateCategoriesFromRestrictionsResponse {
  return { categories: [] };
}

export const GenerateCategoriesFromRestrictionsResponse = {
  encode(
    message: GenerateCategoriesFromRestrictionsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.categories) {
      CategoryDescriptor.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GenerateCategoriesFromRestrictionsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenerateCategoriesFromRestrictionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.categories.push(
            CategoryDescriptor.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenerateCategoriesFromRestrictionsResponse {
    return {
      categories: Array.isArray(object?.categories)
        ? object.categories.map((e: any) => CategoryDescriptor.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GenerateCategoriesFromRestrictionsResponse): unknown {
    const obj: any = {};
    if (message.categories) {
      obj.categories = message.categories.map((e) =>
        e ? CategoryDescriptor.toJSON(e) : undefined
      );
    } else {
      obj.categories = [];
    }
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<GenerateCategoriesFromRestrictionsResponse>, I>
  >(object: I): GenerateCategoriesFromRestrictionsResponse {
    const message = createBaseGenerateCategoriesFromRestrictionsResponse();
    message.categories =
      object.categories?.map((e) => CategoryDescriptor.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGetCompetitionPropertiesResponse(): GetCompetitionPropertiesResponse {
  return { competitionProperties: undefined };
}

export const GetCompetitionPropertiesResponse = {
  encode(
    message: GetCompetitionPropertiesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.competitionProperties !== undefined) {
      CompetitionProperties.encode(
        message.competitionProperties,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetCompetitionPropertiesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetCompetitionPropertiesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.competitionProperties = CompetitionProperties.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetCompetitionPropertiesResponse {
    return {
      competitionProperties: isSet(object.competitionProperties)
        ? CompetitionProperties.fromJSON(object.competitionProperties)
        : undefined,
    };
  },

  toJSON(message: GetCompetitionPropertiesResponse): unknown {
    const obj: any = {};
    message.competitionProperties !== undefined &&
      (obj.competitionProperties = message.competitionProperties
        ? CompetitionProperties.toJSON(message.competitionProperties)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<GetCompetitionPropertiesResponse>, I>
  >(object: I): GetCompetitionPropertiesResponse {
    const message = createBaseGetCompetitionPropertiesResponse();
    message.competitionProperties =
      object.competitionProperties !== undefined &&
      object.competitionProperties !== null
        ? CompetitionProperties.fromPartial(object.competitionProperties)
        : undefined;
    return message;
  },
};

function createBaseGetCompetitionInfoTemplateResponse(): GetCompetitionInfoTemplateResponse {
  return { template: undefined };
}

export const GetCompetitionInfoTemplateResponse = {
  encode(
    message: GetCompetitionInfoTemplateResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.template !== undefined) {
      writer.uint32(10).string(message.template);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetCompetitionInfoTemplateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetCompetitionInfoTemplateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.template = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetCompetitionInfoTemplateResponse {
    return {
      template: isSet(object.template) ? String(object.template) : undefined,
    };
  },

  toJSON(message: GetCompetitionInfoTemplateResponse): unknown {
    const obj: any = {};
    message.template !== undefined && (obj.template = message.template);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<GetCompetitionInfoTemplateResponse>, I>
  >(object: I): GetCompetitionInfoTemplateResponse {
    const message = createBaseGetCompetitionInfoTemplateResponse();
    message.template = object.template ?? undefined;
    return message;
  },
};

function createBaseGetScheduleResponse(): GetScheduleResponse {
  return { schedule: undefined };
}

export const GetScheduleResponse = {
  encode(
    message: GetScheduleResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.schedule !== undefined) {
      Schedule.encode(message.schedule, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetScheduleResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetScheduleResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.schedule = Schedule.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetScheduleResponse {
    return {
      schedule: isSet(object.schedule)
        ? Schedule.fromJSON(object.schedule)
        : undefined,
    };
  },

  toJSON(message: GetScheduleResponse): unknown {
    const obj: any = {};
    message.schedule !== undefined &&
      (obj.schedule = message.schedule
        ? Schedule.toJSON(message.schedule)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetScheduleResponse>, I>>(
    object: I
  ): GetScheduleResponse {
    const message = createBaseGetScheduleResponse();
    message.schedule =
      object.schedule !== undefined && object.schedule !== null
        ? Schedule.fromPartial(object.schedule)
        : undefined;
    return message;
  },
};

function createBaseGetCompetitorsResponse(): GetCompetitorsResponse {
  return { pageInfo: undefined, competitors: [] };
}

export const GetCompetitorsResponse = {
  encode(
    message: GetCompetitorsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pageInfo !== undefined) {
      PageInfo.encode(message.pageInfo, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.competitors) {
      Competitor.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetCompetitorsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetCompetitorsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pageInfo = PageInfo.decode(reader, reader.uint32());
          break;
        case 2:
          message.competitors.push(Competitor.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetCompetitorsResponse {
    return {
      pageInfo: isSet(object.pageInfo)
        ? PageInfo.fromJSON(object.pageInfo)
        : undefined,
      competitors: Array.isArray(object?.competitors)
        ? object.competitors.map((e: any) => Competitor.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GetCompetitorsResponse): unknown {
    const obj: any = {};
    message.pageInfo !== undefined &&
      (obj.pageInfo = message.pageInfo
        ? PageInfo.toJSON(message.pageInfo)
        : undefined);
    if (message.competitors) {
      obj.competitors = message.competitors.map((e) =>
        e ? Competitor.toJSON(e) : undefined
      );
    } else {
      obj.competitors = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetCompetitorsResponse>, I>>(
    object: I
  ): GetCompetitorsResponse {
    const message = createBaseGetCompetitorsResponse();
    message.pageInfo =
      object.pageInfo !== undefined && object.pageInfo !== null
        ? PageInfo.fromPartial(object.pageInfo)
        : undefined;
    message.competitors =
      object.competitors?.map((e) => Competitor.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGetCompetitorResponse(): GetCompetitorResponse {
  return { competitor: undefined };
}

export const GetCompetitorResponse = {
  encode(
    message: GetCompetitorResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.competitor !== undefined) {
      Competitor.encode(message.competitor, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetCompetitorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetCompetitorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.competitor = Competitor.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetCompetitorResponse {
    return {
      competitor: isSet(object.competitor)
        ? Competitor.fromJSON(object.competitor)
        : undefined,
    };
  },

  toJSON(message: GetCompetitorResponse): unknown {
    const obj: any = {};
    message.competitor !== undefined &&
      (obj.competitor = message.competitor
        ? Competitor.toJSON(message.competitor)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetCompetitorResponse>, I>>(
    object: I
  ): GetCompetitorResponse {
    const message = createBaseGetCompetitorResponse();
    message.competitor =
      object.competitor !== undefined && object.competitor !== null
        ? Competitor.fromPartial(object.competitor)
        : undefined;
    return message;
  },
};

function createBaseGetDashboardResponse(): GetDashboardResponse {
  return { periods: [] };
}

export const GetDashboardResponse = {
  encode(
    message: GetDashboardResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.periods) {
      Period.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetDashboardResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetDashboardResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.periods.push(Period.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetDashboardResponse {
    return {
      periods: Array.isArray(object?.periods)
        ? object.periods.map((e: any) => Period.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GetDashboardResponse): unknown {
    const obj: any = {};
    if (message.periods) {
      obj.periods = message.periods.map((e) =>
        e ? Period.toJSON(e) : undefined
      );
    } else {
      obj.periods = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetDashboardResponse>, I>>(
    object: I
  ): GetDashboardResponse {
    const message = createBaseGetDashboardResponse();
    message.periods = object.periods?.map((e) => Period.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGetMatsResponse(): GetMatsResponse {
  return { mats: [] };
}

export const GetMatsResponse = {
  encode(
    message: GetMatsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.mats) {
      MatDescription.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetMatsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetMatsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mats.push(MatDescription.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetMatsResponse {
    return {
      mats: Array.isArray(object?.mats)
        ? object.mats.map((e: any) => MatDescription.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GetMatsResponse): unknown {
    const obj: any = {};
    if (message.mats) {
      obj.mats = message.mats.map((e) =>
        e ? MatDescription.toJSON(e) : undefined
      );
    } else {
      obj.mats = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetMatsResponse>, I>>(
    object: I
  ): GetMatsResponse {
    const message = createBaseGetMatsResponse();
    message.mats = object.mats?.map((e) => MatDescription.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGetPeriodMatsResponse(): GetPeriodMatsResponse {
  return { matsQueryResults: undefined };
}

export const GetPeriodMatsResponse = {
  encode(
    message: GetPeriodMatsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.matsQueryResults !== undefined) {
      MatsQueryResult.encode(
        message.matsQueryResults,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetPeriodMatsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetPeriodMatsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.matsQueryResults = MatsQueryResult.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetPeriodMatsResponse {
    return {
      matsQueryResults: isSet(object.matsQueryResults)
        ? MatsQueryResult.fromJSON(object.matsQueryResults)
        : undefined,
    };
  },

  toJSON(message: GetPeriodMatsResponse): unknown {
    const obj: any = {};
    message.matsQueryResults !== undefined &&
      (obj.matsQueryResults = message.matsQueryResults
        ? MatsQueryResult.toJSON(message.matsQueryResults)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetPeriodMatsResponse>, I>>(
    object: I
  ): GetPeriodMatsResponse {
    const message = createBaseGetPeriodMatsResponse();
    message.matsQueryResults =
      object.matsQueryResults !== undefined && object.matsQueryResults !== null
        ? MatsQueryResult.fromPartial(object.matsQueryResults)
        : undefined;
    return message;
  },
};

function createBaseGetMatResponse(): GetMatResponse {
  return { mat: undefined };
}

export const GetMatResponse = {
  encode(
    message: GetMatResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.mat !== undefined) {
      MatDescription.encode(message.mat, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetMatResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetMatResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mat = MatDescription.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetMatResponse {
    return {
      mat: isSet(object.mat) ? MatDescription.fromJSON(object.mat) : undefined,
    };
  },

  toJSON(message: GetMatResponse): unknown {
    const obj: any = {};
    message.mat !== undefined &&
      (obj.mat = message.mat ? MatDescription.toJSON(message.mat) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetMatResponse>, I>>(
    object: I
  ): GetMatResponse {
    const message = createBaseGetMatResponse();
    message.mat =
      object.mat !== undefined && object.mat !== null
        ? MatDescription.fromPartial(object.mat)
        : undefined;
    return message;
  },
};

function createBaseGetMatFightsResponse(): GetMatFightsResponse {
  return { matFights: undefined };
}

export const GetMatFightsResponse = {
  encode(
    message: GetMatFightsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.matFights !== undefined) {
      MatFightsQueryResult.encode(
        message.matFights,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetMatFightsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetMatFightsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.matFights = MatFightsQueryResult.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetMatFightsResponse {
    return {
      matFights: isSet(object.matFights)
        ? MatFightsQueryResult.fromJSON(object.matFights)
        : undefined,
    };
  },

  toJSON(message: GetMatFightsResponse): unknown {
    const obj: any = {};
    message.matFights !== undefined &&
      (obj.matFights = message.matFights
        ? MatFightsQueryResult.toJSON(message.matFights)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetMatFightsResponse>, I>>(
    object: I
  ): GetMatFightsResponse {
    const message = createBaseGetMatFightsResponse();
    message.matFights =
      object.matFights !== undefined && object.matFights !== null
        ? MatFightsQueryResult.fromPartial(object.matFights)
        : undefined;
    return message;
  },
};

function createBaseGetRegistrationInfoResponse(): GetRegistrationInfoResponse {
  return { registrationInfo: undefined };
}

export const GetRegistrationInfoResponse = {
  encode(
    message: GetRegistrationInfoResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.registrationInfo !== undefined) {
      RegistrationInfo.encode(
        message.registrationInfo,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetRegistrationInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetRegistrationInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.registrationInfo = RegistrationInfo.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetRegistrationInfoResponse {
    return {
      registrationInfo: isSet(object.registrationInfo)
        ? RegistrationInfo.fromJSON(object.registrationInfo)
        : undefined,
    };
  },

  toJSON(message: GetRegistrationInfoResponse): unknown {
    const obj: any = {};
    message.registrationInfo !== undefined &&
      (obj.registrationInfo = message.registrationInfo
        ? RegistrationInfo.toJSON(message.registrationInfo)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetRegistrationInfoResponse>, I>>(
    object: I
  ): GetRegistrationInfoResponse {
    const message = createBaseGetRegistrationInfoResponse();
    message.registrationInfo =
      object.registrationInfo !== undefined && object.registrationInfo !== null
        ? RegistrationInfo.fromPartial(object.registrationInfo)
        : undefined;
    return message;
  },
};

function createBaseGetCategoriesResponse(): GetCategoriesResponse {
  return { categoryState: [] };
}

export const GetCategoriesResponse = {
  encode(
    message: GetCategoriesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.categoryState) {
      CategoryState.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetCategoriesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetCategoriesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.categoryState.push(
            CategoryState.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetCategoriesResponse {
    return {
      categoryState: Array.isArray(object?.categoryState)
        ? object.categoryState.map((e: any) => CategoryState.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GetCategoriesResponse): unknown {
    const obj: any = {};
    if (message.categoryState) {
      obj.categoryState = message.categoryState.map((e) =>
        e ? CategoryState.toJSON(e) : undefined
      );
    } else {
      obj.categoryState = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetCategoriesResponse>, I>>(
    object: I
  ): GetCategoriesResponse {
    const message = createBaseGetCategoriesResponse();
    message.categoryState =
      object.categoryState?.map((e) => CategoryState.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGetFightByIdResponse(): GetFightByIdResponse {
  return { fightDescription: undefined };
}

export const GetFightByIdResponse = {
  encode(
    message: GetFightByIdResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.fightDescription !== undefined) {
      FightDescription.encode(
        message.fightDescription,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetFightByIdResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetFightByIdResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fightDescription = FightDescription.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetFightByIdResponse {
    return {
      fightDescription: isSet(object.fightDescription)
        ? FightDescription.fromJSON(object.fightDescription)
        : undefined,
    };
  },

  toJSON(message: GetFightByIdResponse): unknown {
    const obj: any = {};
    message.fightDescription !== undefined &&
      (obj.fightDescription = message.fightDescription
        ? FightDescription.toJSON(message.fightDescription)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetFightByIdResponse>, I>>(
    object: I
  ): GetFightByIdResponse {
    const message = createBaseGetFightByIdResponse();
    message.fightDescription =
      object.fightDescription !== undefined && object.fightDescription !== null
        ? FightDescription.fromPartial(object.fightDescription)
        : undefined;
    return message;
  },
};

function createBaseGetFightIdsByCategoryIdsResponse(): GetFightIdsByCategoryIdsResponse {
  return { fightIdsByCategoryId: {} };
}

export const GetFightIdsByCategoryIdsResponse = {
  encode(
    message: GetFightIdsByCategoryIdsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    Object.entries(message.fightIdsByCategoryId).forEach(([key, value]) => {
      GetFightIdsByCategoryIdsResponse_FightIdsByCategoryIdEntry.encode(
        { key: key as any, value },
        writer.uint32(10).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetFightIdsByCategoryIdsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetFightIdsByCategoryIdsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 =
            GetFightIdsByCategoryIdsResponse_FightIdsByCategoryIdEntry.decode(
              reader,
              reader.uint32()
            );
          if (entry1.value !== undefined) {
            message.fightIdsByCategoryId[entry1.key] = entry1.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetFightIdsByCategoryIdsResponse {
    return {
      fightIdsByCategoryId: isObject(object.fightIdsByCategoryId)
        ? Object.entries(object.fightIdsByCategoryId).reduce<{
            [key: string]: ListOfString;
          }>((acc, [key, value]) => {
            acc[key] = ListOfString.fromJSON(value);
            return acc;
          }, {})
        : {},
    };
  },

  toJSON(message: GetFightIdsByCategoryIdsResponse): unknown {
    const obj: any = {};
    obj.fightIdsByCategoryId = {};
    if (message.fightIdsByCategoryId) {
      Object.entries(message.fightIdsByCategoryId).forEach(([k, v]) => {
        obj.fightIdsByCategoryId[k] = ListOfString.toJSON(v);
      });
    }
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<GetFightIdsByCategoryIdsResponse>, I>
  >(object: I): GetFightIdsByCategoryIdsResponse {
    const message = createBaseGetFightIdsByCategoryIdsResponse();
    message.fightIdsByCategoryId = Object.entries(
      object.fightIdsByCategoryId ?? {}
    ).reduce<{ [key: string]: ListOfString }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = ListOfString.fromPartial(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBaseGetFightIdsByCategoryIdsResponse_FightIdsByCategoryIdEntry(): GetFightIdsByCategoryIdsResponse_FightIdsByCategoryIdEntry {
  return { key: '', value: undefined };
}

export const GetFightIdsByCategoryIdsResponse_FightIdsByCategoryIdEntry = {
  encode(
    message: GetFightIdsByCategoryIdsResponse_FightIdsByCategoryIdEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== '') {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      ListOfString.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetFightIdsByCategoryIdsResponse_FightIdsByCategoryIdEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message =
      createBaseGetFightIdsByCategoryIdsResponse_FightIdsByCategoryIdEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = ListOfString.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(
    object: any
  ): GetFightIdsByCategoryIdsResponse_FightIdsByCategoryIdEntry {
    return {
      key: isSet(object.key) ? String(object.key) : '',
      value: isSet(object.value)
        ? ListOfString.fromJSON(object.value)
        : undefined,
    };
  },

  toJSON(
    message: GetFightIdsByCategoryIdsResponse_FightIdsByCategoryIdEntry
  ): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = message.value
        ? ListOfString.toJSON(message.value)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<
      DeepPartial<GetFightIdsByCategoryIdsResponse_FightIdsByCategoryIdEntry>,
      I
    >
  >(object: I): GetFightIdsByCategoryIdsResponse_FightIdsByCategoryIdEntry {
    const message =
      createBaseGetFightIdsByCategoryIdsResponse_FightIdsByCategoryIdEntry();
    message.key = object.key ?? '';
    message.value =
      object.value !== undefined && object.value !== null
        ? ListOfString.fromPartial(object.value)
        : undefined;
    return message;
  },
};

function createBaseGetCategoryResponse(): GetCategoryResponse {
  return { categoryState: undefined };
}

export const GetCategoryResponse = {
  encode(
    message: GetCategoryResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.categoryState !== undefined) {
      CategoryState.encode(
        message.categoryState,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetCategoryResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetCategoryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.categoryState = CategoryState.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetCategoryResponse {
    return {
      categoryState: isSet(object.categoryState)
        ? CategoryState.fromJSON(object.categoryState)
        : undefined,
    };
  },

  toJSON(message: GetCategoryResponse): unknown {
    const obj: any = {};
    message.categoryState !== undefined &&
      (obj.categoryState = message.categoryState
        ? CategoryState.toJSON(message.categoryState)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetCategoryResponse>, I>>(
    object: I
  ): GetCategoryResponse {
    const message = createBaseGetCategoryResponse();
    message.categoryState =
      object.categoryState !== undefined && object.categoryState !== null
        ? CategoryState.fromPartial(object.categoryState)
        : undefined;
    return message;
  },
};

function createBaseGetPeriodFightsByMatsResponse(): GetPeriodFightsByMatsResponse {
  return { fightIdsByMatId: {} };
}

export const GetPeriodFightsByMatsResponse = {
  encode(
    message: GetPeriodFightsByMatsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    Object.entries(message.fightIdsByMatId).forEach(([key, value]) => {
      GetPeriodFightsByMatsResponse_FightIdsByMatIdEntry.encode(
        { key: key as any, value },
        writer.uint32(10).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetPeriodFightsByMatsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetPeriodFightsByMatsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 =
            GetPeriodFightsByMatsResponse_FightIdsByMatIdEntry.decode(
              reader,
              reader.uint32()
            );
          if (entry1.value !== undefined) {
            message.fightIdsByMatId[entry1.key] = entry1.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetPeriodFightsByMatsResponse {
    return {
      fightIdsByMatId: isObject(object.fightIdsByMatId)
        ? Object.entries(object.fightIdsByMatId).reduce<{
            [key: string]: ListOfString;
          }>((acc, [key, value]) => {
            acc[key] = ListOfString.fromJSON(value);
            return acc;
          }, {})
        : {},
    };
  },

  toJSON(message: GetPeriodFightsByMatsResponse): unknown {
    const obj: any = {};
    obj.fightIdsByMatId = {};
    if (message.fightIdsByMatId) {
      Object.entries(message.fightIdsByMatId).forEach(([k, v]) => {
        obj.fightIdsByMatId[k] = ListOfString.toJSON(v);
      });
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetPeriodFightsByMatsResponse>, I>>(
    object: I
  ): GetPeriodFightsByMatsResponse {
    const message = createBaseGetPeriodFightsByMatsResponse();
    message.fightIdsByMatId = Object.entries(
      object.fightIdsByMatId ?? {}
    ).reduce<{ [key: string]: ListOfString }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = ListOfString.fromPartial(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBaseGetPeriodFightsByMatsResponse_FightIdsByMatIdEntry(): GetPeriodFightsByMatsResponse_FightIdsByMatIdEntry {
  return { key: '', value: undefined };
}

export const GetPeriodFightsByMatsResponse_FightIdsByMatIdEntry = {
  encode(
    message: GetPeriodFightsByMatsResponse_FightIdsByMatIdEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== '') {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      ListOfString.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetPeriodFightsByMatsResponse_FightIdsByMatIdEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message =
      createBaseGetPeriodFightsByMatsResponse_FightIdsByMatIdEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = ListOfString.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetPeriodFightsByMatsResponse_FightIdsByMatIdEntry {
    return {
      key: isSet(object.key) ? String(object.key) : '',
      value: isSet(object.value)
        ? ListOfString.fromJSON(object.value)
        : undefined,
    };
  },

  toJSON(message: GetPeriodFightsByMatsResponse_FightIdsByMatIdEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = message.value
        ? ListOfString.toJSON(message.value)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<
      DeepPartial<GetPeriodFightsByMatsResponse_FightIdsByMatIdEntry>,
      I
    >
  >(object: I): GetPeriodFightsByMatsResponse_FightIdsByMatIdEntry {
    const message =
      createBaseGetPeriodFightsByMatsResponse_FightIdsByMatIdEntry();
    message.key = object.key ?? '';
    message.value =
      object.value !== undefined && object.value !== null
        ? ListOfString.fromPartial(object.value)
        : undefined;
    return message;
  },
};

function createBaseGetFightResulOptionsResponse(): GetFightResulOptionsResponse {
  return { fightResultOptions: [] };
}

export const GetFightResulOptionsResponse = {
  encode(
    message: GetFightResulOptionsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.fightResultOptions) {
      FightResultOption.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetFightResulOptionsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetFightResulOptionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fightResultOptions.push(
            FightResultOption.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetFightResulOptionsResponse {
    return {
      fightResultOptions: Array.isArray(object?.fightResultOptions)
        ? object.fightResultOptions.map((e: any) =>
            FightResultOption.fromJSON(e)
          )
        : [],
    };
  },

  toJSON(message: GetFightResulOptionsResponse): unknown {
    const obj: any = {};
    if (message.fightResultOptions) {
      obj.fightResultOptions = message.fightResultOptions.map((e) =>
        e ? FightResultOption.toJSON(e) : undefined
      );
    } else {
      obj.fightResultOptions = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetFightResulOptionsResponse>, I>>(
    object: I
  ): GetFightResulOptionsResponse {
    const message = createBaseGetFightResulOptionsResponse();
    message.fightResultOptions =
      object.fightResultOptions?.map((e) => FightResultOption.fromPartial(e)) ||
      [];
    return message;
  },
};

function createBaseGetStagesForCategoryResponse(): GetStagesForCategoryResponse {
  return { stages: [] };
}

export const GetStagesForCategoryResponse = {
  encode(
    message: GetStagesForCategoryResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.stages) {
      StageDescriptor.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetStagesForCategoryResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetStagesForCategoryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stages.push(StageDescriptor.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetStagesForCategoryResponse {
    return {
      stages: Array.isArray(object?.stages)
        ? object.stages.map((e: any) => StageDescriptor.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GetStagesForCategoryResponse): unknown {
    const obj: any = {};
    if (message.stages) {
      obj.stages = message.stages.map((e) =>
        e ? StageDescriptor.toJSON(e) : undefined
      );
    } else {
      obj.stages = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetStagesForCategoryResponse>, I>>(
    object: I
  ): GetStagesForCategoryResponse {
    const message = createBaseGetStagesForCategoryResponse();
    message.stages =
      object.stages?.map((e) => StageDescriptor.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGetStageByIdResponse(): GetStageByIdResponse {
  return { stage: undefined };
}

export const GetStageByIdResponse = {
  encode(
    message: GetStageByIdResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.stage !== undefined) {
      StageDescriptor.encode(message.stage, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetStageByIdResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetStageByIdResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stage = StageDescriptor.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetStageByIdResponse {
    return {
      stage: isSet(object.stage)
        ? StageDescriptor.fromJSON(object.stage)
        : undefined,
    };
  },

  toJSON(message: GetStageByIdResponse): unknown {
    const obj: any = {};
    message.stage !== undefined &&
      (obj.stage = message.stage
        ? StageDescriptor.toJSON(message.stage)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetStageByIdResponse>, I>>(
    object: I
  ): GetStageByIdResponse {
    const message = createBaseGetStageByIdResponse();
    message.stage =
      object.stage !== undefined && object.stage !== null
        ? StageDescriptor.fromPartial(object.stage)
        : undefined;
    return message;
  },
};

function createBaseGetStageFightsResponse(): GetStageFightsResponse {
  return { fights: [] };
}

export const GetStageFightsResponse = {
  encode(
    message: GetStageFightsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.fights) {
      FightDescription.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetStageFightsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetStageFightsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fights.push(FightDescription.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetStageFightsResponse {
    return {
      fights: Array.isArray(object?.fights)
        ? object.fights.map((e: any) => FightDescription.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GetStageFightsResponse): unknown {
    const obj: any = {};
    if (message.fights) {
      obj.fights = message.fights.map((e) =>
        e ? FightDescription.toJSON(e) : undefined
      );
    } else {
      obj.fights = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetStageFightsResponse>, I>>(
    object: I
  ): GetStageFightsResponse {
    const message = createBaseGetStageFightsResponse();
    message.fights =
      object.fights?.map((e) => FightDescription.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGetAcademiesResponse(): GetAcademiesResponse {
  return { academies: [] };
}

export const GetAcademiesResponse = {
  encode(
    message: GetAcademiesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.academies) {
      FullAcademyInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetAcademiesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAcademiesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.academies.push(
            FullAcademyInfo.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetAcademiesResponse {
    return {
      academies: Array.isArray(object?.academies)
        ? object.academies.map((e: any) => FullAcademyInfo.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GetAcademiesResponse): unknown {
    const obj: any = {};
    if (message.academies) {
      obj.academies = message.academies.map((e) =>
        e ? FullAcademyInfo.toJSON(e) : undefined
      );
    } else {
      obj.academies = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetAcademiesResponse>, I>>(
    object: I
  ): GetAcademiesResponse {
    const message = createBaseGetAcademiesResponse();
    message.academies =
      object.academies?.map((e) => FullAcademyInfo.fromPartial(e)) || [];
    return message;
  },
};

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends { $case: string }
  ? { [K in keyof Omit<T, '$case'>]?: DeepPartial<T[K]> } & {
      $case: T['$case'];
    }
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
        Exclude<keyof I, KeysOfUnion<P>>,
        never
      >;

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isObject(value: any): boolean {
  return typeof value === 'object' && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
