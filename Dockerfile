FROM node:19

WORKDIR /app
COPY . .
RUN npm install -g pnpm diff-so-fancy && \
  apt-get update -qq && \
  apt-get install -y vim less gnupg2 locales && \
  sed -i -e 's/# en_US.UTF-8 UTF-8/en_US.UTF-8 UTF-8/' /etc/locale.gen && \
  dpkg-reconfigure --frontend=noninteractive locales && \
  update-locale LANG=en_US.UTF-8
