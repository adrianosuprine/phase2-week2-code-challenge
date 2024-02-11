# Bot Battlr React App
Welcome to **Bot Battlr**, the one and only spot in the known universe where you can custom build your own Bot Army!This is an app that displays a list of available bots,and allows the user to create their own bot-army.

## Author 
This project was built and developed by Suprine Adriano

## Licence 
MIT 

# Requirements
For this project, you must:
<li>
Fetch data from a local server running JSON DB server. 
</li>

## Project Setup
When you want to build the bot battlr project/application take the following steps:

<li> Create a project directory</li>
<li> Clone the project into your own local project directory</li>
<li>Run this command to get the backend started:
json-server --watch db.json</li>
<li>Test your server by visiting this route in the browser:
http://localhost:8001/bots </li>

## Project Guidelines
Your project should conform to the following :

### Core Deliverables
As a user, I should be able to:

- See profiles of all bots rendered in `BotCollection`.

- Add an individual bot to my army by clicking on it. The selected bot should
render in the `YourBotArmy` component. The bot can be enlisted only **once**.
The bot **does not** disappear from the `BotCollection`.

- Release a bot from my army by clicking on it. The bot disappears from the `YourBotArmy` component.

- Discharge a bot from their service forever, by clicking the red button marked "x", which would delete the bot both from the backend and from the
`YourBotArmy` on the frontend.