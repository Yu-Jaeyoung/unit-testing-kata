import fetch, { Response } from "node-fetch";

const isWebsiteAlive = async() => {
  try {
    const resp = await fetch("http://example.com");

    throwIfResponseOk(resp);

    const text = await resp.text();

    return processFetchContent(text);
  } catch (err: unknown) {
    processFetchError(err);
  }
};

const throwIfResponseOk = (resp: Response) => {
  if (!resp.ok) {
    throw resp.statusText;
  }
};

// 진입점
export const processFetchContent = (text: string): { success: boolean, status: Error | string } => {
  const included = text.includes("illustrative");

  if (included) {
    return { success: true, status: "ok" };
  }

  return { success: false, status: "missing text" };
};

// 진입점
export const processFetchError = (err: unknown) => {
  throw err;
};