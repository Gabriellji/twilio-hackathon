import { Route, Switch } from "react-router-dom";
import LandingPage from "./components/landingPage/LandingPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={(props) => <LandingPage {...props} />} />
        <Route path="/login" render={(props) => <Login {...props} />} />
        <Route path="/register" render={(props) => <Register {...props} />} />
        <Route path="/mapSection" render={(props) => <MapSection {...props} />} />        
        <Route path="/myEvents" render={(props) => <MyEvents {...props} />} />
        <Route path="/createEvent" render={(props) => <CreateEvent {...props} />} />
        <Route path="/joinEvent" render={(props) => <JoinEvent {...props} />} />        
      </Switch>

      <LandingPage />
    </div>
  );
}

export default App;
