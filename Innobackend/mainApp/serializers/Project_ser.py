from rest_framework import serializers
from mainApp.models import Project

class Project_Serializer(serializers.ModelSerializer):
    class Meta:
        model=Project
        field='__all__'