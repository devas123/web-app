// source: model.proto
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
goog.exportSymbol('proto.compservice.model.protobuf.Academy', null, global);
goog.exportSymbol('proto.compservice.model.protobuf.AdditionalGroupSortingDescriptor', null, global);
goog.exportSymbol('proto.compservice.model.protobuf.AdjacencyList', null, global);
goog.exportSymbol('proto.compservice.model.protobuf.AdjacencyListEntry', null, global);
goog.exportSymbol('proto.compservice.model.protobuf.BracketType', null, global);
goog.exportSymbol('proto.compservice.model.protobuf.CategoryDescriptor', null, global);
goog.exportSymbol('proto.compservice.model.protobuf.CategoryRestriction', null, global);
goog.exportSymbol('proto.compservice.model.protobuf.CategoryRestrictionType', null, global);
goog.exportSymbol('proto.compservice.model.protobuf.CategoryState', null, global);
goog.exportSymbol('proto.compservice.model.protobuf.CompScore', null, global);
goog.exportSymbol('proto.compservice.model.protobuf.CompetitionProcessingStarted', null, global);
goog.exportSymbol('proto.compservice.model.protobuf.CompetitionProcessingStopped', null, global);
goog.exportSymbol('proto.compservice.model.protobuf.CompetitionProcessorNotification', null, global);
goog.exportSymbol('proto.compservice.model.protobuf.CompetitionProcessorNotification.NotificationCase', null, global);
goog.exportSymbol('proto.compservice.model.protobuf.CompetitionProperties', null, global);
goog.exportSymbol('proto.compservice.model.protobuf.CompetitionState', null, global);
goog.exportSymbol('proto.compservice.model.protobuf.CompetitionStatus', null, global);
goog.exportSymbol('proto.compservice.model.protobuf.Competitor', null, global);
goog.exportSymbol('proto.compservice.model.protobuf.CompetitorRegistrationStatus', null, global);
goog.exportSymbol('proto.compservice.model.protobuf.CompetitorSelector', null, global);
goog.exportSymbol('proto.compservice.model.protobuf.CompetitorStageResult', null, global);
goog.exportSymbol('proto.compservice.model.protobuf.DistributionType', null, global);
goog.exportSymbol('proto.compservice.model.protobuf.FightDescription', null, global);
goog.exportSymbol('proto.compservice.model.protobuf.FightReferenceType', null, global);
goog.exportSymbol('proto.compservice.model.protobuf.FightResult', null, global);
goog.exportSymbol('proto.compservice.model.protobuf.FightResultOption', null, global);
goog.exportSymbol('proto.compservice.model.protobuf.FightStartTimePair', null, global);
goog.exportSymbol('proto.compservice.model.protobuf.FightStatus', null, global);
goog.exportSymbol('proto.compservice.model.protobuf.FullAcademyInfo', null, global);
goog.exportSymbol('proto.compservice.model.protobuf.GroupDescriptor', null, global);
goog.exportSymbol('proto.compservice.model.protobuf.GroupSortDirection', null, global);
goog.exportSymbol('proto.compservice.model.protobuf.GroupSortSpecifier', null, global);
goog.exportSymbol('proto.compservice.model.protobuf.LogicalOperator', null, global);
goog.exportSymbol('proto.compservice.model.protobuf.ManagedCompetition', null, global);
goog.exportSymbol('proto.compservice.model.protobuf.MatDescription', null, global);
goog.exportSymbol('proto.compservice.model.protobuf.MatState', null, global);
goog.exportSymbol('proto.compservice.model.protobuf.OperatorType', null, global);
goog.exportSymbol('proto.compservice.model.protobuf.Period', null, global);
goog.exportSymbol('proto.compservice.model.protobuf.PointGroup', null, global);
goog.exportSymbol('proto.compservice.model.protobuf.PromoCode', null, global);
goog.exportSymbol('proto.compservice.model.protobuf.RegistrationFee', null, global);
goog.exportSymbol('proto.compservice.model.protobuf.RegistrationGroup', null, global);
goog.exportSymbol('proto.compservice.model.protobuf.RegistrationInfo', null, global);
goog.exportSymbol('proto.compservice.model.protobuf.RegistrationPeriod', null, global);
goog.exportSymbol('proto.compservice.model.protobuf.Schedule', null, global);
goog.exportSymbol('proto.compservice.model.protobuf.ScheduleEntry', null, global);
goog.exportSymbol('proto.compservice.model.protobuf.ScheduleEntryType', null, global);
goog.exportSymbol('proto.compservice.model.protobuf.ScheduleRequirement', null, global);
goog.exportSymbol('proto.compservice.model.protobuf.ScheduleRequirementType', null, global);
goog.exportSymbol('proto.compservice.model.protobuf.Score', null, global);
goog.exportSymbol('proto.compservice.model.protobuf.SelectorClassifier', null, global);
goog.exportSymbol('proto.compservice.model.protobuf.StageDescriptor', null, global);
goog.exportSymbol('proto.compservice.model.protobuf.StageInputDescriptor', null, global);
goog.exportSymbol('proto.compservice.model.protobuf.StageResultDescriptor', null, global);
goog.exportSymbol('proto.compservice.model.protobuf.StageRoundType', null, global);
goog.exportSymbol('proto.compservice.model.protobuf.StageStatus', null, global);
goog.exportSymbol('proto.compservice.model.protobuf.StageType', null, global);
goog.exportSymbol('proto.compservice.model.protobuf.StartTimeInfo', null, global);
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
proto.compservice.model.protobuf.AdjacencyList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.compservice.model.protobuf.AdjacencyList.repeatedFields_, null);
};
goog.inherits(proto.compservice.model.protobuf.AdjacencyList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.compservice.model.protobuf.AdjacencyList.displayName = 'proto.compservice.model.protobuf.AdjacencyList';
}
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
proto.compservice.model.protobuf.AdjacencyListEntry = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.compservice.model.protobuf.AdjacencyListEntry.repeatedFields_, null);
};
goog.inherits(proto.compservice.model.protobuf.AdjacencyListEntry, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.compservice.model.protobuf.AdjacencyListEntry.displayName = 'proto.compservice.model.protobuf.AdjacencyListEntry';
}
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
proto.compservice.model.protobuf.ManagedCompetition = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.compservice.model.protobuf.ManagedCompetition, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.compservice.model.protobuf.ManagedCompetition.displayName = 'proto.compservice.model.protobuf.ManagedCompetition';
}
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
proto.compservice.model.protobuf.StageDescriptor = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.compservice.model.protobuf.StageDescriptor.repeatedFields_, null);
};
goog.inherits(proto.compservice.model.protobuf.StageDescriptor, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.compservice.model.protobuf.StageDescriptor.displayName = 'proto.compservice.model.protobuf.StageDescriptor';
}
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
proto.compservice.model.protobuf.GroupDescriptor = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.compservice.model.protobuf.GroupDescriptor, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.compservice.model.protobuf.GroupDescriptor.displayName = 'proto.compservice.model.protobuf.GroupDescriptor';
}
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
proto.compservice.model.protobuf.StageInputDescriptor = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.compservice.model.protobuf.StageInputDescriptor.repeatedFields_, null);
};
goog.inherits(proto.compservice.model.protobuf.StageInputDescriptor, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.compservice.model.protobuf.StageInputDescriptor.displayName = 'proto.compservice.model.protobuf.StageInputDescriptor';
}
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
proto.compservice.model.protobuf.CompetitorSelector = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.compservice.model.protobuf.CompetitorSelector.repeatedFields_, null);
};
goog.inherits(proto.compservice.model.protobuf.CompetitorSelector, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.compservice.model.protobuf.CompetitorSelector.displayName = 'proto.compservice.model.protobuf.CompetitorSelector';
}
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
proto.compservice.model.protobuf.StageResultDescriptor = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.compservice.model.protobuf.StageResultDescriptor.repeatedFields_, null);
};
goog.inherits(proto.compservice.model.protobuf.StageResultDescriptor, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.compservice.model.protobuf.StageResultDescriptor.displayName = 'proto.compservice.model.protobuf.StageResultDescriptor';
}
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
proto.compservice.model.protobuf.AdditionalGroupSortingDescriptor = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.compservice.model.protobuf.AdditionalGroupSortingDescriptor, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.compservice.model.protobuf.AdditionalGroupSortingDescriptor.displayName = 'proto.compservice.model.protobuf.AdditionalGroupSortingDescriptor';
}
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
proto.compservice.model.protobuf.CompetitorStageResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.compservice.model.protobuf.CompetitorStageResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.compservice.model.protobuf.CompetitorStageResult.displayName = 'proto.compservice.model.protobuf.CompetitorStageResult';
}
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
proto.compservice.model.protobuf.FightResultOption = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.compservice.model.protobuf.FightResultOption, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.compservice.model.protobuf.FightResultOption.displayName = 'proto.compservice.model.protobuf.FightResultOption';
}
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
proto.compservice.model.protobuf.FightDescription = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.compservice.model.protobuf.FightDescription.repeatedFields_, null);
};
goog.inherits(proto.compservice.model.protobuf.FightDescription, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.compservice.model.protobuf.FightDescription.displayName = 'proto.compservice.model.protobuf.FightDescription';
}
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
proto.compservice.model.protobuf.MatDescription = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.compservice.model.protobuf.MatDescription, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.compservice.model.protobuf.MatDescription.displayName = 'proto.compservice.model.protobuf.MatDescription';
}
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
proto.compservice.model.protobuf.FightResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.compservice.model.protobuf.FightResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.compservice.model.protobuf.FightResult.displayName = 'proto.compservice.model.protobuf.FightResult';
}
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
proto.compservice.model.protobuf.CompScore = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.compservice.model.protobuf.CompScore, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.compservice.model.protobuf.CompScore.displayName = 'proto.compservice.model.protobuf.CompScore';
}
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
proto.compservice.model.protobuf.Score = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.compservice.model.protobuf.Score.repeatedFields_, null);
};
goog.inherits(proto.compservice.model.protobuf.Score, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.compservice.model.protobuf.Score.displayName = 'proto.compservice.model.protobuf.Score';
}
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
proto.compservice.model.protobuf.PointGroup = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.compservice.model.protobuf.PointGroup, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.compservice.model.protobuf.PointGroup.displayName = 'proto.compservice.model.protobuf.PointGroup';
}
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
proto.compservice.model.protobuf.RegistrationInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.compservice.model.protobuf.RegistrationInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.compservice.model.protobuf.RegistrationInfo.displayName = 'proto.compservice.model.protobuf.RegistrationInfo';
}
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
proto.compservice.model.protobuf.RegistrationGroup = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.compservice.model.protobuf.RegistrationGroup.repeatedFields_, null);
};
goog.inherits(proto.compservice.model.protobuf.RegistrationGroup, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.compservice.model.protobuf.RegistrationGroup.displayName = 'proto.compservice.model.protobuf.RegistrationGroup';
}
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
proto.compservice.model.protobuf.RegistrationFee = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.compservice.model.protobuf.RegistrationFee, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.compservice.model.protobuf.RegistrationFee.displayName = 'proto.compservice.model.protobuf.RegistrationFee';
}
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
proto.compservice.model.protobuf.RegistrationPeriod = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.compservice.model.protobuf.RegistrationPeriod.repeatedFields_, null);
};
goog.inherits(proto.compservice.model.protobuf.RegistrationPeriod, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.compservice.model.protobuf.RegistrationPeriod.displayName = 'proto.compservice.model.protobuf.RegistrationPeriod';
}
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
proto.compservice.model.protobuf.FullAcademyInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.compservice.model.protobuf.FullAcademyInfo.repeatedFields_, null);
};
goog.inherits(proto.compservice.model.protobuf.FullAcademyInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.compservice.model.protobuf.FullAcademyInfo.displayName = 'proto.compservice.model.protobuf.FullAcademyInfo';
}
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
proto.compservice.model.protobuf.Academy = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.compservice.model.protobuf.Academy, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.compservice.model.protobuf.Academy.displayName = 'proto.compservice.model.protobuf.Academy';
}
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
proto.compservice.model.protobuf.CategoryDescriptor = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.compservice.model.protobuf.CategoryDescriptor.repeatedFields_, null);
};
goog.inherits(proto.compservice.model.protobuf.CategoryDescriptor, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.compservice.model.protobuf.CategoryDescriptor.displayName = 'proto.compservice.model.protobuf.CategoryDescriptor';
}
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
proto.compservice.model.protobuf.CategoryRestriction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.compservice.model.protobuf.CategoryRestriction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.compservice.model.protobuf.CategoryRestriction.displayName = 'proto.compservice.model.protobuf.CategoryRestriction';
}
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
proto.compservice.model.protobuf.CategoryState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.compservice.model.protobuf.CategoryState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.compservice.model.protobuf.CategoryState.displayName = 'proto.compservice.model.protobuf.CategoryState';
}
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
proto.compservice.model.protobuf.CompetitionProperties = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.compservice.model.protobuf.CompetitionProperties.repeatedFields_, null);
};
goog.inherits(proto.compservice.model.protobuf.CompetitionProperties, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.compservice.model.protobuf.CompetitionProperties.displayName = 'proto.compservice.model.protobuf.CompetitionProperties';
}
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
proto.compservice.model.protobuf.PromoCode = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.compservice.model.protobuf.PromoCode, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.compservice.model.protobuf.PromoCode.displayName = 'proto.compservice.model.protobuf.PromoCode';
}
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
proto.compservice.model.protobuf.CompetitionProcessorNotification = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.compservice.model.protobuf.CompetitionProcessorNotification.oneofGroups_);
};
goog.inherits(proto.compservice.model.protobuf.CompetitionProcessorNotification, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.compservice.model.protobuf.CompetitionProcessorNotification.displayName = 'proto.compservice.model.protobuf.CompetitionProcessorNotification';
}
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
proto.compservice.model.protobuf.CompetitionProcessingStarted = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.compservice.model.protobuf.CompetitionProcessingStarted, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.compservice.model.protobuf.CompetitionProcessingStarted.displayName = 'proto.compservice.model.protobuf.CompetitionProcessingStarted';
}
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
proto.compservice.model.protobuf.CompetitionProcessingStopped = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.compservice.model.protobuf.CompetitionProcessingStopped, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.compservice.model.protobuf.CompetitionProcessingStopped.displayName = 'proto.compservice.model.protobuf.CompetitionProcessingStopped';
}
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
proto.compservice.model.protobuf.CompetitionState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.compservice.model.protobuf.CompetitionState.repeatedFields_, null);
};
goog.inherits(proto.compservice.model.protobuf.CompetitionState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.compservice.model.protobuf.CompetitionState.displayName = 'proto.compservice.model.protobuf.CompetitionState';
}
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
proto.compservice.model.protobuf.Schedule = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.compservice.model.protobuf.Schedule.repeatedFields_, null);
};
goog.inherits(proto.compservice.model.protobuf.Schedule, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.compservice.model.protobuf.Schedule.displayName = 'proto.compservice.model.protobuf.Schedule';
}
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
proto.compservice.model.protobuf.Period = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.compservice.model.protobuf.Period.repeatedFields_, null);
};
goog.inherits(proto.compservice.model.protobuf.Period, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.compservice.model.protobuf.Period.displayName = 'proto.compservice.model.protobuf.Period';
}
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
proto.compservice.model.protobuf.ScheduleEntry = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.compservice.model.protobuf.ScheduleEntry.repeatedFields_, null);
};
goog.inherits(proto.compservice.model.protobuf.ScheduleEntry, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.compservice.model.protobuf.ScheduleEntry.displayName = 'proto.compservice.model.protobuf.ScheduleEntry';
}
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
proto.compservice.model.protobuf.StartTimeInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.compservice.model.protobuf.StartTimeInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.compservice.model.protobuf.StartTimeInfo.displayName = 'proto.compservice.model.protobuf.StartTimeInfo';
}
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
proto.compservice.model.protobuf.ScheduleRequirement = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.compservice.model.protobuf.ScheduleRequirement.repeatedFields_, null);
};
goog.inherits(proto.compservice.model.protobuf.ScheduleRequirement, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.compservice.model.protobuf.ScheduleRequirement.displayName = 'proto.compservice.model.protobuf.ScheduleRequirement';
}
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
proto.compservice.model.protobuf.Competitor = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.compservice.model.protobuf.Competitor.repeatedFields_, null);
};
goog.inherits(proto.compservice.model.protobuf.Competitor, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.compservice.model.protobuf.Competitor.displayName = 'proto.compservice.model.protobuf.Competitor';
}
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
proto.compservice.model.protobuf.MatState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.compservice.model.protobuf.MatState.repeatedFields_, null);
};
goog.inherits(proto.compservice.model.protobuf.MatState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.compservice.model.protobuf.MatState.displayName = 'proto.compservice.model.protobuf.MatState';
}
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
proto.compservice.model.protobuf.FightStartTimePair = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.compservice.model.protobuf.FightStartTimePair, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.compservice.model.protobuf.FightStartTimePair.displayName = 'proto.compservice.model.protobuf.FightStartTimePair';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.compservice.model.protobuf.AdjacencyList.repeatedFields_ = [2];



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
proto.compservice.model.protobuf.AdjacencyList.prototype.toObject = function(opt_includeInstance) {
  return proto.compservice.model.protobuf.AdjacencyList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.compservice.model.protobuf.AdjacencyList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.compservice.model.protobuf.AdjacencyList.toObject = function(includeInstance, msg) {
  var f, obj = {
    root: jspb.Message.getFieldWithDefault(msg, 1, 0),
    verticesList: jspb.Message.toObjectList(msg.getVerticesList(),
    proto.compservice.model.protobuf.AdjacencyListEntry.toObject, includeInstance)
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
 * @return {!proto.compservice.model.protobuf.AdjacencyList}
 */
proto.compservice.model.protobuf.AdjacencyList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.compservice.model.protobuf.AdjacencyList;
  return proto.compservice.model.protobuf.AdjacencyList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.compservice.model.protobuf.AdjacencyList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.compservice.model.protobuf.AdjacencyList}
 */
proto.compservice.model.protobuf.AdjacencyList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRoot(value);
      break;
    case 2:
      var value = new proto.compservice.model.protobuf.AdjacencyListEntry;
      reader.readMessage(value,proto.compservice.model.protobuf.AdjacencyListEntry.deserializeBinaryFromReader);
      msg.addVertices(value);
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
proto.compservice.model.protobuf.AdjacencyList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.compservice.model.protobuf.AdjacencyList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.compservice.model.protobuf.AdjacencyList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.compservice.model.protobuf.AdjacencyList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRoot();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getVerticesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.compservice.model.protobuf.AdjacencyListEntry.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 root = 1;
 * @return {number}
 */
proto.compservice.model.protobuf.AdjacencyList.prototype.getRoot = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.compservice.model.protobuf.AdjacencyList} returns this
 */
proto.compservice.model.protobuf.AdjacencyList.prototype.setRoot = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated AdjacencyListEntry vertices = 2;
 * @return {!Array<!proto.compservice.model.protobuf.AdjacencyListEntry>}
 */
proto.compservice.model.protobuf.AdjacencyList.prototype.getVerticesList = function() {
  return /** @type{!Array<!proto.compservice.model.protobuf.AdjacencyListEntry>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.compservice.model.protobuf.AdjacencyListEntry, 2));
};


/**
 * @param {!Array<!proto.compservice.model.protobuf.AdjacencyListEntry>} value
 * @return {!proto.compservice.model.protobuf.AdjacencyList} returns this
*/
proto.compservice.model.protobuf.AdjacencyList.prototype.setVerticesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.compservice.model.protobuf.AdjacencyListEntry=} opt_value
 * @param {number=} opt_index
 * @return {!proto.compservice.model.protobuf.AdjacencyListEntry}
 */
proto.compservice.model.protobuf.AdjacencyList.prototype.addVertices = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.compservice.model.protobuf.AdjacencyListEntry, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.compservice.model.protobuf.AdjacencyList} returns this
 */
proto.compservice.model.protobuf.AdjacencyList.prototype.clearVerticesList = function() {
  return this.setVerticesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.compservice.model.protobuf.AdjacencyListEntry.repeatedFields_ = [2];



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
proto.compservice.model.protobuf.AdjacencyListEntry.prototype.toObject = function(opt_includeInstance) {
  return proto.compservice.model.protobuf.AdjacencyListEntry.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.compservice.model.protobuf.AdjacencyListEntry} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.compservice.model.protobuf.AdjacencyListEntry.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    childrenList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.compservice.model.protobuf.AdjacencyListEntry}
 */
proto.compservice.model.protobuf.AdjacencyListEntry.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.compservice.model.protobuf.AdjacencyListEntry;
  return proto.compservice.model.protobuf.AdjacencyListEntry.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.compservice.model.protobuf.AdjacencyListEntry} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.compservice.model.protobuf.AdjacencyListEntry}
 */
proto.compservice.model.protobuf.AdjacencyListEntry.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 2:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt32() : [reader.readInt32()]);
      for (var i = 0; i < values.length; i++) {
        msg.addChildren(values[i]);
      }
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
proto.compservice.model.protobuf.AdjacencyListEntry.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.compservice.model.protobuf.AdjacencyListEntry.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.compservice.model.protobuf.AdjacencyListEntry} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.compservice.model.protobuf.AdjacencyListEntry.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getChildrenList();
  if (f.length > 0) {
    writer.writePackedInt32(
      2,
      f
    );
  }
};


/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.compservice.model.protobuf.AdjacencyListEntry.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.compservice.model.protobuf.AdjacencyListEntry} returns this
 */
proto.compservice.model.protobuf.AdjacencyListEntry.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated int32 children = 2;
 * @return {!Array<number>}
 */
proto.compservice.model.protobuf.AdjacencyListEntry.prototype.getChildrenList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.compservice.model.protobuf.AdjacencyListEntry} returns this
 */
proto.compservice.model.protobuf.AdjacencyListEntry.prototype.setChildrenList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.compservice.model.protobuf.AdjacencyListEntry} returns this
 */
proto.compservice.model.protobuf.AdjacencyListEntry.prototype.addChildren = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.compservice.model.protobuf.AdjacencyListEntry} returns this
 */
proto.compservice.model.protobuf.AdjacencyListEntry.prototype.clearChildrenList = function() {
  return this.setChildrenList([]);
};





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
proto.compservice.model.protobuf.ManagedCompetition.prototype.toObject = function(opt_includeInstance) {
  return proto.compservice.model.protobuf.ManagedCompetition.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.compservice.model.protobuf.ManagedCompetition} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.compservice.model.protobuf.ManagedCompetition.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    competitionname: jspb.Message.getFieldWithDefault(msg, 2, ""),
    eventstopic: jspb.Message.getFieldWithDefault(msg, 3, ""),
    creatorid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    createdat: (f = msg.getCreatedat()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    startsat: (f = msg.getStartsat()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    endsat: (f = msg.getEndsat()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    timezone: jspb.Message.getFieldWithDefault(msg, 8, ""),
    status: jspb.Message.getFieldWithDefault(msg, 9, 0)
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
 * @return {!proto.compservice.model.protobuf.ManagedCompetition}
 */
proto.compservice.model.protobuf.ManagedCompetition.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.compservice.model.protobuf.ManagedCompetition;
  return proto.compservice.model.protobuf.ManagedCompetition.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.compservice.model.protobuf.ManagedCompetition} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.compservice.model.protobuf.ManagedCompetition}
 */
proto.compservice.model.protobuf.ManagedCompetition.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCompetitionname(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setEventstopic(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatorid(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedat(value);
      break;
    case 6:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setStartsat(value);
      break;
    case 7:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setEndsat(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setTimezone(value);
      break;
    case 9:
      var value = /** @type {!proto.compservice.model.protobuf.CompetitionStatus} */ (reader.readEnum());
      msg.setStatus(value);
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
proto.compservice.model.protobuf.ManagedCompetition.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.compservice.model.protobuf.ManagedCompetition.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.compservice.model.protobuf.ManagedCompetition} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.compservice.model.protobuf.ManagedCompetition.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getEventstopic();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getCreatedat();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getStartsat();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getEndsat();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getTimezone();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      9,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.compservice.model.protobuf.ManagedCompetition.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.compservice.model.protobuf.ManagedCompetition} returns this
 */
proto.compservice.model.protobuf.ManagedCompetition.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string competitionName = 2;
 * @return {string}
 */
proto.compservice.model.protobuf.ManagedCompetition.prototype.getCompetitionname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.compservice.model.protobuf.ManagedCompetition} returns this
 */
proto.compservice.model.protobuf.ManagedCompetition.prototype.setCompetitionname = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.compservice.model.protobuf.ManagedCompetition} returns this
 */
proto.compservice.model.protobuf.ManagedCompetition.prototype.clearCompetitionname = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.compservice.model.protobuf.ManagedCompetition.prototype.hasCompetitionname = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string eventsTopic = 3;
 * @return {string}
 */
proto.compservice.model.protobuf.ManagedCompetition.prototype.getEventstopic = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.compservice.model.protobuf.ManagedCompetition} returns this
 */
proto.compservice.model.protobuf.ManagedCompetition.prototype.setEventstopic = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string creatorId = 4;
 * @return {string}
 */
proto.compservice.model.protobuf.ManagedCompetition.prototype.getCreatorid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.compservice.model.protobuf.ManagedCompetition} returns this
 */
proto.compservice.model.protobuf.ManagedCompetition.prototype.setCreatorid = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.compservice.model.protobuf.ManagedCompetition} returns this
 */
proto.compservice.model.protobuf.ManagedCompetition.prototype.clearCreatorid = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.compservice.model.protobuf.ManagedCompetition.prototype.hasCreatorid = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.Timestamp createdAt = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.compservice.model.protobuf.ManagedCompetition.prototype.getCreatedat = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.compservice.model.protobuf.ManagedCompetition} returns this
*/
proto.compservice.model.protobuf.ManagedCompetition.prototype.setCreatedat = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.compservice.model.protobuf.ManagedCompetition} returns this
 */
proto.compservice.model.protobuf.ManagedCompetition.prototype.clearCreatedat = function() {
  return this.setCreatedat(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.compservice.model.protobuf.ManagedCompetition.prototype.hasCreatedat = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.Timestamp startsAt = 6;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.compservice.model.protobuf.ManagedCompetition.prototype.getStartsat = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 6));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.compservice.model.protobuf.ManagedCompetition} returns this
*/
proto.compservice.model.protobuf.ManagedCompetition.prototype.setStartsat = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.compservice.model.protobuf.ManagedCompetition} returns this
 */
proto.compservice.model.protobuf.ManagedCompetition.prototype.clearStartsat = function() {
  return this.setStartsat(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.compservice.model.protobuf.ManagedCompetition.prototype.hasStartsat = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional google.protobuf.Timestamp endsAt = 7;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.compservice.model.protobuf.ManagedCompetition.prototype.getEndsat = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 7));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.compservice.model.protobuf.ManagedCompetition} returns this
*/
proto.compservice.model.protobuf.ManagedCompetition.prototype.setEndsat = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.compservice.model.protobuf.ManagedCompetition} returns this
 */
