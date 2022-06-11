/* eslint-disable */
import * as Long from 'long';
import * as _m0 from 'protobufjs/minimal';
import {
  CategoryDescriptor,
  CompetitionProperties,
  RegistrationInfo,
  CompetitionStatus,
  Competitor,
  FightReferenceType,
  Schedule,
  StageStatus,
  StageDescriptor,
  FightDescription,
  FightStartTimePair,
  MatDescription,
  CompetitorStageResult,
  competitionStatusToNumber,
  competitionStatusFromJSON,
  competitionStatusToJSON,
  fightReferenceTypeToNumber,
  fightReferenceTypeFromJSON,
  fightReferenceTypeToJSON,
  stageStatusToNumber,
  stageStatusFromJSON,
  stageStatusToJSON,
} from './model';
import { Timestamp } from './google/protobuf/timestamp';

export interface BracketsGeneratedPayload {
  stages: StageDescriptor[];
}

export interface CategoryAddedPayload {
  categoryState?: CategoryDescriptor;
}

export interface CompetitionCreatedPayload {
  properties?: CompetitionProperties;
  reginfo?: RegistrationInfo;
}

export interface CompetitionInfoPayload {
  competitionId: string;
  memberId: string;
  host: string;
  port: number;
}

export interface CompetitionPropertiesUpdatedPayload {
  properties?: CompetitionProperties;
}

export interface CompetitionStatusUpdatedPayload {
  status: CompetitionStatus;
}

export interface CompetitorAddedPayload {
  competitor?: Competitor;
}

export interface CompetitorAssignmentDescriptor {
  fromFightId: string;
  toFightId: string;
  competitorId: string;
  referenceType: FightReferenceType;
}

export interface CompetitorRemovedPayload {
  fighterId: string;
  categories: string[];
}

export interface CompetitorsPropagatedToStagePayload {
  stageId: string;
  propagations: CompetitorAssignmentDescriptor[];
}

export interface CompetitorUpdatedPayload {
  competitor?: Competitor;
}

export interface FightCompetitorsAssignedPayload {
  assignments: CompetitorAssignmentDescriptor[];
}

export interface FightEditorChangesAppliedPayload {
  updates: FightDescription[];
  newFights: FightDescription[];
  removedFighids: string[];
}

export interface FightOrderUpdate {
  fightId: string;
  numberOnMat: number;
  startTime?: Date;
  matId: string;
}

export interface FightsAddedToStagePayload {
  fights: FightDescription[];
  stageId: string;
}

export interface FightStartTimeUpdatedPayload {
  newFights: FightStartTimePair[];
}

export interface MatsUpdatedPayload {
  mats: MatDescription[];
}

export interface RegistrationInfoUpdatedPayload {
  registrationInfo?: RegistrationInfo;
}

export interface ScheduleGeneratedPayload {
  schedule?: Schedule;
}

export interface StageResultSetPayload {
  stageId: string;
  results: CompetitorStageResult[];
}

export interface StageStatusUpdatedPayload {
  stageId: string;
  status: StageStatus;
}

function createBaseBracketsGeneratedPayload(): BracketsGeneratedPayload {
  return { stages: [] };
}

