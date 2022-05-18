// package: compservice.model.protobuf
// file: query.proto

import * as jspb from "google-protobuf";
import * as model_pb from "./model_pb";

export class GenerateCategoriesFromRestrictionsRequest extends jspb.Message {
  clearRestrictionsList(): void;
  getRestrictionsList(): Array<model_pb.CategoryRestriction>;
  setRestrictionsList(value: Array<model_pb.CategoryRestriction>): void;
  addRestrictions(value?: model_pb.CategoryRestriction, index?: number): model_pb.CategoryRestriction;

  clearIdtreesList(): void;
  getIdtreesList(): Array<model_pb.AdjacencyList>;
  setIdtreesList(value: Array<model_pb.AdjacencyList>): void;
  addIdtrees(value?: model_pb.AdjacencyList, index?: number): model_pb.AdjacencyList;

  clearRestrictionnamesList(): void;
  getRestrictionnamesList(): Array<string>;
  setRestrictionnamesList(value: Array<string>): void;
  addRestrictionnames(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateCategoriesFromRestrictionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateCategoriesFromRestrictionsRequest): GenerateCategoriesFromRestrictionsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GenerateCategoriesFromRestrictionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateCategoriesFromRestrictionsRequest;
  static deserializeBinaryFromReader(message: GenerateCategoriesFromRestrictionsRequest, reader: jspb.BinaryReader): GenerateCategoriesFromRestrictionsRequest;
}

export namespace GenerateCategoriesFromRestrictionsRequest {
  export type AsObject = {
    restrictionsList: Array<model_pb.CategoryRestriction.AsObject>,
    idtreesList: Array<model_pb.AdjacencyList.AsObject>,
    restrictionnamesList: Array<string>,
  }
}

export class ListOfString extends jspb.Message {
  clearIdsList(): void;
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): void;
  addIds(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListOfString.AsObject;
  static toObject(includeInstance: boolean, msg: ListOfString): ListOfString.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListOfString, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListOfString;
  static deserializeBinaryFromReader(message: ListOfString, reader: jspb.BinaryReader): ListOfString;
}

export namespace ListOfString {
  export type AsObject = {
    idsList: Array<string>,
  }
}

export class MatFightsQueryResult extends jspb.Message {
  clearCompetitorsList(): void;
  getCompetitorsList(): Array<model_pb.Competitor>;
  setCompetitorsList(value: Array<model_pb.Competitor>): void;
  addCompetitors(value?: model_pb.Competitor, index?: number): model_pb.Competitor;

  clearFightsList(): void;
  getFightsList(): Array<model_pb.FightDescription>;
  setFightsList(value: Array<model_pb.FightDescription>): void;
  addFights(value?: model_pb.FightDescription, index?: number): model_pb.FightDescription;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MatFightsQueryResult.AsObject;
  static toObject(includeInstance: boolean, msg: MatFightsQueryResult): MatFightsQueryResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MatFightsQueryResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MatFightsQueryResult;
  static deserializeBinaryFromReader(message: MatFightsQueryResult, reader: jspb.BinaryReader): MatFightsQueryResult;
}

export namespace MatFightsQueryResult {
  export type AsObject = {
    competitorsList: Array<model_pb.Competitor.AsObject>,
    fightsList: Array<model_pb.FightDescription.AsObject>,
  }
}

export class PageInfo extends jspb.Message {
  getTotal(): number;
  setTotal(value: number): void;

  getPage(): number;
  setPage(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PageInfo.AsObject;
  static toObject(includeInstance: boolean, msg: PageInfo): PageInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PageInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PageInfo;
  static deserializeBinaryFromReader(message: PageInfo, reader: jspb.BinaryReader): PageInfo;
}

export namespace PageInfo {
  export type AsObject = {
    total: number,
    page: number,
  }
}

export class MatsQueryResult extends jspb.Message {
  clearCompetitorsList(): void;
  getCompetitorsList(): Array<model_pb.Competitor>;
  setCompetitorsList(value: Array<model_pb.Competitor>): void;
  addCompetitors(value?: model_pb.Competitor, index?: number): model_pb.Competitor;

