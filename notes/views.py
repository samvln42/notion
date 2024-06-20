from rest_framework import generics
from .models import Goodsnote
from .serializers import NoteSerializer

class NotesListCreateView(generics.ListCreateAPIView):
    queryset = Goodsnote.objects.all()
    serializer_class = NoteSerializer