proto.compservice.model.protobuf.ManagedCompetition.prototype.clearEndsat = function() {
  return this.setEndsat(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.compservice.model.protobuf.ManagedCompetition.prototype.hasEndsat = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string timeZone = 8;
 * @return {string}
 */
proto.compservice.model.protobuf.ManagedCompetition.prototype.getTimezone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.compservice.model.protobuf.ManagedCompetition} returns this
 */
proto.compservice.model.protobuf.ManagedCompetition.prototype.setTimezone = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional CompetitionStatus status = 9;
 * @return {!proto.compservice.model.protobuf.CompetitionStatus}
 */
proto.compservice.model.protobuf.ManagedCompetition.prototype.getStatus = function() {
  return /** @type {!proto.compservice.model.protobuf.CompetitionStatus} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {!proto.compservice.model.protobuf.CompetitionStatus} value
 * @return {!proto.compservice.model.protobuf.ManagedCompetition} returns this
 */
proto.compservice.model.protobuf.ManagedCompetition.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 9, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.compservice.model.protobuf.StageDescriptor.repeatedFields_ = [13];



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
proto.compservice.model.protobuf.StageDescriptor.prototype.toObject = function(opt_includeInstance) {
  return proto.compservice.model.protobuf.StageDescriptor.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.compservice.model.protobuf.StageDescriptor} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.compservice.model.protobuf.StageDescriptor.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    categoryid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    competitionid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    brackettype: jspb.Message.getFieldWithDefault(msg, 5, 0),
    stagetype: jspb.Message.getFieldWithDefault(msg, 6, 0),
    stagestatus: jspb.Message.getFieldWithDefault(msg, 7, 0),
    stageresultdescriptor: (f = msg.getStageresultdescriptor()) && proto.compservice.model.protobuf.StageResultDescriptor.toObject(includeInstance, f),
    inputdescriptor: (f = msg.getInputdescriptor()) && proto.compservice.model.protobuf.StageInputDescriptor.toObject(includeInstance, f),
    stageorder: jspb.Message.getFieldWithDefault(msg, 10, 0),
    waitforprevious: jspb.Message.getBooleanFieldWithDefault(msg, 11, false),
    hasthirdplacefight: jspb.Message.getBooleanFieldWithDefault(msg, 12, false),
    groupdescriptorsList: jspb.Message.toObjectList(msg.getGroupdescriptorsList(),
    proto.compservice.model.protobuf.GroupDescriptor.toObject, includeInstance),
    numberoffights: jspb.Message.getFieldWithDefault(msg, 14, 0),
    fightduration: jspb.Message.getFieldWithDefault(msg, 15, 0)
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
 * @return {!proto.compservice.model.protobuf.StageDescriptor}
 */
proto.compservice.model.protobuf.StageDescriptor.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.compservice.model.protobuf.StageDescriptor;
  return proto.compservice.model.protobuf.StageDescriptor.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.compservice.model.protobuf.StageDescriptor} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.compservice.model.protobuf.StageDescriptor}
 */
proto.compservice.model.protobuf.StageDescriptor.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCategoryid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setCompetitionid(value);
      break;
    case 5:
      var value = /** @type {!proto.compservice.model.protobuf.BracketType} */ (reader.readEnum());
      msg.setBrackettype(value);
      break;
    case 6:
      var value = /** @type {!proto.compservice.model.protobuf.StageType} */ (reader.readEnum());
      msg.setStagetype(value);
      break;
    case 7:
      var value = /** @type {!proto.compservice.model.protobuf.StageStatus} */ (reader.readEnum());
      msg.setStagestatus(value);
      break;
    case 8:
      var value = new proto.compservice.model.protobuf.StageResultDescriptor;
      reader.readMessage(value,proto.compservice.model.protobuf.StageResultDescriptor.deserializeBinaryFromReader);
      msg.setStageresultdescriptor(value);
      break;
    case 9:
      var value = new proto.compservice.model.protobuf.StageInputDescriptor;
      reader.readMessage(value,proto.compservice.model.protobuf.StageInputDescriptor.deserializeBinaryFromReader);
      msg.setInputdescriptor(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStageorder(value);
      break;
    case 11:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setWaitforprevious(value);
      break;
    case 12:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHasthirdplacefight(value);
      break;
    case 13:
      var value = new proto.compservice.model.protobuf.GroupDescriptor;
      reader.readMessage(value,proto.compservice.model.protobuf.GroupDescriptor.deserializeBinaryFromReader);
      msg.addGroupdescriptors(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNumberoffights(value);
      break;
    case 15:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setFightduration(value);
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
proto.compservice.model.protobuf.StageDescriptor.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.compservice.model.protobuf.StageDescriptor.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.compservice.model.protobuf.StageDescriptor} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.compservice.model.protobuf.StageDescriptor.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCategoryid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCompetitionid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getBrackettype();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getStagetype();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getStagestatus();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = message.getStageresultdescriptor();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.compservice.model.protobuf.StageResultDescriptor.serializeBinaryToWriter
    );
  }
  f = message.getInputdescriptor();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.compservice.model.protobuf.StageInputDescriptor.serializeBinaryToWriter
    );
  }
  f = message.getStageorder();
  if (f !== 0) {
    writer.writeInt32(
      10,
      f
    );
  }
  f = message.getWaitforprevious();
  if (f) {
    writer.writeBool(
      11,
      f
    );
  }
  f = message.getHasthirdplacefight();
  if (f) {
    writer.writeBool(
      12,
      f
    );
  }
  f = message.getGroupdescriptorsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      13,
      f,
      proto.compservice.model.protobuf.GroupDescriptor.serializeBinaryToWriter
    );
  }
  f = message.getNumberoffights();
  if (f !== 0) {
    writer.writeInt32(
      14,
      f
    );
  }
  f = message.getFightduration();
  if (f !== 0) {
    writer.writeInt32(
      15,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.compservice.model.protobuf.StageDescriptor.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.compservice.model.protobuf.StageDescriptor} returns this
 */
proto.compservice.model.protobuf.StageDescriptor.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.compservice.model.protobuf.StageDescriptor.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.compservice.model.protobuf.StageDescriptor} returns this
 */
proto.compservice.model.protobuf.StageDescriptor.prototype.setName = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.compservice.model.protobuf.StageDescriptor} returns this
 */
proto.compservice.model.protobuf.StageDescriptor.prototype.clearName = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.compservice.model.protobuf.StageDescriptor.prototype.hasName = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string categoryId = 3;
 * @return {string}
 */
proto.compservice.model.protobuf.StageDescriptor.prototype.getCategoryid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.compservice.model.protobuf.StageDescriptor} returns this
 */
proto.compservice.model.protobuf.StageDescriptor.prototype.setCategoryid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string competitionId = 4;
 * @return {string}
 */
proto.compservice.model.protobuf.StageDescriptor.prototype.getCompetitionid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.compservice.model.protobuf.StageDescriptor} returns this
 */
proto.compservice.model.protobuf.StageDescriptor.prototype.setCompetitionid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional BracketType bracketType = 5;
 * @return {!proto.compservice.model.protobuf.BracketType}
 */
proto.compservice.model.protobuf.StageDescriptor.prototype.getBrackettype = function() {
  return /** @type {!proto.compservice.model.protobuf.BracketType} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.compservice.model.protobuf.BracketType} value
 * @return {!proto.compservice.model.protobuf.StageDescriptor} returns this
 */
proto.compservice.model.protobuf.StageDescriptor.prototype.setBrackettype = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional StageType stageType = 6;
 * @return {!proto.compservice.model.protobuf.StageType}
 */
proto.compservice.model.protobuf.StageDescriptor.prototype.getStagetype = function() {
  return /** @type {!proto.compservice.model.protobuf.StageType} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.compservice.model.protobuf.StageType} value
 * @return {!proto.compservice.model.protobuf.StageDescriptor} returns this
 */
proto.compservice.model.protobuf.StageDescriptor.prototype.setStagetype = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * optional StageStatus stageStatus = 7;
 * @return {!proto.compservice.model.protobuf.StageStatus}
 */
proto.compservice.model.protobuf.StageDescriptor.prototype.getStagestatus = function() {
  return /** @type {!proto.compservice.model.protobuf.StageStatus} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.compservice.model.protobuf.StageStatus} value
 * @return {!proto.compservice.model.protobuf.StageDescriptor} returns this
 */
proto.compservice.model.protobuf.StageDescriptor.prototype.setStagestatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 7, value);
};


/**
 * optional StageResultDescriptor stageResultDescriptor = 8;
 * @return {?proto.compservice.model.protobuf.StageResultDescriptor}
 */
proto.compservice.model.protobuf.StageDescriptor.prototype.getStageresultdescriptor = function() {
  return /** @type{?proto.compservice.model.protobuf.StageResultDescriptor} */ (
    jspb.Message.getWrapperField(this, proto.compservice.model.protobuf.StageResultDescriptor, 8));
};


/**
 * @param {?proto.compservice.model.protobuf.StageResultDescriptor|undefined} value
 * @return {!proto.compservice.model.protobuf.StageDescriptor} returns this
*/
proto.compservice.model.protobuf.StageDescriptor.prototype.setStageresultdescriptor = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.compservice.model.protobuf.StageDescriptor} returns this
 */
proto.compservice.model.protobuf.StageDescriptor.prototype.clearStageresultdescriptor = function() {
  return this.setStageresultdescriptor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.compservice.model.protobuf.StageDescriptor.prototype.hasStageresultdescriptor = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional StageInputDescriptor inputDescriptor = 9;
 * @return {?proto.compservice.model.protobuf.StageInputDescriptor}
 */
proto.compservice.model.protobuf.StageDescriptor.prototype.getInputdescriptor = function() {
  return /** @type{?proto.compservice.model.protobuf.StageInputDescriptor} */ (
    jspb.Message.getWrapperField(this, proto.compservice.model.protobuf.StageInputDescriptor, 9));
};


/**
 * @param {?proto.compservice.model.protobuf.StageInputDescriptor|undefined} value
 * @return {!proto.compservice.model.protobuf.StageDescriptor} returns this
*/
proto.compservice.model.protobuf.StageDescriptor.prototype.setInputdescriptor = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.compservice.model.protobuf.StageDescriptor} returns this
 */
proto.compservice.model.protobuf.StageDescriptor.prototype.clearInputdescriptor = function() {
  return this.setInputdescriptor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.compservice.model.protobuf.StageDescriptor.prototype.hasInputdescriptor = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional int32 stageOrder = 10;
 * @return {number}
 */
proto.compservice.model.protobuf.StageDescriptor.prototype.getStageorder = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.compservice.model.protobuf.StageDescriptor} returns this
 */
proto.compservice.model.protobuf.StageDescriptor.prototype.setStageorder = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional bool waitForPrevious = 11;
 * @return {boolean}
 */
proto.compservice.model.protobuf.StageDescriptor.prototype.getWaitforprevious = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 11, false));
};


/**
 * @param {boolean} value
 * @return {!proto.compservice.model.protobuf.StageDescriptor} returns this
 */
proto.compservice.model.protobuf.StageDescriptor.prototype.setWaitforprevious = function(value) {
  return jspb.Message.setProto3BooleanField(this, 11, value);
};


/**
 * optional bool hasThirdPlaceFight = 12;
 * @return {boolean}
 */
proto.compservice.model.protobuf.StageDescriptor.prototype.getHasthirdplacefight = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 12, false));
};


/**
 * @param {boolean} value
 * @return {!proto.compservice.model.protobuf.StageDescriptor} returns this
 */
proto.compservice.model.protobuf.StageDescriptor.prototype.setHasthirdplacefight = function(value) {
  return jspb.Message.setProto3BooleanField(this, 12, value);
};


/**
 * repeated GroupDescriptor groupDescriptors = 13;
 * @return {!Array<!proto.compservice.model.protobuf.GroupDescriptor>}
 */
proto.compservice.model.protobuf.StageDescriptor.prototype.getGroupdescriptorsList = function() {
  return /** @type{!Array<!proto.compservice.model.protobuf.GroupDescriptor>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.compservice.model.protobuf.GroupDescriptor, 13));
};


/**
 * @param {!Array<!proto.compservice.model.protobuf.GroupDescriptor>} value
 * @return {!proto.compservice.model.protobuf.StageDescriptor} returns this
*/
proto.compservice.model.protobuf.StageDescriptor.prototype.setGroupdescriptorsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 13, value);
};


/**
 * @param {!proto.compservice.model.protobuf.GroupDescriptor=} opt_value
 * @param {number=} opt_index
 * @return {!proto.compservice.model.protobuf.GroupDescriptor}
 */
proto.compservice.model.protobuf.StageDescriptor.prototype.addGroupdescriptors = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 13, opt_value, proto.compservice.model.protobuf.GroupDescriptor, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.compservice.model.protobuf.StageDescriptor} returns this
 */
proto.compservice.model.protobuf.StageDescriptor.prototype.clearGroupdescriptorsList = function() {
  return this.setGroupdescriptorsList([]);
};


/**
 * optional int32 numberOfFights = 14;
 * @return {number}
 */
proto.compservice.model.protobuf.StageDescriptor.prototype.getNumberoffights = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {number} value
 * @return {!proto.compservice.model.protobuf.StageDescriptor} returns this
 */
proto.compservice.model.protobuf.StageDescriptor.prototype.setNumberoffights = function(value) {
  return jspb.Message.setProto3IntField(this, 14, value);
};


/**
 * optional int32 fightDuration = 15;
 * @return {number}
 */
proto.compservice.model.protobuf.StageDescriptor.prototype.getFightduration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/**
 * @param {number} value
 * @return {!proto.compservice.model.protobuf.StageDescriptor} returns this
 */
proto.compservice.model.protobuf.StageDescriptor.prototype.setFightduration = function(value) {
  return jspb.Message.setProto3IntField(this, 15, value);
};





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
proto.compservice.model.protobuf.GroupDescriptor.prototype.toObject = function(opt_includeInstance) {
  return proto.compservice.model.protobuf.GroupDescriptor.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.compservice.model.protobuf.GroupDescriptor} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.compservice.model.protobuf.GroupDescriptor.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    size: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.compservice.model.protobuf.GroupDescriptor}
 */
proto.compservice.model.protobuf.GroupDescriptor.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.compservice.model.protobuf.GroupDescriptor;
  return proto.compservice.model.protobuf.GroupDescriptor.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.compservice.model.protobuf.GroupDescriptor} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.compservice.model.protobuf.GroupDescriptor}
 */
proto.compservice.model.protobuf.GroupDescriptor.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSize(value);
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
proto.compservice.model.protobuf.GroupDescriptor.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.compservice.model.protobuf.GroupDescriptor.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.compservice.model.protobuf.GroupDescriptor} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.compservice.model.protobuf.GroupDescriptor.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSize();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.compservice.model.protobuf.GroupDescriptor.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.compservice.model.protobuf.GroupDescriptor} returns this
 */
proto.compservice.model.protobuf.GroupDescriptor.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.compservice.model.protobuf.GroupDescriptor.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.compservice.model.protobuf.GroupDescriptor} returns this
 */
proto.compservice.model.protobuf.GroupDescriptor.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 size = 3;
 * @return {number}
 */
proto.compservice.model.protobuf.GroupDescriptor.prototype.getSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.compservice.model.protobuf.GroupDescriptor} returns this
 */
proto.compservice.model.protobuf.GroupDescriptor.prototype.setSize = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.compservice.model.protobuf.StageInputDescriptor.repeatedFields_ = [2];



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
proto.compservice.model.protobuf.StageInputDescriptor.prototype.toObject = function(opt_includeInstance) {
  return proto.compservice.model.protobuf.StageInputDescriptor.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.compservice.model.protobuf.StageInputDescriptor} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.compservice.model.protobuf.StageInputDescriptor.toObject = function(includeInstance, msg) {
  var f, obj = {
    numberofcompetitors: jspb.Message.getFieldWithDefault(msg, 1, 0),
    selectorsList: jspb.Message.toObjectList(msg.getSelectorsList(),
    proto.compservice.model.protobuf.CompetitorSelector.toObject, includeInstance),
    distributiontype: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.compservice.model.protobuf.StageInputDescriptor}
 */
proto.compservice.model.protobuf.StageInputDescriptor.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.compservice.model.protobuf.StageInputDescriptor;
  return proto.compservice.model.protobuf.StageInputDescriptor.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.compservice.model.protobuf.StageInputDescriptor} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.compservice.model.protobuf.StageInputDescriptor}
 */
proto.compservice.model.protobuf.StageInputDescriptor.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNumberofcompetitors(value);
      break;
    case 2:
      var value = new proto.compservice.model.protobuf.CompetitorSelector;
      reader.readMessage(value,proto.compservice.model.protobuf.CompetitorSelector.deserializeBinaryFromReader);
      msg.addSelectors(value);
      break;
    case 3:
      var value = /** @type {!proto.compservice.model.protobuf.DistributionType} */ (reader.readEnum());
      msg.setDistributiontype(value);
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
proto.compservice.model.protobuf.StageInputDescriptor.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.compservice.model.protobuf.StageInputDescriptor.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.compservice.model.protobuf.StageInputDescriptor} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.compservice.model.protobuf.StageInputDescriptor.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNumberofcompetitors();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getSelectorsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.compservice.model.protobuf.CompetitorSelector.serializeBinaryToWriter
    );
  }
  f = message.getDistributiontype();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * optional int32 numberOfCompetitors = 1;
 * @return {number}
 */
proto.compservice.model.protobuf.StageInputDescriptor.prototype.getNumberofcompetitors = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.compservice.model.protobuf.StageInputDescriptor} returns this
 */
proto.compservice.model.protobuf.StageInputDescriptor.prototype.setNumberofcompetitors = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated CompetitorSelector selectors = 2;
 * @return {!Array<!proto.compservice.model.protobuf.CompetitorSelector>}
 */
proto.compservice.model.protobuf.StageInputDescriptor.prototype.getSelectorsList = function() {
  return /** @type{!Array<!proto.compservice.model.protobuf.CompetitorSelector>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.compservice.model.protobuf.CompetitorSelector, 2));
};


/**
 * @param {!Array<!proto.compservice.model.protobuf.CompetitorSelector>} value
 * @return {!proto.compservice.model.protobuf.StageInputDescriptor} returns this
*/
proto.compservice.model.protobuf.StageInputDescriptor.prototype.setSelectorsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.compservice.model.protobuf.CompetitorSelector=} opt_value
 * @param {number=} opt_index
 * @return {!proto.compservice.model.protobuf.CompetitorSelector}
 */
proto.compservice.model.protobuf.StageInputDescriptor.prototype.addSelectors = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.compservice.model.protobuf.CompetitorSelector, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.compservice.model.protobuf.StageInputDescriptor} returns this
 */
proto.compservice.model.protobuf.StageInputDescriptor.prototype.clearSelectorsList = function() {
  return this.setSelectorsList([]);
};


/**
 * optional DistributionType distributionType = 3;
 * @return {!proto.compservice.model.protobuf.DistributionType}
 */
proto.compservice.model.protobuf.StageInputDescriptor.prototype.getDistributiontype = function() {
  return /** @type {!proto.compservice.model.protobuf.DistributionType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.compservice.model.protobuf.DistributionType} value
 * @return {!proto.compservice.model.protobuf.StageInputDescriptor} returns this
 */
proto.compservice.model.protobuf.StageInputDescriptor.prototype.setDistributiontype = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.compservice.model.protobuf.CompetitorSelector.repeatedFields_ = [7];



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
proto.compservice.model.protobuf.CompetitorSelector.prototype.toObject = function(opt_includeInstance) {
  return proto.compservice.model.protobuf.CompetitorSelector.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.compservice.model.protobuf.CompetitorSelector} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.compservice.model.protobuf.CompetitorSelector.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    applytostageid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    logicaloperator: jspb.Message.getFieldWithDefault(msg, 4, 0),
    classifier: jspb.Message.getFieldWithDefault(msg, 5, 0),
    operator: jspb.Message.getFieldWithDefault(msg, 6, 0),
    selectorvalueList: (f = jspb.Message.getRepeatedField(msg, 7)) == null ? undefined : f
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
 * @return {!proto.compservice.model.protobuf.CompetitorSelector}
 */
proto.compservice.model.protobuf.CompetitorSelector.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.compservice.model.protobuf.CompetitorSelector;
  return proto.compservice.model.protobuf.CompetitorSelector.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.compservice.model.protobuf.CompetitorSelector} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.compservice.model.protobuf.CompetitorSelector}
 */
proto.compservice.model.protobuf.CompetitorSelector.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setApplytostageid(value);
      break;
    case 4:
      var value = /** @type {!proto.compservice.model.protobuf.LogicalOperator} */ (reader.readEnum());
      msg.setLogicaloperator(value);
      break;
    case 5:
      var value = /** @type {!proto.compservice.model.protobuf.SelectorClassifier} */ (reader.readEnum());
      msg.setClassifier(value);
      break;
    case 6:
      var value = /** @type {!proto.compservice.model.protobuf.OperatorType} */ (reader.readEnum());
      msg.setOperator(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.addSelectorvalue(value);
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
proto.compservice.model.protobuf.CompetitorSelector.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.compservice.model.protobuf.CompetitorSelector.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.compservice.model.protobuf.CompetitorSelector} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.compservice.model.protobuf.CompetitorSelector.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getApplytostageid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLogicaloperator();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getClassifier();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getOperator();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getSelectorvalueList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      7,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.compservice.model.protobuf.CompetitorSelector.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.compservice.model.protobuf.CompetitorSelector} returns this
 */
proto.compservice.model.protobuf.CompetitorSelector.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string applyToStageId = 2;
 * @return {string}
 */
proto.compservice.model.protobuf.CompetitorSelector.prototype.getApplytostageid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.compservice.model.protobuf.CompetitorSelector} returns this
 */
proto.compservice.model.protobuf.CompetitorSelector.prototype.setApplytostageid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional LogicalOperator logicalOperator = 4;
 * @return {!proto.compservice.model.protobuf.LogicalOperator}
 */
proto.compservice.model.protobuf.CompetitorSelector.prototype.getLogicaloperator = function() {
  return /** @type {!proto.compservice.model.protobuf.LogicalOperator} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.compservice.model.protobuf.LogicalOperator} value
 * @return {!proto.compservice.model.protobuf.CompetitorSelector} returns this
 */
proto.compservice.model.protobuf.CompetitorSelector.prototype.setLogicaloperator = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional SelectorClassifier classifier = 5;
 * @return {!proto.compservice.model.protobuf.SelectorClassifier}
 */
proto.compservice.model.protobuf.CompetitorSelector.prototype.getClassifier = function() {
  return /** @type {!proto.compservice.model.protobuf.SelectorClassifier} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.compservice.model.protobuf.SelectorClassifier} value
 * @return {!proto.compservice.model.protobuf.CompetitorSelector} returns this
 */
proto.compservice.model.protobuf.CompetitorSelector.prototype.setClassifier = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional OperatorType operator = 6;
 * @return {!proto.compservice.model.protobuf.OperatorType}
 */
proto.compservice.model.protobuf.CompetitorSelector.prototype.getOperator = function() {
  return /** @type {!proto.compservice.model.protobuf.OperatorType} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.compservice.model.protobuf.OperatorType} value
 * @return {!proto.compservice.model.protobuf.CompetitorSelector} returns this
 */
proto.compservice.model.protobuf.CompetitorSelector.prototype.setOperator = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * repeated string selectorValue = 7;
 * @return {!Array<string>}
 */
proto.compservice.model.protobuf.CompetitorSelector.prototype.getSelectorvalueList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 7));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.compservice.model.protobuf.CompetitorSelector} returns this
 */
proto.compservice.model.protobuf.CompetitorSelector.prototype.setSelectorvalueList = function(value) {
  return jspb.Message.setField(this, 7, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.compservice.model.protobuf.CompetitorSelector} returns this
 */
proto.compservice.model.protobuf.CompetitorSelector.prototype.addSelectorvalue = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 7, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.compservice.model.protobuf.CompetitorSelector} returns this
 */
proto.compservice.model.protobuf.CompetitorSelector.prototype.clearSelectorvalueList = function() {
  return this.setSelectorvalueList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.compservice.model.protobuf.StageResultDescriptor.repeatedFields_ = [4,5,6];



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
proto.compservice.model.protobuf.StageResultDescriptor.prototype.toObject = function(opt_includeInstance) {
  return proto.compservice.model.protobuf.StageResultDescriptor.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.compservice.model.protobuf.StageResultDescriptor} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.compservice.model.protobuf.StageResultDescriptor.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    forcemanualassignment: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    outputsize: jspb.Message.getFieldWithDefault(msg, 3, 0),
    fightresultoptionsList: jspb.Message.toObjectList(msg.getFightresultoptionsList(),
    proto.compservice.model.protobuf.FightResultOption.toObject, includeInstance),
    competitorresultsList: jspb.Message.toObjectList(msg.getCompetitorresultsList(),
    proto.compservice.model.protobuf.CompetitorStageResult.toObject, includeInstance),
    additionalgroupsortingdescriptorsList: jspb.Message.toObjectList(msg.getAdditionalgroupsortingdescriptorsList(),
    proto.compservice.model.protobuf.AdditionalGroupSortingDescriptor.toObject, includeInstance)
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
 * @return {!proto.compservice.model.protobuf.StageResultDescriptor}
 */
proto.compservice.model.protobuf.StageResultDescriptor.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.compservice.model.protobuf.StageResultDescriptor;
  return proto.compservice.model.protobuf.StageResultDescriptor.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.compservice.model.protobuf.StageResultDescriptor} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.compservice.model.protobuf.StageResultDescriptor}
 */
proto.compservice.model.protobuf.StageResultDescriptor.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setForcemanualassignment(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setOutputsize(value);
      break;
    case 4:
      var value = new proto.compservice.model.protobuf.FightResultOption;
      reader.readMessage(value,proto.compservice.model.protobuf.FightResultOption.deserializeBinaryFromReader);
      msg.addFightresultoptions(value);
      break;
    case 5:
      var value = new proto.compservice.model.protobuf.CompetitorStageResult;
      reader.readMessage(value,proto.compservice.model.protobuf.CompetitorStageResult.deserializeBinaryFromReader);
      msg.addCompetitorresults(value);
      break;
    case 6:
      var value = new proto.compservice.model.protobuf.AdditionalGroupSortingDescriptor;
      reader.readMessage(value,proto.compservice.model.protobuf.AdditionalGroupSortingDescriptor.deserializeBinaryFromReader);
      msg.addAdditionalgroupsortingdescriptors(value);
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
proto.compservice.model.protobuf.StageResultDescriptor.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.compservice.model.protobuf.StageResultDescriptor.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.compservice.model.protobuf.StageResultDescriptor} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.compservice.model.protobuf.StageResultDescriptor.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getForcemanualassignment();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getFightresultoptionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.compservice.model.protobuf.FightResultOption.serializeBinaryToWriter
    );
  }
  f = message.getCompetitorresultsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.compservice.model.protobuf.CompetitorStageResult.serializeBinaryToWriter
    );
  }
  f = message.getAdditionalgroupsortingdescriptorsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.compservice.model.protobuf.AdditionalGroupSortingDescriptor.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.compservice.model.protobuf.StageResultDescriptor.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.compservice.model.protobuf.StageResultDescriptor} returns this
 */
proto.compservice.model.protobuf.StageResultDescriptor.prototype.setName = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.compservice.model.protobuf.StageResultDescriptor} returns this
 */
proto.compservice.model.protobuf.StageResultDescriptor.prototype.clearName = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.compservice.model.protobuf.StageResultDescriptor.prototype.hasName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool forceManualAssignment = 2;
 * @return {boolean}
 */
proto.compservice.model.protobuf.StageResultDescriptor.prototype.getForcemanualassignment = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.compservice.model.protobuf.StageResultDescriptor} returns this
 */
proto.compservice.model.protobuf.StageResultDescriptor.prototype.setForcemanualassignment = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional int32 outputSize = 3;
 * @return {number}
 */
proto.compservice.model.protobuf.StageResultDescriptor.prototype.getOutputsize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.compservice.model.protobuf.StageResultDescriptor} returns this
 */
proto.compservice.model.protobuf.StageResultDescriptor.prototype.setOutputsize = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.compservice.model.protobuf.StageResultDescriptor} returns this
 */
