// package: compservice.model.protobuf
// file: model.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class AdjacencyList extends jspb.Message {
  getRoot(): number;
  setRoot(value: number): void;

  clearVerticesList(): void;
  getVerticesList(): Array<AdjacencyListEntry>;
  setVerticesList(value: Array<AdjacencyListEntry>): void;
  addVertices(value?: AdjacencyListEntry, index?: number): AdjacencyListEntry;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdjacencyList.AsObject;
  static toObject(includeInstance: boolean, msg: AdjacencyList): AdjacencyList.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AdjacencyList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdjacencyList;
  static deserializeBinaryFromReader(message: AdjacencyList, reader: jspb.BinaryReader): AdjacencyList;
}

export namespace AdjacencyList {
  export type AsObject = {
    root: number,
    verticesList: Array<AdjacencyListEntry.AsObject>,
  }
}

export class AdjacencyListEntry extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  clearChildrenList(): void;
  getChildrenList(): Array<number>;
  setChildrenList(value: Array<number>): void;
  addChildren(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdjacencyListEntry.AsObject;
  static toObject(includeInstance: boolean, msg: AdjacencyListEntry): AdjacencyListEntry.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AdjacencyListEntry, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdjacencyListEntry;
  static deserializeBinaryFromReader(message: AdjacencyListEntry, reader: jspb.BinaryReader): AdjacencyListEntry;
}

export namespace AdjacencyListEntry {
  export type AsObject = {
    id: number,
    childrenList: Array<number>,
  }
}

