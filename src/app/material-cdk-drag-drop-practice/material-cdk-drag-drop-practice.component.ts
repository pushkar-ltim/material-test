import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-material-cdk-drag-drop-practice',
  templateUrl: './material-cdk-drag-drop-practice.component.html',
  styleUrls: ['./material-cdk-drag-drop-practice.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MaterialCdkDragDropPracticeComponent implements OnInit, AfterViewInit {

  @ViewChildren('listItem') listItems!: QueryList<ElementRef>;

  allColumnsInDefaultOrder: Column[] = COLUMNS.sort((a, b) => a.order - b.order);
  selectedColumns: Column[] = this.getSelectedColumns();
  unselectedColumns: Column[] = this.getUnselectedColumns();

  ITEMS_TO_SHOW = 7;
  LIST_ITEM_HEIGHT = 48;

  constructor(private cd: ChangeDetectorRef) {

  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.calculateAndSetHeight();
    }, 0);
  }


  getSelectedColumns(): Column[] {
    const shuffled = [...this.allColumnsInDefaultOrder].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 4);
  }

  getUnselectedColumns(): Column[] {
    return this.allColumnsInDefaultOrder.filter(column => !this.selectedColumns.includes(column));
  }

  private calculateAndSetHeight() {
    if (!this.listItems || this.listItems.length === 0) {
      return;
    }
    
    const firstItem = this.listItems.first.nativeElement as HTMLElement;
    const itemHeight = firstItem.offsetHeight;

    console.log(`First item height is ${itemHeight}px.`);

    // The ONLY thing this function does is set our public property.
    // The template takes care of the rest.
    this.LIST_ITEM_HEIGHT = itemHeight;

    this.cd.markForCheck();

    console.log(`Item height is ${itemHeight}px. Setting listMaxHeight property to ${this.LIST_ITEM_HEIGHT}.`);
  }

}

export interface Column {
  id: string;
  name: string;
  description: string;
  order: number;
}

export const COLUMNS: Column[] = [
  { id: 'name', name: 'Name', description: 'The name of the column', order: 1 },
  { id: 'qty', name: 'Quantity', description: 'The quantity of items', order: 2 },
  { id: 'value', name: 'Value', description: 'The value of the items', order: 3 },
  { id: 'sedol', name: 'SEDOL', description: 'The SEDOL identifier', order: 4 },
  { id: 'isin', name: 'ISIN', description: 'The ISIN identifier', order: 5 },
  { id: 'cusip', name: 'CUSIP', description: 'The CUSIP identifier', order: 6 },
  { id: 'date', name: 'Date', description: 'The date of the record', order: 7 },
  { id: 'status', name: 'Status', description: 'The status of the item', order: 8 },
  { id: 'type', name: 'Type', description: 'The type of the item', order: 9 },
  { id: 'currency', name: 'Currency', description: 'The currency used', order: 10 }
];