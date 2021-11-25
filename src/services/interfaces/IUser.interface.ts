import {ILocation} from "./ILocation.interface";
import {IPerson} from "./IPerson.interface";

export interface IUser {
    id: string;
    invoiceDetails: IInvoiceDetails;
    contact: IPerson;
    colleagues: IPerson[];
    locations: ILocation[];
    username: string;

}

export interface IInvoiceDetails {
    companyName: string;
    addressDetails: ILocation;
}