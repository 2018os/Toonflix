from django.shortcuts import render
from rest_framework import generics

from .models import Theme, Webtoon, Genre, Author
from .serializers import ThemeSerializer, WebtoonSerializer, GenreSerializer, AuthorSerializer

class ListTheme(generics.ListCreateAPIView):
	queryset = Theme.objects.all()
	serializer_class = ThemeSerializer


class DetailTheme(generics.RetrieveUpdateDestroyAPIView):
	queryset = Theme.objects.all()
	serializer_class = ThemeSerializer


class ListWebtoon(generics.ListCreateAPIView):
	queryset = Webtoon.objects.all()
	serializer_class = WebtoonSerializer


class DetailWebtoon(generics.RetrieveUpdateDestroyAPIView):
	queryset = Webtoon.objects.all()
	serializer_class = WebtoonSerializer


class ListGenre(generics.ListCreateAPIView):
	queryset = Genre.objects.all()
	serializer_class = GenreSerializer


class DetailGenre(generics.RetrieveUpdateDestroyAPIView):
	queryset = Genre.objects.all()
	serializer_class = GenreSerializer


class ListAuthor(generics.ListCreateAPIView):
	queryset = Author.objects.all()
	serializer_class = AuthorSerializer


class DetailAuthor(generics.RetrieveUpdateDestroyAPIView):
	queryset = Author.objects.all()
	serializer_class = AuthorSerializer