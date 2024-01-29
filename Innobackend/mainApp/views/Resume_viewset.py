from rest_framework import viewsets
from mainApp.models import Resume
from rest_framework.decorators import action
from mainApp.models import CustomUser,Project
from rest_framework.response import Response
from mainApp.serializers import Resume_Serializer
from rest_framework import status
from django.db.models import Q

class ResumeViewSet(viewsets.ModelViewSet):
    queryset=Resume.objects.all()
    serializer_class=Resume_Serializer

    @action(detail=True,methods=['post'])
    def postResume(self, request,pk=None):
        print('hello')
        print(request.data)
        current_user=CustomUser.objects.get(username=request.data['username'])
        current_project=Project.objects.get(project_topic=request.data['project'])
        print(current_user)
        data = {
            'resume_file': request.data['resume_file'],
            'sender': request.data['sender'],
            'reciever': current_user.id,
            'pid':current_project.id,
        }  
        print(data)
        serializer = Resume_Serializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST) 

    @action(detail=True,methods=['get'])
    def search_resume(self,request,uid=None,pid=None):
        prof=CustomUser.objects.get(id=uid)
        current_project=Project.objects.get(id=pid)
    #    print("HI")
        print(prof)
        print(current_project)
    #    print("HI")
        resume=Resume.objects.filter(Q(pid=pid) & Q(reciever=uid))
        serialized_resume=self.get_serializer(resume,many=True)
        return Response({"resume":serialized_resume.data})


    @action(detail=True, methods=['delete'])
    def delete_resume(self, request, pk=None):
        try:
            resume = Resume.objects.get(pk=pk)
            resume.delete()
            return Response({'message': 'Resume deleted successfully'})

        except Resume.DoesNotExist:
            return Response({'error': 'Resume not found'}, status=status.HTTP_404_NOT_FOUND)
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)  