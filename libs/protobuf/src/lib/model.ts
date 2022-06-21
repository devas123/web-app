/* eslint-disable */
import * as Long from 'long';
import * as _m0 from 'protobufjs/minimal';
import { Timestamp } from './google/protobuf/timestamp';

export const OperatorType = {
  OPERATOR_TYPE_EQUALS: 'OPERATOR_TYPE_EQUALS',
  OPERATOR_TYPE_IS_IN: 'OPERATOR_TYPE_IS_IN',
  OPERATOR_TYPE_LESS: 'OPERATOR_TYPE_LESS',
  OPERATOR_TYPE_GREATER: 'OPERATOR_TYPE_GREATER',
  OPERATOR_TYPE_LEQ: 'OPERATOR_TYPE_LEQ',
  OPERATOR_TYPE_GEQ: 'OPERATOR_TYPE_GEQ',
} as const;

export type OperatorType = typeof OperatorType[keyof typeof OperatorType];

export function operatorTypeFromJSON(object: any): OperatorType {
  switch (object) {
    case 0:
    case 'OPERATOR_TYPE_EQUALS':
      return OperatorType.OPERATOR_TYPE_EQUALS;
    case 1:
    case 'OPERATOR_TYPE_IS_IN':
      return OperatorType.OPERATOR_TYPE_IS_IN;
    case 2:
    case 'OPERATOR_TYPE_LESS':
      return OperatorType.OPERATOR_TYPE_LESS;
    case 3:
    case 'OPERATOR_TYPE_GREATER':
      return OperatorType.OPERATOR_TYPE_GREATER;
    case 4:
    case 'OPERATOR_TYPE_LEQ':
      return OperatorType.OPERATOR_TYPE_LEQ;
    case 5:
    case 'OPERATOR_TYPE_GEQ':
      return OperatorType.OPERATOR_TYPE_GEQ;
    default:
      throw new globalThis.Error(
        'Unrecognized enum value ' + object + ' for enum OperatorType'
      );
  }
}

export function operatorTypeToJSON(object: OperatorType): string {
  switch (object) {
    case OperatorType.OPERATOR_TYPE_EQUALS:
      return 'OPERATOR_TYPE_EQUALS';
    case OperatorType.OPERATOR_TYPE_IS_IN:
      return 'OPERATOR_TYPE_IS_IN';
    case OperatorType.OPERATOR_TYPE_LESS:
      return 'OPERATOR_TYPE_LESS';
    case OperatorType.OPERATOR_TYPE_GREATER:
      return 'OPERATOR_TYPE_GREATER';
    case OperatorType.OPERATOR_TYPE_LEQ:
      return 'OPERATOR_TYPE_LEQ';
    case OperatorType.OPERATOR_TYPE_GEQ:
      return 'OPERATOR_TYPE_GEQ';
    default:
      throw new globalThis.Error(
        'Unrecognized enum value ' + object + ' for enum OperatorType'
      );
  }
}

export function operatorTypeToNumber(object: OperatorType): number {
  switch (object) {
    case OperatorType.OPERATOR_TYPE_EQUALS:
      return 0;
    case OperatorType.OPERATOR_TYPE_IS_IN:
      return 1;
    case OperatorType.OPERATOR_TYPE_LESS:
      return 2;
    case OperatorType.OPERATOR_TYPE_GREATER:
      return 3;
    case OperatorType.OPERATOR_TYPE_LEQ:
      return 4;
    case OperatorType.OPERATOR_TYPE_GEQ:
      return 5;
    default:
      throw new globalThis.Error(
        'Unrecognized enum value ' + object + ' for enum OperatorType'
      );
  }
}

export const SelectorClassifier = {
  SELECTOR_CLASSIFIER_FIRST_N_PLACES: 'SELECTOR_CLASSIFIER_FIRST_N_PLACES',
  SELECTOR_CLASSIFIER_LAST_N_PLACES: 'SELECTOR_CLASSIFIER_LAST_N_PLACES',
  SELECTOR_CLASSIFIER_MANUAL: 'SELECTOR_CLASSIFIER_MANUAL',
} as const;

export type SelectorClassifier =
  typeof SelectorClassifier[keyof typeof SelectorClassifier];

export function selectorClassifierFromJSON(object: any): SelectorClassifier {
  switch (object) {
    case 0:
    case 'SELECTOR_CLASSIFIER_FIRST_N_PLACES':
      return SelectorClassifier.SELECTOR_CLASSIFIER_FIRST_N_PLACES;
    case 1:
    case 'SELECTOR_CLASSIFIER_LAST_N_PLACES':
      return SelectorClassifier.SELECTOR_CLASSIFIER_LAST_N_PLACES;
    case 2:
    case 'SELECTOR_CLASSIFIER_MANUAL':
      return SelectorClassifier.SELECTOR_CLASSIFIER_MANUAL;
    default:
      throw new globalThis.Error(
        'Unrecognized enum value ' + object + ' for enum SelectorClassifier'
      );
  }
}

export function selectorClassifierToJSON(object: SelectorClassifier): string {
  switch (object) {
    case SelectorClassifier.SELECTOR_CLASSIFIER_FIRST_N_PLACES:
      return 'SELECTOR_CLASSIFIER_FIRST_N_PLACES';
    case SelectorClassifier.SELECTOR_CLASSIFIER_LAST_N_PLACES:
      return 'SELECTOR_CLASSIFIER_LAST_N_PLACES';
    case SelectorClassifier.SELECTOR_CLASSIFIER_MANUAL:
      return 'SELECTOR_CLASSIFIER_MANUAL';
    default:
      throw new globalThis.Error(
        'Unrecognized enum value ' + object + ' for enum SelectorClassifier'
      );
  }
}

export function selectorClassifierToNumber(object: SelectorClassifier): number {
  switch (object) {
    case SelectorClassifier.SELECTOR_CLASSIFIER_FIRST_N_PLACES:
      return 0;
    case SelectorClassifier.SELECTOR_CLASSIFIER_LAST_N_PLACES:
      return 1;
    case SelectorClassifier.SELECTOR_CLASSIFIER_MANUAL:
      return 2;
    default:
      throw new globalThis.Error(
        'Unrecognized enum value ' + object + ' for enum SelectorClassifier'
      );
  }
}

export const LogicalOperator = {
  LOGICAL_OPERATOR_AND: 'LOGICAL_OPERATOR_AND',
  LOGICAL_OPERATOR_OR: 'LOGICAL_OPERATOR_OR',
  LOGICAL_OPERATOR_AND_NOT: 'LOGICAL_OPERATOR_AND_NOT',
  LOGICAL_OPERATOR_OR_NOT: 'LOGICAL_OPERATOR_OR_NOT',
} as const;

export type LogicalOperator =
  typeof LogicalOperator[keyof typeof LogicalOperator];

export function logicalOperatorFromJSON(object: any): LogicalOperator {
  switch (object) {
    case 0:
    case 'LOGICAL_OPERATOR_AND':
      return LogicalOperator.LOGICAL_OPERATOR_AND;
    case 1:
    case 'LOGICAL_OPERATOR_OR':
      return LogicalOperator.LOGICAL_OPERATOR_OR;
    case 2:
    case 'LOGICAL_OPERATOR_AND_NOT':
      return LogicalOperator.LOGICAL_OPERATOR_AND_NOT;
    case 3:
    case 'LOGICAL_OPERATOR_OR_NOT':
      return LogicalOperator.LOGICAL_OPERATOR_OR_NOT;
    default:
      throw new globalThis.Error(
        'Unrecognized enum value ' + object + ' for enum LogicalOperator'
      );
  }
}

export function logicalOperatorToJSON(object: LogicalOperator): string {
  switch (object) {
    case LogicalOperator.LOGICAL_OPERATOR_AND:
      return 'LOGICAL_OPERATOR_AND';
    case LogicalOperator.LOGICAL_OPERATOR_OR:
      return 'LOGICAL_OPERATOR_OR';
    case LogicalOperator.LOGICAL_OPERATOR_AND_NOT:
      return 'LOGICAL_OPERATOR_AND_NOT';
    case LogicalOperator.LOGICAL_OPERATOR_OR_NOT:
      return 'LOGICAL_OPERATOR_OR_NOT';
    default:
      throw new globalThis.Error(
        'Unrecognized enum value ' + object + ' for enum LogicalOperator'
      );
  }
}

export function logicalOperatorToNumber(object: LogicalOperator): number {
  switch (object) {
    case LogicalOperator.LOGICAL_OPERATOR_AND:
      return 0;
    case LogicalOperator.LOGICAL_OPERATOR_OR:
      return 1;
    case LogicalOperator.LOGICAL_OPERATOR_AND_NOT:
      return 2;
    case LogicalOperator.LOGICAL_OPERATOR_OR_NOT:
      return 3;
    default:
      throw new globalThis.Error(
        'Unrecognized enum value ' + object + ' for enum LogicalOperator'
      );
  }
}

export const DistributionType = {
  DISTRIBUTION_TYPE_AUTOMATIC: 'DISTRIBUTION_TYPE_AUTOMATIC',
  DISTRIBUTION_TYPE_MANUAL: 'DISTRIBUTION_TYPE_MANUAL',
} as const;

export type DistributionType =
  typeof DistributionType[keyof typeof DistributionType];

export function distributionTypeFromJSON(object: any): DistributionType {
  switch (object) {
    case 0:
    case 'DISTRIBUTION_TYPE_AUTOMATIC':
      return DistributionType.DISTRIBUTION_TYPE_AUTOMATIC;
    case 1:
    case 'DISTRIBUTION_TYPE_MANUAL':
      return DistributionType.DISTRIBUTION_TYPE_MANUAL;
    default:
      throw new globalThis.Error(
        'Unrecognized enum value ' + object + ' for enum DistributionType'
      );
  }
}

export function distributionTypeToJSON(object: DistributionType): string {
  switch (object) {
    case DistributionType.DISTRIBUTION_TYPE_AUTOMATIC:
      return 'DISTRIBUTION_TYPE_AUTOMATIC';
    case DistributionType.DISTRIBUTION_TYPE_MANUAL:
      return 'DISTRIBUTION_TYPE_MANUAL';
    default:
      throw new globalThis.Error(
        'Unrecognized enum value ' + object + ' for enum DistributionType'
      );
  }
}

export function distributionTypeToNumber(object: DistributionType): number {
  switch (object) {
    case DistributionType.DISTRIBUTION_TYPE_AUTOMATIC:
      return 0;
    case DistributionType.DISTRIBUTION_TYPE_MANUAL:
      return 1;
    default:
      throw new globalThis.Error(
        'Unrecognized enum value ' + object + ' for enum DistributionType'
      );
  }
}

export const GroupSortDirection = {
  GROUP_SORT_DIRECTION_ASC: 'GROUP_SORT_DIRECTION_ASC',
  GROUP_SORT_DIRECTION_DESC: 'GROUP_SORT_DIRECTION_DESC',
} as const;

export type GroupSortDirection =
  typeof GroupSortDirection[keyof typeof GroupSortDirection];

export function groupSortDirectionFromJSON(object: any): GroupSortDirection {
  switch (object) {
    case 0:
    case 'GROUP_SORT_DIRECTION_ASC':
      return GroupSortDirection.GROUP_SORT_DIRECTION_ASC;
    case 1:
    case 'GROUP_SORT_DIRECTION_DESC':
      return GroupSortDirection.GROUP_SORT_DIRECTION_DESC;
    default:
      throw new globalThis.Error(
        'Unrecognized enum value ' + object + ' for enum GroupSortDirection'
      );
  }
}

export function groupSortDirectionToJSON(object: GroupSortDirection): string {
  switch (object) {
    case GroupSortDirection.GROUP_SORT_DIRECTION_ASC:
      return 'GROUP_SORT_DIRECTION_ASC';
    case GroupSortDirection.GROUP_SORT_DIRECTION_DESC:
      return 'GROUP_SORT_DIRECTION_DESC';
    default:
      throw new globalThis.Error(
        'Unrecognized enum value ' + object + ' for enum GroupSortDirection'
      );
  }
}

export function groupSortDirectionToNumber(object: GroupSortDirection): number {
  switch (object) {
    case GroupSortDirection.GROUP_SORT_DIRECTION_ASC:
      return 0;
    case GroupSortDirection.GROUP_SORT_DIRECTION_DESC:
      return 1;
    default:
      throw new globalThis.Error(
        'Unrecognized enum value ' + object + ' for enum GroupSortDirection'
      );
  }
}

export const GroupSortSpecifier = {
  GROUP_SORT_SPECIFIER_DIRECT_FIGHT_RESULT:
    'GROUP_SORT_SPECIFIER_DIRECT_FIGHT_RESULT',
  GROUP_SORT_SPECIFIER_MANUAL: 'GROUP_SORT_SPECIFIER_MANUAL',
  GROUP_SORT_SPECIFIER_POINTS_DIFFERENCE:
    'GROUP_SORT_SPECIFIER_POINTS_DIFFERENCE',
  GROUP_SORT_SPECIFIER_TOTAL_POINTS: 'GROUP_SORT_SPECIFIER_TOTAL_POINTS',
} as const;

export type GroupSortSpecifier =
  typeof GroupSortSpecifier[keyof typeof GroupSortSpecifier];

export function groupSortSpecifierFromJSON(object: any): GroupSortSpecifier {
  switch (object) {
    case 0:
    case 'GROUP_SORT_SPECIFIER_DIRECT_FIGHT_RESULT':
      return GroupSortSpecifier.GROUP_SORT_SPECIFIER_DIRECT_FIGHT_RESULT;
    case 1:
    case 'GROUP_SORT_SPECIFIER_MANUAL':
      return GroupSortSpecifier.GROUP_SORT_SPECIFIER_MANUAL;
    case 2:
    case 'GROUP_SORT_SPECIFIER_POINTS_DIFFERENCE':
      return GroupSortSpecifier.GROUP_SORT_SPECIFIER_POINTS_DIFFERENCE;
    case 3:
    case 'GROUP_SORT_SPECIFIER_TOTAL_POINTS':
      return GroupSortSpecifier.GROUP_SORT_SPECIFIER_TOTAL_POINTS;
    default:
      throw new globalThis.Error(
        'Unrecognized enum value ' + object + ' for enum GroupSortSpecifier'
      );
  }
}

export function groupSortSpecifierToJSON(object: GroupSortSpecifier): string {
  switch (object) {
    case GroupSortSpecifier.GROUP_SORT_SPECIFIER_DIRECT_FIGHT_RESULT:
      return 'GROUP_SORT_SPECIFIER_DIRECT_FIGHT_RESULT';
    case GroupSortSpecifier.GROUP_SORT_SPECIFIER_MANUAL:
      return 'GROUP_SORT_SPECIFIER_MANUAL';
    case GroupSortSpecifier.GROUP_SORT_SPECIFIER_POINTS_DIFFERENCE:
      return 'GROUP_SORT_SPECIFIER_POINTS_DIFFERENCE';
    case GroupSortSpecifier.GROUP_SORT_SPECIFIER_TOTAL_POINTS:
      return 'GROUP_SORT_SPECIFIER_TOTAL_POINTS';
    default:
      throw new globalThis.Error(
        'Unrecognized enum value ' + object + ' for enum GroupSortSpecifier'
      );
  }
}

export function groupSortSpecifierToNumber(object: GroupSortSpecifier): number {
  switch (object) {
    case GroupSortSpecifier.GROUP_SORT_SPECIFIER_DIRECT_FIGHT_RESULT:
      return 0;
    case GroupSortSpecifier.GROUP_SORT_SPECIFIER_MANUAL:
      return 1;
    case GroupSortSpecifier.GROUP_SORT_SPECIFIER_POINTS_DIFFERENCE:
      return 2;
    case GroupSortSpecifier.GROUP_SORT_SPECIFIER_TOTAL_POINTS:
      return 3;
    default:
      throw new globalThis.Error(
        'Unrecognized enum value ' + object + ' for enum GroupSortSpecifier'
      );
  }
}

export const StageRoundType = {
  STAGE_ROUND_TYPE_UNKNOWN: 'STAGE_ROUND_TYPE_UNKNOWN',
  STAGE_ROUND_TYPE_GRAND_FINAL: 'STAGE_ROUND_TYPE_GRAND_FINAL',
  STAGE_ROUND_TYPE_THIRD_PLACE_FIGHT: 'STAGE_ROUND_TYPE_THIRD_PLACE_FIGHT',
  STAGE_ROUND_TYPE_WINNER_BRACKETS: 'STAGE_ROUND_TYPE_WINNER_BRACKETS',
  STAGE_ROUND_TYPE_LOSER_BRACKETS: 'STAGE_ROUND_TYPE_LOSER_BRACKETS',
  STAGE_ROUND_TYPE_GROUP: 'STAGE_ROUND_TYPE_GROUP',
} as const;

export type StageRoundType = typeof StageRoundType[keyof typeof StageRoundType];

export function stageRoundTypeFromJSON(object: any): StageRoundType {
  switch (object) {
    case 0:
    case 'STAGE_ROUND_TYPE_UNKNOWN':
      return StageRoundType.STAGE_ROUND_TYPE_UNKNOWN;
    case 1:
    case 'STAGE_ROUND_TYPE_GRAND_FINAL':
      return StageRoundType.STAGE_ROUND_TYPE_GRAND_FINAL;
    case 2:
    case 'STAGE_ROUND_TYPE_THIRD_PLACE_FIGHT':
      return StageRoundType.STAGE_ROUND_TYPE_THIRD_PLACE_FIGHT;
    case 3:
    case 'STAGE_ROUND_TYPE_WINNER_BRACKETS':
      return StageRoundType.STAGE_ROUND_TYPE_WINNER_BRACKETS;
    case 4:
    case 'STAGE_ROUND_TYPE_LOSER_BRACKETS':
      return StageRoundType.STAGE_ROUND_TYPE_LOSER_BRACKETS;
    case 5:
    case 'STAGE_ROUND_TYPE_GROUP':
      return StageRoundType.STAGE_ROUND_TYPE_GROUP;
    default:
      throw new globalThis.Error(
        'Unrecognized enum value ' + object + ' for enum StageRoundType'
      );
  }
}

export function stageRoundTypeToJSON(object: StageRoundType): string {
  switch (object) {
    case StageRoundType.STAGE_ROUND_TYPE_UNKNOWN:
      return 'STAGE_ROUND_TYPE_UNKNOWN';
    case StageRoundType.STAGE_ROUND_TYPE_GRAND_FINAL:
      return 'STAGE_ROUND_TYPE_GRAND_FINAL';
    case StageRoundType.STAGE_ROUND_TYPE_THIRD_PLACE_FIGHT:
      return 'STAGE_ROUND_TYPE_THIRD_PLACE_FIGHT';
    case StageRoundType.STAGE_ROUND_TYPE_WINNER_BRACKETS:
      return 'STAGE_ROUND_TYPE_WINNER_BRACKETS';
    case StageRoundType.STAGE_ROUND_TYPE_LOSER_BRACKETS:
      return 'STAGE_ROUND_TYPE_LOSER_BRACKETS';
    case StageRoundType.STAGE_ROUND_TYPE_GROUP:
      return 'STAGE_ROUND_TYPE_GROUP';
    default:
      throw new globalThis.Error(
        'Unrecognized enum value ' + object + ' for enum StageRoundType'
      );
  }
}

export function stageRoundTypeToNumber(object: StageRoundType): number {
  switch (object) {
    case StageRoundType.STAGE_ROUND_TYPE_UNKNOWN:
      return 0;
    case StageRoundType.STAGE_ROUND_TYPE_GRAND_FINAL:
      return 1;
    case StageRoundType.STAGE_ROUND_TYPE_THIRD_PLACE_FIGHT:
      return 2;
    case StageRoundType.STAGE_ROUND_TYPE_WINNER_BRACKETS:
      return 3;
    case StageRoundType.STAGE_ROUND_TYPE_LOSER_BRACKETS:
      return 4;
    case StageRoundType.STAGE_ROUND_TYPE_GROUP:
      return 5;
    default:
      throw new globalThis.Error(
        'Unrecognized enum value ' + object + ' for enum StageRoundType'
      );
  }
}

export const BracketType = {
  BRACKET_TYPE_UNKNOWN: 'BRACKET_TYPE_UNKNOWN',
  BRACKET_TYPE_SINGLE_ELIMINATION: 'BRACKET_TYPE_SINGLE_ELIMINATION',
  BRACKET_TYPE_DOUBLE_ELIMINATION: 'BRACKET_TYPE_DOUBLE_ELIMINATION',
  BRACKET_TYPE_GROUP: 'BRACKET_TYPE_GROUP',
} as const;

export type BracketType = typeof BracketType[keyof typeof BracketType];

export function bracketTypeFromJSON(object: any): BracketType {
  switch (object) {
    case 0:
    case 'BRACKET_TYPE_UNKNOWN':
      return BracketType.BRACKET_TYPE_UNKNOWN;
    case 2:
    case 'BRACKET_TYPE_SINGLE_ELIMINATION':
      return BracketType.BRACKET_TYPE_SINGLE_ELIMINATION;
    case 3:
    case 'BRACKET_TYPE_DOUBLE_ELIMINATION':
      return BracketType.BRACKET_TYPE_DOUBLE_ELIMINATION;
    case 4:
    case 'BRACKET_TYPE_GROUP':
      return BracketType.BRACKET_TYPE_GROUP;
    default:
      throw new globalThis.Error(
        'Unrecognized enum value ' + object + ' for enum BracketType'
      );
  }
}

export function bracketTypeToJSON(object: BracketType): string {
  switch (object) {
    case BracketType.BRACKET_TYPE_UNKNOWN:
      return 'BRACKET_TYPE_UNKNOWN';
    case BracketType.BRACKET_TYPE_SINGLE_ELIMINATION:
      return 'BRACKET_TYPE_SINGLE_ELIMINATION';
    case BracketType.BRACKET_TYPE_DOUBLE_ELIMINATION:
      return 'BRACKET_TYPE_DOUBLE_ELIMINATION';
    case BracketType.BRACKET_TYPE_GROUP:
      return 'BRACKET_TYPE_GROUP';
    default:
      throw new globalThis.Error(
        'Unrecognized enum value ' + object + ' for enum BracketType'
      );
  }
}

export function bracketTypeToNumber(object: BracketType): number {
  switch (object) {
    case BracketType.BRACKET_TYPE_UNKNOWN:
      return 0;
    case BracketType.BRACKET_TYPE_SINGLE_ELIMINATION:
      return 2;
    case BracketType.BRACKET_TYPE_DOUBLE_ELIMINATION:
      return 3;
    case BracketType.BRACKET_TYPE_GROUP:
      return 4;
    default:
      throw new globalThis.Error(
        'Unrecognized enum value ' + object + ' for enum BracketType'
      );
  }
}

export const StageType = {
  STAGE_TYPE_UNKNOWN: 'STAGE_TYPE_UNKNOWN',
  STAGE_TYPE_PRELIMINARY: 'STAGE_TYPE_PRELIMINARY',
  STAGE_TYPE_FINAL: 'STAGE_TYPE_FINAL',
} as const;

export type StageType = typeof StageType[keyof typeof StageType];

export function stageTypeFromJSON(object: any): StageType {
  switch (object) {
    case 0:
    case 'STAGE_TYPE_UNKNOWN':
      return StageType.STAGE_TYPE_UNKNOWN;
    case 1:
    case 'STAGE_TYPE_PRELIMINARY':
      return StageType.STAGE_TYPE_PRELIMINARY;
    case 2:
    case 'STAGE_TYPE_FINAL':
      return StageType.STAGE_TYPE_FINAL;
    default:
      throw new globalThis.Error(
        'Unrecognized enum value ' + object + ' for enum StageType'
      );
  }
}

export function stageTypeToJSON(object: StageType): string {
  switch (object) {
    case StageType.STAGE_TYPE_UNKNOWN:
      return 'STAGE_TYPE_UNKNOWN';
    case StageType.STAGE_TYPE_PRELIMINARY:
      return 'STAGE_TYPE_PRELIMINARY';
    case StageType.STAGE_TYPE_FINAL:
      return 'STAGE_TYPE_FINAL';
    default:
      throw new globalThis.Error(
        'Unrecognized enum value ' + object + ' for enum StageType'
      );
  }
}

export function stageTypeToNumber(object: StageType): number {
  switch (object) {
    case StageType.STAGE_TYPE_UNKNOWN:
      return 0;
    case StageType.STAGE_TYPE_PRELIMINARY:
      return 1;
    case StageType.STAGE_TYPE_FINAL:
      return 2;
    default:
      throw new globalThis.Error(
        'Unrecognized enum value ' + object + ' for enum StageType'
      );
  }
}

