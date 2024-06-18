# Usar uma imagem base do Nginx
FROM nginx:alpine

# Copiar o conteúdo do diretório atual para o diretório padrão do Nginx
COPY . /usr/share/nginx/html

# Expor a porta 3000
EXPOSE 3080

# Substituir a configuração padrão do Nginx
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d

# Comando para iniciar o Nginx
CMD ["nginx", "-g", "daemon off;"]
