const toggleVirtualization = () => ({ type: 'TOGGLE_VIRTUALIZATION'});

const checkActive = () => ({ type: 'CHECK_ACTIVE' });

const setDataStore = (data) => ({
  type: 'SET_DATA_STORE',
  payload: data
});

const setSortValues = (sortArr) => ({
  type: 'SET_SORT_VALUES',
  payload: sortArr
});

const chooseEyeColor = (choosedEyeColor) => ({
  type: 'CHOOSE_EYE_COLOR',
  payload: choosedEyeColor
});

const setQueryString = (queryString) => ({
  type: 'SET_QUERY_STRING',
  payload: queryString
});

const toggleColumn = (column) => ({
  type: 'TOGGLE_COLUMN',
  payload: column
});

const checkRow = (row) => ({
  type: 'CHECK_ROW',
  payload: row
});

export {
  toggleVirtualization,
  checkActive,
  setDataStore,
  setSortValues,
  chooseEyeColor,
  setQueryString,
  toggleColumn,
  checkRow
}
