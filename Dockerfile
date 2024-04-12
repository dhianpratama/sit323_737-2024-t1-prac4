FROM node:lts

COPY . /app
WORKDIR /app

EXPOSE 3000

CMD ["npm", "start"]