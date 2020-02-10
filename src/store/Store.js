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
  @action load = async () => {
    const data = await getData();
    runInAction(() => {
      this.name = data.name;
    });
  };
}
// export default{
//   Todo:new Todo()
// }

export default new Todo();
