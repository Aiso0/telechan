const replyToMessage = (ctx: any) =>
  ctx( {
	  
  });

const debug = require("debug")("bot:about_command");

const about = () => (ctx: any) => {
	
	debug(`Triggered "about" command with message `);
	replyToMessage(ctx);
	
	
};

export { about };
