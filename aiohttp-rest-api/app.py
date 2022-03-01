from sqlalchemy import insert
from aiohttp import web
from db.data_definition import Materia
from db.data_connection import engine


async def handler(request: web.Request) -> web.Response:
    return web.Response(text="Hello world")


async def init_app() -> web.Application:
    app = web.Application()
    app.add_routes([web.get("/", handler)])
    return app

web.run_app(init_app())


# def teste():
#     stmt = insert(Materia).values((0, 'teste', 60, 'Juu'))
#     with engine.connect() as conn:
#         conn.execute(stmt)

# teste()

