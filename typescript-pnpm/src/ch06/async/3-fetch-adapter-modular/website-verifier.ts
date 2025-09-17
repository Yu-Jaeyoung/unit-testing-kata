import * as network from "./network-adapter";

export const isWebsiteAlive = async() => {
  try {
    const result = await network.fetchUrlText("http://example.com");

    if (!result.ok) {
      throw result.text;
    }

    const text = result.text;

    return processFetchSuccess(text);
  } catch (err) {
    throw processFetchFail(err);
  }
};

const processFetchSuccess = (text: string) => {
  const included = text.includes("illustrative");
  if (included) {
    return { success: true, status: "ok" };
  }
  return { success: false, status: "missing text" };
};

const processFetchFail = (err: unknown) => {
  return { success: false, status: err };
};