import PropTypes from 'prop-types';
import ContactCard from './ContactCard';
import './contactList.css';
const ContactList = ({ onDelete, contacts }) => {
  return (
    <ul className="contactList">
      {contacts.map(({ name, number, id }) => {
        return (
          <ContactCard
            name={name}
            number={number}
            id={id}
            key={id}
            onDelete={onDelete}
          />
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ContactList;
