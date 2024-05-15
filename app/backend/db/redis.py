from redis.asyncio import Redis
from types import TracebackType
from typing import Optional, Type

from app.settings import settings


class RedisDataBase:
    _host: str = settings.REDIS_HOST.get_secret_value()
    _port: int = settings.REDIS_PORT

    def __init__(self) -> None:
        self._client = Redis(
            host=self._host,
            port=self._port
        )

    async def __aenter__(self) -> Redis:
        return self._client

    async def __aexit__(
            self,
            exc_type: Optional[Type[BaseException]],
            exc_val: Optional[BaseException],
            exc_tb: Optional[TracebackType]
    ) -> None:
        await self.close()

    async def close(self) -> None:
        await self._client.aclose()
