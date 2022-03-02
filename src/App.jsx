import { ChakraProvider } from '@chakra-ui/react';
import Header from './components/Header';
import Main from './components/Main';

function App() {

  return (
    <ChakraProvider>
      <Header />
      <Main />
    </ChakraProvider>
  )
}

export default App
