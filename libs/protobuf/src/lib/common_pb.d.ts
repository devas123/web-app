// package: compservice.model.protobuf
// file: common.proto

import * as jspb from "google-protobuf";
import * as eventpayload_pb from "./eventpayload_pb";
import * as commandpayload_pb from "./commandpayload_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";

export class MessageInfo extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getCorrelationid(): string;
  setCorrelationid(value: string): void;

  getCompetitionid(): string;
  setCompetitionid(value: string): void;

  getCompetitorid(): string;
  setCompetitorid(value: string): void;

  getCategoryid(): string;
  setCategoryid(value: string): void;

  getMatid(): string;
  setMatid(value: string): void;

  hasAddacademypayload(): boolean;
  clearAddacademypayload(): void;
  getAddacademypayload(): commandpayload_pb.AddAcademyPayload | undefined;
  setAddacademypayload(value?: commandpayload_pb.AddAcademyPayload): void;

  hasAddcategorypayload(): boolean;
  clearAddcategorypayload(): void;
  getAddcategorypayload(): commandpayload_pb.AddCategoryPayload | undefined;
  setAddcategorypayload(value?: commandpayload_pb.AddCategoryPayload): void;

  hasAddcompetitorpayload(): boolean;
  clearAddcompetitorpayload(): void;
  getAddcompetitorpayload(): commandpayload_pb.AddCompetitorPayload | undefined;
  setAddcompetitorpayload(value?: commandpayload_pb.AddCompetitorPayload): void;

  hasAddregistrationgrouppayload(): boolean;
  clearAddregistrationgrouppayload(): void;
  getAddregistrationgrouppayload(): commandpayload_pb.AddRegistrationGroupPayload | undefined;
  setAddregistrationgrouppayload(value?: commandpayload_pb.AddRegistrationGroupPayload): void;

  hasAddregistrationperiodpayload(): boolean;
  clearAddregistrationperiodpayload(): void;
  getAddregistrationperiodpayload(): commandpayload_pb.AddRegistrationPeriodPayload | undefined;
  setAddregistrationperiodpayload(value?: commandpayload_pb.AddRegistrationPeriodPayload): void;

  hasAssignregistrationgroupcategoriespayload(): boolean;
  clearAssignregistrationgroupcategoriespayload(): void;
  getAssignregistrationgroupcategoriespayload(): commandpayload_pb.AssignRegistrationGroupCategoriesPayload | undefined;
  setAssignregistrationgroupcategoriespayload(value?: commandpayload_pb.AssignRegistrationGroupCategoriesPayload): void;

  hasCategoryregistrationstatuschangepayload(): boolean;
  clearCategoryregistrationstatuschangepayload(): void;
  getCategoryregistrationstatuschangepayload(): commandpayload_pb.CategoryRegistrationStatusChangePayload | undefined;
  setCategoryregistrationstatuschangepayload(value?: commandpayload_pb.CategoryRegistrationStatusChangePayload): void;

  hasChangecompetitorcategorypayload(): boolean;
  clearChangecompetitorcategorypayload(): void;
  getChangecompetitorcategorypayload(): commandpayload_pb.ChangeCompetitorCategoryPayload | undefined;
  setChangecompetitorcategorypayload(value?: commandpayload_pb.ChangeCompetitorCategoryPayload): void;

  hasChangefightorderpayload(): boolean;
  clearChangefightorderpayload(): void;
  getChangefightorderpayload(): commandpayload_pb.ChangeFightOrderPayload | undefined;
  setChangefightorderpayload(value?: commandpayload_pb.ChangeFightOrderPayload): void;

  hasCompetitorcategoryaddedpayload(): boolean;
  clearCompetitorcategoryaddedpayload(): void;
  getCompetitorcategoryaddedpayload(): commandpayload_pb.CompetitorCategoryAddedPayload | undefined;
  setCompetitorcategoryaddedpayload(value?: commandpayload_pb.CompetitorCategoryAddedPayload): void;

  hasCreatecompetitionpayload(): boolean;
  clearCreatecompetitionpayload(): void;
  getCreatecompetitionpayload(): commandpayload_pb.CreateCompetitionPayload | undefined;
  setCreatecompetitionpayload(value?: commandpayload_pb.CreateCompetitionPayload): void;

  hasCreatefakecompetitorspayload(): boolean;
  clearCreatefakecompetitorspayload(): void;
  getCreatefakecompetitorspayload(): commandpayload_pb.CreateFakeCompetitorsPayload | undefined;
  setCreatefakecompetitorspayload(value?: commandpayload_pb.CreateFakeCompetitorsPayload): void;

  hasDeleteregistrationgrouppayload(): boolean;
  clearDeleteregistrationgrouppayload(): void;
  getDeleteregistrationgrouppayload(): commandpayload_pb.DeleteRegistrationGroupPayload | undefined;
  setDeleteregistrationgrouppayload(value?: commandpayload_pb.DeleteRegistrationGroupPayload): void;

  hasDeleteregistrationperiodpayload(): boolean;
  clearDeleteregistrationperiodpayload(): void;
  getDeleteregistrationperiodpayload(): commandpayload_pb.DeleteRegistrationPeriodPayload | undefined;
  setDeleteregistrationperiodpayload(value?: commandpayload_pb.DeleteRegistrationPeriodPayload): void;

  hasFighteditorapplychangespayload(): boolean;
  clearFighteditorapplychangespayload(): void;
  getFighteditorapplychangespayload(): commandpayload_pb.FightEditorApplyChangesPayload | undefined;
  setFighteditorapplychangespayload(value?: commandpayload_pb.FightEditorApplyChangesPayload): void;

  hasGenerateabsolutecategorypayload(): boolean;
  clearGenerateabsolutecategorypayload(): void;
  getGenerateabsolutecategorypayload(): commandpayload_pb.GenerateAbsoluteCategoryPayload | undefined;
  setGenerateabsolutecategorypayload(value?: commandpayload_pb.GenerateAbsoluteCategoryPayload): void;

  hasGeneratebracketspayload(): boolean;
  clearGeneratebracketspayload(): void;
  getGeneratebracketspayload(): commandpayload_pb.GenerateBracketsPayload | undefined;
  setGeneratebracketspayload(value?: commandpayload_pb.GenerateBracketsPayload): void;

  hasGeneratecategoriesfromrestrictionspayload(): boolean;
  clearGeneratecategoriesfromrestrictionspayload(): void;
  getGeneratecategoriesfromrestrictionspayload(): commandpayload_pb.GenerateCategoriesFromRestrictionsPayload | undefined;
  setGeneratecategoriesfromrestrictionspayload(value?: commandpayload_pb.GenerateCategoriesFromRestrictionsPayload): void;

  hasGenerateschedulepayload(): boolean;
  clearGenerateschedulepayload(): void;
  getGenerateschedulepayload(): commandpayload_pb.GenerateSchedulePayload | undefined;
  setGenerateschedulepayload(value?: commandpayload_pb.GenerateSchedulePayload): void;

  hasPropagatecompetitorspayload(): boolean;
  clearPropagatecompetitorspayload(): void;
  getPropagatecompetitorspayload(): commandpayload_pb.PropagateCompetitorsPayload | undefined;
  setPropagatecompetitorspayload(value?: commandpayload_pb.PropagateCompetitorsPayload): void;

  hasRegistrationperiodaddregistrationgrouppayload(): boolean;
  clearRegistrationperiodaddregistrationgrouppayload(): void;
  getRegistrationperiodaddregistrationgrouppayload(): commandpayload_pb.RegistrationPeriodAddRegistrationGroupPayload | undefined;
  setRegistrationperiodaddregistrationgrouppayload(value?: commandpayload_pb.RegistrationPeriodAddRegistrationGroupPayload): void;

  hasRemoveacademypayload(): boolean;
  clearRemoveacademypayload(): void;
  getRemoveacademypayload(): commandpayload_pb.RemoveAcademyPayload | undefined;
  setRemoveacademypayload(value?: commandpayload_pb.RemoveAcademyPayload): void;

  hasRemovecompetitorpayload(): boolean;
  clearRemovecompetitorpayload(): void;
  getRemovecompetitorpayload(): commandpayload_pb.RemoveCompetitorPayload | undefined;
  setRemovecompetitorpayload(value?: commandpayload_pb.RemoveCompetitorPayload): void;

  hasSetfightresultpayload(): boolean;
  clearSetfightresultpayload(): void;
  getSetfightresultpayload(): commandpayload_pb.SetFightResultPayload | undefined;
  setSetfightresultpayload(value?: commandpayload_pb.SetFightResultPayload): void;

  hasUpdateacademypayload(): boolean;
  clearUpdateacademypayload(): void;
  getUpdateacademypayload(): commandpayload_pb.UpdateAcademyPayload | undefined;
  setUpdateacademypayload(value?: commandpayload_pb.UpdateAcademyPayload): void;

  hasUpdatecompetionpropertiespayload(): boolean;
  clearUpdatecompetionpropertiespayload(): void;
  getUpdatecompetionpropertiespayload(): commandpayload_pb.UpdateCompetionPropertiesPayload | undefined;
  setUpdatecompetionpropertiespayload(value?: commandpayload_pb.UpdateCompetionPropertiesPayload): void;

  hasUpdatecompetitorpayload(): boolean;
  clearUpdatecompetitorpayload(): void;
  getUpdatecompetitorpayload(): commandpayload_pb.UpdateCompetitorPayload | undefined;
  setUpdatecompetitorpayload(value?: commandpayload_pb.UpdateCompetitorPayload): void;

  hasUpdateregistrationinfopayload(): boolean;
  clearUpdateregistrationinfopayload(): void;
  getUpdateregistrationinfopayload(): commandpayload_pb.UpdateRegistrationInfoPayload | undefined;
  setUpdateregistrationinfopayload(value?: commandpayload_pb.UpdateRegistrationInfoPayload): void;

  hasUpdatestagestatuspayload(): boolean;
  clearUpdatestagestatuspayload(): void;
  getUpdatestagestatuspayload(): commandpayload_pb.UpdateStageStatusPayload | undefined;
  setUpdatestagestatuspayload(value?: commandpayload_pb.UpdateStageStatusPayload): void;

  hasBracketsgeneratedpayload(): boolean;
  clearBracketsgeneratedpayload(): void;
  getBracketsgeneratedpayload(): eventpayload_pb.BracketsGeneratedPayload | undefined;
  setBracketsgeneratedpayload(value?: eventpayload_pb.BracketsGeneratedPayload): void;

  hasCategoryaddedpayload(): boolean;
  clearCategoryaddedpayload(): void;
  getCategoryaddedpayload(): eventpayload_pb.CategoryAddedPayload | undefined;
  setCategoryaddedpayload(value?: eventpayload_pb.CategoryAddedPayload): void;

  hasCompetitioncreatedpayload(): boolean;
  clearCompetitioncreatedpayload(): void;
  getCompetitioncreatedpayload(): eventpayload_pb.CompetitionCreatedPayload | undefined;
  setCompetitioncreatedpayload(value?: eventpayload_pb.CompetitionCreatedPayload): void;

  hasCompetitioninfopayload(): boolean;
  clearCompetitioninfopayload(): void;
  getCompetitioninfopayload(): eventpayload_pb.CompetitionInfoPayload | undefined;
  setCompetitioninfopayload(value?: eventpayload_pb.CompetitionInfoPayload): void;

  hasCompetitionpropertiesupdatedpayload(): boolean;
  clearCompetitionpropertiesupdatedpayload(): void;
  getCompetitionpropertiesupdatedpayload(): eventpayload_pb.CompetitionPropertiesUpdatedPayload | undefined;
  setCompetitionpropertiesupdatedpayload(value?: eventpayload_pb.CompetitionPropertiesUpdatedPayload): void;

  hasCompetitionstatusupdatedpayload(): boolean;
  clearCompetitionstatusupdatedpayload(): void;
  getCompetitionstatusupdatedpayload(): eventpayload_pb.CompetitionStatusUpdatedPayload | undefined;
  setCompetitionstatusupdatedpayload(value?: eventpayload_pb.CompetitionStatusUpdatedPayload): void;

  hasCompetitoraddedpayload(): boolean;
  clearCompetitoraddedpayload(): void;
  getCompetitoraddedpayload(): eventpayload_pb.CompetitorAddedPayload | undefined;
  setCompetitoraddedpayload(value?: eventpayload_pb.CompetitorAddedPayload): void;

  hasCompetitorremovedpayload(): boolean;
  clearCompetitorremovedpayload(): void;
  getCompetitorremovedpayload(): eventpayload_pb.CompetitorRemovedPayload | undefined;
  setCompetitorremovedpayload(value?: eventpayload_pb.CompetitorRemovedPayload): void;

  hasCompetitorspropagatedtostagepayload(): boolean;
  clearCompetitorspropagatedtostagepayload(): void;
  getCompetitorspropagatedtostagepayload(): eventpayload_pb.CompetitorsPropagatedToStagePayload | undefined;
  setCompetitorspropagatedtostagepayload(value?: eventpayload_pb.CompetitorsPropagatedToStagePayload): void;

  hasCompetitorupdatedpayload(): boolean;
  clearCompetitorupdatedpayload(): void;
  getCompetitorupdatedpayload(): eventpayload_pb.CompetitorUpdatedPayload | undefined;
  setCompetitorupdatedpayload(value?: eventpayload_pb.CompetitorUpdatedPayload): void;

  hasFightcompetitorsassignedpayload(): boolean;
  clearFightcompetitorsassignedpayload(): void;
  getFightcompetitorsassignedpayload(): eventpayload_pb.FightCompetitorsAssignedPayload | undefined;
  setFightcompetitorsassignedpayload(value?: eventpayload_pb.FightCompetitorsAssignedPayload): void;

  hasFighteditorchangesappliedpayload(): boolean;
  clearFighteditorchangesappliedpayload(): void;
  getFighteditorchangesappliedpayload(): eventpayload_pb.FightEditorChangesAppliedPayload | undefined;
  setFighteditorchangesappliedpayload(value?: eventpayload_pb.FightEditorChangesAppliedPayload): void;

  hasFightsaddedtostagepayload(): boolean;
  clearFightsaddedtostagepayload(): void;
  getFightsaddedtostagepayload(): eventpayload_pb.FightsAddedToStagePayload | undefined;
  setFightsaddedtostagepayload(value?: eventpayload_pb.FightsAddedToStagePayload): void;

  hasFightstarttimeupdatedpayload(): boolean;
  clearFightstarttimeupdatedpayload(): void;
  getFightstarttimeupdatedpayload(): eventpayload_pb.FightStartTimeUpdatedPayload | undefined;
  setFightstarttimeupdatedpayload(value?: eventpayload_pb.FightStartTimeUpdatedPayload): void;

  hasMatsupdatedpayload(): boolean;
  clearMatsupdatedpayload(): void;
  getMatsupdatedpayload(): eventpayload_pb.MatsUpdatedPayload | undefined;
  setMatsupdatedpayload(value?: eventpayload_pb.MatsUpdatedPayload): void;

  hasRegistrationgroupaddedpayload(): boolean;
  clearRegistrationgroupaddedpayload(): void;
  getRegistrationgroupaddedpayload(): eventpayload_pb.RegistrationGroupAddedPayload | undefined;
  setRegistrationgroupaddedpayload(value?: eventpayload_pb.RegistrationGroupAddedPayload): void;

  hasRegistrationgroupcategoriesassignedpayload(): boolean;
  clearRegistrationgroupcategoriesassignedpayload(): void;
  getRegistrationgroupcategoriesassignedpayload(): eventpayload_pb.RegistrationGroupCategoriesAssignedPayload | undefined;
  setRegistrationgroupcategoriesassignedpayload(value?: eventpayload_pb.RegistrationGroupCategoriesAssignedPayload): void;

  hasRegistrationgroupdeletedpayload(): boolean;
  clearRegistrationgroupdeletedpayload(): void;
  getRegistrationgroupdeletedpayload(): eventpayload_pb.RegistrationGroupDeletedPayload | undefined;
  setRegistrationgroupdeletedpayload(value?: eventpayload_pb.RegistrationGroupDeletedPayload): void;

  hasRegistrationinfoupdatedpayload(): boolean;
  clearRegistrationinfoupdatedpayload(): void;
  getRegistrationinfoupdatedpayload(): eventpayload_pb.RegistrationInfoUpdatedPayload | undefined;
  setRegistrationinfoupdatedpayload(value?: eventpayload_pb.RegistrationInfoUpdatedPayload): void;

  hasRegistrationperiodaddedpayload(): boolean;
  clearRegistrationperiodaddedpayload(): void;
  getRegistrationperiodaddedpayload(): eventpayload_pb.RegistrationPeriodAddedPayload | undefined;
  setRegistrationperiodaddedpayload(value?: eventpayload_pb.RegistrationPeriodAddedPayload): void;

  hasRegistrationperioddeletedpayload(): boolean;
  clearRegistrationperioddeletedpayload(): void;
  getRegistrationperioddeletedpayload(): eventpayload_pb.RegistrationPeriodDeletedPayload | undefined;
  setRegistrationperioddeletedpayload(value?: eventpayload_pb.RegistrationPeriodDeletedPayload): void;

  hasSchedulegeneratedpayload(): boolean;
  clearSchedulegeneratedpayload(): void;
  getSchedulegeneratedpayload(): eventpayload_pb.ScheduleGeneratedPayload | undefined;
  setSchedulegeneratedpayload(value?: eventpayload_pb.ScheduleGeneratedPayload): void;

  hasStageresultsetpayload(): boolean;
  clearStageresultsetpayload(): void;
  getStageresultsetpayload(): eventpayload_pb.StageResultSetPayload | undefined;
  setStageresultsetpayload(value?: eventpayload_pb.StageResultSetPayload): void;

  hasStagestatusupdatedpayload(): boolean;
  clearStagestatusupdatedpayload(): void;
  getStagestatusupdatedpayload(): eventpayload_pb.StageStatusUpdatedPayload | undefined;
  setStagestatusupdatedpayload(value?: eventpayload_pb.StageStatusUpdatedPayload): void;

  getPayloadCase(): MessageInfo.PayloadCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MessageInfo.AsObject;
  static toObject(includeInstance: boolean, msg: MessageInfo): MessageInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MessageInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MessageInfo;
  static deserializeBinaryFromReader(message: MessageInfo, reader: jspb.BinaryReader): MessageInfo;
}

