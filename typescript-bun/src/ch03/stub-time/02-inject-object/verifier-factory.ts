import { PasswordVerifier } from "./password-verifier-time01";
import { RealTimeProvider } from "./time-provider";

const passwordVerifierFactory = (rules: PasswordRule[]) => {
  return new PasswordVerifier([], new RealTimeProvider().getDay);
};