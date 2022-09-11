// 数据操作 模块
export const dataOperation = {
	// 数据保存 异步存储
	setStorage(object = {}){
		return new Promise(resolve => {
			object.data = JSON.stringify(object.data)
			localStorage.setItem(object.key, object.data);
			resolve(object.success(this.$(object.el)))
		})
	},
	// 数据存储 同步存储
	setStorageSync(key, data){
		data = JSON.stringify(data)
		localStorage.setItem(key, data);
	},
	/* 
	 循环存储到同一对象
	 */
	/* 
	  写入本地
	 */
	/* 
		移除数据
	 */
	
}