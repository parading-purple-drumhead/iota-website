import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  teamTableHeadings = ['', 'Name', 'Role', 'Domain', 'Year', 'Member Since'];
  teamTableData = [
    ['../../../assets/images/face.jpg', 'Dishyanth', 'Team Lead', 'Hardware', 'IV', '2019'], 
    ['../../../assets/images/face.jpg', 'Basu Roy', 'Tech Lead', 'Web Dev', 'III', '2019'],
    ['../../../assets/images/face.jpg', 'Pakshal', 'Tech Lead', 'Hardware', 'III', '2019'], 
    ['../../../assets/images/face.jpg', 'Swaroop', 'Tech Lead', 'App Dev', 'III', '2019'],
    ['../../../assets/images/face.jpg', 'Nagvarun', 'Tech Lead', 'Web Dev', 'III', '2019'],
    ['../../../assets/images/face.jpg', 'Nagvarun', 'Tech Lead', 'Web Dev', 'III', '2019'],
    ['../../../assets/images/face.jpg', 'Nagvarun', 'Tech Lead', 'Web Dev', 'III', '2019'],
    ['../../../assets/images/face.jpg', 'Nagvarun', 'Tech Lead', 'Web Dev', 'III', '2019'],
    ['../../../assets/images/face.jpg', 'Nagvarun', 'Tech Lead', 'Web Dev', 'III', '2019'],
    ['../../../assets/images/face.jpg', 'Nagvarun', 'Tech Lead', 'Web Dev', 'III', '2019'],
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
