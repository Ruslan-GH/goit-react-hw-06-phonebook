import { useSelector } from 'react-redux';

export const ContactsList = () => {
  const contacts = useSelector(state => state.contacts.contacts);

  console.log(contacts);

  return (
    <>
      <ul>
        {contacts.map(contact => (
          <li key="">
            <p>
              {contact.name}: {contact.number}
            </p>
            <button>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};
