/* eslint-disable */
import * as Long from 'long';
import * as _m0 from 'protobufjs/minimal';
import { MessageInfo } from './common';
import { Timestamp } from './google/protobuf/timestamp';

export enum EventType {
  EVENT_TYPE_UNKNOWN = 0,
  ACADEMY_ADDED = 1,
  ACADEMY_REMOVED = 2,
  ACADEMY_UPDATED = 3,
  BRACKETS_GENERATED = 4,
  CATEGORY_ADDED = 5,
  CATEGORY_BRACKETS_DROPPED = 6,
  CATEGORY_DELETED = 7,
  CATEGORY_REGISTRATION_STATUS_CHANGED = 8,
  COMPETITION_CREATED = 9,
  COMPETITION_DELETED = 10,
  COMPETITION_PROPERTIES_UPDATED = 11,
  COMPETITORS_PROPAGATED_TO_STAGE = 12,
  COMPETITOR_ADDED = 13,
  COMPETITOR_CATEGORY_ADDED = 14,
  COMPETITOR_CATEGORY_CHANGED = 15,
  COMPETITOR_REMOVED = 16,
  COMPETITOR_UPDATED = 17,
  DASHBOARD_FIGHT_COMPETITORS_ASSIGNED = 18,
  DASHBOARD_FIGHT_RESULT_SET = 19,
  DASHBOARD_STAGE_RESULT_SET = 20,
  FIGHTS_ADDED_TO_STAGE = 21,
  FIGHTS_EDITOR_CHANGE_APPLIED = 22,
  FIGHTS_START_TIME_CLEANED = 23,
  FIGHTS_START_TIME_UPDATED = 24,
  FIGHT_ORDER_CHANGED = 25,
  MATS_UPDATED = 26,
  REGISTRATION_GROUP_ADDED = 27,
  REGISTRATION_GROUP_CATEGORIES_ASSIGNED = 28,
  REGISTRATION_GROUP_DELETED = 29,
  REGISTRATION_INFO_UPDATED = 30,
  REGISTRATION_PERIOD_ADDED = 31,
  REGISTRATION_PERIOD_DELETED = 32,
  SCHEDULE_DROPPED = 33,
  SCHEDULE_GENERATED = 34,
  STAGE_STATUS_UPDATED = 35,
  UNRECOGNIZED = -1,
}

