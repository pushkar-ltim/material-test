import { ChangeDetectorRef, Component, ElementRef, HostListener, NgZone, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Holding, HoldingRow, HOLDINGS_DATA } from '../models/holdings.data.model';
import { CdkScrollable, ScrollDispatcher } from '@angular/cdk/scrolling';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-material-table-practice-sticky-header',
  templateUrl: './material-table-practice-sticky-header.component.html',
  styleUrls: ['./material-table-practice-sticky-header.component.scss']
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

  isHeaderSticky = false;
  tableContainerLeft = 0;
  tableContainerWidth = 0;
  private tableContainerTop = 0;

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

  private ticking = false;
  private isSyncing = false; // Flag to prevent scroll event loops
  private scrollSubscription: Subscription | null = null;


  ngAfterViewInit(): void {
    this.setTableContainerDimensions();
    this.registerScrollListener();
  }

  ngOnDestroy(): void {
    this.scrollSubscription?.unsubscribe();
  }

  private registerScrollListener() {
    this.scrollSubscription = this.scrollDispatcher.scrolled().subscribe((scrollable: CdkScrollable | void) => {
      this.ngZone.run(() => {
        // Handle window scroll for sticky header
        const scrollY = window.scrollY;
        const shouldBeSticky = scrollY > this.tableContainerTop;
        if (shouldBeSticky !== this.isHeaderSticky) {
          this.isHeaderSticky = shouldBeSticky;
          if (this.isHeaderSticky) {
            this.syncColumnWidths();
          }
          this.cd.detectChanges();
        }

        // Handle horizontal table scroll for sync
        if (scrollable) {
          const element = scrollable.getElementRef().nativeElement;
          // Check if the scroll event is from our main table container
          if (this.tableContainer.nativeElement.contains(element) && !this.isSyncing) {
            this.syncScroll(element, this.floatingScrollContainer.nativeElement);
          }
          // Check if the scroll event is from our floating scrollbar
          if (this.floatingScrollContainer.nativeElement.contains(element) && !this.isSyncing) {
            this.syncScroll(element, this.tableContainer.nativeElement);
          }
        }
      });
    });
  }
  
  @HostListener('window:scroll')
  onWindowScroll() {

    if (this.ticking) return;

    window.requestAnimationFrame(() => {

      console.log("scroll methods called");

      const scrollY = window.scrollY;
      const shouldBeSticky = scrollY > this.tableContainerTop;
      if (shouldBeSticky !== this.isHeaderSticky) {
        this.isHeaderSticky = shouldBeSticky;
        if (this.isHeaderSticky) {
          this.syncColumnWidths();
        }
        this.cd.detectChanges();
      }

      this.ticking = false;
    });

    this.ticking = true;

  }

  @HostListener('window:resize')
  onResize() {
    this.setTableContainerDimensions();
    if (this.isHeaderSticky) {
      this.syncColumnWidths();
    }
  }
  private setTableContainerDimensions() {
    if (this.tableContainer) {
      const rect = this.tableContainer.nativeElement.getBoundingClientRect();
      this.tableContainerLeft = rect.left;
      this.tableContainerWidth = rect.width;
      this.tableContainerTop = rect.top + window.scrollY;
    }
  }

  private syncColumnWidths() {
    if (!this.isHeaderSticky || !this.mainTable) return;

    // Defer to ensure the floating header is rendered
    setTimeout(() => {
      const mainTableHeaders = this.mainTable.nativeElement.querySelectorAll('th');
      const floatingTable = this.floatingScrollContainer.nativeElement.querySelector('table');
      if (!floatingTable) return;
      const floatingTableHeaders = floatingTable.querySelectorAll('th');

      mainTableHeaders.forEach((th: HTMLElement, i: number) => {
        if (floatingTableHeaders[i]) {
          const width = th.getBoundingClientRect().width;
          floatingTableHeaders[i].style.minWidth = `${width}px`;
          floatingTableHeaders[i].style.maxWidth = `${width}px`;
        }
      });
    });
  }


 
  onTableScroll(event: Event) {
    if (this.isHeaderSticky && !this.isSyncing) {
      this.syncScroll(event.target as HTMLElement, this.floatingScrollContainer.nativeElement);
    }
  }


  private syncScroll(source: HTMLElement, destination: HTMLElement) {
    this.isSyncing = true;

    const scrollableWidth = source.scrollWidth - source.clientWidth;
    
    // Avoid division by zero
    if (scrollableWidth > 0) {
      const ratio = source.scrollLeft / scrollableWidth;
      const destScrollableWidth = destination.scrollWidth - destination.clientWidth;
      destination.scrollLeft = Math.round(ratio * destScrollableWidth);
    }

    // Use requestAnimationFrame to reset the flag after the current frame,
    // preventing the other element's scroll event from re-triggering the sync.
    requestAnimationFrame(() => {
      this.isSyncing = false;
    });
  }


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

  onTopRowChanged(topRow: any) {
    this.topRowIndex = topRow.index;
    this.cd.detectChanges();
  }


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

    this.dataSource.data = allRows;

    this.cd.detectChanges();

    if (this.table) {
      console.log("table", this.table);
      this.table.renderRows();
    }

    console.log("allrows", allRows);
  }

}