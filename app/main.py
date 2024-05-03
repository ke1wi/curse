import logging
from app.api.factory import create_app


app = create_app()

logging.basicConfig(level="DEBUG")
