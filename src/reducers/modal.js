import * as types from './../constants/modal';

const initialState = {
  showModal: false,
//   showSidebar: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SHOW_MODAL: {
      return {
        ...state,
        showModal: true,
      };
    }
    case types.HIDE_MODAL: {
      return {
        ...state,
        showModal: false,
      };
    }
    case types.CHANGE_MODAL_CONTENT: {
    const {component}= action.payload;
      return {
        ...state,
        component,
      };
    }
    case types.CHANGE_MODAL_TITLE: {
      const {title}= action.payload;
      return {
        ...state,
        title
      };
    }
    default:
      return state;
  }
};

export default reducer;