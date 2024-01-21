import { LuDot } from 'react-icons/lu';
import CurvedChart from './CurvedChart';

const GraphCard = ({currentData}) => {
  console.log(currentData.graph);
  return (
    <div className="graph-card two">
      <div className="dots">
        <header>
          <div>
            <LuDot size={35} className="reddot1" color="red" />
            <span className="Lower">Lower: {currentData.Lower}</span>
          </div>
          <div>
            <LuDot size={35} className="reddot2" color="#1ec070" />
            <span className="Higher">Higher: {currentData.Higher}</span>
          </div>
        </header>
        <div className="charts">
          <CurvedChart currentData={currentData}/>
        </div>
        <footer>
          <LuDot size={35} className="reddot3" color="orange" />
          <p className="Lowest">1BTC: {currentData.BTC}</p>
        </footer>
      </div>
    </div>
  );
};
export default GraphCard;
