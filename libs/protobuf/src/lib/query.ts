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
  resultsOnPage?: number | undefined;
}

export interface MatsQueryResult {
  competitors: Competitor[];
  mats: MatState[];
  topFiveFightsForEachMat: FightDescription[];
}

export interface QueryServiceRequest {
  addCompetitionInfoRequest?: AddCompetitionInfoRequest | undefined;
  addCompetitionImageRequest?: AddCompetitionImageRequest | undefined;
  removeCompetitionImageRequest?: RemoveCompetitionImageRequest | undefined;
}

export interface AddCompetitionInfoRequest {
  competitionInfo: Uint8Array;
}

export interface AddCompetitionImageRequest {
  image: Uint8Array;
}

export interface RemoveCompetitionImageRequest {}

export interface QueryServiceResponse {
  getDefaultRestrictionsResponse?: GetDefaultRestrictionsResponse | undefined;
  getDefaultFightResultsResponse?: GetDefaultFightResultsResponse | undefined;
  getAllCompetitionsResponse?: GetAllCompetitionsResponse | undefined;
  generateCategoriesFromRestrictionsResponse?:
    | GenerateCategoriesFromRestrictionsResponse
    | undefined;
  getCompetitionPropertiesResponse?:
    | GetCompetitionPropertiesResponse
    | undefined;
  getCompetitionInfoTemplateResponse?:
    | GetCompetitionInfoTemplateResponse
    | undefined;
  getScheduleResponse?: GetScheduleResponse | undefined;
  getCompetitorsResponse?: GetCompetitorsResponse | undefined;
  getCompetitorResponse?: GetCompetitorResponse | undefined;
  getDashboardResponse?: GetDashboardResponse | undefined;
  getMatsResponse?: GetMatsResponse | undefined;
  getPeriodMatsResponse?: GetPeriodMatsResponse | undefined;
  getMatResponse?: GetMatResponse | undefined;
  getMatFightsResponse?: GetMatFightsResponse | undefined;
  getRegistrationInfoResponse?: GetRegistrationInfoResponse | undefined;
  getCategoriesResponse?: GetCategoriesResponse | undefined;
  getFightByIdResponse?: GetFightByIdResponse | undefined;
  getFightIdsByCategoryIdsResponse?:
    | GetFightIdsByCategoryIdsResponse
    | undefined;
  getCategoryResponse?: GetCategoryResponse | undefined;
  getPeriodFightsByMatsResponse?: GetPeriodFightsByMatsResponse | undefined;
  getFightResulOptionsResponse?: GetFightResulOptionsResponse | undefined;
  getStagesForCategoryResponse?: GetStagesForCategoryResponse | undefined;
  getStageByIdResponse?: GetStageByIdResponse | undefined;
  getStageFightsResponse?: GetStageFightsResponse | undefined;
  getAcademiesResponse?: GetAcademiesResponse | undefined;
  getAcademyResponse?: GetAcademyResponse | undefined;
  getCompetitionInfoImageResponse?: GetCompetitionInfoImageResponse | undefined;
  errorResponse?: ErrorResponse | undefined;
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
  template: Uint8Array;
}

export interface GetCompetitionInfoImageResponse {
  image: Uint8Array;
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

export interface ErrorResponse {
  errorMessage?: string | undefined;
  errorReason?: string | undefined;
}

export interface GetAcademiesResponse {
  academies: FullAcademyInfo[];
  pageInfo?: PageInfo;
}

export interface GetAcademyResponse {
  academy?: FullAcademyInfo | undefined;
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
  return { total: 0, page: 0, resultsOnPage: undefined };
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
    if (message.resultsOnPage !== undefined) {
      writer.uint32(24).int32(message.resultsOnPage);
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
        case 3:
          message.resultsOnPage = reader.int32();
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
      resultsOnPage: isSet(object.resultsOnPage)
        ? Number(object.resultsOnPage)
        : undefined,
    };
  },

