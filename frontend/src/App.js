import EventForm from "./components/eventForm/EventForm";
import LogInForm from "./components/logInForm/LogInForm";
import RegisterForm from "./components/registerForm/RegisterForm";

function App() {
  return (
    <div className="App">
      <h1>Yo</h1>
      <RegisterForm/>
      <LogInForm />
      <EventForm />
    </div>
  );
}

export default App;
