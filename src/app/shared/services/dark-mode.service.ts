import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {
  public isDarkModeEnabled?: boolean;

  constructor() {}
}
