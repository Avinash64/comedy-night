from fastapi import FastAPI

posts = {}

def add_post(item):
    posts[len(list(posts.keys()))+1]


app = FastAPI()


@app.get("/")
async def root():
    return {"message": "Hello World"}