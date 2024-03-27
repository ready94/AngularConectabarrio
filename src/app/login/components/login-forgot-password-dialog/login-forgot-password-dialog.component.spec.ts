import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginForgotPasswordDialogComponent } from './login-forgot-password-dialog.component';

describe('LoginForgotPasswordDialogComponent', () => {
  let component: LoginForgotPasswordDialogComponent;
  let fixture: ComponentFixture<LoginForgotPasswordDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginForgotPasswordDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginForgotPasswordDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
