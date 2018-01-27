import React, { Component } from 'react';
import axios from 'axios';
import { VictoryChart, VictoryLine, VictoryTheme } from 'victory';

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
        let date = new Date(metric.created_at);
        let chartData = {x: date, y: metric.data};
        return chartData
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
        <VictoryChart
          theme={VictoryTheme.material}
          scale={{ x: "time" }}
        >
          <VictoryLine
            style={{
              data: { stroke: "#c43a31" },
              parent: { border: "1px solid #ccc"}
            }}
            data={this.state.data}
          />
        </VictoryChart>
      </div>
    );
  }
}

export default Metrics;