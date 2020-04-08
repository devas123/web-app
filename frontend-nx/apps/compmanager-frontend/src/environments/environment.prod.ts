export const urls = {
  commandsEndpoint: '/competitions/api/v1/command',
  commandsSyncEndpoint: '/competitions/api/v1/commandsync',
  competitionQueryEndpoint: '/query/api/v1/competition',
  competitorQueryEndpoint: '/query/api/v1/competitor',
  competitorEdpoint: '/competitions/api/v1/store/competitor',
  scheduleEndpoint: '/competitions/api/v1/store/schedule',
  categoriesEndpoint: '/competitions/api/v1/store/categories',
  competitorsEndpoint: '/competitions/api/v1/store/competitors',
  defaultCategories: '/competitions/api/v1/store/defaultcategories',
  compProperties: '/competitions/api/v1/store/comprops',
  compInfoTemplate: '/competitions/api/v1/store/infotemplate',
  categoryState: '/competitions/api/v1/store/categorystate',
  dashboardState: '/competitions/api/v1/store/dashboardstate',
  mats: '/competitions/api/v1/store/mats',
  matFights: '/competitions/api/v1/store/matfights',
  stageFights: '/competitions/api/v1/store/stagefights',
  defaultFightResults: '/competitions/api/v1/store/defaultfightresults',
  categoryStages: '/competitions/api/v1/store/stages',
  fightIdsBycategoryId: '/competitions/api/v1/store/fightsbycategories'
};

export const environment = {
  production: true,
  mocks: false,
  mapKey: 'AIzaSyDyawZhDP4qxWwvSQMNdjyerRyyoU6GfkM',
  dashboardErrorQueue: `/state/dashboard/errors`,
  dashboardEventQueue: `/state/dashboard/events`,
  eventQueue: `/state/events`,
  errorQueue: `/state/errors`,
  webSocketUrl: `/query/api/v1/sockjs/competition`,
  ...urls
};

const comprops = '/jsserver/competition';

export const mocks = {
  commandsEndpoint: '/jsserver/command',
  commandsSyncEndpoint: '/jsserver/commandsync',
  competitionQueryEndpoint: comprops,
  competitorQueryEndpoint: '/jsserver/competitor',
  competitorEdpoint: '/jsserver/competitor',
  scheduleEndpoint: '/jsserver/schedule',
  categoriesEndpoint: '/jsserver/categories',
  competitorsEndpoint: '/jsserver/competitors',
  defaultCategories: '/jsserver/defaultcategories',
  compProperties: comprops,
  categoryState: '/jsserver/categorystate',
  dashboardState: '/jsserver/dashboardstate',
  mats: '/jsserver/mats',
  matFights: '/jsserver/matfights',
  stageFights: '/jsserver/stagefights',
  defaultFightResults: '/jsserver/defaultfightresults',
  categoryStages: '/jsserver/stages',
  fightIdsBycategoryId: '/jsserver/fightsbycategories'
};
