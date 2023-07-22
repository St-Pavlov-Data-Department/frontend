# BUILD stage

FROM node:20 as BUILD_STAGE
WORKDIR /StPavlovFrontend
COPY . .

RUN yarn install
RUN npm run build

RUN ls

# PACK stage
FROM nginx:stable-alpine as PACK_STAGE
COPY --from=BUILD_STAGE /StPavlovFrontend/out /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
