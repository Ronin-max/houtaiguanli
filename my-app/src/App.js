import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import Login from './component/login';
import Admin from './component/admin';
import './App.css';

function App() {
  return (
      <ConfigProvider locale={zh_CN}>
          <div className="App">
              <Router>
                  <Switch>
                      <Route path={'/login'} component={Login} exact />
                      <Route path={'/'} component={Admin} />
                  </Switch>
              </Router >
          </div>
      </ConfigProvider>
  );
}

export default App;