export const StageStatus = {
  STAGE_STATUS_UNKNOWN: 'STAGE_STATUS_UNKNOWN',
  STAGE_STATUS_APPROVED: 'STAGE_STATUS_APPROVED',
  STAGE_STATUS_WAITING_FOR_APPROVAL: 'STAGE_STATUS_WAITING_FOR_APPROVAL',
  STAGE_STATUS_WAITING_FOR_COMPETITORS: 'STAGE_STATUS_WAITING_FOR_COMPETITORS',
  STAGE_STATUS_FINISHED: 'STAGE_STATUS_FINISHED',
  STAGE_STATUS_IN_PROGRESS: 'STAGE_STATUS_IN_PROGRESS',
} as const;

export type StageStatus = typeof StageStatus[keyof typeof StageStatus];

export function stageStatusFromJSON(object: any): StageStatus {
  switch (object) {
    case 0:
    case 'STAGE_STATUS_UNKNOWN':
      return StageStatus.STAGE_STATUS_UNKNOWN;
    case 1:
    case 'STAGE_STATUS_APPROVED':
      return StageStatus.STAGE_STATUS_APPROVED;
    case 2:
    case 'STAGE_STATUS_WAITING_FOR_APPROVAL':
      return StageStatus.STAGE_STATUS_WAITING_FOR_APPROVAL;
    case 3:
    case 'STAGE_STATUS_WAITING_FOR_COMPETITORS':
      return StageStatus.STAGE_STATUS_WAITING_FOR_COMPETITORS;
    case 4:
    case 'STAGE_STATUS_FINISHED':
      return StageStatus.STAGE_STATUS_FINISHED;
    case 5:
    case 'STAGE_STATUS_IN_PROGRESS':
      return StageStatus.STAGE_STATUS_IN_PROGRESS;
    default:
      throw new globalThis.Error(
        'Unrecognized enum value ' + object + ' for enum StageStatus'
      );
  }
}

export function stageStatusToJSON(object: StageStatus): string {
  switch (object) {
    case StageStatus.STAGE_STATUS_UNKNOWN:
      return 'STAGE_STATUS_UNKNOWN';
    case StageStatus.STAGE_STATUS_APPROVED:
      return 'STAGE_STATUS_APPROVED';
    case StageStatus.STAGE_STATUS_WAITING_FOR_APPROVAL:
      return 'STAGE_STATUS_WAITING_FOR_APPROVAL';
    case StageStatus.STAGE_STATUS_WAITING_FOR_COMPETITORS:
      return 'STAGE_STATUS_WAITING_FOR_COMPETITORS';
    case StageStatus.STAGE_STATUS_FINISHED:
      return 'STAGE_STATUS_FINISHED';
    case StageStatus.STAGE_STATUS_IN_PROGRESS:
      return 'STAGE_STATUS_IN_PROGRESS';
    default:
      throw new globalThis.Error(
        'Unrecognized enum value ' + object + ' for enum StageStatus'
      );
  }
}

export function stageStatusToNumber(object: StageStatus): number {
  switch (object) {
    case StageStatus.STAGE_STATUS_UNKNOWN:
      return 0;
    case StageStatus.STAGE_STATUS_APPROVED:
      return 1;
    case StageStatus.STAGE_STATUS_WAITING_FOR_APPROVAL:
      return 2;
    case StageStatus.STAGE_STATUS_WAITING_FOR_COMPETITORS:
      return 3;
    case StageStatus.STAGE_STATUS_FINISHED:
      return 4;
    case StageStatus.STAGE_STATUS_IN_PROGRESS:
      return 5;
    default:
      throw new globalThis.Error(
        'Unrecognized enum value ' + object + ' for enum StageStatus'
      );
  }
}

export const FightStatus = {
  FIGHT_STATUS_PENDING: 'FIGHT_STATUS_PENDING',
  FIGHT_STATUS_GET_READY: 'FIGHT_STATUS_GET_READY',
  FIGHT_STATUS_IN_PROGRESS: 'FIGHT_STATUS_IN_PROGRESS',
  FIGHT_STATUS_PAUSED: 'FIGHT_STATUS_PAUSED',
  FIGHT_STATUS_FINISHED: 'FIGHT_STATUS_FINISHED',
  FIGHT_STATUS_UNCOMPLETABLE: 'FIGHT_STATUS_UNCOMPLETABLE',
  FIGHT_STATUS_WALKOVER: 'FIGHT_STATUS_WALKOVER',
} as const;

export type FightStatus = typeof FightStatus[keyof typeof FightStatus];

export function fightStatusFromJSON(object: any): FightStatus {
  switch (object) {
    case 0:
    case 'FIGHT_STATUS_PENDING':
      return FightStatus.FIGHT_STATUS_PENDING;
    case 1:
    case 'FIGHT_STATUS_GET_READY':
      return FightStatus.FIGHT_STATUS_GET_READY;
    case 2:
    case 'FIGHT_STATUS_IN_PROGRESS':
      return FightStatus.FIGHT_STATUS_IN_PROGRESS;
    case 3:
    case 'FIGHT_STATUS_PAUSED':
      return FightStatus.FIGHT_STATUS_PAUSED;
    case 4:
    case 'FIGHT_STATUS_FINISHED':
      return FightStatus.FIGHT_STATUS_FINISHED;
    case 5:
    case 'FIGHT_STATUS_UNCOMPLETABLE':
      return FightStatus.FIGHT_STATUS_UNCOMPLETABLE;
    case 6:
    case 'FIGHT_STATUS_WALKOVER':
      return FightStatus.FIGHT_STATUS_WALKOVER;
    default:
      throw new globalThis.Error(
        'Unrecognized enum value ' + object + ' for enum FightStatus'
      );
  }
}

export function fightStatusToJSON(object: FightStatus): string {
  switch (object) {
    case FightStatus.FIGHT_STATUS_PENDING:
      return 'FIGHT_STATUS_PENDING';
    case FightStatus.FIGHT_STATUS_GET_READY:
      return 'FIGHT_STATUS_GET_READY';
    case FightStatus.FIGHT_STATUS_IN_PROGRESS:
      return 'FIGHT_STATUS_IN_PROGRESS';
    case FightStatus.FIGHT_STATUS_PAUSED:
      return 'FIGHT_STATUS_PAUSED';
    case FightStatus.FIGHT_STATUS_FINISHED:
      return 'FIGHT_STATUS_FINISHED';
    case FightStatus.FIGHT_STATUS_UNCOMPLETABLE:
      return 'FIGHT_STATUS_UNCOMPLETABLE';
    case FightStatus.FIGHT_STATUS_WALKOVER:
      return 'FIGHT_STATUS_WALKOVER';
    default:
      throw new globalThis.Error(
        'Unrecognized enum value ' + object + ' for enum FightStatus'
      );
  }
}

export function fightStatusToNumber(object: FightStatus): number {
  switch (object) {
    case FightStatus.FIGHT_STATUS_PENDING:
      return 0;
    case FightStatus.FIGHT_STATUS_GET_READY:
      return 1;
    case FightStatus.FIGHT_STATUS_IN_PROGRESS:
      return 2;
    case FightStatus.FIGHT_STATUS_PAUSED:
      return 3;
    case FightStatus.FIGHT_STATUS_FINISHED:
      return 4;
    case FightStatus.FIGHT_STATUS_UNCOMPLETABLE:
      return 5;
    case FightStatus.FIGHT_STATUS_WALKOVER:
      return 6;
    default:
      throw new globalThis.Error(
        'Unrecognized enum value ' + object + ' for enum FightStatus'
      );
  }
}

export const FightReferenceType = {
  FIGHT_REFERENCE_TYPE_UNKNOWN: 'FIGHT_REFERENCE_TYPE_UNKNOWN',
  FIGHT_REFERENCE_TYPE_WINNER: 'FIGHT_REFERENCE_TYPE_WINNER',
  FIGHT_REFERENCE_TYPE_LOSER: 'FIGHT_REFERENCE_TYPE_LOSER',
  FIGHT_REFERENCE_TYPE_PROPAGATED: 'FIGHT_REFERENCE_TYPE_PROPAGATED',
} as const;

export type FightReferenceType =
  typeof FightReferenceType[keyof typeof FightReferenceType];

export function fightReferenceTypeFromJSON(object: any): FightReferenceType {
  switch (object) {
    case 0:
    case 'FIGHT_REFERENCE_TYPE_UNKNOWN':
      return FightReferenceType.FIGHT_REFERENCE_TYPE_UNKNOWN;
    case 1:
    case 'FIGHT_REFERENCE_TYPE_WINNER':
      return FightReferenceType.FIGHT_REFERENCE_TYPE_WINNER;
    case 2:
    case 'FIGHT_REFERENCE_TYPE_LOSER':
      return FightReferenceType.FIGHT_REFERENCE_TYPE_LOSER;
    case 3:
    case 'FIGHT_REFERENCE_TYPE_PROPAGATED':
      return FightReferenceType.FIGHT_REFERENCE_TYPE_PROPAGATED;
    default:
      throw new globalThis.Error(
        'Unrecognized enum value ' + object + ' for enum FightReferenceType'
      );
  }
}

export function fightReferenceTypeToJSON(object: FightReferenceType): string {
  switch (object) {
    case FightReferenceType.FIGHT_REFERENCE_TYPE_UNKNOWN:
      return 'FIGHT_REFERENCE_TYPE_UNKNOWN';
    case FightReferenceType.FIGHT_REFERENCE_TYPE_WINNER:
      return 'FIGHT_REFERENCE_TYPE_WINNER';
    case FightReferenceType.FIGHT_REFERENCE_TYPE_LOSER:
      return 'FIGHT_REFERENCE_TYPE_LOSER';
    case FightReferenceType.FIGHT_REFERENCE_TYPE_PROPAGATED:
      return 'FIGHT_REFERENCE_TYPE_PROPAGATED';
    default:
      throw new globalThis.Error(
        'Unrecognized enum value ' + object + ' for enum FightReferenceType'
      );
  }
}

export function fightReferenceTypeToNumber(object: FightReferenceType): number {
  switch (object) {
    case FightReferenceType.FIGHT_REFERENCE_TYPE_UNKNOWN:
      return 0;
    case FightReferenceType.FIGHT_REFERENCE_TYPE_WINNER:
      return 1;
    case FightReferenceType.FIGHT_REFERENCE_TYPE_LOSER:
      return 2;
    case FightReferenceType.FIGHT_REFERENCE_TYPE_PROPAGATED:
      return 3;
    default:
      throw new globalThis.Error(
        'Unrecognized enum value ' + object + ' for enum FightReferenceType'
      );
  }
}

export const CategoryRestrictionType = {
  CATEGORY_RESTRICTION_TYPE_VALUE: 'CATEGORY_RESTRICTION_TYPE_VALUE',
  CATEGORY_RESTRICTION_TYPE_RANGE: 'CATEGORY_RESTRICTION_TYPE_RANGE',
} as const;

export type CategoryRestrictionType =
  typeof CategoryRestrictionType[keyof typeof CategoryRestrictionType];

export function categoryRestrictionTypeFromJSON(
  object: any
): CategoryRestrictionType {
  switch (object) {
    case 0:
    case 'CATEGORY_RESTRICTION_TYPE_VALUE':
      return CategoryRestrictionType.CATEGORY_RESTRICTION_TYPE_VALUE;
    case 1:
    case 'CATEGORY_RESTRICTION_TYPE_RANGE':
      return CategoryRestrictionType.CATEGORY_RESTRICTION_TYPE_RANGE;
    default:
      throw new globalThis.Error(
        'Unrecognized enum value ' +
          object +
          ' for enum CategoryRestrictionType'
      );
  }
}

export function categoryRestrictionTypeToJSON(
  object: CategoryRestrictionType
): string {
  switch (object) {
    case CategoryRestrictionType.CATEGORY_RESTRICTION_TYPE_VALUE:
      return 'CATEGORY_RESTRICTION_TYPE_VALUE';
    case CategoryRestrictionType.CATEGORY_RESTRICTION_TYPE_RANGE:
      return 'CATEGORY_RESTRICTION_TYPE_RANGE';
    default:
      throw new globalThis.Error(
        'Unrecognized enum value ' +
          object +
          ' for enum CategoryRestrictionType'
      );
  }
}

export function categoryRestrictionTypeToNumber(
  object: CategoryRestrictionType
): number {
  switch (object) {
    case CategoryRestrictionType.CATEGORY_RESTRICTION_TYPE_VALUE:
      return 0;
    case CategoryRestrictionType.CATEGORY_RESTRICTION_TYPE_RANGE:
      return 1;
    default:
      throw new globalThis.Error(
        'Unrecognized enum value ' +
          object +
          ' for enum CategoryRestrictionType'
      );
  }
}

export const CompetitionStatus = {
  COMPETITION_STATUS_UNKNOWN: 'COMPETITION_STATUS_UNKNOWN',
  COMPETITION_STATUS_CREATED: 'COMPETITION_STATUS_CREATED',
  COMPETITION_STATUS_PUBLISHED: 'COMPETITION_STATUS_PUBLISHED',
  COMPETITION_STATUS_UNPUBLISHED: 'COMPETITION_STATUS_UNPUBLISHED',
  COMPETITION_STATUS_STARTED: 'COMPETITION_STATUS_STARTED',
  COMPETITION_STATUS_PAUSED: 'COMPETITION_STATUS_PAUSED',
  COMPETITION_STATUS_STOPPED: 'COMPETITION_STATUS_STOPPED',
  COMPETITION_STATUS_DELETED: 'COMPETITION_STATUS_DELETED',
} as const;

export type CompetitionStatus =
  typeof CompetitionStatus[keyof typeof CompetitionStatus];

export function competitionStatusFromJSON(object: any): CompetitionStatus {
  switch (object) {
    case 0:
    case 'COMPETITION_STATUS_UNKNOWN':
      return CompetitionStatus.COMPETITION_STATUS_UNKNOWN;
    case 1:
    case 'COMPETITION_STATUS_CREATED':
      return CompetitionStatus.COMPETITION_STATUS_CREATED;
    case 2:
    case 'COMPETITION_STATUS_PUBLISHED':
      return CompetitionStatus.COMPETITION_STATUS_PUBLISHED;
    case 3:
    case 'COMPETITION_STATUS_UNPUBLISHED':
      return CompetitionStatus.COMPETITION_STATUS_UNPUBLISHED;
    case 4:
    case 'COMPETITION_STATUS_STARTED':
      return CompetitionStatus.COMPETITION_STATUS_STARTED;
    case 5:
    case 'COMPETITION_STATUS_PAUSED':
      return CompetitionStatus.COMPETITION_STATUS_PAUSED;
    case 6:
    case 'COMPETITION_STATUS_STOPPED':
      return CompetitionStatus.COMPETITION_STATUS_STOPPED;
    case 7:
    case 'COMPETITION_STATUS_DELETED':
      return CompetitionStatus.COMPETITION_STATUS_DELETED;
    default:
      throw new globalThis.Error(
        'Unrecognized enum value ' + object + ' for enum CompetitionStatus'
      );
  }
}

export function competitionStatusToJSON(object: CompetitionStatus): string {
  switch (object) {
    case CompetitionStatus.COMPETITION_STATUS_UNKNOWN:
      return 'COMPETITION_STATUS_UNKNOWN';
    case CompetitionStatus.COMPETITION_STATUS_CREATED:
      return 'COMPETITION_STATUS_CREATED';
    case CompetitionStatus.COMPETITION_STATUS_PUBLISHED:
      return 'COMPETITION_STATUS_PUBLISHED';
    case CompetitionStatus.COMPETITION_STATUS_UNPUBLISHED:
      return 'COMPETITION_STATUS_UNPUBLISHED';
    case CompetitionStatus.COMPETITION_STATUS_STARTED:
      return 'COMPETITION_STATUS_STARTED';
    case CompetitionStatus.COMPETITION_STATUS_PAUSED:
      return 'COMPETITION_STATUS_PAUSED';
    case CompetitionStatus.COMPETITION_STATUS_STOPPED:
      return 'COMPETITION_STATUS_STOPPED';
    case CompetitionStatus.COMPETITION_STATUS_DELETED:
      return 'COMPETITION_STATUS_DELETED';
    default:
      throw new globalThis.Error(
        'Unrecognized enum value ' + object + ' for enum CompetitionStatus'
      );
  }
}

export function competitionStatusToNumber(object: CompetitionStatus): number {
  switch (object) {
    case CompetitionStatus.COMPETITION_STATUS_UNKNOWN:
      return 0;
    case CompetitionStatus.COMPETITION_STATUS_CREATED:
      return 1;
    case CompetitionStatus.COMPETITION_STATUS_PUBLISHED:
      return 2;
    case CompetitionStatus.COMPETITION_STATUS_UNPUBLISHED:
      return 3;
    case CompetitionStatus.COMPETITION_STATUS_STARTED:
      return 4;
    case CompetitionStatus.COMPETITION_STATUS_PAUSED:
      return 5;
    case CompetitionStatus.COMPETITION_STATUS_STOPPED:
      return 6;
    case CompetitionStatus.COMPETITION_STATUS_DELETED:
      return 7;
    default:
      throw new globalThis.Error(
        'Unrecognized enum value ' + object + ' for enum CompetitionStatus'
      );
  }
}

export const ScheduleEntryType = {
  SCHEDULE_ENTRY_TYPE_UNKNOWN: 'SCHEDULE_ENTRY_TYPE_UNKNOWN',
  SCHEDULE_ENTRY_TYPE_FIGHTS_GROUP: 'SCHEDULE_ENTRY_TYPE_FIGHTS_GROUP',
  SCHEDULE_ENTRY_TYPE_FIXED_PAUSE: 'SCHEDULE_ENTRY_TYPE_FIXED_PAUSE',
  SCHEDULE_ENTRY_TYPE_RELATIVE_PAUSE: 'SCHEDULE_ENTRY_TYPE_RELATIVE_PAUSE',
} as const;

export type ScheduleEntryType =
  typeof ScheduleEntryType[keyof typeof ScheduleEntryType];

export function scheduleEntryTypeFromJSON(object: any): ScheduleEntryType {
  switch (object) {
    case 0:
    case 'SCHEDULE_ENTRY_TYPE_UNKNOWN':
      return ScheduleEntryType.SCHEDULE_ENTRY_TYPE_UNKNOWN;
    case 1:
    case 'SCHEDULE_ENTRY_TYPE_FIGHTS_GROUP':
      return ScheduleEntryType.SCHEDULE_ENTRY_TYPE_FIGHTS_GROUP;
    case 2:
    case 'SCHEDULE_ENTRY_TYPE_FIXED_PAUSE':
      return ScheduleEntryType.SCHEDULE_ENTRY_TYPE_FIXED_PAUSE;
    case 3:
    case 'SCHEDULE_ENTRY_TYPE_RELATIVE_PAUSE':
      return ScheduleEntryType.SCHEDULE_ENTRY_TYPE_RELATIVE_PAUSE;
    default:
      throw new globalThis.Error(
        'Unrecognized enum value ' + object + ' for enum ScheduleEntryType'
      );
  }
}

export function scheduleEntryTypeToJSON(object: ScheduleEntryType): string {
  switch (object) {
    case ScheduleEntryType.SCHEDULE_ENTRY_TYPE_UNKNOWN:
      return 'SCHEDULE_ENTRY_TYPE_UNKNOWN';
    case ScheduleEntryType.SCHEDULE_ENTRY_TYPE_FIGHTS_GROUP:
      return 'SCHEDULE_ENTRY_TYPE_FIGHTS_GROUP';
    case ScheduleEntryType.SCHEDULE_ENTRY_TYPE_FIXED_PAUSE:
      return 'SCHEDULE_ENTRY_TYPE_FIXED_PAUSE';
    case ScheduleEntryType.SCHEDULE_ENTRY_TYPE_RELATIVE_PAUSE:
      return 'SCHEDULE_ENTRY_TYPE_RELATIVE_PAUSE';
    default:
      throw new globalThis.Error(
        'Unrecognized enum value ' + object + ' for enum ScheduleEntryType'
      );
  }
}

export function scheduleEntryTypeToNumber(object: ScheduleEntryType): number {
  switch (object) {
    case ScheduleEntryType.SCHEDULE_ENTRY_TYPE_UNKNOWN:
      return 0;
    case ScheduleEntryType.SCHEDULE_ENTRY_TYPE_FIGHTS_GROUP:
      return 1;
    case ScheduleEntryType.SCHEDULE_ENTRY_TYPE_FIXED_PAUSE:
      return 2;
    case ScheduleEntryType.SCHEDULE_ENTRY_TYPE_RELATIVE_PAUSE:
      return 3;
    default:
      throw new globalThis.Error(
        'Unrecognized enum value ' + object + ' for enum ScheduleEntryType'
      );
  }
}

export const ScheduleRequirementType = {
  SCHEDULE_REQUIREMENT_TYPE_UNKNOWN: 'SCHEDULE_REQUIREMENT_TYPE_UNKNOWN',
  SCHEDULE_REQUIREMENT_TYPE_CATEGORIES: 'SCHEDULE_REQUIREMENT_TYPE_CATEGORIES',
  SCHEDULE_REQUIREMENT_TYPE_FIGHTS: 'SCHEDULE_REQUIREMENT_TYPE_FIGHTS',
  SCHEDULE_REQUIREMENT_TYPE_RELATIVE_PAUSE:
    'SCHEDULE_REQUIREMENT_TYPE_RELATIVE_PAUSE',
  SCHEDULE_REQUIREMENT_TYPE_FIXED_PAUSE:
    'SCHEDULE_REQUIREMENT_TYPE_FIXED_PAUSE',
} as const;

export type ScheduleRequirementType =
  typeof ScheduleRequirementType[keyof typeof ScheduleRequirementType];

export function scheduleRequirementTypeFromJSON(
  object: any
): ScheduleRequirementType {
  switch (object) {
    case 0:
    case 'SCHEDULE_REQUIREMENT_TYPE_UNKNOWN':
      return ScheduleRequirementType.SCHEDULE_REQUIREMENT_TYPE_UNKNOWN;
    case 1:
    case 'SCHEDULE_REQUIREMENT_TYPE_CATEGORIES':
      return ScheduleRequirementType.SCHEDULE_REQUIREMENT_TYPE_CATEGORIES;
    case 2:
    case 'SCHEDULE_REQUIREMENT_TYPE_FIGHTS':
      return ScheduleRequirementType.SCHEDULE_REQUIREMENT_TYPE_FIGHTS;
    case 3:
    case 'SCHEDULE_REQUIREMENT_TYPE_RELATIVE_PAUSE':
      return ScheduleRequirementType.SCHEDULE_REQUIREMENT_TYPE_RELATIVE_PAUSE;
    case 4:
    case 'SCHEDULE_REQUIREMENT_TYPE_FIXED_PAUSE':
      return ScheduleRequirementType.SCHEDULE_REQUIREMENT_TYPE_FIXED_PAUSE;
    default:
      throw new globalThis.Error(
        'Unrecognized enum value ' +
          object +
          ' for enum ScheduleRequirementType'
      );
  }
}

export function scheduleRequirementTypeToJSON(
  object: ScheduleRequirementType
): string {
  switch (object) {
    case ScheduleRequirementType.SCHEDULE_REQUIREMENT_TYPE_UNKNOWN:
      return 'SCHEDULE_REQUIREMENT_TYPE_UNKNOWN';
    case ScheduleRequirementType.SCHEDULE_REQUIREMENT_TYPE_CATEGORIES:
      return 'SCHEDULE_REQUIREMENT_TYPE_CATEGORIES';
    case ScheduleRequirementType.SCHEDULE_REQUIREMENT_TYPE_FIGHTS:
      return 'SCHEDULE_REQUIREMENT_TYPE_FIGHTS';
    case ScheduleRequirementType.SCHEDULE_REQUIREMENT_TYPE_RELATIVE_PAUSE:
      return 'SCHEDULE_REQUIREMENT_TYPE_RELATIVE_PAUSE';
    case ScheduleRequirementType.SCHEDULE_REQUIREMENT_TYPE_FIXED_PAUSE:
      return 'SCHEDULE_REQUIREMENT_TYPE_FIXED_PAUSE';
    default:
      throw new globalThis.Error(
        'Unrecognized enum value ' +
          object +
          ' for enum ScheduleRequirementType'
      );
  }
}

export function scheduleRequirementTypeToNumber(
  object: ScheduleRequirementType
): number {
  switch (object) {
    case ScheduleRequirementType.SCHEDULE_REQUIREMENT_TYPE_UNKNOWN:
      return 0;
    case ScheduleRequirementType.SCHEDULE_REQUIREMENT_TYPE_CATEGORIES:
      return 1;
    case ScheduleRequirementType.SCHEDULE_REQUIREMENT_TYPE_FIGHTS:
      return 2;
    case ScheduleRequirementType.SCHEDULE_REQUIREMENT_TYPE_RELATIVE_PAUSE:
      return 3;
    case ScheduleRequirementType.SCHEDULE_REQUIREMENT_TYPE_FIXED_PAUSE:
      return 4;
    default:
      throw new globalThis.Error(
        'Unrecognized enum value ' +
          object +
          ' for enum ScheduleRequirementType'
      );
  }
}

