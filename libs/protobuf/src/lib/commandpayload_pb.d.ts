// package: compservice.model.protobuf
// file: commandpayload.proto

import * as jspb from "google-protobuf";
import * as model_pb from "./model_pb";

export class AddAcademyPayload extends jspb.Message {
  hasAcademy(): boolean;
  clearAcademy(): void;
  getAcademy(): model_pb.FullAcademyInfo | undefined;
  setAcademy(value?: model_pb.FullAcademyInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddAcademyPayload.AsObject;
  static toObject(includeInstance: boolean, msg: AddAcademyPayload): AddAcademyPayload.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddAcademyPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddAcademyPayload;
  static deserializeBinaryFromReader(message: AddAcademyPayload, reader: jspb.BinaryReader): AddAcademyPayload;
}

export namespace AddAcademyPayload {
  export type AsObject = {
    academy?: model_pb.FullAcademyInfo.AsObject,
  }
}

export class AddCategoryPayload extends jspb.Message {
  hasCategory(): boolean;
  clearCategory(): void;
  getCategory(): model_pb.CategoryDescriptor | undefined;
  setCategory(value?: model_pb.CategoryDescriptor): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddCategoryPayload.AsObject;
  static toObject(includeInstance: boolean, msg: AddCategoryPayload): AddCategoryPayload.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddCategoryPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddCategoryPayload;
  static deserializeBinaryFromReader(message: AddCategoryPayload, reader: jspb.BinaryReader): AddCategoryPayload;
}

export namespace AddCategoryPayload {
  export type AsObject = {
    category?: model_pb.CategoryDescriptor.AsObject,
  }
}

export class AddCompetitorPayload extends jspb.Message {
  hasCompetitor(): boolean;
  clearCompetitor(): void;
  getCompetitor(): model_pb.Competitor | undefined;
  setCompetitor(value?: model_pb.Competitor): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddCompetitorPayload.AsObject;
  static toObject(includeInstance: boolean, msg: AddCompetitorPayload): AddCompetitorPayload.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddCompetitorPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddCompetitorPayload;
  static deserializeBinaryFromReader(message: AddCompetitorPayload, reader: jspb.BinaryReader): AddCompetitorPayload;
}

export namespace AddCompetitorPayload {
  export type AsObject = {
    competitor?: model_pb.Competitor.AsObject,
  }
}

export class AddRegistrationGroupPayload extends jspb.Message {
  getPeriodid(): string;
  setPeriodid(value: string): void;

  clearGroupsList(): void;
  getGroupsList(): Array<model_pb.RegistrationGroup>;
  setGroupsList(value: Array<model_pb.RegistrationGroup>): void;
  addGroups(value?: model_pb.RegistrationGroup, index?: number): model_pb.RegistrationGroup;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddRegistrationGroupPayload.AsObject;
  static toObject(includeInstance: boolean, msg: AddRegistrationGroupPayload): AddRegistrationGroupPayload.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddRegistrationGroupPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddRegistrationGroupPayload;
  static deserializeBinaryFromReader(message: AddRegistrationGroupPayload, reader: jspb.BinaryReader): AddRegistrationGroupPayload;
}

export namespace AddRegistrationGroupPayload {
  export type AsObject = {
    periodid: string,
    groupsList: Array<model_pb.RegistrationGroup.AsObject>,
  }
}

export class AddRegistrationPeriodPayload extends jspb.Message {
  hasPeriod(): boolean;
  clearPeriod(): void;
  getPeriod(): model_pb.RegistrationPeriod | undefined;
  setPeriod(value?: model_pb.RegistrationPeriod): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddRegistrationPeriodPayload.AsObject;
  static toObject(includeInstance: boolean, msg: AddRegistrationPeriodPayload): AddRegistrationPeriodPayload.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddRegistrationPeriodPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddRegistrationPeriodPayload;
  static deserializeBinaryFromReader(message: AddRegistrationPeriodPayload, reader: jspb.BinaryReader): AddRegistrationPeriodPayload;
}

export namespace AddRegistrationPeriodPayload {
  export type AsObject = {
    period?: model_pb.RegistrationPeriod.AsObject,
  }
}

export class AssignRegistrationGroupCategoriesPayload extends jspb.Message {
  getPeriodid(): string;
  setPeriodid(value: string): void;

