import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-material-table-practice',
  templateUrl: './material-table-practice.component.html',
  styleUrls: ['./material-table-practice.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MaterialTablePracticeComponent implements OnInit {

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    // setTimeout(() => {
    //   this.displayedColumns = ['name',
    //     'qty',
    //     'value',
    //     'sedol', 'toggleAction',];
    //     this.cd.markForCheck();
    // }, 2000);
  }

  dataSource = HOLDINGS_DATA;

  displayedColumns = [
    'name',
    'qty',

    'toggleAction'
  ];



  moveableColumns = [
    'qty',
    'value',
    'sedol',

  ]

  childDisplayedColumns = [
    'name',
    'qty',
    'value',
    'sedol',
    'toggleAction'
  ];


}

export interface Account {
  name: string;
  sedol: string;
  qty: number;
  value: number;
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
    name: 'Vanguard S&P 500 ETF Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua Ut Enim Ad Minim Veniam ',
    sedol: '2193502',
    qty: 150,
    value: 63150.00,
    accounts: [
      { name: 'Retirement Fund - 101', sedol: '2193502', qty: 100, value: 42100.00 },
      { name: 'Taxable Brokerage - 203', sedol: '2193502', qty: 50, value: 21050.00 }
    ]
  },
  {
    name: 'iShares Russell 2000 ETF',
    sedol: 'B01S1K7',
    qty: 325,
    value: 61750.00,
    accounts: [
      { name: 'Retirement Fund - 101', sedol: 'B01S1K7', qty: 200, value: 38000.00 },
      { name: 'Trust Account - 405', sedol: 'B01S1K7', qty: 125, value: 23750.00 }
    ]
  },
  {
    name: 'Apple Inc.',
    sedol: '2046251',
    qty: 75,
    value: 13125.00,
    accounts: [
      { name: 'Taxable Brokerage - 203', sedol: '2046251', qty: 50, value: 8750.00 },
      { name: 'Custodial Account - 512', sedol: '2046251', qty: 25, value: 4375.00 }
    ]
  }
];
