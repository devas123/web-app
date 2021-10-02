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
  generateCategoriesEndpoint: '/query/v1/store/generatecategories',
  commandsSyncEndpoint: commands,
  competitionQueryEndpoint: '/query/v1/competition',
  competitorQueryEndpoint: '/query/v1/competitor',
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
  fight: '/query/v1/store/fight',
  matFights: '/query/v1/store/matfights',
  stageFights: '/query/v1/store/stagefights',
  defaultFightResults: '/query/v1/store/defaultfightresults',
  categoryStages: '/query/v1/store/stages',
  registrationInfoQueryEndpoint: '/query/v1/store/reginfo',
  fightIdsBycategoryId: '/query/v1/store/fightsbycategories'
};



