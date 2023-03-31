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

# create a note
@api_view(["POST"])
def createNote(request):
    data = request.data
    note = Note.objects.create(body=data["note"])
    serializer = NoteSerializer(note,many=False)
    return Response(serializer.data)


# get notes form the database
@api_view(["GET"])
@permission_classes([AllowAny])
def getNotes(request):
    notes = Note.objects.all().order_by("-updated")
    serializer = NoteSerializer(notes,many=True)
    return Response(serializer.data)

# get single note
@api_view(["GET"])
@permission_classes([AllowAny])
def getSingleNote(request,pk):
    note = Note.objects.get(id=pk)
    serializer = NoteSerializer(note,many=False)
    return Response(serializer.data)

# update note
@api_view(["PUT"])
def updateNote(request,pk):
    data = request.data
    note = Note.objects.get(id=pk)
    serializer = NoteSerializer(instance=note,data=data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)


# delete note
@api_view(["DELETE"])
def deleteNote(request,pk):
    note = Note.objects.get(id=pk)
    note.delete()
    return Response("note deleted successfully.")