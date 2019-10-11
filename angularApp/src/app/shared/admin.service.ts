import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Admin } from './admin.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor() { }
}
