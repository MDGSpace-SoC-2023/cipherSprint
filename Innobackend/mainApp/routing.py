from django.urls import re_path,path
from .import consumers 

websocket_url_patterns=[
    path('ws/project/<int:pid>/comments/',consumers.Consumer.as_asgi()),
]