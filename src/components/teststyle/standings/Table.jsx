import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStats } from '../../redux/actions/fetchStats';
import retiredDrivers from '../../../data/retiredDrivers';
import TableRow from './TableRow';
import Podium from './Podium';
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
    const driversItems = filteredDrivers
      .slice(3)
      .map((driver, idx) => (
        <TableRow
          ranking={driver}
          driver={driver.Driver}
          key={idx}
          constructor={driver.Constructor}
        />
      ));

    const podiumDrivers = filteredDrivers.slice(0, 3);

    return this.props.isLoading ? null : (
      <>
        <Podium data={podiumDrivers} />
        <div className="Table table-container">
          <table className="table">
            <thead>
              <tr>
                <th>Pos</th>
                <th></th>
                <th className="text-left">Name</th>
                <th className="text-left">Team</th>
                <th className="text-left">Pts</th>
              </tr>
            </thead>
            <tbody>{driversItems}</tbody>
          </table>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  drivers: state.drivers,
});

export default connect(mapStateToProps, { fetchStats })(Table);
