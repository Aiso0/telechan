import { author, homepage, name, version } from "../../package.json";

const debug = require("debug")("bot:about_command");

const about = () => (ctx: any) => {
	
	debug(`Triggered "about" command with message \n${message}`);

	
};

export { about };
