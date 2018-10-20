import { Validator,NG_VALIDATORS, AbstractControl } from "@angular/forms";
import { Directive,Input } from "@angular/core";

@Directive({
    selector : "[appEqualValidator]",

    providers : [{
        provide:NG_VALIDATORS,
        useExisting: appEqualValidatorDirective,
        multi: true

    }]
})
export class appEqualValidatorDirective implements Validator{
    @Input() appEqualValidator : string;
    validate(control: AbstractControl) : { [key:string]:any } | null{
        const controlToCompare = control.parent.get(this.appEqualValidator);
        if(controlToCompare && controlToCompare.value !== control.value){
            return {'notequal': true}
        }
        return null;
    }
}