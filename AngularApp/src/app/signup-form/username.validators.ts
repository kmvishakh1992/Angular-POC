import { AbstractControl, ValidationErrors } from '@angular/forms';

export class UsernameValidators{
    static cannotContainSpace(control: AbstractControl) : ValidationErrors | null{
        if((control.value as string).indexOf(' ') >= 0){
            return { cannotContainSpace: true };
        }
        else{
            return null;
        }
    }

    static shouldBeUnique(control : AbstractControl) : Promise <ValidationErrors | null>{
        return new Promise(resolve => {setTimeout(() => {
            if(control.value.toLowerCase() === "greg"){
    
              resolve({
                "username taken": true
              });
    
            } else {
              resolve(null);
            }
          }, 2000);
    
        });
        // return new Promise((resolve,reject) => {
        //     setTimeout(() => {
        //         if(control.value === 'vish')
        //         resolve({shouldBeUnique: true});
        //     else
        //         resolve(null);
        //     },2000);
        // });
    }
    //     if(control.value === '1234')
    //     return {shouldBeUnique: true};
    // else
    //     return null;
    // }
}