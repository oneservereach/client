import { Component, OnInit } from '@angular/core';
import { PersonService } from '../person.service';
import { Person } from '../person';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-person',
  templateUrl: './update-person.component.html',
  styleUrls: ['./update-person.component.css']
})
export class UpdatePersonComponent implements OnInit {

  id!: number;
  person: Person = new Person();
  constructor(private personService: PersonService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.personService.getPersonById(this.id).subscribe(data => {
      this.person = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.personService.updatePerson(this.id, this.person).subscribe( data =>{
      this.goToPersonList();
    }
    , error => console.log(error));
  }

  goToPersonList(){
    this.router.navigate(['/persons']);
  }
}