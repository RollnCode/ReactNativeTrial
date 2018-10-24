/**
  * RollnCode test work
  *
  */
import React from 'react';
import {HomeScreen, ArticleScreen, PostScreen} from './src/screen';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import {Router, Stack, Actions, Scene} from 'react-native-router-flux';
import { reduxifyNavigator, createReactNavigationReduxMiddleware, createNavigationReducer } from 'react-navigation-redux-helpers';
import thunk from 'redux-thunk';
import { Provider, connect } from 'react-redux';
import {UserReducer, TaskReducer, PostReducer, RefreshReducer} from './src/reducers';
import {colors} from './src/constants';

const AppNavigator = Actions.create(
  <Scene key="root">
    <Scene key="home" component={HomeScreen} title={"Home"} />
    <Scene key="article" component={ArticleScreen} />
    <Scene key="post" component={PostScreen} />
  </Scene>,
  {
    navigationBarStyle: {
       backgroundColor: colors.violet
    },
    titleStyle: {
       color: colors.white
    },
    headerBackTitleStyle: {
       color: colors.white
    },
    headerTintColor: colors.white
  }
);

// default nav reducer
const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('home'));

const navReducer = (state = initialState, action) => {
  const nextState = AppNavigator.router.getStateForAction(action, state);
  return nextState || state;
};

const appReducer = combineReducers({
  nav: navReducer,
  user: UserReducer,
  tasks: TaskReducer,
  posts: PostReducer,
  refresh: RefreshReducer
});

const middleware = createReactNavigationReduxMiddleware('root', state => state.nav);
const ReduxNavigator = reduxifyNavigator(AppNavigator, 'root');
const mapStateToProps = state => ({
  state: state.nav,
});
const ReduxRouter = connect(mapStateToProps)(Router);
const store = createStore(appReducer, applyMiddleware(middleware, thunk));

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ReduxRouter navigator={ReduxNavigator} />
      </Provider>
    );
  }
}
