import React, { useEffect, useRef, useState} from 'react';
import { connect } from 'react-redux';
import { FixedSizeList as List } from 'react-window';
import { CheckCircleRounded, NotInterested } from '@material-ui/icons';
import TableHeader from '../table-header';
import './table.css';

const TableCell = ({content}) => {
  if (typeof content === 'boolean') {
    const icon = content ?
      <CheckCircleRounded color='primary' /> :
      <NotInterested color='error' />
    return <div key={`${content}`} className='table--cell'>{icon}</div>
  }
  return <div key={content} className='table--cell'>{content}</div>
};

const TableRow = ({row, style}) => {
  const {id, name, age, eyeColor, phone, isActive, balance, registered} = row;
  const _cells = [name, age, eyeColor, phone, isActive, balance, registered];
  const tableCells = _cells.map((cell) => <TableCell key={cell} content={cell}/>);
  return (
    <div key={id} className='table--row' style={style}>
      {tableCells}
    </div>
  );
};

const TableView = ({data, isVirtualization}) => {

  const [isSticky, setSticky] = useState(false);
  const ref = useRef(null);
  const handleScroll = () => {
    setSticky(ref.current.getBoundingClientRect().top <= 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, []);

  const tableData = data.map((row) => <TableRow row={row}/>);

  const Row = ({ index, style }) => {
    const row = data[index];
    return (
      <TableRow row={row} style={style}/>
    )
  }

  return (
    <div className='table'>
      <div className={`sticky-wrapper${isSticky ? ' sticky' : ''}`} ref={ref}>
        <TableHeader />
      </div>
      {
        isVirtualization ? (
          <List
            height={800}
            itemCount={data.length}
            itemSize={50}
            width={'90vw'}
            className='table--body'
            >
            {Row}
          </List>
        ) : (
          <div className='table--body'>
            {tableData}
          </div>
        )
      }
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isVirtualization: state.isVirtualization
  }
};

export default connect(mapStateToProps)(TableView);
