FROM nginx:alpine

# Copy Nginx server configuration configured for Cloud Run $PORT (8080)
COPY default.conf /etc/nginx/conf.d/default.conf

# Copy decoupled presentation workbench files & assets
COPY index.html /usr/share/nginx/html/index.html
COPY css /usr/share/nginx/html/css
COPY js /usr/share/nginx/html/js
COPY data /usr/share/nginx/html/data
COPY DESIGN.md /usr/share/nginx/html/DESIGN.md
COPY archive /usr/share/nginx/html/archive
COPY factory-explorer.html /usr/share/nginx/html/factory-explorer.html
COPY day-in-the-life.html /usr/share/nginx/html/day-in-the-life.html

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
