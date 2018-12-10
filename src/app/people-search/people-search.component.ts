import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder,Validators, RequiredValidator } from '@angular/forms';
import {showsCastDetailService} from '../services/getApiData'
@Component({
  selector: 'app-people-search',
  templateUrl: './people-search.component.html',
  styleUrls: ['./people-search.component.scss']
})
export class PeopleSearchComponent implements OnInit {

  
  searcnForm:FormGroup;
  peopleSearch:any[];
  searchUser 
  constructor(  private fb:FormBuilder,private searchPeople:showsCastDetailService) { }

  ngOnInit() {

    this.searcnForm=this.fb.group({
      userName:['']
      
      });
      
  }
  submit()
  { 
   // $(this._elementRef.nativeElement).find('#inputPassword');
  // console.log("yssssssssss");
    this.searchUser=this.searcnForm.get('userName').value;
      this.searchPeople.getPersonsDetail(this.searchUser)
        .subscribe(arg => this.peopleSearch=arg);
      
  }
}

 
