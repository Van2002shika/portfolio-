import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
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
  expandedCards = [false, false, false];

  // helper to slice text
  trimText(text: string, limit: number) {
    return text.length > limit ? text.substring(0, limit) + '...' : text;
  }

  // toggle expansion
  toggleCard(i: number) {
    this.expandedCards[i] = !this.expandedCards[i];
  }
}
