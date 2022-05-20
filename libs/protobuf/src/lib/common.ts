/* eslint-disable */
import * as Long from 'long';
import * as _m0 from 'protobufjs/minimal';
import {
  AddAcademyPayload,
  AddCategoryPayload,
  AddCompetitorPayload,
  AddRegistrationGroupPayload,
  AddRegistrationPeriodPayload,
  AssignRegistrationGroupCategoriesPayload,
  CategoryRegistrationStatusChangePayload,
  ChangeCompetitorCategoryPayload,
  ChangeFightOrderPayload,
  CompetitorCategoryAddedPayload,
  CreateCompetitionPayload,
  CreateFakeCompetitorsPayload,
  DeleteRegistrationGroupPayload,
  DeleteRegistrationPeriodPayload,
  FightEditorApplyChangesPayload,
  GenerateAbsoluteCategoryPayload,
  GenerateBracketsPayload,
  GenerateCategoriesFromRestrictionsPayload,
  GenerateSchedulePayload,
  PropagateCompetitorsPayload,
  RegistrationPeriodAddRegistrationGroupPayload,
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
  RegistrationGroupAddedPayload,
  RegistrationGroupCategoriesAssignedPayload,
  RegistrationGroupDeletedPayload,
  RegistrationInfoUpdatedPayload,
  RegistrationPeriodAddedPayload,
  RegistrationPeriodDeletedPayload,
  ScheduleGeneratedPayload,
  StageResultSetPayload,
  StageStatusUpdatedPayload,
} from './eventpayload';

export interface MessageInfo {
  id: string;
  correlationId: string;
  competitionId: string;
  competitorId: string;
  categoryId: string;
  matId: string;
  payload?:
    | { $case: 'addAcademyPayload'; addAcademyPayload: AddAcademyPayload }
    | { $case: 'addCategoryPayload'; addCategoryPayload: AddCategoryPayload }
    | {
        $case: 'addCompetitorPayload';
        addCompetitorPayload: AddCompetitorPayload;
      }
    | {
        $case: 'addRegistrationGroupPayload';
        addRegistrationGroupPayload: AddRegistrationGroupPayload;
      }
    | {
        $case: 'addRegistrationPeriodPayload';
        addRegistrationPeriodPayload: AddRegistrationPeriodPayload;
      }
    | {
        $case: 'assignRegistrationGroupCategoriesPayload';
        assignRegistrationGroupCategoriesPayload: AssignRegistrationGroupCategoriesPayload;
      }
    | {
        $case: 'categoryRegistrationStatusChangePayload';
        categoryRegistrationStatusChangePayload: CategoryRegistrationStatusChangePayload;
      }
    | {
        $case: 'changeCompetitorCategoryPayload';
        changeCompetitorCategoryPayload: ChangeCompetitorCategoryPayload;
      }
    | {
        $case: 'changeFightOrderPayload';
        changeFightOrderPayload: ChangeFightOrderPayload;
      }
    | {
        $case: 'competitorCategoryAddedPayload';
        competitorCategoryAddedPayload: CompetitorCategoryAddedPayload;
      }
    | {
        $case: 'createCompetitionPayload';
        createCompetitionPayload: CreateCompetitionPayload;
      }
    | {
        $case: 'createFakeCompetitorsPayload';
        createFakeCompetitorsPayload: CreateFakeCompetitorsPayload;
      }
    | {
        $case: 'deleteRegistrationGroupPayload';
        deleteRegistrationGroupPayload: DeleteRegistrationGroupPayload;
      }
    | {
        $case: 'deleteRegistrationPeriodPayload';
        deleteRegistrationPeriodPayload: DeleteRegistrationPeriodPayload;
      }
    | {
        $case: 'fightEditorApplyChangesPayload';
        fightEditorApplyChangesPayload: FightEditorApplyChangesPayload;
      }
    | {
        $case: 'generateAbsoluteCategoryPayload';
        generateAbsoluteCategoryPayload: GenerateAbsoluteCategoryPayload;
      }
    | {
        $case: 'generateBracketsPayload';
        generateBracketsPayload: GenerateBracketsPayload;
      }
    | {
        $case: 'generateCategoriesFromRestrictionsPayload';
        generateCategoriesFromRestrictionsPayload: GenerateCategoriesFromRestrictionsPayload;
      }
    | {
        $case: 'generateSchedulePayload';
        generateSchedulePayload: GenerateSchedulePayload;
      }
    | {
        $case: 'propagateCompetitorsPayload';
        propagateCompetitorsPayload: PropagateCompetitorsPayload;
      }
    | {
        $case: 'registrationPeriodAddRegistrationGroupPayload';
        registrationPeriodAddRegistrationGroupPayload: RegistrationPeriodAddRegistrationGroupPayload;
      }
    | {
        $case: 'removeAcademyPayload';
        removeAcademyPayload: RemoveAcademyPayload;
      }
    | {
        $case: 'removeCompetitorPayload';
        removeCompetitorPayload: RemoveCompetitorPayload;
      }
    | {
        $case: 'setFightResultPayload';
        setFightResultPayload: SetFightResultPayload;
      }
    | {
        $case: 'updateAcademyPayload';
        updateAcademyPayload: UpdateAcademyPayload;
      }
    | {
        $case: 'updateCompetionPropertiesPayload';
        updateCompetionPropertiesPayload: UpdateCompetionPropertiesPayload;
      }
    | {
        $case: 'updateCompetitorPayload';
        updateCompetitorPayload: UpdateCompetitorPayload;
      }
    | {
        $case: 'updateRegistrationInfoPayload';
        updateRegistrationInfoPayload: UpdateRegistrationInfoPayload;
      }
    | {
        $case: 'updateStageStatusPayload';
        updateStageStatusPayload: UpdateStageStatusPayload;
      }
    | {
        $case: 'bracketsGeneratedPayload';
        bracketsGeneratedPayload: BracketsGeneratedPayload;
      }
    | {
        $case: 'categoryAddedPayload';
        categoryAddedPayload: CategoryAddedPayload;
      }
    | {
        $case: 'competitionCreatedPayload';
        competitionCreatedPayload: CompetitionCreatedPayload;
      }
    | {
        $case: 'competitionInfoPayload';
        competitionInfoPayload: CompetitionInfoPayload;
      }
    | {
        $case: 'competitionPropertiesUpdatedPayload';
        competitionPropertiesUpdatedPayload: CompetitionPropertiesUpdatedPayload;
      }
    | {
        $case: 'competitionStatusUpdatedPayload';
        competitionStatusUpdatedPayload: CompetitionStatusUpdatedPayload;
      }
    | {
        $case: 'competitorAddedPayload';
        competitorAddedPayload: CompetitorAddedPayload;
      }
    | {
        $case: 'competitorRemovedPayload';
        competitorRemovedPayload: CompetitorRemovedPayload;
      }
    | {
        $case: 'competitorsPropagatedToStagePayload';
        competitorsPropagatedToStagePayload: CompetitorsPropagatedToStagePayload;
      }
    | {
        $case: 'competitorUpdatedPayload';
        competitorUpdatedPayload: CompetitorUpdatedPayload;
      }
    | {
        $case: 'fightCompetitorsAssignedPayload';
        fightCompetitorsAssignedPayload: FightCompetitorsAssignedPayload;
      }
    | {
        $case: 'fightEditorChangesAppliedPayload';
        fightEditorChangesAppliedPayload: FightEditorChangesAppliedPayload;
      }
    | {
        $case: 'fightsAddedToStagePayload';
        fightsAddedToStagePayload: FightsAddedToStagePayload;
      }
    | {
        $case: 'fightStartTimeUpdatedPayload';
        fightStartTimeUpdatedPayload: FightStartTimeUpdatedPayload;
      }
    | { $case: 'matsUpdatedPayload'; matsUpdatedPayload: MatsUpdatedPayload }
    | {
        $case: 'registrationGroupAddedPayload';
        registrationGroupAddedPayload: RegistrationGroupAddedPayload;
      }
    | {
        $case: 'registrationGroupCategoriesAssignedPayload';
        registrationGroupCategoriesAssignedPayload: RegistrationGroupCategoriesAssignedPayload;
      }
    | {
        $case: 'registrationGroupDeletedPayload';
        registrationGroupDeletedPayload: RegistrationGroupDeletedPayload;
      }
    | {
        $case: 'registrationInfoUpdatedPayload';
        registrationInfoUpdatedPayload: RegistrationInfoUpdatedPayload;
      }
    | {
        $case: 'registrationPeriodAddedPayload';
        registrationPeriodAddedPayload: RegistrationPeriodAddedPayload;
      }
    | {
        $case: 'registrationPeriodDeletedPayload';
        registrationPeriodDeletedPayload: RegistrationPeriodDeletedPayload;
      }
    | {
        $case: 'scheduleGeneratedPayload';
        scheduleGeneratedPayload: ScheduleGeneratedPayload;
      }
    | {
        $case: 'stageResultSetPayload';
        stageResultSetPayload: StageResultSetPayload;
      }
    | {
        $case: 'stageStatusUpdatedPayload';
        stageStatusUpdatedPayload: StageStatusUpdatedPayload;
      };
}

function createBaseMessageInfo(): MessageInfo {
  return {
    id: '',
    correlationId: '',
    competitionId: '',
    competitorId: '',
    categoryId: '',
    matId: '',
    payload: undefined,
  };
}

