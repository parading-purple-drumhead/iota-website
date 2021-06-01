import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
teamTableHeadings= ['Name','Role','Domain','Year','Member Since'];
teamTableData=[['Dishyanth','Team Lead','Hardware','4','2019'],['Basu Roy','Tech Lead','Web Dev','3','2019'],
['Pakshal','Tech Lead','Hardware','3','2019'],['Swaroop','Tech Lead','App Dev','3','2019'],
['Nagvarun','Tech Lead','Web Dev','3','2019']];

  constructor() { }

  ngOnInit(): void {
  }

}
