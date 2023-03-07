from fastapi import FastAPI
from pydantic import BaseModel

from fastapi.middleware.cors import CORSMiddleware

class Item(BaseModel):
    roster: list
    id: int | None = None
    name: str | None = None
    date: str | None = None
    address: str|None=None


posts = {}

def add_post(item):
    id_ = len(list(posts.keys()))+1
    posts[id_] = {
        "id" : len(list(posts.keys()))+1,
        "list" : item.roster,
        "name" : item.name,
        "date" : item.date,
        "address": item.address
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
origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/items/")
async def root():
    return posts


@app.get("/items/{item_id}")
async def read_item(item_id: int):
    return get_post(item_id)

@app.post("/items/")
async def create_item(item: Item):
    print(item)
    return add_post(item)
    

# @app.post("/items/")
# async def create_item(item: Item):
#     return item
# @app.post("/items/")
# async def create_item(item: Item):
#     return item