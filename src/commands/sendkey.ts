import md5 from 'md5';
const VERCEL_URL = process.env.VERCEL_URL;
const TCKEY = process.env.TCKEY;
const replyToMessage = (ctx: any, messageId: string) =>
  ctx.reply( {
    reply_to_message_id: messageId,
  });


const sendkey = () => (ctx: any) => {

  const messageId = ctx.message.message_id;
  
 replyToMessage(ctx, messageId);

  // replyToMessage(ctx, messageId, `Hello, ${userName} (user_id: ${ctx.from.id})! \n Your Message id is: ${messageId}`);
};

export { sendkey };
