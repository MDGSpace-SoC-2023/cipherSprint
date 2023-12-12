from rest_framework import serializers
from mainApp.models import Fields_Project

class Field_Serializer(serializers.ModelSerializer):
    class Meta:
        model=Fields_Project
        field='__all__'