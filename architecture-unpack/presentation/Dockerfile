FROM nginx:alpine

# Copy Nginx server configuration configured for Cloud Run $PORT (8080)
COPY default.conf /etc/nginx/conf.d/default.conf

# Copy static presentation files
COPY index.html /usr/share/nginx/html/index.html
COPY factory-explorer.html /usr/share/nginx/html/factory-explorer.html
COPY day-in-the-life.html /usr/share/nginx/html/day-in-the-life.html
COPY data /usr/share/nginx/html/data

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
