import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStats } from '../redux/actions/fetchStats';
import retiredDrivers from "../../data/retiredDrivers";
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
    const filteredDrivers = this.props.drivers.drivers.filter((el) => !retiredDrivers.includes(el.Driver.driverId))
    const driversItems = filteredDrivers.map((driver, idx) => (
      <TableRow
      ranking={driver}
      driver={driver.Driver}
      key={idx}
      constructor={driver.Constructor}
    />
    ));

    return this.props.isLoading ? null : (
      <div className="table-responsive-sm">
        <table
          className="table table-striped table-dark"
          style={{ borderRadius: 6 }}
        >
          <thead>
            <tr>
              <th scope="col" className="text-center">
                Pos
              </th>
              <th scope="col"></th>
              <th scope="col">Name</th>
              <th scope="col" className="text-center">
                Country
              </th>
              <th scope="col">{"    "}</th>
              <th scope="col"></th>
              <th scope="col">Team</th>
              <th scope="col" className="text-center">
                Wins
              </th>
              <th scope="col" className="text-center">
                Pts
              </th>
            </tr>
          </thead>
          <tbody>{driversItems}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  drivers: state.drivers,
});

export default connect(mapStateToProps, { fetchStats })(Table);
