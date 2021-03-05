import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import News from "./News";
import Newshead from './Newshead';
import Newsdata from "./Newsdata";
import Blankspace from "./Blankspace";





ReactDOM.render( 
  <>

    <Newshead></Newshead>

    <h3 class="heading">Headlines</h3>

     {Newsdata.map((val) => {
        return(
          <News 
            key = {val.id}
            imgsrc={val.imgsrc} 
            title={val.title} 
            sname={val.sname} 
            link={val.links}
          />
        );
      }
    )}


    <Blankspace/>

    {/* <News></News> */}

  </>,
  document.getElementById('root')
);