  clearMatsList(): void;
  getMatsList(): Array<model_pb.MatState>;
  setMatsList(value: Array<model_pb.MatState>): void;
  addMats(value?: model_pb.MatState, index?: number): model_pb.MatState;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MatsQueryResult.AsObject;
  static toObject(includeInstance: boolean, msg: MatsQueryResult): MatsQueryResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MatsQueryResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MatsQueryResult;
  static deserializeBinaryFromReader(message: MatsQueryResult, reader: jspb.BinaryReader): MatsQueryResult;
}

export namespace MatsQueryResult {
  export type AsObject = {
    competitorsList: Array<model_pb.Competitor.AsObject>,
    matsList: Array<model_pb.MatState.AsObject>,
  }
}

export class QueryServiceResponse extends jspb.Message {
  hasGetdefaultrestrictionsresponse(): boolean;
  clearGetdefaultrestrictionsresponse(): void;
  getGetdefaultrestrictionsresponse(): GetDefaultRestrictionsResponse | undefined;
  setGetdefaultrestrictionsresponse(value?: GetDefaultRestrictionsResponse): void;

  hasGetdefaultfightresultsresponse(): boolean;
  clearGetdefaultfightresultsresponse(): void;
  getGetdefaultfightresultsresponse(): GetDefaultFightResultsResponse | undefined;
  setGetdefaultfightresultsresponse(value?: GetDefaultFightResultsResponse): void;

  hasGetallcompetitionsresponse(): boolean;
  clearGetallcompetitionsresponse(): void;
  getGetallcompetitionsresponse(): GetAllCompetitionsResponse | undefined;
  setGetallcompetitionsresponse(value?: GetAllCompetitionsResponse): void;

  hasGeneratecategoriesfromrestrictionsresponse(): boolean;
  clearGeneratecategoriesfromrestrictionsresponse(): void;
  getGeneratecategoriesfromrestrictionsresponse(): GenerateCategoriesFromRestrictionsResponse | undefined;
  setGeneratecategoriesfromrestrictionsresponse(value?: GenerateCategoriesFromRestrictionsResponse): void;

  hasGetcompetitionpropertiesresponse(): boolean;
  clearGetcompetitionpropertiesresponse(): void;
  getGetcompetitionpropertiesresponse(): GetCompetitionPropertiesResponse | undefined;
  setGetcompetitionpropertiesresponse(value?: GetCompetitionPropertiesResponse): void;

  hasGetcompetitioninfotemplateresponse(): boolean;
  clearGetcompetitioninfotemplateresponse(): void;
  getGetcompetitioninfotemplateresponse(): GetCompetitionInfoTemplateResponse | undefined;
  setGetcompetitioninfotemplateresponse(value?: GetCompetitionInfoTemplateResponse): void;

  hasGetscheduleresponse(): boolean;
  clearGetscheduleresponse(): void;
  getGetscheduleresponse(): GetScheduleResponse | undefined;
  setGetscheduleresponse(value?: GetScheduleResponse): void;

  hasGetcompetitorsresponse(): boolean;
  clearGetcompetitorsresponse(): void;
  getGetcompetitorsresponse(): GetCompetitorsResponse | undefined;
  setGetcompetitorsresponse(value?: GetCompetitorsResponse): void;

  hasGetcompetitorresponse(): boolean;
  clearGetcompetitorresponse(): void;
  getGetcompetitorresponse(): GetCompetitorResponse | undefined;
  setGetcompetitorresponse(value?: GetCompetitorResponse): void;

  hasGetdashboardresponse(): boolean;
  clearGetdashboardresponse(): void;
  getGetdashboardresponse(): GetDashboardResponse | undefined;
  setGetdashboardresponse(value?: GetDashboardResponse): void;

  hasGetmatsresponse(): boolean;
  clearGetmatsresponse(): void;
  getGetmatsresponse(): GetMatsResponse | undefined;
  setGetmatsresponse(value?: GetMatsResponse): void;

  hasGetperiodmatsresponse(): boolean;
  clearGetperiodmatsresponse(): void;
  getGetperiodmatsresponse(): GetPeriodMatsResponse | undefined;
  setGetperiodmatsresponse(value?: GetPeriodMatsResponse): void;

  hasGetmatresponse(): boolean;
  clearGetmatresponse(): void;
  getGetmatresponse(): GetMatResponse | undefined;
  setGetmatresponse(value?: GetMatResponse): void;

