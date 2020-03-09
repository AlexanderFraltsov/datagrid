import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { connect } from 'react-redux';

import { compose } from '../../utils';
import { withMyService } from '../hoc';
import TableView from './table-view';

const useRequest = (request) => {
  const initialState = useMemo(() => ({
    data: null,
    loading: true,
    error: null
  }), []);

  const [dataState, setDataState] = useState(initialState);

  useEffect(() => {
    setDataState(initialState);
    let cancelled = false;
    request()
      .then(data => !cancelled && setDataState({
        data,
        loading: false,
        error: null
      }))
      .catch(error => !cancelled && setDataState({
        data: null,
        loading: false,
        error
      }))
    return () => cancelled = true;
  }, [request, initialState]);

  return dataState;
};

const getData = (promise) => {
  return promise.then(data => data);
};

const useTableData = ({getAllPeople}) => {
  const promise = getAllPeople();
  const request = useCallback(
    () => getData(promise), [promise]);
  return useRequest(request);
};

const Table = ({ myService, eyeColor, onlyActive }) => {

  const { data, loading, error } = useTableData(myService);

  if (error) {
    return <div>Error</div>
  }

  if (loading) {
    return <div>Loading</div>
  }

  data.length = 20;

  const filteredData = data
    .filter((row) => {
      if (onlyActive) { return row.isActive }
      return true;
    })
    .filter((row) => {
      if (eyeColor.length===0) return true;
      return eyeColor.includes(row.eyeColor);
    })

  return (
    <TableView data={filteredData}/>
  )
};

const mapStateToProps = (state) => {
  return {
    onlyActive: state.onlyActive,
    eyeColor: state.eyeColor
  }
};

export default compose(
  connect(mapStateToProps),
  withMyService
)(Table);

