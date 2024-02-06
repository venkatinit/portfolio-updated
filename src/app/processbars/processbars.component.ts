import { Component, AfterViewInit, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-processbars',
  templateUrl: './processbars.component.html',
  styleUrls: ['./processbars.component.css'],
  animations: [
    trigger('progressAnimation', [
      transition('void => *', [
        style({ width: '0%' }),
        animate('1000ms', style({ width: '{{progress}}%' })),
      ]),
    ]),
  ],
})


export class ProcessbarsComponent implements AfterViewInit {

  @ViewChild('progressBarsContainer') progressBarsContainer!: ElementRef;

  progressValue1 = 50; // Set your initial progress values
  progressValue2 = 75;
  // Add more progress values as needed

  constructor(private renderer: Renderer2) { }

  ngAfterViewInit(): void {
    this.animateProgressBars();
  }

  private animateProgressBars(): void {
    const progressBars = this.progressBarsContainer.nativeElement.querySelectorAll('.animated-progress');

    progressBars.forEach((progressBar: HTMLElement) => {
      this.renderer.setStyle(progressBar, 'width', `${progressBar.getAttribute('data-progress')}%`);
      this.renderer.setProperty(progressBar, 'innerText', `${progressBar.getAttribute('data-progress')}%`);
    });
  }
}
