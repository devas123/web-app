/* eslint-disable */
import * as Long from 'long';
import * as _m0 from 'protobufjs/minimal';
import { MessageInfo } from './common';

export enum CommandType {
  COMMAND_TYPE_UNKNOWN = 0,
  ADD_ACADEMY_COMMAND = 1,
  ADD_CATEGORY_COMMAND = 2,
  ADD_COMPETITOR_COMMAND = 3,
  ADD_REGISTRATION_GROUP_COMMAND = 4,
  ADD_REGISTRATION_GROUP_TO_REGISTRATION_PERIOD_COMMAND = 5,
  ADD_REGISTRATION_PERIOD_COMMAND = 6,
  ASSIGN_REGISTRATION_GROUP_CATEGORIES_COMMAND = 7,
  CHANGE_CATEGORY_REGISTRATION_STATUS_COMMAND = 8,
  CHANGE_COMPETITOR_CATEGORY_COMMAND = 9,
  CREATE_COMPETITION_COMMAND = 10,
  CREATE_FAKE_COMPETITORS_COMMAND = 11,
  DASHBOARD_FIGHT_ORDER_CHANGE_COMMAND = 12,
  DASHBOARD_SET_FIGHT_RESULT_COMMAND = 13,
  DELETE_CATEGORY_COMMAND = 14,
  DELETE_COMPETITION_COMMAND = 15,
  DELETE_REGISTRATION_GROUP_COMMAND = 16,
  DELETE_REGISTRATION_PERIOD_COMMAND = 17,
  DROP_ALL_BRACKETS_COMMAND = 18,
  DROP_CATEGORY_BRACKETS_COMMAND = 19,
  DROP_SCHEDULE_COMMAND = 20,
  FIGHTS_EDITOR_APPLY_CHANGE = 21,
  GENERATE_BRACKETS_COMMAND = 22,
  GENERATE_CATEGORIES_COMMAND = 23,
  GENERATE_SCHEDULE_COMMAND = 24,
  PROPAGATE_COMPETITORS_COMMAND = 25,
  PUBLISH_COMPETITION_COMMAND = 26,
  REMOVE_ACADEMY_COMMAND = 27,
  REMOVE_COMPETITOR_COMMAND = 28,
  SAVE_ABSOLUTE_CATEGORY_COMMAND = 29,
  START_COMPETITION_COMMAND = 30,
  STOP_COMPETITION_COMMAND = 31,
  UNPUBLISH_COMPETITION_COMMAND = 32,
  UPDATE_ACADEMY_COMMAND = 33,
  UPDATE_COMPETITION_PROPERTIES_COMMAND = 34,
  UPDATE_COMPETITOR_COMMAND = 35,
  UPDATE_REGISTRATION_INFO_COMMAND = 36,
  UPDATE_STAGE_STATUS_COMMAND = 37,
  UNRECOGNIZED = -1,
}

