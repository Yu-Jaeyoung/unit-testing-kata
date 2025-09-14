import * as samples from "./fetch-samples-callback";

describe("Website alive checking", () => {
  test("content matches, return true", (done) => {
    samples.processFetchSuccess("illustrative", (result) => {
      expect(result.success)
        .toBe(true);
      expect(result.status)
        .toBe("ok");
      done();
    });
  });

  test("website content does not match, returns false", (done) => {
    samples.processFetchSuccess("bad content", (result) => {
      expect(result.status)
        .toBe("missing text");

      done();
    });
  });

  test("when fetch fails, returns false", (done) => {
    samples.processFetchError("error text", (result) => {
      expect(result.status)
        .toBe("error text");

      done();
    });
  });
});