FROM moyeora:2
MAINTAINER smilu97 <smilup2244@gmail.com>

EXPOSE 3000
EXPOSE 3001
EXPOSE 3306

WORKDIR /root/moyeora

CMD ["./run.sh"]