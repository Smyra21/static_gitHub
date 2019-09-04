import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as overviewActionCreator from './OverviewActionCreator';
import { array, element } from "prop-types";

class Overview extends Component {
 constructor(props){
 super(props);
 this.overviewActions = this.props.overviewActions;
 console.log('props',props)
    }
 componentWillMount(){
  console.log("props", this.overviewActions);   
 }   

 componentDidMount(){
  const { overviewActions } = this.props;
  overviewActions.getRepos();
 }
         
 render() {
    return (
        <div>
            Popular Repositories
            {this.props.overview}
        </div>
      );
    }
}

const mapStateToProps = (state) => {
    return {
       overview: state.repos
    }
}

const mapDispatchToProps = (dispatch) => ({
     overviewActions: bindActionCreators(overviewActionCreator, dispatch)
});

Overview.propTypes = {
    overviewActions:array
}


export default connect(mapStateToProps, mapDispatchToProps)(Overview);

