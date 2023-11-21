import { DeepRequired } from '@amazonas/shared/utils';

export type AddressModel = Partial<{
  street: string;
  number: string;
  city: string;
  zipcode: string;
  country: string;
}>;
export const addressShape: DeepRequired<AddressModel> = {
  street: '',
  number: '',
  city: '',
  zipcode: '',
  country: '',
};
