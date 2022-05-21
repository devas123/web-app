/* eslint-disable */
import * as Long from 'long';
import * as _m0 from 'protobufjs/minimal';
import {
  FullAcademyInfo,
  CategoryDescriptor,
  Competitor,
  RegistrationPeriod,
  CompetitionProperties,
  FightResult,
  FightStatus,
  RegistrationInfo,
  StageStatus,
  RegistrationGroup,
  StageDescriptor,
  CategoryRestriction,
  AdjacencyList,
  Period,
  MatDescription,
  CompetitorSelector,
  CompScore,
  fightStatusToNumber,
  fightStatusFromJSON,
  fightStatusToJSON,
  stageStatusToNumber,
  stageStatusFromJSON,
  stageStatusToJSON,
} from './model';

export const GroupChangeType = {
  GROUP_CHANGE_TYPE_ADD: 'GROUP_CHANGE_TYPE_ADD',
  GROUP_CHANGE_TYPE_REMOVE: 'GROUP_CHANGE_TYPE_REMOVE',
} as const;

export type GroupChangeType =
  typeof GroupChangeType[keyof typeof GroupChangeType];

export function groupChangeTypeFromJSON(object: any): GroupChangeType {
  switch (object) {
    case 0:
    case 'GROUP_CHANGE_TYPE_ADD':
      return GroupChangeType.GROUP_CHANGE_TYPE_ADD;
    case 2:
    case 'GROUP_CHANGE_TYPE_REMOVE':
      return GroupChangeType.GROUP_CHANGE_TYPE_REMOVE;
    default:
      throw new globalThis.Error(
        'Unrecognized enum value ' + object + ' for enum GroupChangeType'
      );
  }
}

export function groupChangeTypeToJSON(object: GroupChangeType): string {
  switch (object) {
    case GroupChangeType.GROUP_CHANGE_TYPE_ADD:
      return 'GROUP_CHANGE_TYPE_ADD';
    case GroupChangeType.GROUP_CHANGE_TYPE_REMOVE:
      return 'GROUP_CHANGE_TYPE_REMOVE';
    default:
      throw new globalThis.Error(
        'Unrecognized enum value ' + object + ' for enum GroupChangeType'
      );
  }
}

export function groupChangeTypeToNumber(object: GroupChangeType): number {
  switch (object) {
    case GroupChangeType.GROUP_CHANGE_TYPE_ADD:
      return 0;
    case GroupChangeType.GROUP_CHANGE_TYPE_REMOVE:
      return 2;
    default:
      throw new globalThis.Error(
        'Unrecognized enum value ' + object + ' for enum GroupChangeType'
      );
  }
}

export interface AddAcademyPayload {
  academy?: FullAcademyInfo;
}

export interface AddCategoryPayload {
  category?: CategoryDescriptor;
}

export interface AddCompetitorPayload {
  competitor?: Competitor;
}

export interface AddRegistrationGroupPayload {
  periodId: string;
  groups: RegistrationGroup[];
}

export interface AddRegistrationPeriodPayload {
  period?: RegistrationPeriod;
}

export interface AssignRegistrationGroupCategoriesPayload {
  periodId: string;
  groupId: string;
  categories: string[];
}

export interface CategoryRegistrationStatusChangePayload {
  newStatus: boolean;
}

export interface ChangeCompetitorCategoryPayload {
  newCategories: string[];
  oldCategories: string[];
  fighterId: string;
}

export interface ChangeFightOrderPayload {
  fightId: string;
  newMatId: string;
  newOrderOnMat: number;
  periodId: string;
}

export interface CompetitorCategoryAddedPayload {
  newCategoryId: string;
  fighterId: string;
}

export interface CompetitorMovedToGroup {
  competitorId: string;
  groupId: string;
  changeType: GroupChangeType;
}

export interface CreateCompetitionPayload {
  properties?: CompetitionProperties;
  reginfo?: RegistrationInfo | undefined;
}

export interface CreateFakeCompetitorsPayload {
  numberOfCompetitors: number;
  numberOfAcademies: number;
}

export interface DeleteRegistrationGroupPayload {
  periodId: string;
  groupId: string;
}

export interface DeleteRegistrationPeriodPayload {
  periodId: string;
}

export interface FightEditorApplyChangesPayload {
  stageId: string;
  bracketsChanges: CompetitorsOfFightUpdated[];
  competitorMovedToGroups: CompetitorMovedToGroup[];
}

export interface CompetitorsOfFightUpdated {
  fightId: string;
  competitors: string[];
}

export interface GenerateAbsoluteCategoryPayload {
  competitors: string[];
  category?: CategoryDescriptor;
  competitionId: string;
}

export interface GenerateBracketsPayload {
  stageDescriptors: StageDescriptor[];
}

export interface GenerateCategoriesFromRestrictionsPayload {
  restrictions: CategoryRestriction[];
  idTrees: AdjacencyList[];
  restrictionNames: string[];
}

export interface GenerateSchedulePayload {
  periods: Period[];
  mats: MatDescription[];
}

export interface PropagateCompetitorsPayload {
  manualOverride: boolean;
  propagateToStageId: string;
  previousStageId: string;
  selectorOverrides: CompetitorSelector[];
}

export interface RegistrationPeriodAddRegistrationGroupPayload {
  groupId: string;
  periodId: string;
}

export interface RemoveAcademyPayload {
  academyId: string;
}

export interface RemoveCompetitorPayload {
  competitorId: string;
}

export interface SetFightResultPayload {
  fightId: string;
  fightResult?: FightResult;
  scores: CompScore[];
  status: FightStatus;
}

export interface UpdateAcademyPayload {
  academy?: FullAcademyInfo;
}

export interface UpdateCompetionPropertiesPayload {
  competitionProperties?: CompetitionProperties;
}

export interface UpdateCompetitorPayload {
  competitor?: Competitor;
}

export interface UpdateRegistrationInfoPayload {
  registrationInfo?: RegistrationInfo;
}

export interface UpdateStageStatusPayload {
  stageId: string;
  status: StageStatus;
}

function createBaseAddAcademyPayload(): AddAcademyPayload {
  return { academy: undefined };
}

