## MEAN stack

#### To explore the backend `Nodejs`, goto [node-express-server](https://github.com/fecoderchinh/angular-nodejs-mongo/tree/master/node-express-server) folder
#### To explore the frontend `angular-v14`, goto [angular-14-app](https://github.com/fecoderchinh/angular-nodejs-mongo/tree/master/angular-14-app) folder

## Dockerization

#### Build Production
```
npm run docker:build
```

#### Build and Run docker in background `development` mode
```
npm run dev:build:up
```
#### Build and Run docker in background `production` mode
```
npm run docker:build:up
```
#### Clean the Docker
```
npm run docker:clean
```

#### Rebuild and Run the docker (this will also clean the previous built)
1. #### In `development` mode
```
npm run dev:rebuild:up
```
2. #### In `production` mode
```
npm run docker:rebuild:up
```

#### If any problem on running docker, try to remove `package-lock.json` and run `npm i` again.