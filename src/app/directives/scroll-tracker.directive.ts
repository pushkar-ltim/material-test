import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appScrollTracker]'
})
export class ScrollTrackerDirective {
  @Output() topRowChanged = new EventEmitter<{ element: HTMLElement, index: number }>();

  private ticking = false;
  private lastTopRowIndex: number | null = null;

  constructor(private el: ElementRef) { }

  @HostListener('window:scroll')
  onScroll() {
    if (!this.ticking) {
      window.requestAnimationFrame(() => {
        this.findTopRow();
        this.ticking = false;
      });
      this.ticking = true;
    }
  }

private findTopRow() {
    const tableRows = this.el.nativeElement.querySelectorAll('tr[mat-row]');
    let closestRow: { element: HTMLElement, index: number } | null = null;
    let minDistance = Infinity;

    tableRows.forEach((row: HTMLElement, index: number) => {
      const rect = row.getBoundingClientRect();
      if (rect.bottom > 0 && rect.top < window.innerHeight) {
        const distance = Math.abs(rect.top);
        if (distance < minDistance) {
          minDistance = distance;
          closestRow = { element: row, index: index };
        }
      }
    });

    closestRow = closestRow || null;

    // Now, TypeScript knows for certain that `closestRow` is not null in the code below.
    if (closestRow!.index !== this.lastTopRowIndex) {
      this.lastTopRowIndex = closestRow!.index;
      this.topRowChanged.emit(closestRow!);
    }
  }
}