export const CompetitorRegistrationStatus = {
  COMPETITOR_REGISTRATION_STATUS_UNKNOWN:
    'COMPETITOR_REGISTRATION_STATUS_UNKNOWN',
  COMPETITOR_REGISTRATION_STATUS_SUCCESS_CONFIRMED:
    'COMPETITOR_REGISTRATION_STATUS_SUCCESS_CONFIRMED',
  COMPETITOR_REGISTRATION_STATUS_PAYMENT_PENDING:
    'COMPETITOR_REGISTRATION_STATUS_PAYMENT_PENDING',
  COMPETITOR_REGISTRATION_STATUS_REGISTRATION_CANCELLED:
    'COMPETITOR_REGISTRATION_STATUS_REGISTRATION_CANCELLED',
} as const;

export type CompetitorRegistrationStatus =
  typeof CompetitorRegistrationStatus[keyof typeof CompetitorRegistrationStatus];

export function competitorRegistrationStatusFromJSON(
  object: any
): CompetitorRegistrationStatus {
  switch (object) {
    case 0:
    case 'COMPETITOR_REGISTRATION_STATUS_UNKNOWN':
      return CompetitorRegistrationStatus.COMPETITOR_REGISTRATION_STATUS_UNKNOWN;
    case 1:
    case 'COMPETITOR_REGISTRATION_STATUS_SUCCESS_CONFIRMED':
      return CompetitorRegistrationStatus.COMPETITOR_REGISTRATION_STATUS_SUCCESS_CONFIRMED;
    case 2:
    case 'COMPETITOR_REGISTRATION_STATUS_PAYMENT_PENDING':
      return CompetitorRegistrationStatus.COMPETITOR_REGISTRATION_STATUS_PAYMENT_PENDING;
    case 3:
    case 'COMPETITOR_REGISTRATION_STATUS_REGISTRATION_CANCELLED':
      return CompetitorRegistrationStatus.COMPETITOR_REGISTRATION_STATUS_REGISTRATION_CANCELLED;
    default:
      throw new globalThis.Error(
        'Unrecognized enum value ' +
          object +
          ' for enum CompetitorRegistrationStatus'
      );
  }
}

export function competitorRegistrationStatusToJSON(
  object: CompetitorRegistrationStatus
): string {
  switch (object) {
    case CompetitorRegistrationStatus.COMPETITOR_REGISTRATION_STATUS_UNKNOWN:
      return 'COMPETITOR_REGISTRATION_STATUS_UNKNOWN';
    case CompetitorRegistrationStatus.COMPETITOR_REGISTRATION_STATUS_SUCCESS_CONFIRMED:
      return 'COMPETITOR_REGISTRATION_STATUS_SUCCESS_CONFIRMED';
    case CompetitorRegistrationStatus.COMPETITOR_REGISTRATION_STATUS_PAYMENT_PENDING:
      return 'COMPETITOR_REGISTRATION_STATUS_PAYMENT_PENDING';
    case CompetitorRegistrationStatus.COMPETITOR_REGISTRATION_STATUS_REGISTRATION_CANCELLED:
      return 'COMPETITOR_REGISTRATION_STATUS_REGISTRATION_CANCELLED';
    default:
      throw new globalThis.Error(
        'Unrecognized enum value ' +
          object +
          ' for enum CompetitorRegistrationStatus'
      );
  }
}

export function competitorRegistrationStatusToNumber(
  object: CompetitorRegistrationStatus
): number {
  switch (object) {
    case CompetitorRegistrationStatus.COMPETITOR_REGISTRATION_STATUS_UNKNOWN:
      return 0;
    case CompetitorRegistrationStatus.COMPETITOR_REGISTRATION_STATUS_SUCCESS_CONFIRMED:
      return 1;
    case CompetitorRegistrationStatus.COMPETITOR_REGISTRATION_STATUS_PAYMENT_PENDING:
      return 2;
    case CompetitorRegistrationStatus.COMPETITOR_REGISTRATION_STATUS_REGISTRATION_CANCELLED:
      return 3;
    default:
      throw new globalThis.Error(
        'Unrecognized enum value ' +
          object +
          ' for enum CompetitorRegistrationStatus'
      );
  }
}

export interface AdjacencyList {
  root: number;
  vertices: AdjacencyListEntry[];
}

export interface AdjacencyListEntry {
  id: number;
  children: number[];
}

export interface ManagedCompetition {
  id: string;
  competitionName?: string | undefined;
  eventsTopic: string;
  creatorId?: string | undefined;
  createdAt?: Date;
  startsAt?: Date;
  endsAt?: Date | undefined;
  timeZone: string;
  status: CompetitionStatus;
}

export interface StageDescriptor {
  id: string;
  name?: string | undefined;
  categoryId: string;
  competitionId: string;
  bracketType: BracketType;
  stageType: StageType;
  stageStatus: StageStatus;
  stageResultDescriptor?: StageResultDescriptor;
  inputDescriptor?: StageInputDescriptor;
  stageOrder: number;
  waitForPrevious: boolean;
  hasThirdPlaceFight: boolean;
  groupDescriptors: GroupDescriptor[];
  numberOfFights: number;
  fightDuration: number;
}

export interface GroupDescriptor {
  id: string;
  name: string;
  size: number;
}

export interface StageInputDescriptor {
  numberOfCompetitors: number;
  selectors: CompetitorSelector[];
  distributionType: DistributionType;
}

export interface CompetitorSelector {
  applyToStageId: string;
  logicalOperator: LogicalOperator;
  classifier: SelectorClassifier;
  operator: OperatorType;
  selectorValue: string[];
}

export interface StageResultDescriptor {
  name?: string | undefined;
  forceManualAssignment: boolean;
  outputSize?: number | undefined;
  fightResultOptions: FightResultOption[];
  competitorResults: CompetitorStageResult[];
  additionalGroupSortingDescriptors: AdditionalGroupSortingDescriptor[];
}

export interface AdditionalGroupSortingDescriptor {
  groupSortDirection: GroupSortDirection;
  groupSortSpecifier: GroupSortSpecifier;
}

export interface CompetitorStageResult {
  competitorId: string;
  points?: number | undefined;
  round?: number | undefined;
  roundType: StageRoundType;
  place?: number | undefined;
  stageId: string;
  groupId?: string | undefined;
  conflicting: boolean;
}

export interface FightResultOption {
  id: string;
  description?: string | undefined;
  shortName: string;
  draw: boolean;
  winnerPoints: number;
  winnerAdditionalPoints?: number | undefined;
  loserPoints: number;
  loserAdditionalPoints?: number | undefined;
}

export interface FightDescription {
  id: string;
  categoryId: string;
  fightName?: string | undefined;
  winFight?: string | undefined;
  loseFight?: string | undefined;
  scores: CompScore[];
  duration: number;
  round: number;
  invalid: boolean;
  roundType: StageRoundType;
  status: FightStatus;
  fightResult?: FightResult | undefined;
  mat?: MatDescription | undefined;
  numberOnMat?: number | undefined;
  priority?: number | undefined;
  competitionId: string;
  period?: string | undefined;
  startTime?: Date | undefined;
  stageId: string;
  groupId?: string | undefined;
  scheduleEntryId?: string | undefined;
  numberInRound: number;
}

export interface MatDescription {
  id: string;
  name: string;
  periodId: string;
  matOrder: number;
}

export interface FightResult {
  winnerId?: string | undefined;
  resultTypeId?: string | undefined;
  reason?: string | undefined;
}

export interface CompScore {
  placeholderId?: string | undefined;
  competitorId?: string | undefined;
  score?: Score;
  order: number;
  parentReferenceType?: FightReferenceType | undefined;
  parentFightId?: string | undefined;
}

export interface Score {
  points: number;
  advantages: number;
  penalties: number;
  pointGroups: PointGroup[];
}

export interface PointGroup {
  id: string;
  name: string;
  priority: number;
  value: number;
}

export interface RegistrationInfo {
  id: string;
  registrationOpen: boolean;
  registrationPeriods: { [key: string]: RegistrationPeriod };
  registrationGroups: { [key: string]: RegistrationGroup };
}

export interface RegistrationInfo_RegistrationPeriodsEntry {
  key: string;
  value?: RegistrationPeriod;
}

export interface RegistrationInfo_RegistrationGroupsEntry {
  key: string;
  value?: RegistrationGroup;
}

export interface RegistrationGroup {
  id: string;
  displayName: string;
  defaultGroup: boolean;
  registrationFee?: RegistrationFee;
  categories: string[];
}

export interface RegistrationFee {
  currency: string;
  amount: number;
  remainder: number;
}

export interface RegistrationPeriod {
  id: string;
  name: string;
  competitionId: string;
  start?: Date;
  end?: Date;
  registrationGroupIds: string[];
}

export interface FullAcademyInfo {
  id: string;
  name: string;
  coaches: string[];
  contactUserId: string;
  contactEmail: string;
  created?: Date;
  updated?: Date;
}

export interface Academy {
  id: string;
  name: string;
}

export interface CategoryDescriptor {
  restrictions: CategoryRestriction[];
  id: string;
  name?: string | undefined;
  registrationOpen: boolean;
}

export interface CategoryRestriction {
  restrictionId: string;
  type: CategoryRestrictionType;
  name: string;
  value?: string | undefined;
  alias?: string | undefined;
  minValue?: string | undefined;
  maxValue?: string | undefined;
  unit?: string | undefined;
  restrictionOrder: number;
}

export interface CategoryState {
  id: string;
  competitionId: string;
  category?: CategoryDescriptor;
  fightsNumber: number;
  numberOfCompetitors: number;
  startDate?: Date | undefined;
}

export interface CompetitionProperties {
  id: string;
  creatorId: string;
  staffIds: string[];
  emailNotificationsEnabled: boolean;
  competitionName: string;
  emailTemplate?: string | undefined;
  promoCodes: PromoCode[];
  startDate?: Date;
  schedulePublished: boolean;
  bracketsPublished: boolean;
  endDate?: Date;
  timeZone: string;
  creationTimestamp?: Date;
  status: CompetitionStatus;
}

export interface PromoCode {
  id: string;
  coefficient: number;
  competitionId: string;
  startAt?: Date;
  expireAt?: Date;
}

export interface CompetitionProcessorNotification {
  started?: CompetitionProcessingStarted | undefined;
  stopped?: CompetitionProcessingStopped | undefined;
}

export interface CompetitionProcessingStarted {
  id: string;
  name: string;
  topic: string;
  creatorId: string;
  createdAt?: Date;
  startsAt?: Date;
  endsAt?: Date;
  timeZone: string;
  status: CompetitionStatus;
}

export interface CompetitionProcessingStopped {
  id: string;
}

export interface CommandProcessorCompetitionState {
  id: string;
  competitors: { [key: string]: Competitor };
  competitionProperties?: CompetitionProperties;
  stages: { [key: string]: StageDescriptor };
  fights: { [key: string]: FightDescription };
  categories: { [key: string]: CategoryDescriptor };
  registrationInfo?: RegistrationInfo | undefined;
  schedule?: Schedule | undefined;
  revision: number;
}

export interface CommandProcessorCompetitionState_CompetitorsEntry {
  key: string;
  value?: Competitor;
}

export interface CommandProcessorCompetitionState_StagesEntry {
  key: string;
  value?: StageDescriptor;
}

export interface CommandProcessorCompetitionState_FightsEntry {
  key: string;
  value?: FightDescription;
}

export interface CommandProcessorCompetitionState_CategoriesEntry {
  key: string;
  value?: CategoryDescriptor;
}

export interface CompetitionState {
  id: string;
  categories: CategoryState[];
  properties?: CompetitionProperties;
  schedule?: Schedule;
}

export interface Schedule {
  id: string;
  periods: Period[];
  mats: MatDescription[];
}

export interface Period {
  id: string;
  name: string;
  scheduleEntries: ScheduleEntry[];
  scheduleRequirements: ScheduleRequirement[];
  startTime?: Date;
  endTime?: Date;
  isActive: boolean;
  timeBetweenFights: number;
  riskPercent: number;
}

export interface ScheduleEntry {
  id: string;
  categoryIds: string[];
  fightScheduleInfo: StartTimeInfo[];
  periodId: string;
  description?: string | undefined;
  name?: string | undefined;
  color?: string | undefined;
  entryType: ScheduleEntryType;
  requirementIds: string[];
  startTime?: Date;
  endTime?: Date | undefined;
  numberOfFights: number;
  duration: number;
  order: number;
}

export interface StartTimeInfo {
  matId: string;
  startTime?: Date;
  someId: string;
}

export interface ScheduleRequirement {
  id: string;
  categoryIds: string[];
  fightIds: string[];
  matId?: string | undefined;
  periodId: string;
  name?: string | undefined;
  color?: string | undefined;
  entryType: ScheduleRequirementType;
  force: boolean;
  startTime?: Date;
  endTime?: Date | undefined;
  durationSeconds?: number | undefined;
  entryOrder: number;
}

export interface Competitor {
  id: string;
  email: string;
  userId: string;
  firstName: string;
  lastName: string;
  birthDate?: Date;
  academy?: Academy;
  categories: string[];
  competitionId: string;
  registrationStatus: CompetitorRegistrationStatus;
  placeholder: boolean;
  promo: string;
}

export interface MatState {
  matDescription?: MatDescription;
  numberOfFights: number;
}

export interface FightStartTimePair {
  fightId: string;
  matId: string;
  numberOnMat: number;
  startTime?: Date;
  periodId: string;
  fightCategoryId: string;
  scheduleEntryId: string;
  invalid: boolean;
}

function createBaseAdjacencyList(): AdjacencyList {
  return { root: 0, vertices: [] };
}

