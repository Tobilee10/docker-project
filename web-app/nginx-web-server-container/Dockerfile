FROM ubuntu:latest

RUN apt-get update && apt-get upgrade -y
RUN apt-get install nginx -y

COPY ./my-app /var/www/html

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;" ]