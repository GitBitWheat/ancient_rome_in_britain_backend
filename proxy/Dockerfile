FROM nginx
COPY nginx.conf /etc/nginx/nginx.conf
COPY fullchain.pem /etc/nginx/ssl/fullchain.pem
COPY privkey.pem /etc/nginx/ssl/privkey.pem
EXPOSE 443
CMD ["nginx", "-g", "daemon off;"]
