import React from 'react';
import './App.css';
import {Button} from "@mui/material";
// import LabelBottomNavigation from "./component/BottomNavi";
import {Link, Routes,Route} from 'react-router-dom';
import First from "./view/First";
import LabelBottomNavigation from "./component/BottomNavi";

const App=()=>{
  return(
      <div>
          hello
          <Button component={Link} to= '/first' >다음페이지</Button>
          <Routes>
              <Route path="/label" element={<LabelBottomNavigation />} />
              <Route path="/first" element={<First />} />
          </Routes>
      </div>
  )
}
export default  App;