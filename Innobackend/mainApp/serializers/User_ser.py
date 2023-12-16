from rest_framework import serializers
from mainApp.models import CustomUser

class User_Serializer(serializers.ModelSerializer):
    class Meta:
        model=CustomUser
        fields=['pk','email','password']

class User_Serializer_for_messages(serializers.ModelSerializer):
    class Meta:
        model=CustomUser
        fields=['username']

