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

  expandedProjects: boolean[] = [];
  projects = [
    {
      title: 'Twitter Clone',
      img: 'twitter_newbird_boxed_whiteonblue.webp',
      desc: [
        'A Twitter-style social platform built with React.js.',
        'Real-time posts, likes, and comments.',
        'Profile system with user feeds.',
      ],
      github: 'https://github.com/Amanat038',
    },

    {
      title: 'Task Manager App',
      img: 'Screenshot 2025-11-21 213800.png',
      desc: [
        'Built using React.js and react-beautiful-dnd.',
        'Drag-and-drop task management.',
        'Fully responsive design with Tailwind CSS.',
      ],
      live: 'https://drag-and-drop789.netlify.app/',
      github: 'https://github.com/Amanat038/Task-Manage-system',
    },

    {
      title: 'Real-Time Chat Application',
      img: 'Screenshot 2025-11-21 213836.png',
      desc: [
        'Built using React.js + Socket.IO.',
        'Real-time chatting with multi-user rooms.',
        'Express.js backend and responsive UI.',
      ],
      live: 'https://chat-application-08060601.netlify.app/',
      github: 'https://github.com/Amanat038',
    },
  ];

  // Toggle expand
  toggleProject(i: number) {
    this.expandedProjects[i] = !this.expandedProjects[i];
  }
}
