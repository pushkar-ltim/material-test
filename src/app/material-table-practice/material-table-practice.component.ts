import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-material-table-practice',
  templateUrl: './material-table-practice.component.html',
  styleUrls: ['./material-table-practice.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush 
})
export class MaterialTablePracticeComponent implements OnInit {

  constructor(private cd: ChangeDetectorRef) { }




  @ViewChild(MatTable) table?: MatTable<HoldingRow>;

  //dataSource = HOLDINGS_DATA;
  dataSource = new MatTableDataSource<HoldingRow>();
  originalData: any[] = HOLDINGS_DATA;

  expandedElement: Holding | null | undefined;

  displayedColumns = [
    'name',
    'qty',
    'value',
    'sedol',
    'qty',
    'value',
    'sedol',
    'qty',
    'value',
    'sedol',
    'qty',
    'value',
    'sedol',
    'qty',
    'value',
    'sedol',
    'qty',
    'value',
    'sedol',
    'qty',
    'value',
    'sedol',
    'qty',
    'value',
    'sedol',
    'toggleAction'
  ];

  childDisplayedColumns = [
    ...this.displayedColumns
  ];

  moveableColumns = [
    'qty',
    'value',
    'sedol',
  ]

    ngOnInit(): void {

    const rows: HoldingRow[] = [];


    this.originalData.forEach(holding => {
      rows.push({
        ...holding,
        level: 0,
        expandable: holding.accounts && holding.accounts.length > 0,
        isExpanded: false
      });
    });

    this.dataSource.data = rows;
    this.cd.markForCheck();

  }

  columnConfig = [
    { name: 'name', displayName: 'Name', isSticky: true },
    { name: 'sedol', displayName: 'SEDOL', isSticky: false },
    { name: 'qty', displayName: 'Quantity', isSticky: false },
    { name: 'value', displayName: 'Value', isSticky: false, isNumeric: true },
    { name: 'toggleAction', displayName: 'Toggle', isSticky: true, isStickyEnd: true }
  ]

  expandedDetail = ['expandedDetail'];
  // Helper to check if a column should be sticky at the start
  isSticky(columnName: string): boolean {
    const config = this.columnConfig.find(c => c.name === columnName);
    return config ? !!config.isSticky && !config.isStickyEnd : false;
  }

  trackByFn(index: number, item: any) {
    return index;
  }

  // Helper to check if a column should be sticky at the end
  isStickyEnd(columnName: string): boolean {
    const config = this.columnConfig.find(c => c.name === columnName);
    return config ? !!config.isSticky && !!config.isStickyEnd : false;
  }
  toggleRow(row: HoldingRow) {
    if (!row.expandable) {
      return;
    }

    row.isExpanded = !row.isExpanded;
    const allRows = [...this.dataSource.data]; // create new array reference

    if (row.isExpanded) {
      const parentIndex = allRows.indexOf(row);
      const parentHolding = this.originalData.find(h => h.name === row.name);

      const childRows: HoldingRow[] = parentHolding.accounts.map((account: any) => ({
        ...account,
        level: 1,
        expandable: false,
      }));

      allRows.splice(parentIndex + 1, 0, ...childRows);
    } else {
      const parentIndex = allRows.indexOf(row);
      let childCount = 0;
      for (let i = parentIndex + 1; i < allRows.length && allRows[i].level !== 0; i++) {
        childCount++;
      }
      allRows.splice(parentIndex + 1, childCount);
    }
    
    setTimeout(() => {}, 0)

    this.dataSource.data = allRows;

    this.cd.detectChanges();

    if(this.table) {
      console.log("table", this.table);
      this.table.renderRows();
    }

    console.log("allrows", allRows);
  }

}

export interface HoldingRow {
  level: number;
  expandable: boolean;
  name: string;
  sedol: string;
  qty: number;
  value: number;
  isExpanded?: boolean;
}

export interface Account {
  name: string;
  sedol: string;
  qty: number;
  value: number;
  [key: string]: string | number; // <-- Add this line

}

export interface Holding {
  name: string;
  sedol: string;
  qty: number;
  value: number;
  accounts: Account[];
}


