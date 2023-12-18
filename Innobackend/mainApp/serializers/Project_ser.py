from rest_framework import serializers
from mainApp.models import Project
from mainApp.serializers.Topic_ser import Field_Serializer

class Project_Serializer(serializers.ModelSerializer):
    fields=Field_Serializer(many=True)
    class Meta:
        model=Project
        fields=['project_topic','project_field','fields','pk']

class Project_serializer_for_messages(serializers.ModelSerializer):
    class Meta:
        model=Project
        fields=['pk']