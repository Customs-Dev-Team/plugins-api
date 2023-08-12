import { DiscordPlugin } from './plugins'; // TODO convert to url when api release
import { CommandClient, Command, CommandContext } from 'https://deno.land/x/harmony/mod.ts';

class PingPlugin extends DiscordPlugin {
    constructor(client: CommandClient) {
        super("Amazing Ping Plugin");

        client.on('ready', () => {
            this.logger.info(`Logged in as ${client.user?.tag}`);
        });

        client.commands.add(PingCommand);
    }
}

class PingCommand extends Command {
    name = 'ping'
  
    execute(ctx: CommandContext) {
      ctx.message.reply(`pong! Ping: ${ctx.client.gateway.ping}ms`)
    }
  }

export { PingPlugin as Plugin }