export const MessageInfo = {
  encode(
    message: MessageInfo,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.correlationId !== '') {
      writer.uint32(18).string(message.correlationId);
    }
    if (message.competitionId !== '') {
      writer.uint32(26).string(message.competitionId);
    }
    if (message.competitorId !== '') {
      writer.uint32(34).string(message.competitorId);
    }
    if (message.categoryId !== '') {
      writer.uint32(42).string(message.categoryId);
    }
    if (message.matId !== '') {
      writer.uint32(50).string(message.matId);
    }
    if (message.payload?.$case === 'addAcademyPayload') {
      AddAcademyPayload.encode(
        message.payload.addAcademyPayload,
        writer.uint32(90).fork()
      ).ldelim();
    }
    if (message.payload?.$case === 'addCategoryPayload') {
      AddCategoryPayload.encode(
        message.payload.addCategoryPayload,
        writer.uint32(98).fork()
      ).ldelim();
    }
    if (message.payload?.$case === 'addCompetitorPayload') {
      AddCompetitorPayload.encode(
        message.payload.addCompetitorPayload,
        writer.uint32(106).fork()
      ).ldelim();
    }
    if (message.payload?.$case === 'addRegistrationGroupPayload') {
      AddRegistrationGroupPayload.encode(
        message.payload.addRegistrationGroupPayload,
        writer.uint32(114).fork()
      ).ldelim();
    }
    if (message.payload?.$case === 'addRegistrationPeriodPayload') {
      AddRegistrationPeriodPayload.encode(
        message.payload.addRegistrationPeriodPayload,
        writer.uint32(122).fork()
      ).ldelim();
    }
    if (message.payload?.$case === 'assignRegistrationGroupCategoriesPayload') {
      AssignRegistrationGroupCategoriesPayload.encode(
        message.payload.assignRegistrationGroupCategoriesPayload,
        writer.uint32(130).fork()
      ).ldelim();
    }
    if (message.payload?.$case === 'categoryRegistrationStatusChangePayload') {
      CategoryRegistrationStatusChangePayload.encode(
        message.payload.categoryRegistrationStatusChangePayload,
        writer.uint32(138).fork()
      ).ldelim();
    }
    if (message.payload?.$case === 'changeCompetitorCategoryPayload') {
      ChangeCompetitorCategoryPayload.encode(
        message.payload.changeCompetitorCategoryPayload,
        writer.uint32(146).fork()
      ).ldelim();
    }
    if (message.payload?.$case === 'changeFightOrderPayload') {
      ChangeFightOrderPayload.encode(
        message.payload.changeFightOrderPayload,
        writer.uint32(154).fork()
      ).ldelim();
    }
    if (message.payload?.$case === 'competitorCategoryAddedPayload') {
      CompetitorCategoryAddedPayload.encode(
        message.payload.competitorCategoryAddedPayload,
        writer.uint32(882).fork()
      ).ldelim();
    }
    if (message.payload?.$case === 'createCompetitionPayload') {
      CreateCompetitionPayload.encode(
        message.payload.createCompetitionPayload,
        writer.uint32(890).fork()
      ).ldelim();
    }
    if (message.payload?.$case === 'createFakeCompetitorsPayload') {
      CreateFakeCompetitorsPayload.encode(
        message.payload.createFakeCompetitorsPayload,
        writer.uint32(898).fork()
      ).ldelim();
    }
    if (message.payload?.$case === 'deleteRegistrationGroupPayload') {
      DeleteRegistrationGroupPayload.encode(
        message.payload.deleteRegistrationGroupPayload,
        writer.uint32(906).fork()
      ).ldelim();
    }
    if (message.payload?.$case === 'deleteRegistrationPeriodPayload') {
      DeleteRegistrationPeriodPayload.encode(
        message.payload.deleteRegistrationPeriodPayload,
        writer.uint32(914).fork()
      ).ldelim();
    }
    if (message.payload?.$case === 'fightEditorApplyChangesPayload') {
      FightEditorApplyChangesPayload.encode(
        message.payload.fightEditorApplyChangesPayload,
        writer.uint32(922).fork()
      ).ldelim();
    }
    if (message.payload?.$case === 'generateAbsoluteCategoryPayload') {
      GenerateAbsoluteCategoryPayload.encode(
        message.payload.generateAbsoluteCategoryPayload,
        writer.uint32(930).fork()
      ).ldelim();
    }
    if (message.payload?.$case === 'generateBracketsPayload') {
      GenerateBracketsPayload.encode(
        message.payload.generateBracketsPayload,
        writer.uint32(938).fork()
      ).ldelim();
    }
    if (
      message.payload?.$case === 'generateCategoriesFromRestrictionsPayload'
    ) {
      GenerateCategoriesFromRestrictionsPayload.encode(
        message.payload.generateCategoriesFromRestrictionsPayload,
        writer.uint32(946).fork()
      ).ldelim();
    }
    if (message.payload?.$case === 'generateSchedulePayload') {
      GenerateSchedulePayload.encode(
        message.payload.generateSchedulePayload,
        writer.uint32(954).fork()
      ).ldelim();
    }
    if (message.payload?.$case === 'propagateCompetitorsPayload') {
      PropagateCompetitorsPayload.encode(
        message.payload.propagateCompetitorsPayload,
        writer.uint32(962).fork()
      ).ldelim();
    }
    if (
      message.payload?.$case === 'registrationPeriodAddRegistrationGroupPayload'
    ) {
      RegistrationPeriodAddRegistrationGroupPayload.encode(
        message.payload.registrationPeriodAddRegistrationGroupPayload,
        writer.uint32(970).fork()
      ).ldelim();
    }
    if (message.payload?.$case === 'removeAcademyPayload') {
      RemoveAcademyPayload.encode(
        message.payload.removeAcademyPayload,
        writer.uint32(978).fork()
      ).ldelim();
    }
    if (message.payload?.$case === 'removeCompetitorPayload') {
      RemoveCompetitorPayload.encode(
        message.payload.removeCompetitorPayload,
        writer.uint32(986).fork()
      ).ldelim();
    }
    if (message.payload?.$case === 'setFightResultPayload') {
      SetFightResultPayload.encode(
        message.payload.setFightResultPayload,
        writer.uint32(994).fork()
      ).ldelim();
    }
    if (message.payload?.$case === 'updateAcademyPayload') {
      UpdateAcademyPayload.encode(
        message.payload.updateAcademyPayload,
        writer.uint32(1002).fork()
      ).ldelim();
    }
    if (message.payload?.$case === 'updateCompetionPropertiesPayload') {
      UpdateCompetionPropertiesPayload.encode(
        message.payload.updateCompetionPropertiesPayload,
        writer.uint32(1010).fork()
      ).ldelim();
    }
    if (message.payload?.$case === 'updateCompetitorPayload') {
      UpdateCompetitorPayload.encode(
        message.payload.updateCompetitorPayload,
        writer.uint32(1018).fork()
      ).ldelim();
    }
    if (message.payload?.$case === 'updateRegistrationInfoPayload') {
      UpdateRegistrationInfoPayload.encode(
        message.payload.updateRegistrationInfoPayload,
        writer.uint32(1026).fork()
      ).ldelim();
    }
    if (message.payload?.$case === 'updateStageStatusPayload') {
      UpdateStageStatusPayload.encode(
        message.payload.updateStageStatusPayload,
        writer.uint32(1034).fork()
      ).ldelim();
    }
    if (message.payload?.$case === 'bracketsGeneratedPayload') {
      BracketsGeneratedPayload.encode(
        message.payload.bracketsGeneratedPayload,
        writer.uint32(170).fork()
      ).ldelim();
    }
    if (message.payload?.$case === 'categoryAddedPayload') {
      CategoryAddedPayload.encode(
        message.payload.categoryAddedPayload,
        writer.uint32(178).fork()
      ).ldelim();
    }
    if (message.payload?.$case === 'competitionCreatedPayload') {
      CompetitionCreatedPayload.encode(
        message.payload.competitionCreatedPayload,
        writer.uint32(186).fork()
      ).ldelim();
    }
    if (message.payload?.$case === 'competitionInfoPayload') {
      CompetitionInfoPayload.encode(
        message.payload.competitionInfoPayload,
        writer.uint32(194).fork()
      ).ldelim();
    }
    if (message.payload?.$case === 'competitionPropertiesUpdatedPayload') {
      CompetitionPropertiesUpdatedPayload.encode(
        message.payload.competitionPropertiesUpdatedPayload,
        writer.uint32(202).fork()
      ).ldelim();
    }
    if (message.payload?.$case === 'competitionStatusUpdatedPayload') {
      CompetitionStatusUpdatedPayload.encode(
        message.payload.competitionStatusUpdatedPayload,
        writer.uint32(210).fork()
      ).ldelim();
    }
    if (message.payload?.$case === 'competitorAddedPayload') {
      CompetitorAddedPayload.encode(
        message.payload.competitorAddedPayload,
        writer.uint32(218).fork()
      ).ldelim();
    }
    if (message.payload?.$case === 'competitorRemovedPayload') {
      CompetitorRemovedPayload.encode(
        message.payload.competitorRemovedPayload,
        writer.uint32(226).fork()
      ).ldelim();
    }
    if (message.payload?.$case === 'competitorsPropagatedToStagePayload') {
      CompetitorsPropagatedToStagePayload.encode(
        message.payload.competitorsPropagatedToStagePayload,
        writer.uint32(234).fork()
      ).ldelim();
    }
    if (message.payload?.$case === 'competitorUpdatedPayload') {
      CompetitorUpdatedPayload.encode(
        message.payload.competitorUpdatedPayload,
        writer.uint32(1682).fork()
      ).ldelim();
    }
    if (message.payload?.$case === 'fightCompetitorsAssignedPayload') {
      FightCompetitorsAssignedPayload.encode(
        message.payload.fightCompetitorsAssignedPayload,
        writer.uint32(1690).fork()
      ).ldelim();
    }
    if (message.payload?.$case === 'fightEditorChangesAppliedPayload') {
      FightEditorChangesAppliedPayload.encode(
        message.payload.fightEditorChangesAppliedPayload,
        writer.uint32(1698).fork()
      ).ldelim();
    }
    if (message.payload?.$case === 'fightsAddedToStagePayload') {
      FightsAddedToStagePayload.encode(
        message.payload.fightsAddedToStagePayload,
        writer.uint32(1706).fork()
      ).ldelim();
    }
    if (message.payload?.$case === 'fightStartTimeUpdatedPayload') {
      FightStartTimeUpdatedPayload.encode(
        message.payload.fightStartTimeUpdatedPayload,
        writer.uint32(1714).fork()
      ).ldelim();
    }
    if (message.payload?.$case === 'matsUpdatedPayload') {
      MatsUpdatedPayload.encode(
        message.payload.matsUpdatedPayload,
        writer.uint32(1722).fork()
      ).ldelim();
    }
    if (message.payload?.$case === 'registrationGroupAddedPayload') {
      RegistrationGroupAddedPayload.encode(
        message.payload.registrationGroupAddedPayload,
        writer.uint32(1730).fork()
      ).ldelim();
    }
    if (
      message.payload?.$case === 'registrationGroupCategoriesAssignedPayload'
    ) {
      RegistrationGroupCategoriesAssignedPayload.encode(
        message.payload.registrationGroupCategoriesAssignedPayload,
        writer.uint32(1738).fork()
      ).ldelim();
    }
    if (message.payload?.$case === 'registrationGroupDeletedPayload') {
      RegistrationGroupDeletedPayload.encode(
        message.payload.registrationGroupDeletedPayload,
        writer.uint32(1746).fork()
      ).ldelim();
    }
    if (message.payload?.$case === 'registrationInfoUpdatedPayload') {
      RegistrationInfoUpdatedPayload.encode(
        message.payload.registrationInfoUpdatedPayload,
        writer.uint32(1754).fork()
      ).ldelim();
    }
    if (message.payload?.$case === 'registrationPeriodAddedPayload') {
      RegistrationPeriodAddedPayload.encode(
        message.payload.registrationPeriodAddedPayload,
        writer.uint32(1762).fork()
      ).ldelim();
    }
    if (message.payload?.$case === 'registrationPeriodDeletedPayload') {
      RegistrationPeriodDeletedPayload.encode(
        message.payload.registrationPeriodDeletedPayload,
        writer.uint32(1770).fork()
      ).ldelim();
    }
    if (message.payload?.$case === 'scheduleGeneratedPayload') {
      ScheduleGeneratedPayload.encode(
        message.payload.scheduleGeneratedPayload,
        writer.uint32(1778).fork()
      ).ldelim();
    }
    if (message.payload?.$case === 'stageResultSetPayload') {
      StageResultSetPayload.encode(
        message.payload.stageResultSetPayload,
        writer.uint32(1786).fork()
      ).ldelim();
    }
    if (message.payload?.$case === 'stageStatusUpdatedPayload') {
      StageStatusUpdatedPayload.encode(
        message.payload.stageStatusUpdatedPayload,
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
          message.payload = {
            $case: 'addAcademyPayload',
            addAcademyPayload: AddAcademyPayload.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        case 12:
          message.payload = {
            $case: 'addCategoryPayload',
            addCategoryPayload: AddCategoryPayload.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        case 13:
          message.payload = {
            $case: 'addCompetitorPayload',
            addCompetitorPayload: AddCompetitorPayload.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        case 14:
          message.payload = {
            $case: 'addRegistrationGroupPayload',
            addRegistrationGroupPayload: AddRegistrationGroupPayload.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        case 15:
          message.payload = {
            $case: 'addRegistrationPeriodPayload',
            addRegistrationPeriodPayload: AddRegistrationPeriodPayload.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        case 16:
          message.payload = {
            $case: 'assignRegistrationGroupCategoriesPayload',
            assignRegistrationGroupCategoriesPayload:
              AssignRegistrationGroupCategoriesPayload.decode(
                reader,
                reader.uint32()
              ),
          };
          break;
        case 17:
          message.payload = {
            $case: 'categoryRegistrationStatusChangePayload',
            categoryRegistrationStatusChangePayload:
              CategoryRegistrationStatusChangePayload.decode(
                reader,
                reader.uint32()
              ),
          };
          break;
        case 18:
          message.payload = {
            $case: 'changeCompetitorCategoryPayload',
            changeCompetitorCategoryPayload:
              ChangeCompetitorCategoryPayload.decode(reader, reader.uint32()),
          };
          break;
        case 19:
          message.payload = {
            $case: 'changeFightOrderPayload',
            changeFightOrderPayload: ChangeFightOrderPayload.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        case 110:
          message.payload = {
            $case: 'competitorCategoryAddedPayload',
            competitorCategoryAddedPayload:
              CompetitorCategoryAddedPayload.decode(reader, reader.uint32()),
          };
          break;
        case 111:
          message.payload = {
            $case: 'createCompetitionPayload',
            createCompetitionPayload: CreateCompetitionPayload.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        case 112:
          message.payload = {
            $case: 'createFakeCompetitorsPayload',
            createFakeCompetitorsPayload: CreateFakeCompetitorsPayload.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        case 113:
          message.payload = {
            $case: 'deleteRegistrationGroupPayload',
            deleteRegistrationGroupPayload:
              DeleteRegistrationGroupPayload.decode(reader, reader.uint32()),
          };
          break;
        case 114:
          message.payload = {
            $case: 'deleteRegistrationPeriodPayload',
            deleteRegistrationPeriodPayload:
              DeleteRegistrationPeriodPayload.decode(reader, reader.uint32()),
          };
          break;
        case 115:
          message.payload = {
            $case: 'fightEditorApplyChangesPayload',
            fightEditorApplyChangesPayload:
              FightEditorApplyChangesPayload.decode(reader, reader.uint32()),
          };
          break;
        case 116:
          message.payload = {
            $case: 'generateAbsoluteCategoryPayload',
            generateAbsoluteCategoryPayload:
              GenerateAbsoluteCategoryPayload.decode(reader, reader.uint32()),
          };
          break;
        case 117:
          message.payload = {
            $case: 'generateBracketsPayload',
            generateBracketsPayload: GenerateBracketsPayload.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        case 118:
          message.payload = {
            $case: 'generateCategoriesFromRestrictionsPayload',
            generateCategoriesFromRestrictionsPayload:
              GenerateCategoriesFromRestrictionsPayload.decode(
                reader,
                reader.uint32()
              ),
          };
          break;
        case 119:
          message.payload = {
            $case: 'generateSchedulePayload',
            generateSchedulePayload: GenerateSchedulePayload.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        case 120:
          message.payload = {
            $case: 'propagateCompetitorsPayload',
            propagateCompetitorsPayload: PropagateCompetitorsPayload.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        case 121:
          message.payload = {
            $case: 'registrationPeriodAddRegistrationGroupPayload',
            registrationPeriodAddRegistrationGroupPayload:
              RegistrationPeriodAddRegistrationGroupPayload.decode(
                reader,
                reader.uint32()
              ),
          };
          break;
        case 122:
          message.payload = {
            $case: 'removeAcademyPayload',
            removeAcademyPayload: RemoveAcademyPayload.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        case 123:
          message.payload = {
            $case: 'removeCompetitorPayload',
            removeCompetitorPayload: RemoveCompetitorPayload.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        case 124:
          message.payload = {
            $case: 'setFightResultPayload',
            setFightResultPayload: SetFightResultPayload.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        case 125:
          message.payload = {
            $case: 'updateAcademyPayload',
            updateAcademyPayload: UpdateAcademyPayload.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        case 126:
          message.payload = {
            $case: 'updateCompetionPropertiesPayload',
            updateCompetionPropertiesPayload:
              UpdateCompetionPropertiesPayload.decode(reader, reader.uint32()),
          };
          break;
        case 127:
          message.payload = {
            $case: 'updateCompetitorPayload',
            updateCompetitorPayload: UpdateCompetitorPayload.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        case 128:
          message.payload = {
            $case: 'updateRegistrationInfoPayload',
            updateRegistrationInfoPayload: UpdateRegistrationInfoPayload.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        case 129:
          message.payload = {
            $case: 'updateStageStatusPayload',
            updateStageStatusPayload: UpdateStageStatusPayload.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        case 21:
          message.payload = {
            $case: 'bracketsGeneratedPayload',
            bracketsGeneratedPayload: BracketsGeneratedPayload.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        case 22:
          message.payload = {
            $case: 'categoryAddedPayload',
            categoryAddedPayload: CategoryAddedPayload.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        case 23:
          message.payload = {
            $case: 'competitionCreatedPayload',
            competitionCreatedPayload: CompetitionCreatedPayload.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        case 24:
          message.payload = {
            $case: 'competitionInfoPayload',
            competitionInfoPayload: CompetitionInfoPayload.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        case 25:
          message.payload = {
            $case: 'competitionPropertiesUpdatedPayload',
            competitionPropertiesUpdatedPayload:
              CompetitionPropertiesUpdatedPayload.decode(
                reader,
                reader.uint32()
              ),
          };
          break;
        case 26:
          message.payload = {
            $case: 'competitionStatusUpdatedPayload',
            competitionStatusUpdatedPayload:
              CompetitionStatusUpdatedPayload.decode(reader, reader.uint32()),
          };
          break;
        case 27:
          message.payload = {
            $case: 'competitorAddedPayload',
            competitorAddedPayload: CompetitorAddedPayload.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        case 28:
          message.payload = {
            $case: 'competitorRemovedPayload',
            competitorRemovedPayload: CompetitorRemovedPayload.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        case 29:
          message.payload = {
            $case: 'competitorsPropagatedToStagePayload',
            competitorsPropagatedToStagePayload:
              CompetitorsPropagatedToStagePayload.decode(
                reader,
                reader.uint32()
              ),
          };
          break;
        case 210:
          message.payload = {
            $case: 'competitorUpdatedPayload',
            competitorUpdatedPayload: CompetitorUpdatedPayload.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        case 211:
          message.payload = {
            $case: 'fightCompetitorsAssignedPayload',
            fightCompetitorsAssignedPayload:
              FightCompetitorsAssignedPayload.decode(reader, reader.uint32()),
          };
          break;
        case 212:
          message.payload = {
            $case: 'fightEditorChangesAppliedPayload',
            fightEditorChangesAppliedPayload:
              FightEditorChangesAppliedPayload.decode(reader, reader.uint32()),
          };
          break;
        case 213:
          message.payload = {
            $case: 'fightsAddedToStagePayload',
            fightsAddedToStagePayload: FightsAddedToStagePayload.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        case 214:
          message.payload = {
            $case: 'fightStartTimeUpdatedPayload',
            fightStartTimeUpdatedPayload: FightStartTimeUpdatedPayload.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        case 215:
          message.payload = {
            $case: 'matsUpdatedPayload',
            matsUpdatedPayload: MatsUpdatedPayload.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        case 216:
          message.payload = {
            $case: 'registrationGroupAddedPayload',
            registrationGroupAddedPayload: RegistrationGroupAddedPayload.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        case 217:
          message.payload = {
            $case: 'registrationGroupCategoriesAssignedPayload',
            registrationGroupCategoriesAssignedPayload:
              RegistrationGroupCategoriesAssignedPayload.decode(
                reader,
                reader.uint32()
              ),
          };
          break;
        case 218:
          message.payload = {
            $case: 'registrationGroupDeletedPayload',
            registrationGroupDeletedPayload:
              RegistrationGroupDeletedPayload.decode(reader, reader.uint32()),
          };
          break;
        case 219:
          message.payload = {
            $case: 'registrationInfoUpdatedPayload',
            registrationInfoUpdatedPayload:
              RegistrationInfoUpdatedPayload.decode(reader, reader.uint32()),
          };
          break;
        case 220:
          message.payload = {
            $case: 'registrationPeriodAddedPayload',
            registrationPeriodAddedPayload:
              RegistrationPeriodAddedPayload.decode(reader, reader.uint32()),
          };
          break;
        case 221:
          message.payload = {
            $case: 'registrationPeriodDeletedPayload',
            registrationPeriodDeletedPayload:
              RegistrationPeriodDeletedPayload.decode(reader, reader.uint32()),
          };
          break;
        case 222:
          message.payload = {
            $case: 'scheduleGeneratedPayload',
            scheduleGeneratedPayload: ScheduleGeneratedPayload.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        case 223:
          message.payload = {
            $case: 'stageResultSetPayload',
            stageResultSetPayload: StageResultSetPayload.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        case 224:
          message.payload = {
            $case: 'stageStatusUpdatedPayload',
            stageStatusUpdatedPayload: StageStatusUpdatedPayload.decode(
              reader,
              reader.uint32()
            ),
          };
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
      id: isSet(object.id) ? String(object.id) : '',
      correlationId: isSet(object.correlationId)
        ? String(object.correlationId)
        : '',
      competitionId: isSet(object.competitionId)
        ? String(object.competitionId)
        : '',
      competitorId: isSet(object.competitorId)
        ? String(object.competitorId)
        : '',
      categoryId: isSet(object.categoryId) ? String(object.categoryId) : '',
      matId: isSet(object.matId) ? String(object.matId) : '',
      payload: isSet(object.addAcademyPayload)
        ? {
            $case: 'addAcademyPayload',
            addAcademyPayload: AddAcademyPayload.fromJSON(
              object.addAcademyPayload
            ),
          }
        : isSet(object.addCategoryPayload)
        ? {
            $case: 'addCategoryPayload',
            addCategoryPayload: AddCategoryPayload.fromJSON(
              object.addCategoryPayload
            ),
          }
        : isSet(object.addCompetitorPayload)
        ? {
            $case: 'addCompetitorPayload',
            addCompetitorPayload: AddCompetitorPayload.fromJSON(
              object.addCompetitorPayload
            ),
          }
        : isSet(object.addRegistrationGroupPayload)
        ? {
            $case: 'addRegistrationGroupPayload',
            addRegistrationGroupPayload: AddRegistrationGroupPayload.fromJSON(
              object.addRegistrationGroupPayload
            ),
          }
        : isSet(object.addRegistrationPeriodPayload)
        ? {
            $case: 'addRegistrationPeriodPayload',
            addRegistrationPeriodPayload: AddRegistrationPeriodPayload.fromJSON(
              object.addRegistrationPeriodPayload
            ),
          }
        : isSet(object.assignRegistrationGroupCategoriesPayload)
        ? {
            $case: 'assignRegistrationGroupCategoriesPayload',
            assignRegistrationGroupCategoriesPayload:
              AssignRegistrationGroupCategoriesPayload.fromJSON(
                object.assignRegistrationGroupCategoriesPayload
              ),
          }
        : isSet(object.categoryRegistrationStatusChangePayload)
        ? {
            $case: 'categoryRegistrationStatusChangePayload',
            categoryRegistrationStatusChangePayload:
              CategoryRegistrationStatusChangePayload.fromJSON(
                object.categoryRegistrationStatusChangePayload
              ),
          }
        : isSet(object.changeCompetitorCategoryPayload)
        ? {
            $case: 'changeCompetitorCategoryPayload',
            changeCompetitorCategoryPayload:
              ChangeCompetitorCategoryPayload.fromJSON(
                object.changeCompetitorCategoryPayload
              ),
          }
        : isSet(object.changeFightOrderPayload)
        ? {
            $case: 'changeFightOrderPayload',
            changeFightOrderPayload: ChangeFightOrderPayload.fromJSON(
              object.changeFightOrderPayload
            ),
          }
        : isSet(object.competitorCategoryAddedPayload)
        ? {
            $case: 'competitorCategoryAddedPayload',
            competitorCategoryAddedPayload:
              CompetitorCategoryAddedPayload.fromJSON(
                object.competitorCategoryAddedPayload
              ),
          }
        : isSet(object.createCompetitionPayload)
        ? {
            $case: 'createCompetitionPayload',
            createCompetitionPayload: CreateCompetitionPayload.fromJSON(
              object.createCompetitionPayload
            ),
          }
        : isSet(object.createFakeCompetitorsPayload)
        ? {
            $case: 'createFakeCompetitorsPayload',
            createFakeCompetitorsPayload: CreateFakeCompetitorsPayload.fromJSON(
              object.createFakeCompetitorsPayload
            ),
          }
        : isSet(object.deleteRegistrationGroupPayload)
        ? {
            $case: 'deleteRegistrationGroupPayload',
            deleteRegistrationGroupPayload:
              DeleteRegistrationGroupPayload.fromJSON(
                object.deleteRegistrationGroupPayload
              ),
          }
        : isSet(object.deleteRegistrationPeriodPayload)
        ? {
            $case: 'deleteRegistrationPeriodPayload',
            deleteRegistrationPeriodPayload:
              DeleteRegistrationPeriodPayload.fromJSON(
                object.deleteRegistrationPeriodPayload
              ),
          }
        : isSet(object.fightEditorApplyChangesPayload)
        ? {
            $case: 'fightEditorApplyChangesPayload',
            fightEditorApplyChangesPayload:
              FightEditorApplyChangesPayload.fromJSON(
                object.fightEditorApplyChangesPayload
              ),
          }
        : isSet(object.generateAbsoluteCategoryPayload)
        ? {
            $case: 'generateAbsoluteCategoryPayload',
            generateAbsoluteCategoryPayload:
              GenerateAbsoluteCategoryPayload.fromJSON(
                object.generateAbsoluteCategoryPayload
              ),
          }
        : isSet(object.generateBracketsPayload)
        ? {
            $case: 'generateBracketsPayload',
            generateBracketsPayload: GenerateBracketsPayload.fromJSON(
              object.generateBracketsPayload
            ),
          }
        : isSet(object.generateCategoriesFromRestrictionsPayload)
        ? {
            $case: 'generateCategoriesFromRestrictionsPayload',
            generateCategoriesFromRestrictionsPayload:
              GenerateCategoriesFromRestrictionsPayload.fromJSON(
                object.generateCategoriesFromRestrictionsPayload
              ),
          }
        : isSet(object.generateSchedulePayload)
        ? {
            $case: 'generateSchedulePayload',
            generateSchedulePayload: GenerateSchedulePayload.fromJSON(
              object.generateSchedulePayload
            ),
          }
        : isSet(object.propagateCompetitorsPayload)
        ? {
            $case: 'propagateCompetitorsPayload',
            propagateCompetitorsPayload: PropagateCompetitorsPayload.fromJSON(
              object.propagateCompetitorsPayload
            ),
          }
        : isSet(object.registrationPeriodAddRegistrationGroupPayload)
        ? {
            $case: 'registrationPeriodAddRegistrationGroupPayload',
            registrationPeriodAddRegistrationGroupPayload:
              RegistrationPeriodAddRegistrationGroupPayload.fromJSON(
                object.registrationPeriodAddRegistrationGroupPayload
              ),
          }
        : isSet(object.removeAcademyPayload)
        ? {
            $case: 'removeAcademyPayload',
            removeAcademyPayload: RemoveAcademyPayload.fromJSON(
              object.removeAcademyPayload
            ),
          }
        : isSet(object.removeCompetitorPayload)
        ? {
            $case: 'removeCompetitorPayload',
            removeCompetitorPayload: RemoveCompetitorPayload.fromJSON(
              object.removeCompetitorPayload
            ),
          }
        : isSet(object.setFightResultPayload)
        ? {
            $case: 'setFightResultPayload',
            setFightResultPayload: SetFightResultPayload.fromJSON(
              object.setFightResultPayload
            ),
          }
        : isSet(object.updateAcademyPayload)
        ? {
            $case: 'updateAcademyPayload',
            updateAcademyPayload: UpdateAcademyPayload.fromJSON(
              object.updateAcademyPayload
            ),
          }
        : isSet(object.updateCompetionPropertiesPayload)
        ? {
            $case: 'updateCompetionPropertiesPayload',
            updateCompetionPropertiesPayload:
              UpdateCompetionPropertiesPayload.fromJSON(
                object.updateCompetionPropertiesPayload
              ),
          }
        : isSet(object.updateCompetitorPayload)
        ? {
            $case: 'updateCompetitorPayload',
            updateCompetitorPayload: UpdateCompetitorPayload.fromJSON(
              object.updateCompetitorPayload
            ),
          }
        : isSet(object.updateRegistrationInfoPayload)
        ? {
            $case: 'updateRegistrationInfoPayload',
            updateRegistrationInfoPayload:
              UpdateRegistrationInfoPayload.fromJSON(
                object.updateRegistrationInfoPayload
              ),
          }
        : isSet(object.updateStageStatusPayload)
        ? {
            $case: 'updateStageStatusPayload',
            updateStageStatusPayload: UpdateStageStatusPayload.fromJSON(
              object.updateStageStatusPayload
            ),
          }
        : isSet(object.bracketsGeneratedPayload)
        ? {
            $case: 'bracketsGeneratedPayload',
            bracketsGeneratedPayload: BracketsGeneratedPayload.fromJSON(
              object.bracketsGeneratedPayload
            ),
          }
        : isSet(object.categoryAddedPayload)
        ? {
            $case: 'categoryAddedPayload',
            categoryAddedPayload: CategoryAddedPayload.fromJSON(
              object.categoryAddedPayload
            ),
          }
        : isSet(object.competitionCreatedPayload)
        ? {
            $case: 'competitionCreatedPayload',
            competitionCreatedPayload: CompetitionCreatedPayload.fromJSON(
              object.competitionCreatedPayload
            ),
          }
        : isSet(object.competitionInfoPayload)
        ? {
            $case: 'competitionInfoPayload',
            competitionInfoPayload: CompetitionInfoPayload.fromJSON(
              object.competitionInfoPayload
            ),
          }
        : isSet(object.competitionPropertiesUpdatedPayload)
        ? {
            $case: 'competitionPropertiesUpdatedPayload',
            competitionPropertiesUpdatedPayload:
              CompetitionPropertiesUpdatedPayload.fromJSON(
                object.competitionPropertiesUpdatedPayload
              ),
          }
        : isSet(object.competitionStatusUpdatedPayload)
        ? {
            $case: 'competitionStatusUpdatedPayload',
            competitionStatusUpdatedPayload:
              CompetitionStatusUpdatedPayload.fromJSON(
                object.competitionStatusUpdatedPayload
              ),
          }
        : isSet(object.competitorAddedPayload)
        ? {
            $case: 'competitorAddedPayload',
            competitorAddedPayload: CompetitorAddedPayload.fromJSON(
              object.competitorAddedPayload
            ),
          }
        : isSet(object.competitorRemovedPayload)
        ? {
            $case: 'competitorRemovedPayload',
            competitorRemovedPayload: CompetitorRemovedPayload.fromJSON(
              object.competitorRemovedPayload
            ),
          }
        : isSet(object.competitorsPropagatedToStagePayload)
        ? {
            $case: 'competitorsPropagatedToStagePayload',
            competitorsPropagatedToStagePayload:
              CompetitorsPropagatedToStagePayload.fromJSON(
                object.competitorsPropagatedToStagePayload
              ),
          }
        : isSet(object.competitorUpdatedPayload)
        ? {
            $case: 'competitorUpdatedPayload',
            competitorUpdatedPayload: CompetitorUpdatedPayload.fromJSON(
              object.competitorUpdatedPayload
            ),
          }
        : isSet(object.fightCompetitorsAssignedPayload)
        ? {
            $case: 'fightCompetitorsAssignedPayload',
            fightCompetitorsAssignedPayload:
              FightCompetitorsAssignedPayload.fromJSON(
                object.fightCompetitorsAssignedPayload
              ),
          }
        : isSet(object.fightEditorChangesAppliedPayload)
        ? {
            $case: 'fightEditorChangesAppliedPayload',
            fightEditorChangesAppliedPayload:
              FightEditorChangesAppliedPayload.fromJSON(
                object.fightEditorChangesAppliedPayload
              ),
          }
        : isSet(object.fightsAddedToStagePayload)
        ? {
            $case: 'fightsAddedToStagePayload',
            fightsAddedToStagePayload: FightsAddedToStagePayload.fromJSON(
              object.fightsAddedToStagePayload
            ),
          }
        : isSet(object.fightStartTimeUpdatedPayload)
        ? {
            $case: 'fightStartTimeUpdatedPayload',
            fightStartTimeUpdatedPayload: FightStartTimeUpdatedPayload.fromJSON(
              object.fightStartTimeUpdatedPayload
            ),
          }
        : isSet(object.matsUpdatedPayload)
        ? {
            $case: 'matsUpdatedPayload',
            matsUpdatedPayload: MatsUpdatedPayload.fromJSON(
              object.matsUpdatedPayload
            ),
          }
        : isSet(object.registrationGroupAddedPayload)
        ? {
            $case: 'registrationGroupAddedPayload',
            registrationGroupAddedPayload:
              RegistrationGroupAddedPayload.fromJSON(
                object.registrationGroupAddedPayload
              ),
          }
        : isSet(object.registrationGroupCategoriesAssignedPayload)
        ? {
            $case: 'registrationGroupCategoriesAssignedPayload',
            registrationGroupCategoriesAssignedPayload:
              RegistrationGroupCategoriesAssignedPayload.fromJSON(
                object.registrationGroupCategoriesAssignedPayload
              ),
          }
        : isSet(object.registrationGroupDeletedPayload)
        ? {
            $case: 'registrationGroupDeletedPayload',
            registrationGroupDeletedPayload:
              RegistrationGroupDeletedPayload.fromJSON(
                object.registrationGroupDeletedPayload
              ),
          }
        : isSet(object.registrationInfoUpdatedPayload)
        ? {
            $case: 'registrationInfoUpdatedPayload',
            registrationInfoUpdatedPayload:
              RegistrationInfoUpdatedPayload.fromJSON(
                object.registrationInfoUpdatedPayload
              ),
          }
        : isSet(object.registrationPeriodAddedPayload)
        ? {
            $case: 'registrationPeriodAddedPayload',
            registrationPeriodAddedPayload:
              RegistrationPeriodAddedPayload.fromJSON(
                object.registrationPeriodAddedPayload
              ),
          }
        : isSet(object.registrationPeriodDeletedPayload)
        ? {
            $case: 'registrationPeriodDeletedPayload',
            registrationPeriodDeletedPayload:
              RegistrationPeriodDeletedPayload.fromJSON(
                object.registrationPeriodDeletedPayload
              ),
          }
        : isSet(object.scheduleGeneratedPayload)
        ? {
            $case: 'scheduleGeneratedPayload',
            scheduleGeneratedPayload: ScheduleGeneratedPayload.fromJSON(
              object.scheduleGeneratedPayload
            ),
          }
        : isSet(object.stageResultSetPayload)
        ? {
            $case: 'stageResultSetPayload',
            stageResultSetPayload: StageResultSetPayload.fromJSON(
              object.stageResultSetPayload
            ),
          }
        : isSet(object.stageStatusUpdatedPayload)
        ? {
            $case: 'stageStatusUpdatedPayload',
            stageStatusUpdatedPayload: StageStatusUpdatedPayload.fromJSON(
              object.stageStatusUpdatedPayload
            ),
          }
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
    message.payload?.$case === 'addAcademyPayload' &&
      (obj.addAcademyPayload = message.payload?.addAcademyPayload
        ? AddAcademyPayload.toJSON(message.payload?.addAcademyPayload)
        : undefined);
    message.payload?.$case === 'addCategoryPayload' &&
      (obj.addCategoryPayload = message.payload?.addCategoryPayload
        ? AddCategoryPayload.toJSON(message.payload?.addCategoryPayload)
        : undefined);
    message.payload?.$case === 'addCompetitorPayload' &&
      (obj.addCompetitorPayload = message.payload?.addCompetitorPayload
        ? AddCompetitorPayload.toJSON(message.payload?.addCompetitorPayload)
        : undefined);
    message.payload?.$case === 'addRegistrationGroupPayload' &&
      (obj.addRegistrationGroupPayload = message.payload
        ?.addRegistrationGroupPayload
        ? AddRegistrationGroupPayload.toJSON(
            message.payload?.addRegistrationGroupPayload
          )
        : undefined);
    message.payload?.$case === 'addRegistrationPeriodPayload' &&
      (obj.addRegistrationPeriodPayload = message.payload
        ?.addRegistrationPeriodPayload
        ? AddRegistrationPeriodPayload.toJSON(
            message.payload?.addRegistrationPeriodPayload
          )
        : undefined);
    message.payload?.$case === 'assignRegistrationGroupCategoriesPayload' &&
      (obj.assignRegistrationGroupCategoriesPayload = message.payload
        ?.assignRegistrationGroupCategoriesPayload
        ? AssignRegistrationGroupCategoriesPayload.toJSON(
            message.payload?.assignRegistrationGroupCategoriesPayload
          )
        : undefined);
    message.payload?.$case === 'categoryRegistrationStatusChangePayload' &&
      (obj.categoryRegistrationStatusChangePayload = message.payload
        ?.categoryRegistrationStatusChangePayload
        ? CategoryRegistrationStatusChangePayload.toJSON(
            message.payload?.categoryRegistrationStatusChangePayload
          )
        : undefined);
    message.payload?.$case === 'changeCompetitorCategoryPayload' &&
      (obj.changeCompetitorCategoryPayload = message.payload
        ?.changeCompetitorCategoryPayload
        ? ChangeCompetitorCategoryPayload.toJSON(
            message.payload?.changeCompetitorCategoryPayload
          )
        : undefined);
    message.payload?.$case === 'changeFightOrderPayload' &&
      (obj.changeFightOrderPayload = message.payload?.changeFightOrderPayload
        ? ChangeFightOrderPayload.toJSON(
            message.payload?.changeFightOrderPayload
          )
        : undefined);
    message.payload?.$case === 'competitorCategoryAddedPayload' &&
      (obj.competitorCategoryAddedPayload = message.payload
        ?.competitorCategoryAddedPayload
        ? CompetitorCategoryAddedPayload.toJSON(
            message.payload?.competitorCategoryAddedPayload
          )
        : undefined);
    message.payload?.$case === 'createCompetitionPayload' &&
      (obj.createCompetitionPayload = message.payload?.createCompetitionPayload
        ? CreateCompetitionPayload.toJSON(
            message.payload?.createCompetitionPayload
          )
        : undefined);
    message.payload?.$case === 'createFakeCompetitorsPayload' &&
      (obj.createFakeCompetitorsPayload = message.payload
        ?.createFakeCompetitorsPayload
        ? CreateFakeCompetitorsPayload.toJSON(
            message.payload?.createFakeCompetitorsPayload
          )
        : undefined);
    message.payload?.$case === 'deleteRegistrationGroupPayload' &&
      (obj.deleteRegistrationGroupPayload = message.payload
        ?.deleteRegistrationGroupPayload
        ? DeleteRegistrationGroupPayload.toJSON(
            message.payload?.deleteRegistrationGroupPayload
          )
        : undefined);
    message.payload?.$case === 'deleteRegistrationPeriodPayload' &&
      (obj.deleteRegistrationPeriodPayload = message.payload
        ?.deleteRegistrationPeriodPayload
        ? DeleteRegistrationPeriodPayload.toJSON(
            message.payload?.deleteRegistrationPeriodPayload
          )
        : undefined);
    message.payload?.$case === 'fightEditorApplyChangesPayload' &&
      (obj.fightEditorApplyChangesPayload = message.payload
        ?.fightEditorApplyChangesPayload
        ? FightEditorApplyChangesPayload.toJSON(
            message.payload?.fightEditorApplyChangesPayload
          )
        : undefined);
    message.payload?.$case === 'generateAbsoluteCategoryPayload' &&
      (obj.generateAbsoluteCategoryPayload = message.payload
        ?.generateAbsoluteCategoryPayload
        ? GenerateAbsoluteCategoryPayload.toJSON(
            message.payload?.generateAbsoluteCategoryPayload
          )
        : undefined);
    message.payload?.$case === 'generateBracketsPayload' &&
      (obj.generateBracketsPayload = message.payload?.generateBracketsPayload
        ? GenerateBracketsPayload.toJSON(
            message.payload?.generateBracketsPayload
          )
        : undefined);
    message.payload?.$case === 'generateCategoriesFromRestrictionsPayload' &&
      (obj.generateCategoriesFromRestrictionsPayload = message.payload
        ?.generateCategoriesFromRestrictionsPayload
        ? GenerateCategoriesFromRestrictionsPayload.toJSON(
            message.payload?.generateCategoriesFromRestrictionsPayload
          )
        : undefined);
    message.payload?.$case === 'generateSchedulePayload' &&
      (obj.generateSchedulePayload = message.payload?.generateSchedulePayload
        ? GenerateSchedulePayload.toJSON(
            message.payload?.generateSchedulePayload
          )
        : undefined);
    message.payload?.$case === 'propagateCompetitorsPayload' &&
      (obj.propagateCompetitorsPayload = message.payload
        ?.propagateCompetitorsPayload
        ? PropagateCompetitorsPayload.toJSON(
            message.payload?.propagateCompetitorsPayload
          )
        : undefined);
    message.payload?.$case ===
      'registrationPeriodAddRegistrationGroupPayload' &&
      (obj.registrationPeriodAddRegistrationGroupPayload = message.payload
        ?.registrationPeriodAddRegistrationGroupPayload
        ? RegistrationPeriodAddRegistrationGroupPayload.toJSON(
            message.payload?.registrationPeriodAddRegistrationGroupPayload
          )
        : undefined);
    message.payload?.$case === 'removeAcademyPayload' &&
      (obj.removeAcademyPayload = message.payload?.removeAcademyPayload
        ? RemoveAcademyPayload.toJSON(message.payload?.removeAcademyPayload)
        : undefined);
    message.payload?.$case === 'removeCompetitorPayload' &&
      (obj.removeCompetitorPayload = message.payload?.removeCompetitorPayload
        ? RemoveCompetitorPayload.toJSON(
            message.payload?.removeCompetitorPayload
          )
        : undefined);
    message.payload?.$case === 'setFightResultPayload' &&
      (obj.setFightResultPayload = message.payload?.setFightResultPayload
        ? SetFightResultPayload.toJSON(message.payload?.setFightResultPayload)
        : undefined);
    message.payload?.$case === 'updateAcademyPayload' &&
      (obj.updateAcademyPayload = message.payload?.updateAcademyPayload
        ? UpdateAcademyPayload.toJSON(message.payload?.updateAcademyPayload)
        : undefined);
    message.payload?.$case === 'updateCompetionPropertiesPayload' &&
      (obj.updateCompetionPropertiesPayload = message.payload
        ?.updateCompetionPropertiesPayload
        ? UpdateCompetionPropertiesPayload.toJSON(
            message.payload?.updateCompetionPropertiesPayload
          )
        : undefined);
    message.payload?.$case === 'updateCompetitorPayload' &&
      (obj.updateCompetitorPayload = message.payload?.updateCompetitorPayload
        ? UpdateCompetitorPayload.toJSON(
            message.payload?.updateCompetitorPayload
          )
        : undefined);
    message.payload?.$case === 'updateRegistrationInfoPayload' &&
      (obj.updateRegistrationInfoPayload = message.payload
        ?.updateRegistrationInfoPayload
        ? UpdateRegistrationInfoPayload.toJSON(
            message.payload?.updateRegistrationInfoPayload
          )
        : undefined);
    message.payload?.$case === 'updateStageStatusPayload' &&
      (obj.updateStageStatusPayload = message.payload?.updateStageStatusPayload
        ? UpdateStageStatusPayload.toJSON(
            message.payload?.updateStageStatusPayload
          )
        : undefined);
    message.payload?.$case === 'bracketsGeneratedPayload' &&
      (obj.bracketsGeneratedPayload = message.payload?.bracketsGeneratedPayload
        ? BracketsGeneratedPayload.toJSON(
            message.payload?.bracketsGeneratedPayload
          )
        : undefined);
    message.payload?.$case === 'categoryAddedPayload' &&
      (obj.categoryAddedPayload = message.payload?.categoryAddedPayload
        ? CategoryAddedPayload.toJSON(message.payload?.categoryAddedPayload)
        : undefined);
    message.payload?.$case === 'competitionCreatedPayload' &&
      (obj.competitionCreatedPayload = message.payload
        ?.competitionCreatedPayload
        ? CompetitionCreatedPayload.toJSON(
            message.payload?.competitionCreatedPayload
          )
        : undefined);
    message.payload?.$case === 'competitionInfoPayload' &&
      (obj.competitionInfoPayload = message.payload?.competitionInfoPayload
        ? CompetitionInfoPayload.toJSON(message.payload?.competitionInfoPayload)
        : undefined);
    message.payload?.$case === 'competitionPropertiesUpdatedPayload' &&
      (obj.competitionPropertiesUpdatedPayload = message.payload
        ?.competitionPropertiesUpdatedPayload
        ? CompetitionPropertiesUpdatedPayload.toJSON(
            message.payload?.competitionPropertiesUpdatedPayload
          )
        : undefined);
    message.payload?.$case === 'competitionStatusUpdatedPayload' &&
      (obj.competitionStatusUpdatedPayload = message.payload
        ?.competitionStatusUpdatedPayload
        ? CompetitionStatusUpdatedPayload.toJSON(
            message.payload?.competitionStatusUpdatedPayload
          )
        : undefined);
    message.payload?.$case === 'competitorAddedPayload' &&
      (obj.competitorAddedPayload = message.payload?.competitorAddedPayload
        ? CompetitorAddedPayload.toJSON(message.payload?.competitorAddedPayload)
        : undefined);
    message.payload?.$case === 'competitorRemovedPayload' &&
      (obj.competitorRemovedPayload = message.payload?.competitorRemovedPayload
        ? CompetitorRemovedPayload.toJSON(
            message.payload?.competitorRemovedPayload
          )
        : undefined);
    message.payload?.$case === 'competitorsPropagatedToStagePayload' &&
      (obj.competitorsPropagatedToStagePayload = message.payload
        ?.competitorsPropagatedToStagePayload
        ? CompetitorsPropagatedToStagePayload.toJSON(
            message.payload?.competitorsPropagatedToStagePayload
          )
        : undefined);
    message.payload?.$case === 'competitorUpdatedPayload' &&
      (obj.competitorUpdatedPayload = message.payload?.competitorUpdatedPayload
        ? CompetitorUpdatedPayload.toJSON(
            message.payload?.competitorUpdatedPayload
          )
        : undefined);
    message.payload?.$case === 'fightCompetitorsAssignedPayload' &&
      (obj.fightCompetitorsAssignedPayload = message.payload
        ?.fightCompetitorsAssignedPayload
        ? FightCompetitorsAssignedPayload.toJSON(
            message.payload?.fightCompetitorsAssignedPayload
          )
        : undefined);
    message.payload?.$case === 'fightEditorChangesAppliedPayload' &&
      (obj.fightEditorChangesAppliedPayload = message.payload
        ?.fightEditorChangesAppliedPayload
        ? FightEditorChangesAppliedPayload.toJSON(
            message.payload?.fightEditorChangesAppliedPayload
          )
        : undefined);
    message.payload?.$case === 'fightsAddedToStagePayload' &&
      (obj.fightsAddedToStagePayload = message.payload
        ?.fightsAddedToStagePayload
        ? FightsAddedToStagePayload.toJSON(
            message.payload?.fightsAddedToStagePayload
          )
        : undefined);
    message.payload?.$case === 'fightStartTimeUpdatedPayload' &&
      (obj.fightStartTimeUpdatedPayload = message.payload
        ?.fightStartTimeUpdatedPayload
        ? FightStartTimeUpdatedPayload.toJSON(
            message.payload?.fightStartTimeUpdatedPayload
          )
        : undefined);
    message.payload?.$case === 'matsUpdatedPayload' &&
      (obj.matsUpdatedPayload = message.payload?.matsUpdatedPayload
        ? MatsUpdatedPayload.toJSON(message.payload?.matsUpdatedPayload)
        : undefined);
    message.payload?.$case === 'registrationGroupAddedPayload' &&
      (obj.registrationGroupAddedPayload = message.payload
        ?.registrationGroupAddedPayload
        ? RegistrationGroupAddedPayload.toJSON(
            message.payload?.registrationGroupAddedPayload
          )
        : undefined);
    message.payload?.$case === 'registrationGroupCategoriesAssignedPayload' &&
      (obj.registrationGroupCategoriesAssignedPayload = message.payload
        ?.registrationGroupCategoriesAssignedPayload
        ? RegistrationGroupCategoriesAssignedPayload.toJSON(
            message.payload?.registrationGroupCategoriesAssignedPayload
          )
        : undefined);
    message.payload?.$case === 'registrationGroupDeletedPayload' &&
      (obj.registrationGroupDeletedPayload = message.payload
        ?.registrationGroupDeletedPayload
        ? RegistrationGroupDeletedPayload.toJSON(
            message.payload?.registrationGroupDeletedPayload
          )
        : undefined);
    message.payload?.$case === 'registrationInfoUpdatedPayload' &&
      (obj.registrationInfoUpdatedPayload = message.payload
        ?.registrationInfoUpdatedPayload
        ? RegistrationInfoUpdatedPayload.toJSON(
            message.payload?.registrationInfoUpdatedPayload
          )
        : undefined);
    message.payload?.$case === 'registrationPeriodAddedPayload' &&
      (obj.registrationPeriodAddedPayload = message.payload
        ?.registrationPeriodAddedPayload
        ? RegistrationPeriodAddedPayload.toJSON(
            message.payload?.registrationPeriodAddedPayload
          )
        : undefined);
    message.payload?.$case === 'registrationPeriodDeletedPayload' &&
      (obj.registrationPeriodDeletedPayload = message.payload
        ?.registrationPeriodDeletedPayload
        ? RegistrationPeriodDeletedPayload.toJSON(
            message.payload?.registrationPeriodDeletedPayload
          )
        : undefined);
    message.payload?.$case === 'scheduleGeneratedPayload' &&
      (obj.scheduleGeneratedPayload = message.payload?.scheduleGeneratedPayload
        ? ScheduleGeneratedPayload.toJSON(
            message.payload?.scheduleGeneratedPayload
          )
        : undefined);
    message.payload?.$case === 'stageResultSetPayload' &&
      (obj.stageResultSetPayload = message.payload?.stageResultSetPayload
        ? StageResultSetPayload.toJSON(message.payload?.stageResultSetPayload)
        : undefined);
    message.payload?.$case === 'stageStatusUpdatedPayload' &&
      (obj.stageStatusUpdatedPayload = message.payload
        ?.stageStatusUpdatedPayload
        ? StageStatusUpdatedPayload.toJSON(
            message.payload?.stageStatusUpdatedPayload
          )
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MessageInfo>, I>>(
    object: I
  ): MessageInfo {
    const message = createBaseMessageInfo();
    message.id = object.id ?? '';
    message.correlationId = object.correlationId ?? '';
    message.competitionId = object.competitionId ?? '';
    message.competitorId = object.competitorId ?? '';
    message.categoryId = object.categoryId ?? '';
    message.matId = object.matId ?? '';
    if (
      object.payload?.$case === 'addAcademyPayload' &&
      object.payload?.addAcademyPayload !== undefined &&
      object.payload?.addAcademyPayload !== null
    ) {
      message.payload = {
        $case: 'addAcademyPayload',
        addAcademyPayload: AddAcademyPayload.fromPartial(
          object.payload.addAcademyPayload
        ),
      };
    }
    if (
      object.payload?.$case === 'addCategoryPayload' &&
      object.payload?.addCategoryPayload !== undefined &&
      object.payload?.addCategoryPayload !== null
    ) {
      message.payload = {
        $case: 'addCategoryPayload',
        addCategoryPayload: AddCategoryPayload.fromPartial(
          object.payload.addCategoryPayload
        ),
      };
    }
    if (
      object.payload?.$case === 'addCompetitorPayload' &&
      object.payload?.addCompetitorPayload !== undefined &&
      object.payload?.addCompetitorPayload !== null
    ) {
      message.payload = {
        $case: 'addCompetitorPayload',
        addCompetitorPayload: AddCompetitorPayload.fromPartial(
          object.payload.addCompetitorPayload
        ),
      };
    }
    if (
      object.payload?.$case === 'addRegistrationGroupPayload' &&
      object.payload?.addRegistrationGroupPayload !== undefined &&
      object.payload?.addRegistrationGroupPayload !== null
    ) {
      message.payload = {
        $case: 'addRegistrationGroupPayload',
        addRegistrationGroupPayload: AddRegistrationGroupPayload.fromPartial(
          object.payload.addRegistrationGroupPayload
        ),
      };
    }
    if (
      object.payload?.$case === 'addRegistrationPeriodPayload' &&
      object.payload?.addRegistrationPeriodPayload !== undefined &&
      object.payload?.addRegistrationPeriodPayload !== null
    ) {
      message.payload = {
        $case: 'addRegistrationPeriodPayload',
        addRegistrationPeriodPayload: AddRegistrationPeriodPayload.fromPartial(
          object.payload.addRegistrationPeriodPayload
        ),
      };
    }
    if (
      object.payload?.$case === 'assignRegistrationGroupCategoriesPayload' &&
      object.payload?.assignRegistrationGroupCategoriesPayload !== undefined &&
      object.payload?.assignRegistrationGroupCategoriesPayload !== null
    ) {
      message.payload = {
        $case: 'assignRegistrationGroupCategoriesPayload',
        assignRegistrationGroupCategoriesPayload:
          AssignRegistrationGroupCategoriesPayload.fromPartial(
            object.payload.assignRegistrationGroupCategoriesPayload
          ),
      };
    }
    if (
      object.payload?.$case === 'categoryRegistrationStatusChangePayload' &&
      object.payload?.categoryRegistrationStatusChangePayload !== undefined &&
      object.payload?.categoryRegistrationStatusChangePayload !== null
    ) {
      message.payload = {
        $case: 'categoryRegistrationStatusChangePayload',
        categoryRegistrationStatusChangePayload:
          CategoryRegistrationStatusChangePayload.fromPartial(
            object.payload.categoryRegistrationStatusChangePayload
          ),
      };
    }
    if (
      object.payload?.$case === 'changeCompetitorCategoryPayload' &&
      object.payload?.changeCompetitorCategoryPayload !== undefined &&
      object.payload?.changeCompetitorCategoryPayload !== null
    ) {
      message.payload = {
        $case: 'changeCompetitorCategoryPayload',
        changeCompetitorCategoryPayload:
          ChangeCompetitorCategoryPayload.fromPartial(
            object.payload.changeCompetitorCategoryPayload
          ),
      };
    }
    if (
      object.payload?.$case === 'changeFightOrderPayload' &&
      object.payload?.changeFightOrderPayload !== undefined &&
      object.payload?.changeFightOrderPayload !== null
    ) {
      message.payload = {
        $case: 'changeFightOrderPayload',
        changeFightOrderPayload: ChangeFightOrderPayload.fromPartial(
          object.payload.changeFightOrderPayload
        ),
      };
    }
    if (
      object.payload?.$case === 'competitorCategoryAddedPayload' &&
      object.payload?.competitorCategoryAddedPayload !== undefined &&
      object.payload?.competitorCategoryAddedPayload !== null
    ) {
      message.payload = {
        $case: 'competitorCategoryAddedPayload',
        competitorCategoryAddedPayload:
          CompetitorCategoryAddedPayload.fromPartial(
            object.payload.competitorCategoryAddedPayload
          ),
      };
    }
    if (
      object.payload?.$case === 'createCompetitionPayload' &&
      object.payload?.createCompetitionPayload !== undefined &&
      object.payload?.createCompetitionPayload !== null
    ) {
      message.payload = {
        $case: 'createCompetitionPayload',
        createCompetitionPayload: CreateCompetitionPayload.fromPartial(
          object.payload.createCompetitionPayload
        ),
      };
    }
    if (
      object.payload?.$case === 'createFakeCompetitorsPayload' &&
      object.payload?.createFakeCompetitorsPayload !== undefined &&
      object.payload?.createFakeCompetitorsPayload !== null
    ) {
      message.payload = {
        $case: 'createFakeCompetitorsPayload',
        createFakeCompetitorsPayload: CreateFakeCompetitorsPayload.fromPartial(
          object.payload.createFakeCompetitorsPayload
        ),
      };
    }
    if (
      object.payload?.$case === 'deleteRegistrationGroupPayload' &&
      object.payload?.deleteRegistrationGroupPayload !== undefined &&
      object.payload?.deleteRegistrationGroupPayload !== null
    ) {
      message.payload = {
        $case: 'deleteRegistrationGroupPayload',
        deleteRegistrationGroupPayload:
          DeleteRegistrationGroupPayload.fromPartial(
            object.payload.deleteRegistrationGroupPayload
          ),
      };
    }
    if (
      object.payload?.$case === 'deleteRegistrationPeriodPayload' &&
      object.payload?.deleteRegistrationPeriodPayload !== undefined &&
      object.payload?.deleteRegistrationPeriodPayload !== null
    ) {
      message.payload = {
        $case: 'deleteRegistrationPeriodPayload',
        deleteRegistrationPeriodPayload:
          DeleteRegistrationPeriodPayload.fromPartial(
            object.payload.deleteRegistrationPeriodPayload
          ),
      };
    }
    if (
      object.payload?.$case === 'fightEditorApplyChangesPayload' &&
      object.payload?.fightEditorApplyChangesPayload !== undefined &&
      object.payload?.fightEditorApplyChangesPayload !== null
    ) {
      message.payload = {
        $case: 'fightEditorApplyChangesPayload',
        fightEditorApplyChangesPayload:
          FightEditorApplyChangesPayload.fromPartial(
            object.payload.fightEditorApplyChangesPayload
          ),
      };
    }
    if (
      object.payload?.$case === 'generateAbsoluteCategoryPayload' &&
      object.payload?.generateAbsoluteCategoryPayload !== undefined &&
      object.payload?.generateAbsoluteCategoryPayload !== null
    ) {
      message.payload = {
        $case: 'generateAbsoluteCategoryPayload',
        generateAbsoluteCategoryPayload:
          GenerateAbsoluteCategoryPayload.fromPartial(
            object.payload.generateAbsoluteCategoryPayload
          ),
      };
    }
    if (
      object.payload?.$case === 'generateBracketsPayload' &&
      object.payload?.generateBracketsPayload !== undefined &&
      object.payload?.generateBracketsPayload !== null
    ) {
      message.payload = {
        $case: 'generateBracketsPayload',
        generateBracketsPayload: GenerateBracketsPayload.fromPartial(
          object.payload.generateBracketsPayload
        ),
      };
    }
    if (
      object.payload?.$case === 'generateCategoriesFromRestrictionsPayload' &&
      object.payload?.generateCategoriesFromRestrictionsPayload !== undefined &&
      object.payload?.generateCategoriesFromRestrictionsPayload !== null
    ) {
      message.payload = {
        $case: 'generateCategoriesFromRestrictionsPayload',
        generateCategoriesFromRestrictionsPayload:
          GenerateCategoriesFromRestrictionsPayload.fromPartial(
            object.payload.generateCategoriesFromRestrictionsPayload
          ),
      };
    }
    if (
      object.payload?.$case === 'generateSchedulePayload' &&
      object.payload?.generateSchedulePayload !== undefined &&
      object.payload?.generateSchedulePayload !== null
    ) {
      message.payload = {
        $case: 'generateSchedulePayload',
        generateSchedulePayload: GenerateSchedulePayload.fromPartial(
          object.payload.generateSchedulePayload
        ),
      };
    }
    if (
      object.payload?.$case === 'propagateCompetitorsPayload' &&
      object.payload?.propagateCompetitorsPayload !== undefined &&
      object.payload?.propagateCompetitorsPayload !== null
    ) {
      message.payload = {
        $case: 'propagateCompetitorsPayload',
        propagateCompetitorsPayload: PropagateCompetitorsPayload.fromPartial(
          object.payload.propagateCompetitorsPayload
        ),
      };
    }
    if (
      object.payload?.$case ===
        'registrationPeriodAddRegistrationGroupPayload' &&
      object.payload?.registrationPeriodAddRegistrationGroupPayload !==
        undefined &&
      object.payload?.registrationPeriodAddRegistrationGroupPayload !== null
    ) {
      message.payload = {
        $case: 'registrationPeriodAddRegistrationGroupPayload',
        registrationPeriodAddRegistrationGroupPayload:
          RegistrationPeriodAddRegistrationGroupPayload.fromPartial(
            object.payload.registrationPeriodAddRegistrationGroupPayload
          ),
      };
    }
    if (
      object.payload?.$case === 'removeAcademyPayload' &&
      object.payload?.removeAcademyPayload !== undefined &&
      object.payload?.removeAcademyPayload !== null
    ) {
      message.payload = {
        $case: 'removeAcademyPayload',
        removeAcademyPayload: RemoveAcademyPayload.fromPartial(
          object.payload.removeAcademyPayload
        ),
      };
    }
    if (
      object.payload?.$case === 'removeCompetitorPayload' &&
      object.payload?.removeCompetitorPayload !== undefined &&
      object.payload?.removeCompetitorPayload !== null
    ) {
      message.payload = {
        $case: 'removeCompetitorPayload',
        removeCompetitorPayload: RemoveCompetitorPayload.fromPartial(
          object.payload.removeCompetitorPayload
        ),
      };
    }
    if (
      object.payload?.$case === 'setFightResultPayload' &&
      object.payload?.setFightResultPayload !== undefined &&
      object.payload?.setFightResultPayload !== null
    ) {
      message.payload = {
        $case: 'setFightResultPayload',
        setFightResultPayload: SetFightResultPayload.fromPartial(
          object.payload.setFightResultPayload
        ),
      };
    }
    if (
      object.payload?.$case === 'updateAcademyPayload' &&
      object.payload?.updateAcademyPayload !== undefined &&
      object.payload?.updateAcademyPayload !== null
    ) {
      message.payload = {
        $case: 'updateAcademyPayload',
        updateAcademyPayload: UpdateAcademyPayload.fromPartial(
          object.payload.updateAcademyPayload
        ),
      };
    }
    if (
      object.payload?.$case === 'updateCompetionPropertiesPayload' &&
      object.payload?.updateCompetionPropertiesPayload !== undefined &&
      object.payload?.updateCompetionPropertiesPayload !== null
    ) {
      message.payload = {
        $case: 'updateCompetionPropertiesPayload',
        updateCompetionPropertiesPayload:
          UpdateCompetionPropertiesPayload.fromPartial(
            object.payload.updateCompetionPropertiesPayload
          ),
      };
    }
    if (
      object.payload?.$case === 'updateCompetitorPayload' &&
      object.payload?.updateCompetitorPayload !== undefined &&
      object.payload?.updateCompetitorPayload !== null
    ) {
      message.payload = {
        $case: 'updateCompetitorPayload',
        updateCompetitorPayload: UpdateCompetitorPayload.fromPartial(
          object.payload.updateCompetitorPayload
        ),
      };
    }
    if (
      object.payload?.$case === 'updateRegistrationInfoPayload' &&
      object.payload?.updateRegistrationInfoPayload !== undefined &&
      object.payload?.updateRegistrationInfoPayload !== null
    ) {
      message.payload = {
        $case: 'updateRegistrationInfoPayload',
        updateRegistrationInfoPayload:
          UpdateRegistrationInfoPayload.fromPartial(
            object.payload.updateRegistrationInfoPayload
          ),
      };
    }
    if (
      object.payload?.$case === 'updateStageStatusPayload' &&
      object.payload?.updateStageStatusPayload !== undefined &&
      object.payload?.updateStageStatusPayload !== null
    ) {
      message.payload = {
        $case: 'updateStageStatusPayload',
        updateStageStatusPayload: UpdateStageStatusPayload.fromPartial(
          object.payload.updateStageStatusPayload
        ),
      };
    }
    if (
      object.payload?.$case === 'bracketsGeneratedPayload' &&
      object.payload?.bracketsGeneratedPayload !== undefined &&
      object.payload?.bracketsGeneratedPayload !== null
    ) {
      message.payload = {
        $case: 'bracketsGeneratedPayload',
        bracketsGeneratedPayload: BracketsGeneratedPayload.fromPartial(
          object.payload.bracketsGeneratedPayload
        ),
      };
    }
    if (
      object.payload?.$case === 'categoryAddedPayload' &&
      object.payload?.categoryAddedPayload !== undefined &&
      object.payload?.categoryAddedPayload !== null
    ) {
      message.payload = {
        $case: 'categoryAddedPayload',
        categoryAddedPayload: CategoryAddedPayload.fromPartial(
          object.payload.categoryAddedPayload
        ),
      };
    }
    if (
      object.payload?.$case === 'competitionCreatedPayload' &&
      object.payload?.competitionCreatedPayload !== undefined &&
      object.payload?.competitionCreatedPayload !== null
    ) {
      message.payload = {
        $case: 'competitionCreatedPayload',
        competitionCreatedPayload: CompetitionCreatedPayload.fromPartial(
          object.payload.competitionCreatedPayload
        ),
      };
    }
    if (
      object.payload?.$case === 'competitionInfoPayload' &&
      object.payload?.competitionInfoPayload !== undefined &&
      object.payload?.competitionInfoPayload !== null
    ) {
      message.payload = {
        $case: 'competitionInfoPayload',
        competitionInfoPayload: CompetitionInfoPayload.fromPartial(
          object.payload.competitionInfoPayload
        ),
      };
    }
    if (
      object.payload?.$case === 'competitionPropertiesUpdatedPayload' &&
      object.payload?.competitionPropertiesUpdatedPayload !== undefined &&
      object.payload?.competitionPropertiesUpdatedPayload !== null
    ) {
      message.payload = {
        $case: 'competitionPropertiesUpdatedPayload',
        competitionPropertiesUpdatedPayload:
          CompetitionPropertiesUpdatedPayload.fromPartial(
            object.payload.competitionPropertiesUpdatedPayload
          ),
      };
    }
    if (
      object.payload?.$case === 'competitionStatusUpdatedPayload' &&
      object.payload?.competitionStatusUpdatedPayload !== undefined &&
      object.payload?.competitionStatusUpdatedPayload !== null
    ) {
      message.payload = {
        $case: 'competitionStatusUpdatedPayload',
        competitionStatusUpdatedPayload:
          CompetitionStatusUpdatedPayload.fromPartial(
            object.payload.competitionStatusUpdatedPayload
          ),
      };
    }
    if (
      object.payload?.$case === 'competitorAddedPayload' &&
      object.payload?.competitorAddedPayload !== undefined &&
      object.payload?.competitorAddedPayload !== null
    ) {
      message.payload = {
        $case: 'competitorAddedPayload',
        competitorAddedPayload: CompetitorAddedPayload.fromPartial(
          object.payload.competitorAddedPayload
        ),
      };
    }
    if (
      object.payload?.$case === 'competitorRemovedPayload' &&
      object.payload?.competitorRemovedPayload !== undefined &&
      object.payload?.competitorRemovedPayload !== null
    ) {
      message.payload = {
        $case: 'competitorRemovedPayload',
        competitorRemovedPayload: CompetitorRemovedPayload.fromPartial(
          object.payload.competitorRemovedPayload
        ),
      };
    }
    if (
      object.payload?.$case === 'competitorsPropagatedToStagePayload' &&
      object.payload?.competitorsPropagatedToStagePayload !== undefined &&
      object.payload?.competitorsPropagatedToStagePayload !== null
    ) {
      message.payload = {
        $case: 'competitorsPropagatedToStagePayload',
        competitorsPropagatedToStagePayload:
          CompetitorsPropagatedToStagePayload.fromPartial(
            object.payload.competitorsPropagatedToStagePayload
          ),
      };
    }
    if (
      object.payload?.$case === 'competitorUpdatedPayload' &&
      object.payload?.competitorUpdatedPayload !== undefined &&
      object.payload?.competitorUpdatedPayload !== null
    ) {
      message.payload = {
        $case: 'competitorUpdatedPayload',
        competitorUpdatedPayload: CompetitorUpdatedPayload.fromPartial(
          object.payload.competitorUpdatedPayload
        ),
      };
    }
    if (
      object.payload?.$case === 'fightCompetitorsAssignedPayload' &&
      object.payload?.fightCompetitorsAssignedPayload !== undefined &&
      object.payload?.fightCompetitorsAssignedPayload !== null
    ) {
      message.payload = {
        $case: 'fightCompetitorsAssignedPayload',
        fightCompetitorsAssignedPayload:
          FightCompetitorsAssignedPayload.fromPartial(
            object.payload.fightCompetitorsAssignedPayload
          ),
      };
    }
    if (
      object.payload?.$case === 'fightEditorChangesAppliedPayload' &&
      object.payload?.fightEditorChangesAppliedPayload !== undefined &&
      object.payload?.fightEditorChangesAppliedPayload !== null
    ) {
      message.payload = {
        $case: 'fightEditorChangesAppliedPayload',
        fightEditorChangesAppliedPayload:
          FightEditorChangesAppliedPayload.fromPartial(
            object.payload.fightEditorChangesAppliedPayload
          ),
      };
    }
    if (
      object.payload?.$case === 'fightsAddedToStagePayload' &&
      object.payload?.fightsAddedToStagePayload !== undefined &&
      object.payload?.fightsAddedToStagePayload !== null
    ) {
      message.payload = {
        $case: 'fightsAddedToStagePayload',
        fightsAddedToStagePayload: FightsAddedToStagePayload.fromPartial(
          object.payload.fightsAddedToStagePayload
        ),
      };
    }
    if (
      object.payload?.$case === 'fightStartTimeUpdatedPayload' &&
      object.payload?.fightStartTimeUpdatedPayload !== undefined &&
      object.payload?.fightStartTimeUpdatedPayload !== null
    ) {
      message.payload = {
        $case: 'fightStartTimeUpdatedPayload',
        fightStartTimeUpdatedPayload: FightStartTimeUpdatedPayload.fromPartial(
          object.payload.fightStartTimeUpdatedPayload
        ),
      };
    }
    if (
      object.payload?.$case === 'matsUpdatedPayload' &&
      object.payload?.matsUpdatedPayload !== undefined &&
      object.payload?.matsUpdatedPayload !== null
    ) {
      message.payload = {
        $case: 'matsUpdatedPayload',
        matsUpdatedPayload: MatsUpdatedPayload.fromPartial(
          object.payload.matsUpdatedPayload
        ),
      };
    }
    if (
      object.payload?.$case === 'registrationGroupAddedPayload' &&
      object.payload?.registrationGroupAddedPayload !== undefined &&
      object.payload?.registrationGroupAddedPayload !== null
    ) {
      message.payload = {
        $case: 'registrationGroupAddedPayload',
        registrationGroupAddedPayload:
          RegistrationGroupAddedPayload.fromPartial(
            object.payload.registrationGroupAddedPayload
          ),
      };
    }
    if (
      object.payload?.$case === 'registrationGroupCategoriesAssignedPayload' &&
      object.payload?.registrationGroupCategoriesAssignedPayload !==
        undefined &&
      object.payload?.registrationGroupCategoriesAssignedPayload !== null
    ) {
      message.payload = {
        $case: 'registrationGroupCategoriesAssignedPayload',
        registrationGroupCategoriesAssignedPayload:
          RegistrationGroupCategoriesAssignedPayload.fromPartial(
            object.payload.registrationGroupCategoriesAssignedPayload
          ),
      };
    }
    if (
      object.payload?.$case === 'registrationGroupDeletedPayload' &&
      object.payload?.registrationGroupDeletedPayload !== undefined &&
      object.payload?.registrationGroupDeletedPayload !== null
    ) {
      message.payload = {
        $case: 'registrationGroupDeletedPayload',
        registrationGroupDeletedPayload:
          RegistrationGroupDeletedPayload.fromPartial(
            object.payload.registrationGroupDeletedPayload
          ),
      };
    }
    if (
      object.payload?.$case === 'registrationInfoUpdatedPayload' &&
      object.payload?.registrationInfoUpdatedPayload !== undefined &&
      object.payload?.registrationInfoUpdatedPayload !== null
    ) {
      message.payload = {
        $case: 'registrationInfoUpdatedPayload',
        registrationInfoUpdatedPayload:
          RegistrationInfoUpdatedPayload.fromPartial(
            object.payload.registrationInfoUpdatedPayload
          ),
      };
    }
    if (
      object.payload?.$case === 'registrationPeriodAddedPayload' &&
      object.payload?.registrationPeriodAddedPayload !== undefined &&
      object.payload?.registrationPeriodAddedPayload !== null
    ) {
      message.payload = {
        $case: 'registrationPeriodAddedPayload',
        registrationPeriodAddedPayload:
          RegistrationPeriodAddedPayload.fromPartial(
            object.payload.registrationPeriodAddedPayload
          ),
      };
    }
    if (
      object.payload?.$case === 'registrationPeriodDeletedPayload' &&
      object.payload?.registrationPeriodDeletedPayload !== undefined &&
      object.payload?.registrationPeriodDeletedPayload !== null
    ) {
      message.payload = {
        $case: 'registrationPeriodDeletedPayload',
        registrationPeriodDeletedPayload:
          RegistrationPeriodDeletedPayload.fromPartial(
            object.payload.registrationPeriodDeletedPayload
          ),
      };
    }
    if (
      object.payload?.$case === 'scheduleGeneratedPayload' &&
      object.payload?.scheduleGeneratedPayload !== undefined &&
      object.payload?.scheduleGeneratedPayload !== null
    ) {
      message.payload = {
        $case: 'scheduleGeneratedPayload',
        scheduleGeneratedPayload: ScheduleGeneratedPayload.fromPartial(
          object.payload.scheduleGeneratedPayload
        ),
      };
    }
    if (
      object.payload?.$case === 'stageResultSetPayload' &&
      object.payload?.stageResultSetPayload !== undefined &&
      object.payload?.stageResultSetPayload !== null
    ) {
      message.payload = {
        $case: 'stageResultSetPayload',
        stageResultSetPayload: StageResultSetPayload.fromPartial(
          object.payload.stageResultSetPayload
        ),
      };
    }
    if (
      object.payload?.$case === 'stageStatusUpdatedPayload' &&
      object.payload?.stageStatusUpdatedPayload !== undefined &&
      object.payload?.stageStatusUpdatedPayload !== null
    ) {
      message.payload = {
        $case: 'stageStatusUpdatedPayload',
        stageStatusUpdatedPayload: StageStatusUpdatedPayload.fromPartial(
          object.payload.stageStatusUpdatedPayload
        ),
      };
    }
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
