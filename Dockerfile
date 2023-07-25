# BUILD stage

FROM node:20 as BUILD_STAGE
WORKDIR /StPavlovFrontend
COPY . .

RUN npm install --omit optional --omit dev
RUN npm run build

RUN ls

# PACK stage
FROM node:20-slim as PACK_STAGE
WORKDIR /StPavlovFrontend
COPY --from=BUILD_STAGE /StPavlovFrontend/.next /StPavlovFrontend/.next
COPY --from=BUILD_STAGE /StPavlovFrontend/package.json /StPavlovFrontend/package.json
COPY --from=BUILD_STAGE /StPavlovFrontend/node_modules /StPavlovFrontend/node_modules
COPY --from=BUILD_STAGE /StPavlovFrontend/public /StPavlovFrontend/public

EXPOSE 3000

CMD ["npm", "run", "start"]
