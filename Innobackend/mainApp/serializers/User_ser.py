from rest_framework import serializers
from mainApp.models import CustomUser
from mainApp.serializers.Research_ser import Research_Serializer

class User_Serializer(serializers.ModelSerializer):
    research_interests=Research_Serializer(many=True)
    class Meta:
        model=CustomUser
        fields=['username','is_student','is_prof','year','degree','dept','position','bio','research_interests']

class User_Serializer_for_messages(serializers.ModelSerializer):
    class Meta:
        model=CustomUser
        fields=['username']

