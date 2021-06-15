from django.contrib import admin
from .models import Tweet

# Register your models here.


@admin.register(Tweet)
class NewTweet(admin.ModelAdmin):
    list_display = ('id', 'post', 'postImg', 'created_at')
