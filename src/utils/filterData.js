const filterData = (filters, data, cols) => {
  const {onlyActive, eyeColor, queryString} = filters;
  const filteredData = data
    .filter((row) => {
      if (onlyActive) { return row.isActive }
      return true;
    })
    .filter((row) => {
      if (eyeColor.length === 0) return true;
      return eyeColor.includes(row.eyeColor);
    })
    .filter((row) => {
      if (queryString.length === 0) return true;

      const result = cols
        .map(col => row[col.name])
        .some(
          cell => `${cell}`.toLowerCase().includes(queryString)
        );
      return result;
      })
  return filteredData;
};

export default filterData;
