import {Injectable} from '@angular/core';
  
import {contactUser} from '../contact/contactUser';

@Injectable({
  providedIn: 'root',
}
  
)
export class contactService{

    submitData(contactForm:contactUser):boolean{
        ///some login
return true;

    }
}