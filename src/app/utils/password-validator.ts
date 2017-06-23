/**
 * Created by bjayamanna on 6/23/2017.
 */
import { FormControl } from '@angular/forms';

export function validatePassword(group: FormControl) {

  if(group['controls'].password.value === group['controls'].passwordRepeat.value){
    return null;
  }
  return {
    nomatch : true
  };
}
