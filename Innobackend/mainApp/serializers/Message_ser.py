from rest_framework import serializers
from mainApp.models import Messages

class Message_Serializer(serializers.ModelSerializer):
    class Meta:
        model=Messages
        field='__all__'