  hasGetmatfightsresponse(): boolean;
  clearGetmatfightsresponse(): void;
  getGetmatfightsresponse(): GetMatFightsResponse | undefined;
  setGetmatfightsresponse(value?: GetMatFightsResponse): void;

  hasGetregistrationinforesponse(): boolean;
  clearGetregistrationinforesponse(): void;
  getGetregistrationinforesponse(): GetRegistrationInfoResponse | undefined;
  setGetregistrationinforesponse(value?: GetRegistrationInfoResponse): void;

  hasGetcategoriesresponse(): boolean;
  clearGetcategoriesresponse(): void;
  getGetcategoriesresponse(): GetCategoriesResponse | undefined;
  setGetcategoriesresponse(value?: GetCategoriesResponse): void;

  hasGetfightbyidresponse(): boolean;
  clearGetfightbyidresponse(): void;
  getGetfightbyidresponse(): GetFightByIdResponse | undefined;
  setGetfightbyidresponse(value?: GetFightByIdResponse): void;

  hasGetfightidsbycategoryidsresponse(): boolean;
  clearGetfightidsbycategoryidsresponse(): void;
  getGetfightidsbycategoryidsresponse(): GetFightIdsByCategoryIdsResponse | undefined;
  setGetfightidsbycategoryidsresponse(value?: GetFightIdsByCategoryIdsResponse): void;

  hasGetcategoryresponse(): boolean;
  clearGetcategoryresponse(): void;
  getGetcategoryresponse(): GetCategoryResponse | undefined;
  setGetcategoryresponse(value?: GetCategoryResponse): void;

  hasGetperiodfightsbymatsresponse(): boolean;
  clearGetperiodfightsbymatsresponse(): void;
  getGetperiodfightsbymatsresponse(): GetPeriodFightsByMatsResponse | undefined;
  setGetperiodfightsbymatsresponse(value?: GetPeriodFightsByMatsResponse): void;

  hasGetfightresuloptionsresponse(): boolean;
  clearGetfightresuloptionsresponse(): void;
  getGetfightresuloptionsresponse(): GetFightResulOptionsResponse | undefined;
  setGetfightresuloptionsresponse(value?: GetFightResulOptionsResponse): void;

  hasGetstagesforcategoryresponse(): boolean;
  clearGetstagesforcategoryresponse(): void;
  getGetstagesforcategoryresponse(): GetStagesForCategoryResponse | undefined;
  setGetstagesforcategoryresponse(value?: GetStagesForCategoryResponse): void;

  hasGetstagebyidresponse(): boolean;
  clearGetstagebyidresponse(): void;
  getGetstagebyidresponse(): GetStageByIdResponse | undefined;
  setGetstagebyidresponse(value?: GetStageByIdResponse): void;

  hasGetstagefightsresponse(): boolean;
  clearGetstagefightsresponse(): void;
  getGetstagefightsresponse(): GetStageFightsResponse | undefined;
  setGetstagefightsresponse(value?: GetStageFightsResponse): void;

  hasGetacademiesresponse(): boolean;
  clearGetacademiesresponse(): void;
  getGetacademiesresponse(): GetAcademiesResponse | undefined;
  setGetacademiesresponse(value?: GetAcademiesResponse): void;

  getPayloadCase(): QueryServiceResponse.PayloadCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryServiceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryServiceResponse): QueryServiceResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryServiceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryServiceResponse;
  static deserializeBinaryFromReader(message: QueryServiceResponse, reader: jspb.BinaryReader): QueryServiceResponse;
}

