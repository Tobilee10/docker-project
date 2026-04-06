FROM ubuntu:latest

RUN apt-get update && apt-get install apache2 -y

COPY ./my-app /var/www/html

EXPOSE 8080

CMD ["apache2ctl", "-D", "FOREGROUND"]