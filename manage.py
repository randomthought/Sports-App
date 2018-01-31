from flask_script import Manager, Server
from flask_migrate import Migrate, MigrateCommand

from application.app import app, db

server = Server(
    use_debugger = True,
    use_reloader = True,
    host =  '0.0.0.0',
    port = 5000
    )

migrate = Migrate(app, db)
manager = Manager(app)

# migrations
manager.add_command('db', MigrateCommand)
manager.add_command('runserver', server)
manager.add_command('create_db', server)

@manager.command
def create_db():
    """Creates the db tables."""
    db.create_all()

if __name__ == '__main__':
    manager.run()
