const commands = "/competition/command"

const urls = {
  dashboardErrorQueue: `/state/dashboard/errors`,
  dashboardEventQueue: `/state/dashboard/events`,
  eventQueue: `/state/events`,
  errorQueue: `/state/errors`,
  webSocketUrl: `/query/v1/ws`,
  commandsEndpoint: commands,
  generateCategoriesEndpoint: '/query/v1/generatecategories',
  commandsSyncEndpoint: "/competition/scommand",
  competitionQueryEndpoint: '/query/v1/competition',
  competitorQueryEndpoint: '/query/v1/competitor',
  competitorEdpoint: '/query/v1/competitor',
  scheduleEndpoint: '/query/v1/schedule',
  categoriesEndpoint: '/query/v1/categories',
  competitorsEndpoint: '/query/v1/competitors',
  defaultRestrictions: '/query/v1/defaultrestrictions',
  compProperties: '/query/v1/comprops',
  compInfoTemplate: '/query/v1/infotemplate',
  categoryState: '/query/v1/categorystate',
  dashboardState: '/query/v1/dashboardstate',
  mats: '/query/v1/mats',
  fightResultOptions: '/query/v1/fightresultoptions',
  fight: '/query/v1/fight',
  matFights: '/query/v1/matfights',
  stageFights: '/query/v1/stagefights',
  defaultFightResults: '/query/v1/defaultfightresults',
  categoryStages: '/query/v1/stages',
  registrationInfoQueryEndpoint: '/query/v1/reginfo',
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
