import Chart from "../../components/chart/Chart"
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo"
import WidgetLg from "../../components/widgetLg/WidgetLg";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import "./home.css"

import { Userdata } from "D:/react/react-admin/src/dummyData.js";

function Home() {
  return (
    <div className="home">
        <FeaturedInfo/>
        <Chart data={Userdata} title="User Analytics" grid dataKey="Active User"/>
        <div className="homeWidget">
          <WidgetSm/>
          <WidgetLg/>
        </div>
    </div>
  )
}

export default Home