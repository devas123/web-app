PROXY_CONFIG = [
  {
    context: [
      "/accountsrv",
      "/competition/command",
      "/competition/scommand",
      "/query"
    ],
    target: "http://localhost:8080",
    secure: false,
    logLevel: "debug"
  },
];

module.exports = PROXY_CONFIG;
