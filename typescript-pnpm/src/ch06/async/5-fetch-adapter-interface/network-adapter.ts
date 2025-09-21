export interface INetworkAdapter {
  fetchUrlText(url: string): Promise<NetworkAdapterFetchResults>;
}

export interface NetworkAdapterFetchResults {
  ok: boolean;
  text: string;
}

export class NetworkAdapter implements INetworkAdapter {
  async fetchUrlText(url: string): Promise<NetworkAdapterFetchResults> {
    const resp = await fetch(url);

    if (resp.ok) {
      const text = await resp.text();
      return Promise.resolve({ ok: true, text });
    }

    return Promise.reject({
      ok: false,
      text: resp.statusText,
    });
  }
}