import { AdminOptionModel } from '@admin/models/admin-options.model';
import { AdminService } from '@admin/services/admin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-container',
  templateUrl: './admin-container.component.html',
  styleUrl: './admin-container.component.scss'
})
export class AdminContainerComponent implements OnInit {

  _selectedOption: AdminOptionModel;

  constructor(private adminSvc: AdminService){}

  ngOnInit(): void {
  }

  selectedOption(option: AdminOptionModel): void {
    if(option)
      this._selectedOption = option;  
  }

}
