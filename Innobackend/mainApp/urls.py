from django.urls import path,include
from django.contrib.auth import views as auth_views
from .views import LoginView,ProjectViewSet,MessageViewSet,ResumeViewSet
from rest_framework.routers import DefaultRouter
from django.conf import settings
from django.conf.urls.static import static

router=DefaultRouter()
router.register(r'project', ProjectViewSet, basename='project')
router.register(r'message', ProjectViewSet, basename='message')
router.register(r'resume', ResumeViewSet, basename='resume')




urlpatterns = [
    path('login/',LoginView.as_view(),name='login'),
    path('', include(router.urls)),
    path('logout/', auth_views.LogoutView.as_view(), name='logout'),
    path('search/', ProjectViewSet.as_view({"get":"search_projects"}, name='search')),
    path("project/project_user/<int:uid>",ProjectViewSet.as_view({"get":"project_user"},name="project_user")),
    path('message/project/<int:project_id>/',MessageViewSet.as_view({"get":"project_messages"},name='message_1')), 
    path("project/<int:pid>/update/",ProjectViewSet.as_view({"patch":"update_amount"},name="project_amount")), 
   
    path('message/project/<int:project_id>/',MessageViewSet.as_view({"get":"project_messages"},name='message_1')),
    path('resume/<int:pk>/post/', ResumeViewSet.as_view({'post': 'postResume'}), name='post-resume'),
    path('resume/<int:pk>/delete/', ResumeViewSet.as_view({'delete': 'delete_resume'}), name='delete-resume'),
    path('resume/<int:uid>/<int:pid>/', ResumeViewSet.as_view({'get': 'search_resume'}), name='get-resume'),
    path('resume/accept/<int:pid>/<int:pk>/', ProjectViewSet.as_view({'post':'add_project_member'}), name='add_project_member'),
]