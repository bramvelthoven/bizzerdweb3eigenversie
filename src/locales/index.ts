export  {dutch}  from './nl';
export {english} from './en';

export type localeObject = {
    locale: string,
    full: string,
}
export const localeArray: localeObject[] = [
    {
        locale: 'en',
        full: 'english'
    },
    {
        locale: 'nl',
        full: 'nederlands'
    }
]