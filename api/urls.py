from django.urls import path
from . import views

urlpatterns = [
    path("",views.getRoutes,name="home"),
    path("notes/",views.getNotes,name="notes"),
    path("notes/update/<str:pk>/",views.updateNote,name="updateNote"),
    path("notes/delete/<str:pk>/",views.deleteNote,name="deleteNote"),
    path("notes/<str:pk>/",views.getSingleNote,name="singleNote")
]
