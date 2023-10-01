import { useSelector } from 'react-redux';
import { ListContacts } from './ContactsList.styled';
import { ContactsListItem } from 'components/ContactsListItem/ContactsListItem';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  console.log(contacts);

  return (
    <ListContacts>
      {contacts.map(contact => (
        <ContactsListItem
          contact={contact}
          key={contact.id}
          //   onDelete={onDelete}
        />
      ))}
    </ListContacts>
  );
};
