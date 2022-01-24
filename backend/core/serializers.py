from rest_framework import serializers
from core.models import Datacollection


class InputSerializer(serializers.ModelSerializer):
    class Meta:
        model = Datacollection
        fields = ["inputText", "outputText", "comment"]
