FROM mongo:4.0.8

COPY * ./

RUN mkdir /data/mdb /data/mlog\
	&& touch /data/mlog/mongod.log\
	&& ./run.sh\
	&& rm /init.ms /delonakc.json

CMD ["mongod", "-f", "/mongodb.conf", "--smallfiles"]