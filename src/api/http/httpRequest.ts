import { APIUrlType } from '@/types/common';
import { AxiosInstance } from 'axios';

export class HttpRequest {
  private service: AxiosInstance;

  constructor(service: AxiosInstance) {
    this.service = service;
  }

  get<T>(url: APIUrlType) {
    return this.service.get<T>(url).then((res) => res);
  }

  post<T>(url: APIUrlType, data: T) {
    return this.service.post(url, data);
  }

  patch<T>(url: APIUrlType, id: number, data: T) {
    return this.service.patch(`${url}/${id}`, data);
  }

  delete(url: APIUrlType, id: number) {
    return this.service.delete(`${url}/${id}`);
  }
}
