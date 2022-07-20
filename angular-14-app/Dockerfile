# Step 1
FROM node:18.4.0-alpine as build-step
WORKDIR /app
COPY package.json /app
RUN npm install
RUN npm install -g @angular/cli
COPY . /app
CMD ["npm", "build"]
# RUN npm run build

EXPOSE 4200

# Step 2
#FROM nginx:1.17.1-alpine
#COPY --from=build-step app/dist/angular-14-app /usr/share/nginx/html
