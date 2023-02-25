/**
 * 发布订阅模式
 * handles: 事件处理函数集合
 * listen: 订阅事件
 * emit: 发布事件
 * off: 删除事件
 **/
class PubSub {
    handles: any;

    constructor() {
        this.handles = {};
    }

    // 订阅事件
    listen(eventType: string, handle: Function) {
        if (!this.handles.hasOwnProperty(eventType)) {
            this.handles[eventType] = [];
        }
        if (typeof handle == 'function') {
            this.handles[eventType].push(handle);
        } else {
            throw new Error('缺少回调函数');
        }
        return this;
    }

    // 发布事件
    emit(eventType: string, ...args: any[]) {
        if (this.handles.hasOwnProperty(eventType)) {
            this.handles[eventType].forEach((item: Function, key: string, arr: any[]) => {
                item.apply(null, args);
            })
        } else {
            throw new Error(`"${eventType}"事件未注册`);
        }
        return this;
    }
}

const pubSub = new PubSub();

export default pubSub;
