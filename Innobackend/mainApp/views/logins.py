from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from django.contrib.auth import authenticate, login
from mainApp.models import CustomUser
from mainApp.serializers import User_Serializer
from rest_framework.parsers import JSONParser

def auth(username,password):
    user=CustomUser.objects.get(username=username,password=password)
    return user

# @csrf_exempt
class LoginView(APIView):
    permission_classes=[AllowAny]

    def post(self,request,*args,**kwargs):
        print("HI")
        # print(request.data['username'])
        # print(request.body)
        username=request.data['username']
        pwd=request.data['password']
        print(username)
        print(pwd)

        if username is None:
            return Response({'error': 'MISSING credentials- Username MISSING'}, status=status.HTTP_401_UNAUTHORIZED)
        
        if pwd is None:
            return Response({'error': 'MISSING credentials-PASSWORD MISSING'}, status=status.HTTP_401_UNAUTHORIZED)
        user=auth(username,pwd)
        print(user)
        if user:
            login(request,user)
            print("LOGGED IN")
            serialize=User_Serializer(user)
            print(serialize.data)
            print(request.session.session_key)
            return Response({'user': serialize.data, 'session_id': request.session.session_key})
        else:
            return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
        

        
