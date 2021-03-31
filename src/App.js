import Routes from './routes';

import ApiToken from './services/ApiToken';
import { Background, Container } from './styles/pages';

function App() {
  return (
    <>
      <Background>        
        <Container>          
          <Routes />
        </Container>
      </Background>
      <ApiToken />
    </>
  );
}

export default App;
