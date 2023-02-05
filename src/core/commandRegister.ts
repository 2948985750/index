import { CommandType } from "./command";
import searchCommands from "./commands/search/searchCommands";

import clearCommand from "./commands/terminal/clearCommand";
import historyCommand from "./commands/terminal/historyCommand";
import backgroundCommand from "./commands/terminal/config/backgroundCommand";
import resetCommand from "./commands/terminal/config/resetCommand";
import fanyiCommand from "./commands/fanyi/fanyiCommand";
import helpCommand from "./commands/terminal/help/helpCommand";
import pingCommand from "./commands/pingCommand";
import hintCommand from "./commands/terminal/config/hintCommand";
import todoCommand from "./commands/todo/todoCommand";
import musicCommand from "./commands/music/musicCommand";
import shortcutCommand from "./commands/terminal/shortcut/shortcutCommand";
import hotCommand from "./commands/hot/hotCommand";
import varbookCommand from "./commands/varbook/varbookCommand";

/**
 * 命令列表（数组元素顺序会影响 help 命令的展示顺序）
 */

const commandList: CommandType[] = [
  ...searchCommands,
  shortcutCommand,
  varbookCommand,
  hotCommand,
  todoCommand,
  clearCommand,
  historyCommand,
  fanyiCommand,
  helpCommand,
  pingCommand,
  musicCommand,
  backgroundCommand,
  resetCommand,
  hintCommand,
];

/**
 * 命令字典
 */

const commandMap: Record<string, CommandType> = {};

commandList.forEach((command) => {
  commandMap[command.func] = command;
  command.alias?.forEach((name) => {
    commandMap[name] = command;
  });
});

export { commandList, commandMap };
