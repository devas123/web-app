/* eslint-disable */
import * as Long from 'long';
import * as _m0 from 'protobufjs/minimal';
import {
  AddAcademyPayload,
  AddCategoryPayload,
  AddCompetitorPayload,
  CategoryRegistrationStatusChangePayload,
  ChangeCompetitorCategoryPayload,
  ChangeFightOrderPayload,
  CompetitorCategoryAddedPayload,
  CreateCompetitionPayload,
  CreateFakeCompetitorsPayload,
  FightEditorApplyChangesPayload,
  GenerateAbsoluteCategoryPayload,
  GenerateBracketsPayload,
  GenerateCategoriesFromRestrictionsPayload,
  GenerateSchedulePayload,
  PropagateCompetitorsPayload,
  RemoveAcademyPayload,
  RemoveCompetitorPayload,
  SetFightResultPayload,
  UpdateAcademyPayload,
  UpdateCompetionPropertiesPayload,
  UpdateCompetitorPayload,
  UpdateRegistrationInfoPayload,
  UpdateStageStatusPayload,
} from './commandpayload';
import {
  BracketsGeneratedPayload,
  CategoryAddedPayload,
  CompetitionCreatedPayload,
  CompetitionInfoPayload,
  CompetitionPropertiesUpdatedPayload,
  CompetitionStatusUpdatedPayload,
  CompetitorAddedPayload,
  CompetitorRemovedPayload,
  CompetitorsPropagatedToStagePayload,
  CompetitorUpdatedPayload,
  FightCompetitorsAssignedPayload,
  FightEditorChangesAppliedPayload,
  FightsAddedToStagePayload,
  FightStartTimeUpdatedPayload,
  MatsUpdatedPayload,
  RegistrationInfoUpdatedPayload,
  ScheduleGeneratedPayload,
  StageResultSetPayload,
  StageStatusUpdatedPayload,
} from './eventpayload';

export interface MessageInfo {
  id?: string | undefined;
  correlationId?: string | undefined;
  competitionId?: string | undefined;
  competitorId?: string | undefined;
  categoryId?: string | undefined;
  matId?: string | undefined;
  addAcademyPayload?: AddAcademyPayload | undefined;
  addCategoryPayload?: AddCategoryPayload | undefined;
  addCompetitorPayload?: AddCompetitorPayload | undefined;
  categoryRegistrationStatusChangePayload?:
    | CategoryRegistrationStatusChangePayload
    | undefined;
  changeCompetitorCategoryPayload?: ChangeCompetitorCategoryPayload | undefined;
  changeFightOrderPayload?: ChangeFightOrderPayload | undefined;
  competitorCategoryAddedPayload?: CompetitorCategoryAddedPayload | undefined;
  createCompetitionPayload?: CreateCompetitionPayload | undefined;
  createFakeCompetitorsPayload?: CreateFakeCompetitorsPayload | undefined;
  fightEditorApplyChangesPayload?: FightEditorApplyChangesPayload | undefined;
  generateAbsoluteCategoryPayload?: GenerateAbsoluteCategoryPayload | undefined;
  generateBracketsPayload?: GenerateBracketsPayload | undefined;
  generateCategoriesFromRestrictionsPayload?:
    | GenerateCategoriesFromRestrictionsPayload
    | undefined;
  generateSchedulePayload?: GenerateSchedulePayload | undefined;
  propagateCompetitorsPayload?: PropagateCompetitorsPayload | undefined;
  removeAcademyPayload?: RemoveAcademyPayload | undefined;
  removeCompetitorPayload?: RemoveCompetitorPayload | undefined;
  setFightResultPayload?: SetFightResultPayload | undefined;
  updateAcademyPayload?: UpdateAcademyPayload | undefined;
  updateCompetionPropertiesPayload?:
    | UpdateCompetionPropertiesPayload
    | undefined;
  updateCompetitorPayload?: UpdateCompetitorPayload | undefined;
  updateRegistrationInfoPayload?: UpdateRegistrationInfoPayload | undefined;
  updateStageStatusPayload?: UpdateStageStatusPayload | undefined;
  bracketsGeneratedPayload?: BracketsGeneratedPayload | undefined;
  categoryAddedPayload?: CategoryAddedPayload | undefined;
  competitionCreatedPayload?: CompetitionCreatedPayload | undefined;
  competitionInfoPayload?: CompetitionInfoPayload | undefined;
  competitionPropertiesUpdatedPayload?:
    | CompetitionPropertiesUpdatedPayload
    | undefined;
  competitionStatusUpdatedPayload?: CompetitionStatusUpdatedPayload | undefined;
  competitorAddedPayload?: CompetitorAddedPayload | undefined;
  competitorRemovedPayload?: CompetitorRemovedPayload | undefined;
  competitorsPropagatedToStagePayload?:
    | CompetitorsPropagatedToStagePayload
    | undefined;
  competitorUpdatedPayload?: CompetitorUpdatedPayload | undefined;
  fightCompetitorsAssignedPayload?: FightCompetitorsAssignedPayload | undefined;
  fightEditorChangesAppliedPayload?:
    | FightEditorChangesAppliedPayload
    | undefined;
  fightsAddedToStagePayload?: FightsAddedToStagePayload | undefined;
  fightStartTimeUpdatedPayload?: FightStartTimeUpdatedPayload | undefined;
  matsUpdatedPayload?: MatsUpdatedPayload | undefined;
  registrationInfoUpdatedPayload?: RegistrationInfoUpdatedPayload | undefined;
  scheduleGeneratedPayload?: ScheduleGeneratedPayload | undefined;
  stageResultSetPayload?: StageResultSetPayload | undefined;
  stageStatusUpdatedPayload?: StageStatusUpdatedPayload | undefined;
}

function createBaseMessageInfo(): MessageInfo {
  return {
    id: undefined,
    correlationId: undefined,
    competitionId: undefined,
    competitorId: undefined,
    categoryId: undefined,
    matId: undefined,
    addAcademyPayload: undefined,
    addCategoryPayload: undefined,
    addCompetitorPayload: undefined,
    categoryRegistrationStatusChangePayload: undefined,
    changeCompetitorCategoryPayload: undefined,
    changeFightOrderPayload: undefined,
    competitorCategoryAddedPayload: undefined,
    createCompetitionPayload: undefined,
    createFakeCompetitorsPayload: undefined,
    fightEditorApplyChangesPayload: undefined,
    generateAbsoluteCategoryPayload: undefined,
    generateBracketsPayload: undefined,
    generateCategoriesFromRestrictionsPayload: undefined,
    generateSchedulePayload: undefined,
    propagateCompetitorsPayload: undefined,
    removeAcademyPayload: undefined,
    removeCompetitorPayload: undefined,
    setFightResultPayload: undefined,
    updateAcademyPayload: undefined,
    updateCompetionPropertiesPayload: undefined,
    updateCompetitorPayload: undefined,
    updateRegistrationInfoPayload: undefined,
    updateStageStatusPayload: undefined,
    bracketsGeneratedPayload: undefined,
    categoryAddedPayload: undefined,
    competitionCreatedPayload: undefined,
    competitionInfoPayload: undefined,
    competitionPropertiesUpdatedPayload: undefined,
    competitionStatusUpdatedPayload: undefined,
    competitorAddedPayload: undefined,
    competitorRemovedPayload: undefined,
    competitorsPropagatedToStagePayload: undefined,
    competitorUpdatedPayload: undefined,
    fightCompetitorsAssignedPayload: undefined,
    fightEditorChangesAppliedPayload: undefined,
    fightsAddedToStagePayload: undefined,
    fightStartTimeUpdatedPayload: undefined,
    matsUpdatedPayload: undefined,
    registrationInfoUpdatedPayload: undefined,
    scheduleGeneratedPayload: undefined,
    stageResultSetPayload: undefined,
    stageStatusUpdatedPayload: undefined,
  };
}

