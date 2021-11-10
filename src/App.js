import { Switch, Route } from 'react-router-dom';

import Container from './components/Container';
import TodoListView from './components/TodoList';
import AppBar from './components/AppBar/AppBar';
import HomeView from './views/HomeView';
import RegisterView from './views/RegisterView';
import LoginView from './views/LoginView';
import NotFoundView from './views/NotFoundView';

const App = () => {
  return (
    <Container>
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
    </Container>
  );
};

export default App;
