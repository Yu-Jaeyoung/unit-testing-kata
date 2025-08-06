import { ILogger } from "./interfaces/logger";

class SimpleLogger implements ILogger {
  info(text: string): void {
    // 로그 처리를 로직
  }
}