import { beforeEach } from "node:test";

jest.mock("./network-adapter");

import * as syncNetwork from "./network-adapter";
import * as webVerifier from "./website-verifier";

const stubSyncNetwork = jest.mocked(syncNetwork);

describe("unit test website verifier", () => {
  beforeEach(jest.resetAllMocks);

  test("with good content, returns true", async() => {
    stubSyncNetwork.fetchUrlText.mockResolvedValue({
      ok: true,
      text: "illustrative",
    });

    const result = await webVerifier.isWebsiteAlive();
    expect(result.success)
      .toBe(true);

    expect(result.status)
      .toBe("ok");
  });

  test("with bad content, returns false", async() => {
    stubSyncNetwork.fetchUrlText.mockResolvedValue({
      ok: true,
      text: "<span>hello world</span>",
    });

    const result = await webVerifier.isWebsiteAlive();
    expect(result.success)
      .toBe(false);

    expect(result.status)
      .toBe("missing text");
  });
});