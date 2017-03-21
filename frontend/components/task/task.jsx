import React from 'react';
import MainSideBarContainer from './main_side_bar_container';
import MainBodyContainer from './main_body_container';
import MainShowSectionContainer from './main_show_section_container';

const Tasks = (props) => {
  return(
  <div>
    <div className= 'mainLayout'>
      <aside className= 'mainSideBar'>
        <MainSideBarContainer />
      </aside>

      <section  className= 'mainBody'>
        { props.children}
      </section>

      <section  className= 'mainShowSection'>
        <MainShowSectionContainer />
      </section>
    </div>

  </div>);
};

export default Tasks;
