import './App.css';
import { Person } from './components/Person';

function App() {
  return (
    <div className="App">
        <Person name="Sergio" surname="Vidal" age="31" />
        <Person name="Alex" surname="Jimenez" age="24" />
        <Person name="Matias" surname="Salvatore" age="40" />
    </div>
  );
}

export default App;
