import {BrowserRouter as Router, Route} from "react-router-dom";

import Loginpage from "./Loginpage";
import Mainpage from "./Mainpage/index2";

function App() {
  return(
    <div>
      <Router>
        <Route exact path="/login" component={Loginpage}/>
        <Route exact path="/main" component={Mainpage}/>
      </Router>
    </div>

  );
}



export default App;
