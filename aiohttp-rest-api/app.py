from sqlalchemy import insert, select
from aiohttp import web
from db.data_definition import Materia
from db.data_connection import engine


async def add_class(request: web.Request) -> web.Response:
    data = await request.json()
    stmt = insert(Materia).values(
        (0, data['name'], data['cargaHoraria'], data['description']))
    async with engine.connect() as conn:
        await conn.execute(stmt)

    return web.Response(text=f"Matéria {data['name']} adicionada!")


async def get_all_classes(request: web.Request) -> web.Response:
    stmt = Materia.select().select_from(Materia).order_by('id')
    with engine.connect() as conn:
        qs = conn.execute(stmt)
        header = ('id', 'name', 'cargaHoraria', 'description')
        result = [dict(zip(header, r)) for r in qs.fetchall()]
    return web.json_response(result)


async def init_app() -> web.Application:
    app = web.Application()
    app.add_routes([web.post("/materias", add_class)])
    app.add_routes([web.get("/materias", get_all_classes)])
    return app

web.run_app(init_app())
