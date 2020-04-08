const PROXY_CONFIG = [
  {
    context: [
      "/accounts",
      "/admin",
      "/api",
      "/uaa",
      "/competitions",
      "/compman-ws",
    ],
    target: "http://localhost:8080",
    secure: false,
    logLevel: "debug"
  },
  {
    context: [
      "/jsserver",
    ],
    target: "http://localhost:3000",
    secure: false,
    logLevel: "debug",
    pathRewrite: {
      "^/jsserver": ""
    },
  },
  {
    context: [
      "/query/api"
    ],
    target: "http://localhost:9000/",
    secure: false
  },
  {
    context: [
      "/query/api"
    ],
    target: "http://localhost:9000/",
    secure: false,
    ws: true
  }
];

module.exports = PROXY_CONFIG;
