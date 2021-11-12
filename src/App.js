import { Switch, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import Container from './components/Container';
import TodoListView from './components/TodoList';
import AppBar from './components/AppBar/AppBar';
import LoaderComponent from './components/LoaderComponent';
const HomeView = lazy(() =>
  import('./views/HomeView' /* webpackChunkName: "home-view" */),
);
const RegisterView = lazy(() =>
  import('./views/RegisterView' /* webpackChunkName: "authors-view" */),
);
const LoginView = lazy(() =>
  import('./views/LoginView' /* webpackChunkName: "login-view" */),
);
const NotFoundView = lazy(() =>
  import('./views/NotFoundView' /* webpackChunkName: "not-found-view" */),
);

const App = () => {
  return (
    <Container>
      <Suspense fallback={<LoaderComponent />}>
        <AppBar />

        <Switch>
          <Route path="/" exact>
            <HomeView />
          </Route>

          <Route exact path="/register">
            <RegisterView />
          </Route>

          <Route exact path="/login">
            <LoginView />
          </Route>

          <Route path="/todos">
            <TodoListView />
          </Route>

          <Route>
            <NotFoundView />
          </Route>
        </Switch>
      </Suspense>
    </Container>
  );
};

export default App;
