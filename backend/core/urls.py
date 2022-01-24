
from django.conf.urls import url
from django.contrib import admin
from django.urls import path, include
from django.views.generic.base import TemplateView
from .views import  index, UserInputApi,  sentimentAnalysis, predict,report
urlpatterns = [
    # url('', index, name='index'),
    path('', UserInputApi.as_view()),
    path('sentiment/<str:textinput>', sentimentAnalysis, name="sentiment"),
    path('predict/<str:text_input>', predict, name='predict'),
   
    path('swagger-ui', TemplateView.as_view(
        template_name='swagger-ui.html',
        extra_context={'schema_url': 'openapi-schema'}
    ), name='swagger-ui'),
    path('report', UserInputApi.as_view(), name="report"),

]
