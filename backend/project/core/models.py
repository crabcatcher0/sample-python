from django.db import models
from django.contrib.auth.models import User


class HomeWork(models.Model):
    title = models.CharField(max_length=20)
    assigned_by = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
    

class Subject(models.Model):
    name = models.CharField(max_length=20)
    is_available = models.BooleanField(default=False)

    def __str__(self):
        return self.name


class ExtraBooks(models.Model):
    genre = models.CharField(max_length = 20)
    pages = models.IntegerField()
    is_collective = models.BooleanField(default = False)

    def __str__(self):
        return self.genre