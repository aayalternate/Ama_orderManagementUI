import mysql.connector
from fastapi import FastAPI

#some thing called cors
#===============================================================================
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # your React app
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
#=============================================================================




def database_connect():
    conn=mysql.connector.connect(                   #has to change while shifting
    host="localhost",
    user="root",
    password="1423",
    database="AMA"
    )
    cur=conn.cursor(dictionary=True)

    return conn,cur


@app.get("/items")
def get_items():
    conn , cur = database_connect()

    cur.execute("select * from Items")

    res=cur.fetchall()

    conn.close()
    cur.close()

    return res

