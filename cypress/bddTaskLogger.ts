import { Logger } from "@tsed/logger";
export class BddTaskLogger {
  private static instance: BddTaskLogger;

  private logger: Logger;

  private constructor() {}

  private initLogger() {
    this.logger = new Logger("loggerName");
    this.logger.appenders
      .set("std-log", {
        type: "stdout",
        levels: ["debug", "info", "trace"],
      })
      .set("error-log", {
        type: "stderr",
        levels: ["fatal", "error", "warn"],
        layout: {
          type: "pattern",
          pattern: "%d %p %c %X{user} %m%n",
        },
      })
      .set("all-log-file", {
        type: "file",
        filename: "./log/cypress.log",
        layout: {
          type: "json",
          separator: ",",
        },
      });
  }

  public static getInstance(): BddTaskLogger {
    if (!BddTaskLogger.instance) {
      BddTaskLogger.instance = new BddTaskLogger();
      BddTaskLogger.instance.initLogger();
    }

    return BddTaskLogger.instance;
  }

  public static log(message, severity: Severity) {
    let logger = BddTaskLogger.getInstance().logger;
    switch (severity) {
      case Severity.Debug:
        logger.debug(message);
        break;
      case Severity.Info:
        logger.info(message);
        break;
      case Severity.Trace:
        logger.trace(message);
        break;
      case Severity.Warning:
        logger.warn(message);
        break;
      case Severity.Error:
        logger.error(message);
        break;
      default:
        break;
    }
  }
}

export enum Severity {
  Debug,
  Info,
  Trace,
  Warning,
  Error,
}
