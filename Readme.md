# Team Fledgling
## _HINGLISH ANUVAAD_

[Deployed Here](http://45.32.37.234/)

## Features
-  Our solution (anuvaad) is able to take input comprising of multiple languages i.e. English, Hindi, Hinglish.
-  The input is then processed through the trained model and predcits the translation of input in English which in turn can be translated to all other languages.


## Documentaion

[Swagger Docs](http://45.32.37.234//api/swagger-ui)

## Tech

HINGLISH ANUVAAD uses following tech stack:

- NLP - Giving computers the ability to understand text and spoken words in much the same way human beings can.!
- Django - A Python Backend Framework
- Reactjs - A Javascript Frontend Framework.


## Backend Installation

HINGLISH ANUVAAD needs Python  v 3.6+ to run.

Install the dependencies and devDependencies and start the server.

Create A Virtual Environment and Activating it.
```sh
python3 -m venv venv
source venv/bin/activate
```

Installing Dependencies .
```sh
cd backend
pip3 install -r requirements.txt
```

Runing Backend on localhost.
```sh
python3 manage.py runserver
```
It will run on http://localhost:8000
## Frontend Installation

HINGLISH ANUVAAD needs Nodejs  v 16.xx+ to run.

Install the dependencies and devDependencies and start the server.


Installing Dependencies .
```sh
cd cilent
yarn
```
Update .env.(For Local)
```sh
REACT_APP_API_URL="http://localhost:8000/api"
```
Update .env.(For Production)
```sh
REACT_APP_API_URL="/api"
```

To start frontend .
```sh
yarn start
```

It will run on http://localhost:3000

## Admin Dashboard Can Be Accessed At 
 [http://45.32.37.234/admin](http://45.32.37.234/admin)

 username: sagarg

 password: sagarg

# For Production Deployment
We are using nginx to serve Reactjs Build files on root ('/)
Nginx will forward all requests on /api and /admin roots and will be handled by Django backed server.


