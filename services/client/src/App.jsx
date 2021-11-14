import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '@/store';
import * as pages from '@/pages';
import { Header } from '@/partials';
import './styles/App.scss';

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
            <Header />
            <Switch>
                <Route path="/" exact component={pages.Home} />
                <Route path="*" component={pages.NotFound} />
            </Switch>
        </BrowserRouter>
    </Provider>
  );
}
