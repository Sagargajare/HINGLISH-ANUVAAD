from django.db import models
from django.contrib.auth.models import User
# Create your models here.


class Datacollection(models.Model):
    inputText = models.CharField(max_length=180)
    outputText = models.CharField(max_length=180)
    comment = models.CharField(max_length=180)
    timestamp = models.DateTimeField(auto_now_add=True)
  

    def __str__(self):
        return f"{self.inputText}--{self.timestamp}"

