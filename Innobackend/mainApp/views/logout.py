from django.contrib.auth import logout
from django.http import JsonResponse
from django.views import View

class LogoutView(View):
    def get(self, request, *args, **kwargs):
        logout(request)
        return JsonResponse({'message': 'Logout successful'})

