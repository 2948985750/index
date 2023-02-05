const { Server } = require("./server.js");
const routes = require("./routes");

// 创建云托管 Server 实例
const server = new Server();

// 注册接口路由
for (const route of routes) {
  server.setRoute(route.path, route.handler);
}

// 监听端口
server.listen(7345);
