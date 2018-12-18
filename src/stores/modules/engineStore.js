import { observable, action } from 'mobx'

class EngineStore {
  @observable num = 1

  @action
  addNum = () => {
    this.num += 1
  }
}
const engineStore = new EngineStore()

export default engineStore
