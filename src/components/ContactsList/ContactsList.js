import { useSelector } from 'react-redux';
import { ListContacts } from './ContactsList.styled';
import { ContactsListItem } from 'components/ContactsListItem/ContactsListItem';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contactItems);
  const filter = useSelector(state => state.filter.filter);

  const getVisibleContact = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  const visibleContacts = getVisibleContact();
  return (
    <ListContacts>
      {visibleContacts.map(contact => (
        <ContactsListItem contact={contact} key={contact.id} />
      ))}
    </ListContacts>
  );
};