export function commandTypeFromJSON(object: any): CommandType {
  switch (object) {
    case 0:
    case 'COMMAND_TYPE_UNKNOWN':
      return CommandType.COMMAND_TYPE_UNKNOWN;
    case 1:
    case 'ADD_ACADEMY_COMMAND':
      return CommandType.ADD_ACADEMY_COMMAND;
    case 2:
    case 'ADD_CATEGORY_COMMAND':
      return CommandType.ADD_CATEGORY_COMMAND;
    case 3:
    case 'ADD_COMPETITOR_COMMAND':
      return CommandType.ADD_COMPETITOR_COMMAND;
    case 4:
    case 'ADD_REGISTRATION_GROUP_COMMAND':
      return CommandType.ADD_REGISTRATION_GROUP_COMMAND;
    case 5:
    case 'ADD_REGISTRATION_GROUP_TO_REGISTRATION_PERIOD_COMMAND':
      return CommandType.ADD_REGISTRATION_GROUP_TO_REGISTRATION_PERIOD_COMMAND;
    case 6:
    case 'ADD_REGISTRATION_PERIOD_COMMAND':
      return CommandType.ADD_REGISTRATION_PERIOD_COMMAND;
    case 7:
    case 'ASSIGN_REGISTRATION_GROUP_CATEGORIES_COMMAND':
      return CommandType.ASSIGN_REGISTRATION_GROUP_CATEGORIES_COMMAND;
    case 8:
    case 'CHANGE_CATEGORY_REGISTRATION_STATUS_COMMAND':
      return CommandType.CHANGE_CATEGORY_REGISTRATION_STATUS_COMMAND;
    case 9:
    case 'CHANGE_COMPETITOR_CATEGORY_COMMAND':
      return CommandType.CHANGE_COMPETITOR_CATEGORY_COMMAND;
    case 10:
    case 'CREATE_COMPETITION_COMMAND':
      return CommandType.CREATE_COMPETITION_COMMAND;
    case 11:
    case 'CREATE_FAKE_COMPETITORS_COMMAND':
      return CommandType.CREATE_FAKE_COMPETITORS_COMMAND;
    case 12:
    case 'DASHBOARD_FIGHT_ORDER_CHANGE_COMMAND':
      return CommandType.DASHBOARD_FIGHT_ORDER_CHANGE_COMMAND;
    case 13:
    case 'DASHBOARD_SET_FIGHT_RESULT_COMMAND':
      return CommandType.DASHBOARD_SET_FIGHT_RESULT_COMMAND;
    case 14:
    case 'DELETE_CATEGORY_COMMAND':
      return CommandType.DELETE_CATEGORY_COMMAND;
    case 15:
    case 'DELETE_COMPETITION_COMMAND':
      return CommandType.DELETE_COMPETITION_COMMAND;
    case 16:
    case 'DELETE_REGISTRATION_GROUP_COMMAND':
      return CommandType.DELETE_REGISTRATION_GROUP_COMMAND;
    case 17:
    case 'DELETE_REGISTRATION_PERIOD_COMMAND':
      return CommandType.DELETE_REGISTRATION_PERIOD_COMMAND;
    case 18:
    case 'DROP_ALL_BRACKETS_COMMAND':
      return CommandType.DROP_ALL_BRACKETS_COMMAND;
    case 19:
    case 'DROP_CATEGORY_BRACKETS_COMMAND':
      return CommandType.DROP_CATEGORY_BRACKETS_COMMAND;
    case 20:
    case 'DROP_SCHEDULE_COMMAND':
      return CommandType.DROP_SCHEDULE_COMMAND;
    case 21:
    case 'FIGHTS_EDITOR_APPLY_CHANGE':
      return CommandType.FIGHTS_EDITOR_APPLY_CHANGE;
    case 22:
    case 'GENERATE_BRACKETS_COMMAND':
      return CommandType.GENERATE_BRACKETS_COMMAND;
    case 23:
    case 'GENERATE_CATEGORIES_COMMAND':
      return CommandType.GENERATE_CATEGORIES_COMMAND;
    case 24:
    case 'GENERATE_SCHEDULE_COMMAND':
      return CommandType.GENERATE_SCHEDULE_COMMAND;
    case 25:
    case 'PROPAGATE_COMPETITORS_COMMAND':
      return CommandType.PROPAGATE_COMPETITORS_COMMAND;
    case 26:
    case 'PUBLISH_COMPETITION_COMMAND':
      return CommandType.PUBLISH_COMPETITION_COMMAND;
    case 27:
    case 'REMOVE_ACADEMY_COMMAND':
      return CommandType.REMOVE_ACADEMY_COMMAND;
    case 28:
    case 'REMOVE_COMPETITOR_COMMAND':
      return CommandType.REMOVE_COMPETITOR_COMMAND;
    case 29:
    case 'SAVE_ABSOLUTE_CATEGORY_COMMAND':
      return CommandType.SAVE_ABSOLUTE_CATEGORY_COMMAND;
    case 30:
    case 'START_COMPETITION_COMMAND':
      return CommandType.START_COMPETITION_COMMAND;
    case 31:
    case 'STOP_COMPETITION_COMMAND':
      return CommandType.STOP_COMPETITION_COMMAND;
    case 32:
    case 'UNPUBLISH_COMPETITION_COMMAND':
      return CommandType.UNPUBLISH_COMPETITION_COMMAND;
    case 33:
    case 'UPDATE_ACADEMY_COMMAND':
      return CommandType.UPDATE_ACADEMY_COMMAND;
    case 34:
    case 'UPDATE_COMPETITION_PROPERTIES_COMMAND':
      return CommandType.UPDATE_COMPETITION_PROPERTIES_COMMAND;
    case 35:
    case 'UPDATE_COMPETITOR_COMMAND':
      return CommandType.UPDATE_COMPETITOR_COMMAND;
    case 36:
    case 'UPDATE_REGISTRATION_INFO_COMMAND':
      return CommandType.UPDATE_REGISTRATION_INFO_COMMAND;
    case 37:
    case 'UPDATE_STAGE_STATUS_COMMAND':
      return CommandType.UPDATE_STAGE_STATUS_COMMAND;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return CommandType.UNRECOGNIZED;
  }
}

