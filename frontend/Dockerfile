FROM node:21-alpine3.18

# Default Environment Value
ENV COFFEE_API_ADDR=https://192.168.56.150:30443 \
    COFFEE_WEB_PORT=3000
EXPOSE 3000
WORKDIR /frontweb
COPY . .
CMD "chmod -R 777 ./node_modules/"
ENTRYPOINT npm install
ENTRYPOINT npm run dev