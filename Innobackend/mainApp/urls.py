from django.urls import path,include
from django.contrib.auth import views as auth_views
from .views import LoginView,ProjectViewSet,MessageViewSet,ResumeViewSet
from rest_framework.routers import DefaultRouter

router=DefaultRouter()
router.register(r'project', ProjectViewSet, basename='project')
router.register(r'message', ProjectViewSet, basename='message')
router.register(r'resume', ProjectViewSet, basename='resume')




urlpatterns = [
    path('login/',LoginView.as_view(),name='login'),
    path('', include(router.urls)),
    path('logout/', auth_views.LogoutView.as_view(), name='logout'),
    path('search/', ProjectViewSet.as_view({"get":"search_projects"}, name='search')),
    path("project/project_user/<int:uid>",ProjectViewSet.as_view({"get":"project_user"},name="project_user")),
    path('message/project/<int:project_id>/',MessageViewSet.as_view({"get":"project_messages"},name='message_1')),  
   
]