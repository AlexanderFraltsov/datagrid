import React, { useEffect, useRef, useState} from 'react';
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

const TableRow = ({row, cols, style}) => {
  const {id} = row;

  const tableCells = cols
    .map(col => row[col.name])
    .map(cell => <TableCell key={`${id}+${cell}`} content={cell}/>);
  return (
    <div key={id} className='table--row' style={style}>
      {tableCells}
    </div>
  );
};

const TableView = ({data, isVirtualization, cols}) => {

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

  const tableData = data.map((row) => <TableRow row={row} cols={cols}/>);

  const Row = ({ index, style }) => {
    const row = data[index];
    return (
      <TableRow row={row} style={style} cols={cols}/>
    );
  };

  const labels = cols.map(col => col.label);

  return (
    <div className='table'>
      <div className={`sticky-wrapper${isSticky ? ' sticky' : ''}`} ref={ref}>
        <TableHeader labels={labels}/>
      </div>
      {
        isVirtualization ? (
          <List
            height={600}
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

export default TableView;
