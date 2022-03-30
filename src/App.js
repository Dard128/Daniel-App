import {BrowserRouter as Router, Route} from "react-router-dom";

import Loginpage from "./Loginpage";
import Mainpage from "./Mainpage";

function App() {
  return(
    <div>
      <Router>
        <Route path="/Login" component={Loginpage}/>
        <Route path="/Main" component={Mainpage}/>
        <Mainpage />
      </Router>
    </div>

  );
}



export default App;
