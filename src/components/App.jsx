import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Form } from './Form/Form';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import css from './App.module.css';

export const App = () => {
  // const [contacts, setContacts] = useState(
  //   () =>
  //     JSON.parse(localStorage.getItem('contacts')) ?? [
  //       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  //     ]
  // );

  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const addContact = (name, number) => {
  //   const newContacts = {
  //     name,
  //     number,
  //     id: nanoid(3),
  //   };
  //   if (
  //     !contacts.find(
  //       contact => newContacts.name.toLowerCase() === contact.name.toLowerCase()
  //     )
  //   ) {
  //     setContacts(prevState => [...prevState, newContacts]);
  //   } else {
  //     alert(`${newContacts.name} is already in contacts.`);
  //   }
  //   console.log(contacts);
  // };

  // const changeFilter = e => {
  //   setFilter(e.currentTarget.value);
  // };

  // const deleteContact = id => {
  //   const filterId = contacts.filter(contact => contact.id !== id);
  //   setContacts([...filterId]);
  // };

  return (
    <div>
      <h1 className={css.title}>Phonebook</h1>
      <Form />
      <h2 className={css.contacts}>Contacts</h2>
      {/* <Filter />
      <ContactList /> */}
    </div>
  );
};