export function eventTypeFromJSON(object: any): EventType {
  switch (object) {
    case 0:
    case 'EVENT_TYPE_UNKNOWN':
      return EventType.EVENT_TYPE_UNKNOWN;
    case 1:
    case 'ACADEMY_ADDED':
      return EventType.ACADEMY_ADDED;
    case 2:
    case 'ACADEMY_REMOVED':
      return EventType.ACADEMY_REMOVED;
    case 3:
    case 'ACADEMY_UPDATED':
      return EventType.ACADEMY_UPDATED;
    case 4:
    case 'BRACKETS_GENERATED':
      return EventType.BRACKETS_GENERATED;
    case 5:
    case 'CATEGORY_ADDED':
      return EventType.CATEGORY_ADDED;
    case 6:
    case 'CATEGORY_BRACKETS_DROPPED':
      return EventType.CATEGORY_BRACKETS_DROPPED;
    case 7:
    case 'CATEGORY_DELETED':
      return EventType.CATEGORY_DELETED;
    case 8:
    case 'CATEGORY_REGISTRATION_STATUS_CHANGED':
      return EventType.CATEGORY_REGISTRATION_STATUS_CHANGED;
    case 9:
    case 'COMPETITION_CREATED':
      return EventType.COMPETITION_CREATED;
    case 10:
    case 'COMPETITION_DELETED':
      return EventType.COMPETITION_DELETED;
    case 11:
    case 'COMPETITION_PROPERTIES_UPDATED':
      return EventType.COMPETITION_PROPERTIES_UPDATED;
    case 12:
    case 'COMPETITORS_PROPAGATED_TO_STAGE':
      return EventType.COMPETITORS_PROPAGATED_TO_STAGE;
    case 13:
    case 'COMPETITOR_ADDED':
      return EventType.COMPETITOR_ADDED;
    case 14:
    case 'COMPETITOR_CATEGORY_ADDED':
      return EventType.COMPETITOR_CATEGORY_ADDED;
    case 15:
    case 'COMPETITOR_CATEGORY_CHANGED':
      return EventType.COMPETITOR_CATEGORY_CHANGED;
    case 16:
    case 'COMPETITOR_REMOVED':
      return EventType.COMPETITOR_REMOVED;
    case 17:
    case 'COMPETITOR_UPDATED':
      return EventType.COMPETITOR_UPDATED;
    case 18:
    case 'DASHBOARD_FIGHT_COMPETITORS_ASSIGNED':
      return EventType.DASHBOARD_FIGHT_COMPETITORS_ASSIGNED;
    case 19:
    case 'DASHBOARD_FIGHT_RESULT_SET':
      return EventType.DASHBOARD_FIGHT_RESULT_SET;
    case 20:
    case 'DASHBOARD_STAGE_RESULT_SET':
      return EventType.DASHBOARD_STAGE_RESULT_SET;
    case 21:
    case 'FIGHTS_ADDED_TO_STAGE':
      return EventType.FIGHTS_ADDED_TO_STAGE;
    case 22:
    case 'FIGHTS_EDITOR_CHANGE_APPLIED':
      return EventType.FIGHTS_EDITOR_CHANGE_APPLIED;
    case 23:
    case 'FIGHTS_START_TIME_CLEANED':
      return EventType.FIGHTS_START_TIME_CLEANED;
    case 24:
    case 'FIGHTS_START_TIME_UPDATED':
      return EventType.FIGHTS_START_TIME_UPDATED;
    case 25:
    case 'FIGHT_ORDER_CHANGED':
      return EventType.FIGHT_ORDER_CHANGED;
    case 26:
    case 'MATS_UPDATED':
      return EventType.MATS_UPDATED;
    case 27:
    case 'REGISTRATION_GROUP_ADDED':
      return EventType.REGISTRATION_GROUP_ADDED;
    case 28:
    case 'REGISTRATION_GROUP_CATEGORIES_ASSIGNED':
      return EventType.REGISTRATION_GROUP_CATEGORIES_ASSIGNED;
    case 29:
    case 'REGISTRATION_GROUP_DELETED':
      return EventType.REGISTRATION_GROUP_DELETED;
    case 30:
    case 'REGISTRATION_INFO_UPDATED':
      return EventType.REGISTRATION_INFO_UPDATED;
    case 31:
    case 'REGISTRATION_PERIOD_ADDED':
      return EventType.REGISTRATION_PERIOD_ADDED;
    case 32:
    case 'REGISTRATION_PERIOD_DELETED':
      return EventType.REGISTRATION_PERIOD_DELETED;
    case 33:
    case 'SCHEDULE_DROPPED':
      return EventType.SCHEDULE_DROPPED;
    case 34:
    case 'SCHEDULE_GENERATED':
      return EventType.SCHEDULE_GENERATED;
    case 35:
    case 'STAGE_STATUS_UPDATED':
      return EventType.STAGE_STATUS_UPDATED;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return EventType.UNRECOGNIZED;
  }
}

