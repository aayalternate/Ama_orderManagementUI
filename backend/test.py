import mysql.connector


def database_connect():
    conn=mysql.connector.connect(
    host="localhost",
    user="root",
    password="1423",
    database="AMA"
    )
    cur=conn.cursor(dictionary=True)

    return conn,cur



conn,cur=database_connect()

cur.execute("select * from Items")

print(cur.fetchall())

cur.close()
conn.close()