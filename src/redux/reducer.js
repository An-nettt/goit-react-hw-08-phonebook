import { authReducer } from './auth/authSlice';
import { contactsReducer } from './contacts/contactsSlice';
import { filterReducer } from './filter/filterSlice';

export const reducer = {
  contacts: contactsReducer,
  filter: filterReducer,
  auth: authReducer,
};