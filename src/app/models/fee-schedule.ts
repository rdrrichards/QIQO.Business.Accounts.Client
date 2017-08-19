export interface IFeeSchedule {
    feeScheduleKey: number;
    accountKey: number;
    productKey: number;
    feeScheduleStartDate: Date;
    feeScheduleEndDate: Date;
    feeScheduleTypeCode: string;
    feeScheduleValue: number;
    productDesc: string;
    productCode: string;
}
