import { ApolloProvider } from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';
import { SlugProvider } from './hooks/UseDraggableVideo';
import { client } from './lib/apollo';
import { Event } from './pages/Event';
import { Router } from './Router';

function App() {
  return (
    <ApolloProvider client={client}>
      <SlugProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </SlugProvider>
    </ApolloProvider>
  );
}

export default App;
