import {Event, EventType, FullAcademyInfo, PageInfo} from "@frontend-nx/protobuf";
import {AcademiesEntities, academiesEntitiesInitialState, academyInfoEntityAdapter} from "./state";
import {ACADEMIES_LOADED, ACADEMY_SELECTED} from "./actions";

export function academyListReducer(state: AcademiesEntities = academiesEntitiesInitialState, action): AcademiesEntities {
  switch (action.type) {
    case EventType.ACADEMY_ADDED: {
      const event = action as Event;
      return academyInfoEntityAdapter.setOne(event.messageInfo.addAcademyPayload.academy, state);
    }
    case EventType.ACADEMY_REMOVED: {
      const event = action as Event;
      return academyInfoEntityAdapter.removeOne(event.messageInfo.removeAcademyPayload.academyId, state);
    }
    case EventType.ACADEMY_UPDATED: {
      const event = action as Event;
      return academyInfoEntityAdapter.setOne(event.messageInfo.updateAcademyPayload.academy, state);
    }
    case ACADEMY_SELECTED: {
      return {...state, selectedAcademy: action.id};
    }
    case ACADEMIES_LOADED: {
      const academies = action.academies as FullAcademyInfo[];
      const pageInfo = action.academies as PageInfo;
      return academyInfoEntityAdapter.setAll(academies, {...state, pageInfo});
    }
    default:
      return state;
  }
}
