import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

function Chart(props) {
 
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={props.options} />
    </div>
  );
}

export default Chart;
