interface RequestOptions {
  url?: string;
  endpoint?: string;
  method?: 'GET' | 'POST' | 'PATCH' | 'DELETE';
  headers?: Record<string, string>;
  body?: any;
}

export const request = async ({
  url = '',
  endpoint = '/',
  method = 'GET',
  headers = {
    'Content-Type': 'application/json',
  },
  body,
}: RequestOptions) => {
  const baseUrl = url || process.env.NEXT_PUBLIC_BASE_API;

  if (!baseUrl) {
    throw new Error(
      'The API URL is not defined. Check your environment variables.',
    );
  }

  if (body instanceof FormData) {
    delete headers['Content-Type'];
  } else if (
    typeof body === 'object' &&
    headers['Content-Type'] === 'application/json'
  ) {
    body = JSON.stringify(body);
  }

  const response = await fetch(`${baseUrl}${endpoint}`, {
    method,
    headers,
    body,
  });

  const contentType = response.headers.get('content-type');

  if (contentType && contentType.includes('application/json')) {
    return response.json();
  } else {
    return response.text();
  }
};

export default request;
