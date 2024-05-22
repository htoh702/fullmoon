FROM node:21-bullseye-slim

# Default Environment Value
ENV COFFEE_API_ADDR=istio-ingressgateway.istio-system.svc.cluster.local:30443 \
    COFFEE_WEB_PORT=3000
EXPOSE 3000
RUN mkdir /frontweb
WORKDIR /frontweb 
COPY /frontend/ .
RUN chmod -R 777 ./node_modules/
RUN npm install

CMD ["npm", "run", "dev"]

