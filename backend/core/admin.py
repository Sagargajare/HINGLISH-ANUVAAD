from django.contrib import admin
from .models import Datacollection
from django.utils.html import format_html

site_header = '<h1>Team Fledgling</h1>'
admin.site.site_header = format_html(site_header)
admin.site.register(Datacollection)
# Register your models here.
