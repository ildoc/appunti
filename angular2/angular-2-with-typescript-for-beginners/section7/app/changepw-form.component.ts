import {Component} from 'angular2/core';
import {ControlGroup, Control, Validators, FormBuilder} from 'angular2/common';
import {PassworValidators} from './passwordValidators';

@Component({
    selector: 'changepw-form',
    templateUrl: 'app/changepw-form.template.html'
})
export class ChangePwComponent {
    form: ControlGroup;

    constructor(fb: FormBuilder){
        this.form = fb.group({
            currentPw: ['', Validators.required],
            newPw: ['', Validators.compose([
                Validators.required,
                PassworValidators.tooShort
            ])],
            confirmPw: ['', Validators.required]
        });
    }

    signup() {
        if(this.form.find('currentPw').value=="1234")
            alert("password changed succesfully");
        else
            this.form.find('currentPw').setErrors({
                incorrectPw: true
            });

        console.log(this.form.value);
    }
}
