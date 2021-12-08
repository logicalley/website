import { VALID_PROVIDER_OPTIONS } from './constants';


export const isValidProvider = (provider: string): boolean => VALID_PROVIDER_OPTIONS
  .includes(provider);
