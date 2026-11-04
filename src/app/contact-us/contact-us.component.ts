import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { invalid } from 'moment';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {

  public contactForm: FormGroup;

  public nameErrorMessage: string = '';

  constructor() { }

  ngOnInit() {
    this.onLoad();
    this.getFormValue();
  }

  private onLoad() {
    this.contactForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(7)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [Validators.required])
    });
  }

  submitForm() {
    // console.log(this.contactForm.value);
  }

  updateFormValues() {
    this.contactForm.patchValue({
      name: 'John Doe',
    });
  };


  private getFormValue() {
    const nameControl = this.contactForm.get('name');
    nameControl?.valueChanges.subscribe(x => {
      this.validateNameControl(nameControl as FormControl);
    });
  }

  private validateNameControl(nameControl: FormControl): void {
    if (nameControl.errors && (nameControl.touched || nameControl.dirty)) {
      if (nameControl.errors['required']) {
        this.nameErrorMessage = "This is a required field";
      } else if (nameControl.errors['minlength']) {
        console.log(nameControl.errors['minlength'].requiredLength);
        this.nameErrorMessage = 'Minimum length is required ' + nameControl.errors['minlength'].requiredLength;
      } else {
        this.nameErrorMessage = "Your name is not good";
      }
    } else {
      this.nameErrorMessage = "Looks good!";
    }
  }


}
