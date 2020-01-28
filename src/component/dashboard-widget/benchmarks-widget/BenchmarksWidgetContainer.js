import React, { Component } from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { getMarketBenchmarks} from "../../../redux/actions/benchmarkAction";
import BenchmarksWidgetComponent from "./BenchmarksWidgetComponent";
import { connect } from "react-redux";


class BenchmarksWidgetContainer extends Component {
  state = {};

  componentDidMount() {
    const {
      industryBenchmarks,
      getAllBenchmarks
    } = this.props;

    const data = {
      "startDate":1487888432250,
      "endDate":1574288432250,
      "pageSize":50,
      "pageNumber":1
    }

  if (industryBenchmarks && industryBenchmarks.length === 0) {
    getAllBenchmarks(data);
  }
    }

  render() {
    return (
      <Card style={{ height: "428px" }}>
        <Card.Header>Industry Benchmarks</Card.Header>
        <div className="alert alert-success alert-banner" role="alert">
          Compare your business to similar businesses in your area.
        </div>
        <Card.Body>
          {this.props.industryBenchmarks.map(benchmark => {return(
            <React.Fragment key={benchmark.measure}>
              <BenchmarksWidgetComponent industryBenchmark={benchmark} key={benchmark.description} />
              <br />
            </React.Fragment>
          )
          })}
        </Card.Body>

          <Card.Footer className="text-center">
            <Card.Link as={Link} to="/benchmarks" className="h6">
              see more
              <i className="fa fa-chevron-down pl-2" />
            </Card.Link>
          </Card.Footer>
      
      </Card>
    );
  }
}

BenchmarksWidgetContainer.propTypes = {
  getAllBenchmarks: PropTypes.func.isRequired
};

const mapStateToProps = state => {

  return {
    industryBenchmarks: state.benchmarkReducer.benchmarks
  };
};

const mapDispatchesToProps = dispatch => {
  return {
    getAllBenchmarks: data => dispatch(getMarketBenchmarks(data))
  };
};

BenchmarksWidgetContainer.propTypes = {
  getAllBenchmarks: PropTypes.func.isRequired,
  industryBenchmarks: PropTypes.array.isRequired
}


export default connect(
  mapStateToProps,
  mapDispatchesToProps
)(BenchmarksWidgetContainer);
