from django.db import models
from prof import Professor
from student import Student

class Project(models.model):
    project_topic=models.CharField(max_length=300)
    project_start_date=models.DateField()
    project_field=models.CharField(max_length=50)
    project_head=models.ForeignKey(Professor,on_delete=models.CASCADE)
    project_members=models.ManyToManyField(Student)
    
