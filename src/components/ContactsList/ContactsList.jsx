import PropTypes from 'prop-types';
import ListItem from './ListItem/ListItem';

import { StyledList } from './ContactsList.styled';

const ContactsList = ({ contacts, handleDel }) => {
  return (
    <StyledList>
      {contacts.map(contact => (
        <ListItem
          key={contact.id}
          id={contact.id}
          contact={contact.name}
          phone={contact.phone}
          handleDel={handleDel}
        />
      ))}
    </StyledList>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
  handleDel: PropTypes.func.isRequired,
};

export { ContactsList };
