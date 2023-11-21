/*
 * This code is content originally created through the Angular template driven forms course from Simplified Courses
 * https://www.simplified.courses/complex-angular-template-driven-forms
 */
import { Directive, inject } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { FormDirective } from './form.directive';
import { createValidator, getFormControlField } from './utils';

@Directive({
  selector: '[ngModel]',
  standalone: true,
  providers: [
    { provide: NG_VALIDATORS, useExisting: FormModelDirective, multi: true },
  ],
})
export class FormModelDirective implements Validator {
  private readonly formDirective = inject(FormDirective);

  public validate(control: AbstractControl): ValidationErrors | null {
    const { ngForm, suite, formValue } = this.formDirective;
    if (!suite || !formValue) {
      throw new Error('suite or formValue is missing');
    }
    const field = getFormControlField(ngForm.control, control);
    const validator = createValidator(field, formValue, suite);
    return validator(control);
  }
}