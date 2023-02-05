/**
 * 接口路由
 */
const routes = [
  {
    path: "/music/get",
    handler: require("./controller/musicController").getSingleMusicApi,
  },
  {
    path: "/music/list/hot",
    handler: require("./controller/musicController").getPlaylistDetailApi,
  },
  {
    path: "/fanyi/translate",
    handler: require("./controller/fanyiController").translateApi,
  },
  {
    path: "/background/get/random",
    handler: require("./controller/backgroundController")
      .getRandomBackgroundApi,
  },
];

module.exports = routes;