  getGroupid(): string;
  setGroupid(value: string): void;

  clearCategoriesList(): void;
  getCategoriesList(): Array<string>;
  setCategoriesList(value: Array<string>): void;
  addCategories(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssignRegistrationGroupCategoriesPayload.AsObject;
  static toObject(includeInstance: boolean, msg: AssignRegistrationGroupCategoriesPayload): AssignRegistrationGroupCategoriesPayload.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssignRegistrationGroupCategoriesPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssignRegistrationGroupCategoriesPayload;
  static deserializeBinaryFromReader(message: AssignRegistrationGroupCategoriesPayload, reader: jspb.BinaryReader): AssignRegistrationGroupCategoriesPayload;
}

export namespace AssignRegistrationGroupCategoriesPayload {
  export type AsObject = {
    periodid: string,
    groupid: string,
    categoriesList: Array<string>,
  }
}

export class CategoryRegistrationStatusChangePayload extends jspb.Message {
  getNewstatus(): boolean;
  setNewstatus(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CategoryRegistrationStatusChangePayload.AsObject;
  static toObject(includeInstance: boolean, msg: CategoryRegistrationStatusChangePayload): CategoryRegistrationStatusChangePayload.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CategoryRegistrationStatusChangePayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CategoryRegistrationStatusChangePayload;
  static deserializeBinaryFromReader(message: CategoryRegistrationStatusChangePayload, reader: jspb.BinaryReader): CategoryRegistrationStatusChangePayload;
}

export namespace CategoryRegistrationStatusChangePayload {
  export type AsObject = {
    newstatus: boolean,
  }
}

export class ChangeCompetitorCategoryPayload extends jspb.Message {
  clearNewcategoriesList(): void;
  getNewcategoriesList(): Array<string>;
  setNewcategoriesList(value: Array<string>): void;
  addNewcategories(value: string, index?: number): string;

  clearOldcategoriesList(): void;
  getOldcategoriesList(): Array<string>;
  setOldcategoriesList(value: Array<string>): void;
  addOldcategories(value: string, index?: number): string;

  getFighterid(): string;
  setFighterid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChangeCompetitorCategoryPayload.AsObject;
  static toObject(includeInstance: boolean, msg: ChangeCompetitorCategoryPayload): ChangeCompetitorCategoryPayload.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChangeCompetitorCategoryPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChangeCompetitorCategoryPayload;
  static deserializeBinaryFromReader(message: ChangeCompetitorCategoryPayload, reader: jspb.BinaryReader): ChangeCompetitorCategoryPayload;
}

export namespace ChangeCompetitorCategoryPayload {
  export type AsObject = {
    newcategoriesList: Array<string>,
    oldcategoriesList: Array<string>,
    fighterid: string,
  }
}

export class ChangeFightOrderPayload extends jspb.Message {
  getFightid(): string;
  setFightid(value: string): void;

  getNewmatid(): string;
  setNewmatid(value: string): void;

  getNeworderonmat(): number;
  setNeworderonmat(value: number): void;

  getPeriodid(): string;
  setPeriodid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChangeFightOrderPayload.AsObject;
  static toObject(includeInstance: boolean, msg: ChangeFightOrderPayload): ChangeFightOrderPayload.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChangeFightOrderPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChangeFightOrderPayload;
  static deserializeBinaryFromReader(message: ChangeFightOrderPayload, reader: jspb.BinaryReader): ChangeFightOrderPayload;
}

export namespace ChangeFightOrderPayload {
  export type AsObject = {
    fightid: string,
    newmatid: string,
    neworderonmat: number,
    periodid: string,
  }
}

export class CompetitorCategoryAddedPayload extends jspb.Message {
  getNewcategoryid(): string;
  setNewcategoryid(value: string): void;

