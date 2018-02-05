import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionAuthCreators from '../actions/auth';
// Import action/data
import * as actionDataCreators from '../actions/data';

function mapStateToProps(state) {
    return {
        isRegistering: state.auth.isRegistering,
        registerStatusText: state.auth.registerStatusText,
        data: state.data,
        loaded: state.data.loaded,
        isFetching: state.data.isFetching,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionDataCreators, dispatch);
}

@connect(mapStateToProps, mapDispatchToProps)
export default class Analytics extends React.Component { // eslint-disable-line react/prefer-stateless-function

    componentDidMount() {
        this.fetchData();
    }


    fetchData() {
        this.props.fetch_NBA_2016_2017_Season_Data();
    }

    render() {   
        return ( 
            
            <div className="col-md-8">
                <h1>Analytics</h1>
                    <hr />
                {!this.props.loaded
                    ? <h1>Loading requested data...</h1>
                    :
                    <div>
                        <h1>NBA 2016-2017 Season</h1>
                        <h1>{this.props.data.data.feed}</h1>
                    </div>    
                }                         
            </div>          
        );
    }
}

Analytics.propTypes = {
    fetch_NBA_2016_2017_Season_Data: React.PropTypes.func,
    loaded: React.PropTypes.bool,
    data: React.PropTypes.any,
};
