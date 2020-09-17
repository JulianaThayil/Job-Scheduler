import React from 'react';
import Table from "../components/Table";

//redux
import { connect } from 'react-redux';

const Home = (props) => {
    const { jobs } = props;
    return (
        <div >
            <Table jobs={jobs}></Table>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        jobs: state.jobs,
    };
};

export default connect(mapStateToProps)(Home);