import React from 'react';
import MainSideBarContainer from './main_side_bar_container';
import MainBodyContainer from './main_body_container';
import MainShowSection from './main_show_section';

const Tasks = () => {
  return(
  <div>
    <div className='blueSpace'>
    </div>

    <div className= 'mainLayout'>
      <aside className= 'mainSideBar'>
        < MainSideBarContainer />
      </aside>

      <section  className= 'mainBody'>
        < MainBodyContainer />
      </section>

      <section  className= 'mainShowSection'>
        < MainShowSection />
      </section>
    </div>
  </div>);
};

export default Tasks;
