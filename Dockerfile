# Use an official Python runtime as a parent image
FROM python:latest

# Set the working directory to root dir
WORKDIR /application/app

# Copy the current directory contents into the container 
ADD . /application/app

# Install any needed packages specified in requirements.txt
RUN pip install -r requirements.txt

# Make port 80 available to the world outside this container
EXPOSE 80

# Define environment variable
ENV NAME SportsAppEnv

# Create DB
CMD ["export", "DATABASE_URL='mysql+mysqlconnector://root:admin@localhost/mydatabase'"]
CMD ["python", "manage.py", "create_db"]
CMD ["python", "manage.py", "db", "upgrade"]
CMD ["python", "manage.py", "db", "migrate"]
CMD ["python", "manage.py", "db", "upgrade"]
# Run the backend server when the container launches
CMD ["python", "manage.py", "runserver"]
# Run the frontend when the container launches
CMD ["cd"]
CMD ["cd", "static"]
CMD ["npm", "install"]
CMD ["npm", "run", "build:production"]
