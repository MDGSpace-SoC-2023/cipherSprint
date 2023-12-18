from rest_framework import serializers
from mainApp.models import Messages
from mainApp.serializers.Project_ser import Project_serializer_for_messages
from mainApp.serializers.User_ser import User_Serializer_for_messages

class Message_Serializer(serializers.ModelSerializer):
    pid=Project_serializer_for_messages()
    sender=User_Serializer_for_messages()

    class Meta:
        model=Messages
        fields=['content','sender','pid']

