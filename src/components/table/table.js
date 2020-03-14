import React, { Component } from 'react';
import { connect } from 'react-redux';

import { compose } from '../../utils';
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
    const { eyeColor, onlyActive, queryString, data } = this.props;
    const { loading, error } = this.state;

    if (error) {
      return <ErrorIndicator />
    }

    if (loading) {
      return <Spinner />
    }

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
        const {balance, age, eyeColor, name, phone, registered} = row;
        const result = [balance, age, eyeColor, name, phone, registered].some(
          el => `${el}`.toLowerCase().includes(queryString)
        );
        return result;
      })

    return (
      <TableView data={filteredData}/>
    )
  };
}

const mapStateToProps = (state) => {
  return {
    onlyActive: state.onlyActive,
    eyeColor: state.eyeColor,
    queryString: state.queryString,
    data: state.dataStore
  }
};

export default compose(
  connect(mapStateToProps, actions),
  withMyService
)(Table);
