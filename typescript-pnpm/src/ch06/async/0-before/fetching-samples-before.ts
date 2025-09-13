import fetch from "node-fetch";

export const isWebsiteAliveWithCallback = (callback: (result: {
  success: boolean;
  status: string | Error;
}) => void) => {
  const website = "https://example.com";
  fetch(website)
    .then((response) => {
      if (!response.ok) {
        // how can I test this network error?
        throw Error(response.statusText);
      }

      return response;
    })
    .then((response) => response.text())
    .then((text) => {
      if (text.includes("illustrative")) {
        callback({ success: true, status: "ok" });
      } else {
        // how can I test this route?
        callback({ success: false, status: "text missing" });
      }
    })
    .catch(err => {
      // how can I test this endpoint?
      callback({ success: false, status: err });
    });
};

//async await
export const isWebsiteAliveWithAsyncAwait = async() => {
  try {
    const resp = await fetch("https://example.com");
    if (!resp.ok) {
      throw resp.statusText;
    }

    const text = await resp.text();

    const included = text.includes("illustrative");

    if (included) {
      return { success: true, status: "ok" };
    }

    // how can I test another website content?
    throw "text missing";
  } catch (err) {
    return { success: false, status: err };
  }
};
