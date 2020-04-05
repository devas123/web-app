import {createFeatureSelector} from '@ngrx/store';
import {EventManagerState} from '../../../commons/model/competition.model';

export const getEventManagerState = createFeatureSelector<EventManagerState>('eventManagerState');
