// source: event.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var common_pb = require('./common_pb.js');
goog.object.extend(proto, common_pb);
goog.exportSymbol('proto.compservice.model.protobuf.Event', null, global);
goog.exportSymbol('proto.compservice.model.protobuf.EventType', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.compservice.model.protobuf.Event = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.compservice.model.protobuf.Event, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.compservice.model.protobuf.Event.displayName = 'proto.compservice.model.protobuf.Event';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.compservice.model.protobuf.Event.prototype.toObject = function(opt_includeInstance) {
  return proto.compservice.model.protobuf.Event.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.compservice.model.protobuf.Event} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.compservice.model.protobuf.Event.toObject = function(includeInstance, msg) {
  var f, obj = {
    timestamp: (f = msg.getTimestamp()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    version: jspb.Message.getFieldWithDefault(msg, 2, 0),
    localeventnumber: jspb.Message.getFieldWithDefault(msg, 3, 0),
    type: jspb.Message.getFieldWithDefault(msg, 4, 0),
    messageinfo: (f = msg.getMessageinfo()) && common_pb.MessageInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.compservice.model.protobuf.Event}
 */
proto.compservice.model.protobuf.Event.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.compservice.model.protobuf.Event;
  return proto.compservice.model.protobuf.Event.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.compservice.model.protobuf.Event} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.compservice.model.protobuf.Event}
 */
proto.compservice.model.protobuf.Event.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTimestamp(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setVersion(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLocaleventnumber(value);
      break;
    case 4:
      var value = /** @type {!proto.compservice.model.protobuf.EventType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 5:
      var value = new common_pb.MessageInfo;
      reader.readMessage(value,common_pb.MessageInfo.deserializeBinaryFromReader);
      msg.setMessageinfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.compservice.model.protobuf.Event.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.compservice.model.protobuf.Event.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.compservice.model.protobuf.Event} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.compservice.model.protobuf.Event.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimestamp();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getVersion();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getLocaleventnumber();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getMessageinfo();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      common_pb.MessageInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Timestamp timestamp = 1;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.compservice.model.protobuf.Event.prototype.getTimestamp = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.compservice.model.protobuf.Event} returns this
*/
proto.compservice.model.protobuf.Event.prototype.setTimestamp = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.compservice.model.protobuf.Event} returns this
 */
proto.compservice.model.protobuf.Event.prototype.clearTimestamp = function() {
  return this.setTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.compservice.model.protobuf.Event.prototype.hasTimestamp = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 version = 2;
 * @return {number}
 */
proto.compservice.model.protobuf.Event.prototype.getVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.compservice.model.protobuf.Event} returns this
 */
proto.compservice.model.protobuf.Event.prototype.setVersion = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 localEventNumber = 3;
 * @return {number}
 */
proto.compservice.model.protobuf.Event.prototype.getLocaleventnumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.compservice.model.protobuf.Event} returns this
 */
proto.compservice.model.protobuf.Event.prototype.setLocaleventnumber = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional EventType type = 4;
 * @return {!proto.compservice.model.protobuf.EventType}
 */
proto.compservice.model.protobuf.Event.prototype.getType = function() {
  return /** @type {!proto.compservice.model.protobuf.EventType} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.compservice.model.protobuf.EventType} value
 * @return {!proto.compservice.model.protobuf.Event} returns this
 */
proto.compservice.model.protobuf.Event.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional MessageInfo messageInfo = 5;
 * @return {?proto.compservice.model.protobuf.MessageInfo}
 */
proto.compservice.model.protobuf.Event.prototype.getMessageinfo = function() {
  return /** @type{?proto.compservice.model.protobuf.MessageInfo} */ (
    jspb.Message.getWrapperField(this, common_pb.MessageInfo, 5));
};


/**
 * @param {?proto.compservice.model.protobuf.MessageInfo|undefined} value
 * @return {!proto.compservice.model.protobuf.Event} returns this
*/
proto.compservice.model.protobuf.Event.prototype.setMessageinfo = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.compservice.model.protobuf.Event} returns this
 */
proto.compservice.model.protobuf.Event.prototype.clearMessageinfo = function() {
  return this.setMessageinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.compservice.model.protobuf.Event.prototype.hasMessageinfo = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * @enum {number}
 */
proto.compservice.model.protobuf.EventType = {
  EVENT_TYPE_UNKNOWN: 0,
  ACADEMY_ADDED: 1,
  ACADEMY_REMOVED: 2,
  ACADEMY_UPDATED: 3,
  BRACKETS_GENERATED: 4,
  CATEGORY_ADDED: 5,
  CATEGORY_BRACKETS_DROPPED: 6,
  CATEGORY_DELETED: 7,
  CATEGORY_REGISTRATION_STATUS_CHANGED: 8,
  COMPETITION_CREATED: 9,
  COMPETITION_DELETED: 10,
  COMPETITION_PROPERTIES_UPDATED: 11,
  COMPETITORS_PROPAGATED_TO_STAGE: 12,
  COMPETITOR_ADDED: 13,
  COMPETITOR_CATEGORY_ADDED: 14,
  COMPETITOR_CATEGORY_CHANGED: 15,
  COMPETITOR_REMOVED: 16,
  COMPETITOR_UPDATED: 17,
  DASHBOARD_FIGHT_COMPETITORS_ASSIGNED: 18,
  DASHBOARD_FIGHT_RESULT_SET: 19,
  DASHBOARD_STAGE_RESULT_SET: 20,
  FIGHTS_ADDED_TO_STAGE: 21,
  FIGHTS_EDITOR_CHANGE_APPLIED: 22,
  FIGHTS_START_TIME_CLEANED: 23,
  FIGHTS_START_TIME_UPDATED: 24,
  FIGHT_ORDER_CHANGED: 25,
  MATS_UPDATED: 26,
  REGISTRATION_GROUP_ADDED: 27,
  REGISTRATION_GROUP_CATEGORIES_ASSIGNED: 28,
  REGISTRATION_GROUP_DELETED: 29,
  REGISTRATION_INFO_UPDATED: 30,
  REGISTRATION_PERIOD_ADDED: 31,
  REGISTRATION_PERIOD_DELETED: 32,
  SCHEDULE_DROPPED: 33,
  SCHEDULE_GENERATED: 34,
  STAGE_STATUS_UPDATED: 35
};

goog.object.extend(exports, proto.compservice.model.protobuf);
