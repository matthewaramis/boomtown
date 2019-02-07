import React from 'react';
import ItemsGrid from '../../components/ItemsGrid/ItemsGrid';

const Items = ({ classes, items }) => {
  return (
    <div className={classes.itemBorder}>
      {' '}
      <ItemsGrid className={classes} items={items} />
    </div>
  );
};

export default Items;
