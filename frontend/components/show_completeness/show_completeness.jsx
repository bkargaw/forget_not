import * as d3 from "d3";
import React from 'react';
import Chart from '../../vendor/Chart'


class ShowCompleteness extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
            data: {
                "Incomplete": 1,
                "Complete": 2,
            }
        };
  }

  componentWillReceiveProps(newProps) {
    debugger
    if ( newProps.tasks.length ){
      let data = {}
      let tasks = newProps.tasks
      tasks.forEach(task => {
        let list_name;
          if (task.completed == true){
            list_name = 'Complete'
          }else {
            list_name = 'Incomplete'
          }
        if (data[list_name]){
          data[list_name] += 1
        }else{
          data[list_name] = 1
        }
      })
      // sort the data
      let keysSorted = Object.keys(data).sort((a,b)=>(data[b] - data[a]))
      let real_data = {}
      keysSorted.forEach(el =>real_data[el] = data[el])

      this.setState({data: real_data})
    }
  }

  render(){
    return(
      <div className='List_Show'>
          <h2>Task Status</h2>
            <Chart
                    type={"pie"}
                    width={300}
                    height={300}
                    innerRadius={10}
                    showTooltips={true}
                    showLegend={false}
                    data={this.state.data}
                />
      </div>
  );
  }
}

export default ShowCompleteness;
