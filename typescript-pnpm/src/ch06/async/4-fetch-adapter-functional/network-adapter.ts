import fetch, { Response } from "node-fetch";

const fetchUrlText = async(url: string) => {
  const resp: Response = await fetch(url);

  if (resp.ok) {
    const text = await resp.text();
    return { ok: true, text };
  }

  return { ok: false, text: resp.statusText };
};

export const Network = {
  fetchUrlText,
};