export namespace MessageInfo {
  export type AsObject = {
    id: string,
    correlationid: string,
    competitionid: string,
    competitorid: string,
    categoryid: string,
    matid: string,
    addacademypayload?: commandpayload_pb.AddAcademyPayload.AsObject,
    addcategorypayload?: commandpayload_pb.AddCategoryPayload.AsObject,
    addcompetitorpayload?: commandpayload_pb.AddCompetitorPayload.AsObject,
    addregistrationgrouppayload?: commandpayload_pb.AddRegistrationGroupPayload.AsObject,
    addregistrationperiodpayload?: commandpayload_pb.AddRegistrationPeriodPayload.AsObject,
    assignregistrationgroupcategoriespayload?: commandpayload_pb.AssignRegistrationGroupCategoriesPayload.AsObject,
    categoryregistrationstatuschangepayload?: commandpayload_pb.CategoryRegistrationStatusChangePayload.AsObject,
    changecompetitorcategorypayload?: commandpayload_pb.ChangeCompetitorCategoryPayload.AsObject,
    changefightorderpayload?: commandpayload_pb.ChangeFightOrderPayload.AsObject,
    competitorcategoryaddedpayload?: commandpayload_pb.CompetitorCategoryAddedPayload.AsObject,
    createcompetitionpayload?: commandpayload_pb.CreateCompetitionPayload.AsObject,
    createfakecompetitorspayload?: commandpayload_pb.CreateFakeCompetitorsPayload.AsObject,
    deleteregistrationgrouppayload?: commandpayload_pb.DeleteRegistrationGroupPayload.AsObject,
    deleteregistrationperiodpayload?: commandpayload_pb.DeleteRegistrationPeriodPayload.AsObject,
    fighteditorapplychangespayload?: commandpayload_pb.FightEditorApplyChangesPayload.AsObject,
    generateabsolutecategorypayload?: commandpayload_pb.GenerateAbsoluteCategoryPayload.AsObject,
    generatebracketspayload?: commandpayload_pb.GenerateBracketsPayload.AsObject,
    generatecategoriesfromrestrictionspayload?: commandpayload_pb.GenerateCategoriesFromRestrictionsPayload.AsObject,
    generateschedulepayload?: commandpayload_pb.GenerateSchedulePayload.AsObject,
    propagatecompetitorspayload?: commandpayload_pb.PropagateCompetitorsPayload.AsObject,
    registrationperiodaddregistrationgrouppayload?: commandpayload_pb.RegistrationPeriodAddRegistrationGroupPayload.AsObject,
    removeacademypayload?: commandpayload_pb.RemoveAcademyPayload.AsObject,
    removecompetitorpayload?: commandpayload_pb.RemoveCompetitorPayload.AsObject,
    setfightresultpayload?: commandpayload_pb.SetFightResultPayload.AsObject,
    updateacademypayload?: commandpayload_pb.UpdateAcademyPayload.AsObject,
    updatecompetionpropertiespayload?: commandpayload_pb.UpdateCompetionPropertiesPayload.AsObject,
    updatecompetitorpayload?: commandpayload_pb.UpdateCompetitorPayload.AsObject,
    updateregistrationinfopayload?: commandpayload_pb.UpdateRegistrationInfoPayload.AsObject,
    updatestagestatuspayload?: commandpayload_pb.UpdateStageStatusPayload.AsObject,
    bracketsgeneratedpayload?: eventpayload_pb.BracketsGeneratedPayload.AsObject,
    categoryaddedpayload?: eventpayload_pb.CategoryAddedPayload.AsObject,
    competitioncreatedpayload?: eventpayload_pb.CompetitionCreatedPayload.AsObject,
    competitioninfopayload?: eventpayload_pb.CompetitionInfoPayload.AsObject,
    competitionpropertiesupdatedpayload?: eventpayload_pb.CompetitionPropertiesUpdatedPayload.AsObject,
    competitionstatusupdatedpayload?: eventpayload_pb.CompetitionStatusUpdatedPayload.AsObject,
    competitoraddedpayload?: eventpayload_pb.CompetitorAddedPayload.AsObject,
    competitorremovedpayload?: eventpayload_pb.CompetitorRemovedPayload.AsObject,
    competitorspropagatedtostagepayload?: eventpayload_pb.CompetitorsPropagatedToStagePayload.AsObject,
    competitorupdatedpayload?: eventpayload_pb.CompetitorUpdatedPayload.AsObject,
    fightcompetitorsassignedpayload?: eventpayload_pb.FightCompetitorsAssignedPayload.AsObject,
    fighteditorchangesappliedpayload?: eventpayload_pb.FightEditorChangesAppliedPayload.AsObject,
    fightsaddedtostagepayload?: eventpayload_pb.FightsAddedToStagePayload.AsObject,
    fightstarttimeupdatedpayload?: eventpayload_pb.FightStartTimeUpdatedPayload.AsObject,
    matsupdatedpayload?: eventpayload_pb.MatsUpdatedPayload.AsObject,
    registrationgroupaddedpayload?: eventpayload_pb.RegistrationGroupAddedPayload.AsObject,
    registrationgroupcategoriesassignedpayload?: eventpayload_pb.RegistrationGroupCategoriesAssignedPayload.AsObject,
    registrationgroupdeletedpayload?: eventpayload_pb.RegistrationGroupDeletedPayload.AsObject,
    registrationinfoupdatedpayload?: eventpayload_pb.RegistrationInfoUpdatedPayload.AsObject,
    registrationperiodaddedpayload?: eventpayload_pb.RegistrationPeriodAddedPayload.AsObject,
    registrationperioddeletedpayload?: eventpayload_pb.RegistrationPeriodDeletedPayload.AsObject,
    schedulegeneratedpayload?: eventpayload_pb.ScheduleGeneratedPayload.AsObject,
    stageresultsetpayload?: eventpayload_pb.StageResultSetPayload.AsObject,
    stagestatusupdatedpayload?: eventpayload_pb.StageStatusUpdatedPayload.AsObject,
  }

