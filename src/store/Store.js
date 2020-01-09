import { observable,computed } from 'mobx';
class Todo {
  id = Math.random();
  @observable title = '';
  @observable finished = false;
  @observable price = 0;
  @observable amount = 1;
  @computed get total() {
    return this.price * this.amount;
  }
}
export default{
  Todo:new Todo()
}
 