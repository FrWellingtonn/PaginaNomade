FROM nginx:alpine

COPY nomade-barbearia/  /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]