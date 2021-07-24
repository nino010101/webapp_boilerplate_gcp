FROM node:12-alpine

# アプリケーションディレクトリを作成する
WORKDIR /usr/src/app

# ソースのコピーとインストール
COPY ./src/* ./
RUN npm install --production
EXPOSE 8080
CMD [ "node", "server.js" ]