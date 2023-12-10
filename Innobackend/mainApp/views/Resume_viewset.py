from rest_framework import viewsets
from mainApp.models import Resume
from mainApp.serializers import Resume_Serializer

class ResumeViewSet(viewsets.ModelViewSet):
    queryset=Resume.objects.all()
    serializer_class=Resume_Serializer