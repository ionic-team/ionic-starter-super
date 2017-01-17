import { Language } from '../models/language'
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

    export const LANGUAGES: Language[] = [
        { name: 'English', code: 'en' },
        { name: 'العربية', code: 'ar' },
        { name: 'Беларускі', code: 'be' },
        { name: 'Bosanski', code: 'bs' },
        { name: 'Dansk', code: 'da' },
        { name: 'Deutsch', code: 'de' },
        { name: 'ελληνικά', code: 'el' },
        { name: 'Español', code: 'es' },
        { name: 'Español Europeo', code: 'es-eu' },
        { name: 'Pilipino', code: 'fil' },
        { name: 'Français', code: 'fr' },
        { name: 'Italiano', code: 'it' },
        { name: 'Norsk Bokmål', code: 'nb_NO' },
        { name: 'Nederlands', code: 'nl' },
        { name: 'Polski', code: 'pl' },
        { name: 'Português Brasileiro', code: 'pt-br' },
        { name: 'Português', code: 'pt-pt' },
        { name: 'Русский', code: 'ru' },
        { name: 'Slovenčina', code: 'sl' },
        { name: 'Svenska', code: 'sv' },
        { name: 'ไทย', code: 'th' },
        { name: 'Türkçe', code: 'tr' }
    ]
}
