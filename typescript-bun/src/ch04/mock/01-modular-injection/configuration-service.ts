import config from "./app-config.json";

export const getLogLevel = () => {
  return config.logLevel;
};