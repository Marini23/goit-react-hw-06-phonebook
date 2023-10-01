import { useSelector } from 'react-redux';
import { ListContacts } from './ContactsList.styled';
import { ContactsListItem } from 'components/ContactsListItem/ContactsListItem';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const getVisibleContact = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  const visibleContacts = getVisibleContact();
  return (
    <ListContacts>
      {visibleContacts.map(contact => (
        <ContactsListItem
          contact={contact}
          key={contact.id}
          //   onDelete={onDelete}
        />
      ))}
    </ListContacts>
  );
};