export const AdjacencyList = {
  encode(
    message: AdjacencyList,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.root !== 0) {
      writer.uint32(8).int32(message.root);
    }
    for (const v of message.vertices) {
      AdjacencyListEntry.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AdjacencyList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAdjacencyList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.root = reader.int32();
          break;
        case 2:
          message.vertices.push(
            AdjacencyListEntry.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AdjacencyList {
    return {
      root: isSet(object.root) ? Number(object.root) : 0,
      vertices: Array.isArray(object?.vertices)
        ? object.vertices.map((e: any) => AdjacencyListEntry.fromJSON(e))
        : [],
    };
  },

  toJSON(message: AdjacencyList): unknown {
    const obj: any = {};
    message.root !== undefined && (obj.root = Math.round(message.root));
    if (message.vertices) {
      obj.vertices = message.vertices.map((e) =>
        e ? AdjacencyListEntry.toJSON(e) : undefined
      );
    } else {
      obj.vertices = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AdjacencyList>, I>>(
    object: I
  ): AdjacencyList {
    const message = createBaseAdjacencyList();
    message.root = object.root ?? 0;
    message.vertices =
      object.vertices?.map((e) => AdjacencyListEntry.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAdjacencyListEntry(): AdjacencyListEntry {
  return { id: 0, children: [] };
}

export const AdjacencyListEntry = {
  encode(
    message: AdjacencyListEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    writer.uint32(18).fork();
    for (const v of message.children) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AdjacencyListEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAdjacencyListEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.int32();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.children.push(reader.int32());
            }
          } else {
            message.children.push(reader.int32());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AdjacencyListEntry {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      children: Array.isArray(object?.children)
        ? object.children.map((e: any) => Number(e))
        : [],
    };
  },

  toJSON(message: AdjacencyListEntry): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    if (message.children) {
      obj.children = message.children.map((e) => Math.round(e));
    } else {
      obj.children = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AdjacencyListEntry>, I>>(
    object: I
  ): AdjacencyListEntry {
    const message = createBaseAdjacencyListEntry();
    message.id = object.id ?? 0;
    message.children = object.children?.map((e) => e) || [];
    return message;
  },
};

function createBaseManagedCompetition(): ManagedCompetition {
  return {
    id: '',
    competitionName: undefined,
    eventsTopic: '',
    creatorId: undefined,
    createdAt: undefined,
    startsAt: undefined,
    endsAt: undefined,
    timeZone: '',
    status: CompetitionStatus.COMPETITION_STATUS_UNKNOWN,
  };
}

export const ManagedCompetition = {
  encode(
    message: ManagedCompetition,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.competitionName !== undefined) {
      writer.uint32(18).string(message.competitionName);
    }
    if (message.eventsTopic !== '') {
      writer.uint32(26).string(message.eventsTopic);
    }
    if (message.creatorId !== undefined) {
      writer.uint32(34).string(message.creatorId);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.createdAt),
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.startsAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.startsAt),
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.endsAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.endsAt),
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.timeZone !== '') {
      writer.uint32(66).string(message.timeZone);
    }
    if (message.status !== CompetitionStatus.COMPETITION_STATUS_UNKNOWN) {
      writer.uint32(72).int32(competitionStatusToNumber(message.status));
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ManagedCompetition {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseManagedCompetition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.competitionName = reader.string();
          break;
        case 3:
          message.eventsTopic = reader.string();
          break;
        case 4:
          message.creatorId = reader.string();
          break;
        case 5:
          message.createdAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 6:
          message.startsAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 7:
          message.endsAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 8:
          message.timeZone = reader.string();
          break;
        case 9:
          message.status = competitionStatusFromJSON(reader.int32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ManagedCompetition {
    return {
      id: isSet(object.id) ? String(object.id) : '',
      competitionName: isSet(object.competitionName)
        ? String(object.competitionName)
        : undefined,
      eventsTopic: isSet(object.eventsTopic) ? String(object.eventsTopic) : '',
      creatorId: isSet(object.creatorId) ? String(object.creatorId) : undefined,
      createdAt: isSet(object.createdAt)
        ? fromJsonTimestamp(object.createdAt)
        : undefined,
      startsAt: isSet(object.startsAt)
        ? fromJsonTimestamp(object.startsAt)
        : undefined,
      endsAt: isSet(object.endsAt)
        ? fromJsonTimestamp(object.endsAt)
        : undefined,
      timeZone: isSet(object.timeZone) ? String(object.timeZone) : '',
      status: isSet(object.status)
        ? competitionStatusFromJSON(object.status)
        : CompetitionStatus.COMPETITION_STATUS_UNKNOWN,
    };
  },

  toJSON(message: ManagedCompetition): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.competitionName !== undefined &&
      (obj.competitionName = message.competitionName);
    message.eventsTopic !== undefined &&
      (obj.eventsTopic = message.eventsTopic);
    message.creatorId !== undefined && (obj.creatorId = message.creatorId);
    message.createdAt !== undefined &&
      (obj.createdAt = message.createdAt.toISOString());
    message.startsAt !== undefined &&
      (obj.startsAt = message.startsAt.toISOString());
    message.endsAt !== undefined && (obj.endsAt = message.endsAt.toISOString());
    message.timeZone !== undefined && (obj.timeZone = message.timeZone);
    message.status !== undefined &&
      (obj.status = competitionStatusToJSON(message.status));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ManagedCompetition>, I>>(
    object: I
  ): ManagedCompetition {
    const message = createBaseManagedCompetition();
    message.id = object.id ?? '';
    message.competitionName = object.competitionName ?? undefined;
    message.eventsTopic = object.eventsTopic ?? '';
    message.creatorId = object.creatorId ?? undefined;
    message.createdAt = object.createdAt ?? undefined;
    message.startsAt = object.startsAt ?? undefined;
    message.endsAt = object.endsAt ?? undefined;
    message.timeZone = object.timeZone ?? '';
    message.status =
      object.status ?? CompetitionStatus.COMPETITION_STATUS_UNKNOWN;
    return message;
  },
};

function createBaseStageDescriptor(): StageDescriptor {
  return {
    id: '',
    name: undefined,
    categoryId: '',
    competitionId: '',
    bracketType: BracketType.BRACKET_TYPE_UNKNOWN,
    stageType: StageType.STAGE_TYPE_UNKNOWN,
    stageStatus: StageStatus.STAGE_STATUS_UNKNOWN,
    stageResultDescriptor: undefined,
    inputDescriptor: undefined,
    stageOrder: 0,
    waitForPrevious: false,
    hasThirdPlaceFight: false,
    groupDescriptors: [],
    numberOfFights: 0,
    fightDuration: 0,
  };
}

export const StageDescriptor = {
  encode(
    message: StageDescriptor,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== undefined) {
      writer.uint32(18).string(message.name);
    }
    if (message.categoryId !== '') {
      writer.uint32(26).string(message.categoryId);
    }
    if (message.competitionId !== '') {
      writer.uint32(34).string(message.competitionId);
    }
    if (message.bracketType !== BracketType.BRACKET_TYPE_UNKNOWN) {
      writer.uint32(40).int32(bracketTypeToNumber(message.bracketType));
    }
    if (message.stageType !== StageType.STAGE_TYPE_UNKNOWN) {
      writer.uint32(48).int32(stageTypeToNumber(message.stageType));
    }
    if (message.stageStatus !== StageStatus.STAGE_STATUS_UNKNOWN) {
      writer.uint32(56).int32(stageStatusToNumber(message.stageStatus));
    }
    if (message.stageResultDescriptor !== undefined) {
      StageResultDescriptor.encode(
        message.stageResultDescriptor,
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.inputDescriptor !== undefined) {
      StageInputDescriptor.encode(
        message.inputDescriptor,
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.stageOrder !== 0) {
      writer.uint32(80).int32(message.stageOrder);
    }
    if (message.waitForPrevious === true) {
      writer.uint32(88).bool(message.waitForPrevious);
    }
    if (message.hasThirdPlaceFight === true) {
      writer.uint32(96).bool(message.hasThirdPlaceFight);
    }
    for (const v of message.groupDescriptors) {
      GroupDescriptor.encode(v!, writer.uint32(106).fork()).ldelim();
    }
    if (message.numberOfFights !== 0) {
      writer.uint32(112).int32(message.numberOfFights);
    }
    if (message.fightDuration !== 0) {
      writer.uint32(120).int32(message.fightDuration);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StageDescriptor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStageDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.categoryId = reader.string();
          break;
        case 4:
          message.competitionId = reader.string();
          break;
        case 5:
          message.bracketType = bracketTypeFromJSON(reader.int32());
          break;
        case 6:
          message.stageType = stageTypeFromJSON(reader.int32());
          break;
        case 7:
          message.stageStatus = stageStatusFromJSON(reader.int32());
          break;
        case 8:
          message.stageResultDescriptor = StageResultDescriptor.decode(
            reader,
            reader.uint32()
          );
          break;
        case 9:
          message.inputDescriptor = StageInputDescriptor.decode(
            reader,
            reader.uint32()
          );
          break;
        case 10:
          message.stageOrder = reader.int32();
          break;
        case 11:
          message.waitForPrevious = reader.bool();
          break;
        case 12:
          message.hasThirdPlaceFight = reader.bool();
          break;
        case 13:
          message.groupDescriptors.push(
            GroupDescriptor.decode(reader, reader.uint32())
          );
          break;
        case 14:
          message.numberOfFights = reader.int32();
          break;
        case 15:
          message.fightDuration = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StageDescriptor {
    return {
      id: isSet(object.id) ? String(object.id) : '',
      name: isSet(object.name) ? String(object.name) : undefined,
      categoryId: isSet(object.categoryId) ? String(object.categoryId) : '',
      competitionId: isSet(object.competitionId)
        ? String(object.competitionId)
        : '',
      bracketType: isSet(object.bracketType)
        ? bracketTypeFromJSON(object.bracketType)
        : BracketType.BRACKET_TYPE_UNKNOWN,
      stageType: isSet(object.stageType)
        ? stageTypeFromJSON(object.stageType)
        : StageType.STAGE_TYPE_UNKNOWN,
      stageStatus: isSet(object.stageStatus)
        ? stageStatusFromJSON(object.stageStatus)
        : StageStatus.STAGE_STATUS_UNKNOWN,
      stageResultDescriptor: isSet(object.stageResultDescriptor)
        ? StageResultDescriptor.fromJSON(object.stageResultDescriptor)
        : undefined,
      inputDescriptor: isSet(object.inputDescriptor)
        ? StageInputDescriptor.fromJSON(object.inputDescriptor)
        : undefined,
      stageOrder: isSet(object.stageOrder) ? Number(object.stageOrder) : 0,
      waitForPrevious: isSet(object.waitForPrevious)
        ? Boolean(object.waitForPrevious)
        : false,
      hasThirdPlaceFight: isSet(object.hasThirdPlaceFight)
        ? Boolean(object.hasThirdPlaceFight)
        : false,
      groupDescriptors: Array.isArray(object?.groupDescriptors)
        ? object.groupDescriptors.map((e: any) => GroupDescriptor.fromJSON(e))
        : [],
      numberOfFights: isSet(object.numberOfFights)
        ? Number(object.numberOfFights)
        : 0,
      fightDuration: isSet(object.fightDuration)
        ? Number(object.fightDuration)
        : 0,
    };
  },

  toJSON(message: StageDescriptor): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.categoryId !== undefined && (obj.categoryId = message.categoryId);
    message.competitionId !== undefined &&
      (obj.competitionId = message.competitionId);
    message.bracketType !== undefined &&
      (obj.bracketType = bracketTypeToJSON(message.bracketType));
    message.stageType !== undefined &&
      (obj.stageType = stageTypeToJSON(message.stageType));
    message.stageStatus !== undefined &&
      (obj.stageStatus = stageStatusToJSON(message.stageStatus));
    message.stageResultDescriptor !== undefined &&
      (obj.stageResultDescriptor = message.stageResultDescriptor
        ? StageResultDescriptor.toJSON(message.stageResultDescriptor)
        : undefined);
    message.inputDescriptor !== undefined &&
      (obj.inputDescriptor = message.inputDescriptor
        ? StageInputDescriptor.toJSON(message.inputDescriptor)
        : undefined);
    message.stageOrder !== undefined &&
      (obj.stageOrder = Math.round(message.stageOrder));
    message.waitForPrevious !== undefined &&
      (obj.waitForPrevious = message.waitForPrevious);
    message.hasThirdPlaceFight !== undefined &&
      (obj.hasThirdPlaceFight = message.hasThirdPlaceFight);
    if (message.groupDescriptors) {
      obj.groupDescriptors = message.groupDescriptors.map((e) =>
        e ? GroupDescriptor.toJSON(e) : undefined
      );
    } else {
      obj.groupDescriptors = [];
    }
    message.numberOfFights !== undefined &&
      (obj.numberOfFights = Math.round(message.numberOfFights));
    message.fightDuration !== undefined &&
      (obj.fightDuration = Math.round(message.fightDuration));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StageDescriptor>, I>>(
    object: I
  ): StageDescriptor {
    const message = createBaseStageDescriptor();
    message.id = object.id ?? '';
    message.name = object.name ?? undefined;
    message.categoryId = object.categoryId ?? '';
    message.competitionId = object.competitionId ?? '';
    message.bracketType =
      object.bracketType ?? BracketType.BRACKET_TYPE_UNKNOWN;
    message.stageType = object.stageType ?? StageType.STAGE_TYPE_UNKNOWN;
    message.stageStatus =
      object.stageStatus ?? StageStatus.STAGE_STATUS_UNKNOWN;
    message.stageResultDescriptor =
      object.stageResultDescriptor !== undefined &&
      object.stageResultDescriptor !== null
        ? StageResultDescriptor.fromPartial(object.stageResultDescriptor)
        : undefined;
    message.inputDescriptor =
      object.inputDescriptor !== undefined && object.inputDescriptor !== null
        ? StageInputDescriptor.fromPartial(object.inputDescriptor)
        : undefined;
    message.stageOrder = object.stageOrder ?? 0;
    message.waitForPrevious = object.waitForPrevious ?? false;
    message.hasThirdPlaceFight = object.hasThirdPlaceFight ?? false;
    message.groupDescriptors =
      object.groupDescriptors?.map((e) => GroupDescriptor.fromPartial(e)) || [];
    message.numberOfFights = object.numberOfFights ?? 0;
    message.fightDuration = object.fightDuration ?? 0;
    return message;
  },
};

function createBaseGroupDescriptor(): GroupDescriptor {
  return { id: '', name: '', size: 0 };
}

export const GroupDescriptor = {
  encode(
    message: GroupDescriptor,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== '') {
      writer.uint32(18).string(message.name);
    }
    if (message.size !== 0) {
      writer.uint32(24).int32(message.size);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GroupDescriptor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGroupDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.size = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GroupDescriptor {
    return {
      id: isSet(object.id) ? String(object.id) : '',
      name: isSet(object.name) ? String(object.name) : '',
      size: isSet(object.size) ? Number(object.size) : 0,
    };
  },

  toJSON(message: GroupDescriptor): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.size !== undefined && (obj.size = Math.round(message.size));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GroupDescriptor>, I>>(
    object: I
  ): GroupDescriptor {
    const message = createBaseGroupDescriptor();
    message.id = object.id ?? '';
    message.name = object.name ?? '';
    message.size = object.size ?? 0;
    return message;
  },
};

function createBaseStageInputDescriptor(): StageInputDescriptor {
  return {
    numberOfCompetitors: 0,
    selectors: [],
    distributionType: DistributionType.DISTRIBUTION_TYPE_AUTOMATIC,
  };
}

export const StageInputDescriptor = {
  encode(
    message: StageInputDescriptor,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.numberOfCompetitors !== 0) {
      writer.uint32(8).int32(message.numberOfCompetitors);
    }
    for (const v of message.selectors) {
      CompetitorSelector.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (
      message.distributionType !== DistributionType.DISTRIBUTION_TYPE_AUTOMATIC
    ) {
      writer
        .uint32(24)
        .int32(distributionTypeToNumber(message.distributionType));
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): StageInputDescriptor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStageInputDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.numberOfCompetitors = reader.int32();
          break;
        case 2:
          message.selectors.push(
            CompetitorSelector.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.distributionType = distributionTypeFromJSON(reader.int32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StageInputDescriptor {
    return {
      numberOfCompetitors: isSet(object.numberOfCompetitors)
        ? Number(object.numberOfCompetitors)
        : 0,
      selectors: Array.isArray(object?.selectors)
        ? object.selectors.map((e: any) => CompetitorSelector.fromJSON(e))
        : [],
      distributionType: isSet(object.distributionType)
        ? distributionTypeFromJSON(object.distributionType)
        : DistributionType.DISTRIBUTION_TYPE_AUTOMATIC,
    };
  },

  toJSON(message: StageInputDescriptor): unknown {
    const obj: any = {};
    message.numberOfCompetitors !== undefined &&
      (obj.numberOfCompetitors = Math.round(message.numberOfCompetitors));
    if (message.selectors) {
      obj.selectors = message.selectors.map((e) =>
        e ? CompetitorSelector.toJSON(e) : undefined
      );
    } else {
      obj.selectors = [];
    }
    message.distributionType !== undefined &&
      (obj.distributionType = distributionTypeToJSON(message.distributionType));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StageInputDescriptor>, I>>(
    object: I
  ): StageInputDescriptor {
    const message = createBaseStageInputDescriptor();
    message.numberOfCompetitors = object.numberOfCompetitors ?? 0;
    message.selectors =
      object.selectors?.map((e) => CompetitorSelector.fromPartial(e)) || [];
    message.distributionType =
      object.distributionType ?? DistributionType.DISTRIBUTION_TYPE_AUTOMATIC;
    return message;
  },
};

function createBaseCompetitorSelector(): CompetitorSelector {
  return {
    applyToStageId: '',
    logicalOperator: LogicalOperator.LOGICAL_OPERATOR_AND,
    classifier: SelectorClassifier.SELECTOR_CLASSIFIER_FIRST_N_PLACES,
    operator: OperatorType.OPERATOR_TYPE_EQUALS,
    selectorValue: [],
  };
}

export const CompetitorSelector = {
  encode(
    message: CompetitorSelector,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.applyToStageId !== '') {
      writer.uint32(18).string(message.applyToStageId);
    }
    if (message.logicalOperator !== LogicalOperator.LOGICAL_OPERATOR_AND) {
      writer.uint32(32).int32(logicalOperatorToNumber(message.logicalOperator));
    }
    if (
      message.classifier !==
      SelectorClassifier.SELECTOR_CLASSIFIER_FIRST_N_PLACES
    ) {
      writer.uint32(40).int32(selectorClassifierToNumber(message.classifier));
    }
    if (message.operator !== OperatorType.OPERATOR_TYPE_EQUALS) {
      writer.uint32(48).int32(operatorTypeToNumber(message.operator));
    }
    for (const v of message.selectorValue) {
      writer.uint32(58).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CompetitorSelector {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCompetitorSelector();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.applyToStageId = reader.string();
          break;
        case 4:
          message.logicalOperator = logicalOperatorFromJSON(reader.int32());
          break;
        case 5:
          message.classifier = selectorClassifierFromJSON(reader.int32());
          break;
        case 6:
          message.operator = operatorTypeFromJSON(reader.int32());
          break;
        case 7:
          message.selectorValue.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CompetitorSelector {
    return {
      applyToStageId: isSet(object.applyToStageId)
        ? String(object.applyToStageId)
        : '',
      logicalOperator: isSet(object.logicalOperator)
        ? logicalOperatorFromJSON(object.logicalOperator)
        : LogicalOperator.LOGICAL_OPERATOR_AND,
      classifier: isSet(object.classifier)
        ? selectorClassifierFromJSON(object.classifier)
        : SelectorClassifier.SELECTOR_CLASSIFIER_FIRST_N_PLACES,
      operator: isSet(object.operator)
        ? operatorTypeFromJSON(object.operator)
        : OperatorType.OPERATOR_TYPE_EQUALS,
      selectorValue: Array.isArray(object?.selectorValue)
        ? object.selectorValue.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: CompetitorSelector): unknown {
    const obj: any = {};
    message.applyToStageId !== undefined &&
      (obj.applyToStageId = message.applyToStageId);
    message.logicalOperator !== undefined &&
      (obj.logicalOperator = logicalOperatorToJSON(message.logicalOperator));
    message.classifier !== undefined &&
      (obj.classifier = selectorClassifierToJSON(message.classifier));
    message.operator !== undefined &&
      (obj.operator = operatorTypeToJSON(message.operator));
    if (message.selectorValue) {
      obj.selectorValue = message.selectorValue.map((e) => e);
    } else {
      obj.selectorValue = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CompetitorSelector>, I>>(
    object: I
  ): CompetitorSelector {
    const message = createBaseCompetitorSelector();
    message.applyToStageId = object.applyToStageId ?? '';
    message.logicalOperator =
      object.logicalOperator ?? LogicalOperator.LOGICAL_OPERATOR_AND;
    message.classifier =
      object.classifier ??
      SelectorClassifier.SELECTOR_CLASSIFIER_FIRST_N_PLACES;
    message.operator = object.operator ?? OperatorType.OPERATOR_TYPE_EQUALS;
    message.selectorValue = object.selectorValue?.map((e) => e) || [];
    return message;
  },
};

function createBaseStageResultDescriptor(): StageResultDescriptor {
  return {
    name: undefined,
    forceManualAssignment: false,
    outputSize: undefined,
    fightResultOptions: [],
    competitorResults: [],
    additionalGroupSortingDescriptors: [],
  };
}

export const StageResultDescriptor = {
  encode(
    message: StageResultDescriptor,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== undefined) {
      writer.uint32(10).string(message.name);
    }
    if (message.forceManualAssignment === true) {
      writer.uint32(16).bool(message.forceManualAssignment);
    }
    if (message.outputSize !== undefined) {
      writer.uint32(24).int32(message.outputSize);
    }
    for (const v of message.fightResultOptions) {
      FightResultOption.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.competitorResults) {
      CompetitorStageResult.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.additionalGroupSortingDescriptors) {
      AdditionalGroupSortingDescriptor.encode(
        v!,
        writer.uint32(50).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): StageResultDescriptor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStageResultDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.forceManualAssignment = reader.bool();
          break;
        case 3:
          message.outputSize = reader.int32();
          break;
        case 4:
          message.fightResultOptions.push(
            FightResultOption.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.competitorResults.push(
            CompetitorStageResult.decode(reader, reader.uint32())
          );
          break;
        case 6:
          message.additionalGroupSortingDescriptors.push(
            AdditionalGroupSortingDescriptor.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StageResultDescriptor {
    return {
      name: isSet(object.name) ? String(object.name) : undefined,
      forceManualAssignment: isSet(object.forceManualAssignment)
        ? Boolean(object.forceManualAssignment)
        : false,
      outputSize: isSet(object.outputSize)
        ? Number(object.outputSize)
        : undefined,
      fightResultOptions: Array.isArray(object?.fightResultOptions)
        ? object.fightResultOptions.map((e: any) =>
            FightResultOption.fromJSON(e)
          )
        : [],
      competitorResults: Array.isArray(object?.competitorResults)
        ? object.competitorResults.map((e: any) =>
            CompetitorStageResult.fromJSON(e)
          )
        : [],
      additionalGroupSortingDescriptors: Array.isArray(
        object?.additionalGroupSortingDescriptors
      )
        ? object.additionalGroupSortingDescriptors.map((e: any) =>
            AdditionalGroupSortingDescriptor.fromJSON(e)
          )
        : [],
    };
  },

  toJSON(message: StageResultDescriptor): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.forceManualAssignment !== undefined &&
      (obj.forceManualAssignment = message.forceManualAssignment);
    message.outputSize !== undefined &&
      (obj.outputSize = Math.round(message.outputSize));
    if (message.fightResultOptions) {
      obj.fightResultOptions = message.fightResultOptions.map((e) =>
        e ? FightResultOption.toJSON(e) : undefined
      );
    } else {
      obj.fightResultOptions = [];
    }
    if (message.competitorResults) {
      obj.competitorResults = message.competitorResults.map((e) =>
        e ? CompetitorStageResult.toJSON(e) : undefined
      );
    } else {
      obj.competitorResults = [];
    }
    if (message.additionalGroupSortingDescriptors) {
      obj.additionalGroupSortingDescriptors =
        message.additionalGroupSortingDescriptors.map((e) =>
          e ? AdditionalGroupSortingDescriptor.toJSON(e) : undefined
        );
    } else {
      obj.additionalGroupSortingDescriptors = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StageResultDescriptor>, I>>(
    object: I
  ): StageResultDescriptor {
    const message = createBaseStageResultDescriptor();
    message.name = object.name ?? undefined;
    message.forceManualAssignment = object.forceManualAssignment ?? false;
    message.outputSize = object.outputSize ?? undefined;
    message.fightResultOptions =
      object.fightResultOptions?.map((e) => FightResultOption.fromPartial(e)) ||
      [];
    message.competitorResults =
      object.competitorResults?.map((e) =>
        CompetitorStageResult.fromPartial(e)
      ) || [];
    message.additionalGroupSortingDescriptors =
      object.additionalGroupSortingDescriptors?.map((e) =>
        AdditionalGroupSortingDescriptor.fromPartial(e)
      ) || [];
    return message;
  },
};

function createBaseAdditionalGroupSortingDescriptor(): AdditionalGroupSortingDescriptor {
  return {
    groupSortDirection: GroupSortDirection.GROUP_SORT_DIRECTION_ASC,
    groupSortSpecifier:
      GroupSortSpecifier.GROUP_SORT_SPECIFIER_DIRECT_FIGHT_RESULT,
  };
}

export const AdditionalGroupSortingDescriptor = {
  encode(
    message: AdditionalGroupSortingDescriptor,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (
      message.groupSortDirection !== GroupSortDirection.GROUP_SORT_DIRECTION_ASC
    ) {
      writer
        .uint32(8)
        .int32(groupSortDirectionToNumber(message.groupSortDirection));
    }
    if (
      message.groupSortSpecifier !==
      GroupSortSpecifier.GROUP_SORT_SPECIFIER_DIRECT_FIGHT_RESULT
    ) {
      writer
        .uint32(16)
        .int32(groupSortSpecifierToNumber(message.groupSortSpecifier));
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AdditionalGroupSortingDescriptor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAdditionalGroupSortingDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupSortDirection = groupSortDirectionFromJSON(
            reader.int32()
          );
          break;
        case 2:
          message.groupSortSpecifier = groupSortSpecifierFromJSON(
            reader.int32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AdditionalGroupSortingDescriptor {
    return {
      groupSortDirection: isSet(object.groupSortDirection)
        ? groupSortDirectionFromJSON(object.groupSortDirection)
        : GroupSortDirection.GROUP_SORT_DIRECTION_ASC,
      groupSortSpecifier: isSet(object.groupSortSpecifier)
        ? groupSortSpecifierFromJSON(object.groupSortSpecifier)
        : GroupSortSpecifier.GROUP_SORT_SPECIFIER_DIRECT_FIGHT_RESULT,
    };
  },

  toJSON(message: AdditionalGroupSortingDescriptor): unknown {
    const obj: any = {};
    message.groupSortDirection !== undefined &&
      (obj.groupSortDirection = groupSortDirectionToJSON(
        message.groupSortDirection
      ));
    message.groupSortSpecifier !== undefined &&
      (obj.groupSortSpecifier = groupSortSpecifierToJSON(
        message.groupSortSpecifier
      ));
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<AdditionalGroupSortingDescriptor>, I>
  >(object: I): AdditionalGroupSortingDescriptor {
    const message = createBaseAdditionalGroupSortingDescriptor();
    message.groupSortDirection =
      object.groupSortDirection ?? GroupSortDirection.GROUP_SORT_DIRECTION_ASC;
    message.groupSortSpecifier =
      object.groupSortSpecifier ??
      GroupSortSpecifier.GROUP_SORT_SPECIFIER_DIRECT_FIGHT_RESULT;
    return message;
  },
};

function createBaseCompetitorStageResult(): CompetitorStageResult {
  return {
    competitorId: '',
    points: undefined,
    round: undefined,
    roundType: StageRoundType.STAGE_ROUND_TYPE_UNKNOWN,
    place: undefined,
    stageId: '',
    groupId: undefined,
    conflicting: false,
  };
}

export const CompetitorStageResult = {
  encode(
    message: CompetitorStageResult,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.competitorId !== '') {
      writer.uint32(10).string(message.competitorId);
    }
    if (message.points !== undefined) {
      writer.uint32(16).int32(message.points);
    }
    if (message.round !== undefined) {
      writer.uint32(24).int32(message.round);
    }
    if (message.roundType !== StageRoundType.STAGE_ROUND_TYPE_UNKNOWN) {
      writer.uint32(32).int32(stageRoundTypeToNumber(message.roundType));
    }
    if (message.place !== undefined) {
      writer.uint32(40).int32(message.place);
    }
    if (message.stageId !== '') {
      writer.uint32(50).string(message.stageId);
    }
    if (message.groupId !== undefined) {
      writer.uint32(58).string(message.groupId);
    }
    if (message.conflicting === true) {
      writer.uint32(64).bool(message.conflicting);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CompetitorStageResult {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCompetitorStageResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.competitorId = reader.string();
          break;
        case 2:
          message.points = reader.int32();
          break;
        case 3:
          message.round = reader.int32();
          break;
        case 4:
          message.roundType = stageRoundTypeFromJSON(reader.int32());
          break;
        case 5:
          message.place = reader.int32();
          break;
        case 6:
          message.stageId = reader.string();
          break;
        case 7:
          message.groupId = reader.string();
          break;
        case 8:
          message.conflicting = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CompetitorStageResult {
    return {
      competitorId: isSet(object.competitorId)
        ? String(object.competitorId)
        : '',
      points: isSet(object.points) ? Number(object.points) : undefined,
      round: isSet(object.round) ? Number(object.round) : undefined,
      roundType: isSet(object.roundType)
        ? stageRoundTypeFromJSON(object.roundType)
        : StageRoundType.STAGE_ROUND_TYPE_UNKNOWN,
      place: isSet(object.place) ? Number(object.place) : undefined,
      stageId: isSet(object.stageId) ? String(object.stageId) : '',
      groupId: isSet(object.groupId) ? String(object.groupId) : undefined,
      conflicting: isSet(object.conflicting)
        ? Boolean(object.conflicting)
        : false,
    };
  },

  toJSON(message: CompetitorStageResult): unknown {
    const obj: any = {};
    message.competitorId !== undefined &&
      (obj.competitorId = message.competitorId);
    message.points !== undefined && (obj.points = Math.round(message.points));
    message.round !== undefined && (obj.round = Math.round(message.round));
    message.roundType !== undefined &&
      (obj.roundType = stageRoundTypeToJSON(message.roundType));
    message.place !== undefined && (obj.place = Math.round(message.place));
    message.stageId !== undefined && (obj.stageId = message.stageId);
    message.groupId !== undefined && (obj.groupId = message.groupId);
    message.conflicting !== undefined &&
      (obj.conflicting = message.conflicting);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CompetitorStageResult>, I>>(
    object: I
  ): CompetitorStageResult {
    const message = createBaseCompetitorStageResult();
    message.competitorId = object.competitorId ?? '';
    message.points = object.points ?? undefined;
    message.round = object.round ?? undefined;
    message.roundType =
      object.roundType ?? StageRoundType.STAGE_ROUND_TYPE_UNKNOWN;
    message.place = object.place ?? undefined;
    message.stageId = object.stageId ?? '';
    message.groupId = object.groupId ?? undefined;
    message.conflicting = object.conflicting ?? false;
    return message;
  },
};

function createBaseFightResultOption(): FightResultOption {
  return {
    id: '',
    description: undefined,
    shortName: '',
    draw: false,
    winnerPoints: 0,
    winnerAdditionalPoints: undefined,
    loserPoints: 0,
    loserAdditionalPoints: undefined,
  };
}

export const FightResultOption = {
  encode(
    message: FightResultOption,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.description !== undefined) {
      writer.uint32(18).string(message.description);
    }
    if (message.shortName !== '') {
      writer.uint32(26).string(message.shortName);
    }
    if (message.draw === true) {
      writer.uint32(32).bool(message.draw);
    }
    if (message.winnerPoints !== 0) {
      writer.uint32(40).int32(message.winnerPoints);
    }
    if (message.winnerAdditionalPoints !== undefined) {
      writer.uint32(48).int32(message.winnerAdditionalPoints);
    }
    if (message.loserPoints !== 0) {
      writer.uint32(56).int32(message.loserPoints);
    }
    if (message.loserAdditionalPoints !== undefined) {
      writer.uint32(64).int32(message.loserAdditionalPoints);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FightResultOption {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFightResultOption();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.shortName = reader.string();
          break;
        case 4:
          message.draw = reader.bool();
          break;
        case 5:
          message.winnerPoints = reader.int32();
          break;
        case 6:
          message.winnerAdditionalPoints = reader.int32();
          break;
        case 7:
          message.loserPoints = reader.int32();
          break;
        case 8:
          message.loserAdditionalPoints = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FightResultOption {
    return {
      id: isSet(object.id) ? String(object.id) : '',
      description: isSet(object.description)
        ? String(object.description)
        : undefined,
      shortName: isSet(object.shortName) ? String(object.shortName) : '',
      draw: isSet(object.draw) ? Boolean(object.draw) : false,
      winnerPoints: isSet(object.winnerPoints)
        ? Number(object.winnerPoints)
        : 0,
      winnerAdditionalPoints: isSet(object.winnerAdditionalPoints)
        ? Number(object.winnerAdditionalPoints)
        : undefined,
      loserPoints: isSet(object.loserPoints) ? Number(object.loserPoints) : 0,
      loserAdditionalPoints: isSet(object.loserAdditionalPoints)
        ? Number(object.loserAdditionalPoints)
        : undefined,
    };
  },

  toJSON(message: FightResultOption): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.description !== undefined &&
      (obj.description = message.description);
    message.shortName !== undefined && (obj.shortName = message.shortName);
    message.draw !== undefined && (obj.draw = message.draw);
    message.winnerPoints !== undefined &&
      (obj.winnerPoints = Math.round(message.winnerPoints));
    message.winnerAdditionalPoints !== undefined &&
      (obj.winnerAdditionalPoints = Math.round(message.winnerAdditionalPoints));
    message.loserPoints !== undefined &&
      (obj.loserPoints = Math.round(message.loserPoints));
    message.loserAdditionalPoints !== undefined &&
      (obj.loserAdditionalPoints = Math.round(message.loserAdditionalPoints));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<FightResultOption>, I>>(
    object: I
  ): FightResultOption {
    const message = createBaseFightResultOption();
    message.id = object.id ?? '';
    message.description = object.description ?? undefined;
    message.shortName = object.shortName ?? '';
    message.draw = object.draw ?? false;
    message.winnerPoints = object.winnerPoints ?? 0;
    message.winnerAdditionalPoints = object.winnerAdditionalPoints ?? undefined;
    message.loserPoints = object.loserPoints ?? 0;
    message.loserAdditionalPoints = object.loserAdditionalPoints ?? undefined;
    return message;
  },
};

function createBaseFightDescription(): FightDescription {
  return {
    id: '',
    categoryId: '',
    fightName: undefined,
    winFight: undefined,
    loseFight: undefined,
    scores: [],
    duration: 0,
    round: 0,
    invalid: false,
    roundType: StageRoundType.STAGE_ROUND_TYPE_UNKNOWN,
    status: FightStatus.FIGHT_STATUS_PENDING,
    fightResult: undefined,
    mat: undefined,
    numberOnMat: undefined,
    priority: undefined,
    competitionId: '',
    period: undefined,
    startTime: undefined,
    stageId: '',
    groupId: undefined,
    scheduleEntryId: undefined,
    numberInRound: 0,
  };
}

export const FightDescription = {
  encode(
    message: FightDescription,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.categoryId !== '') {
      writer.uint32(18).string(message.categoryId);
    }
    if (message.fightName !== undefined) {
      writer.uint32(26).string(message.fightName);
    }
    if (message.winFight !== undefined) {
      writer.uint32(34).string(message.winFight);
    }
    if (message.loseFight !== undefined) {
      writer.uint32(42).string(message.loseFight);
    }
    for (const v of message.scores) {
      CompScore.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.duration !== 0) {
      writer.uint32(56).int32(message.duration);
    }
    if (message.round !== 0) {
      writer.uint32(64).int32(message.round);
    }
    if (message.invalid === true) {
      writer.uint32(72).bool(message.invalid);
    }
    if (message.roundType !== StageRoundType.STAGE_ROUND_TYPE_UNKNOWN) {
      writer.uint32(80).int32(stageRoundTypeToNumber(message.roundType));
    }
    if (message.status !== FightStatus.FIGHT_STATUS_PENDING) {
      writer.uint32(88).int32(fightStatusToNumber(message.status));
    }
    if (message.fightResult !== undefined) {
      FightResult.encode(
        message.fightResult,
        writer.uint32(98).fork()
      ).ldelim();
    }
    if (message.mat !== undefined) {
      MatDescription.encode(message.mat, writer.uint32(106).fork()).ldelim();
    }
    if (message.numberOnMat !== undefined) {
      writer.uint32(112).int32(message.numberOnMat);
    }
    if (message.priority !== undefined) {
      writer.uint32(120).int32(message.priority);
    }
    if (message.competitionId !== '') {
      writer.uint32(130).string(message.competitionId);
    }
    if (message.period !== undefined) {
      writer.uint32(138).string(message.period);
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.startTime),
        writer.uint32(146).fork()
      ).ldelim();
    }
    if (message.stageId !== '') {
      writer.uint32(154).string(message.stageId);
    }
    if (message.groupId !== undefined) {
      writer.uint32(162).string(message.groupId);
    }
    if (message.scheduleEntryId !== undefined) {
      writer.uint32(170).string(message.scheduleEntryId);
    }
    if (message.numberInRound !== 0) {
      writer.uint32(176).int32(message.numberInRound);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FightDescription {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFightDescription();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.categoryId = reader.string();
          break;
        case 3:
          message.fightName = reader.string();
          break;
        case 4:
          message.winFight = reader.string();
          break;
        case 5:
          message.loseFight = reader.string();
          break;
        case 6:
          message.scores.push(CompScore.decode(reader, reader.uint32()));
          break;
        case 7:
          message.duration = reader.int32();
          break;
        case 8:
          message.round = reader.int32();
          break;
        case 9:
          message.invalid = reader.bool();
          break;
        case 10:
          message.roundType = stageRoundTypeFromJSON(reader.int32());
          break;
        case 11:
          message.status = fightStatusFromJSON(reader.int32());
          break;
        case 12:
          message.fightResult = FightResult.decode(reader, reader.uint32());
          break;
        case 13:
          message.mat = MatDescription.decode(reader, reader.uint32());
          break;
        case 14:
          message.numberOnMat = reader.int32();
          break;
        case 15:
          message.priority = reader.int32();
          break;
        case 16:
          message.competitionId = reader.string();
          break;
        case 17:
          message.period = reader.string();
          break;
        case 18:
          message.startTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 19:
          message.stageId = reader.string();
          break;
        case 20:
          message.groupId = reader.string();
          break;
        case 21:
          message.scheduleEntryId = reader.string();
          break;
        case 22:
          message.numberInRound = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FightDescription {
    return {
      id: isSet(object.id) ? String(object.id) : '',
      categoryId: isSet(object.categoryId) ? String(object.categoryId) : '',
      fightName: isSet(object.fightName) ? String(object.fightName) : undefined,
      winFight: isSet(object.winFight) ? String(object.winFight) : undefined,
      loseFight: isSet(object.loseFight) ? String(object.loseFight) : undefined,
      scores: Array.isArray(object?.scores)
        ? object.scores.map((e: any) => CompScore.fromJSON(e))
        : [],
      duration: isSet(object.duration) ? Number(object.duration) : 0,
      round: isSet(object.round) ? Number(object.round) : 0,
      invalid: isSet(object.invalid) ? Boolean(object.invalid) : false,
      roundType: isSet(object.roundType)
        ? stageRoundTypeFromJSON(object.roundType)
        : StageRoundType.STAGE_ROUND_TYPE_UNKNOWN,
      status: isSet(object.status)
        ? fightStatusFromJSON(object.status)
        : FightStatus.FIGHT_STATUS_PENDING,
      fightResult: isSet(object.fightResult)
        ? FightResult.fromJSON(object.fightResult)
        : undefined,
      mat: isSet(object.mat) ? MatDescription.fromJSON(object.mat) : undefined,
      numberOnMat: isSet(object.numberOnMat)
        ? Number(object.numberOnMat)
        : undefined,
      priority: isSet(object.priority) ? Number(object.priority) : undefined,
      competitionId: isSet(object.competitionId)
        ? String(object.competitionId)
        : '',
      period: isSet(object.period) ? String(object.period) : undefined,
      startTime: isSet(object.startTime)
        ? fromJsonTimestamp(object.startTime)
        : undefined,
      stageId: isSet(object.stageId) ? String(object.stageId) : '',
      groupId: isSet(object.groupId) ? String(object.groupId) : undefined,
      scheduleEntryId: isSet(object.scheduleEntryId)
        ? String(object.scheduleEntryId)
        : undefined,
      numberInRound: isSet(object.numberInRound)
        ? Number(object.numberInRound)
        : 0,
    };
  },

  toJSON(message: FightDescription): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.categoryId !== undefined && (obj.categoryId = message.categoryId);
    message.fightName !== undefined && (obj.fightName = message.fightName);
    message.winFight !== undefined && (obj.winFight = message.winFight);
    message.loseFight !== undefined && (obj.loseFight = message.loseFight);
    if (message.scores) {
      obj.scores = message.scores.map((e) =>
        e ? CompScore.toJSON(e) : undefined
      );
    } else {
      obj.scores = [];
    }
    message.duration !== undefined &&
      (obj.duration = Math.round(message.duration));
    message.round !== undefined && (obj.round = Math.round(message.round));
    message.invalid !== undefined && (obj.invalid = message.invalid);
    message.roundType !== undefined &&
      (obj.roundType = stageRoundTypeToJSON(message.roundType));
    message.status !== undefined &&
      (obj.status = fightStatusToJSON(message.status));
    message.fightResult !== undefined &&
      (obj.fightResult = message.fightResult
        ? FightResult.toJSON(message.fightResult)
        : undefined);
    message.mat !== undefined &&
      (obj.mat = message.mat ? MatDescription.toJSON(message.mat) : undefined);
    message.numberOnMat !== undefined &&
      (obj.numberOnMat = Math.round(message.numberOnMat));
    message.priority !== undefined &&
      (obj.priority = Math.round(message.priority));
    message.competitionId !== undefined &&
      (obj.competitionId = message.competitionId);
    message.period !== undefined && (obj.period = message.period);
    message.startTime !== undefined &&
      (obj.startTime = message.startTime.toISOString());
    message.stageId !== undefined && (obj.stageId = message.stageId);
    message.groupId !== undefined && (obj.groupId = message.groupId);
    message.scheduleEntryId !== undefined &&
      (obj.scheduleEntryId = message.scheduleEntryId);
    message.numberInRound !== undefined &&
      (obj.numberInRound = Math.round(message.numberInRound));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<FightDescription>, I>>(
    object: I
  ): FightDescription {
    const message = createBaseFightDescription();
    message.id = object.id ?? '';
    message.categoryId = object.categoryId ?? '';
    message.fightName = object.fightName ?? undefined;
    message.winFight = object.winFight ?? undefined;
    message.loseFight = object.loseFight ?? undefined;
    message.scores = object.scores?.map((e) => CompScore.fromPartial(e)) || [];
    message.duration = object.duration ?? 0;
    message.round = object.round ?? 0;
    message.invalid = object.invalid ?? false;
    message.roundType =
      object.roundType ?? StageRoundType.STAGE_ROUND_TYPE_UNKNOWN;
    message.status = object.status ?? FightStatus.FIGHT_STATUS_PENDING;
    message.fightResult =
      object.fightResult !== undefined && object.fightResult !== null
        ? FightResult.fromPartial(object.fightResult)
        : undefined;
    message.mat =
      object.mat !== undefined && object.mat !== null
        ? MatDescription.fromPartial(object.mat)
        : undefined;
    message.numberOnMat = object.numberOnMat ?? undefined;
    message.priority = object.priority ?? undefined;
    message.competitionId = object.competitionId ?? '';
    message.period = object.period ?? undefined;
    message.startTime = object.startTime ?? undefined;
    message.stageId = object.stageId ?? '';
    message.groupId = object.groupId ?? undefined;
    message.scheduleEntryId = object.scheduleEntryId ?? undefined;
    message.numberInRound = object.numberInRound ?? 0;
    return message;
  },
};

function createBaseMatDescription(): MatDescription {
  return { id: '', name: '', periodId: '', matOrder: 0 };
}

export const MatDescription = {
  encode(
    message: MatDescription,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== '') {
      writer.uint32(18).string(message.name);
    }
    if (message.periodId !== '') {
      writer.uint32(26).string(message.periodId);
    }
    if (message.matOrder !== 0) {
      writer.uint32(32).int32(message.matOrder);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MatDescription {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMatDescription();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.periodId = reader.string();
          break;
        case 4:
          message.matOrder = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MatDescription {
    return {
      id: isSet(object.id) ? String(object.id) : '',
      name: isSet(object.name) ? String(object.name) : '',
      periodId: isSet(object.periodId) ? String(object.periodId) : '',
      matOrder: isSet(object.matOrder) ? Number(object.matOrder) : 0,
    };
  },

  toJSON(message: MatDescription): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.periodId !== undefined && (obj.periodId = message.periodId);
    message.matOrder !== undefined &&
      (obj.matOrder = Math.round(message.matOrder));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MatDescription>, I>>(
    object: I
  ): MatDescription {
    const message = createBaseMatDescription();
    message.id = object.id ?? '';
    message.name = object.name ?? '';
    message.periodId = object.periodId ?? '';
    message.matOrder = object.matOrder ?? 0;
    return message;
  },
};

function createBaseFightResult(): FightResult {
  return { winnerId: undefined, resultTypeId: undefined, reason: undefined };
}

export const FightResult = {
  encode(
    message: FightResult,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.winnerId !== undefined) {
      writer.uint32(10).string(message.winnerId);
    }
    if (message.resultTypeId !== undefined) {
      writer.uint32(18).string(message.resultTypeId);
    }
    if (message.reason !== undefined) {
      writer.uint32(26).string(message.reason);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FightResult {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFightResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.winnerId = reader.string();
          break;
        case 2:
          message.resultTypeId = reader.string();
          break;
        case 3:
          message.reason = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FightResult {
    return {
      winnerId: isSet(object.winnerId) ? String(object.winnerId) : undefined,
      resultTypeId: isSet(object.resultTypeId)
        ? String(object.resultTypeId)
        : undefined,
      reason: isSet(object.reason) ? String(object.reason) : undefined,
    };
  },

  toJSON(message: FightResult): unknown {
    const obj: any = {};
    message.winnerId !== undefined && (obj.winnerId = message.winnerId);
    message.resultTypeId !== undefined &&
      (obj.resultTypeId = message.resultTypeId);
    message.reason !== undefined && (obj.reason = message.reason);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<FightResult>, I>>(
    object: I
  ): FightResult {
    const message = createBaseFightResult();
    message.winnerId = object.winnerId ?? undefined;
    message.resultTypeId = object.resultTypeId ?? undefined;
    message.reason = object.reason ?? undefined;
    return message;
  },
};

function createBaseCompScore(): CompScore {
  return {
    placeholderId: undefined,
    competitorId: undefined,
    score: undefined,
    order: 0,
    parentReferenceType: undefined,
    parentFightId: undefined,
  };
}

export const CompScore = {
  encode(
    message: CompScore,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.placeholderId !== undefined) {
      writer.uint32(10).string(message.placeholderId);
    }
    if (message.competitorId !== undefined) {
      writer.uint32(18).string(message.competitorId);
    }
    if (message.score !== undefined) {
      Score.encode(message.score, writer.uint32(26).fork()).ldelim();
    }
    if (message.order !== 0) {
      writer.uint32(32).int32(message.order);
    }
    if (message.parentReferenceType !== undefined) {
      writer
        .uint32(40)
        .int32(fightReferenceTypeToNumber(message.parentReferenceType));
    }
    if (message.parentFightId !== undefined) {
      writer.uint32(50).string(message.parentFightId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CompScore {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCompScore();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.placeholderId = reader.string();
          break;
        case 2:
          message.competitorId = reader.string();
          break;
        case 3:
          message.score = Score.decode(reader, reader.uint32());
          break;
        case 4:
          message.order = reader.int32();
          break;
        case 5:
          message.parentReferenceType = fightReferenceTypeFromJSON(
            reader.int32()
          );
          break;
        case 6:
          message.parentFightId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CompScore {
    return {
      placeholderId: isSet(object.placeholderId)
        ? String(object.placeholderId)
        : undefined,
      competitorId: isSet(object.competitorId)
        ? String(object.competitorId)
        : undefined,
      score: isSet(object.score) ? Score.fromJSON(object.score) : undefined,
      order: isSet(object.order) ? Number(object.order) : 0,
      parentReferenceType: isSet(object.parentReferenceType)
        ? fightReferenceTypeFromJSON(object.parentReferenceType)
        : undefined,
      parentFightId: isSet(object.parentFightId)
        ? String(object.parentFightId)
        : undefined,
    };
  },

  toJSON(message: CompScore): unknown {
    const obj: any = {};
    message.placeholderId !== undefined &&
      (obj.placeholderId = message.placeholderId);
    message.competitorId !== undefined &&
      (obj.competitorId = message.competitorId);
    message.score !== undefined &&
      (obj.score = message.score ? Score.toJSON(message.score) : undefined);
    message.order !== undefined && (obj.order = Math.round(message.order));
    message.parentReferenceType !== undefined &&
      (obj.parentReferenceType =
        message.parentReferenceType !== undefined
          ? fightReferenceTypeToJSON(message.parentReferenceType)
          : undefined);
    message.parentFightId !== undefined &&
      (obj.parentFightId = message.parentFightId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CompScore>, I>>(
    object: I
  ): CompScore {
    const message = createBaseCompScore();
    message.placeholderId = object.placeholderId ?? undefined;
    message.competitorId = object.competitorId ?? undefined;
    message.score =
      object.score !== undefined && object.score !== null
        ? Score.fromPartial(object.score)
        : undefined;
    message.order = object.order ?? 0;
    message.parentReferenceType = object.parentReferenceType ?? undefined;
    message.parentFightId = object.parentFightId ?? undefined;
    return message;
  },
};

function createBaseScore(): Score {
  return { points: 0, advantages: 0, penalties: 0, pointGroups: [] };
}

export const Score = {
  encode(message: Score, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.points !== 0) {
      writer.uint32(8).int32(message.points);
    }
    if (message.advantages !== 0) {
      writer.uint32(16).int32(message.advantages);
    }
    if (message.penalties !== 0) {
      writer.uint32(24).int32(message.penalties);
    }
    for (const v of message.pointGroups) {
      PointGroup.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Score {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseScore();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.points = reader.int32();
          break;
        case 2:
          message.advantages = reader.int32();
          break;
        case 3:
          message.penalties = reader.int32();
          break;
        case 4:
          message.pointGroups.push(PointGroup.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Score {
    return {
      points: isSet(object.points) ? Number(object.points) : 0,
      advantages: isSet(object.advantages) ? Number(object.advantages) : 0,
      penalties: isSet(object.penalties) ? Number(object.penalties) : 0,
      pointGroups: Array.isArray(object?.pointGroups)
        ? object.pointGroups.map((e: any) => PointGroup.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Score): unknown {
    const obj: any = {};
    message.points !== undefined && (obj.points = Math.round(message.points));
    message.advantages !== undefined &&
      (obj.advantages = Math.round(message.advantages));
    message.penalties !== undefined &&
      (obj.penalties = Math.round(message.penalties));
    if (message.pointGroups) {
      obj.pointGroups = message.pointGroups.map((e) =>
        e ? PointGroup.toJSON(e) : undefined
      );
    } else {
      obj.pointGroups = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Score>, I>>(object: I): Score {
    const message = createBaseScore();
    message.points = object.points ?? 0;
    message.advantages = object.advantages ?? 0;
    message.penalties = object.penalties ?? 0;
    message.pointGroups =
      object.pointGroups?.map((e) => PointGroup.fromPartial(e)) || [];
    return message;
  },
};

function createBasePointGroup(): PointGroup {
  return { id: '', name: '', priority: 0, value: 0 };
}

export const PointGroup = {
  encode(
    message: PointGroup,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== '') {
      writer.uint32(18).string(message.name);
    }
    if (message.priority !== 0) {
      writer.uint32(24).int32(message.priority);
    }
    if (message.value !== 0) {
      writer.uint32(32).int32(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PointGroup {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePointGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.priority = reader.int32();
          break;
        case 4:
          message.value = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PointGroup {
    return {
      id: isSet(object.id) ? String(object.id) : '',
      name: isSet(object.name) ? String(object.name) : '',
      priority: isSet(object.priority) ? Number(object.priority) : 0,
      value: isSet(object.value) ? Number(object.value) : 0,
    };
  },

  toJSON(message: PointGroup): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.priority !== undefined &&
      (obj.priority = Math.round(message.priority));
    message.value !== undefined && (obj.value = Math.round(message.value));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PointGroup>, I>>(
    object: I
  ): PointGroup {
    const message = createBasePointGroup();
    message.id = object.id ?? '';
    message.name = object.name ?? '';
    message.priority = object.priority ?? 0;
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseRegistrationInfo(): RegistrationInfo {
  return {
    id: '',
    registrationOpen: false,
    registrationPeriods: {},
    registrationGroups: {},
  };
}

export const RegistrationInfo = {
  encode(
    message: RegistrationInfo,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.registrationOpen === true) {
      writer.uint32(16).bool(message.registrationOpen);
    }
    Object.entries(message.registrationPeriods).forEach(([key, value]) => {
      RegistrationInfo_RegistrationPeriodsEntry.encode(
        { key: key as any, value },
        writer.uint32(26).fork()
      ).ldelim();
    });
    Object.entries(message.registrationGroups).forEach(([key, value]) => {
      RegistrationInfo_RegistrationGroupsEntry.encode(
        { key: key as any, value },
        writer.uint32(34).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RegistrationInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegistrationInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.registrationOpen = reader.bool();
          break;
        case 3:
          const entry3 = RegistrationInfo_RegistrationPeriodsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry3.value !== undefined) {
            message.registrationPeriods[entry3.key] = entry3.value;
          }
          break;
        case 4:
          const entry4 = RegistrationInfo_RegistrationGroupsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry4.value !== undefined) {
            message.registrationGroups[entry4.key] = entry4.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RegistrationInfo {
    return {
      id: isSet(object.id) ? String(object.id) : '',
      registrationOpen: isSet(object.registrationOpen)
        ? Boolean(object.registrationOpen)
        : false,
      registrationPeriods: isObject(object.registrationPeriods)
        ? Object.entries(object.registrationPeriods).reduce<{
            [key: string]: RegistrationPeriod;
          }>((acc, [key, value]) => {
            acc[key] = RegistrationPeriod.fromJSON(value);
            return acc;
          }, {})
        : {},
      registrationGroups: isObject(object.registrationGroups)
        ? Object.entries(object.registrationGroups).reduce<{
            [key: string]: RegistrationGroup;
          }>((acc, [key, value]) => {
            acc[key] = RegistrationGroup.fromJSON(value);
            return acc;
          }, {})
        : {},
    };
  },

  toJSON(message: RegistrationInfo): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.registrationOpen !== undefined &&
      (obj.registrationOpen = message.registrationOpen);
    obj.registrationPeriods = {};
    if (message.registrationPeriods) {
      Object.entries(message.registrationPeriods).forEach(([k, v]) => {
        obj.registrationPeriods[k] = RegistrationPeriod.toJSON(v);
      });
    }
    obj.registrationGroups = {};
    if (message.registrationGroups) {
      Object.entries(message.registrationGroups).forEach(([k, v]) => {
        obj.registrationGroups[k] = RegistrationGroup.toJSON(v);
      });
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RegistrationInfo>, I>>(
    object: I
  ): RegistrationInfo {
    const message = createBaseRegistrationInfo();
    message.id = object.id ?? '';
    message.registrationOpen = object.registrationOpen ?? false;
    message.registrationPeriods = Object.entries(
      object.registrationPeriods ?? {}
    ).reduce<{ [key: string]: RegistrationPeriod }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = RegistrationPeriod.fromPartial(value);
      }
      return acc;
    }, {});
    message.registrationGroups = Object.entries(
      object.registrationGroups ?? {}
    ).reduce<{ [key: string]: RegistrationGroup }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = RegistrationGroup.fromPartial(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBaseRegistrationInfo_RegistrationPeriodsEntry(): RegistrationInfo_RegistrationPeriodsEntry {
  return { key: '', value: undefined };
}

export const RegistrationInfo_RegistrationPeriodsEntry = {
  encode(
    message: RegistrationInfo_RegistrationPeriodsEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== '') {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      RegistrationPeriod.encode(
        message.value,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RegistrationInfo_RegistrationPeriodsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegistrationInfo_RegistrationPeriodsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = RegistrationPeriod.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RegistrationInfo_RegistrationPeriodsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : '',
      value: isSet(object.value)
        ? RegistrationPeriod.fromJSON(object.value)
        : undefined,
    };
  },

  toJSON(message: RegistrationInfo_RegistrationPeriodsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = message.value
        ? RegistrationPeriod.toJSON(message.value)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<RegistrationInfo_RegistrationPeriodsEntry>, I>
  >(object: I): RegistrationInfo_RegistrationPeriodsEntry {
    const message = createBaseRegistrationInfo_RegistrationPeriodsEntry();
    message.key = object.key ?? '';
    message.value =
      object.value !== undefined && object.value !== null
        ? RegistrationPeriod.fromPartial(object.value)
        : undefined;
    return message;
  },
};

function createBaseRegistrationInfo_RegistrationGroupsEntry(): RegistrationInfo_RegistrationGroupsEntry {
  return { key: '', value: undefined };
}

export const RegistrationInfo_RegistrationGroupsEntry = {
  encode(
    message: RegistrationInfo_RegistrationGroupsEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== '') {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      RegistrationGroup.encode(
        message.value,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RegistrationInfo_RegistrationGroupsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegistrationInfo_RegistrationGroupsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = RegistrationGroup.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RegistrationInfo_RegistrationGroupsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : '',
      value: isSet(object.value)
        ? RegistrationGroup.fromJSON(object.value)
        : undefined,
    };
  },

  toJSON(message: RegistrationInfo_RegistrationGroupsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = message.value
        ? RegistrationGroup.toJSON(message.value)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<RegistrationInfo_RegistrationGroupsEntry>, I>
  >(object: I): RegistrationInfo_RegistrationGroupsEntry {
    const message = createBaseRegistrationInfo_RegistrationGroupsEntry();
    message.key = object.key ?? '';
    message.value =
      object.value !== undefined && object.value !== null
        ? RegistrationGroup.fromPartial(object.value)
        : undefined;
    return message;
  },
};

function createBaseRegistrationGroup(): RegistrationGroup {
  return {
    id: '',
    displayName: '',
    defaultGroup: false,
    registrationFee: undefined,
    categories: [],
  };
}

export const RegistrationGroup = {
  encode(
    message: RegistrationGroup,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.displayName !== '') {
      writer.uint32(18).string(message.displayName);
    }
    if (message.defaultGroup === true) {
      writer.uint32(24).bool(message.defaultGroup);
    }
    if (message.registrationFee !== undefined) {
      RegistrationFee.encode(
        message.registrationFee,
        writer.uint32(34).fork()
      ).ldelim();
    }
    for (const v of message.categories) {
      writer.uint32(42).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RegistrationGroup {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegistrationGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.displayName = reader.string();
          break;
        case 3:
          message.defaultGroup = reader.bool();
          break;
        case 4:
          message.registrationFee = RegistrationFee.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.categories.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RegistrationGroup {
    return {
      id: isSet(object.id) ? String(object.id) : '',
      displayName: isSet(object.displayName) ? String(object.displayName) : '',
      defaultGroup: isSet(object.defaultGroup)
        ? Boolean(object.defaultGroup)
        : false,
      registrationFee: isSet(object.registrationFee)
        ? RegistrationFee.fromJSON(object.registrationFee)
        : undefined,
      categories: Array.isArray(object?.categories)
        ? object.categories.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: RegistrationGroup): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.displayName !== undefined &&
      (obj.displayName = message.displayName);
    message.defaultGroup !== undefined &&
      (obj.defaultGroup = message.defaultGroup);
    message.registrationFee !== undefined &&
      (obj.registrationFee = message.registrationFee
        ? RegistrationFee.toJSON(message.registrationFee)
        : undefined);
    if (message.categories) {
      obj.categories = message.categories.map((e) => e);
    } else {
      obj.categories = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RegistrationGroup>, I>>(
    object: I
  ): RegistrationGroup {
    const message = createBaseRegistrationGroup();
    message.id = object.id ?? '';
    message.displayName = object.displayName ?? '';
    message.defaultGroup = object.defaultGroup ?? false;
    message.registrationFee =
      object.registrationFee !== undefined && object.registrationFee !== null
        ? RegistrationFee.fromPartial(object.registrationFee)
        : undefined;
    message.categories = object.categories?.map((e) => e) || [];
    return message;
  },
};

function createBaseRegistrationFee(): RegistrationFee {
  return { currency: '', amount: 0, remainder: 0 };
}

export const RegistrationFee = {
  encode(
    message: RegistrationFee,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.currency !== '') {
      writer.uint32(10).string(message.currency);
    }
    if (message.amount !== 0) {
      writer.uint32(16).int32(message.amount);
    }
    if (message.remainder !== 0) {
      writer.uint32(24).int32(message.remainder);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RegistrationFee {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegistrationFee();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.currency = reader.string();
          break;
        case 2:
          message.amount = reader.int32();
          break;
        case 3:
          message.remainder = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RegistrationFee {
    return {
      currency: isSet(object.currency) ? String(object.currency) : '',
      amount: isSet(object.amount) ? Number(object.amount) : 0,
      remainder: isSet(object.remainder) ? Number(object.remainder) : 0,
    };
  },

  toJSON(message: RegistrationFee): unknown {
    const obj: any = {};
    message.currency !== undefined && (obj.currency = message.currency);
    message.amount !== undefined && (obj.amount = Math.round(message.amount));
    message.remainder !== undefined &&
      (obj.remainder = Math.round(message.remainder));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RegistrationFee>, I>>(
    object: I
  ): RegistrationFee {
    const message = createBaseRegistrationFee();
    message.currency = object.currency ?? '';
    message.amount = object.amount ?? 0;
    message.remainder = object.remainder ?? 0;
    return message;
  },
};

function createBaseRegistrationPeriod(): RegistrationPeriod {
  return {
    id: '',
    name: '',
    competitionId: '',
    start: undefined,
    end: undefined,
    registrationGroupIds: [],
  };
}

export const RegistrationPeriod = {
  encode(
    message: RegistrationPeriod,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== '') {
      writer.uint32(18).string(message.name);
    }
    if (message.competitionId !== '') {
      writer.uint32(26).string(message.competitionId);
    }
    if (message.start !== undefined) {
      Timestamp.encode(
        toTimestamp(message.start),
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.end !== undefined) {
      Timestamp.encode(
        toTimestamp(message.end),
        writer.uint32(42).fork()
      ).ldelim();
    }
    for (const v of message.registrationGroupIds) {
      writer.uint32(50).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RegistrationPeriod {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegistrationPeriod();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.competitionId = reader.string();
          break;
        case 4:
          message.start = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.end = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 6:
          message.registrationGroupIds.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RegistrationPeriod {
    return {
      id: isSet(object.id) ? String(object.id) : '',
      name: isSet(object.name) ? String(object.name) : '',
      competitionId: isSet(object.competitionId)
        ? String(object.competitionId)
        : '',
      start: isSet(object.start) ? fromJsonTimestamp(object.start) : undefined,
      end: isSet(object.end) ? fromJsonTimestamp(object.end) : undefined,
      registrationGroupIds: Array.isArray(object?.registrationGroupIds)
        ? object.registrationGroupIds.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: RegistrationPeriod): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.competitionId !== undefined &&
      (obj.competitionId = message.competitionId);
    message.start !== undefined && (obj.start = message.start.toISOString());
    message.end !== undefined && (obj.end = message.end.toISOString());
    if (message.registrationGroupIds) {
      obj.registrationGroupIds = message.registrationGroupIds.map((e) => e);
    } else {
      obj.registrationGroupIds = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RegistrationPeriod>, I>>(
    object: I
  ): RegistrationPeriod {
    const message = createBaseRegistrationPeriod();
    message.id = object.id ?? '';
    message.name = object.name ?? '';
    message.competitionId = object.competitionId ?? '';
    message.start = object.start ?? undefined;
    message.end = object.end ?? undefined;
    message.registrationGroupIds =
      object.registrationGroupIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseFullAcademyInfo(): FullAcademyInfo {
  return {
    id: '',
    name: '',
    coaches: [],
    contactUserId: '',
    contactEmail: '',
    created: undefined,
    updated: undefined,
  };
}

export const FullAcademyInfo = {
  encode(
    message: FullAcademyInfo,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== '') {
      writer.uint32(18).string(message.name);
    }
    for (const v of message.coaches) {
      writer.uint32(26).string(v!);
    }
    if (message.contactUserId !== '') {
      writer.uint32(34).string(message.contactUserId);
    }
    if (message.contactEmail !== '') {
      writer.uint32(42).string(message.contactEmail);
    }
    if (message.created !== undefined) {
      Timestamp.encode(
        toTimestamp(message.created),
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.updated !== undefined) {
      Timestamp.encode(
        toTimestamp(message.updated),
        writer.uint32(58).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FullAcademyInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFullAcademyInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.coaches.push(reader.string());
          break;
        case 4:
          message.contactUserId = reader.string();
          break;
        case 5:
          message.contactEmail = reader.string();
          break;
        case 6:
          message.created = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 7:
          message.updated = fromTimestamp(
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

  fromJSON(object: any): FullAcademyInfo {
    return {
      id: isSet(object.id) ? String(object.id) : '',
      name: isSet(object.name) ? String(object.name) : '',
      coaches: Array.isArray(object?.coaches)
        ? object.coaches.map((e: any) => String(e))
        : [],
      contactUserId: isSet(object.contactUserId)
        ? String(object.contactUserId)
        : '',
      contactEmail: isSet(object.contactEmail)
        ? String(object.contactEmail)
        : '',
      created: isSet(object.created)
        ? fromJsonTimestamp(object.created)
        : undefined,
      updated: isSet(object.updated)
        ? fromJsonTimestamp(object.updated)
        : undefined,
    };
  },

  toJSON(message: FullAcademyInfo): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    if (message.coaches) {
      obj.coaches = message.coaches.map((e) => e);
    } else {
      obj.coaches = [];
    }
    message.contactUserId !== undefined &&
      (obj.contactUserId = message.contactUserId);
    message.contactEmail !== undefined &&
      (obj.contactEmail = message.contactEmail);
    message.created !== undefined &&
      (obj.created = message.created.toISOString());
    message.updated !== undefined &&
      (obj.updated = message.updated.toISOString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<FullAcademyInfo>, I>>(
    object: I
  ): FullAcademyInfo {
    const message = createBaseFullAcademyInfo();
    message.id = object.id ?? '';
    message.name = object.name ?? '';
    message.coaches = object.coaches?.map((e) => e) || [];
    message.contactUserId = object.contactUserId ?? '';
    message.contactEmail = object.contactEmail ?? '';
    message.created = object.created ?? undefined;
    message.updated = object.updated ?? undefined;
    return message;
  },
};

function createBaseAcademy(): Academy {
  return { id: '', name: '' };
}

export const Academy = {
  encode(
    message: Academy,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== '') {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Academy {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAcademy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Academy {
    return {
      id: isSet(object.id) ? String(object.id) : '',
      name: isSet(object.name) ? String(object.name) : '',
    };
  },

  toJSON(message: Academy): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Academy>, I>>(object: I): Academy {
    const message = createBaseAcademy();
    message.id = object.id ?? '';
    message.name = object.name ?? '';
    return message;
  },
};

function createBaseCategoryDescriptor(): CategoryDescriptor {
  return { restrictions: [], id: '', name: undefined, registrationOpen: false };
}

export const CategoryDescriptor = {
  encode(
    message: CategoryDescriptor,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.restrictions) {
      CategoryRestriction.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.id !== '') {
      writer.uint32(18).string(message.id);
    }
    if (message.name !== undefined) {
      writer.uint32(26).string(message.name);
    }
    if (message.registrationOpen === true) {
      writer.uint32(32).bool(message.registrationOpen);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CategoryDescriptor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCategoryDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.restrictions.push(
            CategoryRestriction.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.id = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.registrationOpen = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CategoryDescriptor {
    return {
      restrictions: Array.isArray(object?.restrictions)
        ? object.restrictions.map((e: any) => CategoryRestriction.fromJSON(e))
        : [],
      id: isSet(object.id) ? String(object.id) : '',
      name: isSet(object.name) ? String(object.name) : undefined,
      registrationOpen: isSet(object.registrationOpen)
        ? Boolean(object.registrationOpen)
        : false,
    };
  },

  toJSON(message: CategoryDescriptor): unknown {
    const obj: any = {};
    if (message.restrictions) {
      obj.restrictions = message.restrictions.map((e) =>
        e ? CategoryRestriction.toJSON(e) : undefined
      );
    } else {
      obj.restrictions = [];
    }
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.registrationOpen !== undefined &&
      (obj.registrationOpen = message.registrationOpen);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CategoryDescriptor>, I>>(
    object: I
  ): CategoryDescriptor {
    const message = createBaseCategoryDescriptor();
    message.restrictions =
      object.restrictions?.map((e) => CategoryRestriction.fromPartial(e)) || [];
    message.id = object.id ?? '';
    message.name = object.name ?? undefined;
    message.registrationOpen = object.registrationOpen ?? false;
    return message;
  },
};

function createBaseCategoryRestriction(): CategoryRestriction {
  return {
    restrictionId: '',
    type: CategoryRestrictionType.CATEGORY_RESTRICTION_TYPE_VALUE,
    name: '',
    value: undefined,
    alias: undefined,
    minValue: undefined,
    maxValue: undefined,
    unit: undefined,
    restrictionOrder: 0,
  };
}

export const CategoryRestriction = {
  encode(
    message: CategoryRestriction,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.restrictionId !== '') {
      writer.uint32(10).string(message.restrictionId);
    }
    if (
      message.type !== CategoryRestrictionType.CATEGORY_RESTRICTION_TYPE_VALUE
    ) {
      writer.uint32(16).int32(categoryRestrictionTypeToNumber(message.type));
    }
    if (message.name !== '') {
      writer.uint32(26).string(message.name);
    }
    if (message.value !== undefined) {
      writer.uint32(34).string(message.value);
    }
    if (message.alias !== undefined) {
      writer.uint32(42).string(message.alias);
    }
    if (message.minValue !== undefined) {
      writer.uint32(50).string(message.minValue);
    }
    if (message.maxValue !== undefined) {
      writer.uint32(58).string(message.maxValue);
    }
    if (message.unit !== undefined) {
      writer.uint32(66).string(message.unit);
    }
    if (message.restrictionOrder !== 0) {
      writer.uint32(72).int32(message.restrictionOrder);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CategoryRestriction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCategoryRestriction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.restrictionId = reader.string();
          break;
        case 2:
          message.type = categoryRestrictionTypeFromJSON(reader.int32());
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.value = reader.string();
          break;
        case 5:
          message.alias = reader.string();
          break;
        case 6:
          message.minValue = reader.string();
          break;
        case 7:
          message.maxValue = reader.string();
          break;
        case 8:
          message.unit = reader.string();
          break;
        case 9:
          message.restrictionOrder = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CategoryRestriction {
    return {
      restrictionId: isSet(object.restrictionId)
        ? String(object.restrictionId)
        : '',
      type: isSet(object.type)
        ? categoryRestrictionTypeFromJSON(object.type)
        : CategoryRestrictionType.CATEGORY_RESTRICTION_TYPE_VALUE,
      name: isSet(object.name) ? String(object.name) : '',
      value: isSet(object.value) ? String(object.value) : undefined,
      alias: isSet(object.alias) ? String(object.alias) : undefined,
      minValue: isSet(object.minValue) ? String(object.minValue) : undefined,
      maxValue: isSet(object.maxValue) ? String(object.maxValue) : undefined,
      unit: isSet(object.unit) ? String(object.unit) : undefined,
      restrictionOrder: isSet(object.restrictionOrder)
        ? Number(object.restrictionOrder)
        : 0,
    };
  },

  toJSON(message: CategoryRestriction): unknown {
    const obj: any = {};
    message.restrictionId !== undefined &&
      (obj.restrictionId = message.restrictionId);
    message.type !== undefined &&
      (obj.type = categoryRestrictionTypeToJSON(message.type));
    message.name !== undefined && (obj.name = message.name);
    message.value !== undefined && (obj.value = message.value);
    message.alias !== undefined && (obj.alias = message.alias);
    message.minValue !== undefined && (obj.minValue = message.minValue);
    message.maxValue !== undefined && (obj.maxValue = message.maxValue);
    message.unit !== undefined && (obj.unit = message.unit);
    message.restrictionOrder !== undefined &&
      (obj.restrictionOrder = Math.round(message.restrictionOrder));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CategoryRestriction>, I>>(
    object: I
  ): CategoryRestriction {
    const message = createBaseCategoryRestriction();
    message.restrictionId = object.restrictionId ?? '';
    message.type =
      object.type ?? CategoryRestrictionType.CATEGORY_RESTRICTION_TYPE_VALUE;
    message.name = object.name ?? '';
    message.value = object.value ?? undefined;
    message.alias = object.alias ?? undefined;
    message.minValue = object.minValue ?? undefined;
    message.maxValue = object.maxValue ?? undefined;
    message.unit = object.unit ?? undefined;
    message.restrictionOrder = object.restrictionOrder ?? 0;
    return message;
  },
};

function createBaseCategoryState(): CategoryState {
  return {
    id: '',
    competitionId: '',
    category: undefined,
    fightsNumber: 0,
    numberOfCompetitors: 0,
    startDate: undefined,
  };
}

export const CategoryState = {
  encode(
    message: CategoryState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.competitionId !== '') {
      writer.uint32(18).string(message.competitionId);
    }
    if (message.category !== undefined) {
      CategoryDescriptor.encode(
        message.category,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.fightsNumber !== 0) {
      writer.uint32(32).int32(message.fightsNumber);
    }
    if (message.numberOfCompetitors !== 0) {
      writer.uint32(40).int32(message.numberOfCompetitors);
    }
    if (message.startDate !== undefined) {
      Timestamp.encode(
        toTimestamp(message.startDate),
        writer.uint32(66).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CategoryState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCategoryState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.competitionId = reader.string();
          break;
        case 3:
          message.category = CategoryDescriptor.decode(reader, reader.uint32());
          break;
        case 4:
          message.fightsNumber = reader.int32();
          break;
        case 5:
          message.numberOfCompetitors = reader.int32();
          break;
        case 8:
          message.startDate = fromTimestamp(
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

  fromJSON(object: any): CategoryState {
    return {
      id: isSet(object.id) ? String(object.id) : '',
      competitionId: isSet(object.competitionId)
        ? String(object.competitionId)
        : '',
      category: isSet(object.category)
        ? CategoryDescriptor.fromJSON(object.category)
        : undefined,
      fightsNumber: isSet(object.fightsNumber)
        ? Number(object.fightsNumber)
        : 0,
      numberOfCompetitors: isSet(object.numberOfCompetitors)
        ? Number(object.numberOfCompetitors)
        : 0,
      startDate: isSet(object.startDate)
        ? fromJsonTimestamp(object.startDate)
        : undefined,
    };
  },

  toJSON(message: CategoryState): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.competitionId !== undefined &&
      (obj.competitionId = message.competitionId);
    message.category !== undefined &&
      (obj.category = message.category
        ? CategoryDescriptor.toJSON(message.category)
        : undefined);
    message.fightsNumber !== undefined &&
      (obj.fightsNumber = Math.round(message.fightsNumber));
    message.numberOfCompetitors !== undefined &&
      (obj.numberOfCompetitors = Math.round(message.numberOfCompetitors));
    message.startDate !== undefined &&
      (obj.startDate = message.startDate.toISOString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CategoryState>, I>>(
    object: I
  ): CategoryState {
    const message = createBaseCategoryState();
    message.id = object.id ?? '';
    message.competitionId = object.competitionId ?? '';
    message.category =
      object.category !== undefined && object.category !== null
        ? CategoryDescriptor.fromPartial(object.category)
        : undefined;
    message.fightsNumber = object.fightsNumber ?? 0;
    message.numberOfCompetitors = object.numberOfCompetitors ?? 0;
    message.startDate = object.startDate ?? undefined;
    return message;
  },
};

function createBaseCompetitionProperties(): CompetitionProperties {
  return {
    id: '',
    creatorId: '',
    staffIds: [],
    emailNotificationsEnabled: false,
    competitionName: '',
    emailTemplate: undefined,
    promoCodes: [],
    startDate: undefined,
    schedulePublished: false,
    bracketsPublished: false,
    endDate: undefined,
    timeZone: '',
    creationTimestamp: undefined,
    status: CompetitionStatus.COMPETITION_STATUS_UNKNOWN,
  };
}

export const CompetitionProperties = {
  encode(
    message: CompetitionProperties,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.creatorId !== '') {
      writer.uint32(18).string(message.creatorId);
    }
    for (const v of message.staffIds) {
      writer.uint32(26).string(v!);
    }
    if (message.emailNotificationsEnabled === true) {
      writer.uint32(32).bool(message.emailNotificationsEnabled);
    }
    if (message.competitionName !== '') {
      writer.uint32(42).string(message.competitionName);
    }
    if (message.emailTemplate !== undefined) {
      writer.uint32(50).string(message.emailTemplate);
    }
    for (const v of message.promoCodes) {
      PromoCode.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.startDate !== undefined) {
      Timestamp.encode(
        toTimestamp(message.startDate),
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.schedulePublished === true) {
      writer.uint32(72).bool(message.schedulePublished);
    }
    if (message.bracketsPublished === true) {
      writer.uint32(80).bool(message.bracketsPublished);
    }
    if (message.endDate !== undefined) {
      Timestamp.encode(
        toTimestamp(message.endDate),
        writer.uint32(90).fork()
      ).ldelim();
    }
    if (message.timeZone !== '') {
      writer.uint32(98).string(message.timeZone);
    }
    if (message.creationTimestamp !== undefined) {
      Timestamp.encode(
        toTimestamp(message.creationTimestamp),
        writer.uint32(106).fork()
      ).ldelim();
    }
    if (message.status !== CompetitionStatus.COMPETITION_STATUS_UNKNOWN) {
      writer.uint32(112).int32(competitionStatusToNumber(message.status));
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CompetitionProperties {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCompetitionProperties();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.creatorId = reader.string();
          break;
        case 3:
          message.staffIds.push(reader.string());
          break;
        case 4:
          message.emailNotificationsEnabled = reader.bool();
          break;
        case 5:
          message.competitionName = reader.string();
          break;
        case 6:
          message.emailTemplate = reader.string();
          break;
        case 7:
          message.promoCodes.push(PromoCode.decode(reader, reader.uint32()));
          break;
        case 8:
          message.startDate = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 9:
          message.schedulePublished = reader.bool();
          break;
        case 10:
          message.bracketsPublished = reader.bool();
          break;
        case 11:
          message.endDate = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 12:
          message.timeZone = reader.string();
          break;
        case 13:
          message.creationTimestamp = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 14:
          message.status = competitionStatusFromJSON(reader.int32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CompetitionProperties {
    return {
      id: isSet(object.id) ? String(object.id) : '',
      creatorId: isSet(object.creatorId) ? String(object.creatorId) : '',
      staffIds: Array.isArray(object?.staffIds)
        ? object.staffIds.map((e: any) => String(e))
        : [],
      emailNotificationsEnabled: isSet(object.emailNotificationsEnabled)
        ? Boolean(object.emailNotificationsEnabled)
        : false,
      competitionName: isSet(object.competitionName)
        ? String(object.competitionName)
        : '',
      emailTemplate: isSet(object.emailTemplate)
        ? String(object.emailTemplate)
        : undefined,
      promoCodes: Array.isArray(object?.promoCodes)
        ? object.promoCodes.map((e: any) => PromoCode.fromJSON(e))
        : [],
      startDate: isSet(object.startDate)
        ? fromJsonTimestamp(object.startDate)
        : undefined,
      schedulePublished: isSet(object.schedulePublished)
        ? Boolean(object.schedulePublished)
        : false,
      bracketsPublished: isSet(object.bracketsPublished)
        ? Boolean(object.bracketsPublished)
        : false,
      endDate: isSet(object.endDate)
        ? fromJsonTimestamp(object.endDate)
        : undefined,
      timeZone: isSet(object.timeZone) ? String(object.timeZone) : '',
      creationTimestamp: isSet(object.creationTimestamp)
        ? fromJsonTimestamp(object.creationTimestamp)
        : undefined,
      status: isSet(object.status)
        ? competitionStatusFromJSON(object.status)
        : CompetitionStatus.COMPETITION_STATUS_UNKNOWN,
    };
  },

  toJSON(message: CompetitionProperties): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.creatorId !== undefined && (obj.creatorId = message.creatorId);
    if (message.staffIds) {
      obj.staffIds = message.staffIds.map((e) => e);
    } else {
      obj.staffIds = [];
    }
    message.emailNotificationsEnabled !== undefined &&
      (obj.emailNotificationsEnabled = message.emailNotificationsEnabled);
    message.competitionName !== undefined &&
      (obj.competitionName = message.competitionName);
    message.emailTemplate !== undefined &&
      (obj.emailTemplate = message.emailTemplate);
    if (message.promoCodes) {
      obj.promoCodes = message.promoCodes.map((e) =>
        e ? PromoCode.toJSON(e) : undefined
      );
    } else {
      obj.promoCodes = [];
    }
    message.startDate !== undefined &&
      (obj.startDate = message.startDate.toISOString());
    message.schedulePublished !== undefined &&
      (obj.schedulePublished = message.schedulePublished);
    message.bracketsPublished !== undefined &&
      (obj.bracketsPublished = message.bracketsPublished);
    message.endDate !== undefined &&
      (obj.endDate = message.endDate.toISOString());
    message.timeZone !== undefined && (obj.timeZone = message.timeZone);
    message.creationTimestamp !== undefined &&
      (obj.creationTimestamp = message.creationTimestamp.toISOString());
    message.status !== undefined &&
      (obj.status = competitionStatusToJSON(message.status));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CompetitionProperties>, I>>(
    object: I
  ): CompetitionProperties {
    const message = createBaseCompetitionProperties();
    message.id = object.id ?? '';
    message.creatorId = object.creatorId ?? '';
    message.staffIds = object.staffIds?.map((e) => e) || [];
    message.emailNotificationsEnabled =
      object.emailNotificationsEnabled ?? false;
    message.competitionName = object.competitionName ?? '';
    message.emailTemplate = object.emailTemplate ?? undefined;
    message.promoCodes =
      object.promoCodes?.map((e) => PromoCode.fromPartial(e)) || [];
    message.startDate = object.startDate ?? undefined;
    message.schedulePublished = object.schedulePublished ?? false;
    message.bracketsPublished = object.bracketsPublished ?? false;
    message.endDate = object.endDate ?? undefined;
    message.timeZone = object.timeZone ?? '';
    message.creationTimestamp = object.creationTimestamp ?? undefined;
    message.status =
      object.status ?? CompetitionStatus.COMPETITION_STATUS_UNKNOWN;
    return message;
  },
};

function createBasePromoCode(): PromoCode {
  return {
    id: '',
    coefficient: 0,
    competitionId: '',
    startAt: undefined,
    expireAt: undefined,
  };
}

export const PromoCode = {
  encode(
    message: PromoCode,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.coefficient !== 0) {
      writer.uint32(16).int32(message.coefficient);
    }
    if (message.competitionId !== '') {
      writer.uint32(26).string(message.competitionId);
    }
    if (message.startAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.startAt),
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.expireAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.expireAt),
        writer.uint32(42).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PromoCode {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePromoCode();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.coefficient = reader.int32();
          break;
        case 3:
          message.competitionId = reader.string();
          break;
        case 4:
          message.startAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.expireAt = fromTimestamp(
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

  fromJSON(object: any): PromoCode {
    return {
      id: isSet(object.id) ? String(object.id) : '',
      coefficient: isSet(object.coefficient) ? Number(object.coefficient) : 0,
      competitionId: isSet(object.competitionId)
        ? String(object.competitionId)
        : '',
      startAt: isSet(object.startAt)
        ? fromJsonTimestamp(object.startAt)
        : undefined,
      expireAt: isSet(object.expireAt)
        ? fromJsonTimestamp(object.expireAt)
        : undefined,
    };
  },

  toJSON(message: PromoCode): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.coefficient !== undefined &&
      (obj.coefficient = Math.round(message.coefficient));
    message.competitionId !== undefined &&
      (obj.competitionId = message.competitionId);
    message.startAt !== undefined &&
      (obj.startAt = message.startAt.toISOString());
    message.expireAt !== undefined &&
      (obj.expireAt = message.expireAt.toISOString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PromoCode>, I>>(
    object: I
  ): PromoCode {
    const message = createBasePromoCode();
    message.id = object.id ?? '';
    message.coefficient = object.coefficient ?? 0;
    message.competitionId = object.competitionId ?? '';
    message.startAt = object.startAt ?? undefined;
    message.expireAt = object.expireAt ?? undefined;
    return message;
  },
};

function createBaseCompetitionProcessorNotification(): CompetitionProcessorNotification {
  return { started: undefined, stopped: undefined };
}

export const CompetitionProcessorNotification = {
  encode(
    message: CompetitionProcessorNotification,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.started !== undefined) {
      CompetitionProcessingStarted.encode(
        message.started,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.stopped !== undefined) {
      CompetitionProcessingStopped.encode(
        message.stopped,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CompetitionProcessorNotification {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCompetitionProcessorNotification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.started = CompetitionProcessingStarted.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.stopped = CompetitionProcessingStopped.decode(
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

  fromJSON(object: any): CompetitionProcessorNotification {
    return {
      started: isSet(object.started)
        ? CompetitionProcessingStarted.fromJSON(object.started)
        : undefined,
      stopped: isSet(object.stopped)
        ? CompetitionProcessingStopped.fromJSON(object.stopped)
        : undefined,
    };
  },

  toJSON(message: CompetitionProcessorNotification): unknown {
    const obj: any = {};
    message.started !== undefined &&
      (obj.started = message.started
        ? CompetitionProcessingStarted.toJSON(message.started)
        : undefined);
    message.stopped !== undefined &&
      (obj.stopped = message.stopped
        ? CompetitionProcessingStopped.toJSON(message.stopped)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<CompetitionProcessorNotification>, I>
  >(object: I): CompetitionProcessorNotification {
    const message = createBaseCompetitionProcessorNotification();
    message.started =
      object.started !== undefined && object.started !== null
        ? CompetitionProcessingStarted.fromPartial(object.started)
        : undefined;
    message.stopped =
      object.stopped !== undefined && object.stopped !== null
        ? CompetitionProcessingStopped.fromPartial(object.stopped)
        : undefined;
    return message;
  },
};

function createBaseCompetitionProcessingStarted(): CompetitionProcessingStarted {
  return {
    id: '',
    name: '',
    topic: '',
    creatorId: '',
    createdAt: undefined,
    startsAt: undefined,
    endsAt: undefined,
    timeZone: '',
    status: CompetitionStatus.COMPETITION_STATUS_UNKNOWN,
  };
}

export const CompetitionProcessingStarted = {
  encode(
    message: CompetitionProcessingStarted,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== '') {
      writer.uint32(18).string(message.name);
    }
    if (message.topic !== '') {
      writer.uint32(26).string(message.topic);
    }
    if (message.creatorId !== '') {
      writer.uint32(34).string(message.creatorId);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.createdAt),
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.startsAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.startsAt),
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.endsAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.endsAt),
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.timeZone !== '') {
      writer.uint32(66).string(message.timeZone);
    }
    if (message.status !== CompetitionStatus.COMPETITION_STATUS_UNKNOWN) {
      writer.uint32(72).int32(competitionStatusToNumber(message.status));
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CompetitionProcessingStarted {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCompetitionProcessingStarted();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.topic = reader.string();
          break;
        case 4:
          message.creatorId = reader.string();
          break;
        case 5:
          message.createdAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 6:
          message.startsAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 7:
          message.endsAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 8:
          message.timeZone = reader.string();
          break;
        case 9:
          message.status = competitionStatusFromJSON(reader.int32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CompetitionProcessingStarted {
    return {
      id: isSet(object.id) ? String(object.id) : '',
      name: isSet(object.name) ? String(object.name) : '',
      topic: isSet(object.topic) ? String(object.topic) : '',
      creatorId: isSet(object.creatorId) ? String(object.creatorId) : '',
      createdAt: isSet(object.createdAt)
        ? fromJsonTimestamp(object.createdAt)
        : undefined,
      startsAt: isSet(object.startsAt)
        ? fromJsonTimestamp(object.startsAt)
        : undefined,
      endsAt: isSet(object.endsAt)
        ? fromJsonTimestamp(object.endsAt)
        : undefined,
      timeZone: isSet(object.timeZone) ? String(object.timeZone) : '',
      status: isSet(object.status)
        ? competitionStatusFromJSON(object.status)
        : CompetitionStatus.COMPETITION_STATUS_UNKNOWN,
    };
  },

  toJSON(message: CompetitionProcessingStarted): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.topic !== undefined && (obj.topic = message.topic);
    message.creatorId !== undefined && (obj.creatorId = message.creatorId);
    message.createdAt !== undefined &&
      (obj.createdAt = message.createdAt.toISOString());
    message.startsAt !== undefined &&
      (obj.startsAt = message.startsAt.toISOString());
    message.endsAt !== undefined && (obj.endsAt = message.endsAt.toISOString());
    message.timeZone !== undefined && (obj.timeZone = message.timeZone);
    message.status !== undefined &&
      (obj.status = competitionStatusToJSON(message.status));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CompetitionProcessingStarted>, I>>(
    object: I
  ): CompetitionProcessingStarted {
    const message = createBaseCompetitionProcessingStarted();
    message.id = object.id ?? '';
    message.name = object.name ?? '';
    message.topic = object.topic ?? '';
    message.creatorId = object.creatorId ?? '';
    message.createdAt = object.createdAt ?? undefined;
    message.startsAt = object.startsAt ?? undefined;
    message.endsAt = object.endsAt ?? undefined;
    message.timeZone = object.timeZone ?? '';
    message.status =
      object.status ?? CompetitionStatus.COMPETITION_STATUS_UNKNOWN;
    return message;
  },
};

function createBaseCompetitionProcessingStopped(): CompetitionProcessingStopped {
  return { id: '' };
}

export const CompetitionProcessingStopped = {
  encode(
    message: CompetitionProcessingStopped,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CompetitionProcessingStopped {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCompetitionProcessingStopped();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CompetitionProcessingStopped {
    return {
      id: isSet(object.id) ? String(object.id) : '',
    };
  },

  toJSON(message: CompetitionProcessingStopped): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CompetitionProcessingStopped>, I>>(
    object: I
  ): CompetitionProcessingStopped {
    const message = createBaseCompetitionProcessingStopped();
    message.id = object.id ?? '';
    return message;
  },
};

function createBaseCommandProcessorCompetitionState(): CommandProcessorCompetitionState {
  return {
    id: '',
    competitors: {},
    competitionProperties: undefined,
    stages: {},
    fights: {},
    categories: {},
    registrationInfo: undefined,
    schedule: undefined,
    revision: 0,
  };
}

export const CommandProcessorCompetitionState = {
  encode(
    message: CommandProcessorCompetitionState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    Object.entries(message.competitors).forEach(([key, value]) => {
      CommandProcessorCompetitionState_CompetitorsEntry.encode(
        { key: key as any, value },
        writer.uint32(18).fork()
      ).ldelim();
    });
    if (message.competitionProperties !== undefined) {
      CompetitionProperties.encode(
        message.competitionProperties,
        writer.uint32(26).fork()
      ).ldelim();
    }
    Object.entries(message.stages).forEach(([key, value]) => {
      CommandProcessorCompetitionState_StagesEntry.encode(
        { key: key as any, value },
        writer.uint32(34).fork()
      ).ldelim();
    });
    Object.entries(message.fights).forEach(([key, value]) => {
      CommandProcessorCompetitionState_FightsEntry.encode(
        { key: key as any, value },
        writer.uint32(42).fork()
      ).ldelim();
    });
    Object.entries(message.categories).forEach(([key, value]) => {
      CommandProcessorCompetitionState_CategoriesEntry.encode(
        { key: key as any, value },
        writer.uint32(50).fork()
      ).ldelim();
    });
    if (message.registrationInfo !== undefined) {
      RegistrationInfo.encode(
        message.registrationInfo,
        writer.uint32(802).fork()
      ).ldelim();
    }
    if (message.schedule !== undefined) {
      Schedule.encode(message.schedule, writer.uint32(1602).fork()).ldelim();
    }
    if (message.revision !== 0) {
      writer.uint32(2400).int32(message.revision);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CommandProcessorCompetitionState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommandProcessorCompetitionState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          const entry2 =
            CommandProcessorCompetitionState_CompetitorsEntry.decode(
              reader,
              reader.uint32()
            );
          if (entry2.value !== undefined) {
            message.competitors[entry2.key] = entry2.value;
          }
          break;
        case 3:
          message.competitionProperties = CompetitionProperties.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          const entry4 = CommandProcessorCompetitionState_StagesEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry4.value !== undefined) {
            message.stages[entry4.key] = entry4.value;
          }
          break;
        case 5:
          const entry5 = CommandProcessorCompetitionState_FightsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry5.value !== undefined) {
            message.fights[entry5.key] = entry5.value;
          }
          break;
        case 6:
          const entry6 =
            CommandProcessorCompetitionState_CategoriesEntry.decode(
              reader,
              reader.uint32()
            );
          if (entry6.value !== undefined) {
            message.categories[entry6.key] = entry6.value;
          }
          break;
        case 100:
          message.registrationInfo = RegistrationInfo.decode(
            reader,
            reader.uint32()
          );
          break;
        case 200:
          message.schedule = Schedule.decode(reader, reader.uint32());
          break;
        case 300:
          message.revision = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CommandProcessorCompetitionState {
    return {
      id: isSet(object.id) ? String(object.id) : '',
      competitors: isObject(object.competitors)
        ? Object.entries(object.competitors).reduce<{
            [key: string]: Competitor;
          }>((acc, [key, value]) => {
            acc[key] = Competitor.fromJSON(value);
            return acc;
          }, {})
        : {},
      competitionProperties: isSet(object.competitionProperties)
        ? CompetitionProperties.fromJSON(object.competitionProperties)
        : undefined,
      stages: isObject(object.stages)
        ? Object.entries(object.stages).reduce<{
            [key: string]: StageDescriptor;
          }>((acc, [key, value]) => {
            acc[key] = StageDescriptor.fromJSON(value);
            return acc;
          }, {})
        : {},
      fights: isObject(object.fights)
        ? Object.entries(object.fights).reduce<{
            [key: string]: FightDescription;
          }>((acc, [key, value]) => {
            acc[key] = FightDescription.fromJSON(value);
            return acc;
          }, {})
        : {},
      categories: isObject(object.categories)
        ? Object.entries(object.categories).reduce<{
            [key: string]: CategoryDescriptor;
          }>((acc, [key, value]) => {
            acc[key] = CategoryDescriptor.fromJSON(value);
            return acc;
          }, {})
        : {},
      registrationInfo: isSet(object.registrationInfo)
        ? RegistrationInfo.fromJSON(object.registrationInfo)
        : undefined,
      schedule: isSet(object.schedule)
        ? Schedule.fromJSON(object.schedule)
        : undefined,
      revision: isSet(object.revision) ? Number(object.revision) : 0,
    };
  },

  toJSON(message: CommandProcessorCompetitionState): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    obj.competitors = {};
    if (message.competitors) {
      Object.entries(message.competitors).forEach(([k, v]) => {
        obj.competitors[k] = Competitor.toJSON(v);
      });
    }
    message.competitionProperties !== undefined &&
      (obj.competitionProperties = message.competitionProperties
        ? CompetitionProperties.toJSON(message.competitionProperties)
        : undefined);
    obj.stages = {};
    if (message.stages) {
      Object.entries(message.stages).forEach(([k, v]) => {
        obj.stages[k] = StageDescriptor.toJSON(v);
      });
    }
    obj.fights = {};
    if (message.fights) {
      Object.entries(message.fights).forEach(([k, v]) => {
        obj.fights[k] = FightDescription.toJSON(v);
      });
    }
    obj.categories = {};
    if (message.categories) {
      Object.entries(message.categories).forEach(([k, v]) => {
        obj.categories[k] = CategoryDescriptor.toJSON(v);
      });
    }
    message.registrationInfo !== undefined &&
      (obj.registrationInfo = message.registrationInfo
        ? RegistrationInfo.toJSON(message.registrationInfo)
        : undefined);
    message.schedule !== undefined &&
      (obj.schedule = message.schedule
        ? Schedule.toJSON(message.schedule)
        : undefined);
    message.revision !== undefined &&
      (obj.revision = Math.round(message.revision));
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<CommandProcessorCompetitionState>, I>
  >(object: I): CommandProcessorCompetitionState {
    const message = createBaseCommandProcessorCompetitionState();
    message.id = object.id ?? '';
    message.competitors = Object.entries(object.competitors ?? {}).reduce<{
      [key: string]: Competitor;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = Competitor.fromPartial(value);
      }
      return acc;
    }, {});
    message.competitionProperties =
      object.competitionProperties !== undefined &&
      object.competitionProperties !== null
        ? CompetitionProperties.fromPartial(object.competitionProperties)
        : undefined;
    message.stages = Object.entries(object.stages ?? {}).reduce<{
      [key: string]: StageDescriptor;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = StageDescriptor.fromPartial(value);
      }
      return acc;
    }, {});
    message.fights = Object.entries(object.fights ?? {}).reduce<{
      [key: string]: FightDescription;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = FightDescription.fromPartial(value);
      }
      return acc;
    }, {});
    message.categories = Object.entries(object.categories ?? {}).reduce<{
      [key: string]: CategoryDescriptor;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = CategoryDescriptor.fromPartial(value);
      }
      return acc;
    }, {});
    message.registrationInfo =
      object.registrationInfo !== undefined && object.registrationInfo !== null
        ? RegistrationInfo.fromPartial(object.registrationInfo)
        : undefined;
    message.schedule =
      object.schedule !== undefined && object.schedule !== null
        ? Schedule.fromPartial(object.schedule)
        : undefined;
    message.revision = object.revision ?? 0;
    return message;
  },
};

function createBaseCommandProcessorCompetitionState_CompetitorsEntry(): CommandProcessorCompetitionState_CompetitorsEntry {
  return { key: '', value: undefined };
}

export const CommandProcessorCompetitionState_CompetitorsEntry = {
  encode(
    message: CommandProcessorCompetitionState_CompetitorsEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== '') {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      Competitor.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CommandProcessorCompetitionState_CompetitorsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message =
      createBaseCommandProcessorCompetitionState_CompetitorsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = Competitor.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CommandProcessorCompetitionState_CompetitorsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : '',
      value: isSet(object.value)
        ? Competitor.fromJSON(object.value)
        : undefined,
    };
  },

  toJSON(message: CommandProcessorCompetitionState_CompetitorsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = message.value
        ? Competitor.toJSON(message.value)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<
      DeepPartial<CommandProcessorCompetitionState_CompetitorsEntry>,
      I
    >
  >(object: I): CommandProcessorCompetitionState_CompetitorsEntry {
    const message =
      createBaseCommandProcessorCompetitionState_CompetitorsEntry();
    message.key = object.key ?? '';
    message.value =
      object.value !== undefined && object.value !== null
        ? Competitor.fromPartial(object.value)
        : undefined;
    return message;
  },
};

function createBaseCommandProcessorCompetitionState_StagesEntry(): CommandProcessorCompetitionState_StagesEntry {
  return { key: '', value: undefined };
}

export const CommandProcessorCompetitionState_StagesEntry = {
  encode(
    message: CommandProcessorCompetitionState_StagesEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== '') {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      StageDescriptor.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CommandProcessorCompetitionState_StagesEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommandProcessorCompetitionState_StagesEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = StageDescriptor.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CommandProcessorCompetitionState_StagesEntry {
    return {
      key: isSet(object.key) ? String(object.key) : '',
      value: isSet(object.value)
        ? StageDescriptor.fromJSON(object.value)
        : undefined,
    };
  },

  toJSON(message: CommandProcessorCompetitionState_StagesEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = message.value
        ? StageDescriptor.toJSON(message.value)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<
      DeepPartial<CommandProcessorCompetitionState_StagesEntry>,
      I
    >
  >(object: I): CommandProcessorCompetitionState_StagesEntry {
    const message = createBaseCommandProcessorCompetitionState_StagesEntry();
    message.key = object.key ?? '';
    message.value =
      object.value !== undefined && object.value !== null
        ? StageDescriptor.fromPartial(object.value)
        : undefined;
    return message;
  },
};

function createBaseCommandProcessorCompetitionState_FightsEntry(): CommandProcessorCompetitionState_FightsEntry {
  return { key: '', value: undefined };
}

export const CommandProcessorCompetitionState_FightsEntry = {
  encode(
    message: CommandProcessorCompetitionState_FightsEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== '') {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      FightDescription.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CommandProcessorCompetitionState_FightsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommandProcessorCompetitionState_FightsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = FightDescription.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CommandProcessorCompetitionState_FightsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : '',
      value: isSet(object.value)
        ? FightDescription.fromJSON(object.value)
        : undefined,
    };
  },

  toJSON(message: CommandProcessorCompetitionState_FightsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = message.value
        ? FightDescription.toJSON(message.value)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<
      DeepPartial<CommandProcessorCompetitionState_FightsEntry>,
      I
    >
  >(object: I): CommandProcessorCompetitionState_FightsEntry {
    const message = createBaseCommandProcessorCompetitionState_FightsEntry();
    message.key = object.key ?? '';
    message.value =
      object.value !== undefined && object.value !== null
        ? FightDescription.fromPartial(object.value)
        : undefined;
    return message;
  },
};

function createBaseCommandProcessorCompetitionState_CategoriesEntry(): CommandProcessorCompetitionState_CategoriesEntry {
  return { key: '', value: undefined };
}

export const CommandProcessorCompetitionState_CategoriesEntry = {
  encode(
    message: CommandProcessorCompetitionState_CategoriesEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== '') {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      CategoryDescriptor.encode(
        message.value,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CommandProcessorCompetitionState_CategoriesEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message =
      createBaseCommandProcessorCompetitionState_CategoriesEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = CategoryDescriptor.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CommandProcessorCompetitionState_CategoriesEntry {
    return {
      key: isSet(object.key) ? String(object.key) : '',
      value: isSet(object.value)
        ? CategoryDescriptor.fromJSON(object.value)
        : undefined,
    };
  },

  toJSON(message: CommandProcessorCompetitionState_CategoriesEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = message.value
        ? CategoryDescriptor.toJSON(message.value)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<
      DeepPartial<CommandProcessorCompetitionState_CategoriesEntry>,
      I
    >
  >(object: I): CommandProcessorCompetitionState_CategoriesEntry {
    const message =
      createBaseCommandProcessorCompetitionState_CategoriesEntry();
    message.key = object.key ?? '';
    message.value =
      object.value !== undefined && object.value !== null
        ? CategoryDescriptor.fromPartial(object.value)
        : undefined;
    return message;
  },
};

function createBaseCompetitionState(): CompetitionState {
  return { id: '', categories: [], properties: undefined, schedule: undefined };
}

export const CompetitionState = {
  encode(
    message: CompetitionState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    for (const v of message.categories) {
      CategoryState.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.properties !== undefined) {
      CompetitionProperties.encode(
        message.properties,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.schedule !== undefined) {
      Schedule.encode(message.schedule, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CompetitionState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCompetitionState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.categories.push(
            CategoryState.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.properties = CompetitionProperties.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.schedule = Schedule.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CompetitionState {
    return {
      id: isSet(object.id) ? String(object.id) : '',
      categories: Array.isArray(object?.categories)
        ? object.categories.map((e: any) => CategoryState.fromJSON(e))
        : [],
      properties: isSet(object.properties)
        ? CompetitionProperties.fromJSON(object.properties)
        : undefined,
      schedule: isSet(object.schedule)
        ? Schedule.fromJSON(object.schedule)
        : undefined,
    };
  },

  toJSON(message: CompetitionState): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    if (message.categories) {
      obj.categories = message.categories.map((e) =>
        e ? CategoryState.toJSON(e) : undefined
      );
    } else {
      obj.categories = [];
    }
    message.properties !== undefined &&
      (obj.properties = message.properties
        ? CompetitionProperties.toJSON(message.properties)
        : undefined);
    message.schedule !== undefined &&
      (obj.schedule = message.schedule
        ? Schedule.toJSON(message.schedule)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CompetitionState>, I>>(
    object: I
  ): CompetitionState {
    const message = createBaseCompetitionState();
    message.id = object.id ?? '';
    message.categories =
      object.categories?.map((e) => CategoryState.fromPartial(e)) || [];
    message.properties =
      object.properties !== undefined && object.properties !== null
        ? CompetitionProperties.fromPartial(object.properties)
        : undefined;
    message.schedule =
      object.schedule !== undefined && object.schedule !== null
        ? Schedule.fromPartial(object.schedule)
        : undefined;
    return message;
  },
};

function createBaseSchedule(): Schedule {
  return { id: '', periods: [], mats: [] };
}

export const Schedule = {
  encode(
    message: Schedule,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    for (const v of message.periods) {
      Period.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.mats) {
      MatDescription.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Schedule {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSchedule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.periods.push(Period.decode(reader, reader.uint32()));
          break;
        case 3:
          message.mats.push(MatDescription.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Schedule {
    return {
      id: isSet(object.id) ? String(object.id) : '',
      periods: Array.isArray(object?.periods)
        ? object.periods.map((e: any) => Period.fromJSON(e))
        : [],
      mats: Array.isArray(object?.mats)
        ? object.mats.map((e: any) => MatDescription.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Schedule): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
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

  fromPartial<I extends Exact<DeepPartial<Schedule>, I>>(object: I): Schedule {
    const message = createBaseSchedule();
    message.id = object.id ?? '';
    message.periods = object.periods?.map((e) => Period.fromPartial(e)) || [];
    message.mats = object.mats?.map((e) => MatDescription.fromPartial(e)) || [];
    return message;
  },
};

function createBasePeriod(): Period {
  return {
    id: '',
    name: '',
    scheduleEntries: [],
    scheduleRequirements: [],
    startTime: undefined,
    endTime: undefined,
    isActive: false,
    timeBetweenFights: 0,
    riskPercent: 0,
  };
}

export const Period = {
  encode(
    message: Period,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== '') {
      writer.uint32(18).string(message.name);
    }
    for (const v of message.scheduleEntries) {
      ScheduleEntry.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.scheduleRequirements) {
      ScheduleRequirement.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.startTime),
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.endTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.endTime),
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.isActive === true) {
      writer.uint32(56).bool(message.isActive);
    }
    if (message.timeBetweenFights !== 0) {
      writer.uint32(64).int32(message.timeBetweenFights);
    }
    if (message.riskPercent !== 0) {
      writer.uint32(72).int32(message.riskPercent);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Period {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePeriod();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.scheduleEntries.push(
            ScheduleEntry.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.scheduleRequirements.push(
            ScheduleRequirement.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.startTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 6:
          message.endTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 7:
          message.isActive = reader.bool();
          break;
        case 8:
          message.timeBetweenFights = reader.int32();
          break;
        case 9:
          message.riskPercent = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Period {
    return {
      id: isSet(object.id) ? String(object.id) : '',
      name: isSet(object.name) ? String(object.name) : '',
      scheduleEntries: Array.isArray(object?.scheduleEntries)
        ? object.scheduleEntries.map((e: any) => ScheduleEntry.fromJSON(e))
        : [],
      scheduleRequirements: Array.isArray(object?.scheduleRequirements)
        ? object.scheduleRequirements.map((e: any) =>
            ScheduleRequirement.fromJSON(e)
          )
        : [],
      startTime: isSet(object.startTime)
        ? fromJsonTimestamp(object.startTime)
        : undefined,
      endTime: isSet(object.endTime)
        ? fromJsonTimestamp(object.endTime)
        : undefined,
      isActive: isSet(object.isActive) ? Boolean(object.isActive) : false,
      timeBetweenFights: isSet(object.timeBetweenFights)
        ? Number(object.timeBetweenFights)
        : 0,
      riskPercent: isSet(object.riskPercent) ? Number(object.riskPercent) : 0,
    };
  },

  toJSON(message: Period): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    if (message.scheduleEntries) {
      obj.scheduleEntries = message.scheduleEntries.map((e) =>
        e ? ScheduleEntry.toJSON(e) : undefined
      );
    } else {
      obj.scheduleEntries = [];
    }
    if (message.scheduleRequirements) {
      obj.scheduleRequirements = message.scheduleRequirements.map((e) =>
        e ? ScheduleRequirement.toJSON(e) : undefined
      );
    } else {
      obj.scheduleRequirements = [];
    }
    message.startTime !== undefined &&
      (obj.startTime = message.startTime.toISOString());
    message.endTime !== undefined &&
      (obj.endTime = message.endTime.toISOString());
    message.isActive !== undefined && (obj.isActive = message.isActive);
    message.timeBetweenFights !== undefined &&
      (obj.timeBetweenFights = Math.round(message.timeBetweenFights));
    message.riskPercent !== undefined &&
      (obj.riskPercent = Math.round(message.riskPercent));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Period>, I>>(object: I): Period {
    const message = createBasePeriod();
    message.id = object.id ?? '';
    message.name = object.name ?? '';
    message.scheduleEntries =
      object.scheduleEntries?.map((e) => ScheduleEntry.fromPartial(e)) || [];
    message.scheduleRequirements =
      object.scheduleRequirements?.map((e) =>
        ScheduleRequirement.fromPartial(e)
      ) || [];
    message.startTime = object.startTime ?? undefined;
    message.endTime = object.endTime ?? undefined;
    message.isActive = object.isActive ?? false;
    message.timeBetweenFights = object.timeBetweenFights ?? 0;
    message.riskPercent = object.riskPercent ?? 0;
    return message;
  },
};

function createBaseScheduleEntry(): ScheduleEntry {
  return {
    id: '',
    categoryIds: [],
    fightScheduleInfo: [],
    periodId: '',
    description: undefined,
    name: undefined,
    color: undefined,
    entryType: ScheduleEntryType.SCHEDULE_ENTRY_TYPE_UNKNOWN,
    requirementIds: [],
    startTime: undefined,
    endTime: undefined,
    numberOfFights: 0,
    duration: 0,
    order: 0,
  };
}

export const ScheduleEntry = {
  encode(
    message: ScheduleEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    for (const v of message.categoryIds) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.fightScheduleInfo) {
      StartTimeInfo.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.periodId !== '') {
      writer.uint32(34).string(message.periodId);
    }
    if (message.description !== undefined) {
      writer.uint32(42).string(message.description);
    }
    if (message.name !== undefined) {
      writer.uint32(50).string(message.name);
    }
    if (message.color !== undefined) {
      writer.uint32(58).string(message.color);
    }
    if (message.entryType !== ScheduleEntryType.SCHEDULE_ENTRY_TYPE_UNKNOWN) {
      writer.uint32(64).int32(scheduleEntryTypeToNumber(message.entryType));
    }
    for (const v of message.requirementIds) {
      writer.uint32(74).string(v!);
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.startTime),
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.endTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.endTime),
        writer.uint32(90).fork()
      ).ldelim();
    }
    if (message.numberOfFights !== 0) {
      writer.uint32(96).int32(message.numberOfFights);
    }
    if (message.duration !== 0) {
      writer.uint32(104).int32(message.duration);
    }
    if (message.order !== 0) {
      writer.uint32(112).int32(message.order);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ScheduleEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseScheduleEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.categoryIds.push(reader.string());
          break;
        case 3:
          message.fightScheduleInfo.push(
            StartTimeInfo.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.periodId = reader.string();
          break;
        case 5:
          message.description = reader.string();
          break;
        case 6:
          message.name = reader.string();
          break;
        case 7:
          message.color = reader.string();
          break;
        case 8:
          message.entryType = scheduleEntryTypeFromJSON(reader.int32());
          break;
        case 9:
          message.requirementIds.push(reader.string());
          break;
        case 10:
          message.startTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 11:
          message.endTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 12:
          message.numberOfFights = reader.int32();
          break;
        case 13:
          message.duration = reader.int32();
          break;
        case 14:
          message.order = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ScheduleEntry {
    return {
      id: isSet(object.id) ? String(object.id) : '',
      categoryIds: Array.isArray(object?.categoryIds)
        ? object.categoryIds.map((e: any) => String(e))
        : [],
      fightScheduleInfo: Array.isArray(object?.fightScheduleInfo)
        ? object.fightScheduleInfo.map((e: any) => StartTimeInfo.fromJSON(e))
        : [],
      periodId: isSet(object.periodId) ? String(object.periodId) : '',
      description: isSet(object.description)
        ? String(object.description)
        : undefined,
      name: isSet(object.name) ? String(object.name) : undefined,
      color: isSet(object.color) ? String(object.color) : undefined,
      entryType: isSet(object.entryType)
        ? scheduleEntryTypeFromJSON(object.entryType)
        : ScheduleEntryType.SCHEDULE_ENTRY_TYPE_UNKNOWN,
      requirementIds: Array.isArray(object?.requirementIds)
        ? object.requirementIds.map((e: any) => String(e))
        : [],
      startTime: isSet(object.startTime)
        ? fromJsonTimestamp(object.startTime)
        : undefined,
      endTime: isSet(object.endTime)
        ? fromJsonTimestamp(object.endTime)
        : undefined,
      numberOfFights: isSet(object.numberOfFights)
        ? Number(object.numberOfFights)
        : 0,
      duration: isSet(object.duration) ? Number(object.duration) : 0,
      order: isSet(object.order) ? Number(object.order) : 0,
    };
  },

  toJSON(message: ScheduleEntry): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    if (message.categoryIds) {
      obj.categoryIds = message.categoryIds.map((e) => e);
    } else {
      obj.categoryIds = [];
    }
    if (message.fightScheduleInfo) {
      obj.fightScheduleInfo = message.fightScheduleInfo.map((e) =>
        e ? StartTimeInfo.toJSON(e) : undefined
      );
    } else {
      obj.fightScheduleInfo = [];
    }
    message.periodId !== undefined && (obj.periodId = message.periodId);
    message.description !== undefined &&
      (obj.description = message.description);
    message.name !== undefined && (obj.name = message.name);
    message.color !== undefined && (obj.color = message.color);
    message.entryType !== undefined &&
      (obj.entryType = scheduleEntryTypeToJSON(message.entryType));
    if (message.requirementIds) {
      obj.requirementIds = message.requirementIds.map((e) => e);
    } else {
      obj.requirementIds = [];
    }
    message.startTime !== undefined &&
      (obj.startTime = message.startTime.toISOString());
    message.endTime !== undefined &&
      (obj.endTime = message.endTime.toISOString());
    message.numberOfFights !== undefined &&
      (obj.numberOfFights = Math.round(message.numberOfFights));
    message.duration !== undefined &&
      (obj.duration = Math.round(message.duration));
    message.order !== undefined && (obj.order = Math.round(message.order));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ScheduleEntry>, I>>(
    object: I
  ): ScheduleEntry {
    const message = createBaseScheduleEntry();
    message.id = object.id ?? '';
    message.categoryIds = object.categoryIds?.map((e) => e) || [];
    message.fightScheduleInfo =
      object.fightScheduleInfo?.map((e) => StartTimeInfo.fromPartial(e)) || [];
    message.periodId = object.periodId ?? '';
    message.description = object.description ?? undefined;
    message.name = object.name ?? undefined;
    message.color = object.color ?? undefined;
    message.entryType =
      object.entryType ?? ScheduleEntryType.SCHEDULE_ENTRY_TYPE_UNKNOWN;
    message.requirementIds = object.requirementIds?.map((e) => e) || [];
    message.startTime = object.startTime ?? undefined;
    message.endTime = object.endTime ?? undefined;
    message.numberOfFights = object.numberOfFights ?? 0;
    message.duration = object.duration ?? 0;
    message.order = object.order ?? 0;
    return message;
  },
};

function createBaseStartTimeInfo(): StartTimeInfo {
  return { matId: '', startTime: undefined, someId: '' };
}

export const StartTimeInfo = {
  encode(
    message: StartTimeInfo,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.matId !== '') {
      writer.uint32(10).string(message.matId);
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.startTime),
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.someId !== '') {
      writer.uint32(26).string(message.someId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StartTimeInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStartTimeInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.matId = reader.string();
          break;
        case 2:
          message.startTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.someId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StartTimeInfo {
    return {
      matId: isSet(object.matId) ? String(object.matId) : '',
      startTime: isSet(object.startTime)
        ? fromJsonTimestamp(object.startTime)
        : undefined,
      someId: isSet(object.someId) ? String(object.someId) : '',
    };
  },

  toJSON(message: StartTimeInfo): unknown {
    const obj: any = {};
    message.matId !== undefined && (obj.matId = message.matId);
    message.startTime !== undefined &&
      (obj.startTime = message.startTime.toISOString());
    message.someId !== undefined && (obj.someId = message.someId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StartTimeInfo>, I>>(
    object: I
  ): StartTimeInfo {
    const message = createBaseStartTimeInfo();
    message.matId = object.matId ?? '';
    message.startTime = object.startTime ?? undefined;
    message.someId = object.someId ?? '';
    return message;
  },
};

function createBaseScheduleRequirement(): ScheduleRequirement {
  return {
    id: '',
    categoryIds: [],
    fightIds: [],
    matId: undefined,
    periodId: '',
    name: undefined,
    color: undefined,
    entryType: ScheduleRequirementType.SCHEDULE_REQUIREMENT_TYPE_UNKNOWN,
    force: false,
    startTime: undefined,
    endTime: undefined,
    durationSeconds: undefined,
    entryOrder: 0,
  };
}

export const ScheduleRequirement = {
  encode(
    message: ScheduleRequirement,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    for (const v of message.categoryIds) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.fightIds) {
      writer.uint32(26).string(v!);
    }
    if (message.matId !== undefined) {
      writer.uint32(34).string(message.matId);
    }
    if (message.periodId !== '') {
      writer.uint32(42).string(message.periodId);
    }
    if (message.name !== undefined) {
      writer.uint32(50).string(message.name);
    }
    if (message.color !== undefined) {
      writer.uint32(58).string(message.color);
    }
    if (
      message.entryType !==
      ScheduleRequirementType.SCHEDULE_REQUIREMENT_TYPE_UNKNOWN
    ) {
      writer
        .uint32(64)
        .int32(scheduleRequirementTypeToNumber(message.entryType));
    }
    if (message.force === true) {
      writer.uint32(72).bool(message.force);
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.startTime),
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.endTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.endTime),
        writer.uint32(90).fork()
      ).ldelim();
    }
    if (message.durationSeconds !== undefined) {
      writer.uint32(96).int32(message.durationSeconds);
    }
    if (message.entryOrder !== 0) {
      writer.uint32(104).int32(message.entryOrder);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ScheduleRequirement {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseScheduleRequirement();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.categoryIds.push(reader.string());
          break;
        case 3:
          message.fightIds.push(reader.string());
          break;
        case 4:
          message.matId = reader.string();
          break;
        case 5:
          message.periodId = reader.string();
          break;
        case 6:
          message.name = reader.string();
          break;
        case 7:
          message.color = reader.string();
          break;
        case 8:
          message.entryType = scheduleRequirementTypeFromJSON(reader.int32());
          break;
        case 9:
          message.force = reader.bool();
          break;
        case 10:
          message.startTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 11:
          message.endTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 12:
          message.durationSeconds = reader.int32();
          break;
        case 13:
          message.entryOrder = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ScheduleRequirement {
    return {
      id: isSet(object.id) ? String(object.id) : '',
      categoryIds: Array.isArray(object?.categoryIds)
        ? object.categoryIds.map((e: any) => String(e))
        : [],
      fightIds: Array.isArray(object?.fightIds)
        ? object.fightIds.map((e: any) => String(e))
        : [],
      matId: isSet(object.matId) ? String(object.matId) : undefined,
      periodId: isSet(object.periodId) ? String(object.periodId) : '',
      name: isSet(object.name) ? String(object.name) : undefined,
      color: isSet(object.color) ? String(object.color) : undefined,
      entryType: isSet(object.entryType)
        ? scheduleRequirementTypeFromJSON(object.entryType)
        : ScheduleRequirementType.SCHEDULE_REQUIREMENT_TYPE_UNKNOWN,
      force: isSet(object.force) ? Boolean(object.force) : false,
      startTime: isSet(object.startTime)
        ? fromJsonTimestamp(object.startTime)
        : undefined,
      endTime: isSet(object.endTime)
        ? fromJsonTimestamp(object.endTime)
        : undefined,
      durationSeconds: isSet(object.durationSeconds)
        ? Number(object.durationSeconds)
        : undefined,
      entryOrder: isSet(object.entryOrder) ? Number(object.entryOrder) : 0,
    };
  },

  toJSON(message: ScheduleRequirement): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    if (message.categoryIds) {
      obj.categoryIds = message.categoryIds.map((e) => e);
    } else {
      obj.categoryIds = [];
    }
    if (message.fightIds) {
      obj.fightIds = message.fightIds.map((e) => e);
    } else {
      obj.fightIds = [];
    }
    message.matId !== undefined && (obj.matId = message.matId);
    message.periodId !== undefined && (obj.periodId = message.periodId);
    message.name !== undefined && (obj.name = message.name);
    message.color !== undefined && (obj.color = message.color);
    message.entryType !== undefined &&
      (obj.entryType = scheduleRequirementTypeToJSON(message.entryType));
    message.force !== undefined && (obj.force = message.force);
    message.startTime !== undefined &&
      (obj.startTime = message.startTime.toISOString());
    message.endTime !== undefined &&
      (obj.endTime = message.endTime.toISOString());
    message.durationSeconds !== undefined &&
      (obj.durationSeconds = Math.round(message.durationSeconds));
    message.entryOrder !== undefined &&
      (obj.entryOrder = Math.round(message.entryOrder));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ScheduleRequirement>, I>>(
    object: I
  ): ScheduleRequirement {
    const message = createBaseScheduleRequirement();
    message.id = object.id ?? '';
    message.categoryIds = object.categoryIds?.map((e) => e) || [];
    message.fightIds = object.fightIds?.map((e) => e) || [];
    message.matId = object.matId ?? undefined;
    message.periodId = object.periodId ?? '';
    message.name = object.name ?? undefined;
    message.color = object.color ?? undefined;
    message.entryType =
      object.entryType ??
      ScheduleRequirementType.SCHEDULE_REQUIREMENT_TYPE_UNKNOWN;
    message.force = object.force ?? false;
    message.startTime = object.startTime ?? undefined;
    message.endTime = object.endTime ?? undefined;
    message.durationSeconds = object.durationSeconds ?? undefined;
    message.entryOrder = object.entryOrder ?? 0;
    return message;
  },
};

function createBaseCompetitor(): Competitor {
  return {
    id: '',
    email: '',
    userId: '',
    firstName: '',
    lastName: '',
    birthDate: undefined,
    academy: undefined,
    categories: [],
    competitionId: '',
    registrationStatus:
      CompetitorRegistrationStatus.COMPETITOR_REGISTRATION_STATUS_UNKNOWN,
    placeholder: false,
    promo: '',
  };
}

export const Competitor = {
  encode(
    message: Competitor,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.email !== '') {
      writer.uint32(18).string(message.email);
    }
    if (message.userId !== '') {
      writer.uint32(26).string(message.userId);
    }
    if (message.firstName !== '') {
      writer.uint32(34).string(message.firstName);
    }
    if (message.lastName !== '') {
      writer.uint32(42).string(message.lastName);
    }
    if (message.birthDate !== undefined) {
      Timestamp.encode(
        toTimestamp(message.birthDate),
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.academy !== undefined) {
      Academy.encode(message.academy, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.categories) {
      writer.uint32(66).string(v!);
    }
    if (message.competitionId !== '') {
      writer.uint32(74).string(message.competitionId);
    }
    if (
      message.registrationStatus !==
      CompetitorRegistrationStatus.COMPETITOR_REGISTRATION_STATUS_UNKNOWN
    ) {
      writer
        .uint32(80)
        .int32(
          competitorRegistrationStatusToNumber(message.registrationStatus)
        );
    }
    if (message.placeholder === true) {
      writer.uint32(88).bool(message.placeholder);
    }
    if (message.promo !== '') {
      writer.uint32(98).string(message.promo);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Competitor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCompetitor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.email = reader.string();
          break;
        case 3:
          message.userId = reader.string();
          break;
        case 4:
          message.firstName = reader.string();
          break;
        case 5:
          message.lastName = reader.string();
          break;
        case 6:
          message.birthDate = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 7:
          message.academy = Academy.decode(reader, reader.uint32());
          break;
        case 8:
          message.categories.push(reader.string());
          break;
        case 9:
          message.competitionId = reader.string();
          break;
        case 10:
          message.registrationStatus = competitorRegistrationStatusFromJSON(
            reader.int32()
          );
          break;
        case 11:
          message.placeholder = reader.bool();
          break;
        case 12:
          message.promo = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Competitor {
    return {
      id: isSet(object.id) ? String(object.id) : '',
      email: isSet(object.email) ? String(object.email) : '',
      userId: isSet(object.userId) ? String(object.userId) : '',
      firstName: isSet(object.firstName) ? String(object.firstName) : '',
      lastName: isSet(object.lastName) ? String(object.lastName) : '',
      birthDate: isSet(object.birthDate)
        ? fromJsonTimestamp(object.birthDate)
        : undefined,
      academy: isSet(object.academy)
        ? Academy.fromJSON(object.academy)
        : undefined,
      categories: Array.isArray(object?.categories)
        ? object.categories.map((e: any) => String(e))
        : [],
      competitionId: isSet(object.competitionId)
        ? String(object.competitionId)
        : '',
      registrationStatus: isSet(object.registrationStatus)
        ? competitorRegistrationStatusFromJSON(object.registrationStatus)
        : CompetitorRegistrationStatus.COMPETITOR_REGISTRATION_STATUS_UNKNOWN,
      placeholder: isSet(object.placeholder)
        ? Boolean(object.placeholder)
        : false,
      promo: isSet(object.promo) ? String(object.promo) : '',
    };
  },

  toJSON(message: Competitor): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.email !== undefined && (obj.email = message.email);
    message.userId !== undefined && (obj.userId = message.userId);
    message.firstName !== undefined && (obj.firstName = message.firstName);
    message.lastName !== undefined && (obj.lastName = message.lastName);
    message.birthDate !== undefined &&
      (obj.birthDate = message.birthDate.toISOString());
    message.academy !== undefined &&
      (obj.academy = message.academy
        ? Academy.toJSON(message.academy)
        : undefined);
    if (message.categories) {
      obj.categories = message.categories.map((e) => e);
    } else {
      obj.categories = [];
    }
    message.competitionId !== undefined &&
      (obj.competitionId = message.competitionId);
    message.registrationStatus !== undefined &&
      (obj.registrationStatus = competitorRegistrationStatusToJSON(
        message.registrationStatus
      ));
    message.placeholder !== undefined &&
      (obj.placeholder = message.placeholder);
    message.promo !== undefined && (obj.promo = message.promo);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Competitor>, I>>(
    object: I
  ): Competitor {
    const message = createBaseCompetitor();
    message.id = object.id ?? '';
    message.email = object.email ?? '';
    message.userId = object.userId ?? '';
    message.firstName = object.firstName ?? '';
    message.lastName = object.lastName ?? '';
    message.birthDate = object.birthDate ?? undefined;
    message.academy =
      object.academy !== undefined && object.academy !== null
        ? Academy.fromPartial(object.academy)
        : undefined;
    message.categories = object.categories?.map((e) => e) || [];
    message.competitionId = object.competitionId ?? '';
    message.registrationStatus =
      object.registrationStatus ??
      CompetitorRegistrationStatus.COMPETITOR_REGISTRATION_STATUS_UNKNOWN;
    message.placeholder = object.placeholder ?? false;
    message.promo = object.promo ?? '';
    return message;
  },
};

function createBaseMatState(): MatState {
  return { matDescription: undefined, numberOfFights: 0 };
}

export const MatState = {
  encode(
    message: MatState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.matDescription !== undefined) {
      MatDescription.encode(
        message.matDescription,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.numberOfFights !== 0) {
      writer.uint32(16).int32(message.numberOfFights);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MatState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMatState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.matDescription = MatDescription.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.numberOfFights = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MatState {
    return {
      matDescription: isSet(object.matDescription)
        ? MatDescription.fromJSON(object.matDescription)
        : undefined,
      numberOfFights: isSet(object.numberOfFights)
        ? Number(object.numberOfFights)
        : 0,
    };
  },

  toJSON(message: MatState): unknown {
    const obj: any = {};
    message.matDescription !== undefined &&
      (obj.matDescription = message.matDescription
        ? MatDescription.toJSON(message.matDescription)
        : undefined);
    message.numberOfFights !== undefined &&
      (obj.numberOfFights = Math.round(message.numberOfFights));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MatState>, I>>(object: I): MatState {
    const message = createBaseMatState();
    message.matDescription =
      object.matDescription !== undefined && object.matDescription !== null
        ? MatDescription.fromPartial(object.matDescription)
        : undefined;
    message.numberOfFights = object.numberOfFights ?? 0;
    return message;
  },
};

function createBaseFightStartTimePair(): FightStartTimePair {
  return {
    fightId: '',
    matId: '',
    numberOnMat: 0,
    startTime: undefined,
    periodId: '',
    fightCategoryId: '',
    scheduleEntryId: '',
    invalid: false,
  };
}

export const FightStartTimePair = {
  encode(
    message: FightStartTimePair,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.fightId !== '') {
      writer.uint32(10).string(message.fightId);
    }
    if (message.matId !== '') {
      writer.uint32(18).string(message.matId);
    }
    if (message.numberOnMat !== 0) {
      writer.uint32(24).int32(message.numberOnMat);
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.startTime),
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.periodId !== '') {
      writer.uint32(42).string(message.periodId);
    }
    if (message.fightCategoryId !== '') {
      writer.uint32(50).string(message.fightCategoryId);
    }
    if (message.scheduleEntryId !== '') {
      writer.uint32(58).string(message.scheduleEntryId);
    }
    if (message.invalid === true) {
      writer.uint32(64).bool(message.invalid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FightStartTimePair {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFightStartTimePair();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fightId = reader.string();
          break;
        case 2:
          message.matId = reader.string();
          break;
        case 3:
          message.numberOnMat = reader.int32();
          break;
        case 4:
          message.startTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.periodId = reader.string();
          break;
        case 6:
          message.fightCategoryId = reader.string();
          break;
        case 7:
          message.scheduleEntryId = reader.string();
          break;
        case 8:
          message.invalid = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FightStartTimePair {
    return {
      fightId: isSet(object.fightId) ? String(object.fightId) : '',
      matId: isSet(object.matId) ? String(object.matId) : '',
      numberOnMat: isSet(object.numberOnMat) ? Number(object.numberOnMat) : 0,
      startTime: isSet(object.startTime)
        ? fromJsonTimestamp(object.startTime)
        : undefined,
      periodId: isSet(object.periodId) ? String(object.periodId) : '',
      fightCategoryId: isSet(object.fightCategoryId)
        ? String(object.fightCategoryId)
        : '',
      scheduleEntryId: isSet(object.scheduleEntryId)
        ? String(object.scheduleEntryId)
        : '',
      invalid: isSet(object.invalid) ? Boolean(object.invalid) : false,
    };
  },

  toJSON(message: FightStartTimePair): unknown {
    const obj: any = {};
    message.fightId !== undefined && (obj.fightId = message.fightId);
    message.matId !== undefined && (obj.matId = message.matId);
    message.numberOnMat !== undefined &&
      (obj.numberOnMat = Math.round(message.numberOnMat));
    message.startTime !== undefined &&
      (obj.startTime = message.startTime.toISOString());
    message.periodId !== undefined && (obj.periodId = message.periodId);
    message.fightCategoryId !== undefined &&
      (obj.fightCategoryId = message.fightCategoryId);
    message.scheduleEntryId !== undefined &&
      (obj.scheduleEntryId = message.scheduleEntryId);
    message.invalid !== undefined && (obj.invalid = message.invalid);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<FightStartTimePair>, I>>(
    object: I
  ): FightStartTimePair {
    const message = createBaseFightStartTimePair();
    message.fightId = object.fightId ?? '';
    message.matId = object.matId ?? '';
    message.numberOnMat = object.numberOnMat ?? 0;
    message.startTime = object.startTime ?? undefined;
    message.periodId = object.periodId ?? '';
    message.fightCategoryId = object.fightCategoryId ?? '';
    message.scheduleEntryId = object.scheduleEntryId ?? '';
    message.invalid = object.invalid ?? false;
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

function isObject(value: any): boolean {
  return typeof value === 'object' && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
