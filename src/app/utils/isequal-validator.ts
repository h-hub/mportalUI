/**
 * Created by bjayamanna on 6/23/2017.
 */
import { FormControl } from '@angular/forms';

export function isEqual(group: FormControl) {

	var valid = false;

  	var val = '';

  for (let name in group['controls']) {
  	
  	if(val != '' && val == group['controls'][name].value) valid = true;

  	val = group['controls'][name].value;
  }

  if (valid) {
    return null;
  }

  return {
    isEqual: true
  };

}
