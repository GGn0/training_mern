# MERN stack
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
React handles the web interface of the appliation and can be found in the "client" folder.

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

Now it's possile to install the dependencies
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
- **fs**: to temporarely read the db password from a local file

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

Once the client has been initialized, it's possible toinstall the dependencies:

```sh
npm imstall axios \
moment \
react-file-base64 \
redux \
react-redux \
redux-thunk \
@material-ui/core \
@material-ui/icons
```

- **axios**: will be used to make api requests
- **moment**: library to work with time and date
- **react-file-base64**: to convert images into strings using base64 encoding
- **redux** and **redux-thunk**: To use asynchronous actions
- **@material-ui**: To use premade components and styles

> :warning: NOTE! If running 'node start' gives an error (something like "ENOSPC: System limit for number of file watchers reached")
> Just increase the number of allowed file watchers:
> ```sh
>sudo sysctl -n -w fs.inotify.max_user_watches=16384
>```
