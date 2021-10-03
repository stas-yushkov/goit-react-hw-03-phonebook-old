import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faUser } from '@fortawesome/free-solid-svg-icons';

import { Button } from 'components';

import {
  StyledListItem,
  ContactName,
  ContactPhone,
  Contact,
} from './StyledListItem';

const ListItem = ({ contact, phone, id, handleDel }) => {
  const handleDelete = () => handleDel(id);

  return (
    <StyledListItem>
      <Contact>
        <ContactName>
          <FontAwesomeIcon icon={faUser} />
          {contact}
        </ContactName>

        <ContactPhone>
          <FontAwesomeIcon icon={faPhone} />
          {phone}
        </ContactPhone>
      </Contact>
      <Button type="button" onClick={handleDelete}>
        Delete
      </Button>
    </StyledListItem>
  );
};

ListItem.propTypes = {
  contact: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  handleDel: PropTypes.func.isRequired,
};

export default ListItem;
