FROM ubuntu:latest
# RUN apt-get update -y
RUN apt-get update && apt-get install -y --no-install-recommends apt-utils
RUN apt-get install -y python python-pip python-dev curl build-essential
# Copy app to container
COPY . /app

# Back-end setup
WORKDIR /app
RUN pip install -r requirements.txt
ENV DATABASE_URL="postgresql://username:password@postgres:5432/mydatabase"

# Front-end setup
RUN curl -sL https://deb.nodesource.com/setup_6.x | bash -
RUN apt-get install -y nodejs
WORKDIR /app/static
RUN npm install
# RUN npm start &


# Expose Port
Expose 3000

ENTRYPOINT ["npm", "start"]

# WORKDIR /app
# ENTRYPOINT ["python manage.py create_db"]
# CMD ["create_db"]
