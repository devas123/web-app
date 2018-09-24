export interface Weight {
  id: string;
  maxvalue: number;
  minvalue: number;
}

export interface AgeDivision {
  name: string;
  minimalAge: number;
  maximalAge: number;
}

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
  email: string;
  userId: string;
  firstName: string;
  lastName: string;
  birthDate: Date;
  academy: string;
  category: Category;
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

export interface Fight {
  fightId: string;
  categoryId: string;
  parentId1: string;
  parentId2: string;
  winFight: string;
  loseFight: string;
  competitionId: string;
  internalId: string;
  duration: number;
  competitors: [{ competitor: Competitor, score: Score }];
  round: number;
  stage: string;
  fightResult: FightResult;
  timeToStart: boolean;
  numberInRound: number;
  mat: number;
  numberOnMat: number;
  priority: number;
  period: string;
}

export interface Academy {
  id: string;
  name: string;
  coaches: string[];
  created: number;
}

export interface Category {
  ageDivision: AgeDivision;
  categoryId: string;
  competitionId: string;
  gender: string;
  weight: Weight;
  beltType: string;
  fightDuration: number;
  competitorsQuantity: number;
  fightsNumber: number;
}

export interface CategoryState {
  categoryId: string;
  eventNumber: number;
}
