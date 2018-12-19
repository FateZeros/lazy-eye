import { observable, action } from 'mobx'

class EngineModel {
  @observable num = 1

  @action
  addNum = () => {
    this.num += 1
  }
}
const engineModel = new EngineModel()

export default engineModel
