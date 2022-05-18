// package: compservice.model.protobuf
// file: eventpayload.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as model_pb from "./model_pb";

export class BracketsGeneratedPayload extends jspb.Message {
  clearStagesList(): void;
  getStagesList(): Array<model_pb.StageDescriptor>;
  setStagesList(value: Array<model_pb.StageDescriptor>): void;
  addStages(value?: model_pb.StageDescriptor, index?: number): model_pb.StageDescriptor;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BracketsGeneratedPayload.AsObject;
  static toObject(includeInstance: boolean, msg: BracketsGeneratedPayload): BracketsGeneratedPayload.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BracketsGeneratedPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BracketsGeneratedPayload;
  static deserializeBinaryFromReader(message: BracketsGeneratedPayload, reader: jspb.BinaryReader): BracketsGeneratedPayload;
}

export namespace BracketsGeneratedPayload {
  export type AsObject = {
    stagesList: Array<model_pb.StageDescriptor.AsObject>,
  }
}

export class CategoryAddedPayload extends jspb.Message {
  hasCategorystate(): boolean;
  clearCategorystate(): void;
  getCategorystate(): model_pb.CategoryDescriptor | undefined;
  setCategorystate(value?: model_pb.CategoryDescriptor): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CategoryAddedPayload.AsObject;
  static toObject(includeInstance: boolean, msg: CategoryAddedPayload): CategoryAddedPayload.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CategoryAddedPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CategoryAddedPayload;
  static deserializeBinaryFromReader(message: CategoryAddedPayload, reader: jspb.BinaryReader): CategoryAddedPayload;
}

export namespace CategoryAddedPayload {
  export type AsObject = {
    categorystate?: model_pb.CategoryDescriptor.AsObject,
  }
}

export class CompetitionCreatedPayload extends jspb.Message {
  hasProperties(): boolean;
  clearProperties(): void;
  getProperties(): model_pb.CompetitionProperties | undefined;
  setProperties(value?: model_pb.CompetitionProperties): void;

  hasReginfo(): boolean;
  clearReginfo(): void;
  getReginfo(): model_pb.RegistrationInfo | undefined;
  setReginfo(value?: model_pb.RegistrationInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompetitionCreatedPayload.AsObject;
  static toObject(includeInstance: boolean, msg: CompetitionCreatedPayload): CompetitionCreatedPayload.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CompetitionCreatedPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompetitionCreatedPayload;
  static deserializeBinaryFromReader(message: CompetitionCreatedPayload, reader: jspb.BinaryReader): CompetitionCreatedPayload;
}

export namespace CompetitionCreatedPayload {
  export type AsObject = {
    properties?: model_pb.CompetitionProperties.AsObject,
    reginfo?: model_pb.RegistrationInfo.AsObject,
  }
}

export class CompetitionInfoPayload extends jspb.Message {
  getCompetitionid(): string;
  setCompetitionid(value: string): void;

  getMemberid(): string;
  setMemberid(value: string): void;

  getHost(): string;
  setHost(value: string): void;

