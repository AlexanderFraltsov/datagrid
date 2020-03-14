const sortFn = (a, b, dataType, direction) => {
  switch (dataType) {
    case 'boolean': {
      if (a && !b) return direction ? 1 : -1;
      if (!a && b) return direction ? -1 : 1;
      return 0;
    }
    case 'number': {
      if (a > b) return direction ? 1 : -1;
      if (a < b) return direction ? -1 : 1;
      return 0;
    }
    case 'string': {
      if (a > b) return direction ? 1 : -1;
      if (a < b) return direction ? -1 : 1;
      return 0;
    }
    case 'date': {
      const date1 = Date.parse(a);
      const date2 = Date.parse(b);
      if (date1 > date2) return direction ? 1 : -1;
      if (date1 < date2) return direction ? -1 : 1;
      return 0;
    }
    default: break;
  }
}

const sortData = (sort, data) => {
  if (sort.length === 0) return data;
  const sorted = data.sort(
    (a, b) => {
      let res = 0;
      sort.forEach(el => {
        const {name, dataType, isSortDirectionToDown: direction} = el;;
        if (res === 0) res = sortFn(a[name], b[name], dataType, direction);
      })
      return res;
    }
  );
  return sorted;
};

export default sortData;
