# Project 2: Giddy-App
**2019 Spring Cohert of the University of Minnesota Programming Bootcamp:** Project 2

**Team Defenders:**
* Chris Cannady - Iron Fist
* Ellen Buelow - Jessica Jones
* MichaelSynder - Luke Cage
* Kieran Anthony - Daredevil Kieran

**App Utility:**

The Giddy-App MVP is designed as the foundation for a interactive game. The user can sign-up, log-in, add horses with corresponding stats assigned by the user. 

The future plan for this site would be to use the horse statistics to have different user's horses compete agains one another and allow user to bet on horses.

# Giddy-App Demo

**Giddy-App register and login:**
![Gif example of User register/Login.](public\videos\Example_Register_Login.gif)
*Note: User must register to login.*

**Giddy-App create a horse as a logged-in user:**
![Gif example create horse.](public\videos\Example_Create_Horse.gif)
*Note: User must be logged in to create a horse.*


**Giddy-App delete a horse as a logged-in user:**
![Gif example delete horse.](public\videos\Example_Delete_Horse.gif)
*Note: User must be logged in and have horses to delete any horses.*


# Project 2: Requirements
* The requirements for Project #2 are as follows:  
* Must use a Node and Express Web Server  
* Must be backed by a MySQL Database with a Sequelize ORM  
* Must have both GET and POST routes for retrieving and adding new data  
Must be deployed using Heroku (with Data)  
* Must utilize at least one new library, package, or technology that we haven't discusse  
* Must have a polished frontend / UI  
* Must have folder structure that meets MVC Paradigm  
* Must meet good quality coding standards (indentation, scoping, naming)  
* Must not expose sensitive API key information on the server, see Protecting-API-Keys-In-Node.md  

    Optional tools

    * Handlebars  
    * Authentication (JSON Web Tokens, sessions, ec)  
    * Existing Public Dataset to power DB  
    * Migration strategy for sharing data across team members (seed/schema.sql)

# New Technology Used
* Passport
* Flexbox

# Deployed Heroku Application
Deployed Heroku Link: https://cryptic-tor-78469.herokuapp.com/

*Note: No special credentials needed to test site. To run application register, login, and create/delete horses.*

# Unique code to highlight

As part of our original project goal we hoped to generate a race between horses. The horses chances of winning is based on the horses' statistics. In our project folder there is a 'racing' folder with the start of that code. 

Gif example of racing horses based on given values (basis of future work):
![Gif example future-work example game goal.](public\videos\HorseRacerExample.gif)