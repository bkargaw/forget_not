import React from 'react';
import MainSideBar from './main_side_bar';
import MainBody from './main_body';
import MainShowSection from './main_show_section';

const Tasks = () => {
  return(
  <div>
    <aside>
      < MainSideBar />
    </aside>

    <section>
      < MainBody />
    </section>

    <section>
      < MainShowSection />
    </section>
  </div>);
};

export default Tasks;