  getFighterid(): string;
  setFighterid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompetitorCategoryAddedPayload.AsObject;
  static toObject(includeInstance: boolean, msg: CompetitorCategoryAddedPayload): CompetitorCategoryAddedPayload.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CompetitorCategoryAddedPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompetitorCategoryAddedPayload;
  static deserializeBinaryFromReader(message: CompetitorCategoryAddedPayload, reader: jspb.BinaryReader): CompetitorCategoryAddedPayload;
}

export namespace CompetitorCategoryAddedPayload {
  export type AsObject = {
    newcategoryid: string,
    fighterid: string,
  }
}

export class CompetitorMovedToGroup extends jspb.Message {
  getCompetitorid(): string;
  setCompetitorid(value: string): void;

  getGroupid(): string;
  setGroupid(value: string): void;

  getChangetype(): GroupChangeTypeMap[keyof GroupChangeTypeMap];
  setChangetype(value: GroupChangeTypeMap[keyof GroupChangeTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompetitorMovedToGroup.AsObject;
  static toObject(includeInstance: boolean, msg: CompetitorMovedToGroup): CompetitorMovedToGroup.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CompetitorMovedToGroup, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompetitorMovedToGroup;
  static deserializeBinaryFromReader(message: CompetitorMovedToGroup, reader: jspb.BinaryReader): CompetitorMovedToGroup;
}

export namespace CompetitorMovedToGroup {
  export type AsObject = {
    competitorid: string,
    groupid: string,
    changetype: GroupChangeTypeMap[keyof GroupChangeTypeMap],
  }
}

export class CreateCompetitionPayload extends jspb.Message {
  hasProperties(): boolean;
  clearProperties(): void;
  getProperties(): model_pb.CompetitionProperties | undefined;
  setProperties(value?: model_pb.CompetitionProperties): void;

  hasReginfo(): boolean;
  clearReginfo(): void;
  getReginfo(): model_pb.RegistrationInfo | undefined;
  setReginfo(value?: model_pb.RegistrationInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCompetitionPayload.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCompetitionPayload): CreateCompetitionPayload.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateCompetitionPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCompetitionPayload;
  static deserializeBinaryFromReader(message: CreateCompetitionPayload, reader: jspb.BinaryReader): CreateCompetitionPayload;
}

export namespace CreateCompetitionPayload {
  export type AsObject = {
    properties?: model_pb.CompetitionProperties.AsObject,
    reginfo?: model_pb.RegistrationInfo.AsObject,
  }
}

export class CreateFakeCompetitorsPayload extends jspb.Message {
  getNumberofcompetitors(): number;
  setNumberofcompetitors(value: number): void;

  getNumberofacademies(): number;
  setNumberofacademies(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateFakeCompetitorsPayload.AsObject;
  static toObject(includeInstance: boolean, msg: CreateFakeCompetitorsPayload): CreateFakeCompetitorsPayload.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateFakeCompetitorsPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateFakeCompetitorsPayload;
  static deserializeBinaryFromReader(message: CreateFakeCompetitorsPayload, reader: jspb.BinaryReader): CreateFakeCompetitorsPayload;
}

export namespace CreateFakeCompetitorsPayload {
  export type AsObject = {
    numberofcompetitors: number,
    numberofacademies: number,
  }
}

export class DeleteRegistrationGroupPayload extends jspb.Message {
  getPeriodid(): string;
  setPeriodid(value: string): void;

  getGroupid(): string;
  setGroupid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteRegistrationGroupPayload.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteRegistrationGroupPayload): DeleteRegistrationGroupPayload.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteRegistrationGroupPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteRegistrationGroupPayload;
  static deserializeBinaryFromReader(message: DeleteRegistrationGroupPayload, reader: jspb.BinaryReader): DeleteRegistrationGroupPayload;
}

export namespace DeleteRegistrationGroupPayload {
  export type AsObject = {
    periodid: string,
    groupid: string,
  }
}

export class DeleteRegistrationPeriodPayload extends jspb.Message {
  getPeriodid(): string;
  setPeriodid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteRegistrationPeriodPayload.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteRegistrationPeriodPayload): DeleteRegistrationPeriodPayload.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteRegistrationPeriodPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteRegistrationPeriodPayload;
  static deserializeBinaryFromReader(message: DeleteRegistrationPeriodPayload, reader: jspb.BinaryReader): DeleteRegistrationPeriodPayload;
}

export namespace DeleteRegistrationPeriodPayload {
  export type AsObject = {
    periodid: string,
  }
}

export class FightEditorApplyChangesPayload extends jspb.Message {
  getStageid(): string;
  setStageid(value: string): void;