proto.compservice.model.protobuf.StageResultDescriptor.prototype.clearOutputsize = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.compservice.model.protobuf.StageResultDescriptor.prototype.hasOutputsize = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated FightResultOption fightResultOptions = 4;
 * @return {!Array<!proto.compservice.model.protobuf.FightResultOption>}
 */
proto.compservice.model.protobuf.StageResultDescriptor.prototype.getFightresultoptionsList = function() {
  return /** @type{!Array<!proto.compservice.model.protobuf.FightResultOption>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.compservice.model.protobuf.FightResultOption, 4));
};


/**
 * @param {!Array<!proto.compservice.model.protobuf.FightResultOption>} value
 * @return {!proto.compservice.model.protobuf.StageResultDescriptor} returns this
*/
proto.compservice.model.protobuf.StageResultDescriptor.prototype.setFightresultoptionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.compservice.model.protobuf.FightResultOption=} opt_value
 * @param {number=} opt_index
 * @return {!proto.compservice.model.protobuf.FightResultOption}
 */
proto.compservice.model.protobuf.StageResultDescriptor.prototype.addFightresultoptions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.compservice.model.protobuf.FightResultOption, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.compservice.model.protobuf.StageResultDescriptor} returns this
 */
proto.compservice.model.protobuf.StageResultDescriptor.prototype.clearFightresultoptionsList = function() {
  return this.setFightresultoptionsList([]);
};


/**
 * repeated CompetitorStageResult competitorResults = 5;
 * @return {!Array<!proto.compservice.model.protobuf.CompetitorStageResult>}
 */
proto.compservice.model.protobuf.StageResultDescriptor.prototype.getCompetitorresultsList = function() {
  return /** @type{!Array<!proto.compservice.model.protobuf.CompetitorStageResult>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.compservice.model.protobuf.CompetitorStageResult, 5));
};


/**
 * @param {!Array<!proto.compservice.model.protobuf.CompetitorStageResult>} value
 * @return {!proto.compservice.model.protobuf.StageResultDescriptor} returns this
*/
proto.compservice.model.protobuf.StageResultDescriptor.prototype.setCompetitorresultsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.compservice.model.protobuf.CompetitorStageResult=} opt_value
 * @param {number=} opt_index
 * @return {!proto.compservice.model.protobuf.CompetitorStageResult}
 */
proto.compservice.model.protobuf.StageResultDescriptor.prototype.addCompetitorresults = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.compservice.model.protobuf.CompetitorStageResult, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.compservice.model.protobuf.StageResultDescriptor} returns this
 */
proto.compservice.model.protobuf.StageResultDescriptor.prototype.clearCompetitorresultsList = function() {
  return this.setCompetitorresultsList([]);
};


/**
 * repeated AdditionalGroupSortingDescriptor additionalGroupSortingDescriptors = 6;
 * @return {!Array<!proto.compservice.model.protobuf.AdditionalGroupSortingDescriptor>}
 */
proto.compservice.model.protobuf.StageResultDescriptor.prototype.getAdditionalgroupsortingdescriptorsList = function() {
  return /** @type{!Array<!proto.compservice.model.protobuf.AdditionalGroupSortingDescriptor>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.compservice.model.protobuf.AdditionalGroupSortingDescriptor, 6));
};


/**
 * @param {!Array<!proto.compservice.model.protobuf.AdditionalGroupSortingDescriptor>} value
 * @return {!proto.compservice.model.protobuf.StageResultDescriptor} returns this
*/
proto.compservice.model.protobuf.StageResultDescriptor.prototype.setAdditionalgroupsortingdescriptorsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.compservice.model.protobuf.AdditionalGroupSortingDescriptor=} opt_value
 * @param {number=} opt_index
 * @return {!proto.compservice.model.protobuf.AdditionalGroupSortingDescriptor}
 */
proto.compservice.model.protobuf.StageResultDescriptor.prototype.addAdditionalgroupsortingdescriptors = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.compservice.model.protobuf.AdditionalGroupSortingDescriptor, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.compservice.model.protobuf.StageResultDescriptor} returns this
 */
proto.compservice.model.protobuf.StageResultDescriptor.prototype.clearAdditionalgroupsortingdescriptorsList = function() {
  return this.setAdditionalgroupsortingdescriptorsList([]);
};





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
proto.compservice.model.protobuf.AdditionalGroupSortingDescriptor.prototype.toObject = function(opt_includeInstance) {
  return proto.compservice.model.protobuf.AdditionalGroupSortingDescriptor.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.compservice.model.protobuf.AdditionalGroupSortingDescriptor} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.compservice.model.protobuf.AdditionalGroupSortingDescriptor.toObject = function(includeInstance, msg) {
  var f, obj = {
    groupsortdirection: jspb.Message.getFieldWithDefault(msg, 1, 0),
    groupsortspecifier: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.compservice.model.protobuf.AdditionalGroupSortingDescriptor}
 */
proto.compservice.model.protobuf.AdditionalGroupSortingDescriptor.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.compservice.model.protobuf.AdditionalGroupSortingDescriptor;
  return proto.compservice.model.protobuf.AdditionalGroupSortingDescriptor.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.compservice.model.protobuf.AdditionalGroupSortingDescriptor} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.compservice.model.protobuf.AdditionalGroupSortingDescriptor}
 */
proto.compservice.model.protobuf.AdditionalGroupSortingDescriptor.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.compservice.model.protobuf.GroupSortDirection} */ (reader.readEnum());
      msg.setGroupsortdirection(value);
      break;
    case 2:
      var value = /** @type {!proto.compservice.model.protobuf.GroupSortSpecifier} */ (reader.readEnum());
      msg.setGroupsortspecifier(value);
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
proto.compservice.model.protobuf.AdditionalGroupSortingDescriptor.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.compservice.model.protobuf.AdditionalGroupSortingDescriptor.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.compservice.model.protobuf.AdditionalGroupSortingDescriptor} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.compservice.model.protobuf.AdditionalGroupSortingDescriptor.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGroupsortdirection();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getGroupsortspecifier();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional GroupSortDirection groupSortDirection = 1;
 * @return {!proto.compservice.model.protobuf.GroupSortDirection}
 */
proto.compservice.model.protobuf.AdditionalGroupSortingDescriptor.prototype.getGroupsortdirection = function() {
  return /** @type {!proto.compservice.model.protobuf.GroupSortDirection} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.compservice.model.protobuf.GroupSortDirection} value
 * @return {!proto.compservice.model.protobuf.AdditionalGroupSortingDescriptor} returns this
 */
proto.compservice.model.protobuf.AdditionalGroupSortingDescriptor.prototype.setGroupsortdirection = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional GroupSortSpecifier groupSortSpecifier = 2;
 * @return {!proto.compservice.model.protobuf.GroupSortSpecifier}
 */
proto.compservice.model.protobuf.AdditionalGroupSortingDescriptor.prototype.getGroupsortspecifier = function() {
  return /** @type {!proto.compservice.model.protobuf.GroupSortSpecifier} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.compservice.model.protobuf.GroupSortSpecifier} value
 * @return {!proto.compservice.model.protobuf.AdditionalGroupSortingDescriptor} returns this
 */
proto.compservice.model.protobuf.AdditionalGroupSortingDescriptor.prototype.setGroupsortspecifier = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};





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
proto.compservice.model.protobuf.CompetitorStageResult.prototype.toObject = function(opt_includeInstance) {
  return proto.compservice.model.protobuf.CompetitorStageResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.compservice.model.protobuf.CompetitorStageResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.compservice.model.protobuf.CompetitorStageResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    competitorid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    points: jspb.Message.getFieldWithDefault(msg, 2, 0),
    round: jspb.Message.getFieldWithDefault(msg, 3, 0),
    roundtype: jspb.Message.getFieldWithDefault(msg, 4, 0),
    place: jspb.Message.getFieldWithDefault(msg, 5, 0),
    stageid: jspb.Message.getFieldWithDefault(msg, 6, ""),
    groupid: jspb.Message.getFieldWithDefault(msg, 7, ""),
    conflicting: jspb.Message.getBooleanFieldWithDefault(msg, 8, false)
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
 * @return {!proto.compservice.model.protobuf.CompetitorStageResult}
 */
proto.compservice.model.protobuf.CompetitorStageResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.compservice.model.protobuf.CompetitorStageResult;
  return proto.compservice.model.protobuf.CompetitorStageResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.compservice.model.protobuf.CompetitorStageResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.compservice.model.protobuf.CompetitorStageResult}
 */
proto.compservice.model.protobuf.CompetitorStageResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCompetitorid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPoints(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRound(value);
      break;
    case 4:
      var value = /** @type {!proto.compservice.model.protobuf.StageRoundType} */ (reader.readEnum());
      msg.setRoundtype(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPlace(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setStageid(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setGroupid(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setConflicting(value);
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
proto.compservice.model.protobuf.CompetitorStageResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.compservice.model.protobuf.CompetitorStageResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.compservice.model.protobuf.CompetitorStageResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.compservice.model.protobuf.CompetitorStageResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCompetitorid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getRoundtype();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getStageid();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getConflicting();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
};


/**
 * optional string competitorId = 1;
 * @return {string}
 */
proto.compservice.model.protobuf.CompetitorStageResult.prototype.getCompetitorid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.compservice.model.protobuf.CompetitorStageResult} returns this
 */
proto.compservice.model.protobuf.CompetitorStageResult.prototype.setCompetitorid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 points = 2;
 * @return {number}
 */
proto.compservice.model.protobuf.CompetitorStageResult.prototype.getPoints = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.compservice.model.protobuf.CompetitorStageResult} returns this
 */
proto.compservice.model.protobuf.CompetitorStageResult.prototype.setPoints = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.compservice.model.protobuf.CompetitorStageResult} returns this
 */
proto.compservice.model.protobuf.CompetitorStageResult.prototype.clearPoints = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.compservice.model.protobuf.CompetitorStageResult.prototype.hasPoints = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 round = 3;
 * @return {number}
 */
proto.compservice.model.protobuf.CompetitorStageResult.prototype.getRound = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.compservice.model.protobuf.CompetitorStageResult} returns this
 */
proto.compservice.model.protobuf.CompetitorStageResult.prototype.setRound = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.compservice.model.protobuf.CompetitorStageResult} returns this
 */
proto.compservice.model.protobuf.CompetitorStageResult.prototype.clearRound = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.compservice.model.protobuf.CompetitorStageResult.prototype.hasRound = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional StageRoundType roundType = 4;
 * @return {!proto.compservice.model.protobuf.StageRoundType}
 */
proto.compservice.model.protobuf.CompetitorStageResult.prototype.getRoundtype = function() {
  return /** @type {!proto.compservice.model.protobuf.StageRoundType} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.compservice.model.protobuf.StageRoundType} value
 * @return {!proto.compservice.model.protobuf.CompetitorStageResult} returns this
 */
proto.compservice.model.protobuf.CompetitorStageResult.prototype.setRoundtype = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional int32 place = 5;
 * @return {number}
 */
proto.compservice.model.protobuf.CompetitorStageResult.prototype.getPlace = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.compservice.model.protobuf.CompetitorStageResult} returns this
 */
proto.compservice.model.protobuf.CompetitorStageResult.prototype.setPlace = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.compservice.model.protobuf.CompetitorStageResult} returns this
 */
proto.compservice.model.protobuf.CompetitorStageResult.prototype.clearPlace = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.compservice.model.protobuf.CompetitorStageResult.prototype.hasPlace = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string stageId = 6;
 * @return {string}
 */
proto.compservice.model.protobuf.CompetitorStageResult.prototype.getStageid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.compservice.model.protobuf.CompetitorStageResult} returns this
 */
proto.compservice.model.protobuf.CompetitorStageResult.prototype.setStageid = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string groupId = 7;
 * @return {string}
 */
proto.compservice.model.protobuf.CompetitorStageResult.prototype.getGroupid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.compservice.model.protobuf.CompetitorStageResult} returns this
 */
proto.compservice.model.protobuf.CompetitorStageResult.prototype.setGroupid = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.compservice.model.protobuf.CompetitorStageResult} returns this
 */
proto.compservice.model.protobuf.CompetitorStageResult.prototype.clearGroupid = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.compservice.model.protobuf.CompetitorStageResult.prototype.hasGroupid = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional bool conflicting = 8;
 * @return {boolean}
 */
proto.compservice.model.protobuf.CompetitorStageResult.prototype.getConflicting = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.compservice.model.protobuf.CompetitorStageResult} returns this
 */
proto.compservice.model.protobuf.CompetitorStageResult.prototype.setConflicting = function(value) {
  return jspb.Message.setProto3BooleanField(this, 8, value);
};





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
proto.compservice.model.protobuf.FightResultOption.prototype.toObject = function(opt_includeInstance) {
  return proto.compservice.model.protobuf.FightResultOption.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.compservice.model.protobuf.FightResultOption} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.compservice.model.protobuf.FightResultOption.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    description: jspb.Message.getFieldWithDefault(msg, 2, ""),
    shortname: jspb.Message.getFieldWithDefault(msg, 3, ""),
    draw: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    winnerpoints: jspb.Message.getFieldWithDefault(msg, 5, 0),
    winneradditionalpoints: jspb.Message.getFieldWithDefault(msg, 6, 0),
    loserpoints: jspb.Message.getFieldWithDefault(msg, 7, 0),
    loseradditionalpoints: jspb.Message.getFieldWithDefault(msg, 8, 0)
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
 * @return {!proto.compservice.model.protobuf.FightResultOption}
 */
proto.compservice.model.protobuf.FightResultOption.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.compservice.model.protobuf.FightResultOption;
  return proto.compservice.model.protobuf.FightResultOption.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.compservice.model.protobuf.FightResultOption} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.compservice.model.protobuf.FightResultOption}
 */
proto.compservice.model.protobuf.FightResultOption.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setShortname(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDraw(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setWinnerpoints(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setWinneradditionalpoints(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLoserpoints(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLoseradditionalpoints(value);
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
proto.compservice.model.protobuf.FightResultOption.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.compservice.model.protobuf.FightResultOption.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.compservice.model.protobuf.FightResultOption} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.compservice.model.protobuf.FightResultOption.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getShortname();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDraw();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getWinnerpoints();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getLoserpoints();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeInt32(
      8,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.compservice.model.protobuf.FightResultOption.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.compservice.model.protobuf.FightResultOption} returns this
 */
proto.compservice.model.protobuf.FightResultOption.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.compservice.model.protobuf.FightResultOption.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.compservice.model.protobuf.FightResultOption} returns this
 */
proto.compservice.model.protobuf.FightResultOption.prototype.setDescription = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.compservice.model.protobuf.FightResultOption} returns this
 */
proto.compservice.model.protobuf.FightResultOption.prototype.clearDescription = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.compservice.model.protobuf.FightResultOption.prototype.hasDescription = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string shortName = 3;
 * @return {string}
 */
proto.compservice.model.protobuf.FightResultOption.prototype.getShortname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.compservice.model.protobuf.FightResultOption} returns this
 */
proto.compservice.model.protobuf.FightResultOption.prototype.setShortname = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bool draw = 4;
 * @return {boolean}
 */
proto.compservice.model.protobuf.FightResultOption.prototype.getDraw = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.compservice.model.protobuf.FightResultOption} returns this
 */
proto.compservice.model.protobuf.FightResultOption.prototype.setDraw = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional int32 winnerPoints = 5;
 * @return {number}
 */
proto.compservice.model.protobuf.FightResultOption.prototype.getWinnerpoints = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.compservice.model.protobuf.FightResultOption} returns this
 */
proto.compservice.model.protobuf.FightResultOption.prototype.setWinnerpoints = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int32 winnerAdditionalPoints = 6;
 * @return {number}
 */
proto.compservice.model.protobuf.FightResultOption.prototype.getWinneradditionalpoints = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.compservice.model.protobuf.FightResultOption} returns this
 */
proto.compservice.model.protobuf.FightResultOption.prototype.setWinneradditionalpoints = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.compservice.model.protobuf.FightResultOption} returns this
 */
proto.compservice.model.protobuf.FightResultOption.prototype.clearWinneradditionalpoints = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.compservice.model.protobuf.FightResultOption.prototype.hasWinneradditionalpoints = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional int32 loserPoints = 7;
 * @return {number}
 */
proto.compservice.model.protobuf.FightResultOption.prototype.getLoserpoints = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.compservice.model.protobuf.FightResultOption} returns this
 */
proto.compservice.model.protobuf.FightResultOption.prototype.setLoserpoints = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional int32 loserAdditionalPoints = 8;
 * @return {number}
 */
proto.compservice.model.protobuf.FightResultOption.prototype.getLoseradditionalpoints = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.compservice.model.protobuf.FightResultOption} returns this
 */
proto.compservice.model.protobuf.FightResultOption.prototype.setLoseradditionalpoints = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.compservice.model.protobuf.FightResultOption} returns this
 */
proto.compservice.model.protobuf.FightResultOption.prototype.clearLoseradditionalpoints = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.compservice.model.protobuf.FightResultOption.prototype.hasLoseradditionalpoints = function() {
  return jspb.Message.getField(this, 8) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.compservice.model.protobuf.FightDescription.repeatedFields_ = [6];



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
proto.compservice.model.protobuf.FightDescription.prototype.toObject = function(opt_includeInstance) {
  return proto.compservice.model.protobuf.FightDescription.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.compservice.model.protobuf.FightDescription} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.compservice.model.protobuf.FightDescription.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    categoryid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    fightname: jspb.Message.getFieldWithDefault(msg, 3, ""),
    winfight: jspb.Message.getFieldWithDefault(msg, 4, ""),
    losefight: jspb.Message.getFieldWithDefault(msg, 5, ""),
    scoresList: jspb.Message.toObjectList(msg.getScoresList(),
    proto.compservice.model.protobuf.CompScore.toObject, includeInstance),
    duration: jspb.Message.getFieldWithDefault(msg, 7, 0),
    round: jspb.Message.getFieldWithDefault(msg, 8, 0),
    invalid: jspb.Message.getBooleanFieldWithDefault(msg, 9, false),
    roundtype: jspb.Message.getFieldWithDefault(msg, 10, 0),
    status: jspb.Message.getFieldWithDefault(msg, 11, 0),
    fightresult: (f = msg.getFightresult()) && proto.compservice.model.protobuf.FightResult.toObject(includeInstance, f),
    mat: (f = msg.getMat()) && proto.compservice.model.protobuf.MatDescription.toObject(includeInstance, f),
    numberonmat: jspb.Message.getFieldWithDefault(msg, 14, 0),
    priority: jspb.Message.getFieldWithDefault(msg, 15, 0),
    competitionid: jspb.Message.getFieldWithDefault(msg, 16, ""),
    period: jspb.Message.getFieldWithDefault(msg, 17, ""),
    starttime: (f = msg.getStarttime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    stageid: jspb.Message.getFieldWithDefault(msg, 19, ""),
    groupid: jspb.Message.getFieldWithDefault(msg, 20, ""),
    scheduleentryid: jspb.Message.getFieldWithDefault(msg, 21, ""),
    numberinround: jspb.Message.getFieldWithDefault(msg, 22, 0)
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
 * @return {!proto.compservice.model.protobuf.FightDescription}
 */
proto.compservice.model.protobuf.FightDescription.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.compservice.model.protobuf.FightDescription;
  return proto.compservice.model.protobuf.FightDescription.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.compservice.model.protobuf.FightDescription} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.compservice.model.protobuf.FightDescription}
 */
proto.compservice.model.protobuf.FightDescription.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCategoryid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setFightname(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setWinfight(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setLosefight(value);
      break;
    case 6:
      var value = new proto.compservice.model.protobuf.CompScore;
      reader.readMessage(value,proto.compservice.model.protobuf.CompScore.deserializeBinaryFromReader);
      msg.addScores(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDuration(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRound(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setInvalid(value);
      break;
    case 10:
      var value = /** @type {!proto.compservice.model.protobuf.StageRoundType} */ (reader.readEnum());
      msg.setRoundtype(value);
      break;
    case 11:
      var value = /** @type {!proto.compservice.model.protobuf.FightStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 12:
      var value = new proto.compservice.model.protobuf.FightResult;
      reader.readMessage(value,proto.compservice.model.protobuf.FightResult.deserializeBinaryFromReader);
      msg.setFightresult(value);
      break;
    case 13:
      var value = new proto.compservice.model.protobuf.MatDescription;
      reader.readMessage(value,proto.compservice.model.protobuf.MatDescription.deserializeBinaryFromReader);
      msg.setMat(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNumberonmat(value);
      break;
    case 15:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPriority(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setCompetitionid(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readString());
      msg.setPeriod(value);
      break;
    case 18:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setStarttime(value);
      break;
    case 19:
      var value = /** @type {string} */ (reader.readString());
      msg.setStageid(value);
      break;
    case 20:
      var value = /** @type {string} */ (reader.readString());
      msg.setGroupid(value);
      break;
    case 21:
      var value = /** @type {string} */ (reader.readString());
      msg.setScheduleentryid(value);
      break;
    case 22:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNumberinround(value);
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
proto.compservice.model.protobuf.FightDescription.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.compservice.model.protobuf.FightDescription.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.compservice.model.protobuf.FightDescription} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.compservice.model.protobuf.FightDescription.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCategoryid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getScoresList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.compservice.model.protobuf.CompScore.serializeBinaryToWriter
    );
  }
  f = message.getDuration();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = message.getRound();
  if (f !== 0) {
    writer.writeInt32(
      8,
      f
    );
  }
  f = message.getInvalid();
  if (f) {
    writer.writeBool(
      9,
      f
    );
  }
  f = message.getRoundtype();
  if (f !== 0.0) {
    writer.writeEnum(
      10,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      11,
      f
    );
  }
  f = message.getFightresult();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.compservice.model.protobuf.FightResult.serializeBinaryToWriter
    );
  }
  f = message.getMat();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.compservice.model.protobuf.MatDescription.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 14));
  if (f != null) {
    writer.writeInt32(
      14,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 15));
  if (f != null) {
    writer.writeInt32(
      15,
      f
    );
  }
  f = message.getCompetitionid();
  if (f.length > 0) {
    writer.writeString(
      16,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 17));
  if (f != null) {
    writer.writeString(
      17,
      f
    );
  }
  f = message.getStarttime();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getStageid();
  if (f.length > 0) {
    writer.writeString(
      19,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 20));
  if (f != null) {
    writer.writeString(
      20,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 21));
  if (f != null) {
    writer.writeString(
      21,
      f
    );
  }
  f = message.getNumberinround();
  if (f !== 0) {
    writer.writeInt32(
      22,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.compservice.model.protobuf.FightDescription.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.compservice.model.protobuf.FightDescription} returns this
 */
proto.compservice.model.protobuf.FightDescription.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string categoryId = 2;
 * @return {string}
 */
proto.compservice.model.protobuf.FightDescription.prototype.getCategoryid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.compservice.model.protobuf.FightDescription} returns this
 */
proto.compservice.model.protobuf.FightDescription.prototype.setCategoryid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string fightName = 3;
 * @return {string}
 */
proto.compservice.model.protobuf.FightDescription.prototype.getFightname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.compservice.model.protobuf.FightDescription} returns this
 */
proto.compservice.model.protobuf.FightDescription.prototype.setFightname = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.compservice.model.protobuf.FightDescription} returns this
 */
proto.compservice.model.protobuf.FightDescription.prototype.clearFightname = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.compservice.model.protobuf.FightDescription.prototype.hasFightname = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string winFight = 4;
 * @return {string}
 */
proto.compservice.model.protobuf.FightDescription.prototype.getWinfight = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.compservice.model.protobuf.FightDescription} returns this
 */
proto.compservice.model.protobuf.FightDescription.prototype.setWinfight = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.compservice.model.protobuf.FightDescription} returns this
 */
proto.compservice.model.protobuf.FightDescription.prototype.clearWinfight = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.compservice.model.protobuf.FightDescription.prototype.hasWinfight = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string loseFight = 5;
 * @return {string}
 */
proto.compservice.model.protobuf.FightDescription.prototype.getLosefight = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.compservice.model.protobuf.FightDescription} returns this
 */
proto.compservice.model.protobuf.FightDescription.prototype.setLosefight = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.compservice.model.protobuf.FightDescription} returns this
 */
proto.compservice.model.protobuf.FightDescription.prototype.clearLosefight = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.compservice.model.protobuf.FightDescription.prototype.hasLosefight = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * repeated CompScore scores = 6;
 * @return {!Array<!proto.compservice.model.protobuf.CompScore>}
 */
proto.compservice.model.protobuf.FightDescription.prototype.getScoresList = function() {
  return /** @type{!Array<!proto.compservice.model.protobuf.CompScore>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.compservice.model.protobuf.CompScore, 6));
};


/**
 * @param {!Array<!proto.compservice.model.protobuf.CompScore>} value
 * @return {!proto.compservice.model.protobuf.FightDescription} returns this
*/
proto.compservice.model.protobuf.FightDescription.prototype.setScoresList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.compservice.model.protobuf.CompScore=} opt_value
 * @param {number=} opt_index
 * @return {!proto.compservice.model.protobuf.CompScore}
 */
proto.compservice.model.protobuf.FightDescription.prototype.addScores = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.compservice.model.protobuf.CompScore, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.compservice.model.protobuf.FightDescription} returns this
 */
proto.compservice.model.protobuf.FightDescription.prototype.clearScoresList = function() {
  return this.setScoresList([]);
};


/**
 * optional int32 duration = 7;
 * @return {number}
 */
proto.compservice.model.protobuf.FightDescription.prototype.getDuration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.compservice.model.protobuf.FightDescription} returns this
 */
proto.compservice.model.protobuf.FightDescription.prototype.setDuration = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional int32 round = 8;
 * @return {number}
 */
proto.compservice.model.protobuf.FightDescription.prototype.getRound = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.compservice.model.protobuf.FightDescription} returns this
 */
proto.compservice.model.protobuf.FightDescription.prototype.setRound = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional bool invalid = 9;
 * @return {boolean}
 */
proto.compservice.model.protobuf.FightDescription.prototype.getInvalid = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.compservice.model.protobuf.FightDescription} returns this
 */
proto.compservice.model.protobuf.FightDescription.prototype.setInvalid = function(value) {
  return jspb.Message.setProto3BooleanField(this, 9, value);
};


/**
 * optional StageRoundType roundType = 10;
 * @return {!proto.compservice.model.protobuf.StageRoundType}
 */
proto.compservice.model.protobuf.FightDescription.prototype.getRoundtype = function() {
  return /** @type {!proto.compservice.model.protobuf.StageRoundType} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {!proto.compservice.model.protobuf.StageRoundType} value
 * @return {!proto.compservice.model.protobuf.FightDescription} returns this
 */
proto.compservice.model.protobuf.FightDescription.prototype.setRoundtype = function(value) {
  return jspb.Message.setProto3EnumField(this, 10, value);
};


/**
 * optional FightStatus status = 11;
 * @return {!proto.compservice.model.protobuf.FightStatus}
 */
proto.compservice.model.protobuf.FightDescription.prototype.getStatus = function() {
  return /** @type {!proto.compservice.model.protobuf.FightStatus} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {!proto.compservice.model.protobuf.FightStatus} value
 * @return {!proto.compservice.model.protobuf.FightDescription} returns this
 */
proto.compservice.model.protobuf.FightDescription.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 11, value);
};


/**
 * optional FightResult fightResult = 12;
 * @return {?proto.compservice.model.protobuf.FightResult}
 */
proto.compservice.model.protobuf.FightDescription.prototype.getFightresult = function() {
  return /** @type{?proto.compservice.model.protobuf.FightResult} */ (
    jspb.Message.getWrapperField(this, proto.compservice.model.protobuf.FightResult, 12));
};


