from fastapi import APIRouter, Request, Path
from fastapi.staticfiles import StaticFiles
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates
from typing import Annotated


router = APIRouter()
router.mount("/web", StaticFiles(directory="app/web"), name="web")

templates = Jinja2Templates(directory="app/web/pages")


@router.get("/")
async def home(
    request: Request
):
    return templates.TemplateResponse(request=request, name="index.html")
