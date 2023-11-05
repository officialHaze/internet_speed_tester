import { terminalLogger } from "@banglarthek/logger";

const logger = terminalLogger.create({
  loggerEnvironments: ["development", "production", "staging"],
});

export default logger;
