import PropTypes from 'prop-types';
import debounce from 'lodash.debounce';

import { StyledContactFilter } from './ContactFilter.styled';

const ContactFilter = ({ filter, onFilter }) => {
  const sendFilterQueryToApp = debounce(onFilter, 300);

  const onFilterChange = e =>
    sendFilterQueryToApp(e.target.value.toLowerCase().trim());

  return (
    <StyledContactFilter>
      <h3>Find contacts by name</h3>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={onFilterChange}
      />
    </StyledContactFilter>
  );
};

ContactFilter.defaultProps = {
  filter: '',
};

ContactFilter.propTypes = {
  filter: PropTypes.string,
  onFilter: PropTypes.func.isRequired,
};

export { ContactFilter };
