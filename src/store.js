import { createStore, applyMiddleware, combineReducers} from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';

export function configureStore(history){

  const connected_redux = createStore(
    combineReducers({
      router: connectRouter(history)
    }),
    applyMiddleware(routerMiddleware(history))
  )
  return connected_redux
}
