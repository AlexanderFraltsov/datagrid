export const setSortValues = (sortArr) => ({
  type: 'SET_SORT_VALUES',
  payload: sortArr
});

export const checkActive = () => ({ type: 'CHECK_ACTIVE' });

export const chooseEyeColor = (choosedEyeColor) => ({
  type: 'CHOOSE_EYE_COLOR',
  payload: choosedEyeColor
});

export const setDataStore = (data) => ({
  type: 'SET_DATA_STORE',
  payload: data
});

export const setQueryString = (queryString) => ({
  type: 'SET_QUERY_STRING',
  payload: queryString
});

export const toggleColumn = (column) => ({
  type: 'TOGGLE_COLUMN',
  payload: column
});

export const toggleVirtualization = () => ({ type: 'TOGGLE_VIRTUALIZATION'});
