import * as uiTypes from './../constants/modal';

export const showModal = () => ({
  type: uiTypes.SHOW_MODAL,
});

export const hideModal = () => ({
  type: uiTypes.HIDE_MODAL,
});

export const changeModalTitle = (title) => ({
  type: uiTypes.CHANGE_MODAL_TITLE,
  payload:{
    title
  }
});

export const changeModalConTent = (component) => ({
  type: uiTypes.CHANGE_MODAL_CONTENT,
  payload:{
    component
  }
});
