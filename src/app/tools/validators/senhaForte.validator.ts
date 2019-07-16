import {FormControl} from '@angular/forms';

export interface ValidationResult {
  [key: string]: boolean;
}

export class SenhaForteValidator {

  public static valida(control: FormControl): ValidationResult {
    let hasNumber = /\d/.test(control.value);
    let hasUpper = /[A-Z]/.test(control.value);
    let hasLower = /[a-z]/.test(control.value);

    const valid = hasNumber && hasUpper && hasLower;
    if (!valid) {
      return {senhaForte: true};
    }
    return null;
  }
}
