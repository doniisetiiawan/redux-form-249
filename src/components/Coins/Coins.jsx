import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isFirstRender } from '../../shared/utils/frontend';
import './Coins.css';

class Coins extends Component {
  componentWillMount() {
    const { fetchCoins } = this.props;

    fetchCoins();
  }

  render() {
    const { coins: { coins } } = this.props;

    if (isFirstRender(coins)) {
      return null;
    }

    return (
      <div className="Coins">
        <h1>Top 100 Coins</h1>
        <ul>
          {coins.map((coin, key) => (
            <li key={key}>
              <span className="left">
                {coin.rank} {coin.name} {coin.symbol}
              </span>
              <span className="right">${coin.price_usd}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

Coins.propTypes = {
  fetchCoins: PropTypes.func.isRequired,
  coins: PropTypes.array,
};

export default Coins;
