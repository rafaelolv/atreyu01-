import React, { Component } from 'react';
import { connect } from "react-redux";

import AreaAnuncios from '../components/main/AreaAnuncios';

import { retrieveAllPacotes } from '../actions/pacoteActions';

const mapDispatchToProps = dispatch => {
    return {
        retrieveAllPacotes: () => dispatch(retrieveAllPacotes())
    }
} 


class Main extends Component {

    componentDidMount() {
        this.props.retrieveAllPacotes();
    }

    render() {
        return (
            <AreaAnuncios />
        );
    }
};

export default connect(null, mapDispatchToProps) ( Main );