/**
 * @param {?proto.compservice.model.protobuf.FightResult|undefined} value
 * @return {!proto.compservice.model.protobuf.FightDescription} returns this
*/
proto.compservice.model.protobuf.FightDescription.prototype.setFightresult = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.compservice.model.protobuf.FightDescription} returns this
 */
proto.compservice.model.protobuf.FightDescription.prototype.clearFightresult = function() {
  return this.setFightresult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.compservice.model.protobuf.FightDescription.prototype.hasFightresult = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional MatDescription mat = 13;
 * @return {?proto.compservice.model.protobuf.MatDescription}
 */
proto.compservice.model.protobuf.FightDescription.prototype.getMat = function() {
  return /** @type{?proto.compservice.model.protobuf.MatDescription} */ (
    jspb.Message.getWrapperField(this, proto.compservice.model.protobuf.MatDescription, 13));
};


/**
 * @param {?proto.compservice.model.protobuf.MatDescription|undefined} value
 * @return {!proto.compservice.model.protobuf.FightDescription} returns this
*/
proto.compservice.model.protobuf.FightDescription.prototype.setMat = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.compservice.model.protobuf.FightDescription} returns this
 */
proto.compservice.model.protobuf.FightDescription.prototype.clearMat = function() {
  return this.setMat(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.compservice.model.protobuf.FightDescription.prototype.hasMat = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional int32 numberOnMat = 14;
 * @return {number}
 */
proto.compservice.model.protobuf.FightDescription.prototype.getNumberonmat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {number} value
 * @return {!proto.compservice.model.protobuf.FightDescription} returns this
 */
proto.compservice.model.protobuf.FightDescription.prototype.setNumberonmat = function(value) {
  return jspb.Message.setField(this, 14, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.compservice.model.protobuf.FightDescription} returns this
 */
proto.compservice.model.protobuf.FightDescription.prototype.clearNumberonmat = function() {
  return jspb.Message.setField(this, 14, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.compservice.model.protobuf.FightDescription.prototype.hasNumberonmat = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional int32 priority = 15;
 * @return {number}
 */
proto.compservice.model.protobuf.FightDescription.prototype.getPriority = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/**
 * @param {number} value
 * @return {!proto.compservice.model.protobuf.FightDescription} returns this
 */
proto.compservice.model.protobuf.FightDescription.prototype.setPriority = function(value) {
  return jspb.Message.setField(this, 15, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.compservice.model.protobuf.FightDescription} returns this
 */
proto.compservice.model.protobuf.FightDescription.prototype.clearPriority = function() {
  return jspb.Message.setField(this, 15, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.compservice.model.protobuf.FightDescription.prototype.hasPriority = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional string competitionId = 16;
 * @return {string}
 */
proto.compservice.model.protobuf.FightDescription.prototype.getCompetitionid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.compservice.model.protobuf.FightDescription} returns this
 */
proto.compservice.model.protobuf.FightDescription.prototype.setCompetitionid = function(value) {
  return jspb.Message.setProto3StringField(this, 16, value);
};


/**
 * optional string period = 17;
 * @return {string}
 */
proto.compservice.model.protobuf.FightDescription.prototype.getPeriod = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, ""));
};


/**
 * @param {string} value
 * @return {!proto.compservice.model.protobuf.FightDescription} returns this
 */
proto.compservice.model.protobuf.FightDescription.prototype.setPeriod = function(value) {
  return jspb.Message.setField(this, 17, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.compservice.model.protobuf.FightDescription} returns this
 */
proto.compservice.model.protobuf.FightDescription.prototype.clearPeriod = function() {
  return jspb.Message.setField(this, 17, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.compservice.model.protobuf.FightDescription.prototype.hasPeriod = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional google.protobuf.Timestamp startTime = 18;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.compservice.model.protobuf.FightDescription.prototype.getStarttime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 18));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.compservice.model.protobuf.FightDescription} returns this
*/
proto.compservice.model.protobuf.FightDescription.prototype.setStarttime = function(value) {
  return jspb.Message.setWrapperField(this, 18, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.compservice.model.protobuf.FightDescription} returns this
 */
proto.compservice.model.protobuf.FightDescription.prototype.clearStarttime = function() {
  return this.setStarttime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.compservice.model.protobuf.FightDescription.prototype.hasStarttime = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional string stageId = 19;
 * @return {string}
 */
proto.compservice.model.protobuf.FightDescription.prototype.getStageid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 19, ""));
};


/**
 * @param {string} value
 * @return {!proto.compservice.model.protobuf.FightDescription} returns this
 */
proto.compservice.model.protobuf.FightDescription.prototype.setStageid = function(value) {
  return jspb.Message.setProto3StringField(this, 19, value);
};


/**
 * optional string groupId = 20;
 * @return {string}
 */
proto.compservice.model.protobuf.FightDescription.prototype.getGroupid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 20, ""));
};


/**
 * @param {string} value
 * @return {!proto.compservice.model.protobuf.FightDescription} returns this
 */
proto.compservice.model.protobuf.FightDescription.prototype.setGroupid = function(value) {
  return jspb.Message.setField(this, 20, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.compservice.model.protobuf.FightDescription} returns this
 */
proto.compservice.model.protobuf.FightDescription.prototype.clearGroupid = function() {
  return jspb.Message.setField(this, 20, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.compservice.model.protobuf.FightDescription.prototype.hasGroupid = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional string scheduleEntryId = 21;
 * @return {string}
 */
proto.compservice.model.protobuf.FightDescription.prototype.getScheduleentryid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 21, ""));
};


/**
 * @param {string} value
 * @return {!proto.compservice.model.protobuf.FightDescription} returns this
 */
proto.compservice.model.protobuf.FightDescription.prototype.setScheduleentryid = function(value) {
  return jspb.Message.setField(this, 21, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.compservice.model.protobuf.FightDescription} returns this
 */
proto.compservice.model.protobuf.FightDescription.prototype.clearScheduleentryid = function() {
  return jspb.Message.setField(this, 21, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.compservice.model.protobuf.FightDescription.prototype.hasScheduleentryid = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional int32 numberInRound = 22;
 * @return {number}
 */
proto.compservice.model.protobuf.FightDescription.prototype.getNumberinround = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 22, 0));
};


/**
 * @param {number} value
 * @return {!proto.compservice.model.protobuf.FightDescription} returns this
 */
proto.compservice.model.protobuf.FightDescription.prototype.setNumberinround = function(value) {
  return jspb.Message.setProto3IntField(this, 22, value);
};





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
proto.compservice.model.protobuf.MatDescription.prototype.toObject = function(opt_includeInstance) {
  return proto.compservice.model.protobuf.MatDescription.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.compservice.model.protobuf.MatDescription} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.compservice.model.protobuf.MatDescription.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    periodid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    matorder: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.compservice.model.protobuf.MatDescription}
 */
proto.compservice.model.protobuf.MatDescription.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.compservice.model.protobuf.MatDescription;
  return proto.compservice.model.protobuf.MatDescription.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.compservice.model.protobuf.MatDescription} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.compservice.model.protobuf.MatDescription}
 */
proto.compservice.model.protobuf.MatDescription.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPeriodid(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMatorder(value);
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
proto.compservice.model.protobuf.MatDescription.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.compservice.model.protobuf.MatDescription.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.compservice.model.protobuf.MatDescription} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.compservice.model.protobuf.MatDescription.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPeriodid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getMatorder();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.compservice.model.protobuf.MatDescription.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.compservice.model.protobuf.MatDescription} returns this
 */
proto.compservice.model.protobuf.MatDescription.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.compservice.model.protobuf.MatDescription.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.compservice.model.protobuf.MatDescription} returns this
 */
proto.compservice.model.protobuf.MatDescription.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string periodId = 3;
 * @return {string}
 */
proto.compservice.model.protobuf.MatDescription.prototype.getPeriodid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.compservice.model.protobuf.MatDescription} returns this
 */
proto.compservice.model.protobuf.MatDescription.prototype.setPeriodid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 matOrder = 4;
 * @return {number}
 */
proto.compservice.model.protobuf.MatDescription.prototype.getMatorder = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.compservice.model.protobuf.MatDescription} returns this
 */
proto.compservice.model.protobuf.MatDescription.prototype.setMatorder = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};





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
proto.compservice.model.protobuf.FightResult.prototype.toObject = function(opt_includeInstance) {
  return proto.compservice.model.protobuf.FightResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.compservice.model.protobuf.FightResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.compservice.model.protobuf.FightResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    winnerid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    resulttypeid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    reason: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.compservice.model.protobuf.FightResult}
 */
proto.compservice.model.protobuf.FightResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.compservice.model.protobuf.FightResult;
  return proto.compservice.model.protobuf.FightResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.compservice.model.protobuf.FightResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.compservice.model.protobuf.FightResult}
 */
proto.compservice.model.protobuf.FightResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setWinnerid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setResulttypeid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setReason(value);
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
proto.compservice.model.protobuf.FightResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.compservice.model.protobuf.FightResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.compservice.model.protobuf.FightResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.compservice.model.protobuf.FightResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string winnerId = 1;
 * @return {string}
 */
proto.compservice.model.protobuf.FightResult.prototype.getWinnerid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.compservice.model.protobuf.FightResult} returns this
 */
proto.compservice.model.protobuf.FightResult.prototype.setWinnerid = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.compservice.model.protobuf.FightResult} returns this
 */
proto.compservice.model.protobuf.FightResult.prototype.clearWinnerid = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.compservice.model.protobuf.FightResult.prototype.hasWinnerid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string resultTypeId = 2;
 * @return {string}
 */
proto.compservice.model.protobuf.FightResult.prototype.getResulttypeid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.compservice.model.protobuf.FightResult} returns this
 */
proto.compservice.model.protobuf.FightResult.prototype.setResulttypeid = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.compservice.model.protobuf.FightResult} returns this
 */
proto.compservice.model.protobuf.FightResult.prototype.clearResulttypeid = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.compservice.model.protobuf.FightResult.prototype.hasResulttypeid = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string reason = 3;
 * @return {string}
 */
proto.compservice.model.protobuf.FightResult.prototype.getReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.compservice.model.protobuf.FightResult} returns this
 */
proto.compservice.model.protobuf.FightResult.prototype.setReason = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.compservice.model.protobuf.FightResult} returns this
 */
proto.compservice.model.protobuf.FightResult.prototype.clearReason = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.compservice.model.protobuf.FightResult.prototype.hasReason = function() {
  return jspb.Message.getField(this, 3) != null;
};





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
proto.compservice.model.protobuf.CompScore.prototype.toObject = function(opt_includeInstance) {
  return proto.compservice.model.protobuf.CompScore.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.compservice.model.protobuf.CompScore} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.compservice.model.protobuf.CompScore.toObject = function(includeInstance, msg) {
  var f, obj = {
    placeholderid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    competitorid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    score: (f = msg.getScore()) && proto.compservice.model.protobuf.Score.toObject(includeInstance, f),
    order: jspb.Message.getFieldWithDefault(msg, 4, 0),
    parentreferencetype: jspb.Message.getFieldWithDefault(msg, 5, 0),
    parentfightid: jspb.Message.getFieldWithDefault(msg, 6, "")
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
 * @return {!proto.compservice.model.protobuf.CompScore}
 */
proto.compservice.model.protobuf.CompScore.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.compservice.model.protobuf.CompScore;
  return proto.compservice.model.protobuf.CompScore.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.compservice.model.protobuf.CompScore} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.compservice.model.protobuf.CompScore}
 */
proto.compservice.model.protobuf.CompScore.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlaceholderid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCompetitorid(value);
      break;
    case 3:
      var value = new proto.compservice.model.protobuf.Score;
      reader.readMessage(value,proto.compservice.model.protobuf.Score.deserializeBinaryFromReader);
      msg.setScore(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setOrder(value);
      break;
    case 5:
      var value = /** @type {!proto.compservice.model.protobuf.FightReferenceType} */ (reader.readEnum());
      msg.setParentreferencetype(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setParentfightid(value);
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
proto.compservice.model.protobuf.CompScore.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.compservice.model.protobuf.CompScore.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.compservice.model.protobuf.CompScore} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.compservice.model.protobuf.CompScore.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getScore();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.compservice.model.protobuf.Score.serializeBinaryToWriter
    );
  }
  f = message.getOrder();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = /** @type {!proto.compservice.model.protobuf.FightReferenceType} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string placeholderId = 1;
 * @return {string}
 */
proto.compservice.model.protobuf.CompScore.prototype.getPlaceholderid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.compservice.model.protobuf.CompScore} returns this
 */
proto.compservice.model.protobuf.CompScore.prototype.setPlaceholderid = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.compservice.model.protobuf.CompScore} returns this
 */
proto.compservice.model.protobuf.CompScore.prototype.clearPlaceholderid = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.compservice.model.protobuf.CompScore.prototype.hasPlaceholderid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string competitorId = 2;
 * @return {string}
 */
proto.compservice.model.protobuf.CompScore.prototype.getCompetitorid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.compservice.model.protobuf.CompScore} returns this
 */
proto.compservice.model.protobuf.CompScore.prototype.setCompetitorid = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.compservice.model.protobuf.CompScore} returns this
 */
proto.compservice.model.protobuf.CompScore.prototype.clearCompetitorid = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.compservice.model.protobuf.CompScore.prototype.hasCompetitorid = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Score score = 3;
 * @return {?proto.compservice.model.protobuf.Score}
 */
proto.compservice.model.protobuf.CompScore.prototype.getScore = function() {
  return /** @type{?proto.compservice.model.protobuf.Score} */ (
    jspb.Message.getWrapperField(this, proto.compservice.model.protobuf.Score, 3));
};


/**
 * @param {?proto.compservice.model.protobuf.Score|undefined} value
 * @return {!proto.compservice.model.protobuf.CompScore} returns this
*/
proto.compservice.model.protobuf.CompScore.prototype.setScore = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.compservice.model.protobuf.CompScore} returns this
 */
proto.compservice.model.protobuf.CompScore.prototype.clearScore = function() {
  return this.setScore(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.compservice.model.protobuf.CompScore.prototype.hasScore = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 order = 4;
 * @return {number}
 */
proto.compservice.model.protobuf.CompScore.prototype.getOrder = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.compservice.model.protobuf.CompScore} returns this
 */
proto.compservice.model.protobuf.CompScore.prototype.setOrder = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional FightReferenceType parentReferenceType = 5;
 * @return {!proto.compservice.model.protobuf.FightReferenceType}
 */
proto.compservice.model.protobuf.CompScore.prototype.getParentreferencetype = function() {
  return /** @type {!proto.compservice.model.protobuf.FightReferenceType} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.compservice.model.protobuf.FightReferenceType} value
 * @return {!proto.compservice.model.protobuf.CompScore} returns this
 */
proto.compservice.model.protobuf.CompScore.prototype.setParentreferencetype = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.compservice.model.protobuf.CompScore} returns this
 */
proto.compservice.model.protobuf.CompScore.prototype.clearParentreferencetype = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.compservice.model.protobuf.CompScore.prototype.hasParentreferencetype = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string parentFightId = 6;
 * @return {string}
 */
proto.compservice.model.protobuf.CompScore.prototype.getParentfightid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.compservice.model.protobuf.CompScore} returns this
 */
proto.compservice.model.protobuf.CompScore.prototype.setParentfightid = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.compservice.model.protobuf.CompScore} returns this
 */
proto.compservice.model.protobuf.CompScore.prototype.clearParentfightid = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.compservice.model.protobuf.CompScore.prototype.hasParentfightid = function() {
  return jspb.Message.getField(this, 6) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.compservice.model.protobuf.Score.repeatedFields_ = [4];



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
proto.compservice.model.protobuf.Score.prototype.toObject = function(opt_includeInstance) {
  return proto.compservice.model.protobuf.Score.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.compservice.model.protobuf.Score} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.compservice.model.protobuf.Score.toObject = function(includeInstance, msg) {
  var f, obj = {
    points: jspb.Message.getFieldWithDefault(msg, 1, 0),
    advantages: jspb.Message.getFieldWithDefault(msg, 2, 0),
    penalties: jspb.Message.getFieldWithDefault(msg, 3, 0),
    pointgroupsList: jspb.Message.toObjectList(msg.getPointgroupsList(),
    proto.compservice.model.protobuf.PointGroup.toObject, includeInstance)
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
 * @return {!proto.compservice.model.protobuf.Score}
 */
proto.compservice.model.protobuf.Score.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.compservice.model.protobuf.Score;
  return proto.compservice.model.protobuf.Score.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.compservice.model.protobuf.Score} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.compservice.model.protobuf.Score}
 */
proto.compservice.model.protobuf.Score.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPoints(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAdvantages(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPenalties(value);
      break;
    case 4:
      var value = new proto.compservice.model.protobuf.PointGroup;
      reader.readMessage(value,proto.compservice.model.protobuf.PointGroup.deserializeBinaryFromReader);
      msg.addPointgroups(value);
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
proto.compservice.model.protobuf.Score.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.compservice.model.protobuf.Score.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.compservice.model.protobuf.Score} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.compservice.model.protobuf.Score.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPoints();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getAdvantages();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getPenalties();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getPointgroupsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.compservice.model.protobuf.PointGroup.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 points = 1;
 * @return {number}
 */
proto.compservice.model.protobuf.Score.prototype.getPoints = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.compservice.model.protobuf.Score} returns this
 */
proto.compservice.model.protobuf.Score.prototype.setPoints = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 advantages = 2;
 * @return {number}
 */
proto.compservice.model.protobuf.Score.prototype.getAdvantages = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.compservice.model.protobuf.Score} returns this
 */
proto.compservice.model.protobuf.Score.prototype.setAdvantages = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 penalties = 3;
 * @return {number}
 */
proto.compservice.model.protobuf.Score.prototype.getPenalties = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.compservice.model.protobuf.Score} returns this
 */
proto.compservice.model.protobuf.Score.prototype.setPenalties = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * repeated PointGroup pointGroups = 4;
 * @return {!Array<!proto.compservice.model.protobuf.PointGroup>}
 */
proto.compservice.model.protobuf.Score.prototype.getPointgroupsList = function() {
  return /** @type{!Array<!proto.compservice.model.protobuf.PointGroup>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.compservice.model.protobuf.PointGroup, 4));
};


/**
 * @param {!Array<!proto.compservice.model.protobuf.PointGroup>} value
 * @return {!proto.compservice.model.protobuf.Score} returns this
*/
proto.compservice.model.protobuf.Score.prototype.setPointgroupsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.compservice.model.protobuf.PointGroup=} opt_value
 * @param {number=} opt_index
 * @return {!proto.compservice.model.protobuf.PointGroup}
 */
proto.compservice.model.protobuf.Score.prototype.addPointgroups = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.compservice.model.protobuf.PointGroup, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.compservice.model.protobuf.Score} returns this
 */
proto.compservice.model.protobuf.Score.prototype.clearPointgroupsList = function() {
  return this.setPointgroupsList([]);
};





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
proto.compservice.model.protobuf.PointGroup.prototype.toObject = function(opt_includeInstance) {
  return proto.compservice.model.protobuf.PointGroup.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.compservice.model.protobuf.PointGroup} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.compservice.model.protobuf.PointGroup.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    priority: jspb.Message.getFieldWithDefault(msg, 3, 0),
    value: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.compservice.model.protobuf.PointGroup}
 */
proto.compservice.model.protobuf.PointGroup.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.compservice.model.protobuf.PointGroup;
  return proto.compservice.model.protobuf.PointGroup.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.compservice.model.protobuf.PointGroup} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.compservice.model.protobuf.PointGroup}
 */
proto.compservice.model.protobuf.PointGroup.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPriority(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setValue(value);
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
proto.compservice.model.protobuf.PointGroup.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.compservice.model.protobuf.PointGroup.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.compservice.model.protobuf.PointGroup} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.compservice.model.protobuf.PointGroup.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPriority();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getValue();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.compservice.model.protobuf.PointGroup.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.compservice.model.protobuf.PointGroup} returns this
 */
proto.compservice.model.protobuf.PointGroup.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.compservice.model.protobuf.PointGroup.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.compservice.model.protobuf.PointGroup} returns this
 */
proto.compservice.model.protobuf.PointGroup.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 priority = 3;
 * @return {number}
 */
proto.compservice.model.protobuf.PointGroup.prototype.getPriority = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.compservice.model.protobuf.PointGroup} returns this
 */
proto.compservice.model.protobuf.PointGroup.prototype.setPriority = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 value = 4;
 * @return {number}
 */
proto.compservice.model.protobuf.PointGroup.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.compservice.model.protobuf.PointGroup} returns this
 */
proto.compservice.model.protobuf.PointGroup.prototype.setValue = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};





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
proto.compservice.model.protobuf.RegistrationInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.compservice.model.protobuf.RegistrationInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.compservice.model.protobuf.RegistrationInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.compservice.model.protobuf.RegistrationInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    registrationopen: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    registrationperiodsMap: (f = msg.getRegistrationperiodsMap()) ? f.toObject(includeInstance, proto.compservice.model.protobuf.RegistrationPeriod.toObject) : [],
    registrationgroupsMap: (f = msg.getRegistrationgroupsMap()) ? f.toObject(includeInstance, proto.compservice.model.protobuf.RegistrationGroup.toObject) : []
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
 * @return {!proto.compservice.model.protobuf.RegistrationInfo}
 */
proto.compservice.model.protobuf.RegistrationInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.compservice.model.protobuf.RegistrationInfo;
  return proto.compservice.model.protobuf.RegistrationInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.compservice.model.protobuf.RegistrationInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.compservice.model.protobuf.RegistrationInfo}
 */
proto.compservice.model.protobuf.RegistrationInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRegistrationopen(value);
      break;
    case 3:
      var value = msg.getRegistrationperiodsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.compservice.model.protobuf.RegistrationPeriod.deserializeBinaryFromReader, "", new proto.compservice.model.protobuf.RegistrationPeriod());
         });
      break;
    case 4:
      var value = msg.getRegistrationgroupsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.compservice.model.protobuf.RegistrationGroup.deserializeBinaryFromReader, "", new proto.compservice.model.protobuf.RegistrationGroup());
         });
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
proto.compservice.model.protobuf.RegistrationInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.compservice.model.protobuf.RegistrationInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.compservice.model.protobuf.RegistrationInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.compservice.model.protobuf.RegistrationInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRegistrationopen();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getRegistrationperiodsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(3, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.compservice.model.protobuf.RegistrationPeriod.serializeBinaryToWriter);
  }
  f = message.getRegistrationgroupsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(4, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.compservice.model.protobuf.RegistrationGroup.serializeBinaryToWriter);
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.compservice.model.protobuf.RegistrationInfo.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.compservice.model.protobuf.RegistrationInfo} returns this
 */
proto.compservice.model.protobuf.RegistrationInfo.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool registrationOpen = 2;
 * @return {boolean}
 */
proto.compservice.model.protobuf.RegistrationInfo.prototype.getRegistrationopen = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.compservice.model.protobuf.RegistrationInfo} returns this
 */
proto.compservice.model.protobuf.RegistrationInfo.prototype.setRegistrationopen = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * map<string, RegistrationPeriod> registrationPeriods = 3;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.compservice.model.protobuf.RegistrationPeriod>}
 */
proto.compservice.model.protobuf.RegistrationInfo.prototype.getRegistrationperiodsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.compservice.model.protobuf.RegistrationPeriod>} */ (
      jspb.Message.getMapField(this, 3, opt_noLazyCreate,
      proto.compservice.model.protobuf.RegistrationPeriod));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.compservice.model.protobuf.RegistrationInfo} returns this
 */
proto.compservice.model.protobuf.RegistrationInfo.prototype.clearRegistrationperiodsMap = function() {
  this.getRegistrationperiodsMap().clear();
  return this;};


/**
 * map<string, RegistrationGroup> registrationGroups = 4;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.compservice.model.protobuf.RegistrationGroup>}
 */
proto.compservice.model.protobuf.RegistrationInfo.prototype.getRegistrationgroupsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.compservice.model.protobuf.RegistrationGroup>} */ (
      jspb.Message.getMapField(this, 4, opt_noLazyCreate,
      proto.compservice.model.protobuf.RegistrationGroup));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.compservice.model.protobuf.RegistrationInfo} returns this
 */
proto.compservice.model.protobuf.RegistrationInfo.prototype.clearRegistrationgroupsMap = function() {
  this.getRegistrationgroupsMap().clear();
  return this;};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.compservice.model.protobuf.RegistrationGroup.repeatedFields_ = [5];



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
proto.compservice.model.protobuf.RegistrationGroup.prototype.toObject = function(opt_includeInstance) {
  return proto.compservice.model.protobuf.RegistrationGroup.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.compservice.model.protobuf.RegistrationGroup} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.compservice.model.protobuf.RegistrationGroup.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    displayname: jspb.Message.getFieldWithDefault(msg, 2, ""),
    defaultgroup: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    registrationfee: (f = msg.getRegistrationfee()) && proto.compservice.model.protobuf.RegistrationFee.toObject(includeInstance, f),
    categoriesList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f
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
 * @return {!proto.compservice.model.protobuf.RegistrationGroup}
 */
proto.compservice.model.protobuf.RegistrationGroup.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.compservice.model.protobuf.RegistrationGroup;
  return proto.compservice.model.protobuf.RegistrationGroup.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.compservice.model.protobuf.RegistrationGroup} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.compservice.model.protobuf.RegistrationGroup}
 */
proto.compservice.model.protobuf.RegistrationGroup.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDisplayname(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDefaultgroup(value);
      break;
    case 4:
      var value = new proto.compservice.model.protobuf.RegistrationFee;
      reader.readMessage(value,proto.compservice.model.protobuf.RegistrationFee.deserializeBinaryFromReader);
      msg.setRegistrationfee(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addCategories(value);
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
proto.compservice.model.protobuf.RegistrationGroup.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.compservice.model.protobuf.RegistrationGroup.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.compservice.model.protobuf.RegistrationGroup} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.compservice.model.protobuf.RegistrationGroup.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDisplayname();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDefaultgroup();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getRegistrationfee();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.compservice.model.protobuf.RegistrationFee.serializeBinaryToWriter
    );
  }
  f = message.getCategoriesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.compservice.model.protobuf.RegistrationGroup.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.compservice.model.protobuf.RegistrationGroup} returns this
 */
proto.compservice.model.protobuf.RegistrationGroup.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string displayName = 2;
 * @return {string}
 */
proto.compservice.model.protobuf.RegistrationGroup.prototype.getDisplayname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.compservice.model.protobuf.RegistrationGroup} returns this
 */
proto.compservice.model.protobuf.RegistrationGroup.prototype.setDisplayname = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool defaultGroup = 3;
 * @return {boolean}
 */
proto.compservice.model.protobuf.RegistrationGroup.prototype.getDefaultgroup = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.compservice.model.protobuf.RegistrationGroup} returns this
 */
proto.compservice.model.protobuf.RegistrationGroup.prototype.setDefaultgroup = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional RegistrationFee registrationFee = 4;
 * @return {?proto.compservice.model.protobuf.RegistrationFee}
 */
proto.compservice.model.protobuf.RegistrationGroup.prototype.getRegistrationfee = function() {
  return /** @type{?proto.compservice.model.protobuf.RegistrationFee} */ (
    jspb.Message.getWrapperField(this, proto.compservice.model.protobuf.RegistrationFee, 4));
};


/**
 * @param {?proto.compservice.model.protobuf.RegistrationFee|undefined} value
 * @return {!proto.compservice.model.protobuf.RegistrationGroup} returns this
*/
proto.compservice.model.protobuf.RegistrationGroup.prototype.setRegistrationfee = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.compservice.model.protobuf.RegistrationGroup} returns this
 */
