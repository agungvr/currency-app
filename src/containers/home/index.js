import React, { lazy } from 'react'
import { withRouter } from 'react-router-dom';
import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { getExchangeRequest } from "../../redux/exchangeRate/get/actions";
import { setExchange, removeExchange, updateExchange } from "../../redux/exchangeRate/data/actions";

const Container = lazy(() => import('./container'));

const withConnect = connect(
  state => ({
    getExchange: state.getExchange,
    exchange: state.exchange
  }),
  dispatch => ({
    getExchangeRequest: (key) => dispatch(getExchangeRequest(key)),
    setExchange: (data) => dispatch(setExchange(data)),
    updateExchange: (data) => dispatch(updateExchange(data)),
    removeExchange: (key) => dispatch(removeExchange(key))
  }),
);

const withLifecycle = lifecycle({
  componentDidMount() {
    this.props.getExchangeRequest(this.props.exchange.init.base);
  }
});

const Home = props => (<Container {...props}/>);

export default compose(
  withRouter, withConnect, withLifecycle
)(Home);

