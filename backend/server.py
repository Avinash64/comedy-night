from fastapi import FastAPI
from pydantic import BaseModel


class Item(BaseModel):
    roster: list
    id: int | None = None


posts = {}

def add_post(item):
    id_ = len(list(posts.keys()))+1
    posts[id_] = {
        "id" : len(list(posts.keys()))+1,
        "list" : item
    }
    return posts[id_]

def get_post(id):
    return posts[id] 

def update_post(id, item):
    posts[id] = {
        "id" : id,
        "list" : item
    }
    return posts[id]

def delete_post(id):
    del posts[id]

app = FastAPI()


@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.get("/items/{item_id}")
async def read_item(item_id: int):
    return get_post(item_id)

@app.post("/items/")
async def create_item(item: Item):
    print(item)
    return add_post(item.roster)
    

# @app.post("/items/")
# async def create_item(item: Item):
#     return item
# @app.post("/items/")
# async def create_item(item: Item):
#     return item