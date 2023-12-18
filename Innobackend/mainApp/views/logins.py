from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from django.contrib.auth import authenticate, login
from mainApp.models import CustomUser
from mainApp.serializers import User_Serializer

class LoginView(APIView):
    permission_classes=[AllowAny]
    
    def post(self,request,*args,**kwargs):
        username=request.data.get('username')
        pwd=request.data.get('password')

        if username is None:
            return Response({'error': 'Incomplete credentials- Username MISSING'}, status=status.HTTP_401_UNAUTHORIZED)
        
        if pwd is None:
            return Response({'error': 'Invalid credentials-PASSWORD MISSING'}, status=status.HTTP_401_UNAUTHORIZED)

        user=authenticate(request,model=CustomUser,username=username,password=pwd)

        if user:
            login(request,user)
            serialize=User_Serializer.StudentSerializer(user)
            return Response({
                'token':user.auth_token.key,
                'user':serialize.data
            },
            status=status.HTTP_200_OK
            )
        else:
            return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
        

        
