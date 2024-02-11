import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-standalone';
  candidates: Candidate[] = [];
  newCandidateName: string = '';

  AddCandidate(cadidateName: string) {
    this.candidates.push(new Candidate(cadidateName));
  }

}

class Candidate {
  createdAt: Date;
  constructor(public name: string) {
    this.createdAt = new Date();
  }
}