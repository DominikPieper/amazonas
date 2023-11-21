import { DeepRequired } from '@amazonas/shared/utils';

export type PhonenumberModel = Partial<{
  addValue: string;
  values: { [key: string]: string };
}>;
export const phonenumberShape: DeepRequired<PhonenumberModel> = {
  addValue: '',
  values: {
    '0': '',
  },
};
