import { useState } from 'react';
import { nanoid } from 'nanoid';
import { getContacts } from 'redux/contacts/selectors';
import { useSelector, useDispatch } from 'react-redux';
import css from './Form.module.css';
import { addContact } from 'redux/contacts/contactSlice';

export const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const contacts = useSelector(getContacts);

  const handleSubmit = e => {
    e.preventDefault();

    const newContacts = {
      name,
      number,
      id: nanoid(3),
    };
    if (
      !contacts.find(
        contact => newContacts.name.toLowerCase() === contact.name.toLowerCase()
      )
    ) {
      dispatch(addContact(newContacts));
      console.log(name);
    } else {
      alert(`${newContacts.name} is already in contacts.`);
    }
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input
          className={css.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
          value={name}
        />
      </label>
      <label>
        Number
        <input
          className={css.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
          value={number}
        />
      </label>
      <button className={css.btn} type="submit">
        Add contact
      </button>
    </form>
  );
};
