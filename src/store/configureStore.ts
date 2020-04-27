import { createStore, Store } from 'redux';
import rootReducer from '../reducers';

export type AppState = ReturnType<typeof rootReducer>;

function configureStore(): Store<AppState> {
  return createStore(rootReducer);
}

export const store = configureStore();
