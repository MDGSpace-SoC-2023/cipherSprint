from rest_framework import viewsets
from mainApp.models import Messages
from mainApp.serializers import Message_Serializer
from rest_framework.response import Response
from rest_framework.decorators import action

class MessageViewSet(viewsets.ModelViewSet):
    queryset=Messages.objects.all()
    serializer_class=Message_Serializer

    @action(detail=True,methods=['get'])
    def project_messages(self,request,project_id=None,*args,**kwargs):
        messages=Messages.objects.filter(pid=project_id)
        serialized_messages=self.get_serializer(messages,many=True)
        return Response(serialized_messages.data)