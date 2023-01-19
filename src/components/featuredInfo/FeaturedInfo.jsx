import "./featuredInfo.css"
import {ArrowDownward,ArrowUpward} from '@mui/icons-material';

function FeaturedInfo() {
  return (
    <div className="featured">
        <div className="featuredItem">
            <span className="featuredTitle">Revenue</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$5000</span>
                <span className="featuredMoneyRate">-14.56 <ArrowDownward className="featuredIcon negative"/></span>
            </div>
            <span className="featuredSub">Compared To Last month</span>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">Sales</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$8000</span>
                <span className="featuredMoneyRate">-1.56 <ArrowDownward className="featuredIcon negative"/></span>
            </div>
            <span className="featuredSub">Compared To Last month</span>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">Cost</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$6000</span>
                <span className="featuredMoneyRate">+2.56 <ArrowUpward className="featuredIcon"/></span>
            </div>
            <span className="featuredSub">Compared To Last month</span>
        </div>
    </div>
  )
}

export default FeaturedInfo