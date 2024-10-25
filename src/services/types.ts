export interface RequestProps {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  headers?: HeadersInit;
  body?: any;
}
