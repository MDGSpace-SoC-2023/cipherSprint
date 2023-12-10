from django.urls import path,include
from .views import LoginView,ProjectViewSet,MessageViewSet,ResumeViewSet
from rest_framework.routers import DefaultRouter

router=DefaultRouter()
router.register(r'project', ProjectViewSet, basename='project')
router.register(r'message', ProjectViewSet, basename='message')
router.register(r'resume', ProjectViewSet, basename='resume')



urlpatterns = [
    path('login/',LoginView.as_view(),name='login'),
    path('', include(router.urls)),
   
]