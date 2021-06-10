#create base
FROM node:14-alpine as base
WORKDIR /usr/app
COPY package*.json /usr/app/

#install deps
FROM base as dependencies
# ENV NODE_ENV=production 
RUN npm install
RUN npm ci


# ---- Release ----
FROM dependencies AS release
# copy production node_modules
#COPY --from=dependencies /root/chat/prod_node_modules ./node_modules
# copy app sources
COPY . /usr/app/
# expose port and define CMD
EXPOSE 8081
CMD npm run start

 