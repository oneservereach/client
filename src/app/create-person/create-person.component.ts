import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { PersonService } from '../person.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-person',
  templateUrl: './create-person.component.html',
  styleUrls: ['./create-person.component.css']
})
export class CreatePersonComponent implements OnInit {

  person: Person = new Person();
  constructor(private personService: PersonService,
    private router: Router) { }

  ngOnInit(): void {
  }

  savePerson(){
    this.personService.createPerson(this.person).subscribe( data =>{
      console.log(data);
      this.goToPersonList();
    },
    error => console.log(error));
  }

  goToPersonList(){
    this.router.navigate(['/persons']);
  }
  
  onSubmit(){
    console.log(this.person);
    this.savePerson();
  }
}
