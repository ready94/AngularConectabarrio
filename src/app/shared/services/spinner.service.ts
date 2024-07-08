import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { CustomSpinnerComponent } from '@shared/components/custom-spinner/custom-spinner.component';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  private overlayRef: OverlayRef = null;
  private isCurrentActive: boolean = false;
  
  constructor(private overlay: Overlay) { }

  public show(message = ''): void {
    if(!this.overlayRef){
      this.overlayRef = this.overlay.create();
    }

    const spinnerOverlayPortal = new ComponentPortal(CustomSpinnerComponent);
    const component = this.overlayRef.attach(spinnerOverlayPortal);
  }

  public hide(): void {
    if(!!this.overlayRef)
      this.overlayRef.detach();
  }

  public isActive(): boolean {
    if(this.overlayRef != null) this.isCurrentActive = this.overlayRef.hasAttached();
    else this.isCurrentActive = false;
    return this.isCurrentActive;
  }

}
