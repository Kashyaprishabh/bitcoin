import { PiCurrencyCircleDollarFill } from 'react-icons/pi';

const MiniCards = () => {
  return (
    <div className="mini-cards three">
      <div className="left-card mini-card">
        <PiCurrencyCircleDollarFill
          className="Dollar"
          size={40}
          color="#1aa1f7"
        />
        <p>Buy BTC</p>
      </div>

      <div className="right-card mini-card">
        <PiCurrencyCircleDollarFill
          className="Dollar"
          size={40}
          color="#fe5587"
        />
        <p>Sell BTC</p>
      </div>
    </div>
  );
};
export default MiniCards;
