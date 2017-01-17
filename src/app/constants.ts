export namespace Constants { 
   //export class Constants {
   /* SETTINGS KEYS */
   export const STORAGE_KEY_SETTINGS: string = 'settings';
   export const STORAGE_KEY_USER: string = 'user';
   export const STORAGE_KEY_TOKEN: string = 'token';
   export const STORAGE_KEY_LOOKUPS: string = 'lookups';
   export const STORAGE_KEY_COMPANY: string = 'company';

   export const SERVER_URL: string = "http://localhost:8100";
   export const OPEN_SERVER_URL: string = "http://myapp.local:8000";
   export const DATA_SERVER_URL: string = "http://example.com/api/v1";  // NEEDS AUTHENTICATION

   export const LOOKUPS_STUB: string = "/lookup";
   export const COMPANY_URL_STUB: string = "/company";
   export const LOCATIONS_STUB: string = "/company/locationlist";
   export const USER_LOGIN_STUB: string = "/oauth/token";
}