  toJSON(message: PageInfo): unknown {
    const obj: any = {};
    message.total !== undefined && (obj.total = Math.round(message.total));
    message.page !== undefined && (obj.page = Math.round(message.page));
    message.resultsOnPage !== undefined &&
      (obj.resultsOnPage = Math.round(message.resultsOnPage));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PageInfo>, I>>(object: I): PageInfo {
    const message = createBasePageInfo();
    message.total = object.total ?? 0;
    message.page = object.page ?? 0;
    message.resultsOnPage = object.resultsOnPage ?? undefined;
    return message;
  },
};

function createBaseMatsQueryResult(): MatsQueryResult {
  return { competitors: [], mats: [], topFiveFightsForEachMat: [] };
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
    for (const v of message.topFiveFightsForEachMat) {
      FightDescription.encode(v!, writer.uint32(26).fork()).ldelim();
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
        case 3:
          message.topFiveFightsForEachMat.push(
            FightDescription.decode(reader, reader.uint32())
          );
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
      topFiveFightsForEachMat: Array.isArray(object?.topFiveFightsForEachMat)
        ? object.topFiveFightsForEachMat.map((e: any) =>
            FightDescription.fromJSON(e)
          )
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
    if (message.topFiveFightsForEachMat) {
      obj.topFiveFightsForEachMat = message.topFiveFightsForEachMat.map((e) =>
        e ? FightDescription.toJSON(e) : undefined
      );
    } else {
      obj.topFiveFightsForEachMat = [];
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
    message.topFiveFightsForEachMat =
      object.topFiveFightsForEachMat?.map((e) =>
        FightDescription.fromPartial(e)
      ) || [];
    return message;
  },
};

function createBaseQueryServiceRequest(): QueryServiceRequest {
  return {
    addCompetitionInfoRequest: undefined,
    addCompetitionImageRequest: undefined,
    removeCompetitionImageRequest: undefined,
  };
}

export const QueryServiceRequest = {
  encode(
    message: QueryServiceRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.addCompetitionInfoRequest !== undefined) {
      AddCompetitionInfoRequest.encode(
        message.addCompetitionInfoRequest,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.addCompetitionImageRequest !== undefined) {
      AddCompetitionImageRequest.encode(
        message.addCompetitionImageRequest,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.removeCompetitionImageRequest !== undefined) {
      RemoveCompetitionImageRequest.encode(
        message.removeCompetitionImageRequest,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryServiceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryServiceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addCompetitionInfoRequest = AddCompetitionInfoRequest.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.addCompetitionImageRequest =
            AddCompetitionImageRequest.decode(reader, reader.uint32());
          break;
        case 3:
          message.removeCompetitionImageRequest =
            RemoveCompetitionImageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryServiceRequest {
    return {
      addCompetitionInfoRequest: isSet(object.addCompetitionInfoRequest)
        ? AddCompetitionInfoRequest.fromJSON(object.addCompetitionInfoRequest)
        : undefined,
      addCompetitionImageRequest: isSet(object.addCompetitionImageRequest)
        ? AddCompetitionImageRequest.fromJSON(object.addCompetitionImageRequest)
        : undefined,
      removeCompetitionImageRequest: isSet(object.removeCompetitionImageRequest)
        ? RemoveCompetitionImageRequest.fromJSON(
            object.removeCompetitionImageRequest
          )
        : undefined,
    };
  },

  toJSON(message: QueryServiceRequest): unknown {
    const obj: any = {};
    message.addCompetitionInfoRequest !== undefined &&
      (obj.addCompetitionInfoRequest = message.addCompetitionInfoRequest
        ? AddCompetitionInfoRequest.toJSON(message.addCompetitionInfoRequest)
        : undefined);
    message.addCompetitionImageRequest !== undefined &&
      (obj.addCompetitionImageRequest = message.addCompetitionImageRequest
        ? AddCompetitionImageRequest.toJSON(message.addCompetitionImageRequest)
        : undefined);
    message.removeCompetitionImageRequest !== undefined &&
      (obj.removeCompetitionImageRequest = message.removeCompetitionImageRequest
        ? RemoveCompetitionImageRequest.toJSON(
            message.removeCompetitionImageRequest
          )
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryServiceRequest>, I>>(
    object: I
  ): QueryServiceRequest {
    const message = createBaseQueryServiceRequest();
    message.addCompetitionInfoRequest =
      object.addCompetitionInfoRequest !== undefined &&
      object.addCompetitionInfoRequest !== null
        ? AddCompetitionInfoRequest.fromPartial(
            object.addCompetitionInfoRequest
          )
        : undefined;
    message.addCompetitionImageRequest =
      object.addCompetitionImageRequest !== undefined &&
      object.addCompetitionImageRequest !== null
        ? AddCompetitionImageRequest.fromPartial(
            object.addCompetitionImageRequest
          )
        : undefined;
    message.removeCompetitionImageRequest =
      object.removeCompetitionImageRequest !== undefined &&
      object.removeCompetitionImageRequest !== null
        ? RemoveCompetitionImageRequest.fromPartial(
            object.removeCompetitionImageRequest
          )
        : undefined;
    return message;
  },
};

function createBaseAddCompetitionInfoRequest(): AddCompetitionInfoRequest {
  return { competitionInfo: new Uint8Array() };
}

export const AddCompetitionInfoRequest = {
  encode(
    message: AddCompetitionInfoRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.competitionInfo.length !== 0) {
      writer.uint32(10).bytes(message.competitionInfo);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AddCompetitionInfoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddCompetitionInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.competitionInfo = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AddCompetitionInfoRequest {
    return {
      competitionInfo: isSet(object.competitionInfo)
        ? bytesFromBase64(object.competitionInfo)
        : new Uint8Array(),
    };
  },

  toJSON(message: AddCompetitionInfoRequest): unknown {
    const obj: any = {};
    message.competitionInfo !== undefined &&
      (obj.competitionInfo = base64FromBytes(
        message.competitionInfo !== undefined
          ? message.competitionInfo
          : new Uint8Array()
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AddCompetitionInfoRequest>, I>>(
    object: I
  ): AddCompetitionInfoRequest {
    const message = createBaseAddCompetitionInfoRequest();
    message.competitionInfo = object.competitionInfo ?? new Uint8Array();
    return message;
  },
};

function createBaseAddCompetitionImageRequest(): AddCompetitionImageRequest {
  return { image: new Uint8Array() };
}

export const AddCompetitionImageRequest = {
  encode(
    message: AddCompetitionImageRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.image.length !== 0) {
      writer.uint32(10).bytes(message.image);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AddCompetitionImageRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddCompetitionImageRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.image = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AddCompetitionImageRequest {
    return {
      image: isSet(object.image)
        ? bytesFromBase64(object.image)
        : new Uint8Array(),
    };
  },

  toJSON(message: AddCompetitionImageRequest): unknown {
    const obj: any = {};
    message.image !== undefined &&
      (obj.image = base64FromBytes(
        message.image !== undefined ? message.image : new Uint8Array()
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AddCompetitionImageRequest>, I>>(
    object: I
  ): AddCompetitionImageRequest {
    const message = createBaseAddCompetitionImageRequest();
    message.image = object.image ?? new Uint8Array();
    return message;
  },
};

function createBaseRemoveCompetitionImageRequest(): RemoveCompetitionImageRequest {
  return {};
}

export const RemoveCompetitionImageRequest = {
  encode(
    _: RemoveCompetitionImageRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RemoveCompetitionImageRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRemoveCompetitionImageRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): RemoveCompetitionImageRequest {
    return {};
  },

  toJSON(_: RemoveCompetitionImageRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RemoveCompetitionImageRequest>, I>>(
    _: I
  ): RemoveCompetitionImageRequest {
    const message = createBaseRemoveCompetitionImageRequest();
    return message;
  },
};

function createBaseQueryServiceResponse(): QueryServiceResponse {
  return {
    getDefaultRestrictionsResponse: undefined,
    getDefaultFightResultsResponse: undefined,
    getAllCompetitionsResponse: undefined,
    generateCategoriesFromRestrictionsResponse: undefined,
    getCompetitionPropertiesResponse: undefined,
    getCompetitionInfoTemplateResponse: undefined,
    getScheduleResponse: undefined,
    getCompetitorsResponse: undefined,
    getCompetitorResponse: undefined,
    getDashboardResponse: undefined,
    getMatsResponse: undefined,
    getPeriodMatsResponse: undefined,
    getMatResponse: undefined,
    getMatFightsResponse: undefined,
    getRegistrationInfoResponse: undefined,
    getCategoriesResponse: undefined,
    getFightByIdResponse: undefined,
    getFightIdsByCategoryIdsResponse: undefined,
    getCategoryResponse: undefined,
    getPeriodFightsByMatsResponse: undefined,
    getFightResulOptionsResponse: undefined,
    getStagesForCategoryResponse: undefined,
    getStageByIdResponse: undefined,
    getStageFightsResponse: undefined,
    getAcademiesResponse: undefined,
    getAcademyResponse: undefined,
    getCompetitionInfoImageResponse: undefined,
    errorResponse: undefined,
  };
}

export const QueryServiceResponse = {
  encode(
    message: QueryServiceResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.getDefaultRestrictionsResponse !== undefined) {
      GetDefaultRestrictionsResponse.encode(
        message.getDefaultRestrictionsResponse,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.getDefaultFightResultsResponse !== undefined) {
      GetDefaultFightResultsResponse.encode(
        message.getDefaultFightResultsResponse,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.getAllCompetitionsResponse !== undefined) {
      GetAllCompetitionsResponse.encode(
        message.getAllCompetitionsResponse,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.generateCategoriesFromRestrictionsResponse !== undefined) {
      GenerateCategoriesFromRestrictionsResponse.encode(
        message.generateCategoriesFromRestrictionsResponse,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.getCompetitionPropertiesResponse !== undefined) {
      GetCompetitionPropertiesResponse.encode(
        message.getCompetitionPropertiesResponse,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.getCompetitionInfoTemplateResponse !== undefined) {
      GetCompetitionInfoTemplateResponse.encode(
        message.getCompetitionInfoTemplateResponse,
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.getScheduleResponse !== undefined) {
      GetScheduleResponse.encode(
        message.getScheduleResponse,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.getCompetitorsResponse !== undefined) {
      GetCompetitorsResponse.encode(
        message.getCompetitorsResponse,
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.getCompetitorResponse !== undefined) {
      GetCompetitorResponse.encode(
        message.getCompetitorResponse,
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.getDashboardResponse !== undefined) {
      GetDashboardResponse.encode(
        message.getDashboardResponse,
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.getMatsResponse !== undefined) {
      GetMatsResponse.encode(
        message.getMatsResponse,
        writer.uint32(90).fork()
      ).ldelim();
    }
    if (message.getPeriodMatsResponse !== undefined) {
      GetPeriodMatsResponse.encode(
        message.getPeriodMatsResponse,
        writer.uint32(98).fork()
      ).ldelim();
    }
    if (message.getMatResponse !== undefined) {
      GetMatResponse.encode(
        message.getMatResponse,
        writer.uint32(106).fork()
      ).ldelim();
    }
    if (message.getMatFightsResponse !== undefined) {
      GetMatFightsResponse.encode(
        message.getMatFightsResponse,
        writer.uint32(114).fork()
      ).ldelim();
    }
    if (message.getRegistrationInfoResponse !== undefined) {
      GetRegistrationInfoResponse.encode(
        message.getRegistrationInfoResponse,
        writer.uint32(122).fork()
      ).ldelim();
    }
    if (message.getCategoriesResponse !== undefined) {
      GetCategoriesResponse.encode(
        message.getCategoriesResponse,
        writer.uint32(130).fork()
      ).ldelim();
    }
    if (message.getFightByIdResponse !== undefined) {
      GetFightByIdResponse.encode(
        message.getFightByIdResponse,
        writer.uint32(138).fork()
      ).ldelim();
    }
    if (message.getFightIdsByCategoryIdsResponse !== undefined) {
      GetFightIdsByCategoryIdsResponse.encode(
        message.getFightIdsByCategoryIdsResponse,
        writer.uint32(146).fork()
      ).ldelim();
    }
    if (message.getCategoryResponse !== undefined) {
      GetCategoryResponse.encode(
        message.getCategoryResponse,
        writer.uint32(154).fork()
      ).ldelim();
    }
    if (message.getPeriodFightsByMatsResponse !== undefined) {
      GetPeriodFightsByMatsResponse.encode(
        message.getPeriodFightsByMatsResponse,
        writer.uint32(162).fork()
      ).ldelim();
    }
    if (message.getFightResulOptionsResponse !== undefined) {
      GetFightResulOptionsResponse.encode(
        message.getFightResulOptionsResponse,
        writer.uint32(170).fork()
      ).ldelim();
    }
    if (message.getStagesForCategoryResponse !== undefined) {
      GetStagesForCategoryResponse.encode(
        message.getStagesForCategoryResponse,
        writer.uint32(178).fork()
      ).ldelim();
    }
    if (message.getStageByIdResponse !== undefined) {
      GetStageByIdResponse.encode(
        message.getStageByIdResponse,
        writer.uint32(186).fork()
      ).ldelim();
    }
    if (message.getStageFightsResponse !== undefined) {
      GetStageFightsResponse.encode(
        message.getStageFightsResponse,
        writer.uint32(194).fork()
      ).ldelim();
    }
    if (message.getAcademiesResponse !== undefined) {
      GetAcademiesResponse.encode(
        message.getAcademiesResponse,
        writer.uint32(202).fork()
      ).ldelim();
    }
    if (message.getAcademyResponse !== undefined) {
      GetAcademyResponse.encode(
        message.getAcademyResponse,
        writer.uint32(210).fork()
      ).ldelim();
    }
    if (message.getCompetitionInfoImageResponse !== undefined) {
      GetCompetitionInfoImageResponse.encode(
        message.getCompetitionInfoImageResponse,
        writer.uint32(218).fork()
      ).ldelim();
    }
    if (message.errorResponse !== undefined) {
      ErrorResponse.encode(
        message.errorResponse,
        writer.uint32(21602).fork()
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
          message.getDefaultRestrictionsResponse =
            GetDefaultRestrictionsResponse.decode(reader, reader.uint32());
          break;
        case 2:
          message.getDefaultFightResultsResponse =
            GetDefaultFightResultsResponse.decode(reader, reader.uint32());
          break;
        case 3:
          message.getAllCompetitionsResponse =
            GetAllCompetitionsResponse.decode(reader, reader.uint32());
          break;
        case 4:
          message.generateCategoriesFromRestrictionsResponse =
            GenerateCategoriesFromRestrictionsResponse.decode(
              reader,
              reader.uint32()
            );
          break;
        case 5:
          message.getCompetitionPropertiesResponse =
            GetCompetitionPropertiesResponse.decode(reader, reader.uint32());
          break;
        case 6:
          message.getCompetitionInfoTemplateResponse =
            GetCompetitionInfoTemplateResponse.decode(reader, reader.uint32());
          break;
        case 7:
          message.getScheduleResponse = GetScheduleResponse.decode(
            reader,
            reader.uint32()
          );
          break;
        case 8:
          message.getCompetitorsResponse = GetCompetitorsResponse.decode(
            reader,
            reader.uint32()
          );
          break;
        case 9:
          message.getCompetitorResponse = GetCompetitorResponse.decode(
            reader,
            reader.uint32()
          );
          break;
        case 10:
          message.getDashboardResponse = GetDashboardResponse.decode(
            reader,
            reader.uint32()
          );
          break;
        case 11:
          message.getMatsResponse = GetMatsResponse.decode(
            reader,
            reader.uint32()
          );
          break;
        case 12:
          message.getPeriodMatsResponse = GetPeriodMatsResponse.decode(
            reader,
            reader.uint32()
          );
          break;
        case 13:
          message.getMatResponse = GetMatResponse.decode(
            reader,
            reader.uint32()
          );
          break;
        case 14:
          message.getMatFightsResponse = GetMatFightsResponse.decode(
            reader,
            reader.uint32()
          );
          break;
        case 15:
          message.getRegistrationInfoResponse =
            GetRegistrationInfoResponse.decode(reader, reader.uint32());
          break;
        case 16:
          message.getCategoriesResponse = GetCategoriesResponse.decode(
            reader,
            reader.uint32()
          );
          break;
        case 17:
          message.getFightByIdResponse = GetFightByIdResponse.decode(
            reader,
            reader.uint32()
          );
          break;
        case 18:
          message.getFightIdsByCategoryIdsResponse =
            GetFightIdsByCategoryIdsResponse.decode(reader, reader.uint32());
          break;
        case 19:
          message.getCategoryResponse = GetCategoryResponse.decode(
            reader,
            reader.uint32()
          );
          break;
        case 20:
          message.getPeriodFightsByMatsResponse =
            GetPeriodFightsByMatsResponse.decode(reader, reader.uint32());
          break;
        case 21:
          message.getFightResulOptionsResponse =
            GetFightResulOptionsResponse.decode(reader, reader.uint32());
          break;
        case 22:
          message.getStagesForCategoryResponse =
            GetStagesForCategoryResponse.decode(reader, reader.uint32());
          break;
        case 23:
          message.getStageByIdResponse = GetStageByIdResponse.decode(
            reader,
            reader.uint32()
          );
          break;
        case 24:
          message.getStageFightsResponse = GetStageFightsResponse.decode(
            reader,
            reader.uint32()
          );
          break;
        case 25:
          message.getAcademiesResponse = GetAcademiesResponse.decode(
            reader,
            reader.uint32()
          );
          break;
        case 26:
          message.getAcademyResponse = GetAcademyResponse.decode(
            reader,
            reader.uint32()
          );
          break;
        case 27:
          message.getCompetitionInfoImageResponse =
            GetCompetitionInfoImageResponse.decode(reader, reader.uint32());
          break;
        case 2700:
          message.errorResponse = ErrorResponse.decode(reader, reader.uint32());
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
      getDefaultRestrictionsResponse: isSet(
        object.getDefaultRestrictionsResponse
      )
        ? GetDefaultRestrictionsResponse.fromJSON(
            object.getDefaultRestrictionsResponse
          )
        : undefined,
      getDefaultFightResultsResponse: isSet(
        object.getDefaultFightResultsResponse
      )
        ? GetDefaultFightResultsResponse.fromJSON(
            object.getDefaultFightResultsResponse
          )
        : undefined,
      getAllCompetitionsResponse: isSet(object.getAllCompetitionsResponse)
        ? GetAllCompetitionsResponse.fromJSON(object.getAllCompetitionsResponse)
        : undefined,
      generateCategoriesFromRestrictionsResponse: isSet(
        object.generateCategoriesFromRestrictionsResponse
      )
        ? GenerateCategoriesFromRestrictionsResponse.fromJSON(
            object.generateCategoriesFromRestrictionsResponse
          )
        : undefined,
      getCompetitionPropertiesResponse: isSet(
        object.getCompetitionPropertiesResponse
      )
        ? GetCompetitionPropertiesResponse.fromJSON(
            object.getCompetitionPropertiesResponse
          )
        : undefined,
      getCompetitionInfoTemplateResponse: isSet(
        object.getCompetitionInfoTemplateResponse
      )
        ? GetCompetitionInfoTemplateResponse.fromJSON(
            object.getCompetitionInfoTemplateResponse
          )
        : undefined,
      getScheduleResponse: isSet(object.getScheduleResponse)
        ? GetScheduleResponse.fromJSON(object.getScheduleResponse)
        : undefined,
      getCompetitorsResponse: isSet(object.getCompetitorsResponse)
        ? GetCompetitorsResponse.fromJSON(object.getCompetitorsResponse)
        : undefined,
      getCompetitorResponse: isSet(object.getCompetitorResponse)
        ? GetCompetitorResponse.fromJSON(object.getCompetitorResponse)
        : undefined,
      getDashboardResponse: isSet(object.getDashboardResponse)
        ? GetDashboardResponse.fromJSON(object.getDashboardResponse)
        : undefined,
      getMatsResponse: isSet(object.getMatsResponse)
        ? GetMatsResponse.fromJSON(object.getMatsResponse)
        : undefined,
      getPeriodMatsResponse: isSet(object.getPeriodMatsResponse)
        ? GetPeriodMatsResponse.fromJSON(object.getPeriodMatsResponse)
        : undefined,
      getMatResponse: isSet(object.getMatResponse)
        ? GetMatResponse.fromJSON(object.getMatResponse)
        : undefined,
      getMatFightsResponse: isSet(object.getMatFightsResponse)
        ? GetMatFightsResponse.fromJSON(object.getMatFightsResponse)
        : undefined,
      getRegistrationInfoResponse: isSet(object.getRegistrationInfoResponse)
        ? GetRegistrationInfoResponse.fromJSON(
            object.getRegistrationInfoResponse
          )
        : undefined,
      getCategoriesResponse: isSet(object.getCategoriesResponse)
        ? GetCategoriesResponse.fromJSON(object.getCategoriesResponse)
        : undefined,
      getFightByIdResponse: isSet(object.getFightByIdResponse)
        ? GetFightByIdResponse.fromJSON(object.getFightByIdResponse)
        : undefined,
      getFightIdsByCategoryIdsResponse: isSet(
        object.getFightIdsByCategoryIdsResponse
      )
        ? GetFightIdsByCategoryIdsResponse.fromJSON(
            object.getFightIdsByCategoryIdsResponse
          )
        : undefined,
      getCategoryResponse: isSet(object.getCategoryResponse)
        ? GetCategoryResponse.fromJSON(object.getCategoryResponse)
        : undefined,
      getPeriodFightsByMatsResponse: isSet(object.getPeriodFightsByMatsResponse)
        ? GetPeriodFightsByMatsResponse.fromJSON(
            object.getPeriodFightsByMatsResponse
          )
        : undefined,
      getFightResulOptionsResponse: isSet(object.getFightResulOptionsResponse)
        ? GetFightResulOptionsResponse.fromJSON(
            object.getFightResulOptionsResponse
          )
        : undefined,
      getStagesForCategoryResponse: isSet(object.getStagesForCategoryResponse)
        ? GetStagesForCategoryResponse.fromJSON(
            object.getStagesForCategoryResponse
          )
        : undefined,
      getStageByIdResponse: isSet(object.getStageByIdResponse)
        ? GetStageByIdResponse.fromJSON(object.getStageByIdResponse)
        : undefined,
      getStageFightsResponse: isSet(object.getStageFightsResponse)
        ? GetStageFightsResponse.fromJSON(object.getStageFightsResponse)
        : undefined,
      getAcademiesResponse: isSet(object.getAcademiesResponse)
        ? GetAcademiesResponse.fromJSON(object.getAcademiesResponse)
        : undefined,
      getAcademyResponse: isSet(object.getAcademyResponse)
        ? GetAcademyResponse.fromJSON(object.getAcademyResponse)
        : undefined,
      getCompetitionInfoImageResponse: isSet(
        object.getCompetitionInfoImageResponse
      )
        ? GetCompetitionInfoImageResponse.fromJSON(
            object.getCompetitionInfoImageResponse
          )
        : undefined,
      errorResponse: isSet(object.errorResponse)
        ? ErrorResponse.fromJSON(object.errorResponse)
        : undefined,
    };
  },

  toJSON(message: QueryServiceResponse): unknown {
    const obj: any = {};
    message.getDefaultRestrictionsResponse !== undefined &&
      (obj.getDefaultRestrictionsResponse =
        message.getDefaultRestrictionsResponse
          ? GetDefaultRestrictionsResponse.toJSON(
              message.getDefaultRestrictionsResponse
            )
          : undefined);
    message.getDefaultFightResultsResponse !== undefined &&
      (obj.getDefaultFightResultsResponse =
        message.getDefaultFightResultsResponse
          ? GetDefaultFightResultsResponse.toJSON(
              message.getDefaultFightResultsResponse
            )
          : undefined);
    message.getAllCompetitionsResponse !== undefined &&
      (obj.getAllCompetitionsResponse = message.getAllCompetitionsResponse
        ? GetAllCompetitionsResponse.toJSON(message.getAllCompetitionsResponse)
        : undefined);
    message.generateCategoriesFromRestrictionsResponse !== undefined &&
      (obj.generateCategoriesFromRestrictionsResponse =
        message.generateCategoriesFromRestrictionsResponse
          ? GenerateCategoriesFromRestrictionsResponse.toJSON(
              message.generateCategoriesFromRestrictionsResponse
            )
          : undefined);
    message.getCompetitionPropertiesResponse !== undefined &&
      (obj.getCompetitionPropertiesResponse =
        message.getCompetitionPropertiesResponse
          ? GetCompetitionPropertiesResponse.toJSON(
              message.getCompetitionPropertiesResponse
            )
          : undefined);
    message.getCompetitionInfoTemplateResponse !== undefined &&
      (obj.getCompetitionInfoTemplateResponse =
        message.getCompetitionInfoTemplateResponse
          ? GetCompetitionInfoTemplateResponse.toJSON(
              message.getCompetitionInfoTemplateResponse
            )
          : undefined);
    message.getScheduleResponse !== undefined &&
      (obj.getScheduleResponse = message.getScheduleResponse
        ? GetScheduleResponse.toJSON(message.getScheduleResponse)
        : undefined);
    message.getCompetitorsResponse !== undefined &&
      (obj.getCompetitorsResponse = message.getCompetitorsResponse
        ? GetCompetitorsResponse.toJSON(message.getCompetitorsResponse)
        : undefined);
    message.getCompetitorResponse !== undefined &&
      (obj.getCompetitorResponse = message.getCompetitorResponse
        ? GetCompetitorResponse.toJSON(message.getCompetitorResponse)
        : undefined);
    message.getDashboardResponse !== undefined &&
      (obj.getDashboardResponse = message.getDashboardResponse
        ? GetDashboardResponse.toJSON(message.getDashboardResponse)
        : undefined);
    message.getMatsResponse !== undefined &&
      (obj.getMatsResponse = message.getMatsResponse
        ? GetMatsResponse.toJSON(message.getMatsResponse)
        : undefined);
    message.getPeriodMatsResponse !== undefined &&
      (obj.getPeriodMatsResponse = message.getPeriodMatsResponse
        ? GetPeriodMatsResponse.toJSON(message.getPeriodMatsResponse)
        : undefined);
    message.getMatResponse !== undefined &&
      (obj.getMatResponse = message.getMatResponse
        ? GetMatResponse.toJSON(message.getMatResponse)
        : undefined);
    message.getMatFightsResponse !== undefined &&
      (obj.getMatFightsResponse = message.getMatFightsResponse
        ? GetMatFightsResponse.toJSON(message.getMatFightsResponse)
        : undefined);
    message.getRegistrationInfoResponse !== undefined &&
      (obj.getRegistrationInfoResponse = message.getRegistrationInfoResponse
        ? GetRegistrationInfoResponse.toJSON(
            message.getRegistrationInfoResponse
          )
        : undefined);
    message.getCategoriesResponse !== undefined &&
      (obj.getCategoriesResponse = message.getCategoriesResponse
        ? GetCategoriesResponse.toJSON(message.getCategoriesResponse)
        : undefined);
    message.getFightByIdResponse !== undefined &&
      (obj.getFightByIdResponse = message.getFightByIdResponse
        ? GetFightByIdResponse.toJSON(message.getFightByIdResponse)
        : undefined);
    message.getFightIdsByCategoryIdsResponse !== undefined &&
      (obj.getFightIdsByCategoryIdsResponse =
        message.getFightIdsByCategoryIdsResponse
          ? GetFightIdsByCategoryIdsResponse.toJSON(
              message.getFightIdsByCategoryIdsResponse
            )
          : undefined);
    message.getCategoryResponse !== undefined &&
      (obj.getCategoryResponse = message.getCategoryResponse
        ? GetCategoryResponse.toJSON(message.getCategoryResponse)
        : undefined);
    message.getPeriodFightsByMatsResponse !== undefined &&
      (obj.getPeriodFightsByMatsResponse = message.getPeriodFightsByMatsResponse
        ? GetPeriodFightsByMatsResponse.toJSON(
            message.getPeriodFightsByMatsResponse
          )
        : undefined);
    message.getFightResulOptionsResponse !== undefined &&
      (obj.getFightResulOptionsResponse = message.getFightResulOptionsResponse
        ? GetFightResulOptionsResponse.toJSON(
            message.getFightResulOptionsResponse
          )
        : undefined);
    message.getStagesForCategoryResponse !== undefined &&
      (obj.getStagesForCategoryResponse = message.getStagesForCategoryResponse
        ? GetStagesForCategoryResponse.toJSON(
            message.getStagesForCategoryResponse
          )
        : undefined);
    message.getStageByIdResponse !== undefined &&
      (obj.getStageByIdResponse = message.getStageByIdResponse
        ? GetStageByIdResponse.toJSON(message.getStageByIdResponse)
        : undefined);
    message.getStageFightsResponse !== undefined &&
      (obj.getStageFightsResponse = message.getStageFightsResponse
        ? GetStageFightsResponse.toJSON(message.getStageFightsResponse)
        : undefined);
    message.getAcademiesResponse !== undefined &&
      (obj.getAcademiesResponse = message.getAcademiesResponse
        ? GetAcademiesResponse.toJSON(message.getAcademiesResponse)
        : undefined);
    message.getAcademyResponse !== undefined &&
      (obj.getAcademyResponse = message.getAcademyResponse
        ? GetAcademyResponse.toJSON(message.getAcademyResponse)
        : undefined);
    message.getCompetitionInfoImageResponse !== undefined &&
      (obj.getCompetitionInfoImageResponse =
        message.getCompetitionInfoImageResponse
          ? GetCompetitionInfoImageResponse.toJSON(
              message.getCompetitionInfoImageResponse
            )
          : undefined);
    message.errorResponse !== undefined &&
      (obj.errorResponse = message.errorResponse
        ? ErrorResponse.toJSON(message.errorResponse)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryServiceResponse>, I>>(
    object: I
  ): QueryServiceResponse {
    const message = createBaseQueryServiceResponse();
    message.getDefaultRestrictionsResponse =
      object.getDefaultRestrictionsResponse !== undefined &&
      object.getDefaultRestrictionsResponse !== null
        ? GetDefaultRestrictionsResponse.fromPartial(
            object.getDefaultRestrictionsResponse
          )
        : undefined;
    message.getDefaultFightResultsResponse =
      object.getDefaultFightResultsResponse !== undefined &&
      object.getDefaultFightResultsResponse !== null
        ? GetDefaultFightResultsResponse.fromPartial(
            object.getDefaultFightResultsResponse
          )
        : undefined;
    message.getAllCompetitionsResponse =
      object.getAllCompetitionsResponse !== undefined &&
      object.getAllCompetitionsResponse !== null
        ? GetAllCompetitionsResponse.fromPartial(
            object.getAllCompetitionsResponse
          )
        : undefined;
    message.generateCategoriesFromRestrictionsResponse =
      object.generateCategoriesFromRestrictionsResponse !== undefined &&
      object.generateCategoriesFromRestrictionsResponse !== null
        ? GenerateCategoriesFromRestrictionsResponse.fromPartial(
            object.generateCategoriesFromRestrictionsResponse
          )
        : undefined;
    message.getCompetitionPropertiesResponse =
      object.getCompetitionPropertiesResponse !== undefined &&
      object.getCompetitionPropertiesResponse !== null
        ? GetCompetitionPropertiesResponse.fromPartial(
            object.getCompetitionPropertiesResponse
          )
        : undefined;
    message.getCompetitionInfoTemplateResponse =
      object.getCompetitionInfoTemplateResponse !== undefined &&
      object.getCompetitionInfoTemplateResponse !== null
        ? GetCompetitionInfoTemplateResponse.fromPartial(
            object.getCompetitionInfoTemplateResponse
          )
        : undefined;
    message.getScheduleResponse =
      object.getScheduleResponse !== undefined &&
      object.getScheduleResponse !== null
        ? GetScheduleResponse.fromPartial(object.getScheduleResponse)
        : undefined;
    message.getCompetitorsResponse =
      object.getCompetitorsResponse !== undefined &&
      object.getCompetitorsResponse !== null
        ? GetCompetitorsResponse.fromPartial(object.getCompetitorsResponse)
        : undefined;
    message.getCompetitorResponse =
      object.getCompetitorResponse !== undefined &&
      object.getCompetitorResponse !== null
        ? GetCompetitorResponse.fromPartial(object.getCompetitorResponse)
        : undefined;
    message.getDashboardResponse =
      object.getDashboardResponse !== undefined &&
      object.getDashboardResponse !== null
        ? GetDashboardResponse.fromPartial(object.getDashboardResponse)
        : undefined;
    message.getMatsResponse =
      object.getMatsResponse !== undefined && object.getMatsResponse !== null
        ? GetMatsResponse.fromPartial(object.getMatsResponse)
        : undefined;
    message.getPeriodMatsResponse =
      object.getPeriodMatsResponse !== undefined &&
      object.getPeriodMatsResponse !== null
        ? GetPeriodMatsResponse.fromPartial(object.getPeriodMatsResponse)
        : undefined;
    message.getMatResponse =
      object.getMatResponse !== undefined && object.getMatResponse !== null
        ? GetMatResponse.fromPartial(object.getMatResponse)
        : undefined;
    message.getMatFightsResponse =
      object.getMatFightsResponse !== undefined &&
      object.getMatFightsResponse !== null
        ? GetMatFightsResponse.fromPartial(object.getMatFightsResponse)
        : undefined;
    message.getRegistrationInfoResponse =
      object.getRegistrationInfoResponse !== undefined &&
      object.getRegistrationInfoResponse !== null
        ? GetRegistrationInfoResponse.fromPartial(
            object.getRegistrationInfoResponse
          )
        : undefined;
    message.getCategoriesResponse =
      object.getCategoriesResponse !== undefined &&
      object.getCategoriesResponse !== null
        ? GetCategoriesResponse.fromPartial(object.getCategoriesResponse)
        : undefined;
    message.getFightByIdResponse =
      object.getFightByIdResponse !== undefined &&
      object.getFightByIdResponse !== null
        ? GetFightByIdResponse.fromPartial(object.getFightByIdResponse)
        : undefined;
    message.getFightIdsByCategoryIdsResponse =
      object.getFightIdsByCategoryIdsResponse !== undefined &&
      object.getFightIdsByCategoryIdsResponse !== null
        ? GetFightIdsByCategoryIdsResponse.fromPartial(
            object.getFightIdsByCategoryIdsResponse
          )
        : undefined;
    message.getCategoryResponse =
      object.getCategoryResponse !== undefined &&
      object.getCategoryResponse !== null
        ? GetCategoryResponse.fromPartial(object.getCategoryResponse)
        : undefined;
    message.getPeriodFightsByMatsResponse =
      object.getPeriodFightsByMatsResponse !== undefined &&
      object.getPeriodFightsByMatsResponse !== null
        ? GetPeriodFightsByMatsResponse.fromPartial(
            object.getPeriodFightsByMatsResponse
          )
        : undefined;
    message.getFightResulOptionsResponse =
      object.getFightResulOptionsResponse !== undefined &&
      object.getFightResulOptionsResponse !== null
        ? GetFightResulOptionsResponse.fromPartial(
            object.getFightResulOptionsResponse
          )
        : undefined;
    message.getStagesForCategoryResponse =
      object.getStagesForCategoryResponse !== undefined &&
      object.getStagesForCategoryResponse !== null
        ? GetStagesForCategoryResponse.fromPartial(
            object.getStagesForCategoryResponse
          )
        : undefined;
    message.getStageByIdResponse =
      object.getStageByIdResponse !== undefined &&
      object.getStageByIdResponse !== null
        ? GetStageByIdResponse.fromPartial(object.getStageByIdResponse)
        : undefined;
    message.getStageFightsResponse =
      object.getStageFightsResponse !== undefined &&
      object.getStageFightsResponse !== null
        ? GetStageFightsResponse.fromPartial(object.getStageFightsResponse)
        : undefined;
    message.getAcademiesResponse =
      object.getAcademiesResponse !== undefined &&
      object.getAcademiesResponse !== null
        ? GetAcademiesResponse.fromPartial(object.getAcademiesResponse)
        : undefined;
    message.getAcademyResponse =
      object.getAcademyResponse !== undefined &&
      object.getAcademyResponse !== null
        ? GetAcademyResponse.fromPartial(object.getAcademyResponse)
        : undefined;
    message.getCompetitionInfoImageResponse =
      object.getCompetitionInfoImageResponse !== undefined &&
      object.getCompetitionInfoImageResponse !== null
        ? GetCompetitionInfoImageResponse.fromPartial(
            object.getCompetitionInfoImageResponse
          )
        : undefined;
    message.errorResponse =
      object.errorResponse !== undefined && object.errorResponse !== null
        ? ErrorResponse.fromPartial(object.errorResponse)
        : undefined;
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
  return { template: new Uint8Array() };
}

export const GetCompetitionInfoTemplateResponse = {
  encode(
    message: GetCompetitionInfoTemplateResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.template.length !== 0) {
      writer.uint32(10).bytes(message.template);
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
          message.template = reader.bytes();
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
      template: isSet(object.template)
        ? bytesFromBase64(object.template)
        : new Uint8Array(),
    };
  },

  toJSON(message: GetCompetitionInfoTemplateResponse): unknown {
    const obj: any = {};
    message.template !== undefined &&
      (obj.template = base64FromBytes(
        message.template !== undefined ? message.template : new Uint8Array()
      ));
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<GetCompetitionInfoTemplateResponse>, I>
  >(object: I): GetCompetitionInfoTemplateResponse {
    const message = createBaseGetCompetitionInfoTemplateResponse();
    message.template = object.template ?? new Uint8Array();
    return message;
  },
};

function createBaseGetCompetitionInfoImageResponse(): GetCompetitionInfoImageResponse {
  return { image: new Uint8Array() };
}

export const GetCompetitionInfoImageResponse = {
  encode(
    message: GetCompetitionInfoImageResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.image.length !== 0) {
      writer.uint32(10).bytes(message.image);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetCompetitionInfoImageResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetCompetitionInfoImageResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.image = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetCompetitionInfoImageResponse {
    return {
      image: isSet(object.image)
        ? bytesFromBase64(object.image)
        : new Uint8Array(),
    };
  },

  toJSON(message: GetCompetitionInfoImageResponse): unknown {
    const obj: any = {};
    message.image !== undefined &&
      (obj.image = base64FromBytes(
        message.image !== undefined ? message.image : new Uint8Array()
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetCompetitionInfoImageResponse>, I>>(
    object: I
  ): GetCompetitionInfoImageResponse {
    const message = createBaseGetCompetitionInfoImageResponse();
    message.image = object.image ?? new Uint8Array();
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

function createBaseErrorResponse(): ErrorResponse {
  return { errorMessage: undefined, errorReason: undefined };
}

export const ErrorResponse = {
  encode(
    message: ErrorResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.errorMessage !== undefined) {
      writer.uint32(10).string(message.errorMessage);
    }
    if (message.errorReason !== undefined) {
      writer.uint32(18).string(message.errorReason);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ErrorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseErrorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.errorMessage = reader.string();
          break;
        case 2:
          message.errorReason = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ErrorResponse {
    return {
      errorMessage: isSet(object.errorMessage)
        ? String(object.errorMessage)
        : undefined,
      errorReason: isSet(object.errorReason)
        ? String(object.errorReason)
        : undefined,
    };
  },

  toJSON(message: ErrorResponse): unknown {
    const obj: any = {};
    message.errorMessage !== undefined &&
      (obj.errorMessage = message.errorMessage);
    message.errorReason !== undefined &&
      (obj.errorReason = message.errorReason);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ErrorResponse>, I>>(
    object: I
  ): ErrorResponse {
    const message = createBaseErrorResponse();
    message.errorMessage = object.errorMessage ?? undefined;
    message.errorReason = object.errorReason ?? undefined;
    return message;
  },
};

function createBaseGetAcademiesResponse(): GetAcademiesResponse {
  return { academies: [], pageInfo: undefined };
}

export const GetAcademiesResponse = {
  encode(
    message: GetAcademiesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.academies) {
      FullAcademyInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pageInfo !== undefined) {
      PageInfo.encode(message.pageInfo, writer.uint32(18).fork()).ldelim();
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
        case 2:
          message.pageInfo = PageInfo.decode(reader, reader.uint32());
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
      pageInfo: isSet(object.pageInfo)
        ? PageInfo.fromJSON(object.pageInfo)
        : undefined,
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
    message.pageInfo !== undefined &&
      (obj.pageInfo = message.pageInfo
        ? PageInfo.toJSON(message.pageInfo)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetAcademiesResponse>, I>>(
    object: I
  ): GetAcademiesResponse {
    const message = createBaseGetAcademiesResponse();
    message.academies =
      object.academies?.map((e) => FullAcademyInfo.fromPartial(e)) || [];
    message.pageInfo =
      object.pageInfo !== undefined && object.pageInfo !== null
        ? PageInfo.fromPartial(object.pageInfo)
        : undefined;
    return message;
  },
};

function createBaseGetAcademyResponse(): GetAcademyResponse {
  return { academy: undefined };
}

export const GetAcademyResponse = {
  encode(
    message: GetAcademyResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.academy !== undefined) {
      FullAcademyInfo.encode(
        message.academy,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetAcademyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAcademyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.academy = FullAcademyInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetAcademyResponse {
    return {
      academy: isSet(object.academy)
        ? FullAcademyInfo.fromJSON(object.academy)
        : undefined,
    };
  },

  toJSON(message: GetAcademyResponse): unknown {
    const obj: any = {};
    message.academy !== undefined &&
      (obj.academy = message.academy
        ? FullAcademyInfo.toJSON(message.academy)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetAcademyResponse>, I>>(
    object: I
  ): GetAcademyResponse {
    const message = createBaseGetAcademyResponse();
    message.academy =
      object.academy !== undefined && object.academy !== null
        ? FullAcademyInfo.fromPartial(object.academy)
        : undefined;
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== 'undefined') return globalThis;
  if (typeof self !== 'undefined') return self;
  if (typeof window !== 'undefined') return window;
  if (typeof global !== 'undefined') return global;
  throw 'Unable to locate global object';
})();

const atob: (b64: string) => string =
  globalThis.atob ||
  ((b64) => globalThis.Buffer.from(b64, 'base64').toString('binary'));
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

const btoa: (bin: string) => string =
  globalThis.btoa ||
  ((bin) => globalThis.Buffer.from(bin, 'binary').toString('base64'));
function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  arr.forEach((byte) => {
    bin.push(String.fromCharCode(byte));
  });
  return btoa(bin.join(''));
}

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
