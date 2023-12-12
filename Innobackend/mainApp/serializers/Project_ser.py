from rest_framework import serializers
from mainApp.models import Project
from Topic_ser import Field_Serializer

class Project_Serializer(serializers.ModelSerializer):
    fields=Field_Serializer(many=True)
    class Meta:
        model=Project
        field=['project_topic','project_field','fields','pk']
