export function observer(_object,_key, _dom, _template) {
	
	const handler = {
		get: function(target, key) {
			return target[key];
		},
		set: function(target, _myKey, value) {
			if (_myKey && value) {
				// target[key] = value
				setTimeout(() => {
					let _domTemplate = _template.replace(/{{(.+?)}}/g, (match, key) => {
						// 说明是改变的数据量
						if(_key.replace(/\s+/g, "") == key.replace(/\s+/g, "")){
							// 判断是否为 object 类型
							if(value instanceof Object){
								return value.value
							}
							return value
						}else{
							if(_object[key.replace(/\s+/g, "")] instanceof Object){
								return _object[key.replace(/\s+/g, "")].value
							}
							return _object[key.replace(/\s+/g, "")]
						}
					})
					_dom.innerHTML = _domTemplate
				})
				if(value instanceof Object){
					return (target[_myKey] = value.value);
				}
				return (target[_myKey] = value);
			}
		}
	}
	const inputProxy = new Proxy({}, handler);
	inputProxy.value = _object[_key]
	return inputProxy
}
