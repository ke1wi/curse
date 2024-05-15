from fastapi import APIRouter
from app.backend.db import RedisDataBase

router = APIRouter()


@router.get("/hello")
async def hello():
    async with RedisDataBase() as client:
        rate = await client.json().get("Rates")
        return rate