  getPort(): number;
  setPort(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompetitionInfoPayload.AsObject;
  static toObject(includeInstance: boolean, msg: CompetitionInfoPayload): CompetitionInfoPayload.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CompetitionInfoPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompetitionInfoPayload;
  static deserializeBinaryFromReader(message: CompetitionInfoPayload, reader: jspb.BinaryReader): CompetitionInfoPayload;
}

export namespace CompetitionInfoPayload {
  export type AsObject = {
    competitionid: string,
    memberid: string,
    host: string,
    port: number,
  }
}

export class CompetitionPropertiesUpdatedPayload extends jspb.Message {
  hasProperties(): boolean;
  clearProperties(): void;
  getProperties(): model_pb.CompetitionProperties | undefined;
  setProperties(value?: model_pb.CompetitionProperties): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompetitionPropertiesUpdatedPayload.AsObject;
  static toObject(includeInstance: boolean, msg: CompetitionPropertiesUpdatedPayload): CompetitionPropertiesUpdatedPayload.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CompetitionPropertiesUpdatedPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompetitionPropertiesUpdatedPayload;
  static deserializeBinaryFromReader(message: CompetitionPropertiesUpdatedPayload, reader: jspb.BinaryReader): CompetitionPropertiesUpdatedPayload;
}

export namespace CompetitionPropertiesUpdatedPayload {
  export type AsObject = {
    properties?: model_pb.CompetitionProperties.AsObject,
  }
}

export class CompetitionStatusUpdatedPayload extends jspb.Message {
  getStatus(): model_pb.CompetitionStatusMap[keyof model_pb.CompetitionStatusMap];
  setStatus(value: model_pb.CompetitionStatusMap[keyof model_pb.CompetitionStatusMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompetitionStatusUpdatedPayload.AsObject;
  static toObject(includeInstance: boolean, msg: CompetitionStatusUpdatedPayload): CompetitionStatusUpdatedPayload.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CompetitionStatusUpdatedPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompetitionStatusUpdatedPayload;
  static deserializeBinaryFromReader(message: CompetitionStatusUpdatedPayload, reader: jspb.BinaryReader): CompetitionStatusUpdatedPayload;
}

export namespace CompetitionStatusUpdatedPayload {
  export type AsObject = {
    status: model_pb.CompetitionStatusMap[keyof model_pb.CompetitionStatusMap],
  }
}

export class CompetitorAddedPayload extends jspb.Message {
  hasCompetitor(): boolean;
  clearCompetitor(): void;
  getCompetitor(): model_pb.Competitor | undefined;
  setCompetitor(value?: model_pb.Competitor): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompetitorAddedPayload.AsObject;
  static toObject(includeInstance: boolean, msg: CompetitorAddedPayload): CompetitorAddedPayload.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CompetitorAddedPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompetitorAddedPayload;
  static deserializeBinaryFromReader(message: CompetitorAddedPayload, reader: jspb.BinaryReader): CompetitorAddedPayload;
}

export namespace CompetitorAddedPayload {
  export type AsObject = {
    competitor?: model_pb.Competitor.AsObject,
  }
}

export class CompetitorAssignmentDescriptor extends jspb.Message {
  getFromfightid(): string;
  setFromfightid(value: string): void;

  getTofightid(): string;
  setTofightid(value: string): void;

  getCompetitorid(): string;
  setCompetitorid(value: string): void;

  getReferencetype(): model_pb.FightReferenceTypeMap[keyof model_pb.FightReferenceTypeMap];
  setReferencetype(value: model_pb.FightReferenceTypeMap[keyof model_pb.FightReferenceTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompetitorAssignmentDescriptor.AsObject;
  static toObject(includeInstance: boolean, msg: CompetitorAssignmentDescriptor): CompetitorAssignmentDescriptor.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CompetitorAssignmentDescriptor, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompetitorAssignmentDescriptor;
  static deserializeBinaryFromReader(message: CompetitorAssignmentDescriptor, reader: jspb.BinaryReader): CompetitorAssignmentDescriptor;
}

export namespace CompetitorAssignmentDescriptor {
  export type AsObject = {
    fromfightid: string,
    tofightid: string,
    competitorid: string,
    referencetype: model_pb.FightReferenceTypeMap[keyof model_pb.FightReferenceTypeMap],
  }
}

export class CompetitorRemovedPayload extends jspb.Message {
  getFighterid(): string;
  setFighterid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompetitorRemovedPayload.AsObject;
  static toObject(includeInstance: boolean, msg: CompetitorRemovedPayload): CompetitorRemovedPayload.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CompetitorRemovedPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompetitorRemovedPayload;
  static deserializeBinaryFromReader(message: CompetitorRemovedPayload, reader: jspb.BinaryReader): CompetitorRemovedPayload;
}

export namespace CompetitorRemovedPayload {
  export type AsObject = {
    fighterid: string,
  }
}

export class CompetitorsPropagatedToStagePayload extends jspb.Message {
  getStageid(): string;
  setStageid(value: string): void;

  clearPropagationsList(): void;
  getPropagationsList(): Array<CompetitorAssignmentDescriptor>;
  setPropagationsList(value: Array<CompetitorAssignmentDescriptor>): void;
  addPropagations(value?: CompetitorAssignmentDescriptor, index?: number): CompetitorAssignmentDescriptor;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompetitorsPropagatedToStagePayload.AsObject;
  static toObject(includeInstance: boolean, msg: CompetitorsPropagatedToStagePayload): CompetitorsPropagatedToStagePayload.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CompetitorsPropagatedToStagePayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompetitorsPropagatedToStagePayload;
  static deserializeBinaryFromReader(message: CompetitorsPropagatedToStagePayload, reader: jspb.BinaryReader): CompetitorsPropagatedToStagePayload;
}

export namespace CompetitorsPropagatedToStagePayload {
  export type AsObject = {
    stageid: string,
    propagationsList: Array<CompetitorAssignmentDescriptor.AsObject>,
  }
}

export class CompetitorUpdatedPayload extends jspb.Message {
  hasCompetitor(): boolean;
  clearCompetitor(): void;
  getCompetitor(): model_pb.Competitor | undefined;
  setCompetitor(value?: model_pb.Competitor): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompetitorUpdatedPayload.AsObject;
  static toObject(includeInstance: boolean, msg: CompetitorUpdatedPayload): CompetitorUpdatedPayload.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CompetitorUpdatedPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompetitorUpdatedPayload;
  static deserializeBinaryFromReader(message: CompetitorUpdatedPayload, reader: jspb.BinaryReader): CompetitorUpdatedPayload;
}

export namespace CompetitorUpdatedPayload {
  export type AsObject = {
    competitor?: model_pb.Competitor.AsObject,
  }
}

export class FightCompetitorsAssignedPayload extends jspb.Message {
  clearAssignmentsList(): void;
  getAssignmentsList(): Array<CompetitorAssignmentDescriptor>;
  setAssignmentsList(value: Array<CompetitorAssignmentDescriptor>): void;
  addAssignments(value?: CompetitorAssignmentDescriptor, index?: number): CompetitorAssignmentDescriptor;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FightCompetitorsAssignedPayload.AsObject;
  static toObject(includeInstance: boolean, msg: FightCompetitorsAssignedPayload): FightCompetitorsAssignedPayload.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FightCompetitorsAssignedPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FightCompetitorsAssignedPayload;
  static deserializeBinaryFromReader(message: FightCompetitorsAssignedPayload, reader: jspb.BinaryReader): FightCompetitorsAssignedPayload;
}

export namespace FightCompetitorsAssignedPayload {
  export type AsObject = {
    assignmentsList: Array<CompetitorAssignmentDescriptor.AsObject>,
  }
}

export class FightEditorChangesAppliedPayload extends jspb.Message {
  clearUpdatesList(): void;
  getUpdatesList(): Array<model_pb.FightDescription>;
  setUpdatesList(value: Array<model_pb.FightDescription>): void;
  addUpdates(value?: model_pb.FightDescription, index?: number): model_pb.FightDescription;

  clearNewfightsList(): void;
  getNewfightsList(): Array<model_pb.FightDescription>;
  setNewfightsList(value: Array<model_pb.FightDescription>): void;
  addNewfights(value?: model_pb.FightDescription, index?: number): model_pb.FightDescription;

  clearRemovedfighidsList(): void;
  getRemovedfighidsList(): Array<string>;
  setRemovedfighidsList(value: Array<string>): void;
  addRemovedfighids(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FightEditorChangesAppliedPayload.AsObject;
  static toObject(includeInstance: boolean, msg: FightEditorChangesAppliedPayload): FightEditorChangesAppliedPayload.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FightEditorChangesAppliedPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FightEditorChangesAppliedPayload;
  static deserializeBinaryFromReader(message: FightEditorChangesAppliedPayload, reader: jspb.BinaryReader): FightEditorChangesAppliedPayload;
}

export namespace FightEditorChangesAppliedPayload {
  export type AsObject = {
    updatesList: Array<model_pb.FightDescription.AsObject>,
    newfightsList: Array<model_pb.FightDescription.AsObject>,
    removedfighidsList: Array<string>,
  }
}

export class FightOrderUpdate extends jspb.Message {
  getFightid(): string;
  setFightid(value: string): void;

  getNumberonmat(): number;
  setNumberonmat(value: number): void;

  hasStarttime(): boolean;
  clearStarttime(): void;
  getStarttime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStarttime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getMatid(): string;
  setMatid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FightOrderUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: FightOrderUpdate): FightOrderUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FightOrderUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FightOrderUpdate;
  static deserializeBinaryFromReader(message: FightOrderUpdate, reader: jspb.BinaryReader): FightOrderUpdate;
}

export namespace FightOrderUpdate {
  export type AsObject = {
    fightid: string,
    numberonmat: number,
    starttime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    matid: string,
  }
}

export class FightsAddedToStagePayload extends jspb.Message {
  clearFightsList(): void;
  getFightsList(): Array<model_pb.FightDescription>;
  setFightsList(value: Array<model_pb.FightDescription>): void;
  addFights(value?: model_pb.FightDescription, index?: number): model_pb.FightDescription;

  getStageid(): string;
  setStageid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FightsAddedToStagePayload.AsObject;
  static toObject(includeInstance: boolean, msg: FightsAddedToStagePayload): FightsAddedToStagePayload.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FightsAddedToStagePayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FightsAddedToStagePayload;
  static deserializeBinaryFromReader(message: FightsAddedToStagePayload, reader: jspb.BinaryReader): FightsAddedToStagePayload;
}

export namespace FightsAddedToStagePayload {
  export type AsObject = {
    fightsList: Array<model_pb.FightDescription.AsObject>,
    stageid: string,
  }
}

export class FightStartTimeUpdatedPayload extends jspb.Message {
  clearNewfightsList(): void;
  getNewfightsList(): Array<model_pb.FightStartTimePair>;
  setNewfightsList(value: Array<model_pb.FightStartTimePair>): void;
  addNewfights(value?: model_pb.FightStartTimePair, index?: number): model_pb.FightStartTimePair;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FightStartTimeUpdatedPayload.AsObject;
  static toObject(includeInstance: boolean, msg: FightStartTimeUpdatedPayload): FightStartTimeUpdatedPayload.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FightStartTimeUpdatedPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FightStartTimeUpdatedPayload;
  static deserializeBinaryFromReader(message: FightStartTimeUpdatedPayload, reader: jspb.BinaryReader): FightStartTimeUpdatedPayload;
}

export namespace FightStartTimeUpdatedPayload {
  export type AsObject = {
    newfightsList: Array<model_pb.FightStartTimePair.AsObject>,
  }
}

export class MatsUpdatedPayload extends jspb.Message {
  clearMatsList(): void;
  getMatsList(): Array<model_pb.MatDescription>;
  setMatsList(value: Array<model_pb.MatDescription>): void;
  addMats(value?: model_pb.MatDescription, index?: number): model_pb.MatDescription;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MatsUpdatedPayload.AsObject;
  static toObject(includeInstance: boolean, msg: MatsUpdatedPayload): MatsUpdatedPayload.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MatsUpdatedPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MatsUpdatedPayload;
  static deserializeBinaryFromReader(message: MatsUpdatedPayload, reader: jspb.BinaryReader): MatsUpdatedPayload;
}

export namespace MatsUpdatedPayload {
  export type AsObject = {
    matsList: Array<model_pb.MatDescription.AsObject>,
  }
}

export class RegistrationGroupAddedPayload extends jspb.Message {
  getPeriodid(): string;
  setPeriodid(value: string): void;

  clearGroupsList(): void;
  getGroupsList(): Array<model_pb.RegistrationGroup>;
  setGroupsList(value: Array<model_pb.RegistrationGroup>): void;
  addGroups(value?: model_pb.RegistrationGroup, index?: number): model_pb.RegistrationGroup;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegistrationGroupAddedPayload.AsObject;
  static toObject(includeInstance: boolean, msg: RegistrationGroupAddedPayload): RegistrationGroupAddedPayload.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RegistrationGroupAddedPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegistrationGroupAddedPayload;
  static deserializeBinaryFromReader(message: RegistrationGroupAddedPayload, reader: jspb.BinaryReader): RegistrationGroupAddedPayload;
}

export namespace RegistrationGroupAddedPayload {
  export type AsObject = {
    periodid: string,
    groupsList: Array<model_pb.RegistrationGroup.AsObject>,
  }
}

export class RegistrationGroupCategoriesAssignedPayload extends jspb.Message {
  getPeriodid(): string;
  setPeriodid(value: string): void;

  getGroupid(): string;
  setGroupid(value: string): void;

  clearCategoriesList(): void;
  getCategoriesList(): Array<string>;
  setCategoriesList(value: Array<string>): void;
  addCategories(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegistrationGroupCategoriesAssignedPayload.AsObject;
  static toObject(includeInstance: boolean, msg: RegistrationGroupCategoriesAssignedPayload): RegistrationGroupCategoriesAssignedPayload.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RegistrationGroupCategoriesAssignedPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegistrationGroupCategoriesAssignedPayload;
  static deserializeBinaryFromReader(message: RegistrationGroupCategoriesAssignedPayload, reader: jspb.BinaryReader): RegistrationGroupCategoriesAssignedPayload;
}

export namespace RegistrationGroupCategoriesAssignedPayload {
  export type AsObject = {
    periodid: string,
    groupid: string,
    categoriesList: Array<string>,
  }
}

export class RegistrationGroupDeletedPayload extends jspb.Message {
  getPeriodid(): string;
  setPeriodid(value: string): void;

  getGroupid(): string;
  setGroupid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegistrationGroupDeletedPayload.AsObject;
  static toObject(includeInstance: boolean, msg: RegistrationGroupDeletedPayload): RegistrationGroupDeletedPayload.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RegistrationGroupDeletedPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegistrationGroupDeletedPayload;
  static deserializeBinaryFromReader(message: RegistrationGroupDeletedPayload, reader: jspb.BinaryReader): RegistrationGroupDeletedPayload;
}

export namespace RegistrationGroupDeletedPayload {
  export type AsObject = {
    periodid: string,
    groupid: string,
  }
}

export class RegistrationInfoUpdatedPayload extends jspb.Message {
  hasRegistrationinfo(): boolean;
  clearRegistrationinfo(): void;
  getRegistrationinfo(): model_pb.RegistrationInfo | undefined;
  setRegistrationinfo(value?: model_pb.RegistrationInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegistrationInfoUpdatedPayload.AsObject;
  static toObject(includeInstance: boolean, msg: RegistrationInfoUpdatedPayload): RegistrationInfoUpdatedPayload.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RegistrationInfoUpdatedPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegistrationInfoUpdatedPayload;
  static deserializeBinaryFromReader(message: RegistrationInfoUpdatedPayload, reader: jspb.BinaryReader): RegistrationInfoUpdatedPayload;
}

export namespace RegistrationInfoUpdatedPayload {
  export type AsObject = {
    registrationinfo?: model_pb.RegistrationInfo.AsObject,
  }
}

export class RegistrationPeriodAddedPayload extends jspb.Message {
  hasPeriod(): boolean;
  clearPeriod(): void;
  getPeriod(): model_pb.RegistrationPeriod | undefined;
  setPeriod(value?: model_pb.RegistrationPeriod): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegistrationPeriodAddedPayload.AsObject;
  static toObject(includeInstance: boolean, msg: RegistrationPeriodAddedPayload): RegistrationPeriodAddedPayload.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RegistrationPeriodAddedPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegistrationPeriodAddedPayload;
  static deserializeBinaryFromReader(message: RegistrationPeriodAddedPayload, reader: jspb.BinaryReader): RegistrationPeriodAddedPayload;
}

export namespace RegistrationPeriodAddedPayload {
  export type AsObject = {
    period?: model_pb.RegistrationPeriod.AsObject,
  }
}

export class RegistrationPeriodDeletedPayload extends jspb.Message {
  getPeriodid(): string;
  setPeriodid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegistrationPeriodDeletedPayload.AsObject;
  static toObject(includeInstance: boolean, msg: RegistrationPeriodDeletedPayload): RegistrationPeriodDeletedPayload.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RegistrationPeriodDeletedPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegistrationPeriodDeletedPayload;
  static deserializeBinaryFromReader(message: RegistrationPeriodDeletedPayload, reader: jspb.BinaryReader): RegistrationPeriodDeletedPayload;
}

export namespace RegistrationPeriodDeletedPayload {
  export type AsObject = {
    periodid: string,
  }
}

export class ScheduleGeneratedPayload extends jspb.Message {
  hasSchedule(): boolean;
  clearSchedule(): void;
  getSchedule(): model_pb.Schedule | undefined;
  setSchedule(value?: model_pb.Schedule): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScheduleGeneratedPayload.AsObject;
  static toObject(includeInstance: boolean, msg: ScheduleGeneratedPayload): ScheduleGeneratedPayload.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ScheduleGeneratedPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScheduleGeneratedPayload;
  static deserializeBinaryFromReader(message: ScheduleGeneratedPayload, reader: jspb.BinaryReader): ScheduleGeneratedPayload;
}

export namespace ScheduleGeneratedPayload {
  export type AsObject = {
    schedule?: model_pb.Schedule.AsObject,
  }
}

export class StageResultSetPayload extends jspb.Message {
  getStageid(): string;
  setStageid(value: string): void;

  clearResultsList(): void;
  getResultsList(): Array<model_pb.CompetitorStageResult>;
  setResultsList(value: Array<model_pb.CompetitorStageResult>): void;
  addResults(value?: model_pb.CompetitorStageResult, index?: number): model_pb.CompetitorStageResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StageResultSetPayload.AsObject;
  static toObject(includeInstance: boolean, msg: StageResultSetPayload): StageResultSetPayload.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StageResultSetPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StageResultSetPayload;
  static deserializeBinaryFromReader(message: StageResultSetPayload, reader: jspb.BinaryReader): StageResultSetPayload;
}

export namespace StageResultSetPayload {
  export type AsObject = {
    stageid: string,
    resultsList: Array<model_pb.CompetitorStageResult.AsObject>,
  }
}

export class StageStatusUpdatedPayload extends jspb.Message {
  getStageid(): string;
  setStageid(value: string): void;

  getStatus(): model_pb.StageStatusMap[keyof model_pb.StageStatusMap];
  setStatus(value: model_pb.StageStatusMap[keyof model_pb.StageStatusMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StageStatusUpdatedPayload.AsObject;
  static toObject(includeInstance: boolean, msg: StageStatusUpdatedPayload): StageStatusUpdatedPayload.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StageStatusUpdatedPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StageStatusUpdatedPayload;
  static deserializeBinaryFromReader(message: StageStatusUpdatedPayload, reader: jspb.BinaryReader): StageStatusUpdatedPayload;
}

export namespace StageStatusUpdatedPayload {
  export type AsObject = {
    stageid: string,
    status: model_pb.StageStatusMap[keyof model_pb.StageStatusMap],
  }
}

