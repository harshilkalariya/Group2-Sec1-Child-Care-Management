import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";

@Injectable({
  providedIn: "root"
})
export class LocalStorageService {
  constructor(private storage: Storage) { }

  async setValue(key, value) {
    await this.storage.set(key, value);
  }

  async getValue(key) {
    const data = await this.storage.get(key);
    return data;
  }

  async removeValue(key) {
    await this.storage.remove(key);
  }

  async clearStore() {
    await this.storage.clear();
  }
}
