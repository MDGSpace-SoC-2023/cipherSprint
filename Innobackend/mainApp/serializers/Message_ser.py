from rest_framework import serializers
from mainApp.models import Messages
from mainApp.serializers.Project_ser import Project_serializer_for_messages
from mainApp.serializers.User_ser import User_Serializer_for_messages

class Message_Serializer(serializers.ModelSerializer):
    pid=Project_serializer_for_messages()
    sender=User_Serializer_for_messages()
    str_timestamp = serializers.SerializerMethodField(
        method_name="get_str_timestamp"
    ) 

    class Meta:
        model=Messages
        fields=['content','sender','pid','str_timestamp','timestamp']

    def get_str_timestamp(self, obj):
        # print(obj.timestamp)
        return obj.timestamp.strftime('%b %d , %I:%M %p') 

