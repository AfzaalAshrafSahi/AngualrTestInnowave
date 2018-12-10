import { Component,ElementRef, OnInit ,Input} from '@angular/core';
import {showsCastDetailService} from '../services/getApiData';
import {showDetail} from '../Interfaces/singleSearch'
import {ActivatedRoute} from "@angular/router";
@Component({
  selector: 'app-show-detail',
 templateUrl: './show-detail.component.html',
 
  //  template: `this is show detail page`,
  //showsCastDetailService
  styleUrls: ['./show-detail.component.scss']
})
export class ShowDetailComponent implements OnInit {

  rootnode:any;
    MovieDetail:showDetail;
    episodes;
    cast  :any[];
  crew:any[];
      constructor(rootnode:ElementRef,private _MoviesService :showsCastDetailService,private _activatedRoute:ActivatedRoute){
    
        this.rootnode=rootnode;
      }
      fillothes(indidetail:any):void {
        //this.MovieDetail=indidetail;
        console.log(indidetail);
        this._MoviesService.getcast( this.MovieDetail.id+"/cast")
          .subscribe(data=>console.log(data));
          this._MoviesService.getcast( this.MovieDetail.id+"/cast")
          .subscribe(data=>this.cast=data);
           this._MoviesService.getcrew( this.MovieDetail.id+"/crew")
           .subscribe(data=>this.crew=data);
           this._MoviesService.getcrew( this.MovieDetail.id+"/crew")
           .subscribe(data=>console.log(data));
        console.log("chl ja");
      }
      ngOnInit(){
          let movieCode:string=this._activatedRoute.snapshot.params['id'];

        this._MoviesService.getIndivisualMoviesDetail(movieCode)
        .subscribe(data=>this.MovieDetail=data);
        // this._MoviesService.getIndivisualMoviesDetail(movieCode)
        // console.log("before"+this.MovieDetail.id);
        console.log("before");
        this._MoviesService.getIndivisualMoviesDetail(movieCode)
        .subscribe(data=>this.fillothes(data));
        
         
         
       
  //       this._MoviesService.getshowsEpisodes("shows?q="+movieCode+"&embed=episodes")
  //       .subscribe(data=>this.episodes=data);
       
  //  console.log( this.MovieDetail);
  //  console.log( this.MovieDetail.id);
      //   this._MoviesService.getcast( this.MovieDetail.id+"/cast")
      //   .subscribe(data=>console.log(data));
      //   this._MoviesService.getcast( this.MovieDetail.id+"/cast")
      //    .subscribe(data=>this.cast=data);
      //   //.subscribe(data=>console.log(data));
      //   this._MoviesService.getcrew( this.MovieDetail.id+"/crew")
      //  // .subscribe(data=>this.crew=data);
      //   .subscribe(data=>console.log(data));
  }

}
