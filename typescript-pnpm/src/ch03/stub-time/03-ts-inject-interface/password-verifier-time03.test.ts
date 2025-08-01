import { TimeProviderInterface } from "./time-provider-interface";
import { PasswordVerifier } from "./password-verifier-time03";

const SUNDAY = 0;

class FakeTimeProvider implements TimeProviderInterface {
  private _fakeDay: number = 0;

  set fakeDay(value: number) {
    this._fakeDay = value;
  }

  getDay(): number {
    return this._fakeDay;
  }
}

describe("password verifier with interfaces", () => {
  test("on weekends, throws exceptions", () => {
    const stubTimeProvider = new FakeTimeProvider();
    stubTimeProvider.fakeDay = SUNDAY;
    const verifier = new PasswordVerifier([], stubTimeProvider);

    expect(() => verifier.verify("anything"))
      .toThrow("It's the weekend!");
  });
});