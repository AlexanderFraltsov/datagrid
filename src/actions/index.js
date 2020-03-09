export const sort = () => ({ type: 'sort' });

export const checkActive = () => ({ type: 'checkActive' });

export const chooseEyeColor = (choosedEyeColor) => {
  return {
    type: 'chooseEyeColor',
    payload: choosedEyeColor
  }
};