proto.compservice.model.protobuf.RegistrationGroup.prototype.clearRegistrationfee = function() {
  return this.setRegistrationfee(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.compservice.model.protobuf.RegistrationGroup.prototype.hasRegistrationfee = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated string categories = 5;
 * @return {!Array<string>}
 */
proto.compservice.model.protobuf.RegistrationGroup.prototype.getCategoriesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.compservice.model.protobuf.RegistrationGroup} returns this
 */
proto.compservice.model.protobuf.RegistrationGroup.prototype.setCategoriesList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.compservice.model.protobuf.RegistrationGroup} returns this
 */
proto.compservice.model.protobuf.RegistrationGroup.prototype.addCategories = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.compservice.model.protobuf.RegistrationGroup} returns this
 */
proto.compservice.model.protobuf.RegistrationGroup.prototype.clearCategoriesList = function() {
  return this.setCategoriesList([]);
};





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
proto.compservice.model.protobuf.RegistrationFee.prototype.toObject = function(opt_includeInstance) {
  return proto.compservice.model.protobuf.RegistrationFee.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.compservice.model.protobuf.RegistrationFee} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.compservice.model.protobuf.RegistrationFee.toObject = function(includeInstance, msg) {
  var f, obj = {
    currency: jspb.Message.getFieldWithDefault(msg, 1, ""),
    amount: jspb.Message.getFieldWithDefault(msg, 2, 0),
    remainder: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.compservice.model.protobuf.RegistrationFee}
 */
proto.compservice.model.protobuf.RegistrationFee.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.compservice.model.protobuf.RegistrationFee;
  return proto.compservice.model.protobuf.RegistrationFee.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.compservice.model.protobuf.RegistrationFee} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.compservice.model.protobuf.RegistrationFee}
 */
proto.compservice.model.protobuf.RegistrationFee.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurrency(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAmount(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRemainder(value);
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
proto.compservice.model.protobuf.RegistrationFee.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.compservice.model.protobuf.RegistrationFee.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.compservice.model.protobuf.RegistrationFee} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.compservice.model.protobuf.RegistrationFee.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCurrency();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAmount();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getRemainder();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional string currency = 1;
 * @return {string}
 */
proto.compservice.model.protobuf.RegistrationFee.prototype.getCurrency = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.compservice.model.protobuf.RegistrationFee} returns this
 */
proto.compservice.model.protobuf.RegistrationFee.prototype.setCurrency = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 amount = 2;
 * @return {number}
 */
proto.compservice.model.protobuf.RegistrationFee.prototype.getAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.compservice.model.protobuf.RegistrationFee} returns this
 */
proto.compservice.model.protobuf.RegistrationFee.prototype.setAmount = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 remainder = 3;
 * @return {number}
 */
proto.compservice.model.protobuf.RegistrationFee.prototype.getRemainder = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.compservice.model.protobuf.RegistrationFee} returns this
 */
proto.compservice.model.protobuf.RegistrationFee.prototype.setRemainder = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.compservice.model.protobuf.RegistrationPeriod.repeatedFields_ = [6];



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
proto.compservice.model.protobuf.RegistrationPeriod.prototype.toObject = function(opt_includeInstance) {
  return proto.compservice.model.protobuf.RegistrationPeriod.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.compservice.model.protobuf.RegistrationPeriod} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.compservice.model.protobuf.RegistrationPeriod.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    competitionid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    start: (f = msg.getStart()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    end: (f = msg.getEnd()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    registrationgroupidsList: (f = jspb.Message.getRepeatedField(msg, 6)) == null ? undefined : f
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
 * @return {!proto.compservice.model.protobuf.RegistrationPeriod}
 */
proto.compservice.model.protobuf.RegistrationPeriod.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.compservice.model.protobuf.RegistrationPeriod;
  return proto.compservice.model.protobuf.RegistrationPeriod.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.compservice.model.protobuf.RegistrationPeriod} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.compservice.model.protobuf.RegistrationPeriod}
 */
proto.compservice.model.protobuf.RegistrationPeriod.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCompetitionid(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setStart(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setEnd(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.addRegistrationgroupids(value);
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
proto.compservice.model.protobuf.RegistrationPeriod.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.compservice.model.protobuf.RegistrationPeriod.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.compservice.model.protobuf.RegistrationPeriod} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.compservice.model.protobuf.RegistrationPeriod.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCompetitionid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getStart();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getEnd();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getRegistrationgroupidsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      6,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.compservice.model.protobuf.RegistrationPeriod.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.compservice.model.protobuf.RegistrationPeriod} returns this
 */
proto.compservice.model.protobuf.RegistrationPeriod.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.compservice.model.protobuf.RegistrationPeriod.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.compservice.model.protobuf.RegistrationPeriod} returns this
 */
proto.compservice.model.protobuf.RegistrationPeriod.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string competitionId = 3;
 * @return {string}
 */
proto.compservice.model.protobuf.RegistrationPeriod.prototype.getCompetitionid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.compservice.model.protobuf.RegistrationPeriod} returns this
 */
proto.compservice.model.protobuf.RegistrationPeriod.prototype.setCompetitionid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional google.protobuf.Timestamp start = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.compservice.model.protobuf.RegistrationPeriod.prototype.getStart = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.compservice.model.protobuf.RegistrationPeriod} returns this
*/
proto.compservice.model.protobuf.RegistrationPeriod.prototype.setStart = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.compservice.model.protobuf.RegistrationPeriod} returns this
 */
proto.compservice.model.protobuf.RegistrationPeriod.prototype.clearStart = function() {
  return this.setStart(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.compservice.model.protobuf.RegistrationPeriod.prototype.hasStart = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.Timestamp end = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.compservice.model.protobuf.RegistrationPeriod.prototype.getEnd = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.compservice.model.protobuf.RegistrationPeriod} returns this
*/
proto.compservice.model.protobuf.RegistrationPeriod.prototype.setEnd = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.compservice.model.protobuf.RegistrationPeriod} returns this
 */
proto.compservice.model.protobuf.RegistrationPeriod.prototype.clearEnd = function() {
  return this.setEnd(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.compservice.model.protobuf.RegistrationPeriod.prototype.hasEnd = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * repeated string registrationGroupIds = 6;
 * @return {!Array<string>}
 */
proto.compservice.model.protobuf.RegistrationPeriod.prototype.getRegistrationgroupidsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 6));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.compservice.model.protobuf.RegistrationPeriod} returns this
 */
proto.compservice.model.protobuf.RegistrationPeriod.prototype.setRegistrationgroupidsList = function(value) {
  return jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.compservice.model.protobuf.RegistrationPeriod} returns this
 */
proto.compservice.model.protobuf.RegistrationPeriod.prototype.addRegistrationgroupids = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.compservice.model.protobuf.RegistrationPeriod} returns this
 */
proto.compservice.model.protobuf.RegistrationPeriod.prototype.clearRegistrationgroupidsList = function() {
  return this.setRegistrationgroupidsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.compservice.model.protobuf.FullAcademyInfo.repeatedFields_ = [3];



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
proto.compservice.model.protobuf.FullAcademyInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.compservice.model.protobuf.FullAcademyInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.compservice.model.protobuf.FullAcademyInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.compservice.model.protobuf.FullAcademyInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    coachesList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    contactuserid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    contactemail: jspb.Message.getFieldWithDefault(msg, 5, ""),
    created: (f = msg.getCreated()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    updated: (f = msg.getUpdated()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.compservice.model.protobuf.FullAcademyInfo}
 */
proto.compservice.model.protobuf.FullAcademyInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.compservice.model.protobuf.FullAcademyInfo;
  return proto.compservice.model.protobuf.FullAcademyInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.compservice.model.protobuf.FullAcademyInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.compservice.model.protobuf.FullAcademyInfo}
 */
proto.compservice.model.protobuf.FullAcademyInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addCoaches(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setContactuserid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setContactemail(value);
      break;
    case 6:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreated(value);
      break;
    case 7:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUpdated(value);
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
proto.compservice.model.protobuf.FullAcademyInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.compservice.model.protobuf.FullAcademyInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.compservice.model.protobuf.FullAcademyInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.compservice.model.protobuf.FullAcademyInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCoachesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getContactuserid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getContactemail();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getCreated();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getUpdated();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.compservice.model.protobuf.FullAcademyInfo.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.compservice.model.protobuf.FullAcademyInfo} returns this
 */
proto.compservice.model.protobuf.FullAcademyInfo.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.compservice.model.protobuf.FullAcademyInfo.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.compservice.model.protobuf.FullAcademyInfo} returns this
 */
proto.compservice.model.protobuf.FullAcademyInfo.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated string coaches = 3;
 * @return {!Array<string>}
 */
proto.compservice.model.protobuf.FullAcademyInfo.prototype.getCoachesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.compservice.model.protobuf.FullAcademyInfo} returns this
 */
proto.compservice.model.protobuf.FullAcademyInfo.prototype.setCoachesList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.compservice.model.protobuf.FullAcademyInfo} returns this
 */
proto.compservice.model.protobuf.FullAcademyInfo.prototype.addCoaches = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.compservice.model.protobuf.FullAcademyInfo} returns this
 */
proto.compservice.model.protobuf.FullAcademyInfo.prototype.clearCoachesList = function() {
  return this.setCoachesList([]);
};


/**
 * optional string contactUserId = 4;
 * @return {string}
 */
proto.compservice.model.protobuf.FullAcademyInfo.prototype.getContactuserid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.compservice.model.protobuf.FullAcademyInfo} returns this
 */
proto.compservice.model.protobuf.FullAcademyInfo.prototype.setContactuserid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string contactEmail = 5;
 * @return {string}
 */
proto.compservice.model.protobuf.FullAcademyInfo.prototype.getContactemail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.compservice.model.protobuf.FullAcademyInfo} returns this
 */
proto.compservice.model.protobuf.FullAcademyInfo.prototype.setContactemail = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional google.protobuf.Timestamp created = 6;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.compservice.model.protobuf.FullAcademyInfo.prototype.getCreated = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 6));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.compservice.model.protobuf.FullAcademyInfo} returns this
*/
proto.compservice.model.protobuf.FullAcademyInfo.prototype.setCreated = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.compservice.model.protobuf.FullAcademyInfo} returns this
 */
proto.compservice.model.protobuf.FullAcademyInfo.prototype.clearCreated = function() {
  return this.setCreated(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.compservice.model.protobuf.FullAcademyInfo.prototype.hasCreated = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional google.protobuf.Timestamp updated = 7;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.compservice.model.protobuf.FullAcademyInfo.prototype.getUpdated = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 7));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.compservice.model.protobuf.FullAcademyInfo} returns this
*/
proto.compservice.model.protobuf.FullAcademyInfo.prototype.setUpdated = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.compservice.model.protobuf.FullAcademyInfo} returns this
 */
proto.compservice.model.protobuf.FullAcademyInfo.prototype.clearUpdated = function() {
  return this.setUpdated(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.compservice.model.protobuf.FullAcademyInfo.prototype.hasUpdated = function() {
  return jspb.Message.getField(this, 7) != null;
};





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
proto.compservice.model.protobuf.Academy.prototype.toObject = function(opt_includeInstance) {
  return proto.compservice.model.protobuf.Academy.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.compservice.model.protobuf.Academy} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.compservice.model.protobuf.Academy.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.compservice.model.protobuf.Academy}
 */
proto.compservice.model.protobuf.Academy.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.compservice.model.protobuf.Academy;
  return proto.compservice.model.protobuf.Academy.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.compservice.model.protobuf.Academy} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.compservice.model.protobuf.Academy}
 */
proto.compservice.model.protobuf.Academy.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
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
proto.compservice.model.protobuf.Academy.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.compservice.model.protobuf.Academy.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.compservice.model.protobuf.Academy} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.compservice.model.protobuf.Academy.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.compservice.model.protobuf.Academy.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.compservice.model.protobuf.Academy} returns this
 */
proto.compservice.model.protobuf.Academy.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.compservice.model.protobuf.Academy.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.compservice.model.protobuf.Academy} returns this
 */
proto.compservice.model.protobuf.Academy.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.compservice.model.protobuf.CategoryDescriptor.repeatedFields_ = [1];



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
proto.compservice.model.protobuf.CategoryDescriptor.prototype.toObject = function(opt_includeInstance) {
  return proto.compservice.model.protobuf.CategoryDescriptor.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.compservice.model.protobuf.CategoryDescriptor} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.compservice.model.protobuf.CategoryDescriptor.toObject = function(includeInstance, msg) {
  var f, obj = {
    restrictionsList: jspb.Message.toObjectList(msg.getRestrictionsList(),
    proto.compservice.model.protobuf.CategoryRestriction.toObject, includeInstance),
    id: jspb.Message.getFieldWithDefault(msg, 2, ""),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    registrationopen: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
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
 * @return {!proto.compservice.model.protobuf.CategoryDescriptor}
 */
proto.compservice.model.protobuf.CategoryDescriptor.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.compservice.model.protobuf.CategoryDescriptor;
  return proto.compservice.model.protobuf.CategoryDescriptor.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.compservice.model.protobuf.CategoryDescriptor} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.compservice.model.protobuf.CategoryDescriptor}
 */
proto.compservice.model.protobuf.CategoryDescriptor.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.compservice.model.protobuf.CategoryRestriction;
      reader.readMessage(value,proto.compservice.model.protobuf.CategoryRestriction.deserializeBinaryFromReader);
      msg.addRestrictions(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRegistrationopen(value);
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
proto.compservice.model.protobuf.CategoryDescriptor.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.compservice.model.protobuf.CategoryDescriptor.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.compservice.model.protobuf.CategoryDescriptor} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.compservice.model.protobuf.CategoryDescriptor.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRestrictionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.compservice.model.protobuf.CategoryRestriction.serializeBinaryToWriter
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getRegistrationopen();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * repeated CategoryRestriction restrictions = 1;
 * @return {!Array<!proto.compservice.model.protobuf.CategoryRestriction>}
 */
proto.compservice.model.protobuf.CategoryDescriptor.prototype.getRestrictionsList = function() {
  return /** @type{!Array<!proto.compservice.model.protobuf.CategoryRestriction>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.compservice.model.protobuf.CategoryRestriction, 1));
};


/**
 * @param {!Array<!proto.compservice.model.protobuf.CategoryRestriction>} value
 * @return {!proto.compservice.model.protobuf.CategoryDescriptor} returns this
*/
proto.compservice.model.protobuf.CategoryDescriptor.prototype.setRestrictionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.compservice.model.protobuf.CategoryRestriction=} opt_value
 * @param {number=} opt_index
 * @return {!proto.compservice.model.protobuf.CategoryRestriction}
 */
proto.compservice.model.protobuf.CategoryDescriptor.prototype.addRestrictions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.compservice.model.protobuf.CategoryRestriction, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.compservice.model.protobuf.CategoryDescriptor} returns this
 */
proto.compservice.model.protobuf.CategoryDescriptor.prototype.clearRestrictionsList = function() {
  return this.setRestrictionsList([]);
};


/**
 * optional string id = 2;
 * @return {string}
 */
proto.compservice.model.protobuf.CategoryDescriptor.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.compservice.model.protobuf.CategoryDescriptor} returns this
 */
proto.compservice.model.protobuf.CategoryDescriptor.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.compservice.model.protobuf.CategoryDescriptor.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.compservice.model.protobuf.CategoryDescriptor} returns this
 */
proto.compservice.model.protobuf.CategoryDescriptor.prototype.setName = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.compservice.model.protobuf.CategoryDescriptor} returns this
 */
proto.compservice.model.protobuf.CategoryDescriptor.prototype.clearName = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.compservice.model.protobuf.CategoryDescriptor.prototype.hasName = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool registrationOpen = 4;
 * @return {boolean}
 */
proto.compservice.model.protobuf.CategoryDescriptor.prototype.getRegistrationopen = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.compservice.model.protobuf.CategoryDescriptor} returns this
 */
proto.compservice.model.protobuf.CategoryDescriptor.prototype.setRegistrationopen = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};





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
proto.compservice.model.protobuf.CategoryRestriction.prototype.toObject = function(opt_includeInstance) {
  return proto.compservice.model.protobuf.CategoryRestriction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.compservice.model.protobuf.CategoryRestriction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.compservice.model.protobuf.CategoryRestriction.toObject = function(includeInstance, msg) {
  var f, obj = {
    restrictionid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    type: jspb.Message.getFieldWithDefault(msg, 2, 0),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    value: jspb.Message.getFieldWithDefault(msg, 4, ""),
    alias: jspb.Message.getFieldWithDefault(msg, 5, ""),
    minvalue: jspb.Message.getFieldWithDefault(msg, 6, ""),
    maxvalue: jspb.Message.getFieldWithDefault(msg, 7, ""),
    unit: jspb.Message.getFieldWithDefault(msg, 8, ""),
    restrictionorder: jspb.Message.getFieldWithDefault(msg, 9, 0)
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
 * @return {!proto.compservice.model.protobuf.CategoryRestriction}
 */
proto.compservice.model.protobuf.CategoryRestriction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.compservice.model.protobuf.CategoryRestriction;
  return proto.compservice.model.protobuf.CategoryRestriction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.compservice.model.protobuf.CategoryRestriction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.compservice.model.protobuf.CategoryRestriction}
 */
proto.compservice.model.protobuf.CategoryRestriction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRestrictionid(value);
      break;
    case 2:
      var value = /** @type {!proto.compservice.model.protobuf.CategoryRestrictionType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setAlias(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setMinvalue(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setMaxvalue(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setUnit(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRestrictionorder(value);
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
proto.compservice.model.protobuf.CategoryRestriction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.compservice.model.protobuf.CategoryRestriction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.compservice.model.protobuf.CategoryRestriction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.compservice.model.protobuf.CategoryRestriction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRestrictionid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeString(
      6,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeString(
      7,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getRestrictionorder();
  if (f !== 0) {
    writer.writeInt32(
      9,
      f
    );
  }
};


/**
 * optional string restrictionId = 1;
 * @return {string}
 */
proto.compservice.model.protobuf.CategoryRestriction.prototype.getRestrictionid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.compservice.model.protobuf.CategoryRestriction} returns this
 */
proto.compservice.model.protobuf.CategoryRestriction.prototype.setRestrictionid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional CategoryRestrictionType type = 2;
 * @return {!proto.compservice.model.protobuf.CategoryRestrictionType}
 */
proto.compservice.model.protobuf.CategoryRestriction.prototype.getType = function() {
  return /** @type {!proto.compservice.model.protobuf.CategoryRestrictionType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.compservice.model.protobuf.CategoryRestrictionType} value
 * @return {!proto.compservice.model.protobuf.CategoryRestriction} returns this
 */
proto.compservice.model.protobuf.CategoryRestriction.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.compservice.model.protobuf.CategoryRestriction.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.compservice.model.protobuf.CategoryRestriction} returns this
 */
proto.compservice.model.protobuf.CategoryRestriction.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string value = 4;
 * @return {string}
 */
proto.compservice.model.protobuf.CategoryRestriction.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.compservice.model.protobuf.CategoryRestriction} returns this
 */
proto.compservice.model.protobuf.CategoryRestriction.prototype.setValue = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.compservice.model.protobuf.CategoryRestriction} returns this
 */
proto.compservice.model.protobuf.CategoryRestriction.prototype.clearValue = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.compservice.model.protobuf.CategoryRestriction.prototype.hasValue = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string alias = 5;
 * @return {string}
 */
proto.compservice.model.protobuf.CategoryRestriction.prototype.getAlias = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.compservice.model.protobuf.CategoryRestriction} returns this
 */
proto.compservice.model.protobuf.CategoryRestriction.prototype.setAlias = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.compservice.model.protobuf.CategoryRestriction} returns this
 */
proto.compservice.model.protobuf.CategoryRestriction.prototype.clearAlias = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.compservice.model.protobuf.CategoryRestriction.prototype.hasAlias = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string minValue = 6;
 * @return {string}
 */
proto.compservice.model.protobuf.CategoryRestriction.prototype.getMinvalue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.compservice.model.protobuf.CategoryRestriction} returns this
 */
proto.compservice.model.protobuf.CategoryRestriction.prototype.setMinvalue = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.compservice.model.protobuf.CategoryRestriction} returns this
 */
proto.compservice.model.protobuf.CategoryRestriction.prototype.clearMinvalue = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.compservice.model.protobuf.CategoryRestriction.prototype.hasMinvalue = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string maxValue = 7;
 * @return {string}
 */
proto.compservice.model.protobuf.CategoryRestriction.prototype.getMaxvalue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.compservice.model.protobuf.CategoryRestriction} returns this
 */
proto.compservice.model.protobuf.CategoryRestriction.prototype.setMaxvalue = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.compservice.model.protobuf.CategoryRestriction} returns this
 */
proto.compservice.model.protobuf.CategoryRestriction.prototype.clearMaxvalue = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.compservice.model.protobuf.CategoryRestriction.prototype.hasMaxvalue = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string unit = 8;
 * @return {string}
 */
proto.compservice.model.protobuf.CategoryRestriction.prototype.getUnit = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.compservice.model.protobuf.CategoryRestriction} returns this
 */
proto.compservice.model.protobuf.CategoryRestriction.prototype.setUnit = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.compservice.model.protobuf.CategoryRestriction} returns this
 */
proto.compservice.model.protobuf.CategoryRestriction.prototype.clearUnit = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.compservice.model.protobuf.CategoryRestriction.prototype.hasUnit = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional int32 restrictionOrder = 9;
 * @return {number}
 */
proto.compservice.model.protobuf.CategoryRestriction.prototype.getRestrictionorder = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.compservice.model.protobuf.CategoryRestriction} returns this
 */
proto.compservice.model.protobuf.CategoryRestriction.prototype.setRestrictionorder = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};





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
proto.compservice.model.protobuf.CategoryState.prototype.toObject = function(opt_includeInstance) {
  return proto.compservice.model.protobuf.CategoryState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.compservice.model.protobuf.CategoryState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.compservice.model.protobuf.CategoryState.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    competitionid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    category: (f = msg.getCategory()) && proto.compservice.model.protobuf.CategoryDescriptor.toObject(includeInstance, f),
    fightsnumber: jspb.Message.getFieldWithDefault(msg, 4, 0),
    numberofcompetitors: jspb.Message.getFieldWithDefault(msg, 5, 0)
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
 * @return {!proto.compservice.model.protobuf.CategoryState}
 */
proto.compservice.model.protobuf.CategoryState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.compservice.model.protobuf.CategoryState;
  return proto.compservice.model.protobuf.CategoryState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.compservice.model.protobuf.CategoryState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.compservice.model.protobuf.CategoryState}
 */
proto.compservice.model.protobuf.CategoryState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCompetitionid(value);
      break;
    case 3:
      var value = new proto.compservice.model.protobuf.CategoryDescriptor;
      reader.readMessage(value,proto.compservice.model.protobuf.CategoryDescriptor.deserializeBinaryFromReader);
      msg.setCategory(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setFightsnumber(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNumberofcompetitors(value);
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
proto.compservice.model.protobuf.CategoryState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.compservice.model.protobuf.CategoryState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.compservice.model.protobuf.CategoryState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.compservice.model.protobuf.CategoryState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCompetitionid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCategory();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.compservice.model.protobuf.CategoryDescriptor.serializeBinaryToWriter
    );
  }
  f = message.getFightsnumber();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getNumberofcompetitors();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.compservice.model.protobuf.CategoryState.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.compservice.model.protobuf.CategoryState} returns this
 */
proto.compservice.model.protobuf.CategoryState.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string competitionId = 2;
 * @return {string}
 */
proto.compservice.model.protobuf.CategoryState.prototype.getCompetitionid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.compservice.model.protobuf.CategoryState} returns this
 */
proto.compservice.model.protobuf.CategoryState.prototype.setCompetitionid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional CategoryDescriptor category = 3;
 * @return {?proto.compservice.model.protobuf.CategoryDescriptor}
 */
proto.compservice.model.protobuf.CategoryState.prototype.getCategory = function() {
  return /** @type{?proto.compservice.model.protobuf.CategoryDescriptor} */ (
    jspb.Message.getWrapperField(this, proto.compservice.model.protobuf.CategoryDescriptor, 3));
};


/**
 * @param {?proto.compservice.model.protobuf.CategoryDescriptor|undefined} value
 * @return {!proto.compservice.model.protobuf.CategoryState} returns this
*/
proto.compservice.model.protobuf.CategoryState.prototype.setCategory = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.compservice.model.protobuf.CategoryState} returns this
 */
proto.compservice.model.protobuf.CategoryState.prototype.clearCategory = function() {
  return this.setCategory(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.compservice.model.protobuf.CategoryState.prototype.hasCategory = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 fightsNumber = 4;
 * @return {number}
 */
proto.compservice.model.protobuf.CategoryState.prototype.getFightsnumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.compservice.model.protobuf.CategoryState} returns this
 */
proto.compservice.model.protobuf.CategoryState.prototype.setFightsnumber = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 numberOfCompetitors = 5;
 * @return {number}
 */
proto.compservice.model.protobuf.CategoryState.prototype.getNumberofcompetitors = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.compservice.model.protobuf.CategoryState} returns this
 */
proto.compservice.model.protobuf.CategoryState.prototype.setNumberofcompetitors = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.compservice.model.protobuf.CompetitionProperties.repeatedFields_ = [3,7];



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
proto.compservice.model.protobuf.CompetitionProperties.prototype.toObject = function(opt_includeInstance) {
  return proto.compservice.model.protobuf.CompetitionProperties.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.compservice.model.protobuf.CompetitionProperties} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.compservice.model.protobuf.CompetitionProperties.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    creatorid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    staffidsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    emailnotificationsenabled: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    competitionname: jspb.Message.getFieldWithDefault(msg, 5, ""),
    emailtemplate: jspb.Message.getFieldWithDefault(msg, 6, ""),
    promocodesList: jspb.Message.toObjectList(msg.getPromocodesList(),
    proto.compservice.model.protobuf.PromoCode.toObject, includeInstance),
    startdate: (f = msg.getStartdate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    schedulepublished: jspb.Message.getBooleanFieldWithDefault(msg, 9, false),
    bracketspublished: jspb.Message.getBooleanFieldWithDefault(msg, 10, false),
    enddate: (f = msg.getEnddate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    timezone: jspb.Message.getFieldWithDefault(msg, 12, ""),
    creationtimestamp: (f = msg.getCreationtimestamp()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    status: jspb.Message.getFieldWithDefault(msg, 14, 0)
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
 * @return {!proto.compservice.model.protobuf.CompetitionProperties}
 */
proto.compservice.model.protobuf.CompetitionProperties.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.compservice.model.protobuf.CompetitionProperties;
  return proto.compservice.model.protobuf.CompetitionProperties.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.compservice.model.protobuf.CompetitionProperties} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.compservice.model.protobuf.CompetitionProperties}
 */
proto.compservice.model.protobuf.CompetitionProperties.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatorid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addStaffids(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEmailnotificationsenabled(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setCompetitionname(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmailtemplate(value);
      break;
    case 7:
      var value = new proto.compservice.model.protobuf.PromoCode;
      reader.readMessage(value,proto.compservice.model.protobuf.PromoCode.deserializeBinaryFromReader);
      msg.addPromocodes(value);
      break;
    case 8:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setStartdate(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSchedulepublished(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBracketspublished(value);
      break;
    case 11:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setEnddate(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setTimezone(value);
      break;
    case 13:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreationtimestamp(value);
      break;
    case 14:
      var value = /** @type {!proto.compservice.model.protobuf.CompetitionStatus} */ (reader.readEnum());
      msg.setStatus(value);
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
proto.compservice.model.protobuf.CompetitionProperties.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.compservice.model.protobuf.CompetitionProperties.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.compservice.model.protobuf.CompetitionProperties} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.compservice.model.protobuf.CompetitionProperties.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCreatorid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getStaffidsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getEmailnotificationsenabled();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getCompetitionname();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getPromocodesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      proto.compservice.model.protobuf.PromoCode.serializeBinaryToWriter
    );
  }
  f = message.getStartdate();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getSchedulepublished();
  if (f) {
    writer.writeBool(
      9,
      f
    );
  }
  f = message.getBracketspublished();
  if (f) {
    writer.writeBool(
      10,
      f
    );
  }
  f = message.getEnddate();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getTimezone();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getCreationtimestamp();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      14,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.compservice.model.protobuf.CompetitionProperties.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.compservice.model.protobuf.CompetitionProperties} returns this
 */
proto.compservice.model.protobuf.CompetitionProperties.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string creatorId = 2;
 * @return {string}
 */
proto.compservice.model.protobuf.CompetitionProperties.prototype.getCreatorid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.compservice.model.protobuf.CompetitionProperties} returns this
 */
proto.compservice.model.protobuf.CompetitionProperties.prototype.setCreatorid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated string staffIds = 3;
 * @return {!Array<string>}
 */
proto.compservice.model.protobuf.CompetitionProperties.prototype.getStaffidsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.compservice.model.protobuf.CompetitionProperties} returns this
 */
proto.compservice.model.protobuf.CompetitionProperties.prototype.setStaffidsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.compservice.model.protobuf.CompetitionProperties} returns this
 */
