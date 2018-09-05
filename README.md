# Flux2Redux
A simple app based on flux/redux/react-redux。

Flux:
action 的发布和 store 的绑定，都需要用到 dispatcher ，可以说 dipatcher 是 flux 的核心。
缺点：
1.reducer 处理逻辑和 store 数据混合在一起。
2.需要手动在 store 上注册重新渲染的回调函数。
