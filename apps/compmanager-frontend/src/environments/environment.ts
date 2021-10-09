// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

const commands = "/competition/command"

export const environment = {
  production: false,
  dashboardErrorQueue: `/state/dashboard/errors`,
  dashboardEventQueue: `/state/dashboard/events`,
  eventQueue: `/state/events`,
  errorQueue: `/state/errors`,
  webSocketUrl: `/query/v1/ws`,
  commandsEndpoint: commands,
  generateCategoriesEndpoint: '/query/v1/generatecategories',
  commandsSyncEndpoint: commands,
  competitionQueryEndpoint: '/query/v1/competition',
  competitorQueryEndpoint: '/query/v1/competitor',
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
  fight: '/query/v1/fight',
  matFights: '/query/v1/matfights',
  stageFights: '/query/v1/stagefights',
  defaultFightResults: '/query/v1/defaultfightresults',
  categoryStages: '/query/v1/stages',
  registrationInfoQueryEndpoint: '/query/v1/reginfo',
  fightIdsBycategoryId: '/query/v1/fightsbycategories'
};



