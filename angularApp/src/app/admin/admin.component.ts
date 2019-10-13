import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AdminService } from '../shared/admin.service';
import { Admin } from '../shared/admin.model';

declare var M: any;

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  providers: [AdminService]
})
export class AdminComponent implements OnInit {

  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.resetForm();
    this.refreshAdminList();
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.adminService.selectedAdmin = {
      _id: "",
      name: "",
      location: "",
      address: ""
    }
  }

  onSubmit(form: NgForm) {
    if (form.value._id == "" || form.value._id == null) {
      form.value._id === "";
      this.adminService.postAdmin(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshAdminList();
        M.toast({ html: 'Saved successfully', classes: 'rounded' });
      });
    }
    else {
      this.adminService.putAdmin(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshAdminList();
        M.toast({ html: 'Updated successfully', classes: 'rounded' });
      });
    }

  }

  refreshAdminList() {
    this.adminService.getAdminList().subscribe((res) => {
      this.adminService.admin = res as Admin[];
    });
  }

  onEdit(emp: Admin) {
    this.adminService.selectedAdmin = emp;
  }

  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.adminService.deleteAdmin(_id).subscribe((res) => {
        this.refreshAdminList();
        this.resetForm(form);
        M.toast({ html: 'Deleted successfully', classes: 'rounded' });
      });
    }
  }

}
