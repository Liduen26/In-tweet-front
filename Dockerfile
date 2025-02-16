FROM nginx:alpine

COPY dist /usr/share/nginx/html

EXPOSE 80

ENV ENV_API_URL=http://localhost:8082

CMD ["nginx", "-g", "daemon off;"]