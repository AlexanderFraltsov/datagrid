const reducer = (state = {data: null, onlyActive: false, eyeColor: [] }, action) => {

  switch (action.type) {
    case 'checkActive':
      return {
        ...state,
        onlyActive: !state.onlyActive
      };
    case 'chooseEyeColor':
        return {
          ...state,
          eyeColor: action.payload
        };
    default:
      return state;
  }
};

export default reducer;
