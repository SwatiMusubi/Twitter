from .models import Tweet
from django.shortcuts import redirect, render
from .models import Tweet
# Create your views here.


def home(request):
    if request.method == 'POST':
        newTweet = Tweet
        newTweet.post = request.POST.get('post')

        if len(request.FILES) != 0:
            newTweet.postImg = request.FILES['postImg']
        newTweet.save()
        return redirect('/')
    else:
        return render(request, 'twitter/home.html')


def update(request):
    return render(request, 'twitter/update.html')


def demo(request):
    return render(request, 'twitter/demo.html')
