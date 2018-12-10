import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticateUserService } from '../services/authenticateUser';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA,MatFormField} from '@angular/material';
import {ContactDialogComponent} from '../contact-dialog/contact-dialog.component'

@Component({
  selector: 'app-app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.scss']
})
export class AppLoginComponent implements OnInit {
  form: FormGroup;                    
  private formSubmitAttempt: boolean;
  constructor(private fb: FormBuilder,private authUser:AuthenticateUserService,public dialog: MatDialog ) { }

  ngOnInit() {
    this.form = this.fb.group({     
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  isFieldInvalid(field: string) {  
  return (
    (!this.form.get(field).valid && this.form.get(field).touched) ||
    (this.form.get(field).untouched && this.formSubmitAttempt)
  );
}

onSubmit() {
  if (this.form.valid) {
    let valid=this.authUser.login(this.form.value); 
    if(valid===false){
    const dialogRef = this.dialog.open(ContactDialogComponent, {
      data:{
        myVar:"Invalid User!!!"
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
  this.formSubmitAttempt = true;              
}
}
