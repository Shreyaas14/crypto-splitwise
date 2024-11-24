from django.shortcuts import render

def home(request):
    # Render the 'home.html' template when the home page is accessed
    return render(request, 'home.html')