  clearBracketschangesList(): void;
  getBracketschangesList(): Array<CompetitorsOfFightUpdated>;
  setBracketschangesList(value: Array<CompetitorsOfFightUpdated>): void;
  addBracketschanges(value?: CompetitorsOfFightUpdated, index?: number): CompetitorsOfFightUpdated;

  clearCompetitormovedtogroupsList(): void;
  getCompetitormovedtogroupsList(): Array<CompetitorMovedToGroup>;
  setCompetitormovedtogroupsList(value: Array<CompetitorMovedToGroup>): void;
  addCompetitormovedtogroups(value?: CompetitorMovedToGroup, index?: number): CompetitorMovedToGroup;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FightEditorApplyChangesPayload.AsObject;
  static toObject(includeInstance: boolean, msg: FightEditorApplyChangesPayload): FightEditorApplyChangesPayload.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FightEditorApplyChangesPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FightEditorApplyChangesPayload;
  static deserializeBinaryFromReader(message: FightEditorApplyChangesPayload, reader: jspb.BinaryReader): FightEditorApplyChangesPayload;
}

export namespace FightEditorApplyChangesPayload {
  export type AsObject = {
    stageid: string,
    bracketschangesList: Array<CompetitorsOfFightUpdated.AsObject>,
    competitormovedtogroupsList: Array<CompetitorMovedToGroup.AsObject>,
  }
}

export class CompetitorsOfFightUpdated extends jspb.Message {
  getFightid(): string;
  setFightid(value: string): void;

  clearCompetitorsList(): void;
  getCompetitorsList(): Array<string>;
  setCompetitorsList(value: Array<string>): void;
  addCompetitors(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompetitorsOfFightUpdated.AsObject;
  static toObject(includeInstance: boolean, msg: CompetitorsOfFightUpdated): CompetitorsOfFightUpdated.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CompetitorsOfFightUpdated, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompetitorsOfFightUpdated;
  static deserializeBinaryFromReader(message: CompetitorsOfFightUpdated, reader: jspb.BinaryReader): CompetitorsOfFightUpdated;
}

export namespace CompetitorsOfFightUpdated {
  export type AsObject = {
    fightid: string,
    competitorsList: Array<string>,
  }
}

export class GenerateAbsoluteCategoryPayload extends jspb.Message {
  clearCompetitorsList(): void;
  getCompetitorsList(): Array<string>;
  setCompetitorsList(value: Array<string>): void;
  addCompetitors(value: string, index?: number): string;

  hasCategory(): boolean;
  clearCategory(): void;
  getCategory(): model_pb.CategoryDescriptor | undefined;
  setCategory(value?: model_pb.CategoryDescriptor): void;