export const AddAcademyPayload = {
  encode(
    message: AddAcademyPayload,
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

  decode(input: _m0.Reader | Uint8Array, length?: number): AddAcademyPayload {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddAcademyPayload();
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

  fromJSON(object: any): AddAcademyPayload {
    return {
      academy: isSet(object.academy)
        ? FullAcademyInfo.fromJSON(object.academy)
        : undefined,
    };
  },

  toJSON(message: AddAcademyPayload): unknown {
    const obj: any = {};
    message.academy !== undefined &&
      (obj.academy = message.academy
        ? FullAcademyInfo.toJSON(message.academy)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AddAcademyPayload>, I>>(
    object: I
  ): AddAcademyPayload {
    const message = createBaseAddAcademyPayload();
    message.academy =
      object.academy !== undefined && object.academy !== null
        ? FullAcademyInfo.fromPartial(object.academy)
        : undefined;
    return message;
  },
};

function createBaseAddCategoryPayload(): AddCategoryPayload {
  return { category: undefined };
}

export const AddCategoryPayload = {
  encode(
    message: AddCategoryPayload,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.category !== undefined) {
      CategoryDescriptor.encode(
        message.category,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddCategoryPayload {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddCategoryPayload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.category = CategoryDescriptor.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AddCategoryPayload {
    return {
      category: isSet(object.category)
        ? CategoryDescriptor.fromJSON(object.category)
        : undefined,
    };
  },

  toJSON(message: AddCategoryPayload): unknown {
    const obj: any = {};
    message.category !== undefined &&
      (obj.category = message.category
        ? CategoryDescriptor.toJSON(message.category)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AddCategoryPayload>, I>>(
    object: I
  ): AddCategoryPayload {
    const message = createBaseAddCategoryPayload();
    message.category =
      object.category !== undefined && object.category !== null
        ? CategoryDescriptor.fromPartial(object.category)
        : undefined;
    return message;
  },
};

function createBaseAddCompetitorPayload(): AddCompetitorPayload {
  return { competitor: undefined };
}

export const AddCompetitorPayload = {
  encode(
    message: AddCompetitorPayload,
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
  ): AddCompetitorPayload {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddCompetitorPayload();
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

  fromJSON(object: any): AddCompetitorPayload {
    return {
      competitor: isSet(object.competitor)
        ? Competitor.fromJSON(object.competitor)
        : undefined,
    };
  },

  toJSON(message: AddCompetitorPayload): unknown {
    const obj: any = {};
    message.competitor !== undefined &&
      (obj.competitor = message.competitor
        ? Competitor.toJSON(message.competitor)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AddCompetitorPayload>, I>>(
    object: I
  ): AddCompetitorPayload {
    const message = createBaseAddCompetitorPayload();
    message.competitor =
      object.competitor !== undefined && object.competitor !== null
        ? Competitor.fromPartial(object.competitor)
        : undefined;
    return message;
  },
};

function createBaseAddRegistrationGroupPayload(): AddRegistrationGroupPayload {
  return { periodId: '', groups: [] };
}

export const AddRegistrationGroupPayload = {
  encode(
    message: AddRegistrationGroupPayload,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.periodId !== '') {
      writer.uint32(10).string(message.periodId);
    }
    for (const v of message.groups) {
      RegistrationGroup.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AddRegistrationGroupPayload {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddRegistrationGroupPayload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.periodId = reader.string();
          break;
        case 2:
          message.groups.push(
            RegistrationGroup.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AddRegistrationGroupPayload {
    return {
      periodId: isSet(object.periodId) ? String(object.periodId) : '',
      groups: Array.isArray(object?.groups)
        ? object.groups.map((e: any) => RegistrationGroup.fromJSON(e))
        : [],
    };
  },

  toJSON(message: AddRegistrationGroupPayload): unknown {
    const obj: any = {};
    message.periodId !== undefined && (obj.periodId = message.periodId);
    if (message.groups) {
      obj.groups = message.groups.map((e) =>
        e ? RegistrationGroup.toJSON(e) : undefined
      );
    } else {
      obj.groups = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AddRegistrationGroupPayload>, I>>(
    object: I
  ): AddRegistrationGroupPayload {
    const message = createBaseAddRegistrationGroupPayload();
    message.periodId = object.periodId ?? '';
    message.groups =
      object.groups?.map((e) => RegistrationGroup.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAddRegistrationPeriodPayload(): AddRegistrationPeriodPayload {
  return { period: undefined };
}

export const AddRegistrationPeriodPayload = {
  encode(
    message: AddRegistrationPeriodPayload,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.period !== undefined) {
      RegistrationPeriod.encode(
        message.period,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AddRegistrationPeriodPayload {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddRegistrationPeriodPayload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.period = RegistrationPeriod.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AddRegistrationPeriodPayload {
    return {
      period: isSet(object.period)
        ? RegistrationPeriod.fromJSON(object.period)
        : undefined,
    };
  },

  toJSON(message: AddRegistrationPeriodPayload): unknown {
    const obj: any = {};
    message.period !== undefined &&
      (obj.period = message.period
        ? RegistrationPeriod.toJSON(message.period)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AddRegistrationPeriodPayload>, I>>(
    object: I
  ): AddRegistrationPeriodPayload {
    const message = createBaseAddRegistrationPeriodPayload();
    message.period =
      object.period !== undefined && object.period !== null
        ? RegistrationPeriod.fromPartial(object.period)
        : undefined;
    return message;
  },
};

function createBaseAssignRegistrationGroupCategoriesPayload(): AssignRegistrationGroupCategoriesPayload {
  return { periodId: '', groupId: '', categories: [] };
}

export const AssignRegistrationGroupCategoriesPayload = {
  encode(
    message: AssignRegistrationGroupCategoriesPayload,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.periodId !== '') {
      writer.uint32(10).string(message.periodId);
    }
    if (message.groupId !== '') {
      writer.uint32(18).string(message.groupId);
    }
    for (const v of message.categories) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AssignRegistrationGroupCategoriesPayload {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssignRegistrationGroupCategoriesPayload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.periodId = reader.string();
          break;
        case 2:
          message.groupId = reader.string();
          break;
        case 3:
          message.categories.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AssignRegistrationGroupCategoriesPayload {
    return {
      periodId: isSet(object.periodId) ? String(object.periodId) : '',
      groupId: isSet(object.groupId) ? String(object.groupId) : '',
      categories: Array.isArray(object?.categories)
        ? object.categories.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: AssignRegistrationGroupCategoriesPayload): unknown {
    const obj: any = {};
    message.periodId !== undefined && (obj.periodId = message.periodId);
    message.groupId !== undefined && (obj.groupId = message.groupId);
    if (message.categories) {
      obj.categories = message.categories.map((e) => e);
    } else {
      obj.categories = [];
    }
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<AssignRegistrationGroupCategoriesPayload>, I>
  >(object: I): AssignRegistrationGroupCategoriesPayload {
    const message = createBaseAssignRegistrationGroupCategoriesPayload();
    message.periodId = object.periodId ?? '';
    message.groupId = object.groupId ?? '';
    message.categories = object.categories?.map((e) => e) || [];
    return message;
  },
};

function createBaseCategoryRegistrationStatusChangePayload(): CategoryRegistrationStatusChangePayload {
  return { newStatus: false };
}

export const CategoryRegistrationStatusChangePayload = {
  encode(
    message: CategoryRegistrationStatusChangePayload,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.newStatus === true) {
      writer.uint32(8).bool(message.newStatus);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CategoryRegistrationStatusChangePayload {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCategoryRegistrationStatusChangePayload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.newStatus = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CategoryRegistrationStatusChangePayload {
    return {
      newStatus: isSet(object.newStatus) ? Boolean(object.newStatus) : false,
    };
  },

  toJSON(message: CategoryRegistrationStatusChangePayload): unknown {
    const obj: any = {};
    message.newStatus !== undefined && (obj.newStatus = message.newStatus);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<CategoryRegistrationStatusChangePayload>, I>
  >(object: I): CategoryRegistrationStatusChangePayload {
    const message = createBaseCategoryRegistrationStatusChangePayload();
    message.newStatus = object.newStatus ?? false;
    return message;
  },
};

function createBaseChangeCompetitorCategoryPayload(): ChangeCompetitorCategoryPayload {
  return { newCategories: [], oldCategories: [], fighterId: '' };
}

export const ChangeCompetitorCategoryPayload = {
  encode(
    message: ChangeCompetitorCategoryPayload,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.newCategories) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.oldCategories) {
      writer.uint32(18).string(v!);
    }
    if (message.fighterId !== '') {
      writer.uint32(26).string(message.fighterId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ChangeCompetitorCategoryPayload {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChangeCompetitorCategoryPayload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.newCategories.push(reader.string());
          break;
        case 2:
          message.oldCategories.push(reader.string());
          break;
        case 3:
          message.fighterId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ChangeCompetitorCategoryPayload {
    return {
      newCategories: Array.isArray(object?.newCategories)
        ? object.newCategories.map((e: any) => String(e))
        : [],
      oldCategories: Array.isArray(object?.oldCategories)
        ? object.oldCategories.map((e: any) => String(e))
        : [],
      fighterId: isSet(object.fighterId) ? String(object.fighterId) : '',
    };
  },

  toJSON(message: ChangeCompetitorCategoryPayload): unknown {
    const obj: any = {};
    if (message.newCategories) {
      obj.newCategories = message.newCategories.map((e) => e);
    } else {
      obj.newCategories = [];
    }
    if (message.oldCategories) {
      obj.oldCategories = message.oldCategories.map((e) => e);
    } else {
      obj.oldCategories = [];
    }
    message.fighterId !== undefined && (obj.fighterId = message.fighterId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ChangeCompetitorCategoryPayload>, I>>(
    object: I
  ): ChangeCompetitorCategoryPayload {
    const message = createBaseChangeCompetitorCategoryPayload();
    message.newCategories = object.newCategories?.map((e) => e) || [];
    message.oldCategories = object.oldCategories?.map((e) => e) || [];
    message.fighterId = object.fighterId ?? '';
    return message;
  },
};

function createBaseChangeFightOrderPayload(): ChangeFightOrderPayload {
  return { fightId: '', newMatId: '', newOrderOnMat: 0, periodId: '' };
}

export const ChangeFightOrderPayload = {
  encode(
    message: ChangeFightOrderPayload,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.fightId !== '') {
      writer.uint32(10).string(message.fightId);
    }
    if (message.newMatId !== '') {
      writer.uint32(18).string(message.newMatId);
    }
    if (message.newOrderOnMat !== 0) {
      writer.uint32(24).int32(message.newOrderOnMat);
    }
    if (message.periodId !== '') {
      writer.uint32(34).string(message.periodId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ChangeFightOrderPayload {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChangeFightOrderPayload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fightId = reader.string();
          break;
        case 2:
          message.newMatId = reader.string();
          break;
        case 3:
          message.newOrderOnMat = reader.int32();
          break;
        case 4:
          message.periodId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ChangeFightOrderPayload {
    return {
      fightId: isSet(object.fightId) ? String(object.fightId) : '',
      newMatId: isSet(object.newMatId) ? String(object.newMatId) : '',
      newOrderOnMat: isSet(object.newOrderOnMat)
        ? Number(object.newOrderOnMat)
        : 0,
      periodId: isSet(object.periodId) ? String(object.periodId) : '',
    };
  },

  toJSON(message: ChangeFightOrderPayload): unknown {
    const obj: any = {};
    message.fightId !== undefined && (obj.fightId = message.fightId);
    message.newMatId !== undefined && (obj.newMatId = message.newMatId);
    message.newOrderOnMat !== undefined &&
      (obj.newOrderOnMat = Math.round(message.newOrderOnMat));
    message.periodId !== undefined && (obj.periodId = message.periodId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ChangeFightOrderPayload>, I>>(
    object: I
  ): ChangeFightOrderPayload {
    const message = createBaseChangeFightOrderPayload();
    message.fightId = object.fightId ?? '';
    message.newMatId = object.newMatId ?? '';
    message.newOrderOnMat = object.newOrderOnMat ?? 0;
    message.periodId = object.periodId ?? '';
    return message;
  },
};

function createBaseCompetitorCategoryAddedPayload(): CompetitorCategoryAddedPayload {
  return { newCategoryId: '', fighterId: '' };
}

export const CompetitorCategoryAddedPayload = {
  encode(
    message: CompetitorCategoryAddedPayload,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.newCategoryId !== '') {
      writer.uint32(10).string(message.newCategoryId);
    }
    if (message.fighterId !== '') {
      writer.uint32(18).string(message.fighterId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CompetitorCategoryAddedPayload {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCompetitorCategoryAddedPayload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.newCategoryId = reader.string();
          break;
        case 2:
          message.fighterId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CompetitorCategoryAddedPayload {
    return {
      newCategoryId: isSet(object.newCategoryId)
        ? String(object.newCategoryId)
        : '',
      fighterId: isSet(object.fighterId) ? String(object.fighterId) : '',
    };
  },

  toJSON(message: CompetitorCategoryAddedPayload): unknown {
    const obj: any = {};
    message.newCategoryId !== undefined &&
      (obj.newCategoryId = message.newCategoryId);
    message.fighterId !== undefined && (obj.fighterId = message.fighterId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CompetitorCategoryAddedPayload>, I>>(
    object: I
  ): CompetitorCategoryAddedPayload {
    const message = createBaseCompetitorCategoryAddedPayload();
    message.newCategoryId = object.newCategoryId ?? '';
    message.fighterId = object.fighterId ?? '';
    return message;
  },
};

function createBaseCompetitorMovedToGroup(): CompetitorMovedToGroup {
  return {
    competitorId: '',
    groupId: '',
    changeType: GroupChangeType.GROUP_CHANGE_TYPE_ADD,
  };
}

export const CompetitorMovedToGroup = {
  encode(
    message: CompetitorMovedToGroup,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.competitorId !== '') {
      writer.uint32(10).string(message.competitorId);
    }
    if (message.groupId !== '') {
      writer.uint32(18).string(message.groupId);
    }
    if (message.changeType !== GroupChangeType.GROUP_CHANGE_TYPE_ADD) {
      writer.uint32(24).int32(groupChangeTypeToNumber(message.changeType));
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CompetitorMovedToGroup {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCompetitorMovedToGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.competitorId = reader.string();
          break;
        case 2:
          message.groupId = reader.string();
          break;
        case 3:
          message.changeType = groupChangeTypeFromJSON(reader.int32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CompetitorMovedToGroup {
    return {
      competitorId: isSet(object.competitorId)
        ? String(object.competitorId)
        : '',
      groupId: isSet(object.groupId) ? String(object.groupId) : '',
      changeType: isSet(object.changeType)
        ? groupChangeTypeFromJSON(object.changeType)
        : GroupChangeType.GROUP_CHANGE_TYPE_ADD,
    };
  },

  toJSON(message: CompetitorMovedToGroup): unknown {
    const obj: any = {};
    message.competitorId !== undefined &&
      (obj.competitorId = message.competitorId);
    message.groupId !== undefined && (obj.groupId = message.groupId);
    message.changeType !== undefined &&
      (obj.changeType = groupChangeTypeToJSON(message.changeType));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CompetitorMovedToGroup>, I>>(
    object: I
  ): CompetitorMovedToGroup {
    const message = createBaseCompetitorMovedToGroup();
    message.competitorId = object.competitorId ?? '';
    message.groupId = object.groupId ?? '';
    message.changeType =
      object.changeType ?? GroupChangeType.GROUP_CHANGE_TYPE_ADD;
    return message;
  },
};

function createBaseCreateCompetitionPayload(): CreateCompetitionPayload {
  return { properties: undefined, reginfo: undefined };
}

export const CreateCompetitionPayload = {
  encode(
    message: CreateCompetitionPayload,
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
  ): CreateCompetitionPayload {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateCompetitionPayload();
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

  fromJSON(object: any): CreateCompetitionPayload {
    return {
      properties: isSet(object.properties)
        ? CompetitionProperties.fromJSON(object.properties)
        : undefined,
      reginfo: isSet(object.reginfo)
        ? RegistrationInfo.fromJSON(object.reginfo)
        : undefined,
    };
  },

  toJSON(message: CreateCompetitionPayload): unknown {
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

  fromPartial<I extends Exact<DeepPartial<CreateCompetitionPayload>, I>>(
    object: I
  ): CreateCompetitionPayload {
    const message = createBaseCreateCompetitionPayload();
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

function createBaseCreateFakeCompetitorsPayload(): CreateFakeCompetitorsPayload {
  return { numberOfCompetitors: 0, numberOfAcademies: 0 };
}

export const CreateFakeCompetitorsPayload = {
  encode(
    message: CreateFakeCompetitorsPayload,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.numberOfCompetitors !== 0) {
      writer.uint32(8).int32(message.numberOfCompetitors);
    }
    if (message.numberOfAcademies !== 0) {
      writer.uint32(16).int32(message.numberOfAcademies);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateFakeCompetitorsPayload {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateFakeCompetitorsPayload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.numberOfCompetitors = reader.int32();
          break;
        case 2:
          message.numberOfAcademies = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateFakeCompetitorsPayload {
    return {
      numberOfCompetitors: isSet(object.numberOfCompetitors)
        ? Number(object.numberOfCompetitors)
        : 0,
      numberOfAcademies: isSet(object.numberOfAcademies)
        ? Number(object.numberOfAcademies)
        : 0,
    };
  },

  toJSON(message: CreateFakeCompetitorsPayload): unknown {
    const obj: any = {};
    message.numberOfCompetitors !== undefined &&
      (obj.numberOfCompetitors = Math.round(message.numberOfCompetitors));
    message.numberOfAcademies !== undefined &&
      (obj.numberOfAcademies = Math.round(message.numberOfAcademies));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateFakeCompetitorsPayload>, I>>(
    object: I
  ): CreateFakeCompetitorsPayload {
    const message = createBaseCreateFakeCompetitorsPayload();
    message.numberOfCompetitors = object.numberOfCompetitors ?? 0;
    message.numberOfAcademies = object.numberOfAcademies ?? 0;
    return message;
  },
};

function createBaseDeleteRegistrationGroupPayload(): DeleteRegistrationGroupPayload {
  return { periodId: '', groupId: '' };
}

export const DeleteRegistrationGroupPayload = {
  encode(
    message: DeleteRegistrationGroupPayload,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.periodId !== '') {
      writer.uint32(10).string(message.periodId);
    }
    if (message.groupId !== '') {
      writer.uint32(18).string(message.groupId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteRegistrationGroupPayload {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteRegistrationGroupPayload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.periodId = reader.string();
          break;
        case 2:
          message.groupId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteRegistrationGroupPayload {
    return {
      periodId: isSet(object.periodId) ? String(object.periodId) : '',
      groupId: isSet(object.groupId) ? String(object.groupId) : '',
    };
  },

  toJSON(message: DeleteRegistrationGroupPayload): unknown {
    const obj: any = {};
    message.periodId !== undefined && (obj.periodId = message.periodId);
    message.groupId !== undefined && (obj.groupId = message.groupId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteRegistrationGroupPayload>, I>>(
    object: I
  ): DeleteRegistrationGroupPayload {
    const message = createBaseDeleteRegistrationGroupPayload();
    message.periodId = object.periodId ?? '';
    message.groupId = object.groupId ?? '';
    return message;
  },
};

function createBaseDeleteRegistrationPeriodPayload(): DeleteRegistrationPeriodPayload {
  return { periodId: '' };
}

export const DeleteRegistrationPeriodPayload = {
  encode(
    message: DeleteRegistrationPeriodPayload,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.periodId !== '') {
      writer.uint32(10).string(message.periodId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteRegistrationPeriodPayload {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteRegistrationPeriodPayload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.periodId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteRegistrationPeriodPayload {
    return {
      periodId: isSet(object.periodId) ? String(object.periodId) : '',
    };
  },

  toJSON(message: DeleteRegistrationPeriodPayload): unknown {
    const obj: any = {};
    message.periodId !== undefined && (obj.periodId = message.periodId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteRegistrationPeriodPayload>, I>>(
    object: I
  ): DeleteRegistrationPeriodPayload {
    const message = createBaseDeleteRegistrationPeriodPayload();
    message.periodId = object.periodId ?? '';
    return message;
  },
};

function createBaseFightEditorApplyChangesPayload(): FightEditorApplyChangesPayload {
  return { stageId: '', bracketsChanges: [], competitorMovedToGroups: [] };
}

export const FightEditorApplyChangesPayload = {
  encode(
    message: FightEditorApplyChangesPayload,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.stageId !== '') {
      writer.uint32(10).string(message.stageId);
    }
    for (const v of message.bracketsChanges) {
      CompetitorsOfFightUpdated.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.competitorMovedToGroups) {
      CompetitorMovedToGroup.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): FightEditorApplyChangesPayload {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFightEditorApplyChangesPayload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stageId = reader.string();
          break;
        case 2:
          message.bracketsChanges.push(
            CompetitorsOfFightUpdated.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.competitorMovedToGroups.push(
            CompetitorMovedToGroup.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FightEditorApplyChangesPayload {
    return {
      stageId: isSet(object.stageId) ? String(object.stageId) : '',
      bracketsChanges: Array.isArray(object?.bracketsChanges)
        ? object.bracketsChanges.map((e: any) =>
            CompetitorsOfFightUpdated.fromJSON(e)
          )
        : [],
      competitorMovedToGroups: Array.isArray(object?.competitorMovedToGroups)
        ? object.competitorMovedToGroups.map((e: any) =>
            CompetitorMovedToGroup.fromJSON(e)
          )
        : [],
    };
  },

  toJSON(message: FightEditorApplyChangesPayload): unknown {
    const obj: any = {};
    message.stageId !== undefined && (obj.stageId = message.stageId);
    if (message.bracketsChanges) {
      obj.bracketsChanges = message.bracketsChanges.map((e) =>
        e ? CompetitorsOfFightUpdated.toJSON(e) : undefined
      );
    } else {
      obj.bracketsChanges = [];
    }
    if (message.competitorMovedToGroups) {
      obj.competitorMovedToGroups = message.competitorMovedToGroups.map((e) =>
        e ? CompetitorMovedToGroup.toJSON(e) : undefined
      );
    } else {
      obj.competitorMovedToGroups = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<FightEditorApplyChangesPayload>, I>>(
    object: I
  ): FightEditorApplyChangesPayload {
    const message = createBaseFightEditorApplyChangesPayload();
    message.stageId = object.stageId ?? '';
    message.bracketsChanges =
      object.bracketsChanges?.map((e) =>
        CompetitorsOfFightUpdated.fromPartial(e)
      ) || [];
    message.competitorMovedToGroups =
      object.competitorMovedToGroups?.map((e) =>
        CompetitorMovedToGroup.fromPartial(e)
      ) || [];
    return message;
  },
};

function createBaseCompetitorsOfFightUpdated(): CompetitorsOfFightUpdated {
  return { fightId: '', competitors: [] };
}

export const CompetitorsOfFightUpdated = {
  encode(
    message: CompetitorsOfFightUpdated,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.fightId !== '') {
      writer.uint32(10).string(message.fightId);
    }
    for (const v of message.competitors) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CompetitorsOfFightUpdated {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCompetitorsOfFightUpdated();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fightId = reader.string();
          break;
        case 2:
          message.competitors.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CompetitorsOfFightUpdated {
    return {
      fightId: isSet(object.fightId) ? String(object.fightId) : '',
      competitors: Array.isArray(object?.competitors)
        ? object.competitors.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: CompetitorsOfFightUpdated): unknown {
    const obj: any = {};
    message.fightId !== undefined && (obj.fightId = message.fightId);
    if (message.competitors) {
      obj.competitors = message.competitors.map((e) => e);
    } else {
      obj.competitors = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CompetitorsOfFightUpdated>, I>>(
    object: I
  ): CompetitorsOfFightUpdated {
    const message = createBaseCompetitorsOfFightUpdated();
    message.fightId = object.fightId ?? '';
    message.competitors = object.competitors?.map((e) => e) || [];
    return message;
  },
};

function createBaseGenerateAbsoluteCategoryPayload(): GenerateAbsoluteCategoryPayload {
  return { competitors: [], category: undefined, competitionId: '' };
}

export const GenerateAbsoluteCategoryPayload = {
  encode(
    message: GenerateAbsoluteCategoryPayload,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.competitors) {
      writer.uint32(10).string(v!);
    }
    if (message.category !== undefined) {
      CategoryDescriptor.encode(
        message.category,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.competitionId !== '') {
      writer.uint32(26).string(message.competitionId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GenerateAbsoluteCategoryPayload {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenerateAbsoluteCategoryPayload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.competitors.push(reader.string());
          break;
        case 2:
          message.category = CategoryDescriptor.decode(reader, reader.uint32());
          break;
        case 3:
          message.competitionId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenerateAbsoluteCategoryPayload {
    return {
      competitors: Array.isArray(object?.competitors)
        ? object.competitors.map((e: any) => String(e))
        : [],
      category: isSet(object.category)
        ? CategoryDescriptor.fromJSON(object.category)
        : undefined,
      competitionId: isSet(object.competitionId)
        ? String(object.competitionId)
        : '',
    };
  },

  toJSON(message: GenerateAbsoluteCategoryPayload): unknown {
    const obj: any = {};
    if (message.competitors) {
      obj.competitors = message.competitors.map((e) => e);
    } else {
      obj.competitors = [];
    }
    message.category !== undefined &&
      (obj.category = message.category
        ? CategoryDescriptor.toJSON(message.category)
        : undefined);
    message.competitionId !== undefined &&
      (obj.competitionId = message.competitionId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenerateAbsoluteCategoryPayload>, I>>(
    object: I
  ): GenerateAbsoluteCategoryPayload {
    const message = createBaseGenerateAbsoluteCategoryPayload();
    message.competitors = object.competitors?.map((e) => e) || [];
    message.category =
      object.category !== undefined && object.category !== null
        ? CategoryDescriptor.fromPartial(object.category)
        : undefined;
    message.competitionId = object.competitionId ?? '';
    return message;
  },
};

function createBaseGenerateBracketsPayload(): GenerateBracketsPayload {
  return { stageDescriptors: [] };
}

export const GenerateBracketsPayload = {
  encode(
    message: GenerateBracketsPayload,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.stageDescriptors) {
      StageDescriptor.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GenerateBracketsPayload {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenerateBracketsPayload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stageDescriptors.push(
            StageDescriptor.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenerateBracketsPayload {
    return {
      stageDescriptors: Array.isArray(object?.stageDescriptors)
        ? object.stageDescriptors.map((e: any) => StageDescriptor.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GenerateBracketsPayload): unknown {
    const obj: any = {};
    if (message.stageDescriptors) {
      obj.stageDescriptors = message.stageDescriptors.map((e) =>
        e ? StageDescriptor.toJSON(e) : undefined
      );
    } else {
      obj.stageDescriptors = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenerateBracketsPayload>, I>>(
    object: I
  ): GenerateBracketsPayload {
    const message = createBaseGenerateBracketsPayload();
    message.stageDescriptors =
      object.stageDescriptors?.map((e) => StageDescriptor.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGenerateCategoriesFromRestrictionsPayload(): GenerateCategoriesFromRestrictionsPayload {
  return { restrictions: [], idTrees: [], restrictionNames: [] };
}

export const GenerateCategoriesFromRestrictionsPayload = {
  encode(
    message: GenerateCategoriesFromRestrictionsPayload,
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
  ): GenerateCategoriesFromRestrictionsPayload {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenerateCategoriesFromRestrictionsPayload();
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

  fromJSON(object: any): GenerateCategoriesFromRestrictionsPayload {
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

  toJSON(message: GenerateCategoriesFromRestrictionsPayload): unknown {
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
    I extends Exact<DeepPartial<GenerateCategoriesFromRestrictionsPayload>, I>
  >(object: I): GenerateCategoriesFromRestrictionsPayload {
    const message = createBaseGenerateCategoriesFromRestrictionsPayload();
    message.restrictions =
      object.restrictions?.map((e) => CategoryRestriction.fromPartial(e)) || [];
    message.idTrees =
      object.idTrees?.map((e) => AdjacencyList.fromPartial(e)) || [];
    message.restrictionNames = object.restrictionNames?.map((e) => e) || [];
    return message;
  },
};

function createBaseGenerateSchedulePayload(): GenerateSchedulePayload {
  return { periods: [], mats: [] };
}

export const GenerateSchedulePayload = {
  encode(
    message: GenerateSchedulePayload,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.periods) {
      Period.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.mats) {
      MatDescription.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GenerateSchedulePayload {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenerateSchedulePayload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.periods.push(Period.decode(reader, reader.uint32()));
          break;
        case 2:
          message.mats.push(MatDescription.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenerateSchedulePayload {
    return {
      periods: Array.isArray(object?.periods)
        ? object.periods.map((e: any) => Period.fromJSON(e))
        : [],
      mats: Array.isArray(object?.mats)
        ? object.mats.map((e: any) => MatDescription.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GenerateSchedulePayload): unknown {
    const obj: any = {};
    if (message.periods) {
      obj.periods = message.periods.map((e) =>
        e ? Period.toJSON(e) : undefined
      );
    } else {
      obj.periods = [];
    }
    if (message.mats) {
      obj.mats = message.mats.map((e) =>
        e ? MatDescription.toJSON(e) : undefined
      );
    } else {
      obj.mats = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenerateSchedulePayload>, I>>(
    object: I
  ): GenerateSchedulePayload {
    const message = createBaseGenerateSchedulePayload();
    message.periods = object.periods?.map((e) => Period.fromPartial(e)) || [];
    message.mats = object.mats?.map((e) => MatDescription.fromPartial(e)) || [];
    return message;
  },
};

function createBasePropagateCompetitorsPayload(): PropagateCompetitorsPayload {
  return {
    manualOverride: false,
    propagateToStageId: '',
    previousStageId: '',
    selectorOverrides: [],
  };
}

export const PropagateCompetitorsPayload = {
  encode(
    message: PropagateCompetitorsPayload,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.manualOverride === true) {
      writer.uint32(8).bool(message.manualOverride);
    }
    if (message.propagateToStageId !== '') {
      writer.uint32(18).string(message.propagateToStageId);
    }
    if (message.previousStageId !== '') {
      writer.uint32(26).string(message.previousStageId);
    }
    for (const v of message.selectorOverrides) {
      CompetitorSelector.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PropagateCompetitorsPayload {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePropagateCompetitorsPayload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.manualOverride = reader.bool();
          break;
        case 2:
          message.propagateToStageId = reader.string();
          break;
        case 3:
          message.previousStageId = reader.string();
          break;
        case 4:
          message.selectorOverrides.push(
            CompetitorSelector.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PropagateCompetitorsPayload {
    return {
      manualOverride: isSet(object.manualOverride)
        ? Boolean(object.manualOverride)
        : false,
      propagateToStageId: isSet(object.propagateToStageId)
        ? String(object.propagateToStageId)
        : '',
      previousStageId: isSet(object.previousStageId)
        ? String(object.previousStageId)
        : '',
      selectorOverrides: Array.isArray(object?.selectorOverrides)
        ? object.selectorOverrides.map((e: any) =>
            CompetitorSelector.fromJSON(e)
          )
        : [],
    };
  },

  toJSON(message: PropagateCompetitorsPayload): unknown {
    const obj: any = {};
    message.manualOverride !== undefined &&
      (obj.manualOverride = message.manualOverride);
    message.propagateToStageId !== undefined &&
      (obj.propagateToStageId = message.propagateToStageId);
    message.previousStageId !== undefined &&
      (obj.previousStageId = message.previousStageId);
    if (message.selectorOverrides) {
      obj.selectorOverrides = message.selectorOverrides.map((e) =>
        e ? CompetitorSelector.toJSON(e) : undefined
      );
    } else {
      obj.selectorOverrides = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PropagateCompetitorsPayload>, I>>(
    object: I
  ): PropagateCompetitorsPayload {
    const message = createBasePropagateCompetitorsPayload();
    message.manualOverride = object.manualOverride ?? false;
    message.propagateToStageId = object.propagateToStageId ?? '';
    message.previousStageId = object.previousStageId ?? '';
    message.selectorOverrides =
      object.selectorOverrides?.map((e) => CompetitorSelector.fromPartial(e)) ||
      [];
    return message;
  },
};

function createBaseRegistrationPeriodAddRegistrationGroupPayload(): RegistrationPeriodAddRegistrationGroupPayload {
  return { groupId: '', periodId: '' };
}

export const RegistrationPeriodAddRegistrationGroupPayload = {
  encode(
    message: RegistrationPeriodAddRegistrationGroupPayload,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.groupId !== '') {
      writer.uint32(10).string(message.groupId);
    }
    if (message.periodId !== '') {
      writer.uint32(18).string(message.periodId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RegistrationPeriodAddRegistrationGroupPayload {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegistrationPeriodAddRegistrationGroupPayload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = reader.string();
          break;
        case 2:
          message.periodId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RegistrationPeriodAddRegistrationGroupPayload {
    return {
      groupId: isSet(object.groupId) ? String(object.groupId) : '',
      periodId: isSet(object.periodId) ? String(object.periodId) : '',
    };
  },

  toJSON(message: RegistrationPeriodAddRegistrationGroupPayload): unknown {
    const obj: any = {};
    message.groupId !== undefined && (obj.groupId = message.groupId);
    message.periodId !== undefined && (obj.periodId = message.periodId);
    return obj;
  },

  fromPartial<
    I extends Exact<
      DeepPartial<RegistrationPeriodAddRegistrationGroupPayload>,
      I
    >
  >(object: I): RegistrationPeriodAddRegistrationGroupPayload {
    const message = createBaseRegistrationPeriodAddRegistrationGroupPayload();
    message.groupId = object.groupId ?? '';
    message.periodId = object.periodId ?? '';
    return message;
  },
};

function createBaseRemoveAcademyPayload(): RemoveAcademyPayload {
  return { academyId: '' };
}

export const RemoveAcademyPayload = {
  encode(
    message: RemoveAcademyPayload,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.academyId !== '') {
      writer.uint32(10).string(message.academyId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RemoveAcademyPayload {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRemoveAcademyPayload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.academyId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RemoveAcademyPayload {
    return {
      academyId: isSet(object.academyId) ? String(object.academyId) : '',
    };
  },

  toJSON(message: RemoveAcademyPayload): unknown {
    const obj: any = {};
    message.academyId !== undefined && (obj.academyId = message.academyId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RemoveAcademyPayload>, I>>(
    object: I
  ): RemoveAcademyPayload {
    const message = createBaseRemoveAcademyPayload();
    message.academyId = object.academyId ?? '';
    return message;
  },
};

function createBaseRemoveCompetitorPayload(): RemoveCompetitorPayload {
  return { competitorId: '' };
}

export const RemoveCompetitorPayload = {
  encode(
    message: RemoveCompetitorPayload,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.competitorId !== '') {
      writer.uint32(10).string(message.competitorId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RemoveCompetitorPayload {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRemoveCompetitorPayload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.competitorId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RemoveCompetitorPayload {
    return {
      competitorId: isSet(object.competitorId)
        ? String(object.competitorId)
        : '',
    };
  },

  toJSON(message: RemoveCompetitorPayload): unknown {
    const obj: any = {};
    message.competitorId !== undefined &&
      (obj.competitorId = message.competitorId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RemoveCompetitorPayload>, I>>(
    object: I
  ): RemoveCompetitorPayload {
    const message = createBaseRemoveCompetitorPayload();
    message.competitorId = object.competitorId ?? '';
    return message;
  },
};

function createBaseSetFightResultPayload(): SetFightResultPayload {
  return {
    fightId: '',
    fightResult: undefined,
    scores: [],
    status: FightStatus.FIGHT_STATUS_PENDING,
  };
}

export const SetFightResultPayload = {
  encode(
    message: SetFightResultPayload,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.fightId !== '') {
      writer.uint32(10).string(message.fightId);
    }
    if (message.fightResult !== undefined) {
      FightResult.encode(
        message.fightResult,
        writer.uint32(18).fork()
      ).ldelim();
    }
    for (const v of message.scores) {
      CompScore.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.status !== FightStatus.FIGHT_STATUS_PENDING) {
      writer.uint32(32).int32(fightStatusToNumber(message.status));
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SetFightResultPayload {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetFightResultPayload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fightId = reader.string();
          break;
        case 2:
          message.fightResult = FightResult.decode(reader, reader.uint32());
          break;
        case 3:
          message.scores.push(CompScore.decode(reader, reader.uint32()));
          break;
        case 4:
          message.status = fightStatusFromJSON(reader.int32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SetFightResultPayload {
    return {
      fightId: isSet(object.fightId) ? String(object.fightId) : '',
      fightResult: isSet(object.fightResult)
        ? FightResult.fromJSON(object.fightResult)
        : undefined,
      scores: Array.isArray(object?.scores)
        ? object.scores.map((e: any) => CompScore.fromJSON(e))
        : [],
      status: isSet(object.status)
        ? fightStatusFromJSON(object.status)
        : FightStatus.FIGHT_STATUS_PENDING,
    };
  },

  toJSON(message: SetFightResultPayload): unknown {
    const obj: any = {};
    message.fightId !== undefined && (obj.fightId = message.fightId);
    message.fightResult !== undefined &&
      (obj.fightResult = message.fightResult
        ? FightResult.toJSON(message.fightResult)
        : undefined);
    if (message.scores) {
      obj.scores = message.scores.map((e) =>
        e ? CompScore.toJSON(e) : undefined
      );
    } else {
      obj.scores = [];
    }
    message.status !== undefined &&
      (obj.status = fightStatusToJSON(message.status));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SetFightResultPayload>, I>>(
    object: I
  ): SetFightResultPayload {
    const message = createBaseSetFightResultPayload();
    message.fightId = object.fightId ?? '';
    message.fightResult =
      object.fightResult !== undefined && object.fightResult !== null
        ? FightResult.fromPartial(object.fightResult)
        : undefined;
    message.scores = object.scores?.map((e) => CompScore.fromPartial(e)) || [];
    message.status = object.status ?? FightStatus.FIGHT_STATUS_PENDING;
    return message;
  },
};

function createBaseUpdateAcademyPayload(): UpdateAcademyPayload {
  return { academy: undefined };
}

export const UpdateAcademyPayload = {
  encode(
    message: UpdateAcademyPayload,
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

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateAcademyPayload {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateAcademyPayload();
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

  fromJSON(object: any): UpdateAcademyPayload {
    return {
      academy: isSet(object.academy)
        ? FullAcademyInfo.fromJSON(object.academy)
        : undefined,
    };
  },

  toJSON(message: UpdateAcademyPayload): unknown {
    const obj: any = {};
    message.academy !== undefined &&
      (obj.academy = message.academy
        ? FullAcademyInfo.toJSON(message.academy)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateAcademyPayload>, I>>(
    object: I
  ): UpdateAcademyPayload {
    const message = createBaseUpdateAcademyPayload();
    message.academy =
      object.academy !== undefined && object.academy !== null
        ? FullAcademyInfo.fromPartial(object.academy)
        : undefined;
    return message;
  },
};

function createBaseUpdateCompetionPropertiesPayload(): UpdateCompetionPropertiesPayload {
  return { competitionProperties: undefined };
}

export const UpdateCompetionPropertiesPayload = {
  encode(
    message: UpdateCompetionPropertiesPayload,
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
  ): UpdateCompetionPropertiesPayload {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateCompetionPropertiesPayload();
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

  fromJSON(object: any): UpdateCompetionPropertiesPayload {
    return {
      competitionProperties: isSet(object.competitionProperties)
        ? CompetitionProperties.fromJSON(object.competitionProperties)
        : undefined,
    };
  },

  toJSON(message: UpdateCompetionPropertiesPayload): unknown {
    const obj: any = {};
    message.competitionProperties !== undefined &&
      (obj.competitionProperties = message.competitionProperties
        ? CompetitionProperties.toJSON(message.competitionProperties)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<UpdateCompetionPropertiesPayload>, I>
  >(object: I): UpdateCompetionPropertiesPayload {
    const message = createBaseUpdateCompetionPropertiesPayload();
    message.competitionProperties =
      object.competitionProperties !== undefined &&
      object.competitionProperties !== null
        ? CompetitionProperties.fromPartial(object.competitionProperties)
        : undefined;
    return message;
  },
};

function createBaseUpdateCompetitorPayload(): UpdateCompetitorPayload {
  return { competitor: undefined };
}

export const UpdateCompetitorPayload = {
  encode(
    message: UpdateCompetitorPayload,
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
  ): UpdateCompetitorPayload {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateCompetitorPayload();
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

  fromJSON(object: any): UpdateCompetitorPayload {
    return {
      competitor: isSet(object.competitor)
        ? Competitor.fromJSON(object.competitor)
        : undefined,
    };
  },

  toJSON(message: UpdateCompetitorPayload): unknown {
    const obj: any = {};
    message.competitor !== undefined &&
      (obj.competitor = message.competitor
        ? Competitor.toJSON(message.competitor)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateCompetitorPayload>, I>>(
    object: I
  ): UpdateCompetitorPayload {
    const message = createBaseUpdateCompetitorPayload();
    message.competitor =
      object.competitor !== undefined && object.competitor !== null
        ? Competitor.fromPartial(object.competitor)
        : undefined;
    return message;
  },
};

function createBaseUpdateRegistrationInfoPayload(): UpdateRegistrationInfoPayload {
  return { registrationInfo: undefined };
}

export const UpdateRegistrationInfoPayload = {
  encode(
    message: UpdateRegistrationInfoPayload,
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
  ): UpdateRegistrationInfoPayload {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateRegistrationInfoPayload();
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

  fromJSON(object: any): UpdateRegistrationInfoPayload {
    return {
      registrationInfo: isSet(object.registrationInfo)
        ? RegistrationInfo.fromJSON(object.registrationInfo)
        : undefined,
    };
  },

  toJSON(message: UpdateRegistrationInfoPayload): unknown {
    const obj: any = {};
    message.registrationInfo !== undefined &&
      (obj.registrationInfo = message.registrationInfo
        ? RegistrationInfo.toJSON(message.registrationInfo)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateRegistrationInfoPayload>, I>>(
    object: I
  ): UpdateRegistrationInfoPayload {
    const message = createBaseUpdateRegistrationInfoPayload();
    message.registrationInfo =
      object.registrationInfo !== undefined && object.registrationInfo !== null
        ? RegistrationInfo.fromPartial(object.registrationInfo)
        : undefined;
    return message;
  },
};

function createBaseUpdateStageStatusPayload(): UpdateStageStatusPayload {
  return { stageId: '', status: StageStatus.STAGE_STATUS_UNKNOWN };
}

export const UpdateStageStatusPayload = {
  encode(
    message: UpdateStageStatusPayload,
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
  ): UpdateStageStatusPayload {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateStageStatusPayload();
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

  fromJSON(object: any): UpdateStageStatusPayload {
    return {
      stageId: isSet(object.stageId) ? String(object.stageId) : '',
      status: isSet(object.status)
        ? stageStatusFromJSON(object.status)
        : StageStatus.STAGE_STATUS_UNKNOWN,
    };
  },

  toJSON(message: UpdateStageStatusPayload): unknown {
    const obj: any = {};
    message.stageId !== undefined && (obj.stageId = message.stageId);
    message.status !== undefined &&
      (obj.status = stageStatusToJSON(message.status));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateStageStatusPayload>, I>>(
    object: I
  ): UpdateStageStatusPayload {
    const message = createBaseUpdateStageStatusPayload();
    message.stageId = object.stageId ?? '';
    message.status = object.status ?? StageStatus.STAGE_STATUS_UNKNOWN;
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
