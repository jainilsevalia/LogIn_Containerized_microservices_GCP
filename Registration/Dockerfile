FROM node:alpine
WORKDIR /app
COPY server.js package.json ./
RUN npm install 
CMD ["npm" , "start"]