  export enum PayloadCase {
    PAYLOAD_NOT_SET = 0,
    ADDACADEMYPAYLOAD = 11,
    ADDCATEGORYPAYLOAD = 12,
    ADDCOMPETITORPAYLOAD = 13,
    ADDREGISTRATIONGROUPPAYLOAD = 14,
    ADDREGISTRATIONPERIODPAYLOAD = 15,
    ASSIGNREGISTRATIONGROUPCATEGORIESPAYLOAD = 16,
    CATEGORYREGISTRATIONSTATUSCHANGEPAYLOAD = 17,
    CHANGECOMPETITORCATEGORYPAYLOAD = 18,
    CHANGEFIGHTORDERPAYLOAD = 19,
    COMPETITORCATEGORYADDEDPAYLOAD = 110,
    CREATECOMPETITIONPAYLOAD = 111,
    CREATEFAKECOMPETITORSPAYLOAD = 112,
    DELETEREGISTRATIONGROUPPAYLOAD = 113,
    DELETEREGISTRATIONPERIODPAYLOAD = 114,
    FIGHTEDITORAPPLYCHANGESPAYLOAD = 115,
    GENERATEABSOLUTECATEGORYPAYLOAD = 116,
    GENERATEBRACKETSPAYLOAD = 117,
    GENERATECATEGORIESFROMRESTRICTIONSPAYLOAD = 118,
    GENERATESCHEDULEPAYLOAD = 119,
    PROPAGATECOMPETITORSPAYLOAD = 120,
    REGISTRATIONPERIODADDREGISTRATIONGROUPPAYLOAD = 121,
    REMOVEACADEMYPAYLOAD = 122,
    REMOVECOMPETITORPAYLOAD = 123,
    SETFIGHTRESULTPAYLOAD = 124,
    UPDATEACADEMYPAYLOAD = 125,
    UPDATECOMPETIONPROPERTIESPAYLOAD = 126,
    UPDATECOMPETITORPAYLOAD = 127,
    UPDATEREGISTRATIONINFOPAYLOAD = 128,
    UPDATESTAGESTATUSPAYLOAD = 129,
    BRACKETSGENERATEDPAYLOAD = 21,
    CATEGORYADDEDPAYLOAD = 22,
    COMPETITIONCREATEDPAYLOAD = 23,
    COMPETITIONINFOPAYLOAD = 24,
    COMPETITIONPROPERTIESUPDATEDPAYLOAD = 25,
    COMPETITIONSTATUSUPDATEDPAYLOAD = 26,
    COMPETITORADDEDPAYLOAD = 27,
    COMPETITORREMOVEDPAYLOAD = 28,
    COMPETITORSPROPAGATEDTOSTAGEPAYLOAD = 29,
    COMPETITORUPDATEDPAYLOAD = 210,
    FIGHTCOMPETITORSASSIGNEDPAYLOAD = 211,
    FIGHTEDITORCHANGESAPPLIEDPAYLOAD = 212,
    FIGHTSADDEDTOSTAGEPAYLOAD = 213,
    FIGHTSTARTTIMEUPDATEDPAYLOAD = 214,
    MATSUPDATEDPAYLOAD = 215,
    REGISTRATIONGROUPADDEDPAYLOAD = 216,
    REGISTRATIONGROUPCATEGORIESASSIGNEDPAYLOAD = 217,
    REGISTRATIONGROUPDELETEDPAYLOAD = 218,
    REGISTRATIONINFOUPDATEDPAYLOAD = 219,
    REGISTRATIONPERIODADDEDPAYLOAD = 220,
    REGISTRATIONPERIODDELETEDPAYLOAD = 221,
    SCHEDULEGENERATEDPAYLOAD = 222,
    STAGERESULTSETPAYLOAD = 223,
    STAGESTATUSUPDATEDPAYLOAD = 224,
  }
}

