import React from 'react';

import BenchmarkComponent from './BenchmarkComponent';


class BenchmarkContainer extends React.Component {

    render(){
        return (
            <div className="font-weight-bold">
                <BenchmarkComponent />
            </div>
        )

    }
}


export default BenchmarkContainer;