import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import TextForm from './components/TextForm';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <>
      <Header title="Logo Here" />
      <Container>
        <TextForm heading="Enter Your Text to Analyze" />
      </Container>
    </>
  );
}

export default App;