export namespace QueryServiceResponse {
  export type AsObject = {
    getdefaultrestrictionsresponse?: GetDefaultRestrictionsResponse.AsObject,
    getdefaultfightresultsresponse?: GetDefaultFightResultsResponse.AsObject,
    getallcompetitionsresponse?: GetAllCompetitionsResponse.AsObject,
    generatecategoriesfromrestrictionsresponse?: GenerateCategoriesFromRestrictionsResponse.AsObject,
    getcompetitionpropertiesresponse?: GetCompetitionPropertiesResponse.AsObject,
    getcompetitioninfotemplateresponse?: GetCompetitionInfoTemplateResponse.AsObject,
    getscheduleresponse?: GetScheduleResponse.AsObject,
    getcompetitorsresponse?: GetCompetitorsResponse.AsObject,
    getcompetitorresponse?: GetCompetitorResponse.AsObject,
    getdashboardresponse?: GetDashboardResponse.AsObject,
    getmatsresponse?: GetMatsResponse.AsObject,
    getperiodmatsresponse?: GetPeriodMatsResponse.AsObject,
    getmatresponse?: GetMatResponse.AsObject,
    getmatfightsresponse?: GetMatFightsResponse.AsObject,
    getregistrationinforesponse?: GetRegistrationInfoResponse.AsObject,
    getcategoriesresponse?: GetCategoriesResponse.AsObject,
    getfightbyidresponse?: GetFightByIdResponse.AsObject,
    getfightidsbycategoryidsresponse?: GetFightIdsByCategoryIdsResponse.AsObject,
    getcategoryresponse?: GetCategoryResponse.AsObject,
    getperiodfightsbymatsresponse?: GetPeriodFightsByMatsResponse.AsObject,
    getfightresuloptionsresponse?: GetFightResulOptionsResponse.AsObject,
    getstagesforcategoryresponse?: GetStagesForCategoryResponse.AsObject,
    getstagebyidresponse?: GetStageByIdResponse.AsObject,
    getstagefightsresponse?: GetStageFightsResponse.AsObject,
    getacademiesresponse?: GetAcademiesResponse.AsObject,
  }

  export enum PayloadCase {
    PAYLOAD_NOT_SET = 0,
    GETDEFAULTRESTRICTIONSRESPONSE = 1,
    GETDEFAULTFIGHTRESULTSRESPONSE = 2,
    GETALLCOMPETITIONSRESPONSE = 3,
    GENERATECATEGORIESFROMRESTRICTIONSRESPONSE = 4,
    GETCOMPETITIONPROPERTIESRESPONSE = 5,
    GETCOMPETITIONINFOTEMPLATERESPONSE = 6,
    GETSCHEDULERESPONSE = 7,
    GETCOMPETITORSRESPONSE = 8,
    GETCOMPETITORRESPONSE = 9,
    GETDASHBOARDRESPONSE = 10,
    GETMATSRESPONSE = 11,
    GETPERIODMATSRESPONSE = 12,
    GETMATRESPONSE = 13,
    GETMATFIGHTSRESPONSE = 14,
    GETREGISTRATIONINFORESPONSE = 15,
    GETCATEGORIESRESPONSE = 16,
    GETFIGHTBYIDRESPONSE = 17,
    GETFIGHTIDSBYCATEGORYIDSRESPONSE = 18,
    GETCATEGORYRESPONSE = 19,
    GETPERIODFIGHTSBYMATSRESPONSE = 20,
    GETFIGHTRESULOPTIONSRESPONSE = 21,
    GETSTAGESFORCATEGORYRESPONSE = 22,
    GETSTAGEBYIDRESPONSE = 23,
    GETSTAGEFIGHTSRESPONSE = 24,
    GETACADEMIESRESPONSE = 25,
  }
}

export class GetDefaultRestrictionsResponse extends jspb.Message {
  clearRestrictionsList(): void;
  getRestrictionsList(): Array<model_pb.CategoryRestriction>;
  setRestrictionsList(value: Array<model_pb.CategoryRestriction>): void;
  addRestrictions(value?: model_pb.CategoryRestriction, index?: number): model_pb.CategoryRestriction;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDefaultRestrictionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetDefaultRestrictionsResponse): GetDefaultRestrictionsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDefaultRestrictionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDefaultRestrictionsResponse;
  static deserializeBinaryFromReader(message: GetDefaultRestrictionsResponse, reader: jspb.BinaryReader): GetDefaultRestrictionsResponse;
}

export namespace GetDefaultRestrictionsResponse {
  export type AsObject = {
    restrictionsList: Array<model_pb.CategoryRestriction.AsObject>,
  }
}

