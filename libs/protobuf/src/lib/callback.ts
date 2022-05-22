/* eslint-disable */
import * as Long from 'long';
import * as _m0 from 'protobufjs/minimal';
import { Any } from './google/protobuf/any';
import { Event } from './event';
import { Command } from './command';

export const CommandExecutionResult = {
  COMMAND_EXECUTION_RESULT_SUCCESS: 'COMMAND_EXECUTION_RESULT_SUCCESS',
  COMMAND_EXECUTION_RESULT_FAIL: 'COMMAND_EXECUTION_RESULT_FAIL',
  COMMAND_EXECUTION_RESULT_TIMEOUT: 'COMMAND_EXECUTION_RESULT_TIMEOUT',
} as const;

export type CommandExecutionResult =
  typeof CommandExecutionResult[keyof typeof CommandExecutionResult];

export function commandExecutionResultFromJSON(
  object: any
): CommandExecutionResult {
  switch (object) {
    case 0:
    case 'COMMAND_EXECUTION_RESULT_SUCCESS':
      return CommandExecutionResult.COMMAND_EXECUTION_RESULT_SUCCESS;
    case 1:
    case 'COMMAND_EXECUTION_RESULT_FAIL':
      return CommandExecutionResult.COMMAND_EXECUTION_RESULT_FAIL;
    case 2:
    case 'COMMAND_EXECUTION_RESULT_TIMEOUT':
      return CommandExecutionResult.COMMAND_EXECUTION_RESULT_TIMEOUT;
    default:
      throw new globalThis.Error(
        'Unrecognized enum value ' + object + ' for enum CommandExecutionResult'
      );
  }
}

export function commandExecutionResultToJSON(
  object: CommandExecutionResult
): string {
  switch (object) {
    case CommandExecutionResult.COMMAND_EXECUTION_RESULT_SUCCESS:
      return 'COMMAND_EXECUTION_RESULT_SUCCESS';
    case CommandExecutionResult.COMMAND_EXECUTION_RESULT_FAIL:
      return 'COMMAND_EXECUTION_RESULT_FAIL';
    case CommandExecutionResult.COMMAND_EXECUTION_RESULT_TIMEOUT:
      return 'COMMAND_EXECUTION_RESULT_TIMEOUT';
    default:
      throw new globalThis.Error(
        'Unrecognized enum value ' + object + ' for enum CommandExecutionResult'
      );
  }
}

export function commandExecutionResultToNumber(
  object: CommandExecutionResult
): number {
  switch (object) {
    case CommandExecutionResult.COMMAND_EXECUTION_RESULT_SUCCESS:
      return 0;
    case CommandExecutionResult.COMMAND_EXECUTION_RESULT_FAIL:
      return 1;
    case CommandExecutionResult.COMMAND_EXECUTION_RESULT_TIMEOUT:
      return 2;
    default:
      throw new globalThis.Error(
        'Unrecognized enum value ' + object + ' for enum CommandExecutionResult'
      );
  }
}

export interface CommandCallback {
  id: string;
  correlationId: string;
  result: CommandExecutionResult;
  errorInfo?: ErrorCallback;
  events: Event[];
  command?: Command | undefined;
}

export interface ErrorCallback {
  message: string;
  payload?: Any;
}

function createBaseCommandCallback(): CommandCallback {
  return {
    id: '',
    correlationId: '',
    result: CommandExecutionResult.COMMAND_EXECUTION_RESULT_SUCCESS,
    errorInfo: undefined,
    events: [],
    command: undefined,
  };
}

