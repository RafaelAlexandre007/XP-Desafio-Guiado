import { Component, OnDestroy, OnInit } from '@angular/core';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
})
export class TimerComponent implements OnInit, OnDestroy {
  interval: any;

  constructor(public ts: TimerService) {}

  ngOnInit(): void {
    this.ts.restart();
  }

  formatPhase(phase: number) {
    switch (phase) {
      case 0:
        return 'Preparação';
      case 1:
        return 'Exercícios';
      case 2:
        return 'Descanso';
      default:
        return 'Preparação';
    }
  }

  start() {
    if (!this.interval) {
      let lasteTime = Date.now();

      this.interval = setInterval(() => {
        let currentTime = Date.now();
        let ellapsedTime = currentTime - lasteTime;
        lasteTime = currentTime;
        this.ts.decrementTimeLeft(ellapsedTime);
      }, 100);
    }
  }

  pause() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = undefined;
    }
  }

  ngOnDestroy() {
    this.pause();
  }

  restart() {
    this.ts.restart();
  }

  next() {
    this.ts.next();
  }
}
