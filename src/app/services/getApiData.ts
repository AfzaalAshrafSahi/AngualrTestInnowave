import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {showDetail} from '../Interfaces/singleSearch'
import { map, filter, catchError, mergeMap } from 'rxjs/operators';
import {contactUser} from '../contact/contactUser';
import 'rxjs/Rx';
import 'rxjs/add/operator/map'

@Injectable({
  providedIn: 'root',
}
  
)
export class showsCastDetailService{

    private _url:string="http://api.tvmaze.com/search/shows?q=girls";
    private _epiosedsurl: string= "http://api.tvmaze.com/singlesearch/"
    private _Singleurl:string="http://api.tvmaze.com/singlesearch/shows?q=";
    
    private _casturl: string= "http://api.tvmaze.com/shows/";
    private _crewurl: string= "http://api.tvmaze.com/shows/";
    
    
    constructor(private _http:HttpClient )
    {

    }
 
    getMoviesDetail()  {
                return this._http.get (this._url);
    }
    getshowsEpisodes(personName:string):Observable<any[]>  {
      return this._http.get <any[]>(this._epiosedsurl+personName)
    }
    
    getcast(personName:string):Observable<any[]>  {
      console.log(this._casturl+personName);
      return this._http.get <any[]>(this._casturl+personName);
    }
    getcrew(personName:string):Observable<any[]>  {
      return this._http.get <any[]>(this._crewurl+personName)
    }
     getIndivisualMoviesDetail  (MovieCode:string) :Observable<showDetail> {
       //console.log("working",this._http.get(this._Singleurl));
                    return this._http.get(this._Singleurl+""+MovieCode.toLowerCase())
                    .pipe(map(data => <showDetail>data)) ;
                    //.map((response:Response)=> <showDetail>response.json()) ;
               // .map((response:Response)=> <Movies[]>response.json());
    
   }
   private _urls:string="http://api.tvmaze.com/search/people?q=";
    private _indurl:string="http://api.tvmaze.com/people/";
 
    login(user: contactUser):boolean{

      return true;
    }

    getPersonsDetail(personName:string):Observable<any[]>  {
      console.log(personName);
                return this._http.get <any[]>(this._urls+personName)
                
    }
    getindividualPersonalDetail(personName:string):Observable<any[]>  {
        return this._http.get <any[]>(this._indurl+personName)
   }
   getindividualAppearnaceInCase(personName:string):Observable<any[]>  {
    return this._http.get <any[]>("http://api.tvmaze.com/people/"+personName)
}
getindividualAppearnaceInCrew(personName:string):Observable<any[]>  {
    return this._http.get <any[]>("http://api.tvmaze.com/people/"+personName)
}
}