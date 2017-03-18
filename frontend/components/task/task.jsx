import React from 'react';
import MainSideBarContainer from './main_side_bar_container';
import MainBody from './main_body';
import MainShowSection from './main_show_section';

const Tasks = () => {
  return(
  <div className= 'mainLayout'>
    <aside className= 'mainSideBar'>
      < MainSideBarContainer />
    </aside>

    <section  className= 'mainBody'>
      < MainBody />
    </section>

    <section  className= 'mainShowSection'>
      < MainShowSection />
    </section>
  </div>);
};

export default Tasks;
