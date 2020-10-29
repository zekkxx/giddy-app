# Giddy-App
An application designed to provide a mock interface for horse racing and betting in a manner similar to Salty Bets streams.
* Deployment: https://giddyapp.herokuapp.com/
* Repository: https://github.com/zekkxx/giddy-app

# Development
## Project Team (Defenders)
* [Chris Cannady](https://github.com/christophcannz) - Iron Fist
* [Ellen Buelow](https://github.com/buelowek1225) - Jessica Jones
* [Michael Synder](https://github.com/mikesnyder) - Luke Cage
* [Kieran Anthony](https://github.com/zekkxx/) - Daredevil

## Project Dependencies:
**Express, Passport, MySQL (Sequelize)**
For a full list of dependencies reference the *package.json* file(s) included in the project.

## Project Installation:
This application uses MySQL, a schema and seeds file have been provided for you in the `db` folder in this project.
You may need to update the `config.json` file found in the config folder in this project to connect to the local database.

This application utilizes NPM, make sure to run `npm i` to install all dependencies before running locally.

# Giddy-App Preview

**Giddy-App register and login:**
![Gif example of User register/Login.](public\videos\Example_Register_Login.gif)
*Note: User must register to login.*

**Giddy-App create a horse as a logged-in user:**
![Gif example create horse.](public\videos\Example_Create_Horse.gif)
*Note: User must be logged in to create a horse.*


**Giddy-App delete a horse as a logged-in user:**
![Gif example delete horse.](public\videos\Example_Delete_Horse.gif)
*Note: User must be logged in and have horses to delete any horses.*

# Unique code to highlight
As part of our original project goal we hoped to generate a race between horses. The horses chances of winning is based on the horses' statistics. In our project folder there is a 'racing' folder with the start of that code. 

Gif example of racing horses based on given values (basis of future work):
![Gif example future-work example game goal.](public\videos\HorseRacerExample.gif)
