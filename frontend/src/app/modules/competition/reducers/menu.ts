export interface MenuItem {
  index: number,
  icon: string,
  route: string,
  text: string
}

export const brackets = {
  index: 4,
  icon: 'info icon',
  route: 'brackets',
  text: 'Brackets'
};

export const schedule = {
  index: 5,
  icon: 'info icon',
  route: 'schedule',
  text: 'Schedule'
};

export const scoreboard = {
  index: 6,
  icon: 'info icon',
  route: 'scoreboard',
  text: 'Scoreboard'
};
export const dashboard = {
  index: 7,
  icon: 'info icon',
  route: 'dashboard',
  text: 'Dashboard'
};
export const absolute = {
  index: 8,
  icon: 'info icon',
  route: 'absolute',
  text: 'Open class'
};

export const registration = {
  index: 3,
  icon: 'info icon',
  route: 'registration',
  text: 'Registration'
};

export const initialMenu: MenuItem[] = [
  {
    index: 0,
    icon: 'info icon',
    route: 'about',
    text: "Information"
  },
  {
    index: 1,
    icon: 'users icon',
    route: 'participants',
    text: "Participants"
  }
];
