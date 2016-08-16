import {Control} from 'angular2/common';

export class PassworValidators{
    static tooShort(control: Control){
        if(control.value.length<5)
            return { tooShort: true}

        return null;
    }
}
