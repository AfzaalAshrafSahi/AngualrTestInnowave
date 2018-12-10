import { Component ,ElementRef, OnInit} from '@angular/core';;

  import {showsCastDetailService} from '../services/getApiData';

@Component({
  selector: 'app-shows',
   templateUrl: './shows.component.html',

  //template: `this is show component`,
  styleUrls: ['./shows.component.scss']
})
export class ShowsComponent implements OnInit {

  PersonalDetail ;
   
    constructor(private _MoviesService :showsCastDetailService,private _elementRef:ElementRef){
  
      
    }
   
  
    ngOnInit(){
     
        this._MoviesService.getMoviesDetail()
         .subscribe(data=>this.PersonalDetail=data);
         
    }

}
