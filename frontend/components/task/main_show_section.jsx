import React from 'react';
import { Link } from 'react-router';

const mainShowSection =(props) =>{
  if(props.status){
    return(
      <ul>
        <h4>{props.title}</h4>
        <li>count {props.status.count}</li>
        <li>completed {props.status.completedCount}</li>
        <li>todayCount {props.status.todayCout}</li>
        <li>overDueCount {props.status.overDueCout}</li>
      </ul>
    );

  }else {
    return(
      <div>okkkkkkkkkkkkk</div>
    );
  }

};


export default mainShowSection;
