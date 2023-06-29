import {
  initializeApp,
  applicationDefault,
  getApps,
  App,
} from 'firebase-admin/app';
import { getAuth, Auth } from 'firebase-admin/auth';
import { getStorage, Storage } from 'firebase-admin/storage';

class FirebaseAdmin {
  public readonly app: App;
  public readonly auth: Auth;
  public readonly storage: Storage;

  constructor() {
    // @ts-ignore
    if (!this.app && getApps().length === 0) {
      if (process.env.APP_ENV !== 'dev') {
        this.app = initializeApp({
          credential: applicationDefault(),
          projectId: process.env.PROJECT_ID,
        });
      } else {
        this.app = initializeApp({
          projectId: process.env.PROJECT_ID,
        });
      }
    } else {
      this.app = getApps()[0];
    }

    this.auth = getAuth(this.app);
    this.storage = getStorage(this.app);
  }
}

export const firebase: FirebaseAdmin = new FirebaseAdmin();
