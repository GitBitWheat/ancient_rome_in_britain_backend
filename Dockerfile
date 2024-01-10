FROM node:18.19.0
WORKDIR /app
COPY package.json /app
RUN npm install
COPY controllers /app/controllers
COPY routes /app/routes
COPY middleware /app/middleware
COPY models /app/models
COPY app.js /app
EXPOSE 8080
CMD ["node", "app.js"]