export const MessageInfo = {
  encode(
    message: MessageInfo,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== undefined) {
      writer.uint32(10).string(message.id);
    }
    if (message.correlationId !== undefined) {
      writer.uint32(18).string(message.correlationId);
    }
    if (message.competitionId !== undefined) {
      writer.uint32(26).string(message.competitionId);
    }
    if (message.competitorId !== undefined) {
      writer.uint32(34).string(message.competitorId);
    }
    if (message.categoryId !== undefined) {
      writer.uint32(42).string(message.categoryId);
    }
    if (message.matId !== undefined) {
      writer.uint32(50).string(message.matId);
    }
    if (message.addAcademyPayload !== undefined) {
      AddAcademyPayload.encode(
        message.addAcademyPayload,
        writer.uint32(90).fork()
      ).ldelim();
    }
    if (message.addCategoryPayload !== undefined) {
      AddCategoryPayload.encode(
        message.addCategoryPayload,
        writer.uint32(98).fork()
      ).ldelim();
    }
    if (message.addCompetitorPayload !== undefined) {
      AddCompetitorPayload.encode(
        message.addCompetitorPayload,
        writer.uint32(106).fork()
      ).ldelim();
    }
    if (message.categoryRegistrationStatusChangePayload !== undefined) {
      CategoryRegistrationStatusChangePayload.encode(
        message.categoryRegistrationStatusChangePayload,
        writer.uint32(138).fork()
      ).ldelim();
    }
    if (message.changeCompetitorCategoryPayload !== undefined) {
      ChangeCompetitorCategoryPayload.encode(
        message.changeCompetitorCategoryPayload,
        writer.uint32(146).fork()
      ).ldelim();
    }
    if (message.changeFightOrderPayload !== undefined) {
      ChangeFightOrderPayload.encode(
        message.changeFightOrderPayload,
        writer.uint32(154).fork()
      ).ldelim();
    }
    if (message.competitorCategoryAddedPayload !== undefined) {
      CompetitorCategoryAddedPayload.encode(
        message.competitorCategoryAddedPayload,
        writer.uint32(882).fork()
      ).ldelim();
    }
    if (message.createCompetitionPayload !== undefined) {
      CreateCompetitionPayload.encode(
        message.createCompetitionPayload,
        writer.uint32(890).fork()
      ).ldelim();
    }
    if (message.createFakeCompetitorsPayload !== undefined) {
      CreateFakeCompetitorsPayload.encode(
        message.createFakeCompetitorsPayload,
        writer.uint32(898).fork()
      ).ldelim();
    }
    if (message.fightEditorApplyChangesPayload !== undefined) {
      FightEditorApplyChangesPayload.encode(
        message.fightEditorApplyChangesPayload,
        writer.uint32(922).fork()
      ).ldelim();
    }
    if (message.generateAbsoluteCategoryPayload !== undefined) {
      GenerateAbsoluteCategoryPayload.encode(
        message.generateAbsoluteCategoryPayload,
        writer.uint32(930).fork()
      ).ldelim();
    }
    if (message.generateBracketsPayload !== undefined) {
      GenerateBracketsPayload.encode(
        message.generateBracketsPayload,
        writer.uint32(938).fork()
      ).ldelim();
    }
    if (message.generateCategoriesFromRestrictionsPayload !== undefined) {
      GenerateCategoriesFromRestrictionsPayload.encode(
        message.generateCategoriesFromRestrictionsPayload,
        writer.uint32(946).fork()
      ).ldelim();
    }
    if (message.generateSchedulePayload !== undefined) {
      GenerateSchedulePayload.encode(
        message.generateSchedulePayload,
        writer.uint32(954).fork()
      ).ldelim();
    }
    if (message.propagateCompetitorsPayload !== undefined) {
      PropagateCompetitorsPayload.encode(
        message.propagateCompetitorsPayload,
        writer.uint32(962).fork()
      ).ldelim();
    }
    if (message.removeAcademyPayload !== undefined) {
      RemoveAcademyPayload.encode(
        message.removeAcademyPayload,
        writer.uint32(978).fork()
      ).ldelim();
    }
    if (message.removeCompetitorPayload !== undefined) {
      RemoveCompetitorPayload.encode(
        message.removeCompetitorPayload,
        writer.uint32(986).fork()
      ).ldelim();
    }
    if (message.setFightResultPayload !== undefined) {
      SetFightResultPayload.encode(
        message.setFightResultPayload,
        writer.uint32(994).fork()
      ).ldelim();
    }
    if (message.updateAcademyPayload !== undefined) {
      UpdateAcademyPayload.encode(
        message.updateAcademyPayload,
        writer.uint32(1002).fork()
      ).ldelim();
    }
    if (message.updateCompetionPropertiesPayload !== undefined) {
      UpdateCompetionPropertiesPayload.encode(
        message.updateCompetionPropertiesPayload,
        writer.uint32(1010).fork()
      ).ldelim();
    }
    if (message.updateCompetitorPayload !== undefined) {
      UpdateCompetitorPayload.encode(
        message.updateCompetitorPayload,
        writer.uint32(1018).fork()
      ).ldelim();
    }
    if (message.updateRegistrationInfoPayload !== undefined) {
      UpdateRegistrationInfoPayload.encode(
        message.updateRegistrationInfoPayload,
        writer.uint32(1026).fork()
      ).ldelim();
    }
    if (message.updateStageStatusPayload !== undefined) {
      UpdateStageStatusPayload.encode(
        message.updateStageStatusPayload,
        writer.uint32(1034).fork()
      ).ldelim();
    }
    if (message.bracketsGeneratedPayload !== undefined) {
      BracketsGeneratedPayload.encode(
        message.bracketsGeneratedPayload,
        writer.uint32(170).fork()
      ).ldelim();
    }
    if (message.categoryAddedPayload !== undefined) {
      CategoryAddedPayload.encode(
        message.categoryAddedPayload,
        writer.uint32(178).fork()
      ).ldelim();
    }
    if (message.competitionCreatedPayload !== undefined) {
      CompetitionCreatedPayload.encode(
        message.competitionCreatedPayload,
        writer.uint32(186).fork()
      ).ldelim();
    }
    if (message.competitionInfoPayload !== undefined) {
      CompetitionInfoPayload.encode(
        message.competitionInfoPayload,
        writer.uint32(194).fork()
      ).ldelim();
    }
    if (message.competitionPropertiesUpdatedPayload !== undefined) {
      CompetitionPropertiesUpdatedPayload.encode(
        message.competitionPropertiesUpdatedPayload,
        writer.uint32(202).fork()
      ).ldelim();
    }
    if (message.competitionStatusUpdatedPayload !== undefined) {
      CompetitionStatusUpdatedPayload.encode(
        message.competitionStatusUpdatedPayload,
        writer.uint32(210).fork()
      ).ldelim();
    }
    if (message.competitorAddedPayload !== undefined) {
      CompetitorAddedPayload.encode(
        message.competitorAddedPayload,
        writer.uint32(218).fork()
      ).ldelim();
    }
    if (message.competitorRemovedPayload !== undefined) {
      CompetitorRemovedPayload.encode(
        message.competitorRemovedPayload,
        writer.uint32(226).fork()
      ).ldelim();
    }
    if (message.competitorsPropagatedToStagePayload !== undefined) {
      CompetitorsPropagatedToStagePayload.encode(
        message.competitorsPropagatedToStagePayload,
        writer.uint32(234).fork()
      ).ldelim();
    }
    if (message.competitorUpdatedPayload !== undefined) {
      CompetitorUpdatedPayload.encode(
        message.competitorUpdatedPayload,
        writer.uint32(1682).fork()
      ).ldelim();
    }
    if (message.fightCompetitorsAssignedPayload !== undefined) {
      FightCompetitorsAssignedPayload.encode(
        message.fightCompetitorsAssignedPayload,
        writer.uint32(1690).fork()
      ).ldelim();
    }
    if (message.fightEditorChangesAppliedPayload !== undefined) {
      FightEditorChangesAppliedPayload.encode(
        message.fightEditorChangesAppliedPayload,
        writer.uint32(1698).fork()
      ).ldelim();
    }
    if (message.fightsAddedToStagePayload !== undefined) {
      FightsAddedToStagePayload.encode(
        message.fightsAddedToStagePayload,
        writer.uint32(1706).fork()
      ).ldelim();
    }
    if (message.fightStartTimeUpdatedPayload !== undefined) {
      FightStartTimeUpdatedPayload.encode(
        message.fightStartTimeUpdatedPayload,
        writer.uint32(1714).fork()
      ).ldelim();
    }
    if (message.matsUpdatedPayload !== undefined) {
      MatsUpdatedPayload.encode(
        message.matsUpdatedPayload,
        writer.uint32(1722).fork()
      ).ldelim();
    }
    if (message.registrationInfoUpdatedPayload !== undefined) {
      RegistrationInfoUpdatedPayload.encode(
        message.registrationInfoUpdatedPayload,
        writer.uint32(1754).fork()
      ).ldelim();
    }
    if (message.scheduleGeneratedPayload !== undefined) {
      ScheduleGeneratedPayload.encode(
        message.scheduleGeneratedPayload,
        writer.uint32(1778).fork()
      ).ldelim();
    }
    if (message.stageResultSetPayload !== undefined) {
      StageResultSetPayload.encode(
        message.stageResultSetPayload,
        writer.uint32(1786).fork()
      ).ldelim();
    }
    if (message.stageStatusUpdatedPayload !== undefined) {
      StageStatusUpdatedPayload.encode(
        message.stageStatusUpdatedPayload,
        writer.uint32(1794).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MessageInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessageInfo();
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
          message.competitionId = reader.string();
          break;
        case 4:
          message.competitorId = reader.string();
          break;
        case 5:
          message.categoryId = reader.string();
          break;
        case 6:
          message.matId = reader.string();
          break;
        case 11:
          message.addAcademyPayload = AddAcademyPayload.decode(
            reader,
            reader.uint32()
          );
          break;
        case 12:
          message.addCategoryPayload = AddCategoryPayload.decode(
            reader,
            reader.uint32()
          );
          break;
        case 13:
          message.addCompetitorPayload = AddCompetitorPayload.decode(
            reader,
            reader.uint32()
          );
          break;
        case 17:
          message.categoryRegistrationStatusChangePayload =
            CategoryRegistrationStatusChangePayload.decode(
              reader,
              reader.uint32()
            );
          break;
        case 18:
          message.changeCompetitorCategoryPayload =
            ChangeCompetitorCategoryPayload.decode(reader, reader.uint32());
          break;
        case 19:
          message.changeFightOrderPayload = ChangeFightOrderPayload.decode(
            reader,
            reader.uint32()
          );
          break;
        case 110:
          message.competitorCategoryAddedPayload =
            CompetitorCategoryAddedPayload.decode(reader, reader.uint32());
          break;
        case 111:
          message.createCompetitionPayload = CreateCompetitionPayload.decode(
            reader,
            reader.uint32()
          );
          break;
        case 112:
          message.createFakeCompetitorsPayload =
            CreateFakeCompetitorsPayload.decode(reader, reader.uint32());
          break;
        case 115:
          message.fightEditorApplyChangesPayload =
            FightEditorApplyChangesPayload.decode(reader, reader.uint32());
          break;
        case 116:
          message.generateAbsoluteCategoryPayload =
            GenerateAbsoluteCategoryPayload.decode(reader, reader.uint32());
          break;
        case 117:
          message.generateBracketsPayload = GenerateBracketsPayload.decode(
            reader,
            reader.uint32()
          );
          break;
        case 118:
          message.generateCategoriesFromRestrictionsPayload =
            GenerateCategoriesFromRestrictionsPayload.decode(
              reader,
              reader.uint32()
            );
          break;
        case 119:
          message.generateSchedulePayload = GenerateSchedulePayload.decode(
            reader,
            reader.uint32()
          );
          break;
        case 120:
          message.propagateCompetitorsPayload =
            PropagateCompetitorsPayload.decode(reader, reader.uint32());
          break;
        case 122:
          message.removeAcademyPayload = RemoveAcademyPayload.decode(
            reader,
            reader.uint32()
          );
          break;
        case 123:
          message.removeCompetitorPayload = RemoveCompetitorPayload.decode(
            reader,
            reader.uint32()
          );
          break;
        case 124:
          message.setFightResultPayload = SetFightResultPayload.decode(
            reader,
            reader.uint32()
          );
          break;
        case 125:
          message.updateAcademyPayload = UpdateAcademyPayload.decode(
            reader,
            reader.uint32()
          );
          break;
        case 126:
          message.updateCompetionPropertiesPayload =
            UpdateCompetionPropertiesPayload.decode(reader, reader.uint32());
          break;
        case 127:
          message.updateCompetitorPayload = UpdateCompetitorPayload.decode(
            reader,
            reader.uint32()
          );
          break;
        case 128:
          message.updateRegistrationInfoPayload =
            UpdateRegistrationInfoPayload.decode(reader, reader.uint32());
          break;
        case 129:
          message.updateStageStatusPayload = UpdateStageStatusPayload.decode(
            reader,
            reader.uint32()
          );
          break;
        case 21:
          message.bracketsGeneratedPayload = BracketsGeneratedPayload.decode(
            reader,
            reader.uint32()
          );
          break;
        case 22:
          message.categoryAddedPayload = CategoryAddedPayload.decode(
            reader,
            reader.uint32()
          );
          break;
        case 23:
          message.competitionCreatedPayload = CompetitionCreatedPayload.decode(
            reader,
            reader.uint32()
          );
          break;
        case 24:
          message.competitionInfoPayload = CompetitionInfoPayload.decode(
            reader,
            reader.uint32()
          );
          break;
        case 25:
          message.competitionPropertiesUpdatedPayload =
            CompetitionPropertiesUpdatedPayload.decode(reader, reader.uint32());
          break;
        case 26:
          message.competitionStatusUpdatedPayload =
            CompetitionStatusUpdatedPayload.decode(reader, reader.uint32());
          break;
        case 27:
          message.competitorAddedPayload = CompetitorAddedPayload.decode(
            reader,
            reader.uint32()
          );
          break;
        case 28:
          message.competitorRemovedPayload = CompetitorRemovedPayload.decode(
            reader,
            reader.uint32()
          );
          break;
        case 29:
          message.competitorsPropagatedToStagePayload =
            CompetitorsPropagatedToStagePayload.decode(reader, reader.uint32());
          break;
        case 210:
          message.competitorUpdatedPayload = CompetitorUpdatedPayload.decode(
            reader,
            reader.uint32()
          );
          break;
        case 211:
          message.fightCompetitorsAssignedPayload =
            FightCompetitorsAssignedPayload.decode(reader, reader.uint32());
          break;
        case 212:
          message.fightEditorChangesAppliedPayload =
            FightEditorChangesAppliedPayload.decode(reader, reader.uint32());
          break;
        case 213:
          message.fightsAddedToStagePayload = FightsAddedToStagePayload.decode(
            reader,
            reader.uint32()
          );
          break;
        case 214:
          message.fightStartTimeUpdatedPayload =
            FightStartTimeUpdatedPayload.decode(reader, reader.uint32());
          break;
        case 215:
          message.matsUpdatedPayload = MatsUpdatedPayload.decode(
            reader,
            reader.uint32()
          );
          break;
        case 219:
          message.registrationInfoUpdatedPayload =
            RegistrationInfoUpdatedPayload.decode(reader, reader.uint32());
          break;
        case 222:
          message.scheduleGeneratedPayload = ScheduleGeneratedPayload.decode(
            reader,
            reader.uint32()
          );
          break;
        case 223:
          message.stageResultSetPayload = StageResultSetPayload.decode(
            reader,
            reader.uint32()
          );
          break;
        case 224:
          message.stageStatusUpdatedPayload = StageStatusUpdatedPayload.decode(
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

  fromJSON(object: any): MessageInfo {
    return {
      id: isSet(object.id) ? String(object.id) : undefined,
      correlationId: isSet(object.correlationId)
        ? String(object.correlationId)
        : undefined,
      competitionId: isSet(object.competitionId)
        ? String(object.competitionId)
        : undefined,
      competitorId: isSet(object.competitorId)
        ? String(object.competitorId)
        : undefined,
      categoryId: isSet(object.categoryId)
        ? String(object.categoryId)
        : undefined,
      matId: isSet(object.matId) ? String(object.matId) : undefined,
      addAcademyPayload: isSet(object.addAcademyPayload)
        ? AddAcademyPayload.fromJSON(object.addAcademyPayload)
        : undefined,
      addCategoryPayload: isSet(object.addCategoryPayload)
        ? AddCategoryPayload.fromJSON(object.addCategoryPayload)
        : undefined,
      addCompetitorPayload: isSet(object.addCompetitorPayload)
        ? AddCompetitorPayload.fromJSON(object.addCompetitorPayload)
        : undefined,
      categoryRegistrationStatusChangePayload: isSet(
        object.categoryRegistrationStatusChangePayload
      )
        ? CategoryRegistrationStatusChangePayload.fromJSON(
            object.categoryRegistrationStatusChangePayload
          )
        : undefined,
      changeCompetitorCategoryPayload: isSet(
        object.changeCompetitorCategoryPayload
      )
        ? ChangeCompetitorCategoryPayload.fromJSON(
            object.changeCompetitorCategoryPayload
          )
        : undefined,
      changeFightOrderPayload: isSet(object.changeFightOrderPayload)
        ? ChangeFightOrderPayload.fromJSON(object.changeFightOrderPayload)
        : undefined,
      competitorCategoryAddedPayload: isSet(
        object.competitorCategoryAddedPayload
      )
        ? CompetitorCategoryAddedPayload.fromJSON(
            object.competitorCategoryAddedPayload
          )
        : undefined,
      createCompetitionPayload: isSet(object.createCompetitionPayload)
        ? CreateCompetitionPayload.fromJSON(object.createCompetitionPayload)
        : undefined,
      createFakeCompetitorsPayload: isSet(object.createFakeCompetitorsPayload)
        ? CreateFakeCompetitorsPayload.fromJSON(
            object.createFakeCompetitorsPayload
          )
        : undefined,
      fightEditorApplyChangesPayload: isSet(
        object.fightEditorApplyChangesPayload
      )
        ? FightEditorApplyChangesPayload.fromJSON(
            object.fightEditorApplyChangesPayload
          )
        : undefined,
      generateAbsoluteCategoryPayload: isSet(
        object.generateAbsoluteCategoryPayload
      )
        ? GenerateAbsoluteCategoryPayload.fromJSON(
            object.generateAbsoluteCategoryPayload
          )
        : undefined,
      generateBracketsPayload: isSet(object.generateBracketsPayload)
        ? GenerateBracketsPayload.fromJSON(object.generateBracketsPayload)
        : undefined,
      generateCategoriesFromRestrictionsPayload: isSet(
        object.generateCategoriesFromRestrictionsPayload
      )
        ? GenerateCategoriesFromRestrictionsPayload.fromJSON(
            object.generateCategoriesFromRestrictionsPayload
          )
        : undefined,
      generateSchedulePayload: isSet(object.generateSchedulePayload)
        ? GenerateSchedulePayload.fromJSON(object.generateSchedulePayload)
        : undefined,
      propagateCompetitorsPayload: isSet(object.propagateCompetitorsPayload)
        ? PropagateCompetitorsPayload.fromJSON(
            object.propagateCompetitorsPayload
          )
        : undefined,
      removeAcademyPayload: isSet(object.removeAcademyPayload)
        ? RemoveAcademyPayload.fromJSON(object.removeAcademyPayload)
        : undefined,
      removeCompetitorPayload: isSet(object.removeCompetitorPayload)
        ? RemoveCompetitorPayload.fromJSON(object.removeCompetitorPayload)
        : undefined,
      setFightResultPayload: isSet(object.setFightResultPayload)
        ? SetFightResultPayload.fromJSON(object.setFightResultPayload)
        : undefined,
      updateAcademyPayload: isSet(object.updateAcademyPayload)
        ? UpdateAcademyPayload.fromJSON(object.updateAcademyPayload)
        : undefined,
      updateCompetionPropertiesPayload: isSet(
        object.updateCompetionPropertiesPayload
      )
        ? UpdateCompetionPropertiesPayload.fromJSON(
            object.updateCompetionPropertiesPayload
          )
        : undefined,
      updateCompetitorPayload: isSet(object.updateCompetitorPayload)
        ? UpdateCompetitorPayload.fromJSON(object.updateCompetitorPayload)
        : undefined,
      updateRegistrationInfoPayload: isSet(object.updateRegistrationInfoPayload)
        ? UpdateRegistrationInfoPayload.fromJSON(
            object.updateRegistrationInfoPayload
          )
        : undefined,
      updateStageStatusPayload: isSet(object.updateStageStatusPayload)
        ? UpdateStageStatusPayload.fromJSON(object.updateStageStatusPayload)
        : undefined,
      bracketsGeneratedPayload: isSet(object.bracketsGeneratedPayload)
        ? BracketsGeneratedPayload.fromJSON(object.bracketsGeneratedPayload)
        : undefined,
      categoryAddedPayload: isSet(object.categoryAddedPayload)
        ? CategoryAddedPayload.fromJSON(object.categoryAddedPayload)
        : undefined,
      competitionCreatedPayload: isSet(object.competitionCreatedPayload)
        ? CompetitionCreatedPayload.fromJSON(object.competitionCreatedPayload)
        : undefined,
      competitionInfoPayload: isSet(object.competitionInfoPayload)
        ? CompetitionInfoPayload.fromJSON(object.competitionInfoPayload)
        : undefined,
      competitionPropertiesUpdatedPayload: isSet(
        object.competitionPropertiesUpdatedPayload
      )
        ? CompetitionPropertiesUpdatedPayload.fromJSON(
            object.competitionPropertiesUpdatedPayload
          )
        : undefined,
      competitionStatusUpdatedPayload: isSet(
        object.competitionStatusUpdatedPayload
      )
        ? CompetitionStatusUpdatedPayload.fromJSON(
            object.competitionStatusUpdatedPayload
          )
        : undefined,
      competitorAddedPayload: isSet(object.competitorAddedPayload)
        ? CompetitorAddedPayload.fromJSON(object.competitorAddedPayload)
        : undefined,
      competitorRemovedPayload: isSet(object.competitorRemovedPayload)
        ? CompetitorRemovedPayload.fromJSON(object.competitorRemovedPayload)
        : undefined,
      competitorsPropagatedToStagePayload: isSet(
        object.competitorsPropagatedToStagePayload
      )
        ? CompetitorsPropagatedToStagePayload.fromJSON(
            object.competitorsPropagatedToStagePayload
          )
        : undefined,
      competitorUpdatedPayload: isSet(object.competitorUpdatedPayload)
        ? CompetitorUpdatedPayload.fromJSON(object.competitorUpdatedPayload)
        : undefined,
      fightCompetitorsAssignedPayload: isSet(
        object.fightCompetitorsAssignedPayload
      )
        ? FightCompetitorsAssignedPayload.fromJSON(
            object.fightCompetitorsAssignedPayload
          )
        : undefined,
      fightEditorChangesAppliedPayload: isSet(
        object.fightEditorChangesAppliedPayload
      )
        ? FightEditorChangesAppliedPayload.fromJSON(
            object.fightEditorChangesAppliedPayload
          )
        : undefined,
      fightsAddedToStagePayload: isSet(object.fightsAddedToStagePayload)
        ? FightsAddedToStagePayload.fromJSON(object.fightsAddedToStagePayload)
        : undefined,
      fightStartTimeUpdatedPayload: isSet(object.fightStartTimeUpdatedPayload)
        ? FightStartTimeUpdatedPayload.fromJSON(
            object.fightStartTimeUpdatedPayload
          )
        : undefined,
      matsUpdatedPayload: isSet(object.matsUpdatedPayload)
        ? MatsUpdatedPayload.fromJSON(object.matsUpdatedPayload)
        : undefined,
      registrationInfoUpdatedPayload: isSet(
        object.registrationInfoUpdatedPayload
      )
        ? RegistrationInfoUpdatedPayload.fromJSON(
            object.registrationInfoUpdatedPayload
          )
        : undefined,
      scheduleGeneratedPayload: isSet(object.scheduleGeneratedPayload)
        ? ScheduleGeneratedPayload.fromJSON(object.scheduleGeneratedPayload)
        : undefined,
      stageResultSetPayload: isSet(object.stageResultSetPayload)
        ? StageResultSetPayload.fromJSON(object.stageResultSetPayload)
        : undefined,
      stageStatusUpdatedPayload: isSet(object.stageStatusUpdatedPayload)
        ? StageStatusUpdatedPayload.fromJSON(object.stageStatusUpdatedPayload)
        : undefined,
    };
  },

  toJSON(message: MessageInfo): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.correlationId !== undefined &&
      (obj.correlationId = message.correlationId);
    message.competitionId !== undefined &&
      (obj.competitionId = message.competitionId);
    message.competitorId !== undefined &&
      (obj.competitorId = message.competitorId);
    message.categoryId !== undefined && (obj.categoryId = message.categoryId);
    message.matId !== undefined && (obj.matId = message.matId);
    message.addAcademyPayload !== undefined &&
      (obj.addAcademyPayload = message.addAcademyPayload
        ? AddAcademyPayload.toJSON(message.addAcademyPayload)
        : undefined);
    message.addCategoryPayload !== undefined &&
      (obj.addCategoryPayload = message.addCategoryPayload
        ? AddCategoryPayload.toJSON(message.addCategoryPayload)
        : undefined);
    message.addCompetitorPayload !== undefined &&
      (obj.addCompetitorPayload = message.addCompetitorPayload
        ? AddCompetitorPayload.toJSON(message.addCompetitorPayload)
        : undefined);
    message.categoryRegistrationStatusChangePayload !== undefined &&
      (obj.categoryRegistrationStatusChangePayload =
        message.categoryRegistrationStatusChangePayload
          ? CategoryRegistrationStatusChangePayload.toJSON(
              message.categoryRegistrationStatusChangePayload
            )
          : undefined);
    message.changeCompetitorCategoryPayload !== undefined &&
      (obj.changeCompetitorCategoryPayload =
        message.changeCompetitorCategoryPayload
          ? ChangeCompetitorCategoryPayload.toJSON(
              message.changeCompetitorCategoryPayload
            )
          : undefined);
    message.changeFightOrderPayload !== undefined &&
      (obj.changeFightOrderPayload = message.changeFightOrderPayload
        ? ChangeFightOrderPayload.toJSON(message.changeFightOrderPayload)
        : undefined);
    message.competitorCategoryAddedPayload !== undefined &&
      (obj.competitorCategoryAddedPayload =
        message.competitorCategoryAddedPayload
          ? CompetitorCategoryAddedPayload.toJSON(
              message.competitorCategoryAddedPayload
            )
          : undefined);
    message.createCompetitionPayload !== undefined &&
      (obj.createCompetitionPayload = message.createCompetitionPayload
        ? CreateCompetitionPayload.toJSON(message.createCompetitionPayload)
        : undefined);
    message.createFakeCompetitorsPayload !== undefined &&
      (obj.createFakeCompetitorsPayload = message.createFakeCompetitorsPayload
        ? CreateFakeCompetitorsPayload.toJSON(
            message.createFakeCompetitorsPayload
          )
        : undefined);
    message.fightEditorApplyChangesPayload !== undefined &&
      (obj.fightEditorApplyChangesPayload =
        message.fightEditorApplyChangesPayload
          ? FightEditorApplyChangesPayload.toJSON(
              message.fightEditorApplyChangesPayload
            )
          : undefined);
    message.generateAbsoluteCategoryPayload !== undefined &&
      (obj.generateAbsoluteCategoryPayload =
        message.generateAbsoluteCategoryPayload
          ? GenerateAbsoluteCategoryPayload.toJSON(
              message.generateAbsoluteCategoryPayload
            )
          : undefined);
    message.generateBracketsPayload !== undefined &&
      (obj.generateBracketsPayload = message.generateBracketsPayload
        ? GenerateBracketsPayload.toJSON(message.generateBracketsPayload)
        : undefined);
    message.generateCategoriesFromRestrictionsPayload !== undefined &&
      (obj.generateCategoriesFromRestrictionsPayload =
        message.generateCategoriesFromRestrictionsPayload
          ? GenerateCategoriesFromRestrictionsPayload.toJSON(
              message.generateCategoriesFromRestrictionsPayload
            )
          : undefined);
    message.generateSchedulePayload !== undefined &&
      (obj.generateSchedulePayload = message.generateSchedulePayload
        ? GenerateSchedulePayload.toJSON(message.generateSchedulePayload)
        : undefined);
    message.propagateCompetitorsPayload !== undefined &&
      (obj.propagateCompetitorsPayload = message.propagateCompetitorsPayload
        ? PropagateCompetitorsPayload.toJSON(
            message.propagateCompetitorsPayload
          )
        : undefined);
    message.removeAcademyPayload !== undefined &&
      (obj.removeAcademyPayload = message.removeAcademyPayload
        ? RemoveAcademyPayload.toJSON(message.removeAcademyPayload)
        : undefined);
    message.removeCompetitorPayload !== undefined &&
      (obj.removeCompetitorPayload = message.removeCompetitorPayload
        ? RemoveCompetitorPayload.toJSON(message.removeCompetitorPayload)
        : undefined);
    message.setFightResultPayload !== undefined &&
      (obj.setFightResultPayload = message.setFightResultPayload
        ? SetFightResultPayload.toJSON(message.setFightResultPayload)
        : undefined);
    message.updateAcademyPayload !== undefined &&
      (obj.updateAcademyPayload = message.updateAcademyPayload
        ? UpdateAcademyPayload.toJSON(message.updateAcademyPayload)
        : undefined);
    message.updateCompetionPropertiesPayload !== undefined &&
      (obj.updateCompetionPropertiesPayload =
        message.updateCompetionPropertiesPayload
          ? UpdateCompetionPropertiesPayload.toJSON(
              message.updateCompetionPropertiesPayload
            )
          : undefined);
    message.updateCompetitorPayload !== undefined &&
      (obj.updateCompetitorPayload = message.updateCompetitorPayload
        ? UpdateCompetitorPayload.toJSON(message.updateCompetitorPayload)
        : undefined);
    message.updateRegistrationInfoPayload !== undefined &&
      (obj.updateRegistrationInfoPayload = message.updateRegistrationInfoPayload
        ? UpdateRegistrationInfoPayload.toJSON(
            message.updateRegistrationInfoPayload
          )
        : undefined);
    message.updateStageStatusPayload !== undefined &&
      (obj.updateStageStatusPayload = message.updateStageStatusPayload
        ? UpdateStageStatusPayload.toJSON(message.updateStageStatusPayload)
        : undefined);
    message.bracketsGeneratedPayload !== undefined &&
      (obj.bracketsGeneratedPayload = message.bracketsGeneratedPayload
        ? BracketsGeneratedPayload.toJSON(message.bracketsGeneratedPayload)
        : undefined);
    message.categoryAddedPayload !== undefined &&
      (obj.categoryAddedPayload = message.categoryAddedPayload
        ? CategoryAddedPayload.toJSON(message.categoryAddedPayload)
        : undefined);
    message.competitionCreatedPayload !== undefined &&
      (obj.competitionCreatedPayload = message.competitionCreatedPayload
        ? CompetitionCreatedPayload.toJSON(message.competitionCreatedPayload)
        : undefined);
    message.competitionInfoPayload !== undefined &&
      (obj.competitionInfoPayload = message.competitionInfoPayload
        ? CompetitionInfoPayload.toJSON(message.competitionInfoPayload)
        : undefined);
    message.competitionPropertiesUpdatedPayload !== undefined &&
      (obj.competitionPropertiesUpdatedPayload =
        message.competitionPropertiesUpdatedPayload
          ? CompetitionPropertiesUpdatedPayload.toJSON(
              message.competitionPropertiesUpdatedPayload
            )
          : undefined);
    message.competitionStatusUpdatedPayload !== undefined &&
      (obj.competitionStatusUpdatedPayload =
        message.competitionStatusUpdatedPayload
          ? CompetitionStatusUpdatedPayload.toJSON(
              message.competitionStatusUpdatedPayload
            )
          : undefined);
    message.competitorAddedPayload !== undefined &&
      (obj.competitorAddedPayload = message.competitorAddedPayload
        ? CompetitorAddedPayload.toJSON(message.competitorAddedPayload)
        : undefined);
    message.competitorRemovedPayload !== undefined &&
      (obj.competitorRemovedPayload = message.competitorRemovedPayload
        ? CompetitorRemovedPayload.toJSON(message.competitorRemovedPayload)
        : undefined);
    message.competitorsPropagatedToStagePayload !== undefined &&
      (obj.competitorsPropagatedToStagePayload =
        message.competitorsPropagatedToStagePayload
          ? CompetitorsPropagatedToStagePayload.toJSON(
              message.competitorsPropagatedToStagePayload
            )
          : undefined);
    message.competitorUpdatedPayload !== undefined &&
      (obj.competitorUpdatedPayload = message.competitorUpdatedPayload
        ? CompetitorUpdatedPayload.toJSON(message.competitorUpdatedPayload)
        : undefined);
    message.fightCompetitorsAssignedPayload !== undefined &&
      (obj.fightCompetitorsAssignedPayload =
        message.fightCompetitorsAssignedPayload
          ? FightCompetitorsAssignedPayload.toJSON(
              message.fightCompetitorsAssignedPayload
            )
          : undefined);
    message.fightEditorChangesAppliedPayload !== undefined &&
      (obj.fightEditorChangesAppliedPayload =
        message.fightEditorChangesAppliedPayload
          ? FightEditorChangesAppliedPayload.toJSON(
              message.fightEditorChangesAppliedPayload
            )
          : undefined);
    message.fightsAddedToStagePayload !== undefined &&
      (obj.fightsAddedToStagePayload = message.fightsAddedToStagePayload
        ? FightsAddedToStagePayload.toJSON(message.fightsAddedToStagePayload)
        : undefined);
    message.fightStartTimeUpdatedPayload !== undefined &&
      (obj.fightStartTimeUpdatedPayload = message.fightStartTimeUpdatedPayload
        ? FightStartTimeUpdatedPayload.toJSON(
            message.fightStartTimeUpdatedPayload
          )
        : undefined);
    message.matsUpdatedPayload !== undefined &&
      (obj.matsUpdatedPayload = message.matsUpdatedPayload
        ? MatsUpdatedPayload.toJSON(message.matsUpdatedPayload)
        : undefined);
    message.registrationInfoUpdatedPayload !== undefined &&
      (obj.registrationInfoUpdatedPayload =
        message.registrationInfoUpdatedPayload
          ? RegistrationInfoUpdatedPayload.toJSON(
              message.registrationInfoUpdatedPayload
            )
          : undefined);
    message.scheduleGeneratedPayload !== undefined &&
      (obj.scheduleGeneratedPayload = message.scheduleGeneratedPayload
        ? ScheduleGeneratedPayload.toJSON(message.scheduleGeneratedPayload)
        : undefined);
    message.stageResultSetPayload !== undefined &&
      (obj.stageResultSetPayload = message.stageResultSetPayload
        ? StageResultSetPayload.toJSON(message.stageResultSetPayload)
        : undefined);
    message.stageStatusUpdatedPayload !== undefined &&
      (obj.stageStatusUpdatedPayload = message.stageStatusUpdatedPayload
        ? StageStatusUpdatedPayload.toJSON(message.stageStatusUpdatedPayload)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MessageInfo>, I>>(
    object: I
  ): MessageInfo {
    const message = createBaseMessageInfo();
    message.id = object.id ?? undefined;
    message.correlationId = object.correlationId ?? undefined;
    message.competitionId = object.competitionId ?? undefined;
    message.competitorId = object.competitorId ?? undefined;
    message.categoryId = object.categoryId ?? undefined;
    message.matId = object.matId ?? undefined;
    message.addAcademyPayload =
      object.addAcademyPayload !== undefined &&
      object.addAcademyPayload !== null
        ? AddAcademyPayload.fromPartial(object.addAcademyPayload)
        : undefined;
    message.addCategoryPayload =
      object.addCategoryPayload !== undefined &&
      object.addCategoryPayload !== null
        ? AddCategoryPayload.fromPartial(object.addCategoryPayload)
        : undefined;
    message.addCompetitorPayload =
      object.addCompetitorPayload !== undefined &&
      object.addCompetitorPayload !== null
        ? AddCompetitorPayload.fromPartial(object.addCompetitorPayload)
        : undefined;
    message.categoryRegistrationStatusChangePayload =
      object.categoryRegistrationStatusChangePayload !== undefined &&
      object.categoryRegistrationStatusChangePayload !== null
        ? CategoryRegistrationStatusChangePayload.fromPartial(
            object.categoryRegistrationStatusChangePayload
          )
        : undefined;
    message.changeCompetitorCategoryPayload =
      object.changeCompetitorCategoryPayload !== undefined &&
      object.changeCompetitorCategoryPayload !== null
        ? ChangeCompetitorCategoryPayload.fromPartial(
            object.changeCompetitorCategoryPayload
          )
        : undefined;
    message.changeFightOrderPayload =
      object.changeFightOrderPayload !== undefined &&
      object.changeFightOrderPayload !== null
        ? ChangeFightOrderPayload.fromPartial(object.changeFightOrderPayload)
        : undefined;
    message.competitorCategoryAddedPayload =
      object.competitorCategoryAddedPayload !== undefined &&
      object.competitorCategoryAddedPayload !== null
        ? CompetitorCategoryAddedPayload.fromPartial(
            object.competitorCategoryAddedPayload
          )
        : undefined;
    message.createCompetitionPayload =
      object.createCompetitionPayload !== undefined &&
      object.createCompetitionPayload !== null
        ? CreateCompetitionPayload.fromPartial(object.createCompetitionPayload)
        : undefined;
    message.createFakeCompetitorsPayload =
      object.createFakeCompetitorsPayload !== undefined &&
      object.createFakeCompetitorsPayload !== null
        ? CreateFakeCompetitorsPayload.fromPartial(
            object.createFakeCompetitorsPayload
          )
        : undefined;
    message.fightEditorApplyChangesPayload =
      object.fightEditorApplyChangesPayload !== undefined &&
      object.fightEditorApplyChangesPayload !== null
        ? FightEditorApplyChangesPayload.fromPartial(
            object.fightEditorApplyChangesPayload
          )
        : undefined;
    message.generateAbsoluteCategoryPayload =
      object.generateAbsoluteCategoryPayload !== undefined &&
      object.generateAbsoluteCategoryPayload !== null
        ? GenerateAbsoluteCategoryPayload.fromPartial(
            object.generateAbsoluteCategoryPayload
          )
        : undefined;
    message.generateBracketsPayload =
      object.generateBracketsPayload !== undefined &&
      object.generateBracketsPayload !== null
        ? GenerateBracketsPayload.fromPartial(object.generateBracketsPayload)
        : undefined;
    message.generateCategoriesFromRestrictionsPayload =
      object.generateCategoriesFromRestrictionsPayload !== undefined &&
      object.generateCategoriesFromRestrictionsPayload !== null
        ? GenerateCategoriesFromRestrictionsPayload.fromPartial(
            object.generateCategoriesFromRestrictionsPayload
          )
        : undefined;
    message.generateSchedulePayload =
      object.generateSchedulePayload !== undefined &&
      object.generateSchedulePayload !== null
        ? GenerateSchedulePayload.fromPartial(object.generateSchedulePayload)
        : undefined;
    message.propagateCompetitorsPayload =
      object.propagateCompetitorsPayload !== undefined &&
      object.propagateCompetitorsPayload !== null
        ? PropagateCompetitorsPayload.fromPartial(
            object.propagateCompetitorsPayload
          )
        : undefined;
    message.removeAcademyPayload =
      object.removeAcademyPayload !== undefined &&
      object.removeAcademyPayload !== null
        ? RemoveAcademyPayload.fromPartial(object.removeAcademyPayload)
        : undefined;
    message.removeCompetitorPayload =
      object.removeCompetitorPayload !== undefined &&
      object.removeCompetitorPayload !== null
        ? RemoveCompetitorPayload.fromPartial(object.removeCompetitorPayload)
        : undefined;
    message.setFightResultPayload =
      object.setFightResultPayload !== undefined &&
      object.setFightResultPayload !== null
        ? SetFightResultPayload.fromPartial(object.setFightResultPayload)
        : undefined;
    message.updateAcademyPayload =
      object.updateAcademyPayload !== undefined &&
      object.updateAcademyPayload !== null
        ? UpdateAcademyPayload.fromPartial(object.updateAcademyPayload)
        : undefined;
    message.updateCompetionPropertiesPayload =
      object.updateCompetionPropertiesPayload !== undefined &&
      object.updateCompetionPropertiesPayload !== null
        ? UpdateCompetionPropertiesPayload.fromPartial(
            object.updateCompetionPropertiesPayload
          )
        : undefined;
    message.updateCompetitorPayload =
      object.updateCompetitorPayload !== undefined &&
      object.updateCompetitorPayload !== null
        ? UpdateCompetitorPayload.fromPartial(object.updateCompetitorPayload)
        : undefined;
    message.updateRegistrationInfoPayload =
      object.updateRegistrationInfoPayload !== undefined &&
      object.updateRegistrationInfoPayload !== null
        ? UpdateRegistrationInfoPayload.fromPartial(
            object.updateRegistrationInfoPayload
          )
        : undefined;
    message.updateStageStatusPayload =
      object.updateStageStatusPayload !== undefined &&
      object.updateStageStatusPayload !== null
        ? UpdateStageStatusPayload.fromPartial(object.updateStageStatusPayload)
        : undefined;
    message.bracketsGeneratedPayload =
      object.bracketsGeneratedPayload !== undefined &&
      object.bracketsGeneratedPayload !== null
        ? BracketsGeneratedPayload.fromPartial(object.bracketsGeneratedPayload)
        : undefined;
    message.categoryAddedPayload =
      object.categoryAddedPayload !== undefined &&
      object.categoryAddedPayload !== null
        ? CategoryAddedPayload.fromPartial(object.categoryAddedPayload)
        : undefined;
    message.competitionCreatedPayload =
      object.competitionCreatedPayload !== undefined &&
      object.competitionCreatedPayload !== null
        ? CompetitionCreatedPayload.fromPartial(
            object.competitionCreatedPayload
          )
        : undefined;
    message.competitionInfoPayload =
      object.competitionInfoPayload !== undefined &&
      object.competitionInfoPayload !== null
        ? CompetitionInfoPayload.fromPartial(object.competitionInfoPayload)
        : undefined;
    message.competitionPropertiesUpdatedPayload =
      object.competitionPropertiesUpdatedPayload !== undefined &&
      object.competitionPropertiesUpdatedPayload !== null
        ? CompetitionPropertiesUpdatedPayload.fromPartial(
            object.competitionPropertiesUpdatedPayload
          )
        : undefined;
    message.competitionStatusUpdatedPayload =
      object.competitionStatusUpdatedPayload !== undefined &&
      object.competitionStatusUpdatedPayload !== null
        ? CompetitionStatusUpdatedPayload.fromPartial(
            object.competitionStatusUpdatedPayload
          )
        : undefined;
    message.competitorAddedPayload =
      object.competitorAddedPayload !== undefined &&
      object.competitorAddedPayload !== null
        ? CompetitorAddedPayload.fromPartial(object.competitorAddedPayload)
        : undefined;
    message.competitorRemovedPayload =
      object.competitorRemovedPayload !== undefined &&
      object.competitorRemovedPayload !== null
        ? CompetitorRemovedPayload.fromPartial(object.competitorRemovedPayload)
        : undefined;
    message.competitorsPropagatedToStagePayload =
      object.competitorsPropagatedToStagePayload !== undefined &&
      object.competitorsPropagatedToStagePayload !== null
        ? CompetitorsPropagatedToStagePayload.fromPartial(
            object.competitorsPropagatedToStagePayload
          )
        : undefined;
    message.competitorUpdatedPayload =
      object.competitorUpdatedPayload !== undefined &&
      object.competitorUpdatedPayload !== null
        ? CompetitorUpdatedPayload.fromPartial(object.competitorUpdatedPayload)
        : undefined;
    message.fightCompetitorsAssignedPayload =
      object.fightCompetitorsAssignedPayload !== undefined &&
      object.fightCompetitorsAssignedPayload !== null
        ? FightCompetitorsAssignedPayload.fromPartial(
            object.fightCompetitorsAssignedPayload
          )
        : undefined;
    message.fightEditorChangesAppliedPayload =
      object.fightEditorChangesAppliedPayload !== undefined &&
      object.fightEditorChangesAppliedPayload !== null
        ? FightEditorChangesAppliedPayload.fromPartial(
            object.fightEditorChangesAppliedPayload
          )
        : undefined;
    message.fightsAddedToStagePayload =
      object.fightsAddedToStagePayload !== undefined &&
      object.fightsAddedToStagePayload !== null
        ? FightsAddedToStagePayload.fromPartial(
            object.fightsAddedToStagePayload
          )
        : undefined;
    message.fightStartTimeUpdatedPayload =
      object.fightStartTimeUpdatedPayload !== undefined &&
      object.fightStartTimeUpdatedPayload !== null
        ? FightStartTimeUpdatedPayload.fromPartial(
            object.fightStartTimeUpdatedPayload
          )
        : undefined;
    message.matsUpdatedPayload =
      object.matsUpdatedPayload !== undefined &&
      object.matsUpdatedPayload !== null
        ? MatsUpdatedPayload.fromPartial(object.matsUpdatedPayload)
        : undefined;
    message.registrationInfoUpdatedPayload =
      object.registrationInfoUpdatedPayload !== undefined &&
      object.registrationInfoUpdatedPayload !== null
        ? RegistrationInfoUpdatedPayload.fromPartial(
            object.registrationInfoUpdatedPayload
          )
        : undefined;
    message.scheduleGeneratedPayload =
      object.scheduleGeneratedPayload !== undefined &&
      object.scheduleGeneratedPayload !== null
        ? ScheduleGeneratedPayload.fromPartial(object.scheduleGeneratedPayload)
        : undefined;
    message.stageResultSetPayload =
      object.stageResultSetPayload !== undefined &&
      object.stageResultSetPayload !== null
        ? StageResultSetPayload.fromPartial(object.stageResultSetPayload)
        : undefined;
    message.stageStatusUpdatedPayload =
      object.stageStatusUpdatedPayload !== undefined &&
      object.stageStatusUpdatedPayload !== null
        ? StageStatusUpdatedPayload.fromPartial(
            object.stageStatusUpdatedPayload
          )
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
