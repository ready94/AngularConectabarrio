import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';
import Swal, { SweetAlertIcon } from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class MsgService {
  durationSeconds = 5;
  accept = 'Accept';
  cancel = 'Cancel';

  constructor(
    private snackbar: MatSnackBar,
    private translateSvc: TranslateService
  ) {}

  ShowAlertInfo(title: string, msg: string): void {
    this.showAlert(title, msg, 'info');
  }

  ShowAlertSuccess(title: string, msg: string): void {
    this.showAlert(title, msg, 'success');
  }

  ShowAlertWarning(title: string, msg: string): void {
    this.showAlert(title, msg, 'warning');
  }

  ShowAlertError(title: string, msg: string): void {
    this.showAlert(title, msg, 'error');
  }

  ShowToastSuccess(msg: string): void {
    this.showToast(msg, 'bg-success');
  }

  ShowToastWarning(msg: string): void {
    this.showToast(msg, 'bg-warning');
  }

  ShowToastError(msg: string): void {
    this.showToast(msg, 'bg-danger');
  }

  ShowAlertSuccessConfirm(
    titleConfirm: string,
    msg: string,
    acceptCallback: () => void,
    cancelCallback: () => void
  ): void {
    this.translateButtonsText(() => {
      Swal.fire({
        allowOutsideClick: false,
        title: titleConfirm,
        text: msg,
        icon: 'success',
        confirmButtonText: this.accept,
      }).then((result) => {
        if (result.value) {
          if (acceptCallback !== null) {
            acceptCallback();
          }
        }
      });
    });
  }

  ShowAlertSuccessOK(
    titleConfirm: string,
    msg: string,
    acceptCallback: () => void
  ) {
    this.translateButtonsText(() => {
      Swal.fire({
        allowOutsideClick: false,
        title: titleConfirm,
        text: msg,
        icon: 'success',
        confirmButtonText: this.accept,
      }).then((result) => {
        if (result.value) {
          if (acceptCallback !== null) {
            acceptCallback();
          }
        }
      });
    });
  }

  ShowAlertConfirm(
    titleConfirm: string,
    msg: string,
    acceptCallback: () => void,
    cancelCallback: () => void
  ): void {
    this.translateButtonsText(() => {
      Swal.fire({
        allowOutsideClick: false,
        title: titleConfirm,
        text: msg,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: this.accept,
        cancelButtonText: this.cancel,
      }).then((result) => {
        if (result.value) {
          if (acceptCallback !== null) {
            acceptCallback();
          }
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          if (cancelCallback !== null) {
            cancelCallback();
          }
        }
      });
    });
  }

  ShowAlertConfirmNoIcon(
    titleConfirm: string,
    msg: string,
    acceptCallback: () => void,
    cancelCallback: () => void
  ): void {
    this.translateButtonsText(() => {
      Swal.fire({
        allowOutsideClick: false,
        title: titleConfirm,
        text: msg,
        showCancelButton: true,
        confirmButtonText: this.accept,
        cancelButtonText: this.cancel,
      }).then((result) => {
        if (result.value) {
          if (acceptCallback !== null) {
            acceptCallback();
          }
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          if (cancelCallback !== null) {
            cancelCallback();
          }
        }
      });
    });
  }

  private showToast(message: string, pnlClass: string): void {
    this.snackbar.open(message, '', {
      duration: 3000,
      panelClass: pnlClass,
    });
  }

  private showAlert(title: string, msg: string, icon: SweetAlertIcon): void {
    Swal.fire(title, msg, icon);
  }

  private translateButtonsText(callback: () => void): void {
    this.translateSvc.get('LIBSHARED.ACCEPT').subscribe((text: string) => {
      this.accept = text;
      this.cancel = this.translateSvc.instant('LIBSHARED.CANCEL');
      if (callback !== null) callback();
    });
  }

  showAlertConfirm(
    title: string,
    msg: string,
    acceptCallback: () => void,
    cancelCallback: () => void
  ): void {
    this.translateButtonsText(() => {
      Swal.fire({
        allowOutsideClick: false,
        title: this.translateSvc.instant(!title ? ' ' : title),
        text: this.translateSvc.instant(!msg ? ' ' : msg),
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: this.translateSvc.instant('ACTIONS.ACCEPT'),
        cancelButtonText: this.translateSvc.instant('ACTIONS.CANCEL'),
      }).then((result) => {
        if (result.value) {
          if (acceptCallback !== null) {
            acceptCallback();
          }
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          if (cancelCallback !== null) {
            cancelCallback();
          }
        }
      });
    });
  }

  showAlertError(msg: string): void {
    const errTitle = this.translateSvc.instant('ERROR.ERROR');
    const errMsg = this.translateSvc.instant(!msg ? ' ' : msg);
    this.ShowAlertError(errTitle, `${errMsg}`);
  }

  showAlertSuccess(msg: string): void {
    const errTitle = this.translateSvc.instant('SUCCESS.SUCCESS');
    const errMsg = this.translateSvc.instant(!msg ? ' ' : msg);
    this.ShowAlertSuccess(errTitle, `${errMsg}`);
  }

  showAlertWarning(msg: string): void {
    const errTitle = this.translateSvc.instant('WARNING.WARNING');
    const errMsg = this.translateSvc.instant(!msg ? ' ' : msg);
    this.ShowAlertWarning(errTitle, `${errMsg}`);
  }

  showSnackBar(
    message: string | string[],
    action: string = 'ACTION.CLOSE',
    duration: number = 2750
  ): void {
    const translatedMsg = this.translateSvc.instant(!message ? ' ' : message);
    const msg =
      typeof message === 'string'
        ? translatedMsg
        : Object.values(translatedMsg).join(' ');
    this.snackbar.open(
      this.translateSvc.instant(!msg ? ' ' : msg),
      this.translateSvc.instant(action),
      {
        duration: duration,
      }
    );
  }
}