export const CommandCallback = {
  encode(
    message: CommandCallback,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.correlationId !== '') {
      writer.uint32(18).string(message.correlationId);
    }
    if (
      message.result !== CommandExecutionResult.COMMAND_EXECUTION_RESULT_SUCCESS
    ) {
      writer.uint32(24).int32(commandExecutionResultToNumber(message.result));
    }
    if (message.errorInfo !== undefined) {
      ErrorCallback.encode(
        message.errorInfo,
        writer.uint32(34).fork()
      ).ldelim();
    }
    for (const v of message.events) {
      Event.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.command !== undefined) {
      Command.encode(message.command, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CommandCallback {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommandCallback();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.correlationId = reader.string();
          break;
        case 3:
          message.result = commandExecutionResultFromJSON(reader.int32());
          break;
        case 4:
          message.errorInfo = ErrorCallback.decode(reader, reader.uint32());
          break;
        case 5:
          message.events.push(Event.decode(reader, reader.uint32()));
          break;
        case 6:
          message.command = Command.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CommandCallback {
    return {
      id: isSet(object.id) ? String(object.id) : '',
      correlationId: isSet(object.correlationId)
        ? String(object.correlationId)
        : '',
      result: isSet(object.result)
        ? commandExecutionResultFromJSON(object.result)
        : CommandExecutionResult.COMMAND_EXECUTION_RESULT_SUCCESS,
      errorInfo: isSet(object.errorInfo)
        ? ErrorCallback.fromJSON(object.errorInfo)
        : undefined,
      events: Array.isArray(object?.events)
        ? object.events.map((e: any) => Event.fromJSON(e))
        : [],
      command: isSet(object.command)
        ? Command.fromJSON(object.command)
        : undefined,
    };
  },

  toJSON(message: CommandCallback): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.correlationId !== undefined &&
      (obj.correlationId = message.correlationId);
    message.result !== undefined &&
      (obj.result = commandExecutionResultToJSON(message.result));
    message.errorInfo !== undefined &&
      (obj.errorInfo = message.errorInfo
        ? ErrorCallback.toJSON(message.errorInfo)
        : undefined);
    if (message.events) {
      obj.events = message.events.map((e) => (e ? Event.toJSON(e) : undefined));
    } else {
      obj.events = [];
    }
    message.command !== undefined &&
      (obj.command = message.command
        ? Command.toJSON(message.command)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CommandCallback>, I>>(
    object: I
  ): CommandCallback {
    const message = createBaseCommandCallback();
    message.id = object.id ?? '';
    message.correlationId = object.correlationId ?? '';
    message.result =
      object.result ?? CommandExecutionResult.COMMAND_EXECUTION_RESULT_SUCCESS;
    message.errorInfo =
      object.errorInfo !== undefined && object.errorInfo !== null
        ? ErrorCallback.fromPartial(object.errorInfo)
        : undefined;
    message.events = object.events?.map((e) => Event.fromPartial(e)) || [];
    message.command =
      object.command !== undefined && object.command !== null
        ? Command.fromPartial(object.command)
        : undefined;
    return message;
  },
};

function createBaseErrorCallback(): ErrorCallback {
  return { message: '', payload: undefined };
}

export const ErrorCallback = {
  encode(
    message: ErrorCallback,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.message !== '') {
      writer.uint32(10).string(message.message);
    }
    if (message.payload !== undefined) {
      Any.encode(message.payload, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ErrorCallback {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseErrorCallback();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.message = reader.string();
          break;
        case 2:
          message.payload = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ErrorCallback {
    return {
      message: isSet(object.message) ? String(object.message) : '',
      payload: isSet(object.payload) ? Any.fromJSON(object.payload) : undefined,
    };
  },

  toJSON(message: ErrorCallback): unknown {
    const obj: any = {};
    message.message !== undefined && (obj.message = message.message);
    message.payload !== undefined &&
      (obj.payload = message.payload ? Any.toJSON(message.payload) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ErrorCallback>, I>>(
    object: I
  ): ErrorCallback {
    const message = createBaseErrorCallback();
    message.message = object.message ?? '';
    message.payload =
      object.payload !== undefined && object.payload !== null
        ? Any.fromPartial(object.payload)
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
