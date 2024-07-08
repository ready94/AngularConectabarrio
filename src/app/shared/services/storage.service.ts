import { Injectable } from '@angular/core';
import { EncryptionService } from './encryption.service';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private encryptSvc = new EncryptionService();

  SetDataToLocalStorage(data: any, dataName: string): boolean {
    let result = false;

    try {
      const encryptedData = this.encryptSvc.encrypt(data);
      localStorage.setItem(dataName, encryptedData);
      result = true;
    } catch {
      result = false;
    }
    return result;
  }

  GetDataFromLocalStorage(dataName: string): any {
    const data: any = localStorage.getItem(dataName);

    if (data != null) {
      const decryptedData: any = this.encryptSvc.decrypt(data);
      return decryptedData;
    } else return null;
  }

  RemoveDataFromLocalStorage(dataName: string): boolean {
    let result = false;
    try {
      localStorage.removeItem(dataName);
      result = true;
    } catch {
      result = false;
    }

    return result;
  }

  RemoveAllDataFromLocalStorage(): void {
    localStorage.clear();
  }

  SetDataToSessionStorage(data: any, dataName: string): boolean {
    let result = false;

    try {
      const encryptedData = this.encryptSvc.encrypt(data);
      sessionStorage.setItem(dataName, encryptedData);
      result = true;
    } catch {
      result = false;
    }
    return result;
  }

  GetDataFromSessionStorage(dataName: string): any {
    const data: any = sessionStorage.getItem(dataName);

    if (data != null) {
      const decryptedData: any = this.encryptSvc.decrypt(data);
      return decryptedData;
    } else return null;
  }

  RemoveDataFromSessionStorage(dataName: string): boolean {
    let result = false;
    try {
      sessionStorage.removeItem(dataName);
      result = true;
    } catch {
      result = false;
    }

    return result;
  }

  RemoveAllDataFromSessionStorage(): void {
    sessionStorage.clear();
  }
}
