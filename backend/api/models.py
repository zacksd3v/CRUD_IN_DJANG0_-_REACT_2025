from django.db import models

class Halaqat(models.Model): # Country
    name = models.CharField(unique=True, max_length=100)
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
    

class Characteristic(models.Model):
    name = models.CharField(unique=True, max_length=100)
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
    

class League(models.Model):
    name = models.CharField(unique=True, max_length=100)
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
    
class QuranicClass(models.Model):
    name = models.CharField(unique=True, max_length=100)
    description = models.CharField(max_length=1000)
    attendance = models.IntegerField(null=True)
    city = models.CharField(max_length=100)
    halaqat = models.ForeignKey(Halaqat, on_delete=models.CASCADE)
    league = models.ForeignKey(League, on_delete=models.CASCADE)
    created = models.ManyToManyField(Characteristic)
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name