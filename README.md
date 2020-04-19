# NodeJS--Create-an-account-and-log-in
**Nu ska du bygga en sida där du kan skapa ett konto samt logga in. Användaren ska alltså kunna från din sida logga in samt skapa en konto. När man registrerar  ett konto ska andvändaren ange användarnamn, lösenord och e-postadress. Det ska inte vara möjligt att registerera sig med ett användarnamn eller en e-post som redan finns. När en användare försöker logga in ska användarnamn och lösenord kontrolleras mot databasen.**

-> Först skapa en ny databas som heter **accounts**. 

-> Skapa sedan två endpoints i din Node.JS - fil som heter **/api/login** och **/api/signup**.
    * **/api/login** - tar användarnamn och lösenord som har skickats in och kollar om det finns samt är samma som i databasen. Endpoint:en ska returnera ett objekt med egenskapen **success** som antingen är true eller false till klienten.

   * **/api/signup** -  tar emot användarnamn, lösenord, och e-post och kontrollerar så att användarnamn och e-post inte redan finns i databasen. Endpoint:en ska returnera ett objekt med egenskaparna: **success**, **usernameExists** och **emailExists**. Alla egenskapar är antingen true eller false.
