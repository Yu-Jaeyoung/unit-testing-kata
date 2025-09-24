import * as webVerifier from "./website-verifier";

const makeStubNetworkWithResult = (fakeResult: { ok: boolean; text: string; }) => {
  return {
    fetchUrlText: async () => {
      return fakeResult;
    },
  };
};

describe("unit test website verifier", () => {
  test("with good content, returns true", async() => {
    const stubSyncNetwork = makeStubNetworkWithResult({
      ok: true,
      text: "illustrative",
    });

    const result = await webVerifier.isWebsiteAlive(stubSyncNetwork);
    expect(result.success)
      .toBe(true);

    expect(result.status)
      .toBe("ok");
  });

  test("with bad content, returns false", async() => {
    const stubSyncNetwork = makeStubNetworkWithResult({
      ok: true,
      text: "unexpected content",
    });

    const result = await webVerifier.isWebsiteAlive(stubSyncNetwork);
    expect(result.success)
      .toBe(false);

    expect(result.status)
      .toBe("missing text");
  });
});