const HOLDINGS_DATA: Holding[] = [
  {
    name: 'Vanguard S&P 500 ETF',
    sedol: '2193502',
    qty: 150,
    value: 63150.00,
    accounts: [
      { name: 'Account 11', sedol: '2193502', qty: 100, value: 42100.00 },
      { name: 'Account 13', sedol: '2193502', qty: 50, value: 21050.00 }
    ]
  },
  {
    name: 'iShares Russell 2000 ETF',
    sedol: 'B01S1K7',
    qty: 325,
    value: 61750.00,
    accounts: [
      { name: 'Account 1', sedol: 'B01S1K7', qty: 200, value: 38000.00 },
      { name: 'Account 2', sedol: 'B01S1K7', qty: 125, value: 23750.00 }
    ]
  },
  {
    name: 'Apple Inc.',
    sedol: '2046251',
    qty: 75,
    value: 13125.00,
    accounts: [
      { name: 'Account 1', sedol: '2046251', qty: 50, value: 8750.00 },
      { name: 'Account 2', sedol: '2046251', qty: 25, value: 4375.00 }
    ]
  },
    {
    name: 'Vanguard S&P 500 ETF',
    sedol: '2193502',
    qty: 150,
    value: 63150.00,
    accounts: [
      { name: 'Account 11', sedol: '2193502', qty: 100, value: 42100.00 },
      { name: 'Account 13', sedol: '2193502', qty: 50, value: 21050.00 }
    ]
  },
  {
    name: 'iShares Russell 2000 ETF',
    sedol: 'B01S1K7',
    qty: 325,
    value: 61750.00,
    accounts: [
      { name: 'Account 1', sedol: 'B01S1K7', qty: 200, value: 38000.00 },
      { name: 'Account 2', sedol: 'B01S1K7', qty: 125, value: 23750.00 }
    ]
  },
  {
    name: 'Apple Inc.',
    sedol: '2046251',
    qty: 75,
    value: 13125.00,
    accounts: [
      { name: 'Account 1', sedol: '2046251', qty: 50, value: 8750.00 },
      { name: 'Account 2', sedol: '2046251', qty: 25, value: 4375.00 }
    ]
  },
    {
    name: 'Vanguard S&P 500 ETF',
    sedol: '2193502',
    qty: 150,
    value: 63150.00,
    accounts: [
      { name: 'Account 11', sedol: '2193502', qty: 100, value: 42100.00 },
      { name: 'Account 13', sedol: '2193502', qty: 50, value: 21050.00 }
    ]
  },
  {
    name: 'iShares Russell 2000 ETF',
    sedol: 'B01S1K7',
    qty: 325,
    value: 61750.00,
    accounts: [
      { name: 'Account 1', sedol: 'B01S1K7', qty: 200, value: 38000.00 },
      { name: 'Account 2', sedol: 'B01S1K7', qty: 125, value: 23750.00 }
    ]
  },
  {
    name: 'Apple Inc.',
    sedol: '2046251',
    qty: 75,
    value: 13125.00,
    accounts: [
      { name: 'Account 1', sedol: '2046251', qty: 50, value: 8750.00 },
      { name: 'Account 2', sedol: '2046251', qty: 25, value: 4375.00 }
    ]
  },
    {
    name: 'Vanguard S&P 500 ETF',
    sedol: '2193502',
    qty: 150,
    value: 63150.00,
    accounts: [
      { name: 'Account 11', sedol: '2193502', qty: 100, value: 42100.00 },
      { name: 'Account 13', sedol: '2193502', qty: 50, value: 21050.00 }
    ]
  },
  {
    name: 'iShares Russell 2000 ETF',
    sedol: 'B01S1K7',
    qty: 325,
    value: 61750.00,
    accounts: [
      { name: 'Account 1', sedol: 'B01S1K7', qty: 200, value: 38000.00 },
      { name: 'Account 2', sedol: 'B01S1K7', qty: 125, value: 23750.00 }
    ]
  },
  {
    name: 'Apple Inc.',
    sedol: '2046251',
    qty: 75,
    value: 13125.00,
    accounts: [
      { name: 'Account 1', sedol: '2046251', qty: 50, value: 8750.00 },
      { name: 'Account 2', sedol: '2046251', qty: 25, value: 4375.00 }
    ]
  },
    {
    name: 'Vanguard S&P 500 ETF',
    sedol: '2193502',
    qty: 150,
    value: 63150.00,
    accounts: [
      { name: 'Account 11', sedol: '2193502', qty: 100, value: 42100.00 },
      { name: 'Account 13', sedol: '2193502', qty: 50, value: 21050.00 }
    ]
  },
  {
    name: 'iShares Russell 2000 ETF',
    sedol: 'B01S1K7',
    qty: 325,
    value: 61750.00,
    accounts: [
      { name: 'Account 1', sedol: 'B01S1K7', qty: 200, value: 38000.00 },
      { name: 'Account 2', sedol: 'B01S1K7', qty: 125, value: 23750.00 }
    ]
  },
  {
    name: 'Apple Inc.',
    sedol: '2046251',
    qty: 75,
    value: 13125.00,
    accounts: [
      { name: 'Account 1', sedol: '2046251', qty: 50, value: 8750.00 },
      { name: 'Account 2', sedol: '2046251', qty: 25, value: 4375.00 }
    ]
  },
    {
    name: 'Vanguard S&P 500 ETF',
    sedol: '2193502',
    qty: 150,
    value: 63150.00,
    accounts: [
      { name: 'Account 11', sedol: '2193502', qty: 100, value: 42100.00 },
      { name: 'Account 13', sedol: '2193502', qty: 50, value: 21050.00 }
    ]
  },
  {
    name: 'iShares Russell 2000 ETF',
    sedol: 'B01S1K7',
    qty: 325,
    value: 61750.00,
    accounts: [
      { name: 'Account 1', sedol: 'B01S1K7', qty: 200, value: 38000.00 },
      { name: 'Account 2', sedol: 'B01S1K7', qty: 125, value: 23750.00 }
    ]
  },
  {
    name: 'Apple Inc.',
    sedol: '2046251',
    qty: 75,
    value: 13125.00,
    accounts: [
      { name: 'Account 1', sedol: '2046251', qty: 50, value: 8750.00 },
      { name: 'Account 2', sedol: '2046251', qty: 25, value: 4375.00 }
    ]
  },
    {
    name: 'Vanguard S&P 500 ETF',
    sedol: '2193502',
    qty: 150,
    value: 63150.00,
    accounts: [
      { name: 'Account 11', sedol: '2193502', qty: 100, value: 42100.00 },
      { name: 'Account 13', sedol: '2193502', qty: 50, value: 21050.00 }
    ]
  },
  {
    name: 'iShares Russell 2000 ETF',
    sedol: 'B01S1K7',
    qty: 325,
    value: 61750.00,
    accounts: [
      { name: 'Account 1', sedol: 'B01S1K7', qty: 200, value: 38000.00 },
      { name: 'Account 2', sedol: 'B01S1K7', qty: 125, value: 23750.00 }
    ]
  },
  {
    name: 'Apple Inc.',
    sedol: '2046251',
    qty: 75,
    value: 13125.00,
    accounts: [
      { name: 'Account 1', sedol: '2046251', qty: 50, value: 8750.00 },
      { name: 'Account 2', sedol: '2046251', qty: 25, value: 4375.00 }
    ]
  },
    {
    name: 'Vanguard S&P 500 ETF',
    sedol: '2193502',
    qty: 150,
    value: 63150.00,
    accounts: [
      { name: 'Account 11', sedol: '2193502', qty: 100, value: 42100.00 },
      { name: 'Account 13', sedol: '2193502', qty: 50, value: 21050.00 }
    ]
  },
  {
    name: 'iShares Russell 2000 ETF',
    sedol: 'B01S1K7',
    qty: 325,
    value: 61750.00,
    accounts: [
      { name: 'Account 1', sedol: 'B01S1K7', qty: 200, value: 38000.00 },
      { name: 'Account 2', sedol: 'B01S1K7', qty: 125, value: 23750.00 }
    ]
  },
  {
    name: 'Apple Inc.',
    sedol: '2046251',
    qty: 75,
    value: 13125.00,
    accounts: [
      { name: 'Account 1', sedol: '2046251', qty: 50, value: 8750.00 },
      { name: 'Account 2', sedol: '2046251', qty: 25, value: 4375.00 }
    ]
  },

    {
    name: 'Vanguard S&P 500 ETF',
    sedol: '2193502',
    qty: 150,
    value: 63150.00,
    accounts: [
      { name: 'Account 11', sedol: '2193502', qty: 100, value: 42100.00 },
      { name: 'Account 13', sedol: '2193502', qty: 50, value: 21050.00 }
    ]
  },
  {
    name: 'iShares Russell 2000 ETF',
    sedol: 'B01S1K7',
    qty: 325,
    value: 61750.00,
    accounts: [
      { name: 'Account 1', sedol: 'B01S1K7', qty: 200, value: 38000.00 },
      { name: 'Account 2', sedol: 'B01S1K7', qty: 125, value: 23750.00 }
    ]
  },
  {
    name: 'Apple Inc.',
    sedol: '2046251',
    qty: 75,
    value: 13125.00,
    accounts: [
      { name: 'Account 1', sedol: '2046251', qty: 50, value: 8750.00 },
      { name: 'Account 2', sedol: '2046251', qty: 25, value: 4375.00 }
    ]
  },
    {
    name: 'Vanguard S&P 500 ETF',
    sedol: '2193502',
    qty: 150,
    value: 63150.00,
    accounts: [
      { name: 'Account 11', sedol: '2193502', qty: 100, value: 42100.00 },
      { name: 'Account 13', sedol: '2193502', qty: 50, value: 21050.00 }
    ]
  },
  {
    name: 'iShares Russell 2000 ETF',
    sedol: 'B01S1K7',
    qty: 325,
    value: 61750.00,
    accounts: [
      { name: 'Account 1', sedol: 'B01S1K7', qty: 200, value: 38000.00 },
      { name: 'Account 2', sedol: 'B01S1K7', qty: 125, value: 23750.00 }
    ]
  },
  {
    name: 'Apple Inc.',
    sedol: '2046251',
    qty: 75,
    value: 13125.00,
    accounts: [
      { name: 'Account 1', sedol: '2046251', qty: 50, value: 8750.00 },
      { name: 'Account 2', sedol: '2046251', qty: 25, value: 4375.00 }
    ]
  },
];