export class GetDefaultFightResultsResponse extends jspb.Message {
  clearFightresultoptionsList(): void;
  getFightresultoptionsList(): Array<model_pb.FightResultOption>;
  setFightresultoptionsList(value: Array<model_pb.FightResultOption>): void;
  addFightresultoptions(value?: model_pb.FightResultOption, index?: number): model_pb.FightResultOption;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDefaultFightResultsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetDefaultFightResultsResponse): GetDefaultFightResultsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDefaultFightResultsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDefaultFightResultsResponse;
  static deserializeBinaryFromReader(message: GetDefaultFightResultsResponse, reader: jspb.BinaryReader): GetDefaultFightResultsResponse;
}

export namespace GetDefaultFightResultsResponse {
  export type AsObject = {
    fightresultoptionsList: Array<model_pb.FightResultOption.AsObject>,
  }
}

export class GetAllCompetitionsResponse extends jspb.Message {
  clearManagedcompetitionsList(): void;
  getManagedcompetitionsList(): Array<model_pb.ManagedCompetition>;
  setManagedcompetitionsList(value: Array<model_pb.ManagedCompetition>): void;
  addManagedcompetitions(value?: model_pb.ManagedCompetition, index?: number): model_pb.ManagedCompetition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllCompetitionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllCompetitionsResponse): GetAllCompetitionsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllCompetitionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllCompetitionsResponse;
  static deserializeBinaryFromReader(message: GetAllCompetitionsResponse, reader: jspb.BinaryReader): GetAllCompetitionsResponse;
}

export namespace GetAllCompetitionsResponse {
  export type AsObject = {
    managedcompetitionsList: Array<model_pb.ManagedCompetition.AsObject>,
  }
}

export class GenerateCategoriesFromRestrictionsResponse extends jspb.Message {
  clearCategoriesList(): void;
  getCategoriesList(): Array<model_pb.CategoryDescriptor>;
  setCategoriesList(value: Array<model_pb.CategoryDescriptor>): void;
  addCategories(value?: model_pb.CategoryDescriptor, index?: number): model_pb.CategoryDescriptor;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateCategoriesFromRestrictionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateCategoriesFromRestrictionsResponse): GenerateCategoriesFromRestrictionsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GenerateCategoriesFromRestrictionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateCategoriesFromRestrictionsResponse;
  static deserializeBinaryFromReader(message: GenerateCategoriesFromRestrictionsResponse, reader: jspb.BinaryReader): GenerateCategoriesFromRestrictionsResponse;
}

export namespace GenerateCategoriesFromRestrictionsResponse {
  export type AsObject = {
    categoriesList: Array<model_pb.CategoryDescriptor.AsObject>,
  }
}

export class GetCompetitionPropertiesResponse extends jspb.Message {
  hasCompetitionproperties(): boolean;
  clearCompetitionproperties(): void;
  getCompetitionproperties(): model_pb.CompetitionProperties | undefined;
  setCompetitionproperties(value?: model_pb.CompetitionProperties): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCompetitionPropertiesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetCompetitionPropertiesResponse): GetCompetitionPropertiesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCompetitionPropertiesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCompetitionPropertiesResponse;
  static deserializeBinaryFromReader(message: GetCompetitionPropertiesResponse, reader: jspb.BinaryReader): GetCompetitionPropertiesResponse;
}

export namespace GetCompetitionPropertiesResponse {
  export type AsObject = {
    competitionproperties?: model_pb.CompetitionProperties.AsObject,
  }
}

export class GetCompetitionInfoTemplateResponse extends jspb.Message {
  hasTemplate(): boolean;
  clearTemplate(): void;
  getTemplate(): string;
  setTemplate(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCompetitionInfoTemplateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetCompetitionInfoTemplateResponse): GetCompetitionInfoTemplateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCompetitionInfoTemplateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCompetitionInfoTemplateResponse;
  static deserializeBinaryFromReader(message: GetCompetitionInfoTemplateResponse, reader: jspb.BinaryReader): GetCompetitionInfoTemplateResponse;
}

export namespace GetCompetitionInfoTemplateResponse {
  export type AsObject = {
    template: string,
  }
}

export class GetScheduleResponse extends jspb.Message {
  hasSchedule(): boolean;
  clearSchedule(): void;
  getSchedule(): model_pb.Schedule | undefined;
  setSchedule(value?: model_pb.Schedule): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetScheduleResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetScheduleResponse): GetScheduleResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetScheduleResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetScheduleResponse;
  static deserializeBinaryFromReader(message: GetScheduleResponse, reader: jspb.BinaryReader): GetScheduleResponse;
}

