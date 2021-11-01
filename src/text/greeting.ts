const replyToMessage = (ctx) =>
  

const greeting = () => (ctx: any) => {
  
  // const userName = ctx.from.last_name ? `${ctx.from.first_name} ${ctx.from.last_name}` : ctx.from.first_name;
  
  replyToMessage(ctx);
  // replyToMessage(ctx, messageId, `Hello, ${userName} (user_id: ${ctx.from.id})! \n Your Message id is: ${messageId}`);
};
export { greeting };