export const BracketsGeneratedPayload = {
  encode(
    message: BracketsGeneratedPayload,
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
  ): BracketsGeneratedPayload {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBracketsGeneratedPayload();
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

  fromJSON(object: any): BracketsGeneratedPayload {
    return {
      stages: Array.isArray(object?.stages)
        ? object.stages.map((e: any) => StageDescriptor.fromJSON(e))
        : [],
    };
  },

  toJSON(message: BracketsGeneratedPayload): unknown {
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

  fromPartial<I extends Exact<DeepPartial<BracketsGeneratedPayload>, I>>(
    object: I
  ): BracketsGeneratedPayload {
    const message = createBaseBracketsGeneratedPayload();
    message.stages =
      object.stages?.map((e) => StageDescriptor.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCategoryAddedPayload(): CategoryAddedPayload {
  return { categoryState: undefined };
}

export const CategoryAddedPayload = {
  encode(
    message: CategoryAddedPayload,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.categoryState !== undefined) {
      CategoryDescriptor.encode(
        message.categoryState,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CategoryAddedPayload {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCategoryAddedPayload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.categoryState = CategoryDescriptor.decode(
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

  fromJSON(object: any): CategoryAddedPayload {
    return {
      categoryState: isSet(object.categoryState)
        ? CategoryDescriptor.fromJSON(object.categoryState)
        : undefined,
    };
  },

  toJSON(message: CategoryAddedPayload): unknown {
    const obj: any = {};
    message.categoryState !== undefined &&
      (obj.categoryState = message.categoryState
        ? CategoryDescriptor.toJSON(message.categoryState)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CategoryAddedPayload>, I>>(
    object: I
  ): CategoryAddedPayload {
    const message = createBaseCategoryAddedPayload();
    message.categoryState =
      object.categoryState !== undefined && object.categoryState !== null
        ? CategoryDescriptor.fromPartial(object.categoryState)
        : undefined;
    return message;
  },
};

function createBaseCompetitionCreatedPayload(): CompetitionCreatedPayload {
  return { properties: undefined, reginfo: undefined };
}

export const CompetitionCreatedPayload = {
  encode(
    message: CompetitionCreatedPayload,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.properties !== undefined) {
      CompetitionProperties.encode(
        message.properties,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.reginfo !== undefined) {
      RegistrationInfo.encode(
        message.reginfo,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CompetitionCreatedPayload {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCompetitionCreatedPayload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.properties = CompetitionProperties.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.reginfo = RegistrationInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CompetitionCreatedPayload {
    return {
      properties: isSet(object.properties)
        ? CompetitionProperties.fromJSON(object.properties)
        : undefined,
      reginfo: isSet(object.reginfo)
        ? RegistrationInfo.fromJSON(object.reginfo)
        : undefined,
    };
  },

  toJSON(message: CompetitionCreatedPayload): unknown {
    const obj: any = {};
    message.properties !== undefined &&
      (obj.properties = message.properties
        ? CompetitionProperties.toJSON(message.properties)
        : undefined);
    message.reginfo !== undefined &&
      (obj.reginfo = message.reginfo
        ? RegistrationInfo.toJSON(message.reginfo)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CompetitionCreatedPayload>, I>>(
    object: I
  ): CompetitionCreatedPayload {
    const message = createBaseCompetitionCreatedPayload();
    message.properties =
      object.properties !== undefined && object.properties !== null
        ? CompetitionProperties.fromPartial(object.properties)
        : undefined;
    message.reginfo =
      object.reginfo !== undefined && object.reginfo !== null
        ? RegistrationInfo.fromPartial(object.reginfo)
        : undefined;
    return message;
  },
};

function createBaseCompetitionInfoPayload(): CompetitionInfoPayload {
  return { competitionId: '', memberId: '', host: '', port: 0 };
}

export const CompetitionInfoPayload = {
  encode(
    message: CompetitionInfoPayload,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.competitionId !== '') {
      writer.uint32(10).string(message.competitionId);
    }
    if (message.memberId !== '') {
      writer.uint32(18).string(message.memberId);
    }
    if (message.host !== '') {
      writer.uint32(26).string(message.host);
    }
    if (message.port !== 0) {
      writer.uint32(32).int32(message.port);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CompetitionInfoPayload {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCompetitionInfoPayload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.competitionId = reader.string();
          break;
        case 2:
          message.memberId = reader.string();
          break;
        case 3:
          message.host = reader.string();
          break;
        case 4:
          message.port = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CompetitionInfoPayload {
    return {
      competitionId: isSet(object.competitionId)
        ? String(object.competitionId)
        : '',
      memberId: isSet(object.memberId) ? String(object.memberId) : '',
      host: isSet(object.host) ? String(object.host) : '',
      port: isSet(object.port) ? Number(object.port) : 0,
    };
  },

  toJSON(message: CompetitionInfoPayload): unknown {
    const obj: any = {};
    message.competitionId !== undefined &&
      (obj.competitionId = message.competitionId);
    message.memberId !== undefined && (obj.memberId = message.memberId);
    message.host !== undefined && (obj.host = message.host);
    message.port !== undefined && (obj.port = Math.round(message.port));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CompetitionInfoPayload>, I>>(
    object: I
  ): CompetitionInfoPayload {
    const message = createBaseCompetitionInfoPayload();
    message.competitionId = object.competitionId ?? '';
    message.memberId = object.memberId ?? '';
    message.host = object.host ?? '';
    message.port = object.port ?? 0;
    return message;
  },
};

function createBaseCompetitionPropertiesUpdatedPayload(): CompetitionPropertiesUpdatedPayload {
  return { properties: undefined };
}

export const CompetitionPropertiesUpdatedPayload = {
  encode(
    message: CompetitionPropertiesUpdatedPayload,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.properties !== undefined) {
      CompetitionProperties.encode(
        message.properties,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CompetitionPropertiesUpdatedPayload {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCompetitionPropertiesUpdatedPayload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.properties = CompetitionProperties.decode(
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

  fromJSON(object: any): CompetitionPropertiesUpdatedPayload {
    return {
      properties: isSet(object.properties)
        ? CompetitionProperties.fromJSON(object.properties)
        : undefined,
    };
  },

  toJSON(message: CompetitionPropertiesUpdatedPayload): unknown {
    const obj: any = {};
    message.properties !== undefined &&
      (obj.properties = message.properties
        ? CompetitionProperties.toJSON(message.properties)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<CompetitionPropertiesUpdatedPayload>, I>
  >(object: I): CompetitionPropertiesUpdatedPayload {
    const message = createBaseCompetitionPropertiesUpdatedPayload();
    message.properties =
      object.properties !== undefined && object.properties !== null
        ? CompetitionProperties.fromPartial(object.properties)
        : undefined;
    return message;
  },
};

function createBaseCompetitionStatusUpdatedPayload(): CompetitionStatusUpdatedPayload {
  return { status: CompetitionStatus.COMPETITION_STATUS_UNKNOWN };
}

export const CompetitionStatusUpdatedPayload = {
  encode(
    message: CompetitionStatusUpdatedPayload,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.status !== CompetitionStatus.COMPETITION_STATUS_UNKNOWN) {
      writer.uint32(8).int32(competitionStatusToNumber(message.status));
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CompetitionStatusUpdatedPayload {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCompetitionStatusUpdatedPayload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = competitionStatusFromJSON(reader.int32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CompetitionStatusUpdatedPayload {
    return {
      status: isSet(object.status)
        ? competitionStatusFromJSON(object.status)
        : CompetitionStatus.COMPETITION_STATUS_UNKNOWN,
    };
  },

  toJSON(message: CompetitionStatusUpdatedPayload): unknown {
    const obj: any = {};
    message.status !== undefined &&
      (obj.status = competitionStatusToJSON(message.status));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CompetitionStatusUpdatedPayload>, I>>(
    object: I
  ): CompetitionStatusUpdatedPayload {
    const message = createBaseCompetitionStatusUpdatedPayload();
    message.status =
      object.status ?? CompetitionStatus.COMPETITION_STATUS_UNKNOWN;
    return message;
  },
};

function createBaseCompetitorAddedPayload(): CompetitorAddedPayload {
  return { competitor: undefined };
}

export const CompetitorAddedPayload = {
  encode(
    message: CompetitorAddedPayload,
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
  ): CompetitorAddedPayload {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCompetitorAddedPayload();
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

  fromJSON(object: any): CompetitorAddedPayload {
    return {
      competitor: isSet(object.competitor)
        ? Competitor.fromJSON(object.competitor)
        : undefined,
    };
  },

  toJSON(message: CompetitorAddedPayload): unknown {
    const obj: any = {};
    message.competitor !== undefined &&
      (obj.competitor = message.competitor
        ? Competitor.toJSON(message.competitor)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CompetitorAddedPayload>, I>>(
    object: I
  ): CompetitorAddedPayload {
    const message = createBaseCompetitorAddedPayload();
    message.competitor =
      object.competitor !== undefined && object.competitor !== null
        ? Competitor.fromPartial(object.competitor)
        : undefined;
    return message;
  },
};

function createBaseCompetitorAssignmentDescriptor(): CompetitorAssignmentDescriptor {
  return {
    fromFightId: '',
    toFightId: '',
    competitorId: '',
    referenceType: FightReferenceType.FIGHT_REFERENCE_TYPE_UNKNOWN,
  };
}

export const CompetitorAssignmentDescriptor = {
  encode(
    message: CompetitorAssignmentDescriptor,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.fromFightId !== '') {
      writer.uint32(10).string(message.fromFightId);
    }
    if (message.toFightId !== '') {
      writer.uint32(18).string(message.toFightId);
    }
    if (message.competitorId !== '') {
      writer.uint32(26).string(message.competitorId);
    }
    if (
      message.referenceType !== FightReferenceType.FIGHT_REFERENCE_TYPE_UNKNOWN
    ) {
      writer
        .uint32(32)
        .int32(fightReferenceTypeToNumber(message.referenceType));
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CompetitorAssignmentDescriptor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCompetitorAssignmentDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fromFightId = reader.string();
          break;
        case 2:
          message.toFightId = reader.string();
          break;
        case 3:
          message.competitorId = reader.string();
          break;
        case 4:
          message.referenceType = fightReferenceTypeFromJSON(reader.int32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CompetitorAssignmentDescriptor {
    return {
      fromFightId: isSet(object.fromFightId) ? String(object.fromFightId) : '',
      toFightId: isSet(object.toFightId) ? String(object.toFightId) : '',
      competitorId: isSet(object.competitorId)
        ? String(object.competitorId)
        : '',
      referenceType: isSet(object.referenceType)
        ? fightReferenceTypeFromJSON(object.referenceType)
        : FightReferenceType.FIGHT_REFERENCE_TYPE_UNKNOWN,
    };
  },

  toJSON(message: CompetitorAssignmentDescriptor): unknown {
    const obj: any = {};
    message.fromFightId !== undefined &&
      (obj.fromFightId = message.fromFightId);
    message.toFightId !== undefined && (obj.toFightId = message.toFightId);
    message.competitorId !== undefined &&
      (obj.competitorId = message.competitorId);
    message.referenceType !== undefined &&
      (obj.referenceType = fightReferenceTypeToJSON(message.referenceType));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CompetitorAssignmentDescriptor>, I>>(
    object: I
  ): CompetitorAssignmentDescriptor {
    const message = createBaseCompetitorAssignmentDescriptor();
    message.fromFightId = object.fromFightId ?? '';
    message.toFightId = object.toFightId ?? '';
    message.competitorId = object.competitorId ?? '';
    message.referenceType =
      object.referenceType ?? FightReferenceType.FIGHT_REFERENCE_TYPE_UNKNOWN;
    return message;
  },
};

function createBaseCompetitorRemovedPayload(): CompetitorRemovedPayload {
  return { fighterId: '', categories: [] };
}

export const CompetitorRemovedPayload = {
  encode(
    message: CompetitorRemovedPayload,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.fighterId !== '') {
      writer.uint32(10).string(message.fighterId);
    }
    for (const v of message.categories) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CompetitorRemovedPayload {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCompetitorRemovedPayload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fighterId = reader.string();
          break;
        case 2:
          message.categories.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CompetitorRemovedPayload {
    return {
      fighterId: isSet(object.fighterId) ? String(object.fighterId) : '',
      categories: Array.isArray(object?.categories)
        ? object.categories.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: CompetitorRemovedPayload): unknown {
    const obj: any = {};
    message.fighterId !== undefined && (obj.fighterId = message.fighterId);
    if (message.categories) {
      obj.categories = message.categories.map((e) => e);
    } else {
      obj.categories = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CompetitorRemovedPayload>, I>>(
    object: I
  ): CompetitorRemovedPayload {
    const message = createBaseCompetitorRemovedPayload();
    message.fighterId = object.fighterId ?? '';
    message.categories = object.categories?.map((e) => e) || [];
    return message;
  },
};

function createBaseCompetitorsPropagatedToStagePayload(): CompetitorsPropagatedToStagePayload {
  return { stageId: '', propagations: [] };
}

export const CompetitorsPropagatedToStagePayload = {
  encode(
    message: CompetitorsPropagatedToStagePayload,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.stageId !== '') {
      writer.uint32(10).string(message.stageId);
    }
    for (const v of message.propagations) {
      CompetitorAssignmentDescriptor.encode(
        v!,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CompetitorsPropagatedToStagePayload {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCompetitorsPropagatedToStagePayload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stageId = reader.string();
          break;
        case 2:
          message.propagations.push(
            CompetitorAssignmentDescriptor.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CompetitorsPropagatedToStagePayload {
    return {
      stageId: isSet(object.stageId) ? String(object.stageId) : '',
      propagations: Array.isArray(object?.propagations)
        ? object.propagations.map((e: any) =>
            CompetitorAssignmentDescriptor.fromJSON(e)
          )
        : [],
    };
  },

  toJSON(message: CompetitorsPropagatedToStagePayload): unknown {
    const obj: any = {};
    message.stageId !== undefined && (obj.stageId = message.stageId);
    if (message.propagations) {
      obj.propagations = message.propagations.map((e) =>
        e ? CompetitorAssignmentDescriptor.toJSON(e) : undefined
      );
    } else {
      obj.propagations = [];
    }
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<CompetitorsPropagatedToStagePayload>, I>
  >(object: I): CompetitorsPropagatedToStagePayload {
    const message = createBaseCompetitorsPropagatedToStagePayload();
    message.stageId = object.stageId ?? '';
    message.propagations =
      object.propagations?.map((e) =>
        CompetitorAssignmentDescriptor.fromPartial(e)
      ) || [];
    return message;
  },
};

function createBaseCompetitorUpdatedPayload(): CompetitorUpdatedPayload {
  return { competitor: undefined };
}

export const CompetitorUpdatedPayload = {
  encode(
    message: CompetitorUpdatedPayload,
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
  ): CompetitorUpdatedPayload {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCompetitorUpdatedPayload();
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

  fromJSON(object: any): CompetitorUpdatedPayload {
    return {
      competitor: isSet(object.competitor)
        ? Competitor.fromJSON(object.competitor)
        : undefined,
    };
  },

  toJSON(message: CompetitorUpdatedPayload): unknown {
    const obj: any = {};
    message.competitor !== undefined &&
      (obj.competitor = message.competitor
        ? Competitor.toJSON(message.competitor)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CompetitorUpdatedPayload>, I>>(
    object: I
  ): CompetitorUpdatedPayload {
    const message = createBaseCompetitorUpdatedPayload();
    message.competitor =
      object.competitor !== undefined && object.competitor !== null
        ? Competitor.fromPartial(object.competitor)
        : undefined;
    return message;
  },
};

function createBaseFightCompetitorsAssignedPayload(): FightCompetitorsAssignedPayload {
  return { assignments: [] };
}

export const FightCompetitorsAssignedPayload = {
  encode(
    message: FightCompetitorsAssignedPayload,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.assignments) {
      CompetitorAssignmentDescriptor.encode(
        v!,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): FightCompetitorsAssignedPayload {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFightCompetitorsAssignedPayload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assignments.push(
            CompetitorAssignmentDescriptor.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FightCompetitorsAssignedPayload {
    return {
      assignments: Array.isArray(object?.assignments)
        ? object.assignments.map((e: any) =>
            CompetitorAssignmentDescriptor.fromJSON(e)
          )
        : [],
    };
  },

  toJSON(message: FightCompetitorsAssignedPayload): unknown {
    const obj: any = {};
    if (message.assignments) {
      obj.assignments = message.assignments.map((e) =>
        e ? CompetitorAssignmentDescriptor.toJSON(e) : undefined
      );
    } else {
      obj.assignments = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<FightCompetitorsAssignedPayload>, I>>(
    object: I
  ): FightCompetitorsAssignedPayload {
    const message = createBaseFightCompetitorsAssignedPayload();
    message.assignments =
      object.assignments?.map((e) =>
        CompetitorAssignmentDescriptor.fromPartial(e)
      ) || [];
    return message;
  },
};

function createBaseFightEditorChangesAppliedPayload(): FightEditorChangesAppliedPayload {
  return { updates: [], newFights: [], removedFighids: [] };
}

export const FightEditorChangesAppliedPayload = {
  encode(
    message: FightEditorChangesAppliedPayload,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.updates) {
      FightDescription.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.newFights) {
      FightDescription.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.removedFighids) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): FightEditorChangesAppliedPayload {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFightEditorChangesAppliedPayload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.updates.push(
            FightDescription.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.newFights.push(
            FightDescription.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.removedFighids.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FightEditorChangesAppliedPayload {
    return {
      updates: Array.isArray(object?.updates)
        ? object.updates.map((e: any) => FightDescription.fromJSON(e))
        : [],
      newFights: Array.isArray(object?.newFights)
        ? object.newFights.map((e: any) => FightDescription.fromJSON(e))
        : [],
      removedFighids: Array.isArray(object?.removedFighids)
        ? object.removedFighids.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: FightEditorChangesAppliedPayload): unknown {
    const obj: any = {};
    if (message.updates) {
      obj.updates = message.updates.map((e) =>
        e ? FightDescription.toJSON(e) : undefined
      );
    } else {
      obj.updates = [];
    }
    if (message.newFights) {
      obj.newFights = message.newFights.map((e) =>
        e ? FightDescription.toJSON(e) : undefined
      );
    } else {
      obj.newFights = [];
    }
    if (message.removedFighids) {
      obj.removedFighids = message.removedFighids.map((e) => e);
    } else {
      obj.removedFighids = [];
    }
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<FightEditorChangesAppliedPayload>, I>
  >(object: I): FightEditorChangesAppliedPayload {
    const message = createBaseFightEditorChangesAppliedPayload();
    message.updates =
      object.updates?.map((e) => FightDescription.fromPartial(e)) || [];
    message.newFights =
      object.newFights?.map((e) => FightDescription.fromPartial(e)) || [];
    message.removedFighids = object.removedFighids?.map((e) => e) || [];
    return message;
  },
};

function createBaseFightOrderUpdate(): FightOrderUpdate {
  return { fightId: '', numberOnMat: 0, startTime: undefined, matId: '' };
}

export const FightOrderUpdate = {
  encode(
    message: FightOrderUpdate,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.fightId !== '') {
      writer.uint32(10).string(message.fightId);
    }
    if (message.numberOnMat !== 0) {
      writer.uint32(16).int32(message.numberOnMat);
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.startTime),
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.matId !== '') {
      writer.uint32(34).string(message.matId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FightOrderUpdate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFightOrderUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fightId = reader.string();
          break;
        case 2:
          message.numberOnMat = reader.int32();
          break;
        case 3:
          message.startTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.matId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FightOrderUpdate {
    return {
      fightId: isSet(object.fightId) ? String(object.fightId) : '',
      numberOnMat: isSet(object.numberOnMat) ? Number(object.numberOnMat) : 0,
      startTime: isSet(object.startTime)
        ? fromJsonTimestamp(object.startTime)
        : undefined,
      matId: isSet(object.matId) ? String(object.matId) : '',
    };
  },

  toJSON(message: FightOrderUpdate): unknown {
    const obj: any = {};
    message.fightId !== undefined && (obj.fightId = message.fightId);
    message.numberOnMat !== undefined &&
      (obj.numberOnMat = Math.round(message.numberOnMat));
    message.startTime !== undefined &&
      (obj.startTime = message.startTime.toISOString());
    message.matId !== undefined && (obj.matId = message.matId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<FightOrderUpdate>, I>>(
    object: I
  ): FightOrderUpdate {
    const message = createBaseFightOrderUpdate();
    message.fightId = object.fightId ?? '';
    message.numberOnMat = object.numberOnMat ?? 0;
    message.startTime = object.startTime ?? undefined;
    message.matId = object.matId ?? '';
    return message;
  },
};

function createBaseFightsAddedToStagePayload(): FightsAddedToStagePayload {
  return { fights: [], stageId: '' };
}

export const FightsAddedToStagePayload = {
  encode(
    message: FightsAddedToStagePayload,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.fights) {
      FightDescription.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.stageId !== '') {
      writer.uint32(18).string(message.stageId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): FightsAddedToStagePayload {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFightsAddedToStagePayload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fights.push(FightDescription.decode(reader, reader.uint32()));
          break;
        case 2:
          message.stageId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FightsAddedToStagePayload {
    return {
      fights: Array.isArray(object?.fights)
        ? object.fights.map((e: any) => FightDescription.fromJSON(e))
        : [],
      stageId: isSet(object.stageId) ? String(object.stageId) : '',
    };
  },

  toJSON(message: FightsAddedToStagePayload): unknown {
    const obj: any = {};
    if (message.fights) {
      obj.fights = message.fights.map((e) =>
        e ? FightDescription.toJSON(e) : undefined
      );
    } else {
      obj.fights = [];
    }
    message.stageId !== undefined && (obj.stageId = message.stageId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<FightsAddedToStagePayload>, I>>(
    object: I
  ): FightsAddedToStagePayload {
    const message = createBaseFightsAddedToStagePayload();
    message.fights =
      object.fights?.map((e) => FightDescription.fromPartial(e)) || [];
    message.stageId = object.stageId ?? '';
    return message;
  },
};

function createBaseFightStartTimeUpdatedPayload(): FightStartTimeUpdatedPayload {
  return { newFights: [] };
}

export const FightStartTimeUpdatedPayload = {
  encode(
    message: FightStartTimeUpdatedPayload,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.newFights) {
      FightStartTimePair.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): FightStartTimeUpdatedPayload {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFightStartTimeUpdatedPayload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.newFights.push(
            FightStartTimePair.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FightStartTimeUpdatedPayload {
    return {
      newFights: Array.isArray(object?.newFights)
        ? object.newFights.map((e: any) => FightStartTimePair.fromJSON(e))
        : [],
    };
  },

  toJSON(message: FightStartTimeUpdatedPayload): unknown {
    const obj: any = {};
    if (message.newFights) {
      obj.newFights = message.newFights.map((e) =>
        e ? FightStartTimePair.toJSON(e) : undefined
      );
    } else {
      obj.newFights = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<FightStartTimeUpdatedPayload>, I>>(
    object: I
  ): FightStartTimeUpdatedPayload {
    const message = createBaseFightStartTimeUpdatedPayload();
    message.newFights =
      object.newFights?.map((e) => FightStartTimePair.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMatsUpdatedPayload(): MatsUpdatedPayload {
  return { mats: [] };
}

export const MatsUpdatedPayload = {
  encode(
    message: MatsUpdatedPayload,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.mats) {
      MatDescription.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MatsUpdatedPayload {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMatsUpdatedPayload();
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

  fromJSON(object: any): MatsUpdatedPayload {
    return {
      mats: Array.isArray(object?.mats)
        ? object.mats.map((e: any) => MatDescription.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MatsUpdatedPayload): unknown {
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

  fromPartial<I extends Exact<DeepPartial<MatsUpdatedPayload>, I>>(
    object: I
  ): MatsUpdatedPayload {
    const message = createBaseMatsUpdatedPayload();
    message.mats = object.mats?.map((e) => MatDescription.fromPartial(e)) || [];
    return message;
  },
};

function createBaseRegistrationInfoUpdatedPayload(): RegistrationInfoUpdatedPayload {
  return { registrationInfo: undefined };
}

export const RegistrationInfoUpdatedPayload = {
  encode(
    message: RegistrationInfoUpdatedPayload,
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
  ): RegistrationInfoUpdatedPayload {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegistrationInfoUpdatedPayload();
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

  fromJSON(object: any): RegistrationInfoUpdatedPayload {
    return {
      registrationInfo: isSet(object.registrationInfo)
        ? RegistrationInfo.fromJSON(object.registrationInfo)
        : undefined,
    };
  },

  toJSON(message: RegistrationInfoUpdatedPayload): unknown {
    const obj: any = {};
    message.registrationInfo !== undefined &&
      (obj.registrationInfo = message.registrationInfo
        ? RegistrationInfo.toJSON(message.registrationInfo)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RegistrationInfoUpdatedPayload>, I>>(
    object: I
  ): RegistrationInfoUpdatedPayload {
    const message = createBaseRegistrationInfoUpdatedPayload();
    message.registrationInfo =
      object.registrationInfo !== undefined && object.registrationInfo !== null
        ? RegistrationInfo.fromPartial(object.registrationInfo)
        : undefined;
    return message;
  },
};

function createBaseScheduleGeneratedPayload(): ScheduleGeneratedPayload {
  return { schedule: undefined };
}

export const ScheduleGeneratedPayload = {
  encode(
    message: ScheduleGeneratedPayload,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.schedule !== undefined) {
      Schedule.encode(message.schedule, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ScheduleGeneratedPayload {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseScheduleGeneratedPayload();
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

  fromJSON(object: any): ScheduleGeneratedPayload {
    return {
      schedule: isSet(object.schedule)
        ? Schedule.fromJSON(object.schedule)
        : undefined,
    };
  },

  toJSON(message: ScheduleGeneratedPayload): unknown {
    const obj: any = {};
    message.schedule !== undefined &&
      (obj.schedule = message.schedule
        ? Schedule.toJSON(message.schedule)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ScheduleGeneratedPayload>, I>>(
    object: I
  ): ScheduleGeneratedPayload {
    const message = createBaseScheduleGeneratedPayload();
    message.schedule =
      object.schedule !== undefined && object.schedule !== null
        ? Schedule.fromPartial(object.schedule)
        : undefined;
    return message;
  },
};

function createBaseStageResultSetPayload(): StageResultSetPayload {
  return { stageId: '', results: [] };
}

export const StageResultSetPayload = {
  encode(
    message: StageResultSetPayload,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.stageId !== '') {
      writer.uint32(10).string(message.stageId);
    }
    for (const v of message.results) {
      CompetitorStageResult.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): StageResultSetPayload {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStageResultSetPayload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stageId = reader.string();
          break;
        case 2:
          message.results.push(
            CompetitorStageResult.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StageResultSetPayload {
    return {
      stageId: isSet(object.stageId) ? String(object.stageId) : '',
      results: Array.isArray(object?.results)
        ? object.results.map((e: any) => CompetitorStageResult.fromJSON(e))
        : [],
    };
  },

  toJSON(message: StageResultSetPayload): unknown {
    const obj: any = {};
    message.stageId !== undefined && (obj.stageId = message.stageId);
    if (message.results) {
      obj.results = message.results.map((e) =>
        e ? CompetitorStageResult.toJSON(e) : undefined
      );
    } else {
      obj.results = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StageResultSetPayload>, I>>(
    object: I
  ): StageResultSetPayload {
    const message = createBaseStageResultSetPayload();
    message.stageId = object.stageId ?? '';
    message.results =
      object.results?.map((e) => CompetitorStageResult.fromPartial(e)) || [];
    return message;
  },
};

function createBaseStageStatusUpdatedPayload(): StageStatusUpdatedPayload {
  return { stageId: '', status: StageStatus.STAGE_STATUS_UNKNOWN };
}

export const StageStatusUpdatedPayload = {
  encode(
    message: StageStatusUpdatedPayload,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.stageId !== '') {
      writer.uint32(10).string(message.stageId);
    }
    if (message.status !== StageStatus.STAGE_STATUS_UNKNOWN) {
      writer.uint32(16).int32(stageStatusToNumber(message.status));
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): StageStatusUpdatedPayload {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStageStatusUpdatedPayload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stageId = reader.string();
          break;
        case 2:
          message.status = stageStatusFromJSON(reader.int32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StageStatusUpdatedPayload {
    return {
      stageId: isSet(object.stageId) ? String(object.stageId) : '',
      status: isSet(object.status)
        ? stageStatusFromJSON(object.status)
        : StageStatus.STAGE_STATUS_UNKNOWN,
    };
  },

  toJSON(message: StageStatusUpdatedPayload): unknown {
    const obj: any = {};
    message.stageId !== undefined && (obj.stageId = message.stageId);
    message.status !== undefined &&
      (obj.status = stageStatusToJSON(message.status));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StageStatusUpdatedPayload>, I>>(
    object: I
  ): StageStatusUpdatedPayload {
    const message = createBaseStageStatusUpdatedPayload();
    message.stageId = object.stageId ?? '';
    message.status = object.status ?? StageStatus.STAGE_STATUS_UNKNOWN;
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

function toTimestamp(date: Date): Timestamp {
  const seconds = date.getTime() / 1_000;
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === 'string') {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
