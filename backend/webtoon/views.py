from rest_framework import viewsets
from django_filters import rest_framework as filters

from .models import Theme, Webtoon, Genre, Author
from .serializers import ThemeSerializer, WebtoonSerializer, GenreSerializer, AuthorSerializer

class WebtoonFilter(filters.FilterSet):
	title = filters.CharFilter(field_name="title", lookup_expr="contains")
	genre = filters.CharFilter(field_name="genres__name", lookup_expr="contains")

	class Meta:
		model = Webtoon
		fields = ['title', 'genre']


class ThemeFilter(filters.FilterSet):
	title = filters.CharFilter(field_name="title", lookup_expr="contains")
	webtoon = filters.CharFilter(field_name="webtoons__title",lookup_expr="contains")

	class Meta:
		model = Theme
		fields = ['title', 'webtoon']


class ThemeViewSet(viewsets.ReadOnlyModelViewSet):
	queryset = Theme.objects.all()
	serializer_class = ThemeSerializer
	filter_backends = (filters.DjangoFilterBackend,)
	filterset_class = ThemeFilter


class WebtoonViewSet(viewsets.ReadOnlyModelViewSet):
	queryset = Webtoon.objects.all()
	serializer_class = WebtoonSerializer
	filter_backends = (filters.DjangoFilterBackend,)
	filterset_class = WebtoonFilter


class GenreViewSet(viewsets.ReadOnlyModelViewSet):
	queryset = Genre.objects.all()
	serializer_class = GenreSerializer


class AuthorViewSet(viewsets.ReadOnlyModelViewSet):
	queryset = Author.objects.all()
	serializer_class = AuthorSerializer