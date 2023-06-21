import { Provider } from 'react-redux';
import { store } from './infrastructure';
import { BrowserRouter } from 'react-router-dom'
import RouteLits from './RouteLits';
import { Container } from './layouts';


export function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Container>
          <RouteLits />
        </Container>
      </BrowserRouter>
    </Provider >
  );
}

export default App;
