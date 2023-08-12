import Logger from "https://deno.land/x/logger/logger.ts";

export abstract class DiscordPlugin {
    logger: PluginLogger;
    name: string;
    
    constructor(name: string) {
        this.logger = new PluginLogger(name);
        this.name = name;
    }
}

export class PluginLogger extends Logger {
    public readonly name: string;
    
    constructor(name: string) {
        super();
        this.name = name;
    }

    public info(msg: string) {
        super.info(`[${this.name}] ${msg}`);
    }

    public warn(msg: string) {
        super.warn(`[${this.name}] ${msg}`);
    }

    public error(msg: string) {
        super.error(`[${this.name}] ${msg}`);
    }
}
// in the db it will store the prefix for each bot and then somehow the plugins or the plugin hanlder need to know what perfix to use