FROM nginx:alpine

LABEL maintainer="Juan Sáez"
LABEL project="OpsLab"
LABEL version="0.6.0"

COPY . /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