  getCompetitionid(): string;
  setCompetitionid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateAbsoluteCategoryPayload.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateAbsoluteCategoryPayload): GenerateAbsoluteCategoryPayload.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GenerateAbsoluteCategoryPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateAbsoluteCategoryPayload;
  static deserializeBinaryFromReader(message: GenerateAbsoluteCategoryPayload, reader: jspb.BinaryReader): GenerateAbsoluteCategoryPayload;
}

export namespace GenerateAbsoluteCategoryPayload {
  export type AsObject = {
    competitorsList: Array<string>,
    category?: model_pb.CategoryDescriptor.AsObject,
    competitionid: string,
  }
}

export class GenerateBracketsPayload extends jspb.Message {
  clearStagedescriptorsList(): void;
  getStagedescriptorsList(): Array<model_pb.StageDescriptor>;
  setStagedescriptorsList(value: Array<model_pb.StageDescriptor>): void;
  addStagedescriptors(value?: model_pb.StageDescriptor, index?: number): model_pb.StageDescriptor;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateBracketsPayload.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateBracketsPayload): GenerateBracketsPayload.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GenerateBracketsPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateBracketsPayload;
  static deserializeBinaryFromReader(message: GenerateBracketsPayload, reader: jspb.BinaryReader): GenerateBracketsPayload;
}

export namespace GenerateBracketsPayload {
  export type AsObject = {
    stagedescriptorsList: Array<model_pb.StageDescriptor.AsObject>,
  }
}

export class GenerateCategoriesFromRestrictionsPayload extends jspb.Message {
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
  toObject(includeInstance?: boolean): GenerateCategoriesFromRestrictionsPayload.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateCategoriesFromRestrictionsPayload): GenerateCategoriesFromRestrictionsPayload.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GenerateCategoriesFromRestrictionsPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateCategoriesFromRestrictionsPayload;
  static deserializeBinaryFromReader(message: GenerateCategoriesFromRestrictionsPayload, reader: jspb.BinaryReader): GenerateCategoriesFromRestrictionsPayload;
}

export namespace GenerateCategoriesFromRestrictionsPayload {
  export type AsObject = {
    restrictionsList: Array<model_pb.CategoryRestriction.AsObject>,
    idtreesList: Array<model_pb.AdjacencyList.AsObject>,
    restrictionnamesList: Array<string>,
  }
}

export class GenerateSchedulePayload extends jspb.Message {
  clearPeriodsList(): void;
  getPeriodsList(): Array<model_pb.Period>;
  setPeriodsList(value: Array<model_pb.Period>): void;
  addPeriods(value?: model_pb.Period, index?: number): model_pb.Period;

  clearMatsList(): void;
  getMatsList(): Array<model_pb.MatDescription>;
  setMatsList(value: Array<model_pb.MatDescription>): void;
  addMats(value?: model_pb.MatDescription, index?: number): model_pb.MatDescription;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateSchedulePayload.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateSchedulePayload): GenerateSchedulePayload.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GenerateSchedulePayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateSchedulePayload;
  static deserializeBinaryFromReader(message: GenerateSchedulePayload, reader: jspb.BinaryReader): GenerateSchedulePayload;
}

export namespace GenerateSchedulePayload {
  export type AsObject = {
    periodsList: Array<model_pb.Period.AsObject>,
    matsList: Array<model_pb.MatDescription.AsObject>,
  }
}

export class PropagateCompetitorsPayload extends jspb.Message {
  getManualoverride(): boolean;
  setManualoverride(value: boolean): void;

  getPropagatetostageid(): string;
  setPropagatetostageid(value: string): void;

  getPreviousstageid(): string;
  setPreviousstageid(value: string): void;

