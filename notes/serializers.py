from rest_framework import serializers
from .models import Goodsnote

class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Goodsnote
        fields = '__all__'