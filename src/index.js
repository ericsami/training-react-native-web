
import 'babel-polyfill';
import dva from 'dva';
import './index.css';
import createLoading from 'dva-loading';
import { browserHistory } from 'dva/router'
import { message } from 'antd'

// 1. Initialize
const app = dva({
  ...createLoading({
    effects: true,
  }),
  history: browserHistory,
  onError (error) {
    message.error(error.message)
    console.log(error.message)
  },
});

// 2. Plugins
// app.use({});
//app.use(createLoading());

// 3. Model
app.model(require('./models/app'));


// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');

console.log(app._store);
