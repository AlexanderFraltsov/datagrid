const filterData = (filters, data, columns) => {
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

      const result = columns
        .map(column => row[column.name])
        .some(
          cell => `${cell}`.toLowerCase().includes(queryString)
        );
      return result;
      })
  return filteredData;
};

export default filterData;
