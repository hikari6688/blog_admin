react 学习记录
一.学习路线 1.语法和风格 2.组件 3.路由
4.hook
5.mobx 6.高阶组件 hoc 酱
7.ts 重构项目
8.koa 服务
9.docker 部署

二.笔记

        2019.12.3
          1.组件的实现方式，目前是使用函数式的组件

    ```javascript
           function Welcome(props) {
       return <h1>Hello, {props.name}</h1>;
      }
    ```

补充 es7 装饰器的使用
装饰器的使用主要是类装饰器和函数装饰器 1.类装饰器

```javascript
@testable
class MyTestableClass {
  // ...
}
function testable(target) {
  target.isTestable = true;
}
MyTestableClass.isTestable; // true

//用柯里化处理
function testable(isTestable) {
  return function(target) {
    //target形参就是装饰器要装饰的方法 这样进行封装可以直接非方法定义一些方法和属性
    target.isTestable = isTestable;
  };
}

@testable(true)
class MyTestableClass {}
MyTestableClass.isTestable; // true

@testable(false)
class MyClass {}
MyClass.isTestable; // false
```

2.函数装饰器

```javascript
function readonly(target, name, descriptor) {
  // descriptor对象原来的值如下
  // {
  //   value: specifiedFunction,
  //   enumerable: false,
  //   configurable: true,
  //   writable: true
  // };
  descriptor.writable = false;
  return descriptor;
}

readonly(Person.prototype, 'name', descriptor);
// 类似于
Object.defineProperty(Person.prototype, 'name', descriptor);
```

个人对类装饰器的理解：类似于往对象上挂 prototype 给对象定义额外的属性和方法
三.router 的使用
项目的路由基于 react-router-dom 1.路由的跳转和组件映射

```Javascript
  /*
    这是一个基础的路由跳转和组件映射方法
    通过Link组件可以实现前端路由的跳转
    Switch 组件可以匹配对应路由的组件 通过path去匹配
  */

  import React from "react";
  import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";
  export default function App() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/">
              <Home />
            </Route>
            <Route path={`${match.path}/:topicId`}>
              <Topic />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
  function Topic() {
    //通过useParams获取传递的query信息
    let { topicId } = useParams();
    return <h3>Requested topic ID: {topicId}</h3>;
  }
  function Home() {
    return <h2>Home</h2>;
  }

  function About() {
    return <h2>About</h2>;
  }

  function Users() {
    return <h2>Users</h2>;
  }

```

2.路由组件的生命周期(设置拦截)

3.路由的传参(传递 query 信息)

```javascript
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom';
export default function ParamsExample() {
  return (
    <Router>
      <div>
        <h2>Accounts</h2>
        <ul>
          <li>
            <Link to="/netflix">Netflix</Link>
          </li>
          <li>
            <Link to="/zillow-group">Zillow Group</Link>
          </li>
          <li>
            <Link to="/yahoo">Yahoo</Link>
          </li>
          <li>
            <Link to="/modus-create">Modus Create</Link>
          </li>
        </ul>
        <Switch>
          /* '/'后面的信息都会被当作id解析 */
          <Route path="/:id" children={<Child />} />
        </Switch>
      </div>
    </Router>
  );
}
function Child() {
  //useParams方法会把参数解构出来
  let { id } = useParams();
  return (
    <div>
      <h3>ID: {id}</h3>
    </div>
  );
}
```

4.多级路由(路由匹配)

