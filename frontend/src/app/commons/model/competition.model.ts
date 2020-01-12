import {MatDescription} from '../../modules/event-manager/redux/dashboard-reducers';

export interface Period {
  id: string;
  name: string;
  startTime: Date;
  schedule: ScheduleEntry[];
  duration: number;
  fightsByMats: any;
}

export interface ScheduleEntry {
  categoryId: string;
  startTime: Date;
  numberOfFights: number;
  fightDuration: number;
}

export interface FightResult {
  draw: boolean;
  winnerId: string;
  reason: string;
}

export interface Competitor {
  id: string;
  email: string;
  userId: string;
  firstName: string;
  lastName: string;
  birthDate: Date;
  academy: Academy;
  categories: string[];
  competitionId: string;
  registrationStatus: string;
  promo: string;
}

export interface Score {
  advantages: number;
  points: number;
  penalties: number;
  competitorId: string;
}

export interface CompScore {
  id: string;
  competitor: Competitor;
  score: Score;
}

export interface Fight {
  id: string;
  category: Category;
  parentId1: string;
  parentId2: string;
  winFight: string;
  loseFight: string;
  competitionId: string;
  internalId: string;
  duration: number;
  scores: CompScore[];
  round: number;
  stage: string;
  fightResult: FightResult;
  timeToStart: boolean;
  numberInRound: number;
  mat: MatDescription;
  numberOnMat: number;
  priority: number;
  period: string;
  startTime: Date;
}

export interface Academy {
  id: string;
  name: string;
  coaches: string[];
  created: number;
}

export type RestrictionType = 'AGE' | 'SKILL' | 'WEIGHT' | 'GENDER' | 'SPORTS';

export const restrictionTypes: RestrictionType[] = [
  'AGE', 'SKILL', 'WEIGHT', 'GENDER', 'SPORTS'
];

export interface CategoryRestriction {
  id: string;
  name: string;
  type: RestrictionType;
  minValue: string;
  maxValue: string;
  unit: string;
}

export interface Category {
  id: string;
  name: string;
  restrictions: CategoryRestriction[];
  fightDuration: number;
  numberOfCompetitors: number;
  fightsNumber: number;
  registrationOpen: boolean;
}

export interface CategoryState {
  id: string;
  brackets: any;
  category: Category;
  status: string;
  numberOfCompetitors: number;
}
