import { Component, OnInit } from '@angular/core';
import {showsCastDetailService} from '../services/getApiData'
import {ActivatedRoute,Router} from "@angular/router";
@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.scss']
})
export class PersonDetailComponent implements OnInit {

  
  constructor(private searchPeople:showsCastDetailService,private _activatedRoute:ActivatedRoute,private _router:Router) { }
  peopleSearch;
  appearanceInShow:any[]
  appearanceInCrew:any[]
  //id:any;
  ngOnInit() {

     let id:string=this._activatedRoute.snapshot.params['id'];
    // this._activatedRoute.paramMap.subscribe((params: ParamMap)=>{

    //   let id=parseInt(params.get('id'));
    //   this.id=id;
    // });

    this.searchPeople.getindividualPersonalDetail(id)
        .subscribe(arg =>  this.peopleSearch=arg);
        this.searchPeople.getindividualAppearnaceInCase(id+"/castcredits?embed=show")
        .subscribe(arg =>  console.log(arg));
        this.searchPeople.getindividualAppearnaceInCase(id+"/castcredits?embed=show")
         .subscribe(arg =>  this.appearanceInShow=arg);
         
       // .subscribe(arg =>  console.log(arg));
        this.searchPeople.getindividualAppearnaceInCrew(id+"/crewcredits?embed=show")
        .subscribe(arg =>  this.appearanceInCrew=arg);
       // .subscribe(arg =>  console.log(arg));
  }
  

}