proto.compservice.model.protobuf.CompetitionProperties.prototype.addStaffids = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.compservice.model.protobuf.CompetitionProperties} returns this
 */
proto.compservice.model.protobuf.CompetitionProperties.prototype.clearStaffidsList = function() {
  return this.setStaffidsList([]);
};


/**
 * optional bool emailNotificationsEnabled = 4;
 * @return {boolean}
 */
proto.compservice.model.protobuf.CompetitionProperties.prototype.getEmailnotificationsenabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.compservice.model.protobuf.CompetitionProperties} returns this
 */
proto.compservice.model.protobuf.CompetitionProperties.prototype.setEmailnotificationsenabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional string competitionName = 5;
 * @return {string}
 */
proto.compservice.model.protobuf.CompetitionProperties.prototype.getCompetitionname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.compservice.model.protobuf.CompetitionProperties} returns this
 */
proto.compservice.model.protobuf.CompetitionProperties.prototype.setCompetitionname = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string emailTemplate = 6;
 * @return {string}
 */
proto.compservice.model.protobuf.CompetitionProperties.prototype.getEmailtemplate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.compservice.model.protobuf.CompetitionProperties} returns this
 */
proto.compservice.model.protobuf.CompetitionProperties.prototype.setEmailtemplate = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.compservice.model.protobuf.CompetitionProperties} returns this
 */
proto.compservice.model.protobuf.CompetitionProperties.prototype.clearEmailtemplate = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.compservice.model.protobuf.CompetitionProperties.prototype.hasEmailtemplate = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * repeated PromoCode promoCodes = 7;
 * @return {!Array<!proto.compservice.model.protobuf.PromoCode>}
 */
proto.compservice.model.protobuf.CompetitionProperties.prototype.getPromocodesList = function() {
  return /** @type{!Array<!proto.compservice.model.protobuf.PromoCode>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.compservice.model.protobuf.PromoCode, 7));
};


/**
 * @param {!Array<!proto.compservice.model.protobuf.PromoCode>} value
 * @return {!proto.compservice.model.protobuf.CompetitionProperties} returns this
*/
proto.compservice.model.protobuf.CompetitionProperties.prototype.setPromocodesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.compservice.model.protobuf.PromoCode=} opt_value
 * @param {number=} opt_index
 * @return {!proto.compservice.model.protobuf.PromoCode}
 */
proto.compservice.model.protobuf.CompetitionProperties.prototype.addPromocodes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.compservice.model.protobuf.PromoCode, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.compservice.model.protobuf.CompetitionProperties} returns this
 */
proto.compservice.model.protobuf.CompetitionProperties.prototype.clearPromocodesList = function() {
  return this.setPromocodesList([]);
};


/**
 * optional google.protobuf.Timestamp startDate = 8;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.compservice.model.protobuf.CompetitionProperties.prototype.getStartdate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 8));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.compservice.model.protobuf.CompetitionProperties} returns this
*/
proto.compservice.model.protobuf.CompetitionProperties.prototype.setStartdate = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.compservice.model.protobuf.CompetitionProperties} returns this
 */
proto.compservice.model.protobuf.CompetitionProperties.prototype.clearStartdate = function() {
  return this.setStartdate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.compservice.model.protobuf.CompetitionProperties.prototype.hasStartdate = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional bool schedulePublished = 9;
 * @return {boolean}
 */
proto.compservice.model.protobuf.CompetitionProperties.prototype.getSchedulepublished = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.compservice.model.protobuf.CompetitionProperties} returns this
 */
proto.compservice.model.protobuf.CompetitionProperties.prototype.setSchedulepublished = function(value) {
  return jspb.Message.setProto3BooleanField(this, 9, value);
};


/**
 * optional bool bracketsPublished = 10;
 * @return {boolean}
 */
proto.compservice.model.protobuf.CompetitionProperties.prototype.getBracketspublished = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.compservice.model.protobuf.CompetitionProperties} returns this
 */
proto.compservice.model.protobuf.CompetitionProperties.prototype.setBracketspublished = function(value) {
  return jspb.Message.setProto3BooleanField(this, 10, value);
};


/**
 * optional google.protobuf.Timestamp endDate = 11;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.compservice.model.protobuf.CompetitionProperties.prototype.getEnddate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 11));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.compservice.model.protobuf.CompetitionProperties} returns this
*/
proto.compservice.model.protobuf.CompetitionProperties.prototype.setEnddate = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.compservice.model.protobuf.CompetitionProperties} returns this
 */
proto.compservice.model.protobuf.CompetitionProperties.prototype.clearEnddate = function() {
  return this.setEnddate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.compservice.model.protobuf.CompetitionProperties.prototype.hasEnddate = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional string timeZone = 12;
 * @return {string}
 */
proto.compservice.model.protobuf.CompetitionProperties.prototype.getTimezone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.compservice.model.protobuf.CompetitionProperties} returns this
 */
proto.compservice.model.protobuf.CompetitionProperties.prototype.setTimezone = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional google.protobuf.Timestamp creationTimestamp = 13;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.compservice.model.protobuf.CompetitionProperties.prototype.getCreationtimestamp = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 13));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.compservice.model.protobuf.CompetitionProperties} returns this
*/
proto.compservice.model.protobuf.CompetitionProperties.prototype.setCreationtimestamp = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.compservice.model.protobuf.CompetitionProperties} returns this
 */
proto.compservice.model.protobuf.CompetitionProperties.prototype.clearCreationtimestamp = function() {
  return this.setCreationtimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.compservice.model.protobuf.CompetitionProperties.prototype.hasCreationtimestamp = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional CompetitionStatus status = 14;
 * @return {!proto.compservice.model.protobuf.CompetitionStatus}
 */
proto.compservice.model.protobuf.CompetitionProperties.prototype.getStatus = function() {
  return /** @type {!proto.compservice.model.protobuf.CompetitionStatus} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {!proto.compservice.model.protobuf.CompetitionStatus} value
 * @return {!proto.compservice.model.protobuf.CompetitionProperties} returns this
 */
proto.compservice.model.protobuf.CompetitionProperties.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 14, value);
};





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
proto.compservice.model.protobuf.PromoCode.prototype.toObject = function(opt_includeInstance) {
  return proto.compservice.model.protobuf.PromoCode.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.compservice.model.protobuf.PromoCode} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.compservice.model.protobuf.PromoCode.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    coefficient: jspb.Message.getFieldWithDefault(msg, 2, 0),
    competitionid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    startat: (f = msg.getStartat()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    expireat: (f = msg.getExpireat()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.compservice.model.protobuf.PromoCode}
 */
proto.compservice.model.protobuf.PromoCode.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.compservice.model.protobuf.PromoCode;
  return proto.compservice.model.protobuf.PromoCode.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.compservice.model.protobuf.PromoCode} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.compservice.model.protobuf.PromoCode}
 */
proto.compservice.model.protobuf.PromoCode.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCoefficient(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCompetitionid(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setStartat(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setExpireat(value);
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
proto.compservice.model.protobuf.PromoCode.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.compservice.model.protobuf.PromoCode.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.compservice.model.protobuf.PromoCode} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.compservice.model.protobuf.PromoCode.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCoefficient();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getCompetitionid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getStartat();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getExpireat();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.compservice.model.protobuf.PromoCode.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.compservice.model.protobuf.PromoCode} returns this
 */
proto.compservice.model.protobuf.PromoCode.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 coefficient = 2;
 * @return {number}
 */
proto.compservice.model.protobuf.PromoCode.prototype.getCoefficient = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.compservice.model.protobuf.PromoCode} returns this
 */
proto.compservice.model.protobuf.PromoCode.prototype.setCoefficient = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string competitionId = 3;
 * @return {string}
 */
proto.compservice.model.protobuf.PromoCode.prototype.getCompetitionid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.compservice.model.protobuf.PromoCode} returns this
 */
proto.compservice.model.protobuf.PromoCode.prototype.setCompetitionid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional google.protobuf.Timestamp startAt = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.compservice.model.protobuf.PromoCode.prototype.getStartat = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.compservice.model.protobuf.PromoCode} returns this
*/
proto.compservice.model.protobuf.PromoCode.prototype.setStartat = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.compservice.model.protobuf.PromoCode} returns this
 */
proto.compservice.model.protobuf.PromoCode.prototype.clearStartat = function() {
  return this.setStartat(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.compservice.model.protobuf.PromoCode.prototype.hasStartat = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.Timestamp expireAt = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.compservice.model.protobuf.PromoCode.prototype.getExpireat = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.compservice.model.protobuf.PromoCode} returns this
*/
proto.compservice.model.protobuf.PromoCode.prototype.setExpireat = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.compservice.model.protobuf.PromoCode} returns this
 */
proto.compservice.model.protobuf.PromoCode.prototype.clearExpireat = function() {
  return this.setExpireat(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.compservice.model.protobuf.PromoCode.prototype.hasExpireat = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.compservice.model.protobuf.CompetitionProcessorNotification.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.compservice.model.protobuf.CompetitionProcessorNotification.NotificationCase = {
  NOTIFICATION_NOT_SET: 0,
  STARTED: 1,
  STOPPED: 2
};

/**
 * @return {proto.compservice.model.protobuf.CompetitionProcessorNotification.NotificationCase}
 */
proto.compservice.model.protobuf.CompetitionProcessorNotification.prototype.getNotificationCase = function() {
  return /** @type {proto.compservice.model.protobuf.CompetitionProcessorNotification.NotificationCase} */(jspb.Message.computeOneofCase(this, proto.compservice.model.protobuf.CompetitionProcessorNotification.oneofGroups_[0]));
};



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
proto.compservice.model.protobuf.CompetitionProcessorNotification.prototype.toObject = function(opt_includeInstance) {
  return proto.compservice.model.protobuf.CompetitionProcessorNotification.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.compservice.model.protobuf.CompetitionProcessorNotification} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.compservice.model.protobuf.CompetitionProcessorNotification.toObject = function(includeInstance, msg) {
  var f, obj = {
    started: (f = msg.getStarted()) && proto.compservice.model.protobuf.CompetitionProcessingStarted.toObject(includeInstance, f),
    stopped: (f = msg.getStopped()) && proto.compservice.model.protobuf.CompetitionProcessingStopped.toObject(includeInstance, f)
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
 * @return {!proto.compservice.model.protobuf.CompetitionProcessorNotification}
 */
proto.compservice.model.protobuf.CompetitionProcessorNotification.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.compservice.model.protobuf.CompetitionProcessorNotification;
  return proto.compservice.model.protobuf.CompetitionProcessorNotification.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.compservice.model.protobuf.CompetitionProcessorNotification} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.compservice.model.protobuf.CompetitionProcessorNotification}
 */
proto.compservice.model.protobuf.CompetitionProcessorNotification.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.compservice.model.protobuf.CompetitionProcessingStarted;
      reader.readMessage(value,proto.compservice.model.protobuf.CompetitionProcessingStarted.deserializeBinaryFromReader);
      msg.setStarted(value);
      break;
    case 2:
      var value = new proto.compservice.model.protobuf.CompetitionProcessingStopped;
      reader.readMessage(value,proto.compservice.model.protobuf.CompetitionProcessingStopped.deserializeBinaryFromReader);
      msg.setStopped(value);
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
proto.compservice.model.protobuf.CompetitionProcessorNotification.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.compservice.model.protobuf.CompetitionProcessorNotification.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.compservice.model.protobuf.CompetitionProcessorNotification} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.compservice.model.protobuf.CompetitionProcessorNotification.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStarted();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.compservice.model.protobuf.CompetitionProcessingStarted.serializeBinaryToWriter
    );
  }
  f = message.getStopped();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.compservice.model.protobuf.CompetitionProcessingStopped.serializeBinaryToWriter
    );
  }
};


/**
 * optional CompetitionProcessingStarted started = 1;
 * @return {?proto.compservice.model.protobuf.CompetitionProcessingStarted}
 */
proto.compservice.model.protobuf.CompetitionProcessorNotification.prototype.getStarted = function() {
  return /** @type{?proto.compservice.model.protobuf.CompetitionProcessingStarted} */ (
    jspb.Message.getWrapperField(this, proto.compservice.model.protobuf.CompetitionProcessingStarted, 1));
};


/**
 * @param {?proto.compservice.model.protobuf.CompetitionProcessingStarted|undefined} value
 * @return {!proto.compservice.model.protobuf.CompetitionProcessorNotification} returns this
*/
proto.compservice.model.protobuf.CompetitionProcessorNotification.prototype.setStarted = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.compservice.model.protobuf.CompetitionProcessorNotification.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.compservice.model.protobuf.CompetitionProcessorNotification} returns this
 */
proto.compservice.model.protobuf.CompetitionProcessorNotification.prototype.clearStarted = function() {
  return this.setStarted(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.compservice.model.protobuf.CompetitionProcessorNotification.prototype.hasStarted = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional CompetitionProcessingStopped stopped = 2;
 * @return {?proto.compservice.model.protobuf.CompetitionProcessingStopped}
 */
proto.compservice.model.protobuf.CompetitionProcessorNotification.prototype.getStopped = function() {
  return /** @type{?proto.compservice.model.protobuf.CompetitionProcessingStopped} */ (
    jspb.Message.getWrapperField(this, proto.compservice.model.protobuf.CompetitionProcessingStopped, 2));
};


/**
 * @param {?proto.compservice.model.protobuf.CompetitionProcessingStopped|undefined} value
 * @return {!proto.compservice.model.protobuf.CompetitionProcessorNotification} returns this
*/
proto.compservice.model.protobuf.CompetitionProcessorNotification.prototype.setStopped = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.compservice.model.protobuf.CompetitionProcessorNotification.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.compservice.model.protobuf.CompetitionProcessorNotification} returns this
 */
proto.compservice.model.protobuf.CompetitionProcessorNotification.prototype.clearStopped = function() {
  return this.setStopped(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.compservice.model.protobuf.CompetitionProcessorNotification.prototype.hasStopped = function() {
  return jspb.Message.getField(this, 2) != null;
};





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
proto.compservice.model.protobuf.CompetitionProcessingStarted.prototype.toObject = function(opt_includeInstance) {
  return proto.compservice.model.protobuf.CompetitionProcessingStarted.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.compservice.model.protobuf.CompetitionProcessingStarted} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.compservice.model.protobuf.CompetitionProcessingStarted.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    topic: jspb.Message.getFieldWithDefault(msg, 3, ""),
    creatorid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    createdat: (f = msg.getCreatedat()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    startsat: (f = msg.getStartsat()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    endsat: (f = msg.getEndsat()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    timezone: jspb.Message.getFieldWithDefault(msg, 8, ""),
    status: jspb.Message.getFieldWithDefault(msg, 9, 0)
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
 * @return {!proto.compservice.model.protobuf.CompetitionProcessingStarted}
 */
proto.compservice.model.protobuf.CompetitionProcessingStarted.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.compservice.model.protobuf.CompetitionProcessingStarted;
  return proto.compservice.model.protobuf.CompetitionProcessingStarted.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.compservice.model.protobuf.CompetitionProcessingStarted} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.compservice.model.protobuf.CompetitionProcessingStarted}
 */
proto.compservice.model.protobuf.CompetitionProcessingStarted.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTopic(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatorid(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedat(value);
      break;
    case 6:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setStartsat(value);
      break;
    case 7:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setEndsat(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setTimezone(value);
      break;
    case 9:
      var value = /** @type {!proto.compservice.model.protobuf.CompetitionStatus} */ (reader.readEnum());
      msg.setStatus(value);
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
proto.compservice.model.protobuf.CompetitionProcessingStarted.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.compservice.model.protobuf.CompetitionProcessingStarted.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.compservice.model.protobuf.CompetitionProcessingStarted} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.compservice.model.protobuf.CompetitionProcessingStarted.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTopic();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCreatorid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getCreatedat();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getStartsat();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getEndsat();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getTimezone();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      9,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.compservice.model.protobuf.CompetitionProcessingStarted.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.compservice.model.protobuf.CompetitionProcessingStarted} returns this
 */
proto.compservice.model.protobuf.CompetitionProcessingStarted.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.compservice.model.protobuf.CompetitionProcessingStarted.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.compservice.model.protobuf.CompetitionProcessingStarted} returns this
 */
proto.compservice.model.protobuf.CompetitionProcessingStarted.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string topic = 3;
 * @return {string}
 */
proto.compservice.model.protobuf.CompetitionProcessingStarted.prototype.getTopic = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.compservice.model.protobuf.CompetitionProcessingStarted} returns this
 */
proto.compservice.model.protobuf.CompetitionProcessingStarted.prototype.setTopic = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string creatorId = 4;
 * @return {string}
 */
proto.compservice.model.protobuf.CompetitionProcessingStarted.prototype.getCreatorid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.compservice.model.protobuf.CompetitionProcessingStarted} returns this
 */
proto.compservice.model.protobuf.CompetitionProcessingStarted.prototype.setCreatorid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional google.protobuf.Timestamp createdAt = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.compservice.model.protobuf.CompetitionProcessingStarted.prototype.getCreatedat = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.compservice.model.protobuf.CompetitionProcessingStarted} returns this
*/
proto.compservice.model.protobuf.CompetitionProcessingStarted.prototype.setCreatedat = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.compservice.model.protobuf.CompetitionProcessingStarted} returns this
 */
proto.compservice.model.protobuf.CompetitionProcessingStarted.prototype.clearCreatedat = function() {
  return this.setCreatedat(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.compservice.model.protobuf.CompetitionProcessingStarted.prototype.hasCreatedat = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.Timestamp startsAt = 6;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.compservice.model.protobuf.CompetitionProcessingStarted.prototype.getStartsat = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 6));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.compservice.model.protobuf.CompetitionProcessingStarted} returns this
*/
proto.compservice.model.protobuf.CompetitionProcessingStarted.prototype.setStartsat = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.compservice.model.protobuf.CompetitionProcessingStarted} returns this
 */
proto.compservice.model.protobuf.CompetitionProcessingStarted.prototype.clearStartsat = function() {
  return this.setStartsat(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.compservice.model.protobuf.CompetitionProcessingStarted.prototype.hasStartsat = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional google.protobuf.Timestamp endsAt = 7;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.compservice.model.protobuf.CompetitionProcessingStarted.prototype.getEndsat = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 7));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.compservice.model.protobuf.CompetitionProcessingStarted} returns this
*/
proto.compservice.model.protobuf.CompetitionProcessingStarted.prototype.setEndsat = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.compservice.model.protobuf.CompetitionProcessingStarted} returns this
 */
proto.compservice.model.protobuf.CompetitionProcessingStarted.prototype.clearEndsat = function() {
  return this.setEndsat(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.compservice.model.protobuf.CompetitionProcessingStarted.prototype.hasEndsat = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string timeZone = 8;
 * @return {string}
 */
proto.compservice.model.protobuf.CompetitionProcessingStarted.prototype.getTimezone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.compservice.model.protobuf.CompetitionProcessingStarted} returns this
 */
proto.compservice.model.protobuf.CompetitionProcessingStarted.prototype.setTimezone = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional CompetitionStatus status = 9;
 * @return {!proto.compservice.model.protobuf.CompetitionStatus}
 */
proto.compservice.model.protobuf.CompetitionProcessingStarted.prototype.getStatus = function() {
  return /** @type {!proto.compservice.model.protobuf.CompetitionStatus} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {!proto.compservice.model.protobuf.CompetitionStatus} value
 * @return {!proto.compservice.model.protobuf.CompetitionProcessingStarted} returns this
 */
proto.compservice.model.protobuf.CompetitionProcessingStarted.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 9, value);
};





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
proto.compservice.model.protobuf.CompetitionProcessingStopped.prototype.toObject = function(opt_includeInstance) {
  return proto.compservice.model.protobuf.CompetitionProcessingStopped.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.compservice.model.protobuf.CompetitionProcessingStopped} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.compservice.model.protobuf.CompetitionProcessingStopped.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.compservice.model.protobuf.CompetitionProcessingStopped}
 */
proto.compservice.model.protobuf.CompetitionProcessingStopped.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.compservice.model.protobuf.CompetitionProcessingStopped;
  return proto.compservice.model.protobuf.CompetitionProcessingStopped.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.compservice.model.protobuf.CompetitionProcessingStopped} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.compservice.model.protobuf.CompetitionProcessingStopped}
 */
proto.compservice.model.protobuf.CompetitionProcessingStopped.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
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
proto.compservice.model.protobuf.CompetitionProcessingStopped.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.compservice.model.protobuf.CompetitionProcessingStopped.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.compservice.model.protobuf.CompetitionProcessingStopped} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.compservice.model.protobuf.CompetitionProcessingStopped.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.compservice.model.protobuf.CompetitionProcessingStopped.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.compservice.model.protobuf.CompetitionProcessingStopped} returns this
 */
proto.compservice.model.protobuf.CompetitionProcessingStopped.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.compservice.model.protobuf.CompetitionState.repeatedFields_ = [2];



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
proto.compservice.model.protobuf.CompetitionState.prototype.toObject = function(opt_includeInstance) {
  return proto.compservice.model.protobuf.CompetitionState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.compservice.model.protobuf.CompetitionState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.compservice.model.protobuf.CompetitionState.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    categoriesList: jspb.Message.toObjectList(msg.getCategoriesList(),
    proto.compservice.model.protobuf.CategoryState.toObject, includeInstance),
    properties: (f = msg.getProperties()) && proto.compservice.model.protobuf.CompetitionProperties.toObject(includeInstance, f),
    schedule: (f = msg.getSchedule()) && proto.compservice.model.protobuf.Schedule.toObject(includeInstance, f)
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
 * @return {!proto.compservice.model.protobuf.CompetitionState}
 */
proto.compservice.model.protobuf.CompetitionState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.compservice.model.protobuf.CompetitionState;
  return proto.compservice.model.protobuf.CompetitionState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.compservice.model.protobuf.CompetitionState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.compservice.model.protobuf.CompetitionState}
 */
proto.compservice.model.protobuf.CompetitionState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = new proto.compservice.model.protobuf.CategoryState;
      reader.readMessage(value,proto.compservice.model.protobuf.CategoryState.deserializeBinaryFromReader);
      msg.addCategories(value);
      break;
    case 3:
      var value = new proto.compservice.model.protobuf.CompetitionProperties;
      reader.readMessage(value,proto.compservice.model.protobuf.CompetitionProperties.deserializeBinaryFromReader);
      msg.setProperties(value);
      break;
    case 4:
      var value = new proto.compservice.model.protobuf.Schedule;
      reader.readMessage(value,proto.compservice.model.protobuf.Schedule.deserializeBinaryFromReader);
      msg.setSchedule(value);
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
proto.compservice.model.protobuf.CompetitionState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.compservice.model.protobuf.CompetitionState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.compservice.model.protobuf.CompetitionState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.compservice.model.protobuf.CompetitionState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCategoriesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.compservice.model.protobuf.CategoryState.serializeBinaryToWriter
    );
  }
  f = message.getProperties();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.compservice.model.protobuf.CompetitionProperties.serializeBinaryToWriter
    );
  }
  f = message.getSchedule();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.compservice.model.protobuf.Schedule.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.compservice.model.protobuf.CompetitionState.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.compservice.model.protobuf.CompetitionState} returns this
 */
proto.compservice.model.protobuf.CompetitionState.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated CategoryState categories = 2;
 * @return {!Array<!proto.compservice.model.protobuf.CategoryState>}
 */
proto.compservice.model.protobuf.CompetitionState.prototype.getCategoriesList = function() {
  return /** @type{!Array<!proto.compservice.model.protobuf.CategoryState>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.compservice.model.protobuf.CategoryState, 2));
};


/**
 * @param {!Array<!proto.compservice.model.protobuf.CategoryState>} value
 * @return {!proto.compservice.model.protobuf.CompetitionState} returns this
*/
proto.compservice.model.protobuf.CompetitionState.prototype.setCategoriesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.compservice.model.protobuf.CategoryState=} opt_value
 * @param {number=} opt_index
 * @return {!proto.compservice.model.protobuf.CategoryState}
 */
proto.compservice.model.protobuf.CompetitionState.prototype.addCategories = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.compservice.model.protobuf.CategoryState, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.compservice.model.protobuf.CompetitionState} returns this
 */
proto.compservice.model.protobuf.CompetitionState.prototype.clearCategoriesList = function() {
  return this.setCategoriesList([]);
};


/**
 * optional CompetitionProperties properties = 3;
 * @return {?proto.compservice.model.protobuf.CompetitionProperties}
 */
proto.compservice.model.protobuf.CompetitionState.prototype.getProperties = function() {
  return /** @type{?proto.compservice.model.protobuf.CompetitionProperties} */ (
    jspb.Message.getWrapperField(this, proto.compservice.model.protobuf.CompetitionProperties, 3));
};


/**
 * @param {?proto.compservice.model.protobuf.CompetitionProperties|undefined} value
 * @return {!proto.compservice.model.protobuf.CompetitionState} returns this
*/
proto.compservice.model.protobuf.CompetitionState.prototype.setProperties = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.compservice.model.protobuf.CompetitionState} returns this
 */
