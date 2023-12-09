from django.db import models
from django.contrib.contenttypes.models import ContentType
from django.contrib.contenttypes.fields import GenericForeignKey


class Messages(models.model):
    content=models.TextField()
    sender_type = models.ForeignKey(ContentType, on_delete=models.CASCADE)
    sender_id = models.PositiveIntegerField()
    sender = GenericForeignKey('sender_type', 'sender_id')
