/* eslint-disable */
import * as Long from 'long';
import * as _m0 from 'protobufjs/minimal';
import { Timestamp } from './google/protobuf/timestamp';
import { ErrorResponse } from './model';

export interface AccountServiceRequest {
  addAccount?: AddAccountRequestPayload | undefined;
  updateAccount?: UpdateAccountRequestPayload | undefined;
  updateProfilePictureRequestPayload?:
    | UpdateProfilePictureRequestPayload
    | undefined;
}

export interface AccountServiceResponse {
  getAccountResponsePayload?: GetAccountResponsePayload | undefined;
  errorResponse?: ErrorResponse | undefined;
}

export interface Account {
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
  birthDate?: Date;
}

export interface AddAccountRequestPayload {
  firstName: string;
  lastName: string;
  email: string;
  birthDate?: Date;
}

export interface UpdateProfilePictureRequestPayload {
  picture: Uint8Array;
  userId: string;
}

export interface GetAccountResponsePayload {
  account?: Account;
}

export interface UpdateAccountRequestPayload {
  account?: Account;
}

function createBaseAccountServiceRequest(): AccountServiceRequest {
  return {
    addAccount: undefined,
    updateAccount: undefined,
    updateProfilePictureRequestPayload: undefined,
  };
}

export const AccountServiceRequest = {
  encode(
    message: AccountServiceRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.addAccount !== undefined) {
      AddAccountRequestPayload.encode(
        message.addAccount,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.updateAccount !== undefined) {
      UpdateAccountRequestPayload.encode(
        message.updateAccount,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.updateProfilePictureRequestPayload !== undefined) {
      UpdateProfilePictureRequestPayload.encode(
        message.updateProfilePictureRequestPayload,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AccountServiceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountServiceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addAccount = AddAccountRequestPayload.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.updateAccount = UpdateAccountRequestPayload.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.updateProfilePictureRequestPayload =
            UpdateProfilePictureRequestPayload.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AccountServiceRequest {
    return {
      addAccount: isSet(object.addAccount)
        ? AddAccountRequestPayload.fromJSON(object.addAccount)
        : undefined,
      updateAccount: isSet(object.updateAccount)
        ? UpdateAccountRequestPayload.fromJSON(object.updateAccount)
        : undefined,
      updateProfilePictureRequestPayload: isSet(
        object.updateProfilePictureRequestPayload
      )
        ? UpdateProfilePictureRequestPayload.fromJSON(
            object.updateProfilePictureRequestPayload
          )
        : undefined,
    };
  },

  toJSON(message: AccountServiceRequest): unknown {
    const obj: any = {};
    message.addAccount !== undefined &&
      (obj.addAccount = message.addAccount
        ? AddAccountRequestPayload.toJSON(message.addAccount)
        : undefined);
    message.updateAccount !== undefined &&
      (obj.updateAccount = message.updateAccount
        ? UpdateAccountRequestPayload.toJSON(message.updateAccount)
        : undefined);
    message.updateProfilePictureRequestPayload !== undefined &&
      (obj.updateProfilePictureRequestPayload =
        message.updateProfilePictureRequestPayload
          ? UpdateProfilePictureRequestPayload.toJSON(
              message.updateProfilePictureRequestPayload
            )
          : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AccountServiceRequest>, I>>(
    object: I
  ): AccountServiceRequest {
    const message = createBaseAccountServiceRequest();
    message.addAccount =
      object.addAccount !== undefined && object.addAccount !== null
        ? AddAccountRequestPayload.fromPartial(object.addAccount)
        : undefined;
    message.updateAccount =
      object.updateAccount !== undefined && object.updateAccount !== null
        ? UpdateAccountRequestPayload.fromPartial(object.updateAccount)
        : undefined;
    message.updateProfilePictureRequestPayload =
      object.updateProfilePictureRequestPayload !== undefined &&
      object.updateProfilePictureRequestPayload !== null
        ? UpdateProfilePictureRequestPayload.fromPartial(
            object.updateProfilePictureRequestPayload
          )
        : undefined;
    return message;
  },
};

function createBaseAccountServiceResponse(): AccountServiceResponse {
  return { getAccountResponsePayload: undefined, errorResponse: undefined };
}

export const AccountServiceResponse = {
  encode(
    message: AccountServiceResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.getAccountResponsePayload !== undefined) {
      GetAccountResponsePayload.encode(
        message.getAccountResponsePayload,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.errorResponse !== undefined) {
      ErrorResponse.encode(
        message.errorResponse,
        writer.uint32(800002).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AccountServiceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountServiceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.getAccountResponsePayload = GetAccountResponsePayload.decode(
            reader,
            reader.uint32()
          );
          break;
        case 100000:
          message.errorResponse = ErrorResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AccountServiceResponse {
    return {
      getAccountResponsePayload: isSet(object.getAccountResponsePayload)
        ? GetAccountResponsePayload.fromJSON(object.getAccountResponsePayload)
        : undefined,
      errorResponse: isSet(object.errorResponse)
        ? ErrorResponse.fromJSON(object.errorResponse)
        : undefined,
    };
  },

  toJSON(message: AccountServiceResponse): unknown {
    const obj: any = {};
    message.getAccountResponsePayload !== undefined &&
      (obj.getAccountResponsePayload = message.getAccountResponsePayload
        ? GetAccountResponsePayload.toJSON(message.getAccountResponsePayload)
        : undefined);
    message.errorResponse !== undefined &&
      (obj.errorResponse = message.errorResponse
        ? ErrorResponse.toJSON(message.errorResponse)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AccountServiceResponse>, I>>(
    object: I
  ): AccountServiceResponse {
    const message = createBaseAccountServiceResponse();
    message.getAccountResponsePayload =
      object.getAccountResponsePayload !== undefined &&
      object.getAccountResponsePayload !== null
        ? GetAccountResponsePayload.fromPartial(
            object.getAccountResponsePayload
          )
        : undefined;
    message.errorResponse =
      object.errorResponse !== undefined && object.errorResponse !== null
        ? ErrorResponse.fromPartial(object.errorResponse)
        : undefined;
    return message;
  },
};

function createBaseAccount(): Account {
  return {
    userId: '',
    firstName: '',
    lastName: '',
    email: '',
    birthDate: undefined,
  };
}

export const Account = {
  encode(
    message: Account,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.userId !== '') {
      writer.uint32(10).string(message.userId);
    }
    if (message.firstName !== '') {
      writer.uint32(18).string(message.firstName);
    }
    if (message.lastName !== '') {
      writer.uint32(26).string(message.lastName);
    }
    if (message.email !== '') {
      writer.uint32(34).string(message.email);
    }
    if (message.birthDate !== undefined) {
      Timestamp.encode(
        toTimestamp(message.birthDate),
        writer.uint32(42).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Account {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userId = reader.string();
          break;
        case 2:
          message.firstName = reader.string();
          break;
        case 3:
          message.lastName = reader.string();
          break;
        case 4:
          message.email = reader.string();
          break;
        case 5:
          message.birthDate = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Account {
    return {
      userId: isSet(object.userId) ? String(object.userId) : '',
      firstName: isSet(object.firstName) ? String(object.firstName) : '',
      lastName: isSet(object.lastName) ? String(object.lastName) : '',
      email: isSet(object.email) ? String(object.email) : '',
      birthDate: isSet(object.birthDate)
        ? fromJsonTimestamp(object.birthDate)
        : undefined,
    };
  },

  toJSON(message: Account): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = message.userId);
    message.firstName !== undefined && (obj.firstName = message.firstName);
    message.lastName !== undefined && (obj.lastName = message.lastName);
    message.email !== undefined && (obj.email = message.email);
    message.birthDate !== undefined &&
      (obj.birthDate = message.birthDate.toISOString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Account>, I>>(object: I): Account {
    const message = createBaseAccount();
    message.userId = object.userId ?? '';
    message.firstName = object.firstName ?? '';
    message.lastName = object.lastName ?? '';
    message.email = object.email ?? '';
    message.birthDate = object.birthDate ?? undefined;
    return message;
  },
};

function createBaseAddAccountRequestPayload(): AddAccountRequestPayload {
  return { firstName: '', lastName: '', email: '', birthDate: undefined };
}

export const AddAccountRequestPayload = {
  encode(
    message: AddAccountRequestPayload,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.firstName !== '') {
      writer.uint32(18).string(message.firstName);
    }
    if (message.lastName !== '') {
      writer.uint32(26).string(message.lastName);
    }
    if (message.email !== '') {
      writer.uint32(34).string(message.email);
    }
    if (message.birthDate !== undefined) {
      Timestamp.encode(
        toTimestamp(message.birthDate),
        writer.uint32(42).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AddAccountRequestPayload {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddAccountRequestPayload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.firstName = reader.string();
          break;
        case 3:
          message.lastName = reader.string();
          break;
        case 4:
          message.email = reader.string();
          break;
        case 5:
          message.birthDate = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AddAccountRequestPayload {
    return {
      firstName: isSet(object.firstName) ? String(object.firstName) : '',
      lastName: isSet(object.lastName) ? String(object.lastName) : '',
      email: isSet(object.email) ? String(object.email) : '',
      birthDate: isSet(object.birthDate)
        ? fromJsonTimestamp(object.birthDate)
        : undefined,
    };
  },

  toJSON(message: AddAccountRequestPayload): unknown {
    const obj: any = {};
    message.firstName !== undefined && (obj.firstName = message.firstName);
    message.lastName !== undefined && (obj.lastName = message.lastName);
    message.email !== undefined && (obj.email = message.email);
    message.birthDate !== undefined &&
      (obj.birthDate = message.birthDate.toISOString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AddAccountRequestPayload>, I>>(
    object: I
  ): AddAccountRequestPayload {
    const message = createBaseAddAccountRequestPayload();
    message.firstName = object.firstName ?? '';
    message.lastName = object.lastName ?? '';
    message.email = object.email ?? '';
    message.birthDate = object.birthDate ?? undefined;
    return message;
  },
};

function createBaseUpdateProfilePictureRequestPayload(): UpdateProfilePictureRequestPayload {
  return { picture: new Uint8Array(), userId: '' };
}

export const UpdateProfilePictureRequestPayload = {
  encode(
    message: UpdateProfilePictureRequestPayload,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.picture.length !== 0) {
      writer.uint32(10).bytes(message.picture);
    }
    if (message.userId !== '') {
      writer.uint32(18).string(message.userId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateProfilePictureRequestPayload {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateProfilePictureRequestPayload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.picture = reader.bytes();
          break;
        case 2:
          message.userId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateProfilePictureRequestPayload {
    return {
      picture: isSet(object.picture)
        ? bytesFromBase64(object.picture)
        : new Uint8Array(),
      userId: isSet(object.userId) ? String(object.userId) : '',
    };
  },

  toJSON(message: UpdateProfilePictureRequestPayload): unknown {
    const obj: any = {};
    message.picture !== undefined &&
      (obj.picture = base64FromBytes(
        message.picture !== undefined ? message.picture : new Uint8Array()
      ));
    message.userId !== undefined && (obj.userId = message.userId);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<UpdateProfilePictureRequestPayload>, I>
  >(object: I): UpdateProfilePictureRequestPayload {
    const message = createBaseUpdateProfilePictureRequestPayload();
    message.picture = object.picture ?? new Uint8Array();
    message.userId = object.userId ?? '';
    return message;
  },
};

function createBaseGetAccountResponsePayload(): GetAccountResponsePayload {
  return { account: undefined };
}

export const GetAccountResponsePayload = {
  encode(
    message: GetAccountResponsePayload,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.account !== undefined) {
      Account.encode(message.account, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetAccountResponsePayload {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAccountResponsePayload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = Account.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetAccountResponsePayload {
    return {
      account: isSet(object.account)
        ? Account.fromJSON(object.account)
        : undefined,
    };
  },

  toJSON(message: GetAccountResponsePayload): unknown {
    const obj: any = {};
    message.account !== undefined &&
      (obj.account = message.account
        ? Account.toJSON(message.account)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetAccountResponsePayload>, I>>(
    object: I
  ): GetAccountResponsePayload {
    const message = createBaseGetAccountResponsePayload();
    message.account =
      object.account !== undefined && object.account !== null
        ? Account.fromPartial(object.account)
        : undefined;
    return message;
  },
};

function createBaseUpdateAccountRequestPayload(): UpdateAccountRequestPayload {
  return { account: undefined };
}

export const UpdateAccountRequestPayload = {
  encode(
    message: UpdateAccountRequestPayload,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.account !== undefined) {
      Account.encode(message.account, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateAccountRequestPayload {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateAccountRequestPayload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = Account.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateAccountRequestPayload {
    return {
      account: isSet(object.account)
        ? Account.fromJSON(object.account)
        : undefined,
    };
  },

  toJSON(message: UpdateAccountRequestPayload): unknown {
    const obj: any = {};
    message.account !== undefined &&
      (obj.account = message.account
        ? Account.toJSON(message.account)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateAccountRequestPayload>, I>>(
    object: I
  ): UpdateAccountRequestPayload {
    const message = createBaseUpdateAccountRequestPayload();
    message.account =
      object.account !== undefined && object.account !== null
        ? Account.fromPartial(object.account)
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

const atob: (b64: string) => string =
  globalThis.atob ||
  ((b64) => globalThis.Buffer.from(b64, 'base64').toString('binary'));
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

const btoa: (bin: string) => string =
  globalThis.btoa ||
  ((bin) => globalThis.Buffer.from(bin, 'binary').toString('base64'));
function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  arr.forEach((byte) => {
    bin.push(String.fromCharCode(byte));
  });
  return btoa(bin.join(''));
}

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
