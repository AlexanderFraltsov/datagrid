const initialState = {
  filters: JSON.parse(localStorage.getItem('Filters')) || {
    onlyActive: false,
    eyeColor: [],
    queryString: '',
  },
  sort: [
    {name: 'age', isSortDirectionToDown: true, dataType: 'number' },
    {name: 'registered', isSortDirectionToDown: false, dataType: 'date' },
  ],
  columns: JSON.parse(localStorage.getItem('Columns')) || [
    { label: 'Name' , name: 'name', visible: true, dataType: 'string' },
    { label: 'Age' , name: 'age', visible: true, dataType: 'number' },
    { label: 'Eye Color' , name: 'eyeColor', visible: true, dataType: 'string' },
    { label: 'Phone' , name: 'phone', visible: true, dataType: 'string' },
    { label: 'Is Active' , name: 'isActive', visible: true, dataType: 'boolean' },
    { label: 'Balance' , name: 'balance', visible: true, dataType: 'number' },
    { label: 'Registered' , name: 'registered', visible: true, dataType: 'date' },
  ],
  dataStore: null,
  isVirtualization: true,
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case 'CHECK_ACTIVE':
      return updateFilters(state, 'onlyActive', !state.filters.onlyActive);
    case 'CHOOSE_EYE_COLOR':
      return updateFilters(state, 'eyeColor', action.payload);
    case 'SET_QUERY_STRING':
      return updateFilters(state, 'queryString', action.payload);
    case 'SET_DATA_STORE':
      return {
        ...state,
        dataStore: action.payload
      };
    case 'SET_SORT_VALUES':
      return state;
    case 'TOGGLE_COLUMN':
      return updateColumnsVisible(state, action.payload);
    case 'TOGGLE_VIRTUALIZATION':
      return {
        ...state,
        isVirtualization: !state.isVirtualization
      };
    default:
      return state;
  }
};

export default reducer;

const updateFilters = (state, item, value) => {
  const filters = {
    ...state.filters,
    [item] : value
  };

  localStorage.setItem('Filters', JSON.stringify(filters));
  return {
    ...state,
    filters
  };
};

const updateColumnsVisible = (state, item) => {
  const newColumns = [...state.columns];
  const column = newColumns[item];

  newColumns.splice(item, 1, {...column, visible: !column.visible});

  localStorage.setItem('Columns', JSON.stringify(newColumns));
  return {
    ...state,
    columns: newColumns
  };
};
