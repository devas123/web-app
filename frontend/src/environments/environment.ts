// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  mocks: false,
  mapKey: 'AIzaSyDyawZhDP4qxWwvSQMNdjyerRyyoU6GfkM',
  dashboardErrorQueue: `/state/dashboard/errors`,
  dashboardEventQueue: `/state/dashboard/events`,
  eventQueue: `/state/events`,
  errorQueue: `/state/errors`,
  webSocketUrl: `/query/sockjs`,
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
  matFights: '/competitions/api/v1/store/matfights'
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
  compInfoTemplate: '/jsserver/infotemplate',
  categoryState: '/jsserver/categorystate',
  dashboardState: '/jsserver/dashboardstate',
  mats: '/jsserver/mats',
  matFights: '/jsserver/matfights'
};


