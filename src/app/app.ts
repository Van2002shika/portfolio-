import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  fullText = 'Amanat Singh Bhadouriya';
  displayedText = '';
  private index = 0;

  ngOnInit() {
    this.typeWriter();
  }

  activateTab(id: string) {
    const triggerEl = document.querySelector(`[data-bs-target="#${id}"]`);
    if (triggerEl) {
      // @ts-ignore
      const tab = new bootstrap.Tab(triggerEl);
      tab.show();
    }
  }

  typeWriter() {
    if (this.index < this.fullText.length) {
      this.displayedText += this.fullText.charAt(this.index);
      this.index++;
      setTimeout(() => this.typeWriter(), 100);
    }
  }
  expandedCards: boolean[] = [false, false, false];

  toggleCard(index: number): void {
    this.expandedCards[index] = !this.expandedCards[index];
  }
}
