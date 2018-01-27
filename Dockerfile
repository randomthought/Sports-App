FROM tiangolo/uwsgi-nginx-flask:flask

# Copy app to container
COPY . /flask

# Back-end setup
WORKDIR /flask
RUN pip install -r requirements.txt
ENV DATABASE_URL="postgresql://username:password@postgres:5432/mydatabase"

# Expose Port
Expose 5000

ENTRYPOINT ["python", "manage.py"]
