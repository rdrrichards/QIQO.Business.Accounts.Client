import { IAddress } from './address';
import { IEntityAttribute } from './entity-attribute';
import { IFeeSchedule } from './fee-schedule';
import { IEmployee } from './employee';

export interface IAccount {
    accountKey: number;
    companyKey: number;
    accountCode: string;
    accountName: string;
    accountDesc: string;
    accountDBA: string;
    accountStartDate: Date;
    accountEndDate: Date;
    addresses: IAddress[];
    accountAttributes: IEntityAttribute[];
    employees: IEmployee[];
    feeSchedules: IFeeSchedule[];
}

// export interface IAccountViewModel {
//     account: IAccount;
// }

// export class AccountViewModel implements IAccountViewModel {
//   constructor(public account: IAccount) {}
// }
