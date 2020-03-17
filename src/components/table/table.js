import React, { Component } from 'react';
import { connect } from 'react-redux';

import { compose, filterData, sortData } from '../../utils';
import { withMyService } from '../hoc';
import TableView from './table-view';
import ErrorIndicator from '../error-indicator';

import * as actions from '../../actions';
import Spinner from '../spinner';

class Table extends Component {

  state = {
    error: false,
    loading: true,
  }

  componentDidMount() {
    if (this.props.data !== null) {
      this.setState({loading: false});
      return;
    };
    this.props.myService.getAllPeople()
      .then(data => {
        this.props.setDataStore(data);
        this.setState({loading: false})
      })
      .catch(error => this.setState({
        error,
        loading: false
      }));
  };

  render () {
    const { data, filters, sort, columns, isVirtualization, removedRows } = this.props;
    const { loading, error } = this.state;

    if (error) {
      return <ErrorIndicator />
    }

    if (loading) {
      return <Spinner />
    }

    const filteredData = filterData(filters, data, columns);
    const sortedData = sortData(sort, filteredData).filter(el => {
        return !removedRows.includes(el.id);
      });
    const visibleCols = columns.filter(column => column.visible);

    return (
      <TableView data={sortedData} columns={visibleCols} isVirtualization={isVirtualization}/>
    )
  };
}

const mapStateToProps = (state) => {
  const { filters, sort, dataStore, columns, isVirtualization, removedRows} = state;
  return {
    filters,
    sort,
    data: dataStore,
    columns,
    isVirtualization,
    removedRows
  }
};

export default compose(
  connect(mapStateToProps, actions),
  withMyService
)(Table);
