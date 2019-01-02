import React from 'react';
import PropTypes from 'prop-types';

const List = props => (
  <ul>
    {props.items.map((item, key) => (
      <li key={key}>
        {item.task}
      </li>
    ))}
  </ul>
);

List.propTypes = {
  items: PropTypes.array,
};

export default List;