  clearSelectoroverridesList(): void;
  getSelectoroverridesList(): Array<model_pb.CompetitorSelector>;
  setSelectoroverridesList(value: Array<model_pb.CompetitorSelector>): void;
  addSelectoroverrides(value?: model_pb.CompetitorSelector, index?: number): model_pb.CompetitorSelector;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PropagateCompetitorsPayload.AsObject;
  static toObject(includeInstance: boolean, msg: PropagateCompetitorsPayload): PropagateCompetitorsPayload.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PropagateCompetitorsPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PropagateCompetitorsPayload;
  static deserializeBinaryFromReader(message: PropagateCompetitorsPayload, reader: jspb.BinaryReader): PropagateCompetitorsPayload;
}

export namespace PropagateCompetitorsPayload {
  export type AsObject = {
    manualoverride: boolean,
    propagatetostageid: string,
    previousstageid: string,
    selectoroverridesList: Array<model_pb.CompetitorSelector.AsObject>,
  }
}

export class RegistrationPeriodAddRegistrationGroupPayload extends jspb.Message {
  getGroupid(): string;
  setGroupid(value: string): void;

  getPeriodid(): string;
  setPeriodid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegistrationPeriodAddRegistrationGroupPayload.AsObject;
  static toObject(includeInstance: boolean, msg: RegistrationPeriodAddRegistrationGroupPayload): RegistrationPeriodAddRegistrationGroupPayload.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RegistrationPeriodAddRegistrationGroupPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegistrationPeriodAddRegistrationGroupPayload;
  static deserializeBinaryFromReader(message: RegistrationPeriodAddRegistrationGroupPayload, reader: jspb.BinaryReader): RegistrationPeriodAddRegistrationGroupPayload;
}

export namespace RegistrationPeriodAddRegistrationGroupPayload {
  export type AsObject = {
    groupid: string,
    periodid: string,
  }
}

export class RemoveAcademyPayload extends jspb.Message {
  getAcademyid(): string;
  setAcademyid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveAcademyPayload.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveAcademyPayload): RemoveAcademyPayload.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveAcademyPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveAcademyPayload;
  static deserializeBinaryFromReader(message: RemoveAcademyPayload, reader: jspb.BinaryReader): RemoveAcademyPayload;
}

export namespace RemoveAcademyPayload {
  export type AsObject = {
    academyid: string,
  }
}

export class RemoveCompetitorPayload extends jspb.Message {
  getCompetitorid(): string;
  setCompetitorid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveCompetitorPayload.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveCompetitorPayload): RemoveCompetitorPayload.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveCompetitorPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveCompetitorPayload;
  static deserializeBinaryFromReader(message: RemoveCompetitorPayload, reader: jspb.BinaryReader): RemoveCompetitorPayload;
}

export namespace RemoveCompetitorPayload {
  export type AsObject = {
    competitorid: string,
  }
}

export class SetFightResultPayload extends jspb.Message {
  getFightid(): string;
  setFightid(value: string): void;

  hasFightresult(): boolean;
  clearFightresult(): void;
  getFightresult(): model_pb.FightResult | undefined;
  setFightresult(value?: model_pb.FightResult): void;

  clearScoresList(): void;
  getScoresList(): Array<model_pb.CompScore>;
  setScoresList(value: Array<model_pb.CompScore>): void;
  addScores(value?: model_pb.CompScore, index?: number): model_pb.CompScore;

