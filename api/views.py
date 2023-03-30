from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view,permission_classes
from rest_framework.permissions import AllowAny
from .models import Note
from .serializers import NoteSerializer

# Create your views here.
@api_view(["GET"])
@permission_classes([AllowAny])
def getRoutes(request):
    return Response("Our API")

# get notes form the database
@api_view(["GET"])
@permission_classes([AllowAny])
def getNotes(request):
    notes = Note.objects.all()
    serializer = NoteSerializer(notes,many=True)
    return Response(serializer.data)

# get single note
@api_view(["GET"])
@permission_classes([AllowAny])
def getSingleNote(request,pk):
    note = Note.objects.get(id=pk)
    serializer = NoteSerializer(note,many=False)
    return Response(serializer.data)