import { DataSource } from '@angular/cdk/table';
import { MdPaginator } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';

import { IAccount, IAccountViewModel } from '../models/account';
import { AccountService } from '../services/account.service';

export class AccountDataSource extends DataSource<any> {
    constructor(private accountService: AccountService,
        private companyId: number,
        private _paginator: MdPaginator) {
        super();
    }

    /** Connect function called by the table to retrieve one stream containing the data to render. */
    connect(): Observable<IAccountViewModel[]> {
        const displayDataChanges = [
            this.accountService.dataChange,
            this._paginator.page,
        ];
        return Observable.merge(...displayDataChanges).map(() => {
            const data = this.accountService.data.slice();

            // Grab the page's slice of data.
            const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
            return data.splice(startIndex, this._paginator.pageSize);
        });
    }

    disconnect() { }
}