export namespace GetScheduleResponse {
  export type AsObject = {
    schedule?: model_pb.Schedule.AsObject,
  }
}

export class GetCompetitorsResponse extends jspb.Message {
  hasPageinfo(): boolean;
  clearPageinfo(): void;
  getPageinfo(): PageInfo | undefined;
  setPageinfo(value?: PageInfo): void;

  clearCompetitorsList(): void;
  getCompetitorsList(): Array<model_pb.Competitor>;
  setCompetitorsList(value: Array<model_pb.Competitor>): void;
  addCompetitors(value?: model_pb.Competitor, index?: number): model_pb.Competitor;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCompetitorsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetCompetitorsResponse): GetCompetitorsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCompetitorsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCompetitorsResponse;
  static deserializeBinaryFromReader(message: GetCompetitorsResponse, reader: jspb.BinaryReader): GetCompetitorsResponse;
}

export namespace GetCompetitorsResponse {
  export type AsObject = {
    pageinfo?: PageInfo.AsObject,
    competitorsList: Array<model_pb.Competitor.AsObject>,
  }
}

export class GetCompetitorResponse extends jspb.Message {
  hasCompetitor(): boolean;
  clearCompetitor(): void;
  getCompetitor(): model_pb.Competitor | undefined;
  setCompetitor(value?: model_pb.Competitor): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCompetitorResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetCompetitorResponse): GetCompetitorResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCompetitorResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCompetitorResponse;
  static deserializeBinaryFromReader(message: GetCompetitorResponse, reader: jspb.BinaryReader): GetCompetitorResponse;
}

export namespace GetCompetitorResponse {
  export type AsObject = {
    competitor?: model_pb.Competitor.AsObject,
  }
}

export class GetDashboardResponse extends jspb.Message {
  clearPeriodsList(): void;
  getPeriodsList(): Array<model_pb.Period>;
  setPeriodsList(value: Array<model_pb.Period>): void;
  addPeriods(value?: model_pb.Period, index?: number): model_pb.Period;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDashboardResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetDashboardResponse): GetDashboardResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDashboardResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDashboardResponse;
  static deserializeBinaryFromReader(message: GetDashboardResponse, reader: jspb.BinaryReader): GetDashboardResponse;
}

export namespace GetDashboardResponse {
  export type AsObject = {
    periodsList: Array<model_pb.Period.AsObject>,
  }
}

export class GetMatsResponse extends jspb.Message {
  clearMatsList(): void;
  getMatsList(): Array<model_pb.MatDescription>;
  setMatsList(value: Array<model_pb.MatDescription>): void;
  addMats(value?: model_pb.MatDescription, index?: number): model_pb.MatDescription;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMatsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetMatsResponse): GetMatsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMatsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMatsResponse;
  static deserializeBinaryFromReader(message: GetMatsResponse, reader: jspb.BinaryReader): GetMatsResponse;
}

export namespace GetMatsResponse {
  export type AsObject = {
    matsList: Array<model_pb.MatDescription.AsObject>,
  }
}

export class GetPeriodMatsResponse extends jspb.Message {
  hasMatsqueryresults(): boolean;
  clearMatsqueryresults(): void;
  getMatsqueryresults(): MatsQueryResult | undefined;
  setMatsqueryresults(value?: MatsQueryResult): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPeriodMatsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPeriodMatsResponse): GetPeriodMatsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPeriodMatsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPeriodMatsResponse;
  static deserializeBinaryFromReader(message: GetPeriodMatsResponse, reader: jspb.BinaryReader): GetPeriodMatsResponse;
}

export namespace GetPeriodMatsResponse {
  export type AsObject = {
    matsqueryresults?: MatsQueryResult.AsObject,
  }
}

export class GetMatResponse extends jspb.Message {
  hasMat(): boolean;
  clearMat(): void;
  getMat(): model_pb.MatDescription | undefined;
  setMat(value?: model_pb.MatDescription): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMatResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetMatResponse): GetMatResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMatResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMatResponse;
  static deserializeBinaryFromReader(message: GetMatResponse, reader: jspb.BinaryReader): GetMatResponse;
}

export namespace GetMatResponse {
  export type AsObject = {
    mat?: model_pb.MatDescription.AsObject,
  }
}

