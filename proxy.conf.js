PROXY_CONFIG = [
  {
    context: [
      "/accounts",
      "/competition/command",
      "/competition/scommand",
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
  }
];

module.exports = PROXY_CONFIG;
