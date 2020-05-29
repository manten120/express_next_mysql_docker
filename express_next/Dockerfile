FROM node:12

# アプリケーションディレクトリを作成する
WORKDIR /usr/src/app

# アプリケーションのソースをバンドルする
COPY ./app/ .

RUN npm install
# 本番用にコードを作成している場合
# RUN npm install --only=production

EXPOSE 8081

CMD [ "npm", "start" ]