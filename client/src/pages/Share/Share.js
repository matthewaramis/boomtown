import React from 'react';
import ShareItemForm from '../../components/ShareItemForm';
import ShareItemPreview from '../../components/ShareItemPreview';
import styles from '../Share/styles';

/* 
  TODO: Create ShareItemFrom and ShareItemPreview in the components dir
  and call them from this file.

  ShareItemForm is the form that our User will use to add a new item 
  and upload an image.

  When the user is filling ShareItemForm, we will show a preview of 
  this item using the ShareItemPreview. 
  Hint: It should look like any other Item card.

*/

const Share = ({ classes }) => {
  return (
    <div>
      <p>
        {' '}
        <ShareItemForm />
        <ShareItemPreview />
        This is the share page located at <code>/share</code>.
      </p>
    </div>
  );
};

export default Share;
