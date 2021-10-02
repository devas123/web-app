PROXY_CONFIG = [
  {
    context: [
      "/accounts",
      "/competition/command",
    ],
    target: "http://localhost:8080",
    secure: false,
    logLevel: "debug"
  },
  {
    context: [
      "/query"
    ],
    target: "http://localhost:9000",
    secure: false,
    logLevel: "debug"
  },
  {
    context: [
      "/ws"
    ],
    target: "http://localhost:9000/query",
    secure: false,
    ws: true,
    logLevel: "debug"
  }
];

module.exports = PROXY_CONFIG;
