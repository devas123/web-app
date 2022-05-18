// package: compservice.model.protobuf
// file: event.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as common_pb from "./common_pb";

export class Event extends jspb.Message {
  hasTimestamp(): boolean;
  clearTimestamp(): void;
  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getVersion(): number;
  setVersion(value: number): void;

  getLocaleventnumber(): number;
  setLocaleventnumber(value: number): void;

  getType(): EventTypeMap[keyof EventTypeMap];
  setType(value: EventTypeMap[keyof EventTypeMap]): void;

  hasMessageinfo(): boolean;
  clearMessageinfo(): void;
  getMessageinfo(): common_pb.MessageInfo | undefined;
  setMessageinfo(value?: common_pb.MessageInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Event.AsObject;
  static toObject(includeInstance: boolean, msg: Event): Event.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Event, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Event;
  static deserializeBinaryFromReader(message: Event, reader: jspb.BinaryReader): Event;
}

export namespace Event {
  export type AsObject = {
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    version: number,
    localeventnumber: number,
    type: EventTypeMap[keyof EventTypeMap],
    messageinfo?: common_pb.MessageInfo.AsObject,
  }
}

export interface EventTypeMap {
  EVENT_TYPE_UNKNOWN: 0;
  ACADEMY_ADDED: 1;
  ACADEMY_REMOVED: 2;
  ACADEMY_UPDATED: 3;
  BRACKETS_GENERATED: 4;
  CATEGORY_ADDED: 5;
  CATEGORY_BRACKETS_DROPPED: 6;
  CATEGORY_DELETED: 7;
  CATEGORY_REGISTRATION_STATUS_CHANGED: 8;
  COMPETITION_CREATED: 9;
  COMPETITION_DELETED: 10;
  COMPETITION_PROPERTIES_UPDATED: 11;
  COMPETITORS_PROPAGATED_TO_STAGE: 12;
  COMPETITOR_ADDED: 13;
  COMPETITOR_CATEGORY_ADDED: 14;
  COMPETITOR_CATEGORY_CHANGED: 15;
  COMPETITOR_REMOVED: 16;
  COMPETITOR_UPDATED: 17;
  DASHBOARD_FIGHT_COMPETITORS_ASSIGNED: 18;
  DASHBOARD_FIGHT_RESULT_SET: 19;
  DASHBOARD_STAGE_RESULT_SET: 20;
  FIGHTS_ADDED_TO_STAGE: 21;
  FIGHTS_EDITOR_CHANGE_APPLIED: 22;
  FIGHTS_START_TIME_CLEANED: 23;
  FIGHTS_START_TIME_UPDATED: 24;
  FIGHT_ORDER_CHANGED: 25;
  MATS_UPDATED: 26;
  REGISTRATION_GROUP_ADDED: 27;
  REGISTRATION_GROUP_CATEGORIES_ASSIGNED: 28;
  REGISTRATION_GROUP_DELETED: 29;
  REGISTRATION_INFO_UPDATED: 30;
  REGISTRATION_PERIOD_ADDED: 31;
  REGISTRATION_PERIOD_DELETED: 32;
  SCHEDULE_DROPPED: 33;
  SCHEDULE_GENERATED: 34;
  STAGE_STATUS_UPDATED: 35;
}

export const EventType: EventTypeMap;

