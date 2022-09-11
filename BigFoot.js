/* 
VarEvery.js  快捷脚本包
 */
class VarEvery {
	constructor(options) {
		this.$data = options.data;
		for (let key in this.$data) {
			eval('this.' + key + '=  this.$data .' + key);
		}

		this.$methods = options.methods


		for (let key in this.$methods) {
			eval('this.' + key + '= this.$methods.' + key);
		}

		this.$mounted = options.mounted
		console.log('引入', this)


		this.$ = (el) => {
			if (document.querySelectorAll(el).length > 1) {
				return document.querySelectorAll(el);
			}
			return document.querySelector(el);
		}


		this.ifExistSync = async (el, time) => {
			return new Promise(resolve => {
				if (time === undefined) {
					time = 0
				}
				let appfun = () => {
					if (this.$(el) == null) {
						this.sleep(800).then(() => {
							appfun()
						})
					} else {
						this.sleep(time).then(() => {
							resolve(this.$(el))
						})
					}
				}
				appfun()
			})
		}


		this.ifExist = (object) => {
			return new Promise(resolve => {
				if (object.time === undefined) {
					object.time = 0
				}
				let appfun = () => {
					if (this.$(object.el) == null) {
						this.sleep(800).then(() => {
							appfun()
						})
					} else {
						this.sleep(object.time).then(() => {
							resolve(object.success(this.$(object.el)))

						})
					}
				}
				appfun()
			})
		}


		// 数据保存
		this.setStorage = (key, value) => {
			value = JSON.stringify(value)
			localStorage.setItem(key, value);
		}


		this.setAllStorage = (key, value) => {
			if (this.getSaveData(key) === null) {
				let _newArr = []
				console.log('第一次', value)
				_newArr.push(value)
				this.setStorage(key, _newArr)
			} else {
				console.log('原先数据', this.getSaveData(key))
				let _newData12 = this.getSaveData(key)
				console.log(value, '拿到的数据')
				_newData12.push(value)
				this.setStorage(key, _newData12)
			}
		}

		this.getStorage = (key) => {
			if (localStorage.getItem(key) === 'undefined') {
				return null
			}
			return JSON.parse(localStorage.getItem(key))
		}

		this.removeStorage = (key) => {
			localStorage.removeItem(key);
		}


		this.removeAllStorage = () => {
			localStorage.clear();
		}


		this.slideDomDown = async (dom) => {
			return new Promise(resolve => {
				setTimeout(() => {
					this.ifExistSync(dom).then((r) => {
						document.documentElement.scrollTop = r.clientHeight
						setTimeout(() => {
							resolve()
						}, 100)
					})
				}, 100)
			})
		}

		this.slideDomDownSync = async (object) => {
			return new Promise(resolve => {
				setTimeout(() => {
					this.ifExistSync(object.el).then((r) => {
						document.documentElement.scrollTop = r.clientHeight
						setTimeout(() => {
							resolve(success())
						}, 100)
					})
				}, 100)
			})
		}

		// 滑动操作
		this.slide = async (newheight) => {
			return new Promise(resolve => {
				console.log('运行滑动', newheight)
				if (newheight === 0) {
					let height = document.documentElement.clientHeight;
					console.log('document.documentElement.clientHeight', height)
					console.log('滑动到最底部', height)

					setTimeout(() => {
						document.documentElement.scrollTop = height;
						setTimeout(() => {
							resolve()
						}, 100)
					}, 100)
				} else {
					setTimeout(() => {
						console.log('滑动', newheight)
						// document.body.scrollTop = document.body.scrollTop + newheight
						document.documentElement.scrollTop = document.documentElement
							.scrollTop + newheight;
						setTimeout(() => {
							resolve()
						}, 100)

					}, 100)
				}
			})
		}
		// 滑动操作
		this.slideSync = (newheight) => {
			return new Promise(resolve => {
				console.log('运行滑动', newheight)
				if (newheight === 0) {
					let height = document.documentElement.clientHeight;
					console.log('document.documentElement.clientHeight', height)
					console.log('滑动到最底部', height)

					setTimeout(() => {
						document.documentElement.scrollTop = height;
						setTimeout(() => {
							resolve()
						}, 100)
					}, 100)
				} else {
					setTimeout(() => {
						console.log('滑动', newheight)
						// document.body.scrollTop = document.body.scrollTop + newheight
						document.documentElement.scrollTop = document.documentElement
							.scrollTop + newheight;
						setTimeout(() => {
							resolve()
						}, 100)

					}, 100)
				}
			})
		}

		// 滑动验证码
		    /**
		     * @description 使用鼠标拖拽div，实现横向、纵向滚动
		     * @param el 被拖拽滚动的元素（产生滚动条的元素）
		     */
		    // function addDragable(el) {
		    //     let startX = 0; // el的scroll横向初始位置
		    //     let gapX = 0; // 鼠标点击时的横向初始位置
		    //     let startY = 0; // el的scroll纵向向初始位置
		    //     let gapY = 0; // 鼠标点击时的纵向初始位置
		    //     el.addEventListener("mousedown", start);
		    //     el.addEventListener("mouseleave", stop); // 移除时解除事件
		        
		    //     function start(event) {
		    //         // 判断是否点击鼠标左键
		    //         if (event.button == 0) {
		    //             gapX = event.clientX;
		    //             gapY = event.clientY;
		    //             startX = el.scrollLeft;
		    //             startY = el.scrollTop;
		    //             el.addEventListener("mousemove", move); // document
		    //             el.addEventListener("mouseup", stop);
		    //         }
		    //         // event.preventDefault(); // 阻止默认事件或冒泡 如拖拽时选中文本
		    //         return false;
		    //     }
		    //     function move(event) {
		    //         // 移动时的坐标 - 鼠标左键点击时的坐标 = 鼠标移动的相对距离
		    //         var left = event.clientX - gapX;
		    //         var top = event.clientY - gapY;
		    //         // 滚动条初始坐标 - 移动的相对距离 = 应该滚动后的坐标
		    //         el.scrollTo(startX - left, startY - top); // 横向 纵向
		    //         return false;
		    //     }
		    //     function stop() {
		    //         // 鼠标松开，解除绑定
		    //         el.removeEventListener("mousemove", move, false);
		    //         el.removeEventListener("mouseup", stop, false);
		    //     }
		    // }

		
		this.sleep = (time) => {
			return new Promise(resolve => {
				setTimeout(() => {
					resolve()
				}, time)
			})
		}


		this.sleepNewDataSync = (dom) => {
			return new Promise(resolve => {
				var _le = 0
				this.ifExistSync(dom).then((r) => {
					_le = r.length

					let againFunction = () => {
						this.ifExistSync(dom).then((r1) => {
							if (r1.length !== _le) {
								_le = r.length
								setTimeout(() => {
									resolve(_le)
								}, 10)
							} else {
								this.sleep(1000).then(() => {
									againFunction()
								})
							}
						})
					}
					againFunction()
				})

			})
		}

		this.sleepNewData = (object) => {
			return new Promise(resolve => {
				var _le = 0
				this.ifExistSync(object.dom).then((r) => {
					_le = r.length
					let againFunction = () => {
						this.ifExistSync(dom).then((r1) => {
							if (r1.length !== _le) {
								_le = r.length
								setTimeout(() => {
									resolve(object.success(_le))
								}, 10)
							} else {
								this.sleep(1000).then(() => {
									againFunction()
								})
							}
						})
					}
					againFunction()
				})

			})
		}

		this.importTheCss = (value) => {
			let _jb_body = document.head;
			let myStyle = document.createElement('style');
			myStyle.setAttribute('type', 'text/css');
			myStyle.innerText = value
			_jb_body.appendChild(myStyle);	
		}
		

		this.downloadFile = (data, fileName) => {
			let elementA = document.createElement('a');
			elementA.setAttribute('href', 'data:text/plain;charset=utf-8,' + JSON.stringify(data));
			elementA.setAttribute('download', +new Date() + "." + fileName);
			elementA.style.display = 'none';
			document.body.appendChild(elementA);
			elementA.click();
			document.body.removeChild(elementA);
		}
		

		this.importTheJSSync = (src) => {
			return new Promise((resolve) => {
				let _jb_body = document.head;
				let axiosScript = document.createElement('script');
				axiosScript.setAttribute('type', 'text/javascript');
				axiosScript.setAttribute('charset', 'utf-8');
				axiosScript.src = src
				_jb_body.appendChild(axiosScript);
				axiosScript.onload = axiosScript.onreadystatechange = function() {
					if (!this.readyState || this.readyState == 'loaded' || this.readyState ==
						'complete') {
						//do something here!
						resolve(true)
					}
					axiosScript.onload = axiosScript.onreadystatechange = null
				}
			})
		}
		

		this.importTheJS = (object) => {
			return new Promise((resolve) => {
				let _jb_body = document.head;
				let axiosScript = document.createElement('script');
				axiosScript.setAttribute('type', 'text/javascript');
				axiosScript.setAttribute('charset', 'utf-8');
				axiosScript.src = object.url
				_jb_body.appendChild(axiosScript);
				axiosScript.onload = axiosScript.onreadystatechange = function() {
					if (!this.readyState || this.readyState == 'loaded' || this.readyState ==
						'complete') {
						//do something here!
						resolve(object.success(true))
					}
					axiosScript.onload = axiosScript.onreadystatechange = null
				}
			})
		}
		

		var ifAxios = false 
		this.request = (object) => {

			if (ifAxios === false) {
				this.importTheJSSync('https://cdn.bootcdn.net/ajax/libs/axios/0.24.0/axios.min.js').then(() => {
					ifAxios = true,
					this.request(object)
				})
			} else {

				return new Promise((resolve, reject) => {
					if (object.methods !== 'post') {
						axios.get(object.url || '', object.data || '')
							.then(function(response) {
								resolve(object.success(response))
							})
							.catch(function(error) {
								reject(object.error(error))
							});
					} else {
						axios.post(object.url || '', object.data || '')
							.then(function(response) {
								resolve(object.success(response))
							})
							.catch(function(error) {
								reject(object.error(error))
							});
					}
				})

			}
		}

		this.VarEvery_get_coordinate = (ev) => {
			let obj = document.getElementsByTagName('html')[0]
			let m_clientX = ev.clientX - obj.offsetLeft;
			let m_clientY = ev.clientY - obj.offsetTop;
			console.log(ev.clientX, ev.clientY)
			console.log("点击坐标：X：" + m_clientX + " ,Y：" + m_clientY)
		}
		

		this.getCoordinate = () => {
			let obj = document.getElementsByTagName('html')[0]
			obj.setAttribute("onclick", "VarEvery_my_VarEvery.VarEvery_get_coordinate(event)")
		}


		this.coordinateClick = (x, y) => {
			document.elementFromPoint(x, y).click();
		}


		this.sliderSlide = (dom, x, y) => {

			var dv = dom
			var x = 0;
			var y = 0;
			var l = 0;
			var t = 0;
			var isDown = false;

			dv.onmousedown = function(e) {

				x = e.clientX;
				y = e.clientY;


				l = dv.offsetLeft;
				t = dv.offsetTop;

				isDown = true;

				dv.style.cursor = 'move';
			}


			window.onmousemove = function(e) {
				if (isDown == false) {
					return;
				}

				var nx = e.clientX;
				var ny = e.clientY;

				var nl = nx - (x - l);
				var nt = ny - (y - t);

				dv.style.left = nl + 'px';
				dv.style.top = nt + 'px';
			}

			dv.onmouseup = function() {
				isDown = false;
				dv.style.cursor = 'default';
			}
		}

		this.ifHandle = (url) => {
			let VarEvery_url = window.location.href
			if (VarEvery_url.indexOf(url) == -1) {
				// 错了
				return false
			}
			return true
		}

		let ifHtml2canvas = false
		this.labelScreenshot = (dom) => {
			return new Promise((resolve) => {
				if (ifHtml2canvas) {

					html2canvas(dom).then(canvas => {

						resolve(canvas.toDataURL())
					});
					// return 
				} else {
					// 引入 js问价
					this.importTheAxios('http://html2canvas.hertzen.com/dist/html2canvas.min.js').then(
					() => {
						ifHtml2canvas = true,
							html2canvas(dom, {
								allowTaint: true,
								taintTest: false
							}).then(canvas => {
								
								resolve(canvas.toDataURL())
							});
					})
				}
			})
		},
		
		// 将伪数组 转换为 真数组 并获取 text的值
		makeNodeListToArr(nodeList,type = 'text') {
			// 默认 返回 dom
			if(type === 'text'){
				let new_Arr = [...nodeList].map((item) => item.innerText)
				return new_Arr
			}
			return [...nodeList]
		},
		
		// 去除 数组/字符串中的字符串 
		delStringA(arr, str) {
			if (Array.isArray(arr)) {
				let newsReturnArr = arr.map((item) => {
					// 数字型 转
					if (typeof item == 'number' || typeof item == 'string') {
						return String(item).replace(str, '')
					}
					return item
				})
				return newsReturnArr
			}
			return arr.replace(str, '')
		}

		let onLoad = () => {
			if (this.$mounted) {
				this.$mounted()
			}
		}
		onLoad()
	}
}

var VarEvery_my_VarEvery = new VarEvery({})
