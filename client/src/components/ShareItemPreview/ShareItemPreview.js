import React, { Fragment } from 'react';

import ItemsCard from '../ItemCard/ItemCard';

import { connect } from 'react-redux';

const ShareItemPreview = ({ shareItemPreview }) => {
  return <ItemsCard item={shareItemPreview} />;
};

const mapStateToProps = state => {
  return { ...state };
};

export default connect(mapStateToProps)(ShareItemPreview);
