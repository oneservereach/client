import { Component, OnInit } from '@angular/core';
import { Person } from '../person'
import { PersonService } from '../person.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  persons: Person[] | undefined;

  constructor(private personService: PersonService,
    private router: Router) { }

  ngOnInit(): void {
    this.getPersons();
  }

  private getPersons(){
    this.personService.getPersonsList().subscribe(data => {
      this.persons = data;
    });
  }

  personDetails(id: number){
    this.router.navigate(['person-details', id]);
  }

  updatePerson(id: number){
    this.router.navigate(['update-person', id]);
  }

  deletePerson(id: number){
    this.personService.deletePerson(id).subscribe( data => {
      console.log(data);
      this.getPersons();
    })
  }
}
