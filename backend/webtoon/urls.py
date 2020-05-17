from django.urls import path

from . import views

urlpatterns = [
    path('webtoons/', views.ListWebtoon.as_view()),
    path('webtoon/<int:pk>/', views.DetailWebtoon.as_view()),
    path('themes/', views.ListTheme.as_view()),
    path('theme/<int:pk>/', views.DetailTheme.as_view()),
    path('genres/', views.ListGenre.as_view()),
    path('genre/<int:pk>/', views.DetailGenre.as_view()),
    path('authors/', views.ListAuthor.as_view()),
    path('author/<int:pk>/', views.DetailAuthor.as_view()),
]
