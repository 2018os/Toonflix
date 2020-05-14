from rest_framework import serializers
from .models import Theme, Genre, Author, Webtoon

class WebtoonSerializer(serializers.ModelSerializer):
	class Meta:
		model = Webtoon
		fields = (
			'id',
			'title',
			'genre',
			'author',
			'is_finish',
			'is_adult',
			'is_free',
			'theme',
			'platform',
			'thumbnail',
		)


class ThemeSerializer(serializers.ModelSerializer):
	webtoons = WebtoonSerializer(many=True, read_only=True)
	class Meta:
		model = Theme
		fields = (
			'id',
			'title',
			"webtoons",
		)


class GenreSerializer(serializers.ModelSerializer):
	webtoons = WebtoonSerializer(many=True, read_only=True)
	class Meta:
		model = Genre
		fields = (
			'id',
			'name',
			"webtoons",
		)


class AuthorSerializer(serializers.ModelSerializer):
	webtoons = WebtoonSerializer(many=True, read_only=True)
	class Meta:
		model = Author
		fields = (
			'id',
			'name',
			"webtoons",
		)