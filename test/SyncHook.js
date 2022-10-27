const { SyncHook } = require("../lib/index");

class Somebody {
	constructor() {
		this.hooks = {
			sleep: new SyncHook(),
		};
	}
	sleep() {
		//   触发回调
		this.hooks.sleep.call();
	}
}

const person = new Somebody();

// 注册回调
person.hooks.sleep.tap("test", () => {
	console.log("callback A");
});
person.hooks.sleep.tap("test", () => {
	console.log("callback B");
});
person.hooks.sleep.tap("test", () => {
	console.log("callback C");
});

person.sleep();
// 输出结果：
// callback A
// callback B
// callback C
