FROM node:16.9.0
WORKDIR  /app
COPY  ./dist ./dist
COPY package.json .
RUN  npm install --production
EXPOSE 5000
CMD ["node", "dist/main"]
