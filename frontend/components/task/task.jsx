import React from 'react';
import MainSideBarContainer from './main_side_bar_container';
import MainBodyContainer from './main_body_container';
// import MainShowSectionContainer from './main_show_section_container';

class Tasks extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    document.body.classList.toggle('noscroll', this.props.isDark)
  }

  componentWillUnmount() {
    document.body.classList.remove('noscroll')
  }

 render(){
   return(
   <div>
     <div className= 'mainLayout'>
       <aside className= 'mainSideBar'>
         <MainSideBarContainer />
       </aside>
       <section  className= 'mainBody'>
         { this.props.children}
       </section>
     </div>

   </div>);
   }

}

export default Tasks;