```javascript
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useParams, useRouteMatch } from 'react-router-dom';
export default function NestingExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/topics">
            <Topics />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function Topics() {
  /*
    url会匹配当前的路径 比如父组件的url是https://qzy12.csb.app/topics/ichiko，那么path就是/topics/ichiko 
  */
  let { path, url } = useRouteMatch();
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${url}/rendering`}>Rendering with React</Link>
        </li>
        <li>
          <Link to={`${url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path={path}>
          <h3>Please select a topic.</h3>
        </Route>
        <Route path={`${path}/:topicId`}>
          <Topic />
        </Route>
      </Switch>
    </div>
  );
}

function Topic() {
  // The <Route> that rendered this component has a
  // path of `/topics/:topicId`. The `:topicId` portion
  // of the URL indicates a placeholder that we can
  // get from `useParams()`.
  let { topicId } = useParams();

  return (
    <div>
      <h3>{topicId}</h3>
    </div>
  );
}
```

4.路由组件信息元的传递(类似 vue router 的 meta) 6.路由重定向
使用<Redirect>组件实现路由的重定向
api:
1.to 重定向的地址(要跳转到哪里去) to 后可以是 String 直接写地址，也可以是对象里面填写元信息

```javascript
  //string格式
  <Redirect to="/somewhere/else" />
  //object格式
  <Redirect
    to={{
      pathname: "/login",
      search: "?utm=your+face",
      state: { referrer: currentLocation }
    }}
  />
```

2.push 目前不是很能理解
<Redirect push to="/somewhere/else" />
3.form 匹配前一个路由的信息，当从 xxx 路由跳转过来的时候，触发路由重定向，跳转到 to 的路由

```javascript
//不带参数
<Switch>
  <Redirect from='/old-path' to='/new-path' />
  <Route path='/new-path'>
    <Place />
  </Route>
</Switch>
//带query参数
<Switch>
  <Redirect from='/users/:id' to='/users/profile/:id'/>
  <Route path='/users/profile/:id'>
    <Profile />
  </Route>
</Switch>
```

4.关于 exact 和 strict 的作用和区别(都是用于精准匹配)
exact 加了 exact 不会认子路由
strict 加了 strict 之后，进入严格模式,必须一毛一样才会匹配,路由后面有斜杠而 url 中没有斜杠，是不匹配的

    这是网上的总结：
       如果没有子路由的情况，建议大家配都加一个exact；如果有子路由，建议在子路由中加exact，父路由不加；

四.mobx 的使用
(1)关键词 API
1.Observable 一般通过装饰器形式使用 @Observable 让变量和组件变成响应式的

除了使用 observable 装饰器还可以 observer 对象

```javascript

    import {observable, autorun, action} from "mobx";
        //api
        observable.object(props, decorators?, options?)
        var person = observable({
        // observable 属性:
        name: "John",
        age: 42,
        showAge: false,

        // 计算属性:
        get labelText() {
            return this.showAge ? `${this.name} (age: ${this.age})` : this.name;
        },
        // 动作:
        setAge(age) {
            this.age = age;
        }
    }, {
        setAge: action
    });

    // 对象属性没有暴露 'observe' 方法,
    // 但不用担心, 'mobx.autorun' 功能更加强大
    autorun(() => console.log(person.labelText));

    person.name = "Dave";
    // 输出: 'Dave'

    person.setAge(21);
    // 等等
```

2.computed 类似与 vue 的计算属性 数据发生变化的时候回自动处理数据，然后返回新的数据

```javascript
import { observable, computed } from 'mobx';
class OrderLine {
  @observable price = 0;
  @observable amount = 1;

  constructor(price) {
    this.price = price;
  }

  @computed get total() {
    return this.price * this.amount;
  }
}
```

3.Reactions 暂时没做深入研究

export 和 export default 的区别
引入 export 导出的东西时，需要加{} 如果时用 export default 的话，不需要{}

vscode 常用快捷键(解放鼠标)
1.ctrl+方向键可以 左右移动光标，按照单词来跳转
2.shift+方向键可以选择代码 ctrl+shift+方向键可以按块选择(更快捷) 3.代码首尾跳转
4.ctrl+g 可以跳到输入的行数
5.ctrl+上下方向键可以移动代码整体位置(光标不动!111)


react 模版
{
  "react-template": {
    "prefix": "re",
    "body": [
			"import React from \"react\";",
			"",
      "class Component extends React.Component{",
      "\t\tconstructor(props){",
      "\t\t\t\tsuper(props);",
			"\t\t\t\tthis.state={}",
			"\t\t}\n",
      "\tcomponentDidMount(){}",
			"\trender(){",
			"\t\treturn (",
			"\t\t\t\t$1",
			"\t\t\t);",
			"\t}",
			"}\n",
			"export default Name;"
    ],
    "description": "react class template"
  }
}



