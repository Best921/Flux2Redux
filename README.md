# Flux2Redux
A simple app based on flux/redux/react-redux。

### Flux:<br/>
**特点：**<br/>
action 的发布和 store 的绑定，都需要用到 dispatcher ，可以说 dipatcher 是 flux 的核心。<br/>
**数据流：**<br/>
Dispatcher.dispatch(action)->callback(action)->changeStore(register ReactComponent render)<br/>
在真正应用时，在view层调用Action中的action构造函数，创建一个相应类型的action并发送到全局Dispatcher中，Dispatcher将该action分发到**所有**Store注册的**所有**回调函数中。<br/>
<br/>
**缺点：**<br/>
1.reducer 处理逻辑和 store 数据混合在一起。<br/>
2.需要手动在 store 上注册重新渲染的回调函数。<br/> 
<br/> 
### Redux:<br/> 
**特点：**<br/>
1.全局只有一个 Store，且 reducer 与 store 分离。<br/> 
2.不再需要 dispatcher 对象，将 dispatch 方法封装在全局 Store 中。<br/> 
**数据流：**<br/>
在真正应用时，在view层调用Action中的action构造函数，创建一个相应类型的action利用store.dispatch传送到全局store中，并分发到Store注册的**所有**Reducer中。<br/>
**Redux Store API:**<br/> 
1.dispatch：派发 action 给 reducer。<br/> 
2.subscribe：注册回调。<br/> 
3.unsubscribe: 销毁回调。<br/> 
4.getState：获取 store 中存储的 state。<br/> 
5.replaceReducer：替换 reducer。<br/> 
**导入 store 的方式：**<br/>
1.导入 store 文件。<br/>
2.将 store 放置在顶层组件的 context 中。(Provider)<br/>
**缺点：**<br/>
一旦 store 数据发生改变，subscribe 注册的所有回调都会触发。<br/>