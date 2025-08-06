import moment from "moment";

export class RealTimeProvider {
  public getDay: DayOfWeekFn;

  constructor () {
    this.getDay = () => moment()
      .day();
  }
}

export class FakeTimeProvider {
  public getDay: DayOfWeekFn;

  constructor (fakeDay: number) {
    this.getDay = () => fakeDay;
  }
}