FROM mongo:latest
COPY dump /dump
COPY restore.sh /docker-entrypoint-initdb.d/restore.sh
RUN chmod +x /docker-entrypoint-initdb.d/restore.sh
EXPOSE 27017
CMD ["mongod"]
