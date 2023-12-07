from django.db import models
from django.contrib.auth.models import AbstractUser

class Professor(AbstractUser):
    dept=models.CharField(max_length=50)
    position=models.CharField(max_length=30)
    bio = models.TextField(blank=True)
    research_interests = models.ManyToManyField('ResearchArea', related_name='professors', blank=True)


    def __str__(self):
        return self.get_full_name() or self.username
    

class ResearchArea(models.Model):
    name = models.CharField(max_length=255, unique=True)
    # Add more fields as needed

    def __str__(self):
        return self.name