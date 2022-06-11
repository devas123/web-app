import {Event, EventType, FullAcademyInfo, PageInfo} from "@frontend-nx/protobuf";
import {AcademiesEntities, academiesEntitiesInitialState, academyInfoEntityAdapter} from "./state";
import {ACADEMIES_LOADED, ACADEMY_LOADED, ACADEMY_SELECTED} from "./actions";
import {BATCH_ACTION} from "../../event-manager/redux/event-manager-actions";
import {batchReducer} from "../../../reducers/global-reducers";

export function academyListReducer(state: AcademiesEntities = academiesEntitiesInitialState, action): AcademiesEntities {
  switch (action.type) {
    case BATCH_ACTION:
      return batchReducer(action, state, academyListReducer);
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
      const pageInfo = action.pageInfo as PageInfo;
      return academyInfoEntityAdapter.setAll(academies, {...state, pageInfo});
    }
    case ACADEMY_LOADED: {
      const academy = action.academy as FullAcademyInfo;
      return academyInfoEntityAdapter.addOne(academy, state);
    }
    default:
      return state;
  }
}
