FROM nginx:alpine

COPY ./PaginaNomade /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
