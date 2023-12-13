from rest_framework import serializers
from mainApp.models import Resume

class Resume_Serializer(serializers.ModelSerializer):
    class Meta:
        model=Resume
        fields='__all__'

