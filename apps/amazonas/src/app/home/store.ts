import { signalStore } from '@ngrx/signals';
import { withFormState } from '@amazonas/shared/forms';

type LoginFormModel = Partial<{
  email: string;
  password: string;
}>;

export const LoginStore = signalStore(
  { providedIn: 'root' },
  withFormState<LoginFormModel>(),
);
