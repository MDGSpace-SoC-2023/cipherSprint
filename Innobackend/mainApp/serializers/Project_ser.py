from rest_framework import serializers
from mainApp.models import Project
from mainApp.serializers.Topic_ser import Field_Serializer
from mainApp.serializers.User_ser import User_Serializer_for_messages

class Project_Serializer(serializers.ModelSerializer):
    project_field=Field_Serializer(many=True)
    project_members = User_Serializer_for_messages(many=True)
    class Meta:
        model=Project
        fields=['project_topic','project_field','pk','project_members','project_amount']

class Project_serializer_for_messages(serializers.ModelSerializer):
    class Meta:
        model=Project
        fields=['pk']