from rest_framework import serializers
from mainApp.models import Resume

class Resume_Serializer(serializers.ModelSerializer):
    class Meta:
        model=Resume
        field='__all__'