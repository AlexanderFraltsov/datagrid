export const sort = () => ({ type: 'sort' });

export const checkActive = () => ({ type: 'CHECK_ACTIVE' });

export const chooseEyeColor = (choosedEyeColor) => {
  return {
    type: 'CHOOSE_EYE_COLOR',
    payload: choosedEyeColor
  }
};

export const setDataStore = (data) => {
  return {
    type: 'SET_DATA_STORE',
    payload: data
  }
};

export const setQueryString = (queryString) => {
  return {
    type: 'SET_QUERY_STRING',
    payload: queryString
  }
};

export const toggleColumn = (column) => {
  return {
    type: 'TOGGLE_COLUMN',
    payload: column
  }
};

export const toggleVirtualization = () => ({ type: 'TOGGLE_VIRTUALIZATION'});
