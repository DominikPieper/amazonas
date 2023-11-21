import {
  patchState,
  signalStoreFeature,
  SignalStoreFeature,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { computed } from '@angular/core';
import { FormGroup } from '@angular/forms';

export function withFormState<T>(): SignalStoreFeature {
  return signalStoreFeature(
    withState({
      formValue: {} as T,
      isFormValid: false,
      isFormDirty: false,
    }),
    withComputed(({ isFormValid, isFormDirty }) => ({
      isButtonDisabled: computed(() => !isFormValid() || !isFormDirty()),
    })),
    withMethods((state) => ({
      setFormState(form: FormGroup): void {
        patchState(state, { isFormValid: form.valid, isFormDirty: form.dirty });
      },
      setFormValue(value: T): void {
        patchState(state, { formValue: value });
      },
    })),
  );
}
