from django.shortcuts import render
import os
from django.conf import settings

def home(request):
    template_path = os.path.join(settings.BASE_DIR, 'crypto_splitwise/templates/home.html')
    return render(request, template_path)
