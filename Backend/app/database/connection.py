from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

DATABASE_URL = "mysql+pymysql://root:#8957#@localhost:3306/resqai"

engine = create_engine(DATABASE_URL)

SessionLocal = sessionmaker(bind=engine)