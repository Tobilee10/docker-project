FROM ubuntu:latest

RUN apt-get update && apt-get upgrade -y

RUN apt-get install nginx -y

RUN rm -f /usr/share/nginx/html/*

COPY ./school-website /var/www/html/

RUN  chmod -R 755 /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]