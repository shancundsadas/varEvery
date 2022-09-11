import { sleep } from './system/common.js'
import { domOperation } from './system/domOperation'
import { dataOperation } from './system/dataOperation'
import { action } from './system/action'
const apiObj = {
  ...domOperation,
  ...dataOperation,
  ...action
}

class VarEvery {
	constructor(options = {}) {
		
		// 挂载公共方法
		this.sleep = sleep
		
		// 挂载 data 数据
		this.$data = options.data;
		for (let key in this.$data) {
			eval('this.' + key + '=  this.$data .' + key);
		}
		// 挂载方法
		this.$methods = options.methods
		for (let key in this.$methods) {
			eval('this.' + key + '= this.$methods.' + key);
		}
		// 立即执行函数
		this.$mounted = options.mounted
		let onLoad = () => {
			if (this.$mounted) {
				this.$mounted()
			}
		}
		onLoad()
	}
	
}
Object.assign(VarEvery.prototype, apiObj)
console.log(new VarEvery())
export default VarEvery