proto.compservice.model.protobuf.CompetitionState.prototype.clearProperties = function() {
  return this.setProperties(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.compservice.model.protobuf.CompetitionState.prototype.hasProperties = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Schedule schedule = 4;
 * @return {?proto.compservice.model.protobuf.Schedule}
 */
proto.compservice.model.protobuf.CompetitionState.prototype.getSchedule = function() {
  return /** @type{?proto.compservice.model.protobuf.Schedule} */ (
    jspb.Message.getWrapperField(this, proto.compservice.model.protobuf.Schedule, 4));
};


/**
 * @param {?proto.compservice.model.protobuf.Schedule|undefined} value
 * @return {!proto.compservice.model.protobuf.CompetitionState} returns this
*/
proto.compservice.model.protobuf.CompetitionState.prototype.setSchedule = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.compservice.model.protobuf.CompetitionState} returns this
 */
proto.compservice.model.protobuf.CompetitionState.prototype.clearSchedule = function() {
  return this.setSchedule(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.compservice.model.protobuf.CompetitionState.prototype.hasSchedule = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.compservice.model.protobuf.Schedule.repeatedFields_ = [2,3];



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
proto.compservice.model.protobuf.Schedule.prototype.toObject = function(opt_includeInstance) {
  return proto.compservice.model.protobuf.Schedule.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.compservice.model.protobuf.Schedule} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.compservice.model.protobuf.Schedule.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    periodsList: jspb.Message.toObjectList(msg.getPeriodsList(),
    proto.compservice.model.protobuf.Period.toObject, includeInstance),
    matsList: jspb.Message.toObjectList(msg.getMatsList(),
    proto.compservice.model.protobuf.MatDescription.toObject, includeInstance)
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
 * @return {!proto.compservice.model.protobuf.Schedule}
 */
proto.compservice.model.protobuf.Schedule.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.compservice.model.protobuf.Schedule;
  return proto.compservice.model.protobuf.Schedule.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.compservice.model.protobuf.Schedule} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.compservice.model.protobuf.Schedule}
 */
proto.compservice.model.protobuf.Schedule.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = new proto.compservice.model.protobuf.Period;
      reader.readMessage(value,proto.compservice.model.protobuf.Period.deserializeBinaryFromReader);
      msg.addPeriods(value);
      break;
    case 3:
      var value = new proto.compservice.model.protobuf.MatDescription;
      reader.readMessage(value,proto.compservice.model.protobuf.MatDescription.deserializeBinaryFromReader);
      msg.addMats(value);
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
proto.compservice.model.protobuf.Schedule.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.compservice.model.protobuf.Schedule.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.compservice.model.protobuf.Schedule} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.compservice.model.protobuf.Schedule.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPeriodsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.compservice.model.protobuf.Period.serializeBinaryToWriter
    );
  }
  f = message.getMatsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.compservice.model.protobuf.MatDescription.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.compservice.model.protobuf.Schedule.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.compservice.model.protobuf.Schedule} returns this
 */
proto.compservice.model.protobuf.Schedule.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated Period periods = 2;
 * @return {!Array<!proto.compservice.model.protobuf.Period>}
 */
proto.compservice.model.protobuf.Schedule.prototype.getPeriodsList = function() {
  return /** @type{!Array<!proto.compservice.model.protobuf.Period>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.compservice.model.protobuf.Period, 2));
};


/**
 * @param {!Array<!proto.compservice.model.protobuf.Period>} value
 * @return {!proto.compservice.model.protobuf.Schedule} returns this
*/
proto.compservice.model.protobuf.Schedule.prototype.setPeriodsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.compservice.model.protobuf.Period=} opt_value
 * @param {number=} opt_index
 * @return {!proto.compservice.model.protobuf.Period}
 */
proto.compservice.model.protobuf.Schedule.prototype.addPeriods = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.compservice.model.protobuf.Period, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.compservice.model.protobuf.Schedule} returns this
 */
proto.compservice.model.protobuf.Schedule.prototype.clearPeriodsList = function() {
  return this.setPeriodsList([]);
};


/**
 * repeated MatDescription mats = 3;
 * @return {!Array<!proto.compservice.model.protobuf.MatDescription>}
 */
proto.compservice.model.protobuf.Schedule.prototype.getMatsList = function() {
  return /** @type{!Array<!proto.compservice.model.protobuf.MatDescription>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.compservice.model.protobuf.MatDescription, 3));
};


/**
 * @param {!Array<!proto.compservice.model.protobuf.MatDescription>} value
 * @return {!proto.compservice.model.protobuf.Schedule} returns this
*/
proto.compservice.model.protobuf.Schedule.prototype.setMatsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.compservice.model.protobuf.MatDescription=} opt_value
 * @param {number=} opt_index
 * @return {!proto.compservice.model.protobuf.MatDescription}
 */
proto.compservice.model.protobuf.Schedule.prototype.addMats = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.compservice.model.protobuf.MatDescription, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.compservice.model.protobuf.Schedule} returns this
 */
proto.compservice.model.protobuf.Schedule.prototype.clearMatsList = function() {
  return this.setMatsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.compservice.model.protobuf.Period.repeatedFields_ = [3,4];



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
proto.compservice.model.protobuf.Period.prototype.toObject = function(opt_includeInstance) {
  return proto.compservice.model.protobuf.Period.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.compservice.model.protobuf.Period} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.compservice.model.protobuf.Period.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    scheduleentriesList: jspb.Message.toObjectList(msg.getScheduleentriesList(),
    proto.compservice.model.protobuf.ScheduleEntry.toObject, includeInstance),
    schedulerequirementsList: jspb.Message.toObjectList(msg.getSchedulerequirementsList(),
    proto.compservice.model.protobuf.ScheduleRequirement.toObject, includeInstance),
    starttime: (f = msg.getStarttime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    endtime: (f = msg.getEndtime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    isactive: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    timebetweenfights: jspb.Message.getFieldWithDefault(msg, 8, 0),
    riskpercent: jspb.Message.getFieldWithDefault(msg, 9, 0)
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
 * @return {!proto.compservice.model.protobuf.Period}
 */
proto.compservice.model.protobuf.Period.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.compservice.model.protobuf.Period;
  return proto.compservice.model.protobuf.Period.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.compservice.model.protobuf.Period} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.compservice.model.protobuf.Period}
 */
proto.compservice.model.protobuf.Period.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = new proto.compservice.model.protobuf.ScheduleEntry;
      reader.readMessage(value,proto.compservice.model.protobuf.ScheduleEntry.deserializeBinaryFromReader);
      msg.addScheduleentries(value);
      break;
    case 4:
      var value = new proto.compservice.model.protobuf.ScheduleRequirement;
      reader.readMessage(value,proto.compservice.model.protobuf.ScheduleRequirement.deserializeBinaryFromReader);
      msg.addSchedulerequirements(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setStarttime(value);
      break;
    case 6:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setEndtime(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsactive(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTimebetweenfights(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRiskpercent(value);
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
proto.compservice.model.protobuf.Period.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.compservice.model.protobuf.Period.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.compservice.model.protobuf.Period} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.compservice.model.protobuf.Period.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getScheduleentriesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.compservice.model.protobuf.ScheduleEntry.serializeBinaryToWriter
    );
  }
  f = message.getSchedulerequirementsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.compservice.model.protobuf.ScheduleRequirement.serializeBinaryToWriter
    );
  }
  f = message.getStarttime();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getEndtime();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getIsactive();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getTimebetweenfights();
  if (f !== 0) {
    writer.writeInt32(
      8,
      f
    );
  }
  f = message.getRiskpercent();
  if (f !== 0) {
    writer.writeInt32(
      9,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.compservice.model.protobuf.Period.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.compservice.model.protobuf.Period} returns this
 */
proto.compservice.model.protobuf.Period.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.compservice.model.protobuf.Period.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.compservice.model.protobuf.Period} returns this
 */
proto.compservice.model.protobuf.Period.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated ScheduleEntry scheduleEntries = 3;
 * @return {!Array<!proto.compservice.model.protobuf.ScheduleEntry>}
 */
proto.compservice.model.protobuf.Period.prototype.getScheduleentriesList = function() {
  return /** @type{!Array<!proto.compservice.model.protobuf.ScheduleEntry>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.compservice.model.protobuf.ScheduleEntry, 3));
};


/**
 * @param {!Array<!proto.compservice.model.protobuf.ScheduleEntry>} value
 * @return {!proto.compservice.model.protobuf.Period} returns this
*/
proto.compservice.model.protobuf.Period.prototype.setScheduleentriesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.compservice.model.protobuf.ScheduleEntry=} opt_value
 * @param {number=} opt_index
 * @return {!proto.compservice.model.protobuf.ScheduleEntry}
 */
proto.compservice.model.protobuf.Period.prototype.addScheduleentries = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.compservice.model.protobuf.ScheduleEntry, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.compservice.model.protobuf.Period} returns this
 */
proto.compservice.model.protobuf.Period.prototype.clearScheduleentriesList = function() {
  return this.setScheduleentriesList([]);
};


/**
 * repeated ScheduleRequirement scheduleRequirements = 4;
 * @return {!Array<!proto.compservice.model.protobuf.ScheduleRequirement>}
 */
proto.compservice.model.protobuf.Period.prototype.getSchedulerequirementsList = function() {
  return /** @type{!Array<!proto.compservice.model.protobuf.ScheduleRequirement>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.compservice.model.protobuf.ScheduleRequirement, 4));
};


/**
 * @param {!Array<!proto.compservice.model.protobuf.ScheduleRequirement>} value
 * @return {!proto.compservice.model.protobuf.Period} returns this
*/
proto.compservice.model.protobuf.Period.prototype.setSchedulerequirementsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.compservice.model.protobuf.ScheduleRequirement=} opt_value
 * @param {number=} opt_index
 * @return {!proto.compservice.model.protobuf.ScheduleRequirement}
 */
proto.compservice.model.protobuf.Period.prototype.addSchedulerequirements = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.compservice.model.protobuf.ScheduleRequirement, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.compservice.model.protobuf.Period} returns this
 */
proto.compservice.model.protobuf.Period.prototype.clearSchedulerequirementsList = function() {
  return this.setSchedulerequirementsList([]);
};


/**
 * optional google.protobuf.Timestamp startTime = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.compservice.model.protobuf.Period.prototype.getStarttime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.compservice.model.protobuf.Period} returns this
*/
proto.compservice.model.protobuf.Period.prototype.setStarttime = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.compservice.model.protobuf.Period} returns this
 */
proto.compservice.model.protobuf.Period.prototype.clearStarttime = function() {
  return this.setStarttime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.compservice.model.protobuf.Period.prototype.hasStarttime = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.Timestamp endTime = 6;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.compservice.model.protobuf.Period.prototype.getEndtime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 6));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.compservice.model.protobuf.Period} returns this
*/
proto.compservice.model.protobuf.Period.prototype.setEndtime = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.compservice.model.protobuf.Period} returns this
 */
proto.compservice.model.protobuf.Period.prototype.clearEndtime = function() {
  return this.setEndtime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.compservice.model.protobuf.Period.prototype.hasEndtime = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional bool isActive = 7;
 * @return {boolean}
 */
proto.compservice.model.protobuf.Period.prototype.getIsactive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.compservice.model.protobuf.Period} returns this
 */
proto.compservice.model.protobuf.Period.prototype.setIsactive = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional int32 timeBetweenFights = 8;
 * @return {number}
 */
proto.compservice.model.protobuf.Period.prototype.getTimebetweenfights = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.compservice.model.protobuf.Period} returns this
 */
proto.compservice.model.protobuf.Period.prototype.setTimebetweenfights = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional int32 riskPercent = 9;
 * @return {number}
 */
proto.compservice.model.protobuf.Period.prototype.getRiskpercent = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.compservice.model.protobuf.Period} returns this
 */
proto.compservice.model.protobuf.Period.prototype.setRiskpercent = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.compservice.model.protobuf.ScheduleEntry.repeatedFields_ = [2,3,9];



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
proto.compservice.model.protobuf.ScheduleEntry.prototype.toObject = function(opt_includeInstance) {
  return proto.compservice.model.protobuf.ScheduleEntry.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.compservice.model.protobuf.ScheduleEntry} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.compservice.model.protobuf.ScheduleEntry.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    categoryidsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    fightscheduleinfoList: jspb.Message.toObjectList(msg.getFightscheduleinfoList(),
    proto.compservice.model.protobuf.StartTimeInfo.toObject, includeInstance),
    periodid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    description: jspb.Message.getFieldWithDefault(msg, 5, ""),
    name: jspb.Message.getFieldWithDefault(msg, 6, ""),
    color: jspb.Message.getFieldWithDefault(msg, 7, ""),
    entrytype: jspb.Message.getFieldWithDefault(msg, 8, 0),
    requirementidsList: (f = jspb.Message.getRepeatedField(msg, 9)) == null ? undefined : f,
    starttime: (f = msg.getStarttime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    endtime: (f = msg.getEndtime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    numberoffights: jspb.Message.getFieldWithDefault(msg, 12, 0),
    duration: jspb.Message.getFieldWithDefault(msg, 13, 0),
    order: jspb.Message.getFieldWithDefault(msg, 14, 0)
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
 * @return {!proto.compservice.model.protobuf.ScheduleEntry}
 */
proto.compservice.model.protobuf.ScheduleEntry.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.compservice.model.protobuf.ScheduleEntry;
  return proto.compservice.model.protobuf.ScheduleEntry.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.compservice.model.protobuf.ScheduleEntry} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.compservice.model.protobuf.ScheduleEntry}
 */
proto.compservice.model.protobuf.ScheduleEntry.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addCategoryids(value);
      break;
    case 3:
      var value = new proto.compservice.model.protobuf.StartTimeInfo;
      reader.readMessage(value,proto.compservice.model.protobuf.StartTimeInfo.deserializeBinaryFromReader);
      msg.addFightscheduleinfo(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPeriodid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setColor(value);
      break;
    case 8:
      var value = /** @type {!proto.compservice.model.protobuf.ScheduleEntryType} */ (reader.readEnum());
      msg.setEntrytype(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.addRequirementids(value);
      break;
    case 10:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setStarttime(value);
      break;
    case 11:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setEndtime(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNumberoffights(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDuration(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setOrder(value);
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
proto.compservice.model.protobuf.ScheduleEntry.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.compservice.model.protobuf.ScheduleEntry.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.compservice.model.protobuf.ScheduleEntry} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.compservice.model.protobuf.ScheduleEntry.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCategoryidsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getFightscheduleinfoList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.compservice.model.protobuf.StartTimeInfo.serializeBinaryToWriter
    );
  }
  f = message.getPeriodid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeString(
      6,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getEntrytype();
  if (f !== 0.0) {
    writer.writeEnum(
      8,
      f
    );
  }
  f = message.getRequirementidsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      9,
      f
    );
  }
  f = message.getStarttime();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getEndtime();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getNumberoffights();
  if (f !== 0) {
    writer.writeInt32(
      12,
      f
    );
  }
  f = message.getDuration();
  if (f !== 0) {
    writer.writeInt32(
      13,
      f
    );
  }
  f = message.getOrder();
  if (f !== 0) {
    writer.writeInt32(
      14,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.compservice.model.protobuf.ScheduleEntry.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.compservice.model.protobuf.ScheduleEntry} returns this
 */
proto.compservice.model.protobuf.ScheduleEntry.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string categoryIds = 2;
 * @return {!Array<string>}
 */
proto.compservice.model.protobuf.ScheduleEntry.prototype.getCategoryidsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.compservice.model.protobuf.ScheduleEntry} returns this
 */
proto.compservice.model.protobuf.ScheduleEntry.prototype.setCategoryidsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.compservice.model.protobuf.ScheduleEntry} returns this
 */
proto.compservice.model.protobuf.ScheduleEntry.prototype.addCategoryids = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.compservice.model.protobuf.ScheduleEntry} returns this
 */
proto.compservice.model.protobuf.ScheduleEntry.prototype.clearCategoryidsList = function() {
  return this.setCategoryidsList([]);
};


/**
 * repeated StartTimeInfo fightScheduleInfo = 3;
 * @return {!Array<!proto.compservice.model.protobuf.StartTimeInfo>}
 */
proto.compservice.model.protobuf.ScheduleEntry.prototype.getFightscheduleinfoList = function() {
  return /** @type{!Array<!proto.compservice.model.protobuf.StartTimeInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.compservice.model.protobuf.StartTimeInfo, 3));
};


/**
 * @param {!Array<!proto.compservice.model.protobuf.StartTimeInfo>} value
 * @return {!proto.compservice.model.protobuf.ScheduleEntry} returns this
*/
proto.compservice.model.protobuf.ScheduleEntry.prototype.setFightscheduleinfoList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.compservice.model.protobuf.StartTimeInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.compservice.model.protobuf.StartTimeInfo}
 */
proto.compservice.model.protobuf.ScheduleEntry.prototype.addFightscheduleinfo = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.compservice.model.protobuf.StartTimeInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.compservice.model.protobuf.ScheduleEntry} returns this
 */
proto.compservice.model.protobuf.ScheduleEntry.prototype.clearFightscheduleinfoList = function() {
  return this.setFightscheduleinfoList([]);
};


/**
 * optional string periodId = 4;
 * @return {string}
 */
proto.compservice.model.protobuf.ScheduleEntry.prototype.getPeriodid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.compservice.model.protobuf.ScheduleEntry} returns this
 */
proto.compservice.model.protobuf.ScheduleEntry.prototype.setPeriodid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string description = 5;
 * @return {string}
 */
proto.compservice.model.protobuf.ScheduleEntry.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.compservice.model.protobuf.ScheduleEntry} returns this
 */
proto.compservice.model.protobuf.ScheduleEntry.prototype.setDescription = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.compservice.model.protobuf.ScheduleEntry} returns this
 */
proto.compservice.model.protobuf.ScheduleEntry.prototype.clearDescription = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.compservice.model.protobuf.ScheduleEntry.prototype.hasDescription = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string name = 6;
 * @return {string}
 */
proto.compservice.model.protobuf.ScheduleEntry.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.compservice.model.protobuf.ScheduleEntry} returns this
 */
proto.compservice.model.protobuf.ScheduleEntry.prototype.setName = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.compservice.model.protobuf.ScheduleEntry} returns this
 */
proto.compservice.model.protobuf.ScheduleEntry.prototype.clearName = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.compservice.model.protobuf.ScheduleEntry.prototype.hasName = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string color = 7;
 * @return {string}
 */
proto.compservice.model.protobuf.ScheduleEntry.prototype.getColor = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.compservice.model.protobuf.ScheduleEntry} returns this
 */
proto.compservice.model.protobuf.ScheduleEntry.prototype.setColor = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.compservice.model.protobuf.ScheduleEntry} returns this
 */
proto.compservice.model.protobuf.ScheduleEntry.prototype.clearColor = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.compservice.model.protobuf.ScheduleEntry.prototype.hasColor = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional ScheduleEntryType entryType = 8;
 * @return {!proto.compservice.model.protobuf.ScheduleEntryType}
 */
proto.compservice.model.protobuf.ScheduleEntry.prototype.getEntrytype = function() {
  return /** @type {!proto.compservice.model.protobuf.ScheduleEntryType} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.compservice.model.protobuf.ScheduleEntryType} value
 * @return {!proto.compservice.model.protobuf.ScheduleEntry} returns this
 */
proto.compservice.model.protobuf.ScheduleEntry.prototype.setEntrytype = function(value) {
  return jspb.Message.setProto3EnumField(this, 8, value);
};


/**
 * repeated string requirementIds = 9;
 * @return {!Array<string>}
 */
proto.compservice.model.protobuf.ScheduleEntry.prototype.getRequirementidsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 9));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.compservice.model.protobuf.ScheduleEntry} returns this
 */
proto.compservice.model.protobuf.ScheduleEntry.prototype.setRequirementidsList = function(value) {
  return jspb.Message.setField(this, 9, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.compservice.model.protobuf.ScheduleEntry} returns this
 */
proto.compservice.model.protobuf.ScheduleEntry.prototype.addRequirementids = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 9, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.compservice.model.protobuf.ScheduleEntry} returns this
 */
proto.compservice.model.protobuf.ScheduleEntry.prototype.clearRequirementidsList = function() {
  return this.setRequirementidsList([]);
};


/**
 * optional google.protobuf.Timestamp startTime = 10;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.compservice.model.protobuf.ScheduleEntry.prototype.getStarttime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 10));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.compservice.model.protobuf.ScheduleEntry} returns this
*/
proto.compservice.model.protobuf.ScheduleEntry.prototype.setStarttime = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.compservice.model.protobuf.ScheduleEntry} returns this
 */
proto.compservice.model.protobuf.ScheduleEntry.prototype.clearStarttime = function() {
  return this.setStarttime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.compservice.model.protobuf.ScheduleEntry.prototype.hasStarttime = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional google.protobuf.Timestamp endTime = 11;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.compservice.model.protobuf.ScheduleEntry.prototype.getEndtime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 11));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.compservice.model.protobuf.ScheduleEntry} returns this
*/
proto.compservice.model.protobuf.ScheduleEntry.prototype.setEndtime = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.compservice.model.protobuf.ScheduleEntry} returns this
 */
proto.compservice.model.protobuf.ScheduleEntry.prototype.clearEndtime = function() {
  return this.setEndtime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.compservice.model.protobuf.ScheduleEntry.prototype.hasEndtime = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional int32 numberOfFights = 12;
 * @return {number}
 */
proto.compservice.model.protobuf.ScheduleEntry.prototype.getNumberoffights = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.compservice.model.protobuf.ScheduleEntry} returns this
 */
proto.compservice.model.protobuf.ScheduleEntry.prototype.setNumberoffights = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional int32 duration = 13;
 * @return {number}
 */
proto.compservice.model.protobuf.ScheduleEntry.prototype.getDuration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {number} value
 * @return {!proto.compservice.model.protobuf.ScheduleEntry} returns this
 */
proto.compservice.model.protobuf.ScheduleEntry.prototype.setDuration = function(value) {
  return jspb.Message.setProto3IntField(this, 13, value);
};


/**
 * optional int32 order = 14;
 * @return {number}
 */
proto.compservice.model.protobuf.ScheduleEntry.prototype.getOrder = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {number} value
 * @return {!proto.compservice.model.protobuf.ScheduleEntry} returns this
 */
proto.compservice.model.protobuf.ScheduleEntry.prototype.setOrder = function(value) {
  return jspb.Message.setProto3IntField(this, 14, value);
};





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
proto.compservice.model.protobuf.StartTimeInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.compservice.model.protobuf.StartTimeInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.compservice.model.protobuf.StartTimeInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.compservice.model.protobuf.StartTimeInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    matid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    starttime: (f = msg.getStarttime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    someid: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.compservice.model.protobuf.StartTimeInfo}
 */
proto.compservice.model.protobuf.StartTimeInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.compservice.model.protobuf.StartTimeInfo;
  return proto.compservice.model.protobuf.StartTimeInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.compservice.model.protobuf.StartTimeInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.compservice.model.protobuf.StartTimeInfo}
 */
proto.compservice.model.protobuf.StartTimeInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMatid(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setStarttime(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSomeid(value);
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
proto.compservice.model.protobuf.StartTimeInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.compservice.model.protobuf.StartTimeInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.compservice.model.protobuf.StartTimeInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.compservice.model.protobuf.StartTimeInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMatid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStarttime();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getSomeid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string matId = 1;
 * @return {string}
 */
proto.compservice.model.protobuf.StartTimeInfo.prototype.getMatid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.compservice.model.protobuf.StartTimeInfo} returns this
 */
proto.compservice.model.protobuf.StartTimeInfo.prototype.setMatid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp startTime = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.compservice.model.protobuf.StartTimeInfo.prototype.getStarttime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.compservice.model.protobuf.StartTimeInfo} returns this
*/
proto.compservice.model.protobuf.StartTimeInfo.prototype.setStarttime = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.compservice.model.protobuf.StartTimeInfo} returns this
 */
proto.compservice.model.protobuf.StartTimeInfo.prototype.clearStarttime = function() {
  return this.setStarttime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.compservice.model.protobuf.StartTimeInfo.prototype.hasStarttime = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string someId = 3;
 * @return {string}
 */
proto.compservice.model.protobuf.StartTimeInfo.prototype.getSomeid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.compservice.model.protobuf.StartTimeInfo} returns this
 */
proto.compservice.model.protobuf.StartTimeInfo.prototype.setSomeid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.compservice.model.protobuf.ScheduleRequirement.repeatedFields_ = [2,3];



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
proto.compservice.model.protobuf.ScheduleRequirement.prototype.toObject = function(opt_includeInstance) {
  return proto.compservice.model.protobuf.ScheduleRequirement.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.compservice.model.protobuf.ScheduleRequirement} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.compservice.model.protobuf.ScheduleRequirement.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    categoryidsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    fightidsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    matid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    periodid: jspb.Message.getFieldWithDefault(msg, 5, ""),
    name: jspb.Message.getFieldWithDefault(msg, 6, ""),
    color: jspb.Message.getFieldWithDefault(msg, 7, ""),
    entrytype: jspb.Message.getFieldWithDefault(msg, 8, 0),
    force: jspb.Message.getBooleanFieldWithDefault(msg, 9, false),
    starttime: (f = msg.getStarttime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    endtime: (f = msg.getEndtime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    durationseconds: jspb.Message.getFieldWithDefault(msg, 12, 0),
    entryorder: jspb.Message.getFieldWithDefault(msg, 13, 0)
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
 * @return {!proto.compservice.model.protobuf.ScheduleRequirement}
 */
proto.compservice.model.protobuf.ScheduleRequirement.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.compservice.model.protobuf.ScheduleRequirement;
  return proto.compservice.model.protobuf.ScheduleRequirement.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.compservice.model.protobuf.ScheduleRequirement} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.compservice.model.protobuf.ScheduleRequirement}
 */
proto.compservice.model.protobuf.ScheduleRequirement.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addCategoryids(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addFightids(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setMatid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPeriodid(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setColor(value);
      break;
    case 8:
      var value = /** @type {!proto.compservice.model.protobuf.ScheduleRequirementType} */ (reader.readEnum());
      msg.setEntrytype(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setForce(value);
      break;
    case 10:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setStarttime(value);
      break;
    case 11:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setEndtime(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDurationseconds(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setEntryorder(value);
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
proto.compservice.model.protobuf.ScheduleRequirement.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.compservice.model.protobuf.ScheduleRequirement.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.compservice.model.protobuf.ScheduleRequirement} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.compservice.model.protobuf.ScheduleRequirement.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCategoryidsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getFightidsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getPeriodid();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeString(
      6,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getEntrytype();
  if (f !== 0.0) {
    writer.writeEnum(
      8,
      f
    );
  }
  f = message.getForce();
  if (f) {
    writer.writeBool(
      9,
      f
    );
  }
  f = message.getStarttime();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getEndtime();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 12));
  if (f != null) {
    writer.writeInt32(
      12,
      f
    );
  }
  f = message.getEntryorder();
  if (f !== 0) {
    writer.writeInt32(
      13,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.compservice.model.protobuf.ScheduleRequirement.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.compservice.model.protobuf.ScheduleRequirement} returns this
 */
proto.compservice.model.protobuf.ScheduleRequirement.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string categoryIds = 2;
 * @return {!Array<string>}
 */
proto.compservice.model.protobuf.ScheduleRequirement.prototype.getCategoryidsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.compservice.model.protobuf.ScheduleRequirement} returns this
 */
proto.compservice.model.protobuf.ScheduleRequirement.prototype.setCategoryidsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.compservice.model.protobuf.ScheduleRequirement} returns this
 */
proto.compservice.model.protobuf.ScheduleRequirement.prototype.addCategoryids = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.compservice.model.protobuf.ScheduleRequirement} returns this
 */
proto.compservice.model.protobuf.ScheduleRequirement.prototype.clearCategoryidsList = function() {
  return this.setCategoryidsList([]);
};


/**
 * repeated string fightIds = 3;
 * @return {!Array<string>}
 */
proto.compservice.model.protobuf.ScheduleRequirement.prototype.getFightidsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.compservice.model.protobuf.ScheduleRequirement} returns this
 */
proto.compservice.model.protobuf.ScheduleRequirement.prototype.setFightidsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.compservice.model.protobuf.ScheduleRequirement} returns this
 */
proto.compservice.model.protobuf.ScheduleRequirement.prototype.addFightids = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.compservice.model.protobuf.ScheduleRequirement} returns this
 */
proto.compservice.model.protobuf.ScheduleRequirement.prototype.clearFightidsList = function() {
  return this.setFightidsList([]);
};


/**
 * optional string matId = 4;
 * @return {string}
 */
proto.compservice.model.protobuf.ScheduleRequirement.prototype.getMatid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.compservice.model.protobuf.ScheduleRequirement} returns this
 */
