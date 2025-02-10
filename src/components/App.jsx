import { Container } from './Container/Container';
import { Feedback } from './Feedback/Feedback';
import { Phonebook } from './Phonebook/Phonebook';

function App() {
  return (
    <Container>
      <Feedback />
      <Phonebook />
    </Container>
  );
}

export default App;
