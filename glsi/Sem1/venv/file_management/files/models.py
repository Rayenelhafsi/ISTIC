# Create your models here.
from django.db import models

class File(models.Model):
    SUBJECT_CHOICES = [
        ('AL', 'Algèbre'),
        ('AN', 'Analyse'),
        ('ALGO', 'Algorithmique'),
        ('C', 'Langage C'),
        ('EXPLOI', 'Systèmes d\'Exploitation'),
        ('SYSTEME', 'Systèmes Logiques'),
        ('LOGIQUE', 'Logique Formelle'),
        ('TECHCOM', 'Techniques de Communication'),
        ('ANGLAIS', 'Anglais'),
        ('MULTIMEDIA', 'Multimédia'),
    ]

    subject = models.CharField(max_length=10, choices=SUBJECT_CHOICES)
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    file = models.FileField(upload_to='files/')
    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title