from rest_framework import viewsets
from mainApp.models import Project,CustomUser
from mainApp.serializers import Project_Serializer
from rest_framework.decorators import action
from rest_framework.response import Response

class ProjectViewSet(viewsets.ModelViewSet):
    queryset=Project.objects.all()
    serializer_class=Project_Serializer

    @action(detail=True,methods=['get'])
    def project_user(self,request,uid=None):
        current_user=CustomUser.objects.get(id=uid)
    #    print("HI")
        print(current_user)
    #    print("HI")
        projects=Project.objects.filter(project_members=current_user)
        serialized_projects=self.get_serializer(projects,many=True)
        return Response({"projects":serialized_projects.data})
    


    
    