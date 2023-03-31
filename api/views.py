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
    return Response("Welcome to Notes api.")

# create and get notes
@api_view(["POST","GET"])
def mainRoute(request):
    if request.method == "POST":
        return createNote(request)
    else:  
        return getNotes(request)
    
# create a note
def createNote(request):
    data = request.data
    note = Note.objects.create(body=data["note"])
    serializer = NoteSerializer(note,many=False)
    return Response(serializer.data)


# get all notes
def getNotes(request):
    notes = Note.objects.all().order_by("-updated")
    serializer = NoteSerializer(notes,many=True)
    return Response(serializer.data)



@api_view(["GET","PUT","DELETE"])
def noteDetails(request,pk):
    
    # get single note 
    if request.method == "GET":
        note = Note.objects.get(id=pk)
        serializer = NoteSerializer(note,many=False)
        return Response(serializer.data)
    
    # update a note
    elif request.method == "PUT":
        data = request.data
        note = Note.objects.get(id=pk)
        serializer = NoteSerializer(instance=note,data=data)
        if serializer.is_valid():
            serializer.save()
        return Response(serializer.data)
    
    # delete note
    else:
        note = Note.objects.get(id=pk)
        note.delete()
        return Response("note deleted successfully.")
        
        
