import json
from channels.generic.websocket import AsyncWebsocketConsumer,WebsocketConsumer
from mainApp.models import CustomUser,Messages
from asgiref.sync import async_to_sync,sync_to_async

class Consumer(WebsocketConsumer):

   
    def connect(self):
        self.pid=self.scope['url_route']['kwargs']['pid']
        self.room_group_name=f'project_{self.pid}'
         
        async_to_sync(self.channel_layer.group_add)(
            self.room_group_name,
            self.channel_name,
        )
        # channels=self.get_channel_names_in_room(room_name=self.room_group_name)
        
        self.accept()
        
        print("Handshaked")

    def disconnect(self,close_code):
        print("Disconnected")
        async_to_sync(self.channel_layer.group_discard)(self.room_group_name,self.channel_name)

    def receive(self,text_data):
        data=json.loads(text_data)
        print(data)
        message=data['comment']
        sender=data['sender']
        try:
            user=CustomUser.objects.get(username=sender)
            print(user)
            newMessage = Message(sender=sender,content=message)
            newMessage.save()
        except :
            self.send({"message":"User not found"})
        print("Hi")
        # self.send(json.dumps({
        #     'type':'chat_message',
        #     f'{sender}':message,
        # }))
        room_name=(self.room_group_name)
        print(message)
        async_to_sync(self.channel_layer.group_send)(
            room_name, {"type": "chat.message","comment": message,"sender":sender}
        )
        print("Sent")


    def chat_message(self, event):
      print("Hello")
      message = event['comment']
      sender=event['sender']
      print(message)
      (self.send)(json.dumps({
            'type':'chat.message',
            'message':message,
            'sender':sender,
     }))