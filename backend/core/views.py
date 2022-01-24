
from django.shortcuts import redirect, render , HttpResponse
from rest_framework import status
from rest_framework import permissions
from .models import Datacollection
from .serializers import InputSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from gtts import gTTS
import json
import uuid
from django.http import JsonResponse
from pathlib import Path
import os
from flair.models import TextClassifier
from flair.data import Sentence
from .model import predict_function
from django.core.mail import send_mail
from django.conf import settings
sia = TextClassifier.load('en-sentiment')
# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent

# Create your views here.
def index(request):
    return HttpResponse("Its working")


class UserInputApi(APIView):
    # permission_classes = [permissions.IsAuthenticated]
    def post(self, request, *args, **kwargs):
        serializer = InputSerializer(data=request.data)
        print(request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)




def flair_prediction(x):
    sentence = Sentence(x)
    sia.predict(sentence)
    score = sentence.labels[0]
    print(score)
    if "POSITIVE" in str(score):
        return "pos"
    elif "NEGATIVE" in str(score):
        return "neg"
    else:
        return "neu"
def sentimentAnalysis(request, textinput):
    text = flair_prediction(textinput)
    return JsonResponse(json.dumps({'output': text}), content_type="application/json", safe=False)

def predict(request,text_input):
    text = {'output': predict_function(text_input)}
    return JsonResponse(json.dumps(text), content_type="application/json", safe=False)
    
def report(request):
    if request.method == 'POST':
        serializer = InputSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    data = {'status': 'success' }
    return JsonResponse(json.dumps(), content_type="application/json", safe=False)
