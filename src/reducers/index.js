const initialState = {
  filters: {
    onlyActive: false,
    eyeColor: [],
    queryString: '',
  },
  cols: [
    { label: 'Name' , name: 'name', visible: true },
    { label: 'Age' , name: 'age', visible: true },
    { label: 'Eye Color' , name: 'eyeColor', visible: true },
    { label: 'Phone' , name: 'phone', visible: true },
    { label: 'Is Active' , name: 'isActive', visible: true },
    { label: 'Balance' , name: 'balance', visible: true },
    { label: 'Registered' , name: 'registered', visible: true },
  ],
  dataStore: null,
  queryString: '',
  isVirtualization: true,
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case 'CHECK_ACTIVE':
      return {
        ...state,
        filters: {
          ...state.filters,
          onlyActive: !state.filters.onlyActive
        }
      };
    case 'CHOOSE_EYE_COLOR':
        return {
          ...state,
          filters: {
            ...state.filters,
            eyeColor: action.payload
          }
        };
    case 'SET_DATA_STORE':
      return {
        ...state,
        dataStore: action.payload
      };
    case 'SET_QUERY_STRING':
      return {
        ...state,
        filters: {
          ...state.filters,
          queryString: action.payload
        }
      };
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


const updateColumnsVisible = (state, item) => {
  const newColumns = [...state.cols];
  const column = newColumns[item];

  newColumns.splice(item, 1, {...column, visible: !column.visible});

  return {
    ...state,
    cols: newColumns
  };
}
