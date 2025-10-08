import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, HostListener, NgZone, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Holding, HoldingRow, HOLDINGS_DATA } from '../models/holdings.data.model';
import { CdkScrollable, ScrollDispatcher } from '@angular/cdk/scrolling';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-material-table-practice-sticky-header',
  templateUrl: './material-table-practice-sticky-header.component.html',
  styleUrls: ['./material-table-practice-sticky-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MaterialTablePracticeStickyHeaderComponent {

  constructor(
    private cd: ChangeDetectorRef,
    private scrollDispatcher: ScrollDispatcher,
    private ngZone: NgZone
  ) { }

  @ViewChild(MatTable) table?: MatTable<HoldingRow>;

  @ViewChild('mainTable', { read: ElementRef }) mainTable!: ElementRef;
  @ViewChild('tableContainer', { read: ElementRef }) tableContainer!: ElementRef;
  @ViewChild('floatingScrollContainer', { read: ElementRef }) floatingScrollContainer!: ElementRef;
  @ViewChild('stickyDiv') stickyDiv?: ElementRef<HTMLDivElement>;

  private headerObserver?: IntersectionObserver;

  isHeaderSticky = false;
  tableContainerLeft = 0;
  tableContainerWidth = 0;

  //dataSource = HOLDINGS_DATA;
  dataSource = new MatTableDataSource<HoldingRow>();
  originalData: any[] = HOLDINGS_DATA;

  expandedElement: Holding | null | undefined;

  topRowIndex: number = -1;

  displayedColumns = [
    'name',
    'qty',
    'value',
    'sedol',
    'qty',
    'value',
    'sedol', 'qty',
    'value',
    'sedol', 'qty',
    'value',
    'sedol', 'qty',
    'value',
    'sedol', 'qty',
    'value',
    'sedol', 'qty',
    'value',
    'sedol', 'qty',
    'value',
    'sedol', 'qty',
    'value',
    'sedol', 'qty',
    'value',
    'sedol', 'qty',
    'value',
    'sedol', 'qty',
    'value',
    'sedol', 'qty',
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

  ngAfterViewInit(): void {
    const tableElement = this.mainTable?.nativeElement;
    const stickyDivElement = this.stickyDiv?.nativeElement;

    if (!tableElement || !stickyDivElement) {
      return;
    }

    const headerRow = tableElement.querySelector('tr.mat-header-row');

    if (!headerRow) {
      return;
    }

    const options = {
      root: null, // relative to the viewport
      threshold: 0 // trigger as soon as the element is partially out of view
    };

    this.headerObserver = new IntersectionObserver(([entry]) => {
      this.ngZone.run(() => {
        this.isHeaderSticky = !entry.isIntersecting;
        stickyDivElement.style.display = this.isHeaderSticky ? 'block' : 'none';
        this.cd.markForCheck();
      });
    }, options);

    this.headerObserver.observe(headerRow);
  }

  ngOnDestroy(): void {
    if (this.headerObserver) {
      this.headerObserver.disconnect();
    }
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


}