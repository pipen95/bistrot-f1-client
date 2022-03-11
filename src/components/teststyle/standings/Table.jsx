import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStats } from '../../redux/actions/fetchStats';
import retiredDrivers from '../../../data/retiredDrivers';
import TableRow from './TableRow';
class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
    };
  }

  componentDidMount() {
    const stopLoading = () => {
      const el = document.querySelector('.loader-container');
      if (el) {
        el.remove(); // removing the spinner element
        // showing the app
        this.setState({ isLoading: false });
      }
    };
    this.props.fetchStats(stopLoading);
  }

  render() {
    const filteredDrivers = this.props.drivers.drivers.filter(
      (el) => !retiredDrivers.includes(el.Driver.driverId)
    );
    const driversItems = filteredDrivers.map((driver, idx) => (
      <TableRow
        ranking={driver}
        driver={driver.Driver}
        key={idx}
        constructor={driver.Constructor}
      />
    ));

    return this.props.isLoading ? null : (
      <>
        <div className="Podium center">
          <p>Podium</p>
        </div>
        <div className="Table table-container">
          <table className="table">
            <thead>
              <tr>
                <th>Pos</th>
                <th></th>
                <th>Name</th>
                <th>Country</th>
                <th>{'    '}</th>
                <th></th>
                <th>Team</th>
                <th>Wins</th>
                <th>Pts</th>
              </tr>
            </thead>
            <tbody>{driversItems}</tbody>
          </table>
        </div>
        <div className="Cta center">Cta</div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  drivers: state.drivers,
});

export default connect(mapStateToProps, { fetchStats })(Table);
