from rest_framework import viewsets
from mainApp.models import Project,CustomUser,Resume
from mainApp.serializers import Project_Serializer
from rest_framework.decorators import action
from django_elasticsearch_dsl.search import Search
from rest_framework.response import Response
from rest_framework import status
from mainApp.documents import ProjectDocument

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
 
    @action(detail=True,methods=['get'])
    def search_projects(self,request,*args,**kwargs):
        # Query Elasticsearch using elasticsearch-dsl
        query = request.GET.get('q', '')
        # print(query)
        # print(request)
        search = Search(index='projects').query('match', project_topic=query)
        response = search.execute()
        print(response)

        ids = [hit.meta.id for hit in response]

        # Get the actual objects from your database
        queryset = Project.objects.filter(id__in=ids)
        serialized_projects=self.get_serializer(queryset,many=True)
        print(serialized_projects)
        return Response({"projects":serialized_projects.data})

    @action(detail=True, methods=['post'])
    def add_project_member(self,request,pid=None,pk=None):
        project = Project.objects.get(pk=pid)
        print(project)
        print(request.data['sender'])
        current_user=CustomUser.objects.get(id=request.data['sender'])
        print(current_user)
        # Add the currently logged-in user to the project members
        project.project_members.add(current_user)
        print(project.project_members)
        resume = Resume.objects.get(pk=pk)
        resume.delete()
        return Response({'message': 'Project member added successfully and Resume Deleted'})    
    
    @action(detail=True,methods=['patch'])
    def update_amount(self, request, pid=None):
        project = Project.objects.get(pk=pid)
        print(project)
        print(project.project_amount)
        print(request.data['amount'])
        request.data['project_amount'] = request.data['amount']
        serializer = self.get_serializer(project, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    


    
    