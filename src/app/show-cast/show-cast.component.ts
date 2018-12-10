import { Component, OnInit } from '@angular/core';
import {showsCastDetailService} from '../services/getApiData';
 
import {ActivatedRoute} from "@angular/router";
@Component({
  selector: 'app-show-cast',
  templateUrl: './show-cast.component.html',
  styleUrls: ['./show-cast.component.scss']
})
export class ShowCastComponent implements OnInit {
  cast  :any[];
  constructor(private _MoviesService :showsCastDetailService,private _activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    let movieCode:string=this._activatedRoute.snapshot.params['id'];
    this._MoviesService.getcast(movieCode+"/cast")
    .subscribe(data=>this.cast=data);
  }

}
