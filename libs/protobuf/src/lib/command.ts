/* eslint-disable */
import * as Long from 'long';
import * as _m0 from 'protobufjs/minimal';
import {MessageInfo} from './common';

export const CommandType = {
  COMMAND_TYPE_UNKNOWN: 'COMMAND_TYPE_UNKNOWN',
  ADD_ACADEMY_COMMAND: 'ADD_ACADEMY_COMMAND',
  ADD_CATEGORY_COMMAND: 'ADD_CATEGORY_COMMAND',
  ADD_COMPETITOR_COMMAND: 'ADD_COMPETITOR_COMMAND',
  ADD_REGISTRATION_GROUP_COMMAND: 'ADD_REGISTRATION_GROUP_COMMAND',
  ADD_REGISTRATION_GROUP_TO_REGISTRATION_PERIOD_COMMAND:
    'ADD_REGISTRATION_GROUP_TO_REGISTRATION_PERIOD_COMMAND',
  ADD_REGISTRATION_PERIOD_COMMAND: 'ADD_REGISTRATION_PERIOD_COMMAND',
  ASSIGN_REGISTRATION_GROUP_CATEGORIES_COMMAND:
    'ASSIGN_REGISTRATION_GROUP_CATEGORIES_COMMAND',
  CHANGE_CATEGORY_REGISTRATION_STATUS_COMMAND:
    'CHANGE_CATEGORY_REGISTRATION_STATUS_COMMAND',
  CHANGE_COMPETITOR_CATEGORY_COMMAND: 'CHANGE_COMPETITOR_CATEGORY_COMMAND',
  CREATE_COMPETITION_COMMAND: 'CREATE_COMPETITION_COMMAND',
  CREATE_FAKE_COMPETITORS_COMMAND: 'CREATE_FAKE_COMPETITORS_COMMAND',
  DASHBOARD_FIGHT_ORDER_CHANGE_COMMAND: 'DASHBOARD_FIGHT_ORDER_CHANGE_COMMAND',
  DASHBOARD_SET_FIGHT_RESULT_COMMAND: 'DASHBOARD_SET_FIGHT_RESULT_COMMAND',
  DELETE_CATEGORY_COMMAND: 'DELETE_CATEGORY_COMMAND',
  DELETE_COMPETITION_COMMAND: 'DELETE_COMPETITION_COMMAND',
  DELETE_REGISTRATION_GROUP_COMMAND: 'DELETE_REGISTRATION_GROUP_COMMAND',
  DELETE_REGISTRATION_PERIOD_COMMAND: 'DELETE_REGISTRATION_PERIOD_COMMAND',
  DROP_ALL_BRACKETS_COMMAND: 'DROP_ALL_BRACKETS_COMMAND',
  DROP_CATEGORY_BRACKETS_COMMAND: 'DROP_CATEGORY_BRACKETS_COMMAND',
  DROP_SCHEDULE_COMMAND: 'DROP_SCHEDULE_COMMAND',
  FIGHTS_EDITOR_APPLY_CHANGE: 'FIGHTS_EDITOR_APPLY_CHANGE',
  GENERATE_BRACKETS_COMMAND: 'GENERATE_BRACKETS_COMMAND',
  GENERATE_CATEGORIES_COMMAND: 'GENERATE_CATEGORIES_COMMAND',
  GENERATE_SCHEDULE_COMMAND: 'GENERATE_SCHEDULE_COMMAND',
  PROPAGATE_COMPETITORS_COMMAND: 'PROPAGATE_COMPETITORS_COMMAND',
  PUBLISH_COMPETITION_COMMAND: 'PUBLISH_COMPETITION_COMMAND',
  REMOVE_ACADEMY_COMMAND: 'REMOVE_ACADEMY_COMMAND',
  REMOVE_COMPETITOR_COMMAND: 'REMOVE_COMPETITOR_COMMAND',
  SAVE_ABSOLUTE_CATEGORY_COMMAND: 'SAVE_ABSOLUTE_CATEGORY_COMMAND',
  START_COMPETITION_COMMAND: 'START_COMPETITION_COMMAND',
  STOP_COMPETITION_COMMAND: 'STOP_COMPETITION_COMMAND',
  UNPUBLISH_COMPETITION_COMMAND: 'UNPUBLISH_COMPETITION_COMMAND',
  UPDATE_ACADEMY_COMMAND: 'UPDATE_ACADEMY_COMMAND',
  UPDATE_COMPETITION_PROPERTIES_COMMAND:
    'UPDATE_COMPETITION_PROPERTIES_COMMAND',
  UPDATE_COMPETITOR_COMMAND: 'UPDATE_COMPETITOR_COMMAND',
  UPDATE_REGISTRATION_INFO_COMMAND: 'UPDATE_REGISTRATION_INFO_COMMAND',
  UPDATE_STAGE_STATUS_COMMAND: 'UPDATE_STAGE_STATUS_COMMAND',
} as const;