proto.compservice.model.protobuf.ScheduleRequirement.prototype.setMatid = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.compservice.model.protobuf.ScheduleRequirement} returns this
 */
proto.compservice.model.protobuf.ScheduleRequirement.prototype.clearMatid = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.compservice.model.protobuf.ScheduleRequirement.prototype.hasMatid = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string periodId = 5;
 * @return {string}
 */
proto.compservice.model.protobuf.ScheduleRequirement.prototype.getPeriodid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.compservice.model.protobuf.ScheduleRequirement} returns this
 */
proto.compservice.model.protobuf.ScheduleRequirement.prototype.setPeriodid = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string name = 6;
 * @return {string}
 */
proto.compservice.model.protobuf.ScheduleRequirement.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.compservice.model.protobuf.ScheduleRequirement} returns this
 */
proto.compservice.model.protobuf.ScheduleRequirement.prototype.setName = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.compservice.model.protobuf.ScheduleRequirement} returns this
 */
proto.compservice.model.protobuf.ScheduleRequirement.prototype.clearName = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.compservice.model.protobuf.ScheduleRequirement.prototype.hasName = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string color = 7;
 * @return {string}
 */
proto.compservice.model.protobuf.ScheduleRequirement.prototype.getColor = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.compservice.model.protobuf.ScheduleRequirement} returns this
 */
proto.compservice.model.protobuf.ScheduleRequirement.prototype.setColor = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.compservice.model.protobuf.ScheduleRequirement} returns this
 */
proto.compservice.model.protobuf.ScheduleRequirement.prototype.clearColor = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.compservice.model.protobuf.ScheduleRequirement.prototype.hasColor = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional ScheduleRequirementType entryType = 8;
 * @return {!proto.compservice.model.protobuf.ScheduleRequirementType}
 */
proto.compservice.model.protobuf.ScheduleRequirement.prototype.getEntrytype = function() {
  return /** @type {!proto.compservice.model.protobuf.ScheduleRequirementType} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.compservice.model.protobuf.ScheduleRequirementType} value
 * @return {!proto.compservice.model.protobuf.ScheduleRequirement} returns this
 */
proto.compservice.model.protobuf.ScheduleRequirement.prototype.setEntrytype = function(value) {
  return jspb.Message.setProto3EnumField(this, 8, value);
};


/**
 * optional bool force = 9;
 * @return {boolean}
 */
proto.compservice.model.protobuf.ScheduleRequirement.prototype.getForce = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.compservice.model.protobuf.ScheduleRequirement} returns this
 */
proto.compservice.model.protobuf.ScheduleRequirement.prototype.setForce = function(value) {
  return jspb.Message.setProto3BooleanField(this, 9, value);
};


/**
 * optional google.protobuf.Timestamp startTime = 10;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.compservice.model.protobuf.ScheduleRequirement.prototype.getStarttime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 10));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.compservice.model.protobuf.ScheduleRequirement} returns this
*/
proto.compservice.model.protobuf.ScheduleRequirement.prototype.setStarttime = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.compservice.model.protobuf.ScheduleRequirement} returns this
 */
proto.compservice.model.protobuf.ScheduleRequirement.prototype.clearStarttime = function() {
  return this.setStarttime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.compservice.model.protobuf.ScheduleRequirement.prototype.hasStarttime = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional google.protobuf.Timestamp endTime = 11;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.compservice.model.protobuf.ScheduleRequirement.prototype.getEndtime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 11));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.compservice.model.protobuf.ScheduleRequirement} returns this
*/
proto.compservice.model.protobuf.ScheduleRequirement.prototype.setEndtime = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.compservice.model.protobuf.ScheduleRequirement} returns this
 */
proto.compservice.model.protobuf.ScheduleRequirement.prototype.clearEndtime = function() {
  return this.setEndtime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.compservice.model.protobuf.ScheduleRequirement.prototype.hasEndtime = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional int32 durationSeconds = 12;
 * @return {number}
 */
proto.compservice.model.protobuf.ScheduleRequirement.prototype.getDurationseconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.compservice.model.protobuf.ScheduleRequirement} returns this
 */
proto.compservice.model.protobuf.ScheduleRequirement.prototype.setDurationseconds = function(value) {
  return jspb.Message.setField(this, 12, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.compservice.model.protobuf.ScheduleRequirement} returns this
 */
proto.compservice.model.protobuf.ScheduleRequirement.prototype.clearDurationseconds = function() {
  return jspb.Message.setField(this, 12, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.compservice.model.protobuf.ScheduleRequirement.prototype.hasDurationseconds = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional int32 entryOrder = 13;
 * @return {number}
 */
proto.compservice.model.protobuf.ScheduleRequirement.prototype.getEntryorder = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {number} value
 * @return {!proto.compservice.model.protobuf.ScheduleRequirement} returns this
 */
proto.compservice.model.protobuf.ScheduleRequirement.prototype.setEntryorder = function(value) {
  return jspb.Message.setProto3IntField(this, 13, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.compservice.model.protobuf.Competitor.repeatedFields_ = [8];



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
proto.compservice.model.protobuf.Competitor.prototype.toObject = function(opt_includeInstance) {
  return proto.compservice.model.protobuf.Competitor.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.compservice.model.protobuf.Competitor} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.compservice.model.protobuf.Competitor.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    email: jspb.Message.getFieldWithDefault(msg, 2, ""),
    userid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    firstname: jspb.Message.getFieldWithDefault(msg, 4, ""),
    lastname: jspb.Message.getFieldWithDefault(msg, 5, ""),
    birthdate: (f = msg.getBirthdate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    academy: (f = msg.getAcademy()) && proto.compservice.model.protobuf.Academy.toObject(includeInstance, f),
    categoriesList: (f = jspb.Message.getRepeatedField(msg, 8)) == null ? undefined : f,
    competitionid: jspb.Message.getFieldWithDefault(msg, 9, ""),
    registrationstatus: jspb.Message.getFieldWithDefault(msg, 10, 0),
    placeholder: jspb.Message.getBooleanFieldWithDefault(msg, 11, false),
    promo: jspb.Message.getFieldWithDefault(msg, 12, "")
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
 * @return {!proto.compservice.model.protobuf.Competitor}
 */
proto.compservice.model.protobuf.Competitor.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.compservice.model.protobuf.Competitor;
  return proto.compservice.model.protobuf.Competitor.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.compservice.model.protobuf.Competitor} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.compservice.model.protobuf.Competitor}
 */
proto.compservice.model.protobuf.Competitor.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setFirstname(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setLastname(value);
      break;
    case 6:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setBirthdate(value);
      break;
    case 7:
      var value = new proto.compservice.model.protobuf.Academy;
      reader.readMessage(value,proto.compservice.model.protobuf.Academy.deserializeBinaryFromReader);
      msg.setAcademy(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.addCategories(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setCompetitionid(value);
      break;
    case 10:
      var value = /** @type {!proto.compservice.model.protobuf.CompetitorRegistrationStatus} */ (reader.readEnum());
      msg.setRegistrationstatus(value);
      break;
    case 11:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPlaceholder(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setPromo(value);
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
proto.compservice.model.protobuf.Competitor.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.compservice.model.protobuf.Competitor.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.compservice.model.protobuf.Competitor} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.compservice.model.protobuf.Competitor.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getUserid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getFirstname();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getLastname();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getBirthdate();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getAcademy();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.compservice.model.protobuf.Academy.serializeBinaryToWriter
    );
  }
  f = message.getCategoriesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      8,
      f
    );
  }
  f = message.getCompetitionid();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getRegistrationstatus();
  if (f !== 0.0) {
    writer.writeEnum(
      10,
      f
    );
  }
  f = message.getPlaceholder();
  if (f) {
    writer.writeBool(
      11,
      f
    );
  }
  f = message.getPromo();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.compservice.model.protobuf.Competitor.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.compservice.model.protobuf.Competitor} returns this
 */
proto.compservice.model.protobuf.Competitor.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string email = 2;
 * @return {string}
 */
proto.compservice.model.protobuf.Competitor.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.compservice.model.protobuf.Competitor} returns this
 */
proto.compservice.model.protobuf.Competitor.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string userId = 3;
 * @return {string}
 */
proto.compservice.model.protobuf.Competitor.prototype.getUserid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.compservice.model.protobuf.Competitor} returns this
 */
proto.compservice.model.protobuf.Competitor.prototype.setUserid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string firstName = 4;
 * @return {string}
 */
proto.compservice.model.protobuf.Competitor.prototype.getFirstname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.compservice.model.protobuf.Competitor} returns this
 */
proto.compservice.model.protobuf.Competitor.prototype.setFirstname = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string lastName = 5;
 * @return {string}
 */
proto.compservice.model.protobuf.Competitor.prototype.getLastname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.compservice.model.protobuf.Competitor} returns this
 */
proto.compservice.model.protobuf.Competitor.prototype.setLastname = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional google.protobuf.Timestamp birthDate = 6;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.compservice.model.protobuf.Competitor.prototype.getBirthdate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 6));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.compservice.model.protobuf.Competitor} returns this
*/
proto.compservice.model.protobuf.Competitor.prototype.setBirthdate = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.compservice.model.protobuf.Competitor} returns this
 */
proto.compservice.model.protobuf.Competitor.prototype.clearBirthdate = function() {
  return this.setBirthdate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.compservice.model.protobuf.Competitor.prototype.hasBirthdate = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional Academy academy = 7;
 * @return {?proto.compservice.model.protobuf.Academy}
 */
proto.compservice.model.protobuf.Competitor.prototype.getAcademy = function() {
  return /** @type{?proto.compservice.model.protobuf.Academy} */ (
    jspb.Message.getWrapperField(this, proto.compservice.model.protobuf.Academy, 7));
};


/**
 * @param {?proto.compservice.model.protobuf.Academy|undefined} value
 * @return {!proto.compservice.model.protobuf.Competitor} returns this
*/
proto.compservice.model.protobuf.Competitor.prototype.setAcademy = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.compservice.model.protobuf.Competitor} returns this
 */
proto.compservice.model.protobuf.Competitor.prototype.clearAcademy = function() {
  return this.setAcademy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.compservice.model.protobuf.Competitor.prototype.hasAcademy = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * repeated string categories = 8;
 * @return {!Array<string>}
 */
proto.compservice.model.protobuf.Competitor.prototype.getCategoriesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 8));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.compservice.model.protobuf.Competitor} returns this
 */
proto.compservice.model.protobuf.Competitor.prototype.setCategoriesList = function(value) {
  return jspb.Message.setField(this, 8, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.compservice.model.protobuf.Competitor} returns this
 */
proto.compservice.model.protobuf.Competitor.prototype.addCategories = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 8, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.compservice.model.protobuf.Competitor} returns this
 */
proto.compservice.model.protobuf.Competitor.prototype.clearCategoriesList = function() {
  return this.setCategoriesList([]);
};


/**
 * optional string competitionId = 9;
 * @return {string}
 */
proto.compservice.model.protobuf.Competitor.prototype.getCompetitionid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.compservice.model.protobuf.Competitor} returns this
 */
proto.compservice.model.protobuf.Competitor.prototype.setCompetitionid = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional CompetitorRegistrationStatus registrationStatus = 10;
 * @return {!proto.compservice.model.protobuf.CompetitorRegistrationStatus}
 */
proto.compservice.model.protobuf.Competitor.prototype.getRegistrationstatus = function() {
  return /** @type {!proto.compservice.model.protobuf.CompetitorRegistrationStatus} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {!proto.compservice.model.protobuf.CompetitorRegistrationStatus} value
 * @return {!proto.compservice.model.protobuf.Competitor} returns this
 */
proto.compservice.model.protobuf.Competitor.prototype.setRegistrationstatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 10, value);
};


/**
 * optional bool placeholder = 11;
 * @return {boolean}
 */
proto.compservice.model.protobuf.Competitor.prototype.getPlaceholder = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 11, false));
};


/**
 * @param {boolean} value
 * @return {!proto.compservice.model.protobuf.Competitor} returns this
 */
proto.compservice.model.protobuf.Competitor.prototype.setPlaceholder = function(value) {
  return jspb.Message.setProto3BooleanField(this, 11, value);
};


/**
 * optional string promo = 12;
 * @return {string}
 */
proto.compservice.model.protobuf.Competitor.prototype.getPromo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.compservice.model.protobuf.Competitor} returns this
 */
proto.compservice.model.protobuf.Competitor.prototype.setPromo = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.compservice.model.protobuf.MatState.repeatedFields_ = [3];



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
proto.compservice.model.protobuf.MatState.prototype.toObject = function(opt_includeInstance) {
  return proto.compservice.model.protobuf.MatState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.compservice.model.protobuf.MatState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.compservice.model.protobuf.MatState.toObject = function(includeInstance, msg) {
  var f, obj = {
    matdescription: (f = msg.getMatdescription()) && proto.compservice.model.protobuf.MatDescription.toObject(includeInstance, f),
    numberoffights: jspb.Message.getFieldWithDefault(msg, 2, 0),
    topfivefightsList: jspb.Message.toObjectList(msg.getTopfivefightsList(),
    proto.compservice.model.protobuf.FightDescription.toObject, includeInstance)
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
 * @return {!proto.compservice.model.protobuf.MatState}
 */
proto.compservice.model.protobuf.MatState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.compservice.model.protobuf.MatState;
  return proto.compservice.model.protobuf.MatState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.compservice.model.protobuf.MatState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.compservice.model.protobuf.MatState}
 */
proto.compservice.model.protobuf.MatState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.compservice.model.protobuf.MatDescription;
      reader.readMessage(value,proto.compservice.model.protobuf.MatDescription.deserializeBinaryFromReader);
      msg.setMatdescription(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNumberoffights(value);
      break;
    case 3:
      var value = new proto.compservice.model.protobuf.FightDescription;
      reader.readMessage(value,proto.compservice.model.protobuf.FightDescription.deserializeBinaryFromReader);
      msg.addTopfivefights(value);
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
proto.compservice.model.protobuf.MatState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.compservice.model.protobuf.MatState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.compservice.model.protobuf.MatState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.compservice.model.protobuf.MatState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMatdescription();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.compservice.model.protobuf.MatDescription.serializeBinaryToWriter
    );
  }
  f = message.getNumberoffights();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getTopfivefightsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.compservice.model.protobuf.FightDescription.serializeBinaryToWriter
    );
  }
};


/**
 * optional MatDescription matDescription = 1;
 * @return {?proto.compservice.model.protobuf.MatDescription}
 */
proto.compservice.model.protobuf.MatState.prototype.getMatdescription = function() {
  return /** @type{?proto.compservice.model.protobuf.MatDescription} */ (
    jspb.Message.getWrapperField(this, proto.compservice.model.protobuf.MatDescription, 1));
};


/**
 * @param {?proto.compservice.model.protobuf.MatDescription|undefined} value
 * @return {!proto.compservice.model.protobuf.MatState} returns this
*/
proto.compservice.model.protobuf.MatState.prototype.setMatdescription = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.compservice.model.protobuf.MatState} returns this
 */
proto.compservice.model.protobuf.MatState.prototype.clearMatdescription = function() {
  return this.setMatdescription(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.compservice.model.protobuf.MatState.prototype.hasMatdescription = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 numberOfFights = 2;
 * @return {number}
 */
proto.compservice.model.protobuf.MatState.prototype.getNumberoffights = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.compservice.model.protobuf.MatState} returns this
 */
proto.compservice.model.protobuf.MatState.prototype.setNumberoffights = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * repeated FightDescription topFiveFights = 3;
 * @return {!Array<!proto.compservice.model.protobuf.FightDescription>}
 */
proto.compservice.model.protobuf.MatState.prototype.getTopfivefightsList = function() {
  return /** @type{!Array<!proto.compservice.model.protobuf.FightDescription>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.compservice.model.protobuf.FightDescription, 3));
};


/**
 * @param {!Array<!proto.compservice.model.protobuf.FightDescription>} value
 * @return {!proto.compservice.model.protobuf.MatState} returns this
*/
proto.compservice.model.protobuf.MatState.prototype.setTopfivefightsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.compservice.model.protobuf.FightDescription=} opt_value
 * @param {number=} opt_index
 * @return {!proto.compservice.model.protobuf.FightDescription}
 */
proto.compservice.model.protobuf.MatState.prototype.addTopfivefights = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.compservice.model.protobuf.FightDescription, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.compservice.model.protobuf.MatState} returns this
 */
proto.compservice.model.protobuf.MatState.prototype.clearTopfivefightsList = function() {
  return this.setTopfivefightsList([]);
};





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
proto.compservice.model.protobuf.FightStartTimePair.prototype.toObject = function(opt_includeInstance) {
  return proto.compservice.model.protobuf.FightStartTimePair.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.compservice.model.protobuf.FightStartTimePair} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.compservice.model.protobuf.FightStartTimePair.toObject = function(includeInstance, msg) {
  var f, obj = {
    fightid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    matid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    numberonmat: jspb.Message.getFieldWithDefault(msg, 3, 0),
    starttime: (f = msg.getStarttime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    periodid: jspb.Message.getFieldWithDefault(msg, 5, ""),
    fightcategoryid: jspb.Message.getFieldWithDefault(msg, 6, ""),
    scheduleentryid: jspb.Message.getFieldWithDefault(msg, 7, ""),
    invalid: jspb.Message.getBooleanFieldWithDefault(msg, 8, false)
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
 * @return {!proto.compservice.model.protobuf.FightStartTimePair}
 */
proto.compservice.model.protobuf.FightStartTimePair.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.compservice.model.protobuf.FightStartTimePair;
  return proto.compservice.model.protobuf.FightStartTimePair.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.compservice.model.protobuf.FightStartTimePair} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.compservice.model.protobuf.FightStartTimePair}
 */
proto.compservice.model.protobuf.FightStartTimePair.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFightid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMatid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNumberonmat(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setStarttime(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPeriodid(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setFightcategoryid(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setScheduleentryid(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setInvalid(value);
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
proto.compservice.model.protobuf.FightStartTimePair.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.compservice.model.protobuf.FightStartTimePair.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.compservice.model.protobuf.FightStartTimePair} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.compservice.model.protobuf.FightStartTimePair.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFightid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMatid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getNumberonmat();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getStarttime();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getPeriodid();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getFightcategoryid();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getScheduleentryid();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getInvalid();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
};


/**
 * optional string fightId = 1;
 * @return {string}
 */
proto.compservice.model.protobuf.FightStartTimePair.prototype.getFightid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.compservice.model.protobuf.FightStartTimePair} returns this
 */
proto.compservice.model.protobuf.FightStartTimePair.prototype.setFightid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string matId = 2;
 * @return {string}
 */
proto.compservice.model.protobuf.FightStartTimePair.prototype.getMatid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.compservice.model.protobuf.FightStartTimePair} returns this
 */
proto.compservice.model.protobuf.FightStartTimePair.prototype.setMatid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 numberOnMat = 3;
 * @return {number}
 */
proto.compservice.model.protobuf.FightStartTimePair.prototype.getNumberonmat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.compservice.model.protobuf.FightStartTimePair} returns this
 */
proto.compservice.model.protobuf.FightStartTimePair.prototype.setNumberonmat = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional google.protobuf.Timestamp startTime = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.compservice.model.protobuf.FightStartTimePair.prototype.getStarttime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.compservice.model.protobuf.FightStartTimePair} returns this
*/
proto.compservice.model.protobuf.FightStartTimePair.prototype.setStarttime = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.compservice.model.protobuf.FightStartTimePair} returns this
 */
proto.compservice.model.protobuf.FightStartTimePair.prototype.clearStarttime = function() {
  return this.setStarttime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.compservice.model.protobuf.FightStartTimePair.prototype.hasStarttime = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string periodId = 5;
 * @return {string}
 */
proto.compservice.model.protobuf.FightStartTimePair.prototype.getPeriodid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.compservice.model.protobuf.FightStartTimePair} returns this
 */
proto.compservice.model.protobuf.FightStartTimePair.prototype.setPeriodid = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string fightCategoryId = 6;
 * @return {string}
 */
proto.compservice.model.protobuf.FightStartTimePair.prototype.getFightcategoryid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.compservice.model.protobuf.FightStartTimePair} returns this
 */
proto.compservice.model.protobuf.FightStartTimePair.prototype.setFightcategoryid = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string scheduleEntryId = 7;
 * @return {string}
 */
proto.compservice.model.protobuf.FightStartTimePair.prototype.getScheduleentryid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.compservice.model.protobuf.FightStartTimePair} returns this
 */
proto.compservice.model.protobuf.FightStartTimePair.prototype.setScheduleentryid = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional bool invalid = 8;
 * @return {boolean}
 */
proto.compservice.model.protobuf.FightStartTimePair.prototype.getInvalid = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.compservice.model.protobuf.FightStartTimePair} returns this
 */
proto.compservice.model.protobuf.FightStartTimePair.prototype.setInvalid = function(value) {
  return jspb.Message.setProto3BooleanField(this, 8, value);
};


/**
 * @enum {number}
 */
proto.compservice.model.protobuf.OperatorType = {
  OPERATOR_TYPE_EQUALS: 0,
  OPERATOR_TYPE_IS_IN: 1,
  OPERATOR_TYPE_LESS: 2,
  OPERATOR_TYPE_GREATER: 3,
  OPERATOR_TYPE_LEQ: 4,
  OPERATOR_TYPE_GEQ: 5
};

/**
 * @enum {number}
 */
proto.compservice.model.protobuf.SelectorClassifier = {
  SELECTOR_CLASSIFIER_FIRST_N_PLACES: 0,
  SELECTOR_CLASSIFIER_LAST_N_PLACES: 1,
  SELECTOR_CLASSIFIER_MANUAL: 2
};

/**
 * @enum {number}
 */
proto.compservice.model.protobuf.LogicalOperator = {
  LOGICAL_OPERATOR_AND: 0,
  LOGICAL_OPERATOR_OR: 1,
  LOGICAL_OPERATOR_AND_NOT: 2,
  LOGICAL_OPERATOR_OR_NOT: 3
};

/**
 * @enum {number}
 */
proto.compservice.model.protobuf.DistributionType = {
  DISTRIBUTION_TYPE_AUTOMATIC: 0,
  DISTRIBUTION_TYPE_MANUAL: 1
};

/**
 * @enum {number}
 */
proto.compservice.model.protobuf.GroupSortDirection = {
  GROUP_SORT_DIRECTION_ASC: 0,
  GROUP_SORT_DIRECTION_DESC: 1
};

/**
 * @enum {number}
 */
proto.compservice.model.protobuf.GroupSortSpecifier = {
  GROUP_SORT_SPECIFIER_DIRECT_FIGHT_RESULT: 0,
  GROUP_SORT_SPECIFIER_MANUAL: 1,
  GROUP_SORT_SPECIFIER_POINTS_DIFFERENCE: 2,
  GROUP_SORT_SPECIFIER_TOTAL_POINTS: 3
};

/**
 * @enum {number}
 */
proto.compservice.model.protobuf.StageRoundType = {
  STAGE_ROUND_TYPE_UNKNOWN: 0,
  STAGE_ROUND_TYPE_GRAND_FINAL: 1,
  STAGE_ROUND_TYPE_THIRD_PLACE_FIGHT: 2,
  STAGE_ROUND_TYPE_WINNER_BRACKETS: 3,
  STAGE_ROUND_TYPE_LOSER_BRACKETS: 4,
  STAGE_ROUND_TYPE_GROUP: 5
};

/**
 * @enum {number}
 */
proto.compservice.model.protobuf.BracketType = {
  BRACKET_TYPE_UNKNOWN: 0,
  BRACKET_TYPE_SINGLE_ELIMINATION: 2,
  BRACKET_TYPE_DOUBLE_ELIMINATION: 3,
  BRACKET_TYPE_GROUP: 4
};

/**
 * @enum {number}
 */
proto.compservice.model.protobuf.StageType = {
  STAGE_TYPE_UNKNOWN: 0,
  STAGE_TYPE_PRELIMINARY: 1,
  STAGE_TYPE_FINAL: 2
};

/**
 * @enum {number}
 */
proto.compservice.model.protobuf.StageStatus = {
  STAGE_STATUS_UNKNOWN: 0,
  STAGE_STATUS_APPROVED: 1,
  STAGE_STATUS_WAITING_FOR_APPROVAL: 2,
  STAGE_STATUS_WAITING_FOR_COMPETITORS: 3,
  STAGE_STATUS_FINISHED: 4,
  STAGE_STATUS_IN_PROGRESS: 5
};

/**
 * @enum {number}
 */
proto.compservice.model.protobuf.FightStatus = {
  FIGHT_STATUS_PENDING: 0,
  FIGHT_STATUS_GET_READY: 1,
  FIGHT_STATUS_IN_PROGRESS: 2,
  FIGHT_STATUS_PAUSED: 3,
  FIGHT_STATUS_FINISHED: 4,
  FIGHT_STATUS_UNCOMPLETABLE: 5,
  FIGHT_STATUS_WALKOVER: 6
};

/**
 * @enum {number}
 */
proto.compservice.model.protobuf.FightReferenceType = {
  FIGHT_REFERENCE_TYPE_UNKNOWN: 0,
  FIGHT_REFERENCE_TYPE_WINNER: 1,
  FIGHT_REFERENCE_TYPE_LOSER: 2,
  FIGHT_REFERENCE_TYPE_PROPAGATED: 3
};

/**
 * @enum {number}
 */
proto.compservice.model.protobuf.CategoryRestrictionType = {
  CATEGORY_RESTRICTION_TYPE_VALUE: 0,
  CATEGORY_RESTRICTION_TYPE_RANGE: 1
};

/**
 * @enum {number}
 */
proto.compservice.model.protobuf.CompetitionStatus = {
  COMPETITION_STATUS_UNKNOWN: 0,
  COMPETITION_STATUS_CREATED: 1,
  COMPETITION_STATUS_PUBLISHED: 2,
  COMPETITION_STATUS_UNPUBLISHED: 3,
  COMPETITION_STATUS_STARTED: 4,
  COMPETITION_STATUS_PAUSED: 5,
  COMPETITION_STATUS_STOPPED: 6,
  COMPETITION_STATUS_DELETED: 7
};

/**
 * @enum {number}
 */
proto.compservice.model.protobuf.ScheduleEntryType = {
  SCHEDULE_ENTRY_TYPE_UNKNOWN: 0,
  SCHEDULE_ENTRY_TYPE_FIGHTS_GROUP: 1,
  SCHEDULE_ENTRY_TYPE_FIXED_PAUSE: 2,
  SCHEDULE_ENTRY_TYPE_RELATIVE_PAUSE: 3
};

/**
 * @enum {number}
 */
proto.compservice.model.protobuf.ScheduleRequirementType = {
  SCHEDULE_REQUIREMENT_TYPE_UNKNOWN: 0,
  SCHEDULE_REQUIREMENT_TYPE_CATEGORIES: 1,
  SCHEDULE_REQUIREMENT_TYPE_FIGHTS: 2,
  SCHEDULE_REQUIREMENT_TYPE_RELATIVE_PAUSE: 3,
  SCHEDULE_REQUIREMENT_TYPE_FIXED_PAUSE: 4
};

/**
 * @enum {number}
 */
proto.compservice.model.protobuf.CompetitorRegistrationStatus = {
  COMPETITOR_REGISTRATION_STATUS_UNKNOWN: 0,
  COMPETITOR_REGISTRATION_STATUS_SUCCESS_CONFIRMED: 1,
  COMPETITOR_REGISTRATION_STATUS_PAYMENT_PENDING: 2,
  COMPETITOR_REGISTRATION_STATUS_REGISTRATION_CANCELLED: 3
};

goog.object.extend(exports, proto.compservice.model.protobuf);