export class ManagedCompetition extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  hasCompetitionname(): boolean;
  clearCompetitionname(): void;
  getCompetitionname(): string;
  setCompetitionname(value: string): void;

  getEventstopic(): string;
  setEventstopic(value: string): void;

  hasCreatorid(): boolean;
  clearCreatorid(): void;
  getCreatorid(): string;
  setCreatorid(value: string): void;

  hasCreatedat(): boolean;
  clearCreatedat(): void;
  getCreatedat(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedat(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasStartsat(): boolean;
  clearStartsat(): void;
  getStartsat(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartsat(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasEndsat(): boolean;
  clearEndsat(): void;
  getEndsat(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndsat(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getTimezone(): string;
  setTimezone(value: string): void;

  getStatus(): CompetitionStatusMap[keyof CompetitionStatusMap];
  setStatus(value: CompetitionStatusMap[keyof CompetitionStatusMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ManagedCompetition.AsObject;
  static toObject(includeInstance: boolean, msg: ManagedCompetition): ManagedCompetition.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ManagedCompetition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ManagedCompetition;
  static deserializeBinaryFromReader(message: ManagedCompetition, reader: jspb.BinaryReader): ManagedCompetition;
}

export namespace ManagedCompetition {
  export type AsObject = {
    id: string,
    competitionname: string,
    eventstopic: string,
    creatorid: string,
    createdat?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    startsat?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endsat?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    timezone: string,
    status: CompetitionStatusMap[keyof CompetitionStatusMap],
  }
}

export class StageDescriptor extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  hasName(): boolean;
  clearName(): void;
  getName(): string;
  setName(value: string): void;

  getCategoryid(): string;
  setCategoryid(value: string): void;

  getCompetitionid(): string;
  setCompetitionid(value: string): void;

  getBrackettype(): BracketTypeMap[keyof BracketTypeMap];
  setBrackettype(value: BracketTypeMap[keyof BracketTypeMap]): void;

  getStagetype(): StageTypeMap[keyof StageTypeMap];
  setStagetype(value: StageTypeMap[keyof StageTypeMap]): void;

  getStagestatus(): StageStatusMap[keyof StageStatusMap];
  setStagestatus(value: StageStatusMap[keyof StageStatusMap]): void;

  hasStageresultdescriptor(): boolean;
  clearStageresultdescriptor(): void;
  getStageresultdescriptor(): StageResultDescriptor | undefined;
  setStageresultdescriptor(value?: StageResultDescriptor): void;

  hasInputdescriptor(): boolean;
  clearInputdescriptor(): void;
  getInputdescriptor(): StageInputDescriptor | undefined;
  setInputdescriptor(value?: StageInputDescriptor): void;

  getStageorder(): number;
  setStageorder(value: number): void;

  getWaitforprevious(): boolean;
  setWaitforprevious(value: boolean): void;

  getHasthirdplacefight(): boolean;
  setHasthirdplacefight(value: boolean): void;

  clearGroupdescriptorsList(): void;
  getGroupdescriptorsList(): Array<GroupDescriptor>;
  setGroupdescriptorsList(value: Array<GroupDescriptor>): void;
  addGroupdescriptors(value?: GroupDescriptor, index?: number): GroupDescriptor;

  getNumberoffights(): number;
  setNumberoffights(value: number): void;

  getFightduration(): number;
  setFightduration(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StageDescriptor.AsObject;
  static toObject(includeInstance: boolean, msg: StageDescriptor): StageDescriptor.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StageDescriptor, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StageDescriptor;
  static deserializeBinaryFromReader(message: StageDescriptor, reader: jspb.BinaryReader): StageDescriptor;
}

export namespace StageDescriptor {
  export type AsObject = {
    id: string,
    name: string,
    categoryid: string,
    competitionid: string,
    brackettype: BracketTypeMap[keyof BracketTypeMap],
    stagetype: StageTypeMap[keyof StageTypeMap],
    stagestatus: StageStatusMap[keyof StageStatusMap],
    stageresultdescriptor?: StageResultDescriptor.AsObject,
    inputdescriptor?: StageInputDescriptor.AsObject,
    stageorder: number,
    waitforprevious: boolean,
    hasthirdplacefight: boolean,
    groupdescriptorsList: Array<GroupDescriptor.AsObject>,
    numberoffights: number,
    fightduration: number,
  }
}

export class GroupDescriptor extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getSize(): number;
  setSize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GroupDescriptor.AsObject;
  static toObject(includeInstance: boolean, msg: GroupDescriptor): GroupDescriptor.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GroupDescriptor, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GroupDescriptor;
  static deserializeBinaryFromReader(message: GroupDescriptor, reader: jspb.BinaryReader): GroupDescriptor;
}

export namespace GroupDescriptor {
  export type AsObject = {
    id: string,
    name: string,
    size: number,
  }
}

export class StageInputDescriptor extends jspb.Message {
  getNumberofcompetitors(): number;
  setNumberofcompetitors(value: number): void;

  clearSelectorsList(): void;
  getSelectorsList(): Array<CompetitorSelector>;
  setSelectorsList(value: Array<CompetitorSelector>): void;
  addSelectors(value?: CompetitorSelector, index?: number): CompetitorSelector;

  getDistributiontype(): DistributionTypeMap[keyof DistributionTypeMap];
  setDistributiontype(value: DistributionTypeMap[keyof DistributionTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StageInputDescriptor.AsObject;
  static toObject(includeInstance: boolean, msg: StageInputDescriptor): StageInputDescriptor.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StageInputDescriptor, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StageInputDescriptor;
  static deserializeBinaryFromReader(message: StageInputDescriptor, reader: jspb.BinaryReader): StageInputDescriptor;
}

export namespace StageInputDescriptor {
  export type AsObject = {
    numberofcompetitors: number,
    selectorsList: Array<CompetitorSelector.AsObject>,
    distributiontype: DistributionTypeMap[keyof DistributionTypeMap],
  }
}

export class CompetitorSelector extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getApplytostageid(): string;
  setApplytostageid(value: string): void;

  getLogicaloperator(): LogicalOperatorMap[keyof LogicalOperatorMap];
  setLogicaloperator(value: LogicalOperatorMap[keyof LogicalOperatorMap]): void;

  getClassifier(): SelectorClassifierMap[keyof SelectorClassifierMap];
  setClassifier(value: SelectorClassifierMap[keyof SelectorClassifierMap]): void;

  getOperator(): OperatorTypeMap[keyof OperatorTypeMap];
  setOperator(value: OperatorTypeMap[keyof OperatorTypeMap]): void;

  clearSelectorvalueList(): void;
  getSelectorvalueList(): Array<string>;
  setSelectorvalueList(value: Array<string>): void;
  addSelectorvalue(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompetitorSelector.AsObject;
  static toObject(includeInstance: boolean, msg: CompetitorSelector): CompetitorSelector.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CompetitorSelector, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompetitorSelector;
  static deserializeBinaryFromReader(message: CompetitorSelector, reader: jspb.BinaryReader): CompetitorSelector;
}

export namespace CompetitorSelector {
  export type AsObject = {
    id: string,
    applytostageid: string,
    logicaloperator: LogicalOperatorMap[keyof LogicalOperatorMap],
    classifier: SelectorClassifierMap[keyof SelectorClassifierMap],
    operator: OperatorTypeMap[keyof OperatorTypeMap],
    selectorvalueList: Array<string>,
  }
}

export class StageResultDescriptor extends jspb.Message {
  hasName(): boolean;
  clearName(): void;
  getName(): string;
  setName(value: string): void;

  getForcemanualassignment(): boolean;
  setForcemanualassignment(value: boolean): void;

  hasOutputsize(): boolean;
  clearOutputsize(): void;
  getOutputsize(): number;
  setOutputsize(value: number): void;

  clearFightresultoptionsList(): void;
  getFightresultoptionsList(): Array<FightResultOption>;
  setFightresultoptionsList(value: Array<FightResultOption>): void;
  addFightresultoptions(value?: FightResultOption, index?: number): FightResultOption;

  clearCompetitorresultsList(): void;
  getCompetitorresultsList(): Array<CompetitorStageResult>;
  setCompetitorresultsList(value: Array<CompetitorStageResult>): void;
  addCompetitorresults(value?: CompetitorStageResult, index?: number): CompetitorStageResult;

  clearAdditionalgroupsortingdescriptorsList(): void;
  getAdditionalgroupsortingdescriptorsList(): Array<AdditionalGroupSortingDescriptor>;
  setAdditionalgroupsortingdescriptorsList(value: Array<AdditionalGroupSortingDescriptor>): void;
  addAdditionalgroupsortingdescriptors(value?: AdditionalGroupSortingDescriptor, index?: number): AdditionalGroupSortingDescriptor;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StageResultDescriptor.AsObject;
  static toObject(includeInstance: boolean, msg: StageResultDescriptor): StageResultDescriptor.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StageResultDescriptor, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StageResultDescriptor;
  static deserializeBinaryFromReader(message: StageResultDescriptor, reader: jspb.BinaryReader): StageResultDescriptor;
}

export namespace StageResultDescriptor {
  export type AsObject = {
    name: string,
    forcemanualassignment: boolean,
    outputsize: number,
    fightresultoptionsList: Array<FightResultOption.AsObject>,
    competitorresultsList: Array<CompetitorStageResult.AsObject>,
    additionalgroupsortingdescriptorsList: Array<AdditionalGroupSortingDescriptor.AsObject>,
  }
}

export class AdditionalGroupSortingDescriptor extends jspb.Message {
  getGroupsortdirection(): GroupSortDirectionMap[keyof GroupSortDirectionMap];
  setGroupsortdirection(value: GroupSortDirectionMap[keyof GroupSortDirectionMap]): void;

  getGroupsortspecifier(): GroupSortSpecifierMap[keyof GroupSortSpecifierMap];
  setGroupsortspecifier(value: GroupSortSpecifierMap[keyof GroupSortSpecifierMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdditionalGroupSortingDescriptor.AsObject;
  static toObject(includeInstance: boolean, msg: AdditionalGroupSortingDescriptor): AdditionalGroupSortingDescriptor.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AdditionalGroupSortingDescriptor, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdditionalGroupSortingDescriptor;
  static deserializeBinaryFromReader(message: AdditionalGroupSortingDescriptor, reader: jspb.BinaryReader): AdditionalGroupSortingDescriptor;
}

export namespace AdditionalGroupSortingDescriptor {
  export type AsObject = {
    groupsortdirection: GroupSortDirectionMap[keyof GroupSortDirectionMap],
    groupsortspecifier: GroupSortSpecifierMap[keyof GroupSortSpecifierMap],
  }
}

export class CompetitorStageResult extends jspb.Message {
  getCompetitorid(): string;
  setCompetitorid(value: string): void;

  hasPoints(): boolean;
  clearPoints(): void;
  getPoints(): number;
  setPoints(value: number): void;

  hasRound(): boolean;
  clearRound(): void;
  getRound(): number;
  setRound(value: number): void;

  getRoundtype(): StageRoundTypeMap[keyof StageRoundTypeMap];
  setRoundtype(value: StageRoundTypeMap[keyof StageRoundTypeMap]): void;

  hasPlace(): boolean;
  clearPlace(): void;
  getPlace(): number;
  setPlace(value: number): void;

  getStageid(): string;
  setStageid(value: string): void;

  hasGroupid(): boolean;
  clearGroupid(): void;
  getGroupid(): string;
  setGroupid(value: string): void;

  getConflicting(): boolean;
  setConflicting(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompetitorStageResult.AsObject;
  static toObject(includeInstance: boolean, msg: CompetitorStageResult): CompetitorStageResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CompetitorStageResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompetitorStageResult;
  static deserializeBinaryFromReader(message: CompetitorStageResult, reader: jspb.BinaryReader): CompetitorStageResult;
}

export namespace CompetitorStageResult {
  export type AsObject = {
    competitorid: string,
    points: number,
    round: number,
    roundtype: StageRoundTypeMap[keyof StageRoundTypeMap],
    place: number,
    stageid: string,
    groupid: string,
    conflicting: boolean,
  }
}

export class FightResultOption extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  hasDescription(): boolean;
  clearDescription(): void;
  getDescription(): string;
  setDescription(value: string): void;

  getShortname(): string;
  setShortname(value: string): void;

  getDraw(): boolean;
  setDraw(value: boolean): void;

  getWinnerpoints(): number;
  setWinnerpoints(value: number): void;

  hasWinneradditionalpoints(): boolean;
  clearWinneradditionalpoints(): void;
  getWinneradditionalpoints(): number;
  setWinneradditionalpoints(value: number): void;

  getLoserpoints(): number;
  setLoserpoints(value: number): void;

  hasLoseradditionalpoints(): boolean;
  clearLoseradditionalpoints(): void;
  getLoseradditionalpoints(): number;
  setLoseradditionalpoints(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FightResultOption.AsObject;
  static toObject(includeInstance: boolean, msg: FightResultOption): FightResultOption.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FightResultOption, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FightResultOption;
  static deserializeBinaryFromReader(message: FightResultOption, reader: jspb.BinaryReader): FightResultOption;
}

export namespace FightResultOption {
  export type AsObject = {
    id: string,
    description: string,
    shortname: string,
    draw: boolean,
    winnerpoints: number,
    winneradditionalpoints: number,
    loserpoints: number,
    loseradditionalpoints: number,
  }
}

export class FightDescription extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getCategoryid(): string;
  setCategoryid(value: string): void;

  hasFightname(): boolean;
  clearFightname(): void;
  getFightname(): string;
  setFightname(value: string): void;

  hasWinfight(): boolean;
  clearWinfight(): void;
  getWinfight(): string;
  setWinfight(value: string): void;

  hasLosefight(): boolean;
  clearLosefight(): void;
  getLosefight(): string;
  setLosefight(value: string): void;

  clearScoresList(): void;
  getScoresList(): Array<CompScore>;
  setScoresList(value: Array<CompScore>): void;
  addScores(value?: CompScore, index?: number): CompScore;

  getDuration(): number;
  setDuration(value: number): void;

  getRound(): number;
  setRound(value: number): void;

  getInvalid(): boolean;
  setInvalid(value: boolean): void;

  getRoundtype(): StageRoundTypeMap[keyof StageRoundTypeMap];
  setRoundtype(value: StageRoundTypeMap[keyof StageRoundTypeMap]): void;

  getStatus(): FightStatusMap[keyof FightStatusMap];
  setStatus(value: FightStatusMap[keyof FightStatusMap]): void;

  hasFightresult(): boolean;
  clearFightresult(): void;
  getFightresult(): FightResult | undefined;
  setFightresult(value?: FightResult): void;

  hasMat(): boolean;
  clearMat(): void;
  getMat(): MatDescription | undefined;
  setMat(value?: MatDescription): void;

  hasNumberonmat(): boolean;
  clearNumberonmat(): void;
  getNumberonmat(): number;
  setNumberonmat(value: number): void;

  hasPriority(): boolean;
  clearPriority(): void;
  getPriority(): number;
  setPriority(value: number): void;

  getCompetitionid(): string;
  setCompetitionid(value: string): void;

  hasPeriod(): boolean;
  clearPeriod(): void;
  getPeriod(): string;
  setPeriod(value: string): void;

  hasStarttime(): boolean;
  clearStarttime(): void;
  getStarttime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStarttime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getStageid(): string;
  setStageid(value: string): void;

  hasGroupid(): boolean;
  clearGroupid(): void;
  getGroupid(): string;
  setGroupid(value: string): void;

  hasScheduleentryid(): boolean;
  clearScheduleentryid(): void;
  getScheduleentryid(): string;
  setScheduleentryid(value: string): void;

  getNumberinround(): number;
  setNumberinround(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FightDescription.AsObject;
  static toObject(includeInstance: boolean, msg: FightDescription): FightDescription.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FightDescription, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FightDescription;
  static deserializeBinaryFromReader(message: FightDescription, reader: jspb.BinaryReader): FightDescription;
}

export namespace FightDescription {
  export type AsObject = {
    id: string,
    categoryid: string,
    fightname: string,
    winfight: string,
    losefight: string,
    scoresList: Array<CompScore.AsObject>,
    duration: number,
    round: number,
    invalid: boolean,
    roundtype: StageRoundTypeMap[keyof StageRoundTypeMap],
    status: FightStatusMap[keyof FightStatusMap],
    fightresult?: FightResult.AsObject,
    mat?: MatDescription.AsObject,
    numberonmat: number,
    priority: number,
    competitionid: string,
    period: string,
    starttime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    stageid: string,
    groupid: string,
    scheduleentryid: string,
    numberinround: number,
  }
}

export class MatDescription extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getPeriodid(): string;
  setPeriodid(value: string): void;

  getMatorder(): number;
  setMatorder(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MatDescription.AsObject;
  static toObject(includeInstance: boolean, msg: MatDescription): MatDescription.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MatDescription, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MatDescription;
  static deserializeBinaryFromReader(message: MatDescription, reader: jspb.BinaryReader): MatDescription;
}

export namespace MatDescription {
  export type AsObject = {
    id: string,
    name: string,
    periodid: string,
    matorder: number,
  }
}

export class FightResult extends jspb.Message {
  hasWinnerid(): boolean;
  clearWinnerid(): void;
  getWinnerid(): string;
  setWinnerid(value: string): void;

  hasResulttypeid(): boolean;
  clearResulttypeid(): void;
  getResulttypeid(): string;
  setResulttypeid(value: string): void;

  hasReason(): boolean;
  clearReason(): void;
  getReason(): string;
  setReason(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FightResult.AsObject;
  static toObject(includeInstance: boolean, msg: FightResult): FightResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FightResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FightResult;
  static deserializeBinaryFromReader(message: FightResult, reader: jspb.BinaryReader): FightResult;
}

export namespace FightResult {
  export type AsObject = {
    winnerid: string,
    resulttypeid: string,
    reason: string,
  }
}

export class CompScore extends jspb.Message {
  hasPlaceholderid(): boolean;
  clearPlaceholderid(): void;
  getPlaceholderid(): string;
  setPlaceholderid(value: string): void;

  hasCompetitorid(): boolean;
  clearCompetitorid(): void;
  getCompetitorid(): string;
  setCompetitorid(value: string): void;

  hasScore(): boolean;
  clearScore(): void;
  getScore(): Score | undefined;
  setScore(value?: Score): void;

  getOrder(): number;
  setOrder(value: number): void;

  hasParentreferencetype(): boolean;
  clearParentreferencetype(): void;
  getParentreferencetype(): FightReferenceTypeMap[keyof FightReferenceTypeMap];
  setParentreferencetype(value: FightReferenceTypeMap[keyof FightReferenceTypeMap]): void;

  hasParentfightid(): boolean;
  clearParentfightid(): void;
  getParentfightid(): string;
  setParentfightid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompScore.AsObject;
  static toObject(includeInstance: boolean, msg: CompScore): CompScore.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CompScore, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompScore;
  static deserializeBinaryFromReader(message: CompScore, reader: jspb.BinaryReader): CompScore;
}

export namespace CompScore {
  export type AsObject = {
    placeholderid: string,
    competitorid: string,
    score?: Score.AsObject,
    order: number,
    parentreferencetype: FightReferenceTypeMap[keyof FightReferenceTypeMap],
    parentfightid: string,
  }
}

export class Score extends jspb.Message {
  getPoints(): number;
  setPoints(value: number): void;

  getAdvantages(): number;
  setAdvantages(value: number): void;

  getPenalties(): number;
  setPenalties(value: number): void;

  clearPointgroupsList(): void;
  getPointgroupsList(): Array<PointGroup>;
  setPointgroupsList(value: Array<PointGroup>): void;
  addPointgroups(value?: PointGroup, index?: number): PointGroup;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Score.AsObject;
  static toObject(includeInstance: boolean, msg: Score): Score.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Score, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Score;
  static deserializeBinaryFromReader(message: Score, reader: jspb.BinaryReader): Score;
}

export namespace Score {
  export type AsObject = {
    points: number,
    advantages: number,
    penalties: number,
    pointgroupsList: Array<PointGroup.AsObject>,
  }
}

export class PointGroup extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getPriority(): number;
  setPriority(value: number): void;

  getValue(): number;
  setValue(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PointGroup.AsObject;
  static toObject(includeInstance: boolean, msg: PointGroup): PointGroup.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PointGroup, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PointGroup;
  static deserializeBinaryFromReader(message: PointGroup, reader: jspb.BinaryReader): PointGroup;
}

export namespace PointGroup {
  export type AsObject = {
    id: string,
    name: string,
    priority: number,
    value: number,
  }
}

export class RegistrationInfo extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getRegistrationopen(): boolean;
  setRegistrationopen(value: boolean): void;

  getRegistrationperiodsMap(): jspb.Map<string, RegistrationPeriod>;
  clearRegistrationperiodsMap(): void;
  getRegistrationgroupsMap(): jspb.Map<string, RegistrationGroup>;
  clearRegistrationgroupsMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegistrationInfo.AsObject;
  static toObject(includeInstance: boolean, msg: RegistrationInfo): RegistrationInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RegistrationInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegistrationInfo;
  static deserializeBinaryFromReader(message: RegistrationInfo, reader: jspb.BinaryReader): RegistrationInfo;
}

export namespace RegistrationInfo {
  export type AsObject = {
    id: string,
    registrationopen: boolean,
    registrationperiodsMap: Array<[string, RegistrationPeriod.AsObject]>,
    registrationgroupsMap: Array<[string, RegistrationGroup.AsObject]>,
  }
}

export class RegistrationGroup extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getDisplayname(): string;
  setDisplayname(value: string): void;

  getDefaultgroup(): boolean;
  setDefaultgroup(value: boolean): void;

  hasRegistrationfee(): boolean;
  clearRegistrationfee(): void;
  getRegistrationfee(): RegistrationFee | undefined;
  setRegistrationfee(value?: RegistrationFee): void;

  clearCategoriesList(): void;
  getCategoriesList(): Array<string>;
  setCategoriesList(value: Array<string>): void;
  addCategories(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegistrationGroup.AsObject;
  static toObject(includeInstance: boolean, msg: RegistrationGroup): RegistrationGroup.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RegistrationGroup, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegistrationGroup;
  static deserializeBinaryFromReader(message: RegistrationGroup, reader: jspb.BinaryReader): RegistrationGroup;
}

export namespace RegistrationGroup {
  export type AsObject = {
    id: string,
    displayname: string,
    defaultgroup: boolean,
    registrationfee?: RegistrationFee.AsObject,
    categoriesList: Array<string>,
  }
}

export class RegistrationFee extends jspb.Message {
  getCurrency(): string;
  setCurrency(value: string): void;

  getAmount(): number;
  setAmount(value: number): void;

  getRemainder(): number;
  setRemainder(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegistrationFee.AsObject;
  static toObject(includeInstance: boolean, msg: RegistrationFee): RegistrationFee.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RegistrationFee, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegistrationFee;
  static deserializeBinaryFromReader(message: RegistrationFee, reader: jspb.BinaryReader): RegistrationFee;
}

export namespace RegistrationFee {
  export type AsObject = {
    currency: string,
    amount: number,
    remainder: number,
  }
}

export class RegistrationPeriod extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getCompetitionid(): string;
  setCompetitionid(value: string): void;

  hasStart(): boolean;
  clearStart(): void;
  getStart(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStart(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasEnd(): boolean;
  clearEnd(): void;
  getEnd(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEnd(value?: google_protobuf_timestamp_pb.Timestamp): void;

  clearRegistrationgroupidsList(): void;
  getRegistrationgroupidsList(): Array<string>;
  setRegistrationgroupidsList(value: Array<string>): void;
  addRegistrationgroupids(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegistrationPeriod.AsObject;
  static toObject(includeInstance: boolean, msg: RegistrationPeriod): RegistrationPeriod.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RegistrationPeriod, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegistrationPeriod;
  static deserializeBinaryFromReader(message: RegistrationPeriod, reader: jspb.BinaryReader): RegistrationPeriod;
}

export namespace RegistrationPeriod {
  export type AsObject = {
    id: string,
    name: string,
    competitionid: string,
    start?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    end?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    registrationgroupidsList: Array<string>,
  }
}

export class FullAcademyInfo extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  clearCoachesList(): void;
  getCoachesList(): Array<string>;
  setCoachesList(value: Array<string>): void;
  addCoaches(value: string, index?: number): string;

  getContactuserid(): string;
  setContactuserid(value: string): void;

  getContactemail(): string;
  setContactemail(value: string): void;

  hasCreated(): boolean;
  clearCreated(): void;
  getCreated(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreated(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdated(): boolean;
  clearUpdated(): void;
  getUpdated(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdated(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FullAcademyInfo.AsObject;
  static toObject(includeInstance: boolean, msg: FullAcademyInfo): FullAcademyInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FullAcademyInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FullAcademyInfo;
  static deserializeBinaryFromReader(message: FullAcademyInfo, reader: jspb.BinaryReader): FullAcademyInfo;
}

export namespace FullAcademyInfo {
  export type AsObject = {
    id: string,
    name: string,
    coachesList: Array<string>,
    contactuserid: string,
    contactemail: string,
    created?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updated?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class Academy extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Academy.AsObject;
  static toObject(includeInstance: boolean, msg: Academy): Academy.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Academy, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Academy;
  static deserializeBinaryFromReader(message: Academy, reader: jspb.BinaryReader): Academy;
}

export namespace Academy {
  export type AsObject = {
    id: string,
    name: string,
  }
}

export class CategoryDescriptor extends jspb.Message {
  clearRestrictionsList(): void;
  getRestrictionsList(): Array<CategoryRestriction>;
  setRestrictionsList(value: Array<CategoryRestriction>): void;
  addRestrictions(value?: CategoryRestriction, index?: number): CategoryRestriction;

  getId(): string;
  setId(value: string): void;

  hasName(): boolean;
  clearName(): void;
  getName(): string;
  setName(value: string): void;

  getRegistrationopen(): boolean;
  setRegistrationopen(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CategoryDescriptor.AsObject;
  static toObject(includeInstance: boolean, msg: CategoryDescriptor): CategoryDescriptor.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CategoryDescriptor, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CategoryDescriptor;
  static deserializeBinaryFromReader(message: CategoryDescriptor, reader: jspb.BinaryReader): CategoryDescriptor;
}

export namespace CategoryDescriptor {
  export type AsObject = {
    restrictionsList: Array<CategoryRestriction.AsObject>,
    id: string,
    name: string,
    registrationopen: boolean,
  }
}

export class CategoryRestriction extends jspb.Message {
  getRestrictionid(): string;
  setRestrictionid(value: string): void;

  getType(): CategoryRestrictionTypeMap[keyof CategoryRestrictionTypeMap];
  setType(value: CategoryRestrictionTypeMap[keyof CategoryRestrictionTypeMap]): void;

  getName(): string;
  setName(value: string): void;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): string;
  setValue(value: string): void;

  hasAlias(): boolean;
  clearAlias(): void;
  getAlias(): string;
  setAlias(value: string): void;

  hasMinvalue(): boolean;
  clearMinvalue(): void;
  getMinvalue(): string;
  setMinvalue(value: string): void;

  hasMaxvalue(): boolean;
  clearMaxvalue(): void;
  getMaxvalue(): string;
  setMaxvalue(value: string): void;

  hasUnit(): boolean;
  clearUnit(): void;
  getUnit(): string;
  setUnit(value: string): void;

  getRestrictionorder(): number;
  setRestrictionorder(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CategoryRestriction.AsObject;
  static toObject(includeInstance: boolean, msg: CategoryRestriction): CategoryRestriction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CategoryRestriction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CategoryRestriction;
  static deserializeBinaryFromReader(message: CategoryRestriction, reader: jspb.BinaryReader): CategoryRestriction;
}

export namespace CategoryRestriction {
  export type AsObject = {
    restrictionid: string,
    type: CategoryRestrictionTypeMap[keyof CategoryRestrictionTypeMap],
    name: string,
    value: string,
    alias: string,
    minvalue: string,
    maxvalue: string,
    unit: string,
    restrictionorder: number,
  }
}

export class CategoryState extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getCompetitionid(): string;
  setCompetitionid(value: string): void;

  hasCategory(): boolean;
  clearCategory(): void;
  getCategory(): CategoryDescriptor | undefined;
  setCategory(value?: CategoryDescriptor): void;

  getFightsnumber(): number;
  setFightsnumber(value: number): void;

  getNumberofcompetitors(): number;
  setNumberofcompetitors(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CategoryState.AsObject;
  static toObject(includeInstance: boolean, msg: CategoryState): CategoryState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CategoryState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CategoryState;
  static deserializeBinaryFromReader(message: CategoryState, reader: jspb.BinaryReader): CategoryState;
}

export namespace CategoryState {
  export type AsObject = {
    id: string,
    competitionid: string,
    category?: CategoryDescriptor.AsObject,
    fightsnumber: number,
    numberofcompetitors: number,
  }
}

export class CompetitionProperties extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getCreatorid(): string;
  setCreatorid(value: string): void;

  clearStaffidsList(): void;
  getStaffidsList(): Array<string>;
  setStaffidsList(value: Array<string>): void;
  addStaffids(value: string, index?: number): string;

  getEmailnotificationsenabled(): boolean;
  setEmailnotificationsenabled(value: boolean): void;

  getCompetitionname(): string;
  setCompetitionname(value: string): void;

  hasEmailtemplate(): boolean;
  clearEmailtemplate(): void;
  getEmailtemplate(): string;
  setEmailtemplate(value: string): void;

  clearPromocodesList(): void;
  getPromocodesList(): Array<PromoCode>;
  setPromocodesList(value: Array<PromoCode>): void;
  addPromocodes(value?: PromoCode, index?: number): PromoCode;

  hasStartdate(): boolean;
  clearStartdate(): void;
  getStartdate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartdate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getSchedulepublished(): boolean;
  setSchedulepublished(value: boolean): void;

  getBracketspublished(): boolean;
  setBracketspublished(value: boolean): void;

  hasEnddate(): boolean;
  clearEnddate(): void;
  getEnddate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEnddate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getTimezone(): string;
  setTimezone(value: string): void;

  hasCreationtimestamp(): boolean;
  clearCreationtimestamp(): void;
  getCreationtimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreationtimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getStatus(): CompetitionStatusMap[keyof CompetitionStatusMap];
  setStatus(value: CompetitionStatusMap[keyof CompetitionStatusMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompetitionProperties.AsObject;
  static toObject(includeInstance: boolean, msg: CompetitionProperties): CompetitionProperties.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CompetitionProperties, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompetitionProperties;
  static deserializeBinaryFromReader(message: CompetitionProperties, reader: jspb.BinaryReader): CompetitionProperties;
}

export namespace CompetitionProperties {
  export type AsObject = {
    id: string,
    creatorid: string,
    staffidsList: Array<string>,
    emailnotificationsenabled: boolean,
    competitionname: string,
    emailtemplate: string,
    promocodesList: Array<PromoCode.AsObject>,
    startdate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    schedulepublished: boolean,
    bracketspublished: boolean,
    enddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    timezone: string,
    creationtimestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    status: CompetitionStatusMap[keyof CompetitionStatusMap],
  }
}

export class PromoCode extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getCoefficient(): number;
  setCoefficient(value: number): void;

  getCompetitionid(): string;
  setCompetitionid(value: string): void;

  hasStartat(): boolean;
  clearStartat(): void;
  getStartat(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartat(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasExpireat(): boolean;
  clearExpireat(): void;
  getExpireat(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpireat(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PromoCode.AsObject;
  static toObject(includeInstance: boolean, msg: PromoCode): PromoCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PromoCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PromoCode;
  static deserializeBinaryFromReader(message: PromoCode, reader: jspb.BinaryReader): PromoCode;
}

export namespace PromoCode {
  export type AsObject = {
    id: string,
    coefficient: number,
    competitionid: string,
    startat?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    expireat?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class CompetitionProcessorNotification extends jspb.Message {
  hasStarted(): boolean;
  clearStarted(): void;
  getStarted(): CompetitionProcessingStarted | undefined;
  setStarted(value?: CompetitionProcessingStarted): void;

  hasStopped(): boolean;
  clearStopped(): void;
  getStopped(): CompetitionProcessingStopped | undefined;
  setStopped(value?: CompetitionProcessingStopped): void;

  getNotificationCase(): CompetitionProcessorNotification.NotificationCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompetitionProcessorNotification.AsObject;
  static toObject(includeInstance: boolean, msg: CompetitionProcessorNotification): CompetitionProcessorNotification.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CompetitionProcessorNotification, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompetitionProcessorNotification;
  static deserializeBinaryFromReader(message: CompetitionProcessorNotification, reader: jspb.BinaryReader): CompetitionProcessorNotification;
}

export namespace CompetitionProcessorNotification {
  export type AsObject = {
    started?: CompetitionProcessingStarted.AsObject,
    stopped?: CompetitionProcessingStopped.AsObject,
  }

  export enum NotificationCase {
    NOTIFICATION_NOT_SET = 0,
    STARTED = 1,
    STOPPED = 2,
  }
}

export class CompetitionProcessingStarted extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getTopic(): string;
  setTopic(value: string): void;

  getCreatorid(): string;
  setCreatorid(value: string): void;

  hasCreatedat(): boolean;
  clearCreatedat(): void;
  getCreatedat(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedat(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasStartsat(): boolean;
  clearStartsat(): void;
  getStartsat(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartsat(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasEndsat(): boolean;
  clearEndsat(): void;
  getEndsat(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndsat(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getTimezone(): string;
  setTimezone(value: string): void;

  getStatus(): CompetitionStatusMap[keyof CompetitionStatusMap];
  setStatus(value: CompetitionStatusMap[keyof CompetitionStatusMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompetitionProcessingStarted.AsObject;
  static toObject(includeInstance: boolean, msg: CompetitionProcessingStarted): CompetitionProcessingStarted.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CompetitionProcessingStarted, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompetitionProcessingStarted;
  static deserializeBinaryFromReader(message: CompetitionProcessingStarted, reader: jspb.BinaryReader): CompetitionProcessingStarted;
}

export namespace CompetitionProcessingStarted {
  export type AsObject = {
    id: string,
    name: string,
    topic: string,
    creatorid: string,
    createdat?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    startsat?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endsat?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    timezone: string,
    status: CompetitionStatusMap[keyof CompetitionStatusMap],
  }
}

export class CompetitionProcessingStopped extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompetitionProcessingStopped.AsObject;
  static toObject(includeInstance: boolean, msg: CompetitionProcessingStopped): CompetitionProcessingStopped.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CompetitionProcessingStopped, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompetitionProcessingStopped;
  static deserializeBinaryFromReader(message: CompetitionProcessingStopped, reader: jspb.BinaryReader): CompetitionProcessingStopped;
}

export namespace CompetitionProcessingStopped {
  export type AsObject = {
    id: string,
  }
}

export class CompetitionState extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  clearCategoriesList(): void;
  getCategoriesList(): Array<CategoryState>;
  setCategoriesList(value: Array<CategoryState>): void;
  addCategories(value?: CategoryState, index?: number): CategoryState;

  hasProperties(): boolean;
  clearProperties(): void;
  getProperties(): CompetitionProperties | undefined;
  setProperties(value?: CompetitionProperties): void;

  hasSchedule(): boolean;
  clearSchedule(): void;
  getSchedule(): Schedule | undefined;
  setSchedule(value?: Schedule): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompetitionState.AsObject;
  static toObject(includeInstance: boolean, msg: CompetitionState): CompetitionState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CompetitionState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompetitionState;
  static deserializeBinaryFromReader(message: CompetitionState, reader: jspb.BinaryReader): CompetitionState;
}

export namespace CompetitionState {
  export type AsObject = {
    id: string,
    categoriesList: Array<CategoryState.AsObject>,
    properties?: CompetitionProperties.AsObject,
    schedule?: Schedule.AsObject,
  }
}

export class Schedule extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  clearPeriodsList(): void;
  getPeriodsList(): Array<Period>;
  setPeriodsList(value: Array<Period>): void;
  addPeriods(value?: Period, index?: number): Period;

  clearMatsList(): void;
  getMatsList(): Array<MatDescription>;
  setMatsList(value: Array<MatDescription>): void;
  addMats(value?: MatDescription, index?: number): MatDescription;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Schedule.AsObject;
  static toObject(includeInstance: boolean, msg: Schedule): Schedule.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Schedule, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Schedule;
  static deserializeBinaryFromReader(message: Schedule, reader: jspb.BinaryReader): Schedule;
}

export namespace Schedule {
  export type AsObject = {
    id: string,
    periodsList: Array<Period.AsObject>,
    matsList: Array<MatDescription.AsObject>,
  }
}

export class Period extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  clearScheduleentriesList(): void;
  getScheduleentriesList(): Array<ScheduleEntry>;
  setScheduleentriesList(value: Array<ScheduleEntry>): void;
  addScheduleentries(value?: ScheduleEntry, index?: number): ScheduleEntry;

  clearSchedulerequirementsList(): void;
  getSchedulerequirementsList(): Array<ScheduleRequirement>;
  setSchedulerequirementsList(value: Array<ScheduleRequirement>): void;
  addSchedulerequirements(value?: ScheduleRequirement, index?: number): ScheduleRequirement;

  hasStarttime(): boolean;
  clearStarttime(): void;
  getStarttime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStarttime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasEndtime(): boolean;
  clearEndtime(): void;
  getEndtime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndtime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getIsactive(): boolean;
  setIsactive(value: boolean): void;

  getTimebetweenfights(): number;
  setTimebetweenfights(value: number): void;

  getRiskpercent(): number;
  setRiskpercent(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Period.AsObject;
  static toObject(includeInstance: boolean, msg: Period): Period.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Period, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Period;
  static deserializeBinaryFromReader(message: Period, reader: jspb.BinaryReader): Period;
}

export namespace Period {
  export type AsObject = {
    id: string,
    name: string,
    scheduleentriesList: Array<ScheduleEntry.AsObject>,
    schedulerequirementsList: Array<ScheduleRequirement.AsObject>,
    starttime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endtime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    isactive: boolean,
    timebetweenfights: number,
    riskpercent: number,
  }
}

export class ScheduleEntry extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  clearCategoryidsList(): void;
  getCategoryidsList(): Array<string>;
  setCategoryidsList(value: Array<string>): void;
  addCategoryids(value: string, index?: number): string;

  clearFightscheduleinfoList(): void;
  getFightscheduleinfoList(): Array<StartTimeInfo>;
  setFightscheduleinfoList(value: Array<StartTimeInfo>): void;
  addFightscheduleinfo(value?: StartTimeInfo, index?: number): StartTimeInfo;

  getPeriodid(): string;
  setPeriodid(value: string): void;

  hasDescription(): boolean;
  clearDescription(): void;
  getDescription(): string;
  setDescription(value: string): void;

  hasName(): boolean;
  clearName(): void;
  getName(): string;
  setName(value: string): void;

  hasColor(): boolean;
  clearColor(): void;
  getColor(): string;
  setColor(value: string): void;

  getEntrytype(): ScheduleEntryTypeMap[keyof ScheduleEntryTypeMap];
  setEntrytype(value: ScheduleEntryTypeMap[keyof ScheduleEntryTypeMap]): void;

  clearRequirementidsList(): void;
  getRequirementidsList(): Array<string>;
  setRequirementidsList(value: Array<string>): void;
  addRequirementids(value: string, index?: number): string;

  hasStarttime(): boolean;
  clearStarttime(): void;
  getStarttime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStarttime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasEndtime(): boolean;
  clearEndtime(): void;
  getEndtime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndtime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getNumberoffights(): number;
  setNumberoffights(value: number): void;

  getDuration(): number;
  setDuration(value: number): void;

  getOrder(): number;
  setOrder(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScheduleEntry.AsObject;
  static toObject(includeInstance: boolean, msg: ScheduleEntry): ScheduleEntry.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ScheduleEntry, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScheduleEntry;
  static deserializeBinaryFromReader(message: ScheduleEntry, reader: jspb.BinaryReader): ScheduleEntry;
}

export namespace ScheduleEntry {
  export type AsObject = {
    id: string,
    categoryidsList: Array<string>,
    fightscheduleinfoList: Array<StartTimeInfo.AsObject>,
    periodid: string,
    description: string,
    name: string,
    color: string,
    entrytype: ScheduleEntryTypeMap[keyof ScheduleEntryTypeMap],
    requirementidsList: Array<string>,
    starttime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endtime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    numberoffights: number,
    duration: number,
    order: number,
  }
}

export class StartTimeInfo extends jspb.Message {
  getMatid(): string;
  setMatid(value: string): void;

  hasStarttime(): boolean;
  clearStarttime(): void;
  getStarttime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStarttime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getSomeid(): string;
  setSomeid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StartTimeInfo.AsObject;
  static toObject(includeInstance: boolean, msg: StartTimeInfo): StartTimeInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StartTimeInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StartTimeInfo;
  static deserializeBinaryFromReader(message: StartTimeInfo, reader: jspb.BinaryReader): StartTimeInfo;
}

export namespace StartTimeInfo {
  export type AsObject = {
    matid: string,
    starttime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    someid: string,
  }
}

export class ScheduleRequirement extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  clearCategoryidsList(): void;
  getCategoryidsList(): Array<string>;
  setCategoryidsList(value: Array<string>): void;
  addCategoryids(value: string, index?: number): string;

  clearFightidsList(): void;
  getFightidsList(): Array<string>;
  setFightidsList(value: Array<string>): void;
  addFightids(value: string, index?: number): string;

  hasMatid(): boolean;
  clearMatid(): void;
  getMatid(): string;
  setMatid(value: string): void;

  getPeriodid(): string;
  setPeriodid(value: string): void;

  hasName(): boolean;
  clearName(): void;
  getName(): string;
  setName(value: string): void;

  hasColor(): boolean;
  clearColor(): void;
  getColor(): string;
  setColor(value: string): void;

  getEntrytype(): ScheduleRequirementTypeMap[keyof ScheduleRequirementTypeMap];
  setEntrytype(value: ScheduleRequirementTypeMap[keyof ScheduleRequirementTypeMap]): void;

  getForce(): boolean;
  setForce(value: boolean): void;

  hasStarttime(): boolean;
  clearStarttime(): void;
  getStarttime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStarttime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasEndtime(): boolean;
  clearEndtime(): void;
  getEndtime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndtime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasDurationseconds(): boolean;
  clearDurationseconds(): void;
  getDurationseconds(): number;
  setDurationseconds(value: number): void;

  getEntryorder(): number;
  setEntryorder(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScheduleRequirement.AsObject;
  static toObject(includeInstance: boolean, msg: ScheduleRequirement): ScheduleRequirement.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ScheduleRequirement, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScheduleRequirement;
  static deserializeBinaryFromReader(message: ScheduleRequirement, reader: jspb.BinaryReader): ScheduleRequirement;
}

export namespace ScheduleRequirement {
  export type AsObject = {
    id: string,
    categoryidsList: Array<string>,
    fightidsList: Array<string>,
    matid: string,
    periodid: string,
    name: string,
    color: string,
    entrytype: ScheduleRequirementTypeMap[keyof ScheduleRequirementTypeMap],
    force: boolean,
    starttime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endtime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    durationseconds: number,
    entryorder: number,
  }
}

export class Competitor extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  getUserid(): string;
  setUserid(value: string): void;

  getFirstname(): string;
  setFirstname(value: string): void;

  getLastname(): string;
  setLastname(value: string): void;

  hasBirthdate(): boolean;
  clearBirthdate(): void;
  getBirthdate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setBirthdate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasAcademy(): boolean;
  clearAcademy(): void;
  getAcademy(): Academy | undefined;
  setAcademy(value?: Academy): void;

  clearCategoriesList(): void;
  getCategoriesList(): Array<string>;
  setCategoriesList(value: Array<string>): void;
  addCategories(value: string, index?: number): string;

  getCompetitionid(): string;
  setCompetitionid(value: string): void;

  getRegistrationstatus(): CompetitorRegistrationStatusMap[keyof CompetitorRegistrationStatusMap];
  setRegistrationstatus(value: CompetitorRegistrationStatusMap[keyof CompetitorRegistrationStatusMap]): void;

  getPlaceholder(): boolean;
  setPlaceholder(value: boolean): void;

  getPromo(): string;
  setPromo(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Competitor.AsObject;
  static toObject(includeInstance: boolean, msg: Competitor): Competitor.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Competitor, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Competitor;
  static deserializeBinaryFromReader(message: Competitor, reader: jspb.BinaryReader): Competitor;
}

export namespace Competitor {
  export type AsObject = {
    id: string,
    email: string,
    userid: string,
    firstname: string,
    lastname: string,
    birthdate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    academy?: Academy.AsObject,
    categoriesList: Array<string>,
    competitionid: string,
    registrationstatus: CompetitorRegistrationStatusMap[keyof CompetitorRegistrationStatusMap],
    placeholder: boolean,
    promo: string,
  }
}

export class MatState extends jspb.Message {
  hasMatdescription(): boolean;
  clearMatdescription(): void;
  getMatdescription(): MatDescription | undefined;
  setMatdescription(value?: MatDescription): void;

  getNumberoffights(): number;
  setNumberoffights(value: number): void;

  clearTopfivefightsList(): void;
  getTopfivefightsList(): Array<FightDescription>;
  setTopfivefightsList(value: Array<FightDescription>): void;
  addTopfivefights(value?: FightDescription, index?: number): FightDescription;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MatState.AsObject;
  static toObject(includeInstance: boolean, msg: MatState): MatState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MatState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MatState;
  static deserializeBinaryFromReader(message: MatState, reader: jspb.BinaryReader): MatState;
}

export namespace MatState {
  export type AsObject = {
    matdescription?: MatDescription.AsObject,
    numberoffights: number,
    topfivefightsList: Array<FightDescription.AsObject>,
  }
}

export class FightStartTimePair extends jspb.Message {
  getFightid(): string;
  setFightid(value: string): void;

  getMatid(): string;
  setMatid(value: string): void;

  getNumberonmat(): number;
  setNumberonmat(value: number): void;

  hasStarttime(): boolean;
  clearStarttime(): void;
  getStarttime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStarttime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getPeriodid(): string;
  setPeriodid(value: string): void;

  getFightcategoryid(): string;
  setFightcategoryid(value: string): void;

  getScheduleentryid(): string;
  setScheduleentryid(value: string): void;

  getInvalid(): boolean;
  setInvalid(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FightStartTimePair.AsObject;
  static toObject(includeInstance: boolean, msg: FightStartTimePair): FightStartTimePair.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FightStartTimePair, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FightStartTimePair;
  static deserializeBinaryFromReader(message: FightStartTimePair, reader: jspb.BinaryReader): FightStartTimePair;
}

export namespace FightStartTimePair {
  export type AsObject = {
    fightid: string,
    matid: string,
    numberonmat: number,
    starttime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    periodid: string,
    fightcategoryid: string,
    scheduleentryid: string,
    invalid: boolean,
  }
}

export interface OperatorTypeMap {
  OPERATOR_TYPE_EQUALS: 0;
  OPERATOR_TYPE_IS_IN: 1;
  OPERATOR_TYPE_LESS: 2;
  OPERATOR_TYPE_GREATER: 3;
  OPERATOR_TYPE_LEQ: 4;
  OPERATOR_TYPE_GEQ: 5;
}

export const OperatorType: OperatorTypeMap;

export interface SelectorClassifierMap {
  SELECTOR_CLASSIFIER_FIRST_N_PLACES: 0;
  SELECTOR_CLASSIFIER_LAST_N_PLACES: 1;
  SELECTOR_CLASSIFIER_MANUAL: 2;
}

export const SelectorClassifier: SelectorClassifierMap;

export interface LogicalOperatorMap {
  LOGICAL_OPERATOR_AND: 0;
  LOGICAL_OPERATOR_OR: 1;
  LOGICAL_OPERATOR_AND_NOT: 2;
  LOGICAL_OPERATOR_OR_NOT: 3;
}

export const LogicalOperator: LogicalOperatorMap;

export interface DistributionTypeMap {
  DISTRIBUTION_TYPE_AUTOMATIC: 0;
  DISTRIBUTION_TYPE_MANUAL: 1;
}

export const DistributionType: DistributionTypeMap;

export interface GroupSortDirectionMap {
  GROUP_SORT_DIRECTION_ASC: 0;
  GROUP_SORT_DIRECTION_DESC: 1;
}

export const GroupSortDirection: GroupSortDirectionMap;

export interface GroupSortSpecifierMap {
  GROUP_SORT_SPECIFIER_DIRECT_FIGHT_RESULT: 0;
  GROUP_SORT_SPECIFIER_MANUAL: 1;
  GROUP_SORT_SPECIFIER_POINTS_DIFFERENCE: 2;
  GROUP_SORT_SPECIFIER_TOTAL_POINTS: 3;
}

export const GroupSortSpecifier: GroupSortSpecifierMap;

export interface StageRoundTypeMap {
  STAGE_ROUND_TYPE_UNKNOWN: 0;
  STAGE_ROUND_TYPE_GRAND_FINAL: 1;
  STAGE_ROUND_TYPE_THIRD_PLACE_FIGHT: 2;
  STAGE_ROUND_TYPE_WINNER_BRACKETS: 3;
  STAGE_ROUND_TYPE_LOSER_BRACKETS: 4;
  STAGE_ROUND_TYPE_GROUP: 5;
}

export const StageRoundType: StageRoundTypeMap;

export interface BracketTypeMap {
  BRACKET_TYPE_UNKNOWN: 0;
  BRACKET_TYPE_SINGLE_ELIMINATION: 2;
  BRACKET_TYPE_DOUBLE_ELIMINATION: 3;
  BRACKET_TYPE_GROUP: 4;
}

export const BracketType: BracketTypeMap;

export interface StageTypeMap {
  STAGE_TYPE_UNKNOWN: 0;
  STAGE_TYPE_PRELIMINARY: 1;
  STAGE_TYPE_FINAL: 2;
}

export const StageType: StageTypeMap;

export interface StageStatusMap {
  STAGE_STATUS_UNKNOWN: 0;
  STAGE_STATUS_APPROVED: 1;
  STAGE_STATUS_WAITING_FOR_APPROVAL: 2;
  STAGE_STATUS_WAITING_FOR_COMPETITORS: 3;
  STAGE_STATUS_FINISHED: 4;
  STAGE_STATUS_IN_PROGRESS: 5;
}

export const StageStatus: StageStatusMap;

export interface FightStatusMap {
  FIGHT_STATUS_PENDING: 0;
  FIGHT_STATUS_GET_READY: 1;
  FIGHT_STATUS_IN_PROGRESS: 2;
  FIGHT_STATUS_PAUSED: 3;
  FIGHT_STATUS_FINISHED: 4;
  FIGHT_STATUS_UNCOMPLETABLE: 5;
  FIGHT_STATUS_WALKOVER: 6;
}

export const FightStatus: FightStatusMap;

export interface FightReferenceTypeMap {
  FIGHT_REFERENCE_TYPE_UNKNOWN: 0;
  FIGHT_REFERENCE_TYPE_WINNER: 1;
  FIGHT_REFERENCE_TYPE_LOSER: 2;
  FIGHT_REFERENCE_TYPE_PROPAGATED: 3;
}

export const FightReferenceType: FightReferenceTypeMap;

export interface CategoryRestrictionTypeMap {
  CATEGORY_RESTRICTION_TYPE_VALUE: 0;
  CATEGORY_RESTRICTION_TYPE_RANGE: 1;
}

export const CategoryRestrictionType: CategoryRestrictionTypeMap;

export interface CompetitionStatusMap {
  COMPETITION_STATUS_UNKNOWN: 0;
  COMPETITION_STATUS_CREATED: 1;
  COMPETITION_STATUS_PUBLISHED: 2;
  COMPETITION_STATUS_UNPUBLISHED: 3;
  COMPETITION_STATUS_STARTED: 4;
  COMPETITION_STATUS_PAUSED: 5;
  COMPETITION_STATUS_STOPPED: 6;
  COMPETITION_STATUS_DELETED: 7;
}

export const CompetitionStatus: CompetitionStatusMap;

export interface ScheduleEntryTypeMap {
  SCHEDULE_ENTRY_TYPE_UNKNOWN: 0;
  SCHEDULE_ENTRY_TYPE_FIGHTS_GROUP: 1;
  SCHEDULE_ENTRY_TYPE_FIXED_PAUSE: 2;
  SCHEDULE_ENTRY_TYPE_RELATIVE_PAUSE: 3;
}

export const ScheduleEntryType: ScheduleEntryTypeMap;

export interface ScheduleRequirementTypeMap {
  SCHEDULE_REQUIREMENT_TYPE_UNKNOWN: 0;
  SCHEDULE_REQUIREMENT_TYPE_CATEGORIES: 1;
  SCHEDULE_REQUIREMENT_TYPE_FIGHTS: 2;
  SCHEDULE_REQUIREMENT_TYPE_RELATIVE_PAUSE: 3;
  SCHEDULE_REQUIREMENT_TYPE_FIXED_PAUSE: 4;
}

export const ScheduleRequirementType: ScheduleRequirementTypeMap;

export interface CompetitorRegistrationStatusMap {
  COMPETITOR_REGISTRATION_STATUS_UNKNOWN: 0;
  COMPETITOR_REGISTRATION_STATUS_SUCCESS_CONFIRMED: 1;
  COMPETITOR_REGISTRATION_STATUS_PAYMENT_PENDING: 2;
  COMPETITOR_REGISTRATION_STATUS_REGISTRATION_CANCELLED: 3;
}

export const CompetitorRegistrationStatus: CompetitorRegistrationStatusMap;

