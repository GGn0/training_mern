# MERN stack
[![Super-Linter](https://github.com/GGn0/training_mern/actions/workflows/superlinter.yml/badge.svg)](https://github.com/GGn0/training_mern/actions/workflows/superlinter.yml)

## Test the code
You need to start both the client and the server.  
It's convenient to use two shells
```sh
cd server
npm install
npm run start
```
```sh
cd client
npm install
npm run start
```
To authenticate to the DB, edit the file **server/init.js**:
```javascript
const CONNECTION_URL = `mongodb connection string`

```
And create a file **server/mongo_password** where you write the mongodb password

Now you can access the site at [**localhost:3000**](https://localhost:3000)  

---

## Mongo
The raspberry has a 32 bit processor
```sh
pi@raspberrypi:~$ getconf LONG_BIT
32
```

This means that it's not possible to install mongo (or a mongo container) on the machine.

Therefore, for ths project an instance on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/) will be used instead.

## Express and Node
The server side of the application is handled by Node and Express

The server side of the project is stored in the "server" folder.

## React
React handles the web interface of the application and can be found in the "client" folder.

---

## Preparation

## Install / Update node + npm
First synchronise the package index
and install the newest packages versions
```sh
sudo apt update && sudo apt full-upgrade
```

If npm and node are already installed remove them
```sh
node -v
npm -v
```
```sh
sudo apt remove node
sudo apt remove npm
```
or
```sh
sudo apt remove nodejs
```

In my case I had previously added the nodesource repository to apt.

To delete it execute
```sh
sudo rm /etc/apt/sources.list.d/nodesource.list
```

From the nodejs website (and nodesource git repository)
add the updated nodesource repository and install nodejs
```sh
# Using Debian, as root
pi@raspberrypi:~ $ sudo su
root@raspberrypi:/home/pi# curl -fsSL https://deb.nodesource.com/setup_16.x | bash -
root@raspberrypi:/home/pi# exit
pi@rspberrypi:~ $ sudo apt-get install -y nodejs
```

## Setup the backend and frontend

### Backend
Go to the server directory
```sh
cd server
```
Create the server starting point
```sh
touch index.js
```

And initialize the node app
```sh
npm init
```
Follow the instruction on screen to generate the package.json

Now it's possible to install the dependencies
```sh
npm install body-parser \
cors \
express \
mongoose \
nodemon \
fs
```

- **body-parser**: to send push requests
- **cors**: to allow cross-origin requests
- **express**: will be the framework to create the routing of the app
- **mongoose**: to create models for the data on our database
- **nodemon**: to restart the server after changes
- **fs**: to temporarily read the db password from a local file

Edit the package.js file to allow the usage of the new import syntax:

```json
.
.
"main": "index.js",
"type": "module",
.
.
"scripts": {
    "test": "nodemon index.js"
  },
.
.
```

### Frontend
Go to the client directory
```sh
cd client
```
And initialize the react app with the command
```sh
npx create-react-app ./
```

Once the client has been initialized, it's possible to install the dependencies:

```sh
npm install axios \
moment \
react-file-base64 \
redux \
react-redux \
redux-thunk \
@material-ui/core \
@material-ui/icons \
notistack
```

- **axios**: will be used to make api requests
- **moment**: library to work with time and date
- **react-file-base64**: to convert images into strings using base64 encoding
- **redux** and **redux-thunk**: To use asynchronous actions
- **@material-ui**: To use premade components and styles
- **notistack**: To use notification bars

> :warning: NOTE! If running 'node start' gives an error (something like "ENOSPC: System limit for number of file watchers reached")
> Just increase the number of allowed file watchers:
> ```sh
>sudo sysctl -n -w fs.inotify.max_user_watches=16384
>```
