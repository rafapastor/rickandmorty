# Clicars interview - PHP coding test: API

## Intro

Welcome to the recruiting process for Full Stack Engineer in Clicars.

You have a maximum of 7 days to solve the problem explained in the link provided by email.

When the time is over, you will have to send a compressed file with all the code generated to solve the test to 
alvaro@clicars.com. Don't include the "vendor" folder. It contains binary files so gmail could reject it.

If you finish the test before the time is over, it will be taken into consideration.

Good luck!

### What we look at

* This task is designed to give us an idea of how you approach a solution from the backend and frontend perspectives.
* We are also interested in how clean is your code so that it's easily extendable, complies with best OO practices, 
and easy to modify /understand by others.
* We are also interested in seeing how you structure your code.

## How to

This is an API built in Symfony framework. First you will need to install symfony-cli in your system following the 
instructions:
``` 
https://symfony.com/download
```

Once Symfony is installed you can run this project typing the following command in the project path:
``` 
symfony server:start
```

If everything goes OK you should see the server up and running in the url of the command prompt. Just copy the url in 
your browser and add the path '/health/check' to confirm the API is responding correctly. Or simply write in your 
terminal:
```
curl http://localhost:<server_port>/health/check
```


