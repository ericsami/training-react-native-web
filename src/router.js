import React from 'react';
import { Router, Route, IndexRoute } from 'dva/router';
import PropTypes from 'prop-types'
import App from './routes/App';

const registerModel = (app, model) => {
  if (!(app._models.filter(m => m.namespace === model.namespace).length === 1)) {
    app.model(model)
  }
}
function getBrowserInfo()
{
  const agent = navigator.userAgent.toLowerCase() ;
  const regStr_ie = /msie [\d.]+;/gi ;
  const regStr_firefox = /firefox\/[\d.]+/gi
  const regStr_chrome = /chrome\/[\d.]+/gi ;
  const regStr_safari = /safari\/[\d.]+/gi ;
  console.log(agent);
  //Chrome
  if(agent.indexOf("chrome") > 0)
  {
      return agent.match(regStr_chrome) ;
  }
  //IE11版本中不包括MSIE字段
  else if(agent.indexOf("trident")>0 && agent.indexOf("rv")>0)
  {
    return agent.match(/rv:(\d+\.\d+)/);
  }
  // IE11以下
  else if(agent.indexOf("msie")>0)
  {
    return agent.match(regStr_ie);
  }
  //firefox
  else if(agent.indexOf("firefox") > 0)
  {
      return agent.match(regStr_firefox) ;
  }
  //Safari
  else if(agent.indexOf("safari") > 0 && agent.indexOf("chrome") < 0)
  {
      return agent.match(regStr_safari) ;
  }
}
const Routers = function({history, app}){

  window.dva = app;

  const routes = [
    {
      path: '/',
      component: App,
      childRoutes:[
        {
          path:'login',
          getComponent (nextState, cb){
            const version=getBrowserInfo();
            const info=version.toString().split('/');
            if(info[0].indexOf('msie')>=0)
            {
              const s=info[0].replace('msie','').trim();
              if(parseInt(s)<9)
              {
                alert('当前版本为IE '+s.replace(';','')+',本系统需要使用Chrome56及以上、IE9及以上、FireFox56及以上、Safari5及以上');
              }
            }
            if('chrome'==info[0])
            {
              if(parseInt(info[1])<56)
              {
                alert('当前版本为Chrome '+info[1]+',本系统需要使用Chrome56及以上、IE9及以上、FireFox56及以上、Safari5及以上');
              }
            }
            if('firefox'==info[0])
            {
              if(parseInt(info[1])<56)
              {
                alert('当前版本为FireFox '+info[1]+',本系统需要使用Chrome56及以上、IE9及以上、FireFox56及以上、Safari5及以上');
              }
            }
            if('safari'==info[0])
            {
              if(parseInt(info[1])<5)
              {
                alert('当前版本为Safari '+info[1]+',本系统需要使用Chrome56及以上、IE9及以上、FireFox56及以上、Safari5及以上');
              }
            }
            require.ensure([],(require) => {
              registerModel(app,require('./models/login'))
              cb(null,require('./routes/Login'))
            },'login')
          }
        },
        {
          path:'bizs',
          getComponent (nextState, cb){
            require.ensure([],(require) => {
              registerModel(app,require('./models/bizs'))
              registerModel(app,require('./models/dashboard'))
              cb(null,require('./routes/bizs/Bizs'))
            },'bizs')
          }
        },
        {
          path:'chats',
          getComponent (nextState, cb){
            require.ensure([],(require) => {
              registerModel(app,require('./models/chats'))
              cb(null,require('./routes/chats/Chats'))
            },'chats')
          }
        },
        {
          path:'searchs',
          getComponent (nextState, cb){
            require.ensure([],(require) => {
              registerModel(app,require('./models/searchs'))
              cb(null,require('./routes/searchs/MainPage'))
            },'searchs')
          }
        } ,
        {
          path:'addressbook',
          getComponent (nextState, cb){
            require.ensure([],(require) => {
              registerModel(app,require('./models/addressbook'))
              cb(null,require('./routes/AddressBook'))
            },'addressbook')
          }
        }
      ]


    }
  ]

  return <Router history={history} routes={routes} />
}

Routers.propTypes = {
  history: PropTypes.object,
  app: PropTypes.object,
}

export default Routers


