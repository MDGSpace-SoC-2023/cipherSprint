from django.db import models
from django.contrib.auth.models import AbstractUser

class Student(AbstractUser):
    year=models.IntegerField(null=True)
    degree=models.CharField(max_length=50)
    