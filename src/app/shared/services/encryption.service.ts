import { Injectable } from '@angular/core';
import * as CryptoJs from 'crypto-js';

const SECRET_KEY = "b4rr10";

@Injectable({
  providedIn: 'root'
})
export class EncryptionService {

  constructor() { }

  encrypt(data: any): string{
    let result = CryptoJs.AES.encrypt(JSON.stringify(data), SECRET_KEY).toString();
    result = this.convertSpecial(result);
    return result;
  }

  decrypt(data: string): any {
    data = this.unconvertSpecial(data);
    let result = CryptoJs.AES.decrypt(data, SECRET_KEY).toString(CryptoJs.enc.Utf8);
    result = JSON.parse(result);
    return result;
  }

  convertSpecial = (text: string) => {
    const convert = text
    .replace(/\+/g, "4dd1n6")
    .replace(/\//g, "b4rr4")
    .replace(/=/g, "16u41");
    return convert;
  }

  unconvertSpecial = (text: string) => {
    const unconvert = text
    .replace(/4dd1n6/g, "+")
    .replace(/b4rr4/g, "/")
    .replace(/16u41/g, "=");
    return unconvert;
  }

}
