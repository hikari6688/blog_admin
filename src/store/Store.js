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
class Config{
  // uploadUrl='http://192.168.5.106:8866/api/essay/fileUpload'
  uploadUrl='http://122.51.209.172:8888/api/essay/fileUpload'
}

const todo=new Todo();
const config=new Config();
export default {todo,config}