export class GetMatFightsResponse extends jspb.Message {
  hasMatfights(): boolean;
  clearMatfights(): void;
  getMatfights(): MatFightsQueryResult | undefined;
  setMatfights(value?: MatFightsQueryResult): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMatFightsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetMatFightsResponse): GetMatFightsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMatFightsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMatFightsResponse;
  static deserializeBinaryFromReader(message: GetMatFightsResponse, reader: jspb.BinaryReader): GetMatFightsResponse;
}

export namespace GetMatFightsResponse {
  export type AsObject = {
    matfights?: MatFightsQueryResult.AsObject,
  }
}

export class GetRegistrationInfoResponse extends jspb.Message {
  hasRegistrationinfo(): boolean;
  clearRegistrationinfo(): void;
  getRegistrationinfo(): model_pb.RegistrationInfo | undefined;
  setRegistrationinfo(value?: model_pb.RegistrationInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRegistrationInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetRegistrationInfoResponse): GetRegistrationInfoResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRegistrationInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRegistrationInfoResponse;
  static deserializeBinaryFromReader(message: GetRegistrationInfoResponse, reader: jspb.BinaryReader): GetRegistrationInfoResponse;
}

export namespace GetRegistrationInfoResponse {
  export type AsObject = {
    registrationinfo?: model_pb.RegistrationInfo.AsObject,
  }
}

export class GetCategoriesResponse extends jspb.Message {
  clearCategorystateList(): void;
  getCategorystateList(): Array<model_pb.CategoryState>;
  setCategorystateList(value: Array<model_pb.CategoryState>): void;
  addCategorystate(value?: model_pb.CategoryState, index?: number): model_pb.CategoryState;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCategoriesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetCategoriesResponse): GetCategoriesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCategoriesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCategoriesResponse;
  static deserializeBinaryFromReader(message: GetCategoriesResponse, reader: jspb.BinaryReader): GetCategoriesResponse;
}

export namespace GetCategoriesResponse {
  export type AsObject = {
    categorystateList: Array<model_pb.CategoryState.AsObject>,
  }
}

export class GetFightByIdResponse extends jspb.Message {
  hasFightdescription(): boolean;
  clearFightdescription(): void;
  getFightdescription(): model_pb.FightDescription | undefined;
  setFightdescription(value?: model_pb.FightDescription): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFightByIdResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetFightByIdResponse): GetFightByIdResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetFightByIdResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFightByIdResponse;
  static deserializeBinaryFromReader(message: GetFightByIdResponse, reader: jspb.BinaryReader): GetFightByIdResponse;
}

export namespace GetFightByIdResponse {
  export type AsObject = {
    fightdescription?: model_pb.FightDescription.AsObject,
  }
}

export class GetFightIdsByCategoryIdsResponse extends jspb.Message {
  getFightidsbycategoryidMap(): jspb.Map<string, ListOfString>;
  clearFightidsbycategoryidMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFightIdsByCategoryIdsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetFightIdsByCategoryIdsResponse): GetFightIdsByCategoryIdsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetFightIdsByCategoryIdsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFightIdsByCategoryIdsResponse;
  static deserializeBinaryFromReader(message: GetFightIdsByCategoryIdsResponse, reader: jspb.BinaryReader): GetFightIdsByCategoryIdsResponse;
}

export namespace GetFightIdsByCategoryIdsResponse {
  export type AsObject = {
    fightidsbycategoryidMap: Array<[string, ListOfString.AsObject]>,
  }
}

export class GetCategoryResponse extends jspb.Message {
  hasCategorystate(): boolean;
  clearCategorystate(): void;
  getCategorystate(): model_pb.CategoryState | undefined;
  setCategorystate(value?: model_pb.CategoryState): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCategoryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetCategoryResponse): GetCategoryResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCategoryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCategoryResponse;
  static deserializeBinaryFromReader(message: GetCategoryResponse, reader: jspb.BinaryReader): GetCategoryResponse;
}

export namespace GetCategoryResponse {
  export type AsObject = {
    categorystate?: model_pb.CategoryState.AsObject,
  }
}

