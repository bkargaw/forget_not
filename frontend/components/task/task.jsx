import React from 'react';
import mainSideBar from './main_side_bar';
import mainBody from './main_body';
import mainShowSection from './main_show_section';

export const task = () => {
  debugger;
  return(<div>
    <aside>
      {mainSideBar}
    </aside>

    <section>
      {mainBody}
    </section>

    <section>
      {mainShowSection}
    </section>
  </div>);
};
