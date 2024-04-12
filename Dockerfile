FROM node:lts

COPY . /app
WORKDIR /app

EXPOSE 3000

HEALTHCHECK --interval=1m CMD curl --fail http://localhost:3000 || exit 1

CMD ["npm", "start"]