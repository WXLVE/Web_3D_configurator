from django.shortcuts import render

# Create your views here.

def home(request):

    return render(request, "main/main.html", {})


def about(request):

    return render(request, "main/about.html", {})


def babylon_page(request):

    return render(request, "main/main.html", {})