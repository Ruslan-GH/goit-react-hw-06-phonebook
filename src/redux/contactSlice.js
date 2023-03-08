import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [
    { id: '1', name: 'Rosie Simpson', number: '+ 459-12-56' },
    { id: '2', name: 'Hermione Kline', number: '+ 443-89-12' },
  ],
  filter: '',
};

export const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addContact, deleteContact, setFilter } = contactSlice.actions;

export default contactSlice.reducer;
