from rest_framework import serializers
from mainApp.models import CustomUser

class User_Serializer(serializers.ModelSerializer):
    class Meta:
        model=CustomUser
        field=['pk','email','password']