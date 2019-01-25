import React from 'react';
import ItemsGrid from '../../components/ItemsGrid/ItemsGrid';

const Items = ({ classes, items }) => {
  return <ItemsGrid className={classes} items={items} />;
};

export default Items;
