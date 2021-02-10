import EventForm from "./components/eventForm/EventForm";
import LogInForm from "./components/logInForm/LogInForm";
import RegisterForm from "./components/registerForm/RegisterForm";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./components/landingPage/LandingPage";
import Login from './components/login/Login';
import Register from './components/register/Register';
import MapSection from './components/mapSection/MapSection';
import MyEvents from './components/myEvents/MyEvents';
import CreateEvent from './components/createEvent/CreateEvent';
import JoinEvent from './components/joinEvent/JoinEvent';

function App() {
  return (
    <div className="App">
      <h1>Yo</h1>
      <RegisterForm/>
      <LogInForm />
      <EventForm />
      <Switch>
        <Route exact path="/" render={(props) => <LandingPage {...props} />} />
        <Route path="/login" render={(props) => <Login {...props} />} />
        <Route path="/register" render={(props) => <Register {...props} />} />
        <Route path="/mapSection" render={(props) => <MapSection {...props} />} />        
        <Route path="/myEvents" render={(props) => <MyEvents {...props} />} />
        <Route path="/createEvent" render={(props) => <CreateEvent {...props} />} />
        <Route path="/joinEvent" render={(props) => <JoinEvent {...props} />} />        
      </Switch>

      {/* <LandingPage />      */}

    </div>
  );
}

export default App;
