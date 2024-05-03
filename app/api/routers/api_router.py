from fastapi import APIRouter, Request, Path
from fastapi.staticfiles import StaticFiles
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates
from typing import Annotated


router = APIRouter(prefix="/api")
router.mount("/api", StaticFiles(directory="app/api"), name="web")

templates = Jinja2Templates(directory="app/api/templates")


@router.get("/rates")
async def rates(
    request: Request,
):
    return templates.TemplateResponse(request=request, name="rates.html")
