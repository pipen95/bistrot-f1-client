import React from 'react';
import { Provider } from 'react-redux';
import store from '../../redux/store/store';
import Table from './Table';

function Standings() {
  return (
    <div className="Standings">
      <Provider store={store}>
        <div className="loader-container">
          <div className="loader"></div>
        </div>
        <Table />
      </Provider>
    </div>
  );
}

export default Standings;
