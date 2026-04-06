FROM ubuntu:20.04

RUN apt-get update 
RUN apt-get install -y openssh-server 
RUN mkdir /var/run/sshd

RUN echo 'root:rootpassword' | chpasswd

COPY sshd_config /etc/ssh/sshd_config

EXPOSE 22

CMD ["/usr/sbin/sshd", "D"]