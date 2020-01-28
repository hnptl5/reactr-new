import React from 'react';
import BenchmarkWidget from './BenchmarkWidget';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const BenchmarkHeader = (props) => {

    return (
        <Row className="benchmarks-header" style={{ padding: 15 , flexWrap: 'nowrap'}}>
            <Col md={10} style={{ paddingTop: 5 }}>
                <label>Industry BenchMarks</label>
                <div>The below numbers are based off similar businesses in your area.</div>
            </Col>
            <Col md={2} className="text-right">
                <i className="far fa-bell" style={{ padding: 15 }}/>
            </Col>

        </Row>
    )
}

const BenchmarkComponent = (props) => {

    return (
        <div>
            <BenchmarkHeader />
            <Row>
                <Col md={6}>
                    <BenchmarkWidget />
                </Col>
                <Col md={6}>
                    <BenchmarkWidget />
                </Col>
            </Row>
            <br />
            <Row>
                <Col md={6}>
                    <BenchmarkWidget />
                </Col>
                <Col md={6}>
                    <BenchmarkWidget />
                </Col>
            </Row>
        </div>
    )
};


export default BenchmarkComponent;