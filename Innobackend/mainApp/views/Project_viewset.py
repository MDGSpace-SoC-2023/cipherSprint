from rest_framework import viewsets
from mainApp.models import Project
from mainApp.serializers import Project_Serializer

class ProjectViewSet(viewsets.ModelViewSet):
    queryset=Project.objects.all()
    serializer_class=Project_Serializer