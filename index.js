const { App } = require('@slack/bolt');
const quotes = require('./quotes');

require('dotenv').config();

const app = new App({
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  token: process.env.SLACK_BOT_TOKEN,
});

/* Add functionality here */

// app.event('app_home_opened', ({ event, say }) => {  
//     let randomNum = Math.floor(Math.random() * quotes.length); 
//     say(`FOO <@${event.user}>! ${quotes[randomNum]}`);
// });

app.command('/misfortune', async ({ command, ack, say }) => {
  // Acknowledge command request
  ack();
  let randomNum = Math.floor(Math.random() * quotes.length);
  say(`${quotes[randomNum]} 🥠`);
});

app.message(':wave:', async ({ message, say}) => {
  say(`Hello, <@${message.user}>. To get your misfortune, simply type /misfortune.`);
});

app.message('badger', ({ say }) => say('Badgers? BADGERS? WE DON’T NEED NO STINKIN BADGERS.'));
app.message('Hello', ({ say }) => say('Greetings Brave Maiden! To get your misfortune, simply type /misfortune'));
app.message('hello', ({ say }) => say('Greetings Brave Maiden! To get your misfortune, simply type /misfortune'));
app.message('hi', ({ say }) => say('Greetings Brave Knight! To get your misfortune, simply type /misfortune'));
app.message('Hi', ({ say }) => say('Greetings Brave Knight! To get your misfortune, simply type /misfortune'));

(async () => {
    await app.start(process.env.PORT || 3000);
    console.log('⚡️ Bolt app is running!');
})();  