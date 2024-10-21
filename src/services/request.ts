export const request = async ({
  endpoint = '/',
  method = 'GET',
  headers = {},
  body,
}: any) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_API;

  if (!baseUrl) {
    throw new Error(
      'Base API URL is not defined. Check your environment variables.',
    );
  }

  const response = await fetch(`${baseUrl}${endpoint}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  const contentType = response.headers.get('content-type');
  if (contentType && contentType.includes('application/json')) {
    return response.json();
  } else {
    return response.text();
  }
};

export default request;
