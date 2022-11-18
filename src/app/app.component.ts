import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crash-Angular2-part2';
  newMemberName = "";
  members: string[] = [];
  errorMessage = '';
  numberOfTeams: number  | '' = '';
  teams: string[][] = [];

  onNumbersOfTeamsInput(value: string) {
    this.numberOfTeams = Number(value);

  }

  addMember(){

    if (!this.newMemberName) {
      this.errorMessage = "Please fill up Name here";
  
      return

    }

    this.members.push(this.newMemberName);
    this.newMemberName = "";
    this.errorMessage = "";
    console.log(this.members);
    
  }

  onInput(members: string) {
    this.newMemberName = members
  }

  generateTeams() {

    if (!this.numberOfTeams || this.numberOfTeams <= 0) {
      this.errorMessage = 'Invalid number'
      return;
    }

    if (this.members.length < this.numberOfTeams) {
      this.errorMessage = ' not enough members'
      return;
    }

    this.errorMessage = '';

    const allMembers = [...this.members]

    while (allMembers.length) {
      for (let i = 0; i < this.numberOfTeams; i++) {
        const randomNumber = Math.floor(Math.random() * allMembers.length);
        const member = allMembers.splice(randomNumber, 1)[0];

        if (!member)break
  
        if (this.teams[i]) {
          this.teams[i].push(member)
        }else {
          this.teams[i] = [member]
        }
  
      }
    }
    
    
    console.log(this.teams);
    this.members = [];
    this.numberOfTeams = ''
  }
}
