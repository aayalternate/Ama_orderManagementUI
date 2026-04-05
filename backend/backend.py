import mysql.connector
from fastapi import FastAPI
from pydantic import BaseModel

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

    cur.close()
    conn.close()

    return res


class Item(BaseModel):
    id : int
    name : str

@app.post("/items")
def updateItemName(item : Item):
    print(item.name)

    conn , cur = database_connect()
    query="UPDATE items SET Name = %s WHERE Id=%s;"
    print(query)

    cur.execute(query,(item.name,item.id))

    conn.commit()

    cur.close()
    conn.close()

    return({
        "message" : "item recieved",
        "body" : item
    })

@app.delete("/items/{id}")
def delete(id: int):
    conn,cur = database_connect()

    cur.execute("DELETE FROM items WHERE Id=%s",(id,))

    conn.commit()

    cur.close()
    conn.close()

    return({
        "message":"deleted",
        "id":id
    })


#stock page
#=============================================

@app.get("/stock")
def get_stock():
    conn , cur = database_connect()

    query= "select id,name,quantity from items join stock on Id=ItemId;"
    cur.execute(query)

    res=cur.fetchall()

    cur.close()
    conn.close()

    return res


#=====================================