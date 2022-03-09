from django.db import models
from django.contrib.auth.models import AbstractUser
from rest_framework.authtoken.models import Token

# Create your models here.
class Patient(AbstractUser):

    # extra fields
    doc_code = models.PositiveIntegerField(unique=True,blank=True,null=True)
    puzzles_solved = models.PositiveIntegerField(blank=True,null=True)
    number_of_vcs = models.PositiveIntegerField(blank=True,null=True)

    def __str__(self):
        return self.username

    @property
    def token(self):
        token = Token.objects.get(user=Patient.objects.get(self.id))
        return token

class Medicine(models.Model):
    patient = models.ForeignKey('Patient',null=False,default=1,on_delete=models.CASCADE)
    name = models.CharField(max_length=30)
    dosage_info = models.TextField(max_length=100)
    date = models.DateField()
    time = models.TimeField()

class ScrapBook(models.Model):
    patient = models.ForeignKey('Patient',null=False,default=1,on_delete=models.CASCADE)
    photo = models.ImageField(upload_to = 'scrapbook/',blank = True)
