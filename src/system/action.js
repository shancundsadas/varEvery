import { domOperation } from './domOperation'
// 动作操作  （点击 滑动 等）模块
export const action = {
	// 滑动到dom最底部 同步
	slideDomDownSync(dom){
		return new Promise(resolve => {
			setTimeout(() => {
				domOperation.ifExistSync(dom).then((r) => {
					document.documentElement.scrollTop = r.clientHeight
					setTimeout(() => {
						resolve()
					}, 100)
				})
			}, 100)
		})
	},
	// 异步 滑动到底部
	slideDomDown(object){
		return new Promise(resolve => {
			setTimeout(() => {
				domOperation.ifExistSync(object.el).then((r) => {
					document.documentElement.scrollTop = r.clientHeight
					setTimeout(() => {
						resolve(success())
					}, 100)
				})
			}, 100)
		})
	},
	// 滑动到底部检测 是否还有新数据  有继续加载 没有新数据则返回
}