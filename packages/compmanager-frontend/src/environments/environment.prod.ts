export const urls = {
  commandsEndpoint: '/query/v1/command',
  commandsSyncEndpoint: '/query/v1/commandsync',
  competitionQueryEndpoint: '/query/v1/competition',
  competitorQueryEndpoint: '/query/v1/competitor',
  generateCategoriesEndpoint: '/query/v1/store/generatecategories',
  competitorEdpoint: '/query/v1/store/competitor',
  scheduleEndpoint: '/query/v1/store/schedule',
  categoriesEndpoint: '/query/v1/store/categories',
  competitorsEndpoint: '/query/v1/store/competitors',
  defaultCategories: '/query/v1/store/defaultrestrictions',
  compProperties: '/query/v1/store/comprops',
  compInfoTemplate: '/query/v1/store/infotemplate',
  categoryState: '/query/v1/store/categorystate',
  dashboardState: '/query/v1/store/dashboardstate',
  mats: '/query/v1/store/mats',
  fightResultOptions: '/query/v1/store/fightresultoptions',
  matFights: '/query/v1/store/matfights',
  stageFights: '/query/v1/store/stagefights',
  defaultFightResults: '/query/v1/store/defaultfightresults',
  categoryStages: '/query/v1/store/stages',
  registrationInfoQueryEndpoint: '/query/v1/store/reginfo',
  fight: '/query/v1/store/fight',
  fightIdsBycategoryId: '/query/v1/store/fightsbycategories'
};

export const environment = {
  production: true,
  mapKey: '',
  dashboardErrorQueue: `/state/dashboard/errors`,
  dashboardEventQueue: `/state/dashboard/events`,
  eventQueue: `/state/events`,
  errorQueue: `/state/errors`,
  webSocketUrl: `/query/v1/ws`,
  ...urls
};
