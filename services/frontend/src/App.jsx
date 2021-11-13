import { BrowserRouter, Switch, Route } from 'react-router-dom';
import * as pages from '@/pages';
import { Header } from '@/partials';
import './styles/App.scss';
import 'react-toastify/dist/ReactToastify.min.css';

export default function App() {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path="/" exact component={pages.Home} />
                <Route path="*" component={pages.NotFound} />
            </Switch>
        </BrowserRouter>
    );
}