export type CommandType = typeof CommandType[keyof typeof CommandType];

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
    default:
      throw new globalThis.Error(
        'Unrecognized enum value ' + object + ' for enum CommandType'
      );
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
    default:
      throw new globalThis.Error(
        'Unrecognized enum value ' + object + ' for enum CommandType'
      );
  }
}

export function commandTypeToNumber(object: CommandType): number {
  switch (object) {
    case CommandType.COMMAND_TYPE_UNKNOWN:
      return 0;
    case CommandType.ADD_ACADEMY_COMMAND:
      return 1;
    case CommandType.ADD_CATEGORY_COMMAND:
      return 2;
    case CommandType.ADD_COMPETITOR_COMMAND:
      return 3;
    case CommandType.ADD_REGISTRATION_GROUP_COMMAND:
      return 4;
    case CommandType.ADD_REGISTRATION_GROUP_TO_REGISTRATION_PERIOD_COMMAND:
      return 5;
    case CommandType.ADD_REGISTRATION_PERIOD_COMMAND:
      return 6;
    case CommandType.ASSIGN_REGISTRATION_GROUP_CATEGORIES_COMMAND:
      return 7;
    case CommandType.CHANGE_CATEGORY_REGISTRATION_STATUS_COMMAND:
      return 8;
    case CommandType.CHANGE_COMPETITOR_CATEGORY_COMMAND:
      return 9;
    case CommandType.CREATE_COMPETITION_COMMAND:
      return 10;
    case CommandType.CREATE_FAKE_COMPETITORS_COMMAND:
      return 11;
    case CommandType.DASHBOARD_FIGHT_ORDER_CHANGE_COMMAND:
      return 12;
    case CommandType.DASHBOARD_SET_FIGHT_RESULT_COMMAND:
      return 13;
    case CommandType.DELETE_CATEGORY_COMMAND:
      return 14;
    case CommandType.DELETE_COMPETITION_COMMAND:
      return 15;
    case CommandType.DELETE_REGISTRATION_GROUP_COMMAND:
      return 16;
    case CommandType.DELETE_REGISTRATION_PERIOD_COMMAND:
      return 17;
    case CommandType.DROP_ALL_BRACKETS_COMMAND:
      return 18;
    case CommandType.DROP_CATEGORY_BRACKETS_COMMAND:
      return 19;
    case CommandType.DROP_SCHEDULE_COMMAND:
      return 20;
    case CommandType.FIGHTS_EDITOR_APPLY_CHANGE:
      return 21;
    case CommandType.GENERATE_BRACKETS_COMMAND:
      return 22;
    case CommandType.GENERATE_CATEGORIES_COMMAND:
      return 23;
    case CommandType.GENERATE_SCHEDULE_COMMAND:
      return 24;
    case CommandType.PROPAGATE_COMPETITORS_COMMAND:
      return 25;
    case CommandType.PUBLISH_COMPETITION_COMMAND:
      return 26;
    case CommandType.REMOVE_ACADEMY_COMMAND:
      return 27;
    case CommandType.REMOVE_COMPETITOR_COMMAND:
      return 28;
    case CommandType.SAVE_ABSOLUTE_CATEGORY_COMMAND:
      return 29;
    case CommandType.START_COMPETITION_COMMAND:
      return 30;
    case CommandType.STOP_COMPETITION_COMMAND:
      return 31;
    case CommandType.UNPUBLISH_COMPETITION_COMMAND:
      return 32;
    case CommandType.UPDATE_ACADEMY_COMMAND:
      return 33;
    case CommandType.UPDATE_COMPETITION_PROPERTIES_COMMAND:
      return 34;
    case CommandType.UPDATE_COMPETITOR_COMMAND:
      return 35;
    case CommandType.UPDATE_REGISTRATION_INFO_COMMAND:
      return 36;
    case CommandType.UPDATE_STAGE_STATUS_COMMAND:
      return 37;
    default:
      throw new globalThis.Error(
        'Unrecognized enum value ' + object + ' for enum CommandType'
      );
  }
}

export interface Command {
  type: CommandType;
  messageInfo?: MessageInfo;
}

function createBaseCommand(): Command {
  return {type: CommandType.COMMAND_TYPE_UNKNOWN, messageInfo: undefined};
}

export const Command = {
  encode(
    message: Command,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.type !== CommandType.COMMAND_TYPE_UNKNOWN) {
      writer.uint32(32).int32(commandTypeToNumber(message.type));
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
          message.type = commandTypeFromJSON(reader.int32());
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
      type: isSet(object.type)
        ? commandTypeFromJSON(object.type)
        : CommandType.COMMAND_TYPE_UNKNOWN,
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
    message.type = object.type ?? CommandType.COMMAND_TYPE_UNKNOWN;
    message.messageInfo =
      object.messageInfo !== undefined && object.messageInfo !== null
        ? MessageInfo.fromPartial(object.messageInfo)
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
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<Exclude<keyof I, KeysOfUnion<P>>,
  never>;

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
