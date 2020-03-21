FROM nginx:alpine

COPY ./build /usr/share/nginx/html
COPY ./docker/nginx.conf /etc/nginx/conf.d

CMD ["nginx", "-g", "daemon off;"]
