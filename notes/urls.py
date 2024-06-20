from django.urls import path
from .views import NotesListCreateView

urlpatterns = [
    path('goodsnote/', NotesListCreateView.as_view(), name='notes-list-create'),
]