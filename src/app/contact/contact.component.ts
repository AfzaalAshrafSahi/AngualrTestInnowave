import { Component, OnInit } from '@angular/core';
import {contactUser} from './contactUser'
import {contactService} from '../services/contact'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA,MatFormField} from '@angular/material';
import {ContactDialogComponent} from '../contact-dialog/contact-dialog.component'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  animal: string;
  name: string;
ngOnInit(){}
constructor(private _contactForm :contactService,public dialog: MatDialog  ){
  
      
}
// openDialog(): void {
//   console.log('The dialog wasopened');
//   const dialogRef = this.dialog.open(ContactDialogComponent, {
//     data:{
//       myVar:"Saved successfully!!!"
//     }
//     // width: '250px',
//     // data: {name: this.name, animal: this.animal}
//   });

//   dialogRef.afterClosed().subscribe(result => {
//     console.log('The dialog was closed');
//     // this.animal = result;
//   });
// }
  userModel=new contactUser('afzaal','afzaalsahi81@gmail.com','','')

 
  submit():void{
    
   if (this._contactForm. submitData(this.userModel)===true){
     
    const dialogRef = this.dialog.open(ContactDialogComponent, {
      data:{
        myVar:"Saved successfully!!!"
      }
      // width: '250px',
      // data: {name: this.name, animal: this.animal}
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
    }

} 
 
