from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from django.contrib.auth import authenticate, login
from mainApp.models import CustomUser
from mainApp.serializers import User_Serializer
from rest_framework.parsers import JSONParser

def auth(username,password):
    try:
      user=CustomUser.objects.get(username=username,password=password)
      return user
    
    except CustomUser.DoesNotExist:
        return None

# @csrf_exempt
class LoginView(APIView):

    def post(self,request,*args,**kwargs):
        print("HI")
        # print(request.data['username'])
        print(request.data)
        try:
           username=request.data['username']
        except:
            return Response({'error': 'Username MISSING'})
        try:
            pwd=request.data['password']
        except:
            return Response({'error': 'PASSWORD MISSING'})
        print(type(username))
        print(pwd)

        user=auth(username,pwd)
        print(user)
        if user==None:
            return Response({'error': 'NOT AN IITIAN'})
        else:
            login(request,user,backend='django.contrib.auth.backends.ModelBackend')
            print("LOGGED IN")
            serialize=User_Serializer(user)
            print(serialize.data)
            print(request.session.session_key)
            return Response({'user': serialize.data, 'session_id': request.session.session_key})
        

        
