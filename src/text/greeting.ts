const replyToMessage = (ctx: any, messageId: string) =>
  ctx( {
    reply_to_message_id: messageId,
  });

const greeting = () => (ctx: any) => {
  const messageId = ctx.message.message_id;
  // const userName = ctx.from.last_name ? `${ctx.from.first_name} ${ctx.from.last_name}` : ctx.from.first_name;
  
  replyToMessage(ctx,messageId);
  // replyToMessage(ctx, messageId, `Hello, ${userName} (user_id: ${ctx.from.id})! \n Your Message id is: ${messageId}`);
};
export { greeting };
