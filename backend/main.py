from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Configure CORS
origins = [
    "http://localhost:5173",  # Default Vite port
    "localhost:5173"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def get_info():
    return {"message": "Hello World"}

@app.post("/post")
async def post_question(message: str):
    print("message recieved: ", {message})
    return {"{message}"}
