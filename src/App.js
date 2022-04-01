import {BrowserRouter as Router, Route} from "react-router-dom";

import Loginpage from "./Loginpage";
import Mainpage from "./Mainpage";

function App() {
  return(
    <div>
      <Router>
        <Route excat path="/Login" component={Loginpage}/>
        <Route exact path="/Main" component={Mainpage}/>
      </Router>
    </div>

  );
}



export default App;
