import React, { Component } from 'react';
import axios from 'axios';

class Metrics extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  getData = function getData() {
    let authToken = "Bearer " + localStorage.getItem('jwt');
    axios({
      url: `http://localhost:3000/skills/${this.props.match.params.skill}/metrics`,
      method: 'get',
      headers: {'Authorization': authToken, 'Content-Type': 'application/json'}
    })
    .then((response) => {
      let formattedData = response.data.map((metric) => {
        let newMetric = metric
        let date = new Date(metric.created_at);
        let UTCDay = date.getUTCDate();
        let UTCMonth = date.getUTCMonth();
        newMetric.day = UTCDay
        newMetric.month = UTCMonth
        return newMetric
      });
      console.log(formattedData);
      this.setState({data: formattedData});
    })
    .catch((error) => (console.log(error)));
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    return(
      <div className="Metrics">

      </div>
    );
  }
}

export default Metrics;