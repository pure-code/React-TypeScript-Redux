import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../store/configureStore';
import {
  Container,
} from './styled';
import Header from '../../components/Header';
import Landing from "../Landing";
import '../../components/helpers/helpers.scss';
import '../../components/helpers/fontFace.scss';
import '../../components/helpers/normalize.min.scss';

interface App {

}

const App: React.FC<App> = () => {
  return (
    <Provider store={store}>
      <Router>
        <Container>
          <Header />
          <Landing />
        </Container>
      </Router>
    </Provider>
  );
};

export default App;