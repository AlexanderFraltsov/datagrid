import React, { Component } from 'react';
import { connect } from 'react-redux';

import { compose, filterData } from '../../utils';
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
    const { data, filters, cols, isVirtualization } = this.props;
    const { loading, error } = this.state;

    if (error) {
      return <ErrorIndicator />
    }

    if (loading) {
      return <Spinner />
    }

    const filteredData = filterData(filters, data, cols);
    const visibleCols = cols.filter(col => col.visible);

    return (
      <TableView data={filteredData} cols={visibleCols} isVirtualization={isVirtualization}/>
    )
  };
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters,
    data: state.dataStore,
    cols: state.cols,
    isVirtualization: state.isVirtualization
  }
};

export default compose(
  connect(mapStateToProps, actions),
  withMyService
)(Table);
