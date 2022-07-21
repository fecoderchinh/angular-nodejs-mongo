## MEAN stack

#### To explore the backend `Nodejs`, goto [node-express-server](https://github.com/fecoderchinh/angular-nodejs-mongo/tree/master/node-express-server) folder
#### To explore the frontend `angular-v14`, goto [angular-14-app](https://github.com/fecoderchinh/angular-nodejs-mongo/tree/master/angular-14-app)

## Dockerization

#### Build Production
```
npm run docker:build
```

#### Build and Run docker in background
`npm run docker:build:up` or `npm run dev:build:up`

#### Clean the Docker
```
npm run docker:clean
docker kill $(docker ps -aq)
```

#### Rebuild the docker (this will also clean the previous built)
`npm run docker:rebuild:up` or `npm run dev:rebuild:up`

#### If any problem on running docker, try to remove `package-lock.json` and run `npm i` again.