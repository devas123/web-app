// package: compservice.model.protobuf
// file: command.proto

import * as jspb from "google-protobuf";
import * as common_pb from "./common_pb";

export class Command extends jspb.Message {
  getType(): CommandTypeMap[keyof CommandTypeMap];
  setType(value: CommandTypeMap[keyof CommandTypeMap]): void;

  hasMessageinfo(): boolean;
  clearMessageinfo(): void;
  getMessageinfo(): common_pb.MessageInfo | undefined;
  setMessageinfo(value?: common_pb.MessageInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Command.AsObject;
  static toObject(includeInstance: boolean, msg: Command): Command.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Command, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Command;
  static deserializeBinaryFromReader(message: Command, reader: jspb.BinaryReader): Command;
}

export namespace Command {
  export type AsObject = {
    type: CommandTypeMap[keyof CommandTypeMap],
    messageinfo?: common_pb.MessageInfo.AsObject,
  }
}

export interface CommandTypeMap {
  COMMAND_TYPE_UNKNOWN: 0;
  ADD_ACADEMY_COMMAND: 1;
  ADD_CATEGORY_COMMAND: 2;
  ADD_COMPETITOR_COMMAND: 3;
  ADD_REGISTRATION_GROUP_COMMAND: 4;
  ADD_REGISTRATION_GROUP_TO_REGISTRATION_PERIOD_COMMAND: 5;
  ADD_REGISTRATION_PERIOD_COMMAND: 6;
  ASSIGN_REGISTRATION_GROUP_CATEGORIES_COMMAND: 7;
  CHANGE_CATEGORY_REGISTRATION_STATUS_COMMAND: 8;
  CHANGE_COMPETITOR_CATEGORY_COMMAND: 9;
  CREATE_COMPETITION_COMMAND: 10;
  CREATE_FAKE_COMPETITORS_COMMAND: 11;
  DASHBOARD_FIGHT_ORDER_CHANGE_COMMAND: 12;
  DASHBOARD_SET_FIGHT_RESULT_COMMAND: 13;
  DELETE_CATEGORY_COMMAND: 14;
  DELETE_COMPETITION_COMMAND: 15;
  DELETE_REGISTRATION_GROUP_COMMAND: 16;
  DELETE_REGISTRATION_PERIOD_COMMAND: 17;
  DROP_ALL_BRACKETS_COMMAND: 18;
  DROP_CATEGORY_BRACKETS_COMMAND: 19;
  DROP_SCHEDULE_COMMAND: 20;
  FIGHTS_EDITOR_APPLY_CHANGE: 21;
  GENERATE_BRACKETS_COMMAND: 22;
  GENERATE_CATEGORIES_COMMAND: 23;
  GENERATE_SCHEDULE_COMMAND: 24;
  PROPAGATE_COMPETITORS_COMMAND: 25;
  PUBLISH_COMPETITION_COMMAND: 26;
  REMOVE_ACADEMY_COMMAND: 27;
  REMOVE_COMPETITOR_COMMAND: 28;
  SAVE_ABSOLUTE_CATEGORY_COMMAND: 29;
  START_COMPETITION_COMMAND: 30;
  STOP_COMPETITION_COMMAND: 31;
  UNPUBLISH_COMPETITION_COMMAND: 32;
  UPDATE_ACADEMY_COMMAND: 33;
  UPDATE_COMPETITION_PROPERTIES_COMMAND: 34;
  UPDATE_COMPETITOR_COMMAND: 35;
  UPDATE_REGISTRATION_INFO_COMMAND: 36;
  UPDATE_STAGE_STATUS_COMMAND: 37;
}

export const CommandType: CommandTypeMap;

