type CustomConfig = {
  method: string;
  body?: string;
  headers: {
    [key: string]: string | undefined;
  };
};

type GetOptions = {
  endpoint: string;
};

// type PostOptions = GetOptions & {
//   payload: {
//     [key: string]: number | boolean | string | Object;
//   };
// };

export interface RequestException {
  status: number;
  statusText: string;
  ok: boolean;
  redirected: boolean;
  type: string;
  url: string;
  others: any;
}
export class RequestException {
  constructor({
    ok,
    redirected,
    status,
    statusText,
    type,
    url,
    ...others
  }: Response) {
    this.ok = ok;
    this.redirected = redirected;
    this.status = status;
    this.statusText = statusText;
    this.type = type;
    this.url = url;
    this.others = others;
  }
}

const FAILED_FETCH_RETRIES = 3;

export const queryConfigDefaults = {
  refetchOnWindowFocus: false,
  retry: FAILED_FETCH_RETRIES,
};

export function isResponseSuccess(statusCode: number) {
  return statusCode >= 200 && statusCode < 300;
}

export function isResponseError(statusCode: number) {
  return statusCode >= 400;
}

export function get({ endpoint }: GetOptions) {
  const customConfig = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  return client(endpoint, customConfig) 
}

export async function client(
  endpoint: string,
  { headers: customHeaders, ...customConfig }: CustomConfig
) {

  const config = {
    ...customHeaders,
    ...customConfig,
  };

  return window
    .fetch(`/api${endpoint}`, config)
    .then(async (response) => {
      const responseInfo = {
        ok: response.ok,
        redirected: response.redirected,
        status: response.status,
        statusText: response.statusText,
        type: response.type,
        url: response.url,
      };
      try {
        const data = await response.json();
        return {
          ...responseInfo,
          responseData: data,
        };
      } catch (error) {
        return response;
      }
    });
}
