import { IAccount } from './account';

export interface ICompany {
    companyKey: number;
    companyCode: string;
    companyName: string;
    companyDesc: string;
    accounts: IAccount[];
}