export function commandTypeToJSON(object: CommandType): string {
  switch (object) {
    case CommandType.COMMAND_TYPE_UNKNOWN:
      return 'COMMAND_TYPE_UNKNOWN';
    case CommandType.ADD_ACADEMY_COMMAND:
      return 'ADD_ACADEMY_COMMAND';
    case CommandType.ADD_CATEGORY_COMMAND:
      return 'ADD_CATEGORY_COMMAND';
    case CommandType.ADD_COMPETITOR_COMMAND:
      return 'ADD_COMPETITOR_COMMAND';
    case CommandType.ADD_REGISTRATION_GROUP_COMMAND:
      return 'ADD_REGISTRATION_GROUP_COMMAND';
    case CommandType.ADD_REGISTRATION_GROUP_TO_REGISTRATION_PERIOD_COMMAND:
      return 'ADD_REGISTRATION_GROUP_TO_REGISTRATION_PERIOD_COMMAND';
    case CommandType.ADD_REGISTRATION_PERIOD_COMMAND:
      return 'ADD_REGISTRATION_PERIOD_COMMAND';
    case CommandType.ASSIGN_REGISTRATION_GROUP_CATEGORIES_COMMAND:
      return 'ASSIGN_REGISTRATION_GROUP_CATEGORIES_COMMAND';
    case CommandType.CHANGE_CATEGORY_REGISTRATION_STATUS_COMMAND:
      return 'CHANGE_CATEGORY_REGISTRATION_STATUS_COMMAND';
    case CommandType.CHANGE_COMPETITOR_CATEGORY_COMMAND:
      return 'CHANGE_COMPETITOR_CATEGORY_COMMAND';
    case CommandType.CREATE_COMPETITION_COMMAND:
      return 'CREATE_COMPETITION_COMMAND';
    case CommandType.CREATE_FAKE_COMPETITORS_COMMAND:
      return 'CREATE_FAKE_COMPETITORS_COMMAND';
    case CommandType.DASHBOARD_FIGHT_ORDER_CHANGE_COMMAND:
      return 'DASHBOARD_FIGHT_ORDER_CHANGE_COMMAND';
    case CommandType.DASHBOARD_SET_FIGHT_RESULT_COMMAND:
      return 'DASHBOARD_SET_FIGHT_RESULT_COMMAND';
    case CommandType.DELETE_CATEGORY_COMMAND:
      return 'DELETE_CATEGORY_COMMAND';
    case CommandType.DELETE_COMPETITION_COMMAND:
      return 'DELETE_COMPETITION_COMMAND';
    case CommandType.DELETE_REGISTRATION_GROUP_COMMAND:
      return 'DELETE_REGISTRATION_GROUP_COMMAND';
    case CommandType.DELETE_REGISTRATION_PERIOD_COMMAND:
      return 'DELETE_REGISTRATION_PERIOD_COMMAND';
    case CommandType.DROP_ALL_BRACKETS_COMMAND:
      return 'DROP_ALL_BRACKETS_COMMAND';
    case CommandType.DROP_CATEGORY_BRACKETS_COMMAND:
      return 'DROP_CATEGORY_BRACKETS_COMMAND';
    case CommandType.DROP_SCHEDULE_COMMAND:
      return 'DROP_SCHEDULE_COMMAND';
    case CommandType.FIGHTS_EDITOR_APPLY_CHANGE:
      return 'FIGHTS_EDITOR_APPLY_CHANGE';
    case CommandType.GENERATE_BRACKETS_COMMAND:
      return 'GENERATE_BRACKETS_COMMAND';
    case CommandType.GENERATE_CATEGORIES_COMMAND:
      return 'GENERATE_CATEGORIES_COMMAND';
    case CommandType.GENERATE_SCHEDULE_COMMAND:
      return 'GENERATE_SCHEDULE_COMMAND';
    case CommandType.PROPAGATE_COMPETITORS_COMMAND:
      return 'PROPAGATE_COMPETITORS_COMMAND';
    case CommandType.PUBLISH_COMPETITION_COMMAND:
      return 'PUBLISH_COMPETITION_COMMAND';
    case CommandType.REMOVE_ACADEMY_COMMAND:
      return 'REMOVE_ACADEMY_COMMAND';
    case CommandType.REMOVE_COMPETITOR_COMMAND:
      return 'REMOVE_COMPETITOR_COMMAND';
    case CommandType.SAVE_ABSOLUTE_CATEGORY_COMMAND:
      return 'SAVE_ABSOLUTE_CATEGORY_COMMAND';
    case CommandType.START_COMPETITION_COMMAND:
      return 'START_COMPETITION_COMMAND';
    case CommandType.STOP_COMPETITION_COMMAND:
      return 'STOP_COMPETITION_COMMAND';
    case CommandType.UNPUBLISH_COMPETITION_COMMAND:
      return 'UNPUBLISH_COMPETITION_COMMAND';
    case CommandType.UPDATE_ACADEMY_COMMAND:
      return 'UPDATE_ACADEMY_COMMAND';
    case CommandType.UPDATE_COMPETITION_PROPERTIES_COMMAND:
      return 'UPDATE_COMPETITION_PROPERTIES_COMMAND';
    case CommandType.UPDATE_COMPETITOR_COMMAND:
      return 'UPDATE_COMPETITOR_COMMAND';
    case CommandType.UPDATE_REGISTRATION_INFO_COMMAND:
      return 'UPDATE_REGISTRATION_INFO_COMMAND';
    case CommandType.UPDATE_STAGE_STATUS_COMMAND:
      return 'UPDATE_STAGE_STATUS_COMMAND';
    case CommandType.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface Command {
  type: CommandType;
  messageInfo?: MessageInfo;
}

function createBaseCommand(): Command {
  return { type: 0, messageInfo: undefined };
}

export const Command = {
  encode(
    message: Command,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Command {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommand();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
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

  fromJSON(object: any): Command {
    return {
      type: isSet(object.type) ? commandTypeFromJSON(object.type) : 0,
      messageInfo: isSet(object.messageInfo)
        ? MessageInfo.fromJSON(object.messageInfo)
        : undefined,
    };
  },

  toJSON(message: Command): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = commandTypeToJSON(message.type));
    message.messageInfo !== undefined &&
      (obj.messageInfo = message.messageInfo
        ? MessageInfo.toJSON(message.messageInfo)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Command>, I>>(object: I): Command {
    const message = createBaseCommand();
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

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