export class GetPeriodFightsByMatsResponse extends jspb.Message {
  getFightidsbymatidMap(): jspb.Map<string, ListOfString>;
  clearFightidsbymatidMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPeriodFightsByMatsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPeriodFightsByMatsResponse): GetPeriodFightsByMatsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPeriodFightsByMatsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPeriodFightsByMatsResponse;
  static deserializeBinaryFromReader(message: GetPeriodFightsByMatsResponse, reader: jspb.BinaryReader): GetPeriodFightsByMatsResponse;
}

export namespace GetPeriodFightsByMatsResponse {
  export type AsObject = {
    fightidsbymatidMap: Array<[string, ListOfString.AsObject]>,
  }
}

export class GetFightResulOptionsResponse extends jspb.Message {
  clearFightresultoptionsList(): void;
  getFightresultoptionsList(): Array<model_pb.FightResultOption>;
  setFightresultoptionsList(value: Array<model_pb.FightResultOption>): void;
  addFightresultoptions(value?: model_pb.FightResultOption, index?: number): model_pb.FightResultOption;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFightResulOptionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetFightResulOptionsResponse): GetFightResulOptionsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetFightResulOptionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFightResulOptionsResponse;
  static deserializeBinaryFromReader(message: GetFightResulOptionsResponse, reader: jspb.BinaryReader): GetFightResulOptionsResponse;
}

export namespace GetFightResulOptionsResponse {
  export type AsObject = {
    fightresultoptionsList: Array<model_pb.FightResultOption.AsObject>,
  }
}

export class GetStagesForCategoryResponse extends jspb.Message {
  clearStagesList(): void;
  getStagesList(): Array<model_pb.StageDescriptor>;
  setStagesList(value: Array<model_pb.StageDescriptor>): void;
  addStages(value?: model_pb.StageDescriptor, index?: number): model_pb.StageDescriptor;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetStagesForCategoryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetStagesForCategoryResponse): GetStagesForCategoryResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetStagesForCategoryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetStagesForCategoryResponse;
  static deserializeBinaryFromReader(message: GetStagesForCategoryResponse, reader: jspb.BinaryReader): GetStagesForCategoryResponse;
}

export namespace GetStagesForCategoryResponse {
  export type AsObject = {
    stagesList: Array<model_pb.StageDescriptor.AsObject>,
  }
}

export class GetStageByIdResponse extends jspb.Message {
  hasStage(): boolean;
  clearStage(): void;
  getStage(): model_pb.StageDescriptor | undefined;
  setStage(value?: model_pb.StageDescriptor): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetStageByIdResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetStageByIdResponse): GetStageByIdResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetStageByIdResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetStageByIdResponse;
  static deserializeBinaryFromReader(message: GetStageByIdResponse, reader: jspb.BinaryReader): GetStageByIdResponse;
}

export namespace GetStageByIdResponse {
  export type AsObject = {
    stage?: model_pb.StageDescriptor.AsObject,
  }
}

export class GetStageFightsResponse extends jspb.Message {
  clearFightsList(): void;
  getFightsList(): Array<model_pb.FightDescription>;
  setFightsList(value: Array<model_pb.FightDescription>): void;
  addFights(value?: model_pb.FightDescription, index?: number): model_pb.FightDescription;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetStageFightsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetStageFightsResponse): GetStageFightsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetStageFightsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetStageFightsResponse;
  static deserializeBinaryFromReader(message: GetStageFightsResponse, reader: jspb.BinaryReader): GetStageFightsResponse;
}

export namespace GetStageFightsResponse {
  export type AsObject = {
    fightsList: Array<model_pb.FightDescription.AsObject>,
  }
}

export class GetAcademiesResponse extends jspb.Message {
  clearAcademiesList(): void;
  getAcademiesList(): Array<model_pb.FullAcademyInfo>;
  setAcademiesList(value: Array<model_pb.FullAcademyInfo>): void;
  addAcademies(value?: model_pb.FullAcademyInfo, index?: number): model_pb.FullAcademyInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAcademiesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAcademiesResponse): GetAcademiesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAcademiesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAcademiesResponse;
  static deserializeBinaryFromReader(message: GetAcademiesResponse, reader: jspb.BinaryReader): GetAcademiesResponse;
}

export namespace GetAcademiesResponse {
  export type AsObject = {
    academiesList: Array<model_pb.FullAcademyInfo.AsObject>,
  }
}