export function eventTypeToJSON(object: EventType): string {
  switch (object) {
    case EventType.EVENT_TYPE_UNKNOWN:
      return 'EVENT_TYPE_UNKNOWN';
    case EventType.ACADEMY_ADDED:
      return 'ACADEMY_ADDED';
    case EventType.ACADEMY_REMOVED:
      return 'ACADEMY_REMOVED';
    case EventType.ACADEMY_UPDATED:
      return 'ACADEMY_UPDATED';
    case EventType.BRACKETS_GENERATED:
      return 'BRACKETS_GENERATED';
    case EventType.CATEGORY_ADDED:
      return 'CATEGORY_ADDED';
    case EventType.CATEGORY_BRACKETS_DROPPED:
      return 'CATEGORY_BRACKETS_DROPPED';
    case EventType.CATEGORY_DELETED:
      return 'CATEGORY_DELETED';
    case EventType.CATEGORY_REGISTRATION_STATUS_CHANGED:
      return 'CATEGORY_REGISTRATION_STATUS_CHANGED';
    case EventType.COMPETITION_CREATED:
      return 'COMPETITION_CREATED';
    case EventType.COMPETITION_DELETED:
      return 'COMPETITION_DELETED';
    case EventType.COMPETITION_PROPERTIES_UPDATED:
      return 'COMPETITION_PROPERTIES_UPDATED';
    case EventType.COMPETITORS_PROPAGATED_TO_STAGE:
      return 'COMPETITORS_PROPAGATED_TO_STAGE';
    case EventType.COMPETITOR_ADDED:
      return 'COMPETITOR_ADDED';
    case EventType.COMPETITOR_CATEGORY_ADDED:
      return 'COMPETITOR_CATEGORY_ADDED';
    case EventType.COMPETITOR_CATEGORY_CHANGED:
      return 'COMPETITOR_CATEGORY_CHANGED';
    case EventType.COMPETITOR_REMOVED:
      return 'COMPETITOR_REMOVED';
    case EventType.COMPETITOR_UPDATED:
      return 'COMPETITOR_UPDATED';
    case EventType.DASHBOARD_FIGHT_COMPETITORS_ASSIGNED:
      return 'DASHBOARD_FIGHT_COMPETITORS_ASSIGNED';
    case EventType.DASHBOARD_FIGHT_RESULT_SET:
      return 'DASHBOARD_FIGHT_RESULT_SET';
    case EventType.DASHBOARD_STAGE_RESULT_SET:
      return 'DASHBOARD_STAGE_RESULT_SET';
    case EventType.FIGHTS_ADDED_TO_STAGE:
      return 'FIGHTS_ADDED_TO_STAGE';
    case EventType.FIGHTS_EDITOR_CHANGE_APPLIED:
      return 'FIGHTS_EDITOR_CHANGE_APPLIED';
    case EventType.FIGHTS_START_TIME_CLEANED:
      return 'FIGHTS_START_TIME_CLEANED';
    case EventType.FIGHTS_START_TIME_UPDATED:
      return 'FIGHTS_START_TIME_UPDATED';
    case EventType.FIGHT_ORDER_CHANGED:
      return 'FIGHT_ORDER_CHANGED';
    case EventType.MATS_UPDATED:
      return 'MATS_UPDATED';
    case EventType.REGISTRATION_GROUP_ADDED:
      return 'REGISTRATION_GROUP_ADDED';
    case EventType.REGISTRATION_GROUP_CATEGORIES_ASSIGNED:
      return 'REGISTRATION_GROUP_CATEGORIES_ASSIGNED';
    case EventType.REGISTRATION_GROUP_DELETED:
      return 'REGISTRATION_GROUP_DELETED';
    case EventType.REGISTRATION_INFO_UPDATED:
      return 'REGISTRATION_INFO_UPDATED';
    case EventType.REGISTRATION_PERIOD_ADDED:
      return 'REGISTRATION_PERIOD_ADDED';
    case EventType.REGISTRATION_PERIOD_DELETED:
      return 'REGISTRATION_PERIOD_DELETED';
    case EventType.SCHEDULE_DROPPED:
      return 'SCHEDULE_DROPPED';
    case EventType.SCHEDULE_GENERATED:
      return 'SCHEDULE_GENERATED';
    case EventType.STAGE_STATUS_UPDATED:
      return 'STAGE_STATUS_UPDATED';
    case EventType.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface Event {
  timestamp?: Date;
  version: number;
  localEventNumber: number;
  type: EventType;
  messageInfo?: MessageInfo;
}

function createBaseEvent(): Event {
  return {
    timestamp: undefined,
    version: 0,
    localEventNumber: 0,
    type: 0,
    messageInfo: undefined,
  };
}

export const Event = {
  encode(message: Event, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.timestamp !== undefined) {
      Timestamp.encode(
        toTimestamp(message.timestamp),
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.version !== 0) {
      writer.uint32(16).int32(message.version);
    }
    if (message.localEventNumber !== 0) {
      writer.uint32(24).int32(message.localEventNumber);
    }
    if (message.type !== 0) {
      writer.uint32(32).int32(message.type);
    }
    if (message.messageInfo !== undefined) {
      MessageInfo.encode(
        message.messageInfo,
        writer.uint32(42).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Event {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timestamp = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.version = reader.int32();
          break;
        case 3:
          message.localEventNumber = reader.int32();
          break;
        case 4:
          message.type = reader.int32() as any;
          break;
        case 5:
          message.messageInfo = MessageInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Event {
    return {
      timestamp: isSet(object.timestamp)
        ? fromJsonTimestamp(object.timestamp)
        : undefined,
      version: isSet(object.version) ? Number(object.version) : 0,
      localEventNumber: isSet(object.localEventNumber)
        ? Number(object.localEventNumber)
        : 0,
      type: isSet(object.type) ? eventTypeFromJSON(object.type) : 0,
      messageInfo: isSet(object.messageInfo)
        ? MessageInfo.fromJSON(object.messageInfo)
        : undefined,
    };
  },

  toJSON(message: Event): unknown {
    const obj: any = {};
    message.timestamp !== undefined &&
      (obj.timestamp = message.timestamp.toISOString());
    message.version !== undefined &&
      (obj.version = Math.round(message.version));
    message.localEventNumber !== undefined &&
      (obj.localEventNumber = Math.round(message.localEventNumber));
    message.type !== undefined && (obj.type = eventTypeToJSON(message.type));
    message.messageInfo !== undefined &&
      (obj.messageInfo = message.messageInfo
        ? MessageInfo.toJSON(message.messageInfo)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Event>, I>>(object: I): Event {
    const message = createBaseEvent();
    message.timestamp = object.timestamp ?? undefined;
    message.version = object.version ?? 0;
    message.localEventNumber = object.localEventNumber ?? 0;
    message.type = object.type ?? 0;
    message.messageInfo =
      object.messageInfo !== undefined && object.messageInfo !== null
        ? MessageInfo.fromPartial(object.messageInfo)
        : undefined;
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
