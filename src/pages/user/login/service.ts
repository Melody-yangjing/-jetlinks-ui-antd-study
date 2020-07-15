import request from '@/utils/request';

export async function login(params: any): Promise<any> {
  return request(`/jetlinks/authorize/login`, {
    method: 'POST',
    data: params,
  });
}

export async function logout(): Promise<any> {
  return request(`/jetlinks/user-token/reset`, {
    method: 'GET',
  });
}
