
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



export const HOLDINGS_DATA: Holding[] = [
  {
    name: 'Vanguard S&P 500 ETF',
    sedol: '219350asdfasdfasdfasdfasdfasdf2',
    qty: 150,
    value: 63150.00,
    accounts: [
      { name: 'Account 11asdfasdfasdfasdfasdfasdfasdf', sedol: '2193502asdfasdfasdfasdfasdfasdfasdfasdfasdf', qty: 100, value: 42100.00 },
      { name: 'Account 13', sedol: '2193502', qty: 50, value: 21050.00 }
    ]
  },
  {
    name: 'iShares Russell 2000 ETF',
    sedol: 'B01asdfasdfS1K7',
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
