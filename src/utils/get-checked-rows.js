const actionForRows = (checkedRows, clicked, i) => {
  const arr = [...checkedRows]
  const indexInCheckedArr = arr.findIndex(el => el === i);

  if (clicked && arr.includes(i)) {
    arr.splice(indexInCheckedArr, 1);
  }
  if (!clicked && !arr.includes(i)) {
    arr.push(i);
  }
  return arr;
};

const getCheckedRows = (checkedRows, idx) => {
  let arr = [...checkedRows]
  const lastIndex = arr[arr.length - 1];
  const clicked = arr.includes(idx);
  if (idx < lastIndex) {
    for (let i = lastIndex; i >= idx; i--) {
      arr = actionForRows(arr, clicked, i);
    }
  } else {
    for (let i = lastIndex; i <= idx; i++) {
      arr = actionForRows(arr, clicked, i);
    }
  }
  return arr;
};

export default getCheckedRows;
