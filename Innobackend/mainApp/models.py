from django.db import models
from django.contrib.auth.models import AbstractUser
from django.contrib.contenttypes.models import ContentType
from django.contrib.contenttypes.fields import GenericForeignKey

class CustomUser(models.Model):
    id = models.BigAutoField(primary_key=True) 
    username=models.CharField(max_length=50)
    password=models.CharField(max_length=300)
    last_login=models.DateTimeField(null=True,blank=True)
    is_student=models.BooleanField(default=0)
    is_prof=models.BooleanField(default=0)
    year=models.IntegerField(null=True)
    degree=models.CharField(max_length=50,null=True)
    dept=models.CharField(max_length=50,null=True)
    position=models.CharField(max_length=30,null=True)
    bio = models.TextField(blank=True)
    research_interests = models.ManyToManyField('ResearchArea', related_name='professors', blank=True)

    class Meta:
        db_table = 'CustomUser'


class ResearchArea(models.Model):
    id = models.BigAutoField(primary_key=True) 
    name = models.CharField(max_length=255, unique=True)
    # Add more fields as needed

    def __str__(self):
        return self.name
    
class Fields_Project(models.Model):
    id = models.BigAutoField(primary_key=True) 
    field_name=models.TextField(max_length=60)
    
    
class Project(models.Model):
    id = models.BigAutoField(primary_key=True) 
    project_topic=models.CharField(max_length=300)
    project_start_date=models.DateField()
    project_field=models.ManyToManyField(Fields_Project)
    # project_head=models.ForeignKey(,on_delete=models.CASCADE)
    project_members=models.ManyToManyField(CustomUser)


    
class Resume(models.Model):
    id = models.BigAutoField(primary_key=True) 
    resume_file=models.FileField(upload_to='resume/')
    sender=models.ForeignKey(CustomUser,on_delete=models.CASCADE,related_name='sender')
    reciever=models.ForeignKey(CustomUser,on_delete=models.CASCADE,related_name='reciever')
    sent_On=models.DateTimeField(auto_now_add=True)

class Messages(models.Model):
    id = models.BigAutoField(primary_key=True) 
    content=models.TextField()
    sender=models.ForeignKey(CustomUser,on_delete=models.CASCADE)
    pid=models.ForeignKey(Project,on_delete=models.CASCADE)
    


