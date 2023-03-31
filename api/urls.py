from django.urls import path
from . import views

urlpatterns = [
    path("",views.getRoutes,name="home"),
    path("notes/",views.mainRoute,name="notes"),
    path("notes/<str:pk>/",views.noteDetails,name="handleRoute"),
]
