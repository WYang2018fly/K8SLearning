FROM node:latest
ENV TZ=Asia/Shanghai \
    DEBIAN_FRONTEND=noninteractive
WORKDIR /service
COPY package.json /service
COPY . /service
RUN npm install yarn --registry https://registry.npm.taobao.org/; \
    yarn --registry https://registry.npm.taobao.org/
RUN apt update \
    && apt install -y tzdata \
    && ln -fs /usr/share/zoneinfo/${TZ} /etc/localtime \
    && echo ${TZ} > /etc/timezone \
    && dpkg-reconfigure --frontend noninteractive tzdata \
    && rm -rf /var/lib/apt/lists/*
EXPOSE 3001
CMD [ "node", "./index.js" ]