  getStatus(): model_pb.FightStatusMap[keyof model_pb.FightStatusMap];
  setStatus(value: model_pb.FightStatusMap[keyof model_pb.FightStatusMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetFightResultPayload.AsObject;
  static toObject(includeInstance: boolean, msg: SetFightResultPayload): SetFightResultPayload.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetFightResultPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetFightResultPayload;
  static deserializeBinaryFromReader(message: SetFightResultPayload, reader: jspb.BinaryReader): SetFightResultPayload;
}

export namespace SetFightResultPayload {
  export type AsObject = {
    fightid: string,
    fightresult?: model_pb.FightResult.AsObject,
    scoresList: Array<model_pb.CompScore.AsObject>,
    status: model_pb.FightStatusMap[keyof model_pb.FightStatusMap],
  }
}

export class UpdateAcademyPayload extends jspb.Message {
  hasAcademy(): boolean;
  clearAcademy(): void;
  getAcademy(): model_pb.FullAcademyInfo | undefined;
  setAcademy(value?: model_pb.FullAcademyInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAcademyPayload.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAcademyPayload): UpdateAcademyPayload.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateAcademyPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAcademyPayload;
  static deserializeBinaryFromReader(message: UpdateAcademyPayload, reader: jspb.BinaryReader): UpdateAcademyPayload;
}

export namespace UpdateAcademyPayload {
  export type AsObject = {
    academy?: model_pb.FullAcademyInfo.AsObject,
  }
}

export class UpdateCompetionPropertiesPayload extends jspb.Message {
  hasCompetitionproperties(): boolean;
  clearCompetitionproperties(): void;
  getCompetitionproperties(): model_pb.CompetitionProperties | undefined;
  setCompetitionproperties(value?: model_pb.CompetitionProperties): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCompetionPropertiesPayload.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCompetionPropertiesPayload): UpdateCompetionPropertiesPayload.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateCompetionPropertiesPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCompetionPropertiesPayload;
  static deserializeBinaryFromReader(message: UpdateCompetionPropertiesPayload, reader: jspb.BinaryReader): UpdateCompetionPropertiesPayload;
}

export namespace UpdateCompetionPropertiesPayload {
  export type AsObject = {
    competitionproperties?: model_pb.CompetitionProperties.AsObject,
  }
}

export class UpdateCompetitorPayload extends jspb.Message {
  hasCompetitor(): boolean;
  clearCompetitor(): void;
  getCompetitor(): model_pb.Competitor | undefined;
  setCompetitor(value?: model_pb.Competitor): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCompetitorPayload.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCompetitorPayload): UpdateCompetitorPayload.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateCompetitorPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCompetitorPayload;
  static deserializeBinaryFromReader(message: UpdateCompetitorPayload, reader: jspb.BinaryReader): UpdateCompetitorPayload;
}

export namespace UpdateCompetitorPayload {
  export type AsObject = {
    competitor?: model_pb.Competitor.AsObject,
  }
}

export class UpdateRegistrationInfoPayload extends jspb.Message {
  hasRegistrationinfo(): boolean;
  clearRegistrationinfo(): void;
  getRegistrationinfo(): model_pb.RegistrationInfo | undefined;
  setRegistrationinfo(value?: model_pb.RegistrationInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateRegistrationInfoPayload.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateRegistrationInfoPayload): UpdateRegistrationInfoPayload.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateRegistrationInfoPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateRegistrationInfoPayload;
  static deserializeBinaryFromReader(message: UpdateRegistrationInfoPayload, reader: jspb.BinaryReader): UpdateRegistrationInfoPayload;
}

export namespace UpdateRegistrationInfoPayload {
  export type AsObject = {
    registrationinfo?: model_pb.RegistrationInfo.AsObject,
  }
}

export class UpdateStageStatusPayload extends jspb.Message {
  getStageid(): string;
  setStageid(value: string): void;

  getStatus(): model_pb.StageStatusMap[keyof model_pb.StageStatusMap];
  setStatus(value: model_pb.StageStatusMap[keyof model_pb.StageStatusMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateStageStatusPayload.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateStageStatusPayload): UpdateStageStatusPayload.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateStageStatusPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateStageStatusPayload;
  static deserializeBinaryFromReader(message: UpdateStageStatusPayload, reader: jspb.BinaryReader): UpdateStageStatusPayload;
}

export namespace UpdateStageStatusPayload {
  export type AsObject = {
    stageid: string,
    status: model_pb.StageStatusMap[keyof model_pb.StageStatusMap],
  }
}

export interface GroupChangeTypeMap {
  GROUP_CHANGE_TYPE_ADD: 0;
  GROUP_CHANGE_TYPE_REMOVE: 2;
}

export const GroupChangeType: GroupChangeTypeMap;

