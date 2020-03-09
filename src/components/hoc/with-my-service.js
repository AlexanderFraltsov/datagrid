import React from 'react';
import {MyServiceConsumer} from '../my-service-context';

const withMyService = (Wrapped) => {
  return (props) => {
    return (
      <MyServiceConsumer>
        {
          (myService) => <Wrapped
              { ...props }
              myService={myService} />
        }
      </MyServiceConsumer>
    );
  };
};

export default withMyService;
