const replyToMessage = (ctx: any, messageId: string) =>
  ctx( {
    reply_to_message_id: messageId,
  });

const debug = require("debug")("bot:about_command");

const about = () => (ctx: any) => {
	
	debug(`Triggered "about" command with message `);
	replyToMessage(ctx, messageId);
	
	
};

export { about };
