const reducer = (state = {
  dataStore: null,
  onlyActive: false,
  eyeColor: [],
  queryString: '',
  isVirtualization: true,
}, action) => {

  switch (action.type) {
    case 'CHECK_ACTIVE':
      return {
        ...state,
        onlyActive: !state.onlyActive
      };
    case 'CHOOSE_EYE_COLOR':
        return {
          ...state,
          eyeColor: action.payload
        };
    case 'SET_DATA_STORE':
      return {
        ...state,
        dataStore: action.payload
      };
    case 'SET_QUERY_STRING':
      return {
        ...state,
        queryString: action.payload
      };
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
