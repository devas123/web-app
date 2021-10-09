export const urls = {
  commandsEndpoint: '/query/v1/command',
  commandsSyncEndpoint: '/query/v1/commandsync',
  competitionQueryEndpoint: '/query/v1/competition',
  competitorQueryEndpoint: '/query/v1/competitor',
  generateCategoriesEndpoint: '/query/v1/generatecategories',
  competitorEdpoint: '/query/v1/competitor',
  scheduleEndpoint: '/query/v1/schedule',
  categoriesEndpoint: '/query/v1/categories',
  competitorsEndpoint: '/query/v1/competitors',
  defaultCategories: '/query/v1/defaultrestrictions',
  compProperties: '/query/v1/comprops',
  compInfoTemplate: '/query/v1/infotemplate',
  categoryState: '/query/v1/categorystate',
  dashboardState: '/query/v1/dashboardstate',
  mats: '/query/v1/mats',
  fightResultOptions: '/query/v1/fightresultoptions',
  matFights: '/query/v1/matfights',
  stageFights: '/query/v1/stagefights',
  defaultFightResults: '/query/v1/defaultfightresults',
  categoryStages: '/query/v1/stages',
  registrationInfoQueryEndpoint: '/query/v1/reginfo',
  fight: '/query/v1/fight',
  fightIdsBycategoryId: '/query/v1/fightsbycategories'
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
