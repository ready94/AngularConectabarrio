import { AdminOptionModel } from '@admin/models/admin-options.model';
import { AdminService } from '@admin/services/admin.service';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-admin-left-panel',
  templateUrl: './admin-left-panel.component.html',
  styleUrl: './admin-left-panel.component.scss'
})
export class AdminLeftPanelComponent {
  
  options: AdminOptionModel[] = [];

  @Output() optionSelected = new EventEmitter<AdminOptionModel>();

  constructor(private adminSvc: AdminService) { }

  ngOnInit(): void {
    this.getOptions();
  }

  getOptions(): void {
    this.adminSvc.GetAdminOptions().subscribe({
      next: (res: AdminOptionModel[]) => {
        this.options = res;
        debugger
      }, error: (err: string) => {}
    });
  }

  selectOption(option: AdminOptionModel): void {
    this.optionSelected.emit(option);
  }
}