export const request = async ({
  url = '',
  endpoint = '/',
  method = 'GET',
  headers = {},
  body,
}: any) => {
  const baseUrl = url || process.env.NEXT_PUBLIC_BASE_API;

  if (!baseUrl) {
    throw new Error(
      'The API URL is not defined. Check your environment variables.',
    );
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
