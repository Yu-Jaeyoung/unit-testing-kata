import * as samples from "./fetching-samples-before";

test("", (done) => {
  samples.isWebsiteAliveWithCallback(
    (result: { success: boolean; status: string | Error; }) => {
      expect(result.success)
        .toBe(true);

      expect(result.status)
        .toBe("ok");

      done();
    },
  );
});