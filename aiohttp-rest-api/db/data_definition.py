from sqlalchemy import (
    Column,
    String,
    MetaData,
    Table,
    BigInteger
)

metadata = MetaData()


Materia = Table(
    "Materia",
    metadata,
    Column("id", BigInteger(), primary_key=True, autoincrement=True),
    Column("name", String(length=50), nullable=False),
    Column("cargaHoraria", BigInteger(), nullable=False),
    Column("description", String(length=100), nullable=False)
)
