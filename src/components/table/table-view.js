import React, { useEffect, useRef, useState} from 'react';
import { FixedSizeList as List } from 'react-window';
import TableHeader from '../table-header';
import TableRow from '../table-row';

import './table.css';

const TableView = ({data, isVirtualization, columns}) => {

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

  const tableData = data.map((row) => {
    const {id} = row;
    return (
      <TableRow key={id} row={row} columns={columns}/>
    )
  });

  const Row = ({ index, style }) => {
    const row = data[index];
    const {id} = row;
    return (
      <TableRow key={id} row={row} style={style} columns={columns}/>
    );
  };

  const arrayOfID = data.map(el => el.id);

  return (
    <div className='table'>
      <div className={`sticky-wrapper${isSticky ? ' sticky' : ''}`} ref={ref}>
        <TableHeader columns={columns} arrayOfID={arrayOfID}/>
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
