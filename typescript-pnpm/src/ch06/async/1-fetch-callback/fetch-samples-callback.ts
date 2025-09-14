import fetch, { Response } from "node-fetch";

export const isWebsiteAlive = (callback: (result: {
  success: boolean;
  status: string | Error;
}) => void) => {
  fetch("http://example.com")
    .then(throwOnInvalidResponse)
    .then((resp) => resp.text())
    .then((text) => {
      processFetchSuccess(text, callback);
    })
    .catch((error) => {
      processFetchError(error, callback);
    });
};

export const throwOnInvalidResponse = (resp: Response) => {
  if (!resp.ok) {
    throw Error(resp.statusText);
  }

  return resp;
};

// 진입점
export const processFetchSuccess = (
  text: string,
  callback: (result: {
    success: boolean;
    status: string | Error;
  }) => void,
) => {
  if (text.includes("illustrative")) {
    callback({ success: true, status: "ok" });
  } else {
    callback({ success: false, status: "missing text" });
  }
};

// 진입점
export const processFetchError = (
  err: string,
  callback: (result: {
    success: boolean;
    status: string | Error;
  }) => void,
) => {
  callback({ success: false, status: err });
};