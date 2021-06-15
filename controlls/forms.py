from django.forms import widgets
from .models import Tweet
from django.core import validators
from django import forms


class NewTweet(forms.ModelForm):
    class Meta:
        model = Tweet
        fields = ['post', 'postImg']
