import { observable, computed, action, runInAction } from 'mobx';
class Todo {
  id = Math.random();
  @observable title = 'titleOrigin';
  @observable finished = false;
  @observable price = 0;
  @observable amount = 1;
  @computed get total() {
    return this.price * this.amount;
  }
  @action
  change = () => {
    this.title = 'titieChange';
  };
}
// export default{
//   Todo:new Todo()
// }

export default new Todo();
