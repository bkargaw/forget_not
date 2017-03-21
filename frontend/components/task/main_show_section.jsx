import React from 'react';
import { Link } from 'react-router';

const mainShowSection =(props) =>{
  if(!props.task){
    return(
      <ul>
        <h4>{props.title}</h4>
        <li>count {props.status.count}</li>
        <li>completed {props.status.completedCount}</li>
        <li>todayCout {props.status.todayCout}</li>
        <li>overDueCout {props.status.overDueCout}</li>
      </ul>
    );

  }else {
    return(
      <div>{props.task.title}</div>
    );
  }

};


export default mainShowSection;
