from django.db import models
from student import Student
from prof import Professor


class Resume(models.model):
    resume_file=models.FileField(upload_to='resume/')
    sender=models.ForeignKey(Student,on_delete=models.CASCADE)
    reciever=models.ForeignKey(Professor,on_delete=models.CASCADE)
    sent_On=models.DateTimeField(auto_now_add=True)
    