export class CommandCallback extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getCorrelationid(): string;
  setCorrelationid(value: string): void;

  getResult(): CommandExecutionResultMap[keyof CommandExecutionResultMap];
  setResult(value: CommandExecutionResultMap[keyof CommandExecutionResultMap]): void;

  hasErrorinfo(): boolean;
  clearErrorinfo(): void;
  getErrorinfo(): ErrorCallback | undefined;
  setErrorinfo(value?: ErrorCallback): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommandCallback.AsObject;
  static toObject(includeInstance: boolean, msg: CommandCallback): CommandCallback.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CommandCallback, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommandCallback;
  static deserializeBinaryFromReader(message: CommandCallback, reader: jspb.BinaryReader): CommandCallback;
}

export namespace CommandCallback {
  export type AsObject = {
    id: string,
    correlationid: string,
    result: CommandExecutionResultMap[keyof CommandExecutionResultMap],
    errorinfo?: ErrorCallback.AsObject,
  }
}

export class ErrorCallback extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): void;

  hasPayload(): boolean;
  clearPayload(): void;
  getPayload(): google_protobuf_any_pb.Any | undefined;
  setPayload(value?: google_protobuf_any_pb.Any): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ErrorCallback.AsObject;
  static toObject(includeInstance: boolean, msg: ErrorCallback): ErrorCallback.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ErrorCallback, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ErrorCallback;
  static deserializeBinaryFromReader(message: ErrorCallback, reader: jspb.BinaryReader): ErrorCallback;
}

export namespace ErrorCallback {
  export type AsObject = {
    message: string,
    payload?: google_protobuf_any_pb.Any.AsObject,
  }
}

export interface CommandExecutionResultMap {
  COMMAND_EXECUTION_RESULT_SUCCESS: 0;
  COMMAND_EXECUTION_RESULT_FAIL: 1;
}

export const CommandExecutionResult: CommandExecutionResultMap;

