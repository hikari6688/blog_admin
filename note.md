react 学习记录
一.学习路线 1.语法和风格 2.组件 3.路由
4.hook
5.mobx 6.高阶组件
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


补充 es7装饰器的使用
装饰器的使用主要是类装饰器和函数装饰器
1.类装饰器
```javascript
   @testable
      class MyTestableClass {
        // ...
      }
      function testable(target) {
        target.isTestable = true;
      }
      MyTestableClass.isTestable // true


      //用柯里化处理
      function testable(isTestable) {
        return function(target) {
          //target形参就是装饰器要装饰的方法 这样进行封装可以直接非方法定义一些方法和属性
          target.isTestable = isTestable;
        }
      }

      @testable(true)
      class MyTestableClass {}
      MyTestableClass.isTestable // true

      @testable(false)
      class MyClass {}
      MyClass.isTestable // false


```
2.函数装饰器

```javascript
  function readonly(target, name, descriptor){
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
个人对类装饰器的理解：类似于往对象上挂prototype 给对象定义额外的属性和方法
三.router的使用
四.mobx的使用
(1)关键词API
1.Observable  一般通过装饰器形式使用 @Observable 让变量和组件变成响应式的

  除了使用observable 装饰器还可以observer对象 
    
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

2.computed  类似与vue的计算属性 数据发生变化的时候回自动处理数据，然后返回新的数据
 ```javascript
    
    import {observable, computed} from "mobx";
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
