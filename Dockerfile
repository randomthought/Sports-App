FROM tiangolo/uwsgi-nginx-flask:flask

# Copy app to container
COPY . /flask

# Back-end setup
WORKDIR /flask
RUN pip install -r requirements.txt

# EXPOSE 5000

ENTRYPOINT ["python", "manage.py"]
