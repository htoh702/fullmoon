FROM node:21-alpine3.18

# Default Environment Value
ENV COFFEE_API_ADDR=istio-ingressgateway.istio-system.svc.cluster.local:30443 \
    COFFEE_WEB_PORT=3000
EXPOSE 3000
WORKDIR /frontweb
COPY . .
CMD "chmod -R 777 ./node_modules/"
ENTRYPOINT npm install
ENTRYPOINT npm run dev
