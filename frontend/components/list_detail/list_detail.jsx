import * as d3 from "d3";
import React from 'react';
import Chart from '../../vendor/Chart'


class ListDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
            data: {
                "bob": 1,
                "nick": 2,
                "joe": 1,
                "dj": 2,
                "sweta": 1,
                "bruk": 2,
            }
        };
  }

  componentWillReceiveProps(newProps) {
    if ( newProps.tasks.length && Object.keys(newProps.lists).length ){
      let data = {}
      let tasks = newProps.tasks
      let lists = newProps.lists
      tasks.forEach(task => {
        let list_name = lists[task.list_id].name
        if (data[list_name]){
          data[list_name] += 1
        }else{
          data[list_name] = 1
        }
      })
      // sort the data
      let keysSorted = Object.keys(data).sort((a,b)=>(data[a] - data[b]))
      let real_data = {}
      keysSorted.forEach(el =>real_data[el] = data[el])

      this.setState({data: real_data})
    }
  }

  render(){
    return(
      <div className='List_Show'>
          <h2>List Breakdown</h2>
            <Chart
                    type={"pie"}
                    width={300}
                    height={300}
                    innerRadius={100}
                    showTooltips={true}
                    showLegend={false}
                    data={this.state.data}
                />
      </div>
  );
  }
}

export default ListDetail;
