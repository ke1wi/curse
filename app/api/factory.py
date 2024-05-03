from fastapi import FastAPI
from app.api.routers import routers


def create_app() -> FastAPI:
    app = FastAPI()
    for route in routers:
        app.include_router(route)

    return app
