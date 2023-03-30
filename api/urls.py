from django.urls import path
from . import views

urlpatterns = [
    path("",views.getRoutes,name="home"),
    path("notes/",views.getNotes,name="notes"),
    path("notes/<str:pk>/",views.getSingleNote,name="singleNote")
]
