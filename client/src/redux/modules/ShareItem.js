// Actions
const UPDATE_ITEM = 'UPDATE_ITEM';
const RESET_ITEM = 'RESET_ITEM';
const RESET_IMAGE = 'RESET_IMAGE';

// Action Creators
export const updateItem = item => ({
  type: UPDATE_ITEM,
  payload: item
});

export const resetItem = () => ({
  type: RESET_ITEM
});

export const resetImage = () => ({
  type: RESET_IMAGE
});

// Initial State
const initialState = {
  title: 'Name your item.',
  description: 'Describe your item.',
  tags: [],
  imageurl: 'http://via.placeholder.com/350x250?text=Please select an image',
  itemowner: {},
  created: new Date()
};

// Reducers
export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_ITEM: {
      return { ...state, ...action.payload };
    }
    case RESET_ITEM: {
      return { ...initialState };
    }
    case RESET_IMAGE: {
      return { ...state, imageurl: initialState.imageurl };
    }
    default:
      return state;
  }
};
