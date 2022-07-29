import { ApiUrlType } from '@/@types/enum';
import { AxiosInstance } from 'axios';

export class HttpRequest {
  private service: AxiosInstance;

  constructor(service: AxiosInstance) {
    this.service = service;
  }

  get<T>(url: string) {
    return this.service.get<T>(url).then((res) => res);
  }

  post<T>(url: ApiUrlType, data: T) {
    return this.service.post(url, data);
  }

  patch<T>(url: ApiUrlType, id: number, data: T) {
    return this.service.patch(`${url}/${id}`, data);
  }

  delete<T>(url: ApiUrlType, id: number) {
    return this.service.delete(`${url}/${id}`);
  }
}
