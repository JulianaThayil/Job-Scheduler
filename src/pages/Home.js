import React from 'react';

//redux
import { connect } from 'react-redux';

const Home = (props) => {
    const { jobs } = props;
    return (
        <div >
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        jobs: state.jobs,
    };
};

export default connect(mapStateToProps)(Home);