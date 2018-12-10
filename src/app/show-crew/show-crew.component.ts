import { Component, OnInit } from '@angular/core';
import {showsCastDetailService} from '../services/getApiData';
 
import {ActivatedRoute} from "@angular/router";
@Component({
  selector: 'app-show-crew',
  templateUrl: './show-crew.component.html',
  styleUrls: ['./show-crew.component.scss']
})
export class ShowCrewComponent implements OnInit {

  crew  :any[];
  constructor(private _MoviesService :showsCastDetailService,private _activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    let movieCode:string=this._activatedRoute.snapshot.params['id'];
    this._MoviesService.getcrew(movieCode+"/cast")
    .subscribe(data=>this.crew=data);
  }

}
