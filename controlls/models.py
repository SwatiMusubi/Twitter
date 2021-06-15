from django.db import models
import datetime

# Create your models here.


def filepath(request, filename):
    old_filename = filename
    timenow = datetime.datetime.now().strftime('%Y%m%d%H%M%S')
    filename = "%s%s", (timenow, old_filename)



class Tweet(models.Model):
    post = models.CharField(max_length=140)
    postImg = models.ImageField(upload_to=filepath, null=True, blank=True)
    created_at = datetime.datetime.now()
