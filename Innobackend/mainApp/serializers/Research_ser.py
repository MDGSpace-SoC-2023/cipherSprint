from rest_framework import serializers
from mainApp.models import ResearchArea

class Research_Serializer(serializers.ModelSerializer):
    class Meta:
        model=ResearchArea
        fields='__all__'