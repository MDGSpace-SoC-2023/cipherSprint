from rest_framework import viewsets
from mainApp.models import Project
from mainApp.serializers import Project_Serializer
from rest_framework.decorators import action
from rest_framework.response import Response

class ProjectViewSet(viewsets.ModelViewSet):
    queryset=Project.objects.all()
    serializer_class=Project_Serializer

    @action(detail=True,methods=['get'])
    def get_project_logged_user(self,request,pk=None):
       current_user=request.user
       print(current_user)
       projects=Project.objects.filter(project_members=current_user)
       serialized_projects=self.get_serializer(projects,many=True)
       return Response(serialized_projects.data)
    


    
    