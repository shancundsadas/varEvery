import { sleep } from './common.js'
import { observer } from './VM.js'
export const domOperation = {
	// 获取元素
	$(el){
		if (document.querySelectorAll(el).length > 1) {
			return document.querySelectorAll(el);
		}
		return document.querySelector(el);
	},
	ifExist(object) {
		return new Promise(resolve => {
			if (object.time === undefined) {
				object.time = 0
			}
			let appfun = () => {
				if (this.$(object.el) == null) {
					sleep(800).then(() => {
						appfun()
					})
				} else {
					sleep(object.time).then(() => {
						resolve(object.success(this.$(object.el)))
					})
				}
			}
			appfun()
		})
	},
	ifExistSync(el, time) {
		return new Promise(resolve => {
			if (time === undefined) {
				time = 0
			}
			let appfun = () => {
				if (this.$(el) == null) {
					sleep(800).then(() => {
						appfun()
					})
				} else {
					sleep(time).then(() => {
						resolve(this.$(el))
					})
				}
			}
			appfun()
		})
	},
	// 生成dom
	generateDOM(option = {}) {
		// 推送style
		if(option.style){
			let _BFStyle = document.createElement("style")
			_BFStyle.innerHTML = option.style
			document.head.appendChild(_BFStyle)
		}
		// 生成 dom 并实现双向绑定
		var _bfDom = document.createElement("div")
		_bfDom.id = option.id || ''
		var newTemplate = option.template.replace(/{{(.+?)}}/g, (match, key) => {
			// 设置为响应数据
			this[key.replace(/\s+/g, "")] = observer(this,key.replace(/\s+/g, ""),_bfDom,option.template)
		})
		document.body.appendChild(_bfDom)
	}
}
