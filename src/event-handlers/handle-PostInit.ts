const eventName = 'PostInit';

export async function run(context:any, args:any) {
  // insert your code to handle the amplify cli PostInit event
  context.print.info(`Event handler ${eventName} to be implemented.`);
}