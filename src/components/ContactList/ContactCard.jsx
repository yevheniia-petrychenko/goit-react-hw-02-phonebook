import PropTypes from 'prop-types';

const ContactCard = ({ name, number, id, onDelete }) => {
  return (
    <li key={id}>
      <span>{name}</span>
      <span>{number}</span>
      <button
        className="deleteButton"
        onClick={() => {
          onDelete(id);
        }}
      >
        Delete
      </button>
    </li>
  );
};

ContactCard.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactCard;
