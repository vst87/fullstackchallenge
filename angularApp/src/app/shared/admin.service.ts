import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Admin } from './admin.model';

@Injectable()
export class AdminService {
  selectedAdmin: Admin;
  admin: Admin[];
  readonly baseURL = 'http://localhost:3000/admin';

  constructor(private http: HttpClient) { }

  postAdmin(admin: Admin) {
    return this.http.post(this.baseURL, admin);
  }

  getAdminList() {
    return this.http.get(this.baseURL);
  }

  putAdmin(admin: Admin) {
    return this.http.put(this.baseURL + `/${admin._id}`, admin);
  }

  deleteAdmin(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }
}
