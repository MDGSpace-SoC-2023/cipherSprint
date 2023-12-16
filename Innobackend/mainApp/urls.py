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
    path('project/project_user/',ProjectViewSet.as_view({"get":"get_project_logged_user"},name="project_1")),
    path('message/project/<int:project_id>/',MessageViewSet.as_view({"get":"project_messages"},name='message_1')),
    
   
]