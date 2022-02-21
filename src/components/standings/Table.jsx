import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStats } from '../redux/actions/fetchStats';
import retiredDrivers from "../../data/retiredDrivers";
import dataTeams from '../../data/data_teams.json';
import dataDrivers from '../../data/data_drivers.json';
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

  countryPicker = (id, defaultVal) => {
    const x = dataDrivers.filter((el) => el.id === id);
    try {
      return x[0].country;
    } catch (e) {
      return defaultVal;
    }
  };

  imagePicker = (id, defaultVal) => {
    const x = dataTeams.filter((el) => el.id === id);
    try {
      return x[0].img;
    } catch (e) {
      return defaultVal;
    }
  };

  
  render() {
    const filteredDrivers = this.props.drivers.drivers.filter((el) => !retiredDrivers.includes(el.Driver.driverId))
    const driversItems = filteredDrivers.map((driver, idx) => (
      <>
        <tr key={idx}>
          <th scope="row" className="text-center">
            {driver.position}
          </th>
          <td>
            <a href={`${driver.Driver.url}`}>
              <img
                className="loserDriverImage"
                alt=""
                src={`https://res.cloudinary.com/f1-fantasy-tracker/image/upload/c_scale,f_auto,w_45/v1616743177/Headshots/${driver.Driver.FamilyName}.png`}
              />
            </a>
          </td>
          <td>{`${driver.Driver.GivenName}\u00a0${driver.Driver.FamilyName}`}</td>
          <td className="country text-center">
            <img
              className="country-flag"
              alt=""
              src={`${this.countryPicker(
                driver.Driver.driverId,
                'https://www.formula1.com/content/fom-website/en/drivers/esteban-ocon/_jcr_content/countryFlag.img.gif/1470912118447.gif'
              )}`}
            />
          </td>
          <th scope="col">{"    "}</th>
          <td>
            <a href={`${driver.Constructor.url}`}>
              <img
                className="rivalTeam"
                alt=""
                src={`${this.imagePicker(
                  driver.Constructor.constructorId,
                  'https://www.f1fantasytracker.com/Images/Constructors/AlphaTauriIcon.jpg'
                )}`}
              />
            </a>
          </td>
          <td>{driver.Constructor.Name}</td>
          <td className="text-center">{driver.wins}</td>
          <td className="text-center">{driver.points}</td>
        </tr>
      </>
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
