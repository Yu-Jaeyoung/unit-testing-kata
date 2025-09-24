import { Network } from "./network-adapter";

export const isWebsiteAlive = async(network: typeof Network) => {
  const result = await network.fetchUrlText("http://example.com");

  if (result.ok) {
    const text = result.text;
    return onFetchSuccess(text);
  }

  return onFetchError(result.text);
};

const onFetchSuccess = (text: string) => {
  const included = text.includes("illustrative");

  if (included) {
    return { success: true, status: "ok" };
  }

  return { success: false, status: "missing text" };
};

const onFetchError = (err: unknown) => {
  return { success: false, status: err };
};