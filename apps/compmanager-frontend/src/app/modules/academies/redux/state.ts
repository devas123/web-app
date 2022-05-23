import {createEntityAdapter, EntityAdapter, EntityState} from "@ngrx/entity";
import {FullAcademyInfo, PageInfo} from "@frontend-nx/protobuf";
import {createFeatureSelector} from "@ngrx/store";

export const academiesFeatureKey = 'academiesFeature'

export interface AcademiesEntities extends EntityState<FullAcademyInfo> {
  selectedAcademy: string | null;
  pageInfo: PageInfo;
}

export const academyInfoEntityAdapter: EntityAdapter<FullAcademyInfo> = createEntityAdapter<FullAcademyInfo>({
  selectId: (academy: FullAcademyInfo) => academy.id,
  sortComparer: (a, b) => a.name.localeCompare(b.name)
});

export const academiesEntitiesInitialState: AcademiesEntities = academyInfoEntityAdapter.getInitialState({
  selectedAcademy: null,
  pageInfo: <PageInfo>{
    page: 0,
    total: 0
  }
});


export const academiesListState = createFeatureSelector<AcademiesEntities>(academiesFeatureKey);

