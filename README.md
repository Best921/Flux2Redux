# Flux2Redux
A simple app based on flux/redux/react-redux。

Flux:<br/>
action 的发布和 store 的绑定，都需要用到 dispatcher ，可以说 dipatcher 是 flux 的核心。<br/>
数据流：<br/>
Dispatcher.dispatch(action)->callback(action)->changeStore(register ReactComponent render)<br/>
缺点：<br/>
1.reducer 处理逻辑和 store 数据混合在一起。<br/>
2.需要手动在 store 上注册重新渲染的回调函数。<br/> 
<br/> 
Redux:<br/> 
1.全局只有一个 Store，且 reducer 与 store 分离。<br/> 
2.不再需要 dispatcher 对象，将 dispatch 方法封装在全局 Store 中。<br/> 
Redux Store API:<br/> 
dispatch：派发 action 给 reducer。<br/> 
subscribe：注册回调。<br/> 
getState：获取 store 中存储的 state。<br/> 
replaceReducer：替换 reducer。<br/> 