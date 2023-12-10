from rest_framework import viewsets
from mainApp.models import Messages
from mainApp.serializers import Message_Serializer

class MessageViewSet(viewsets.ModelViewSet):
    queryset=Messages.objects.all()
    serializer_class=Message_Serializer