FROM node:23 AS builder

WORKDIR /src

# Install Angular CLI
RUN npm i -g @angular/cli 

COPY src src
COPY public public
COPY *.json .

# Install dependencies, clean install and build application
RUN npm ci && ng build

FROM caddy:2-alpine

LABEL maintainer="remus"

WORKDIR /www

# copy compiled angular file from builder
COPY --from=builder /src/dist/day31_workshop/browser html
COPY Caddyfile . 

ENV PORT=8080

EXPOSE ${PORT}

SHELL ["/bin/sh","-c"]
ENTRYPOINT caddy run --config=Caddyfile
