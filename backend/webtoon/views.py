from django.shortcuts import render
from rest_framework import viewsets

from .models import Theme, Webtoon, Genre, Author
from .serializers import ThemeSerializer, WebtoonSerializer, GenreSerializer, AuthorSerializer

class ThemeViewSet(viewsets.ReadOnlyModelViewSet):
	queryset = Theme.objects.all()
	serializer_class = ThemeSerializer


class WebtoonViewSet(viewsets.ReadOnlyModelViewSet):
	queryset = Webtoon.objects.all()
	serializer_class = WebtoonSerializer


class GenreViewSet(viewsets.ReadOnlyModelViewSet):
	queryset = Genre.objects.all()
	serializer_class = GenreSerializer


class AuthorViewSet(viewsets.ReadOnlyModelViewSet):
	queryset = Author.objects.all()
	serializer_class = AuthorSerializer