from rest_framework import serializers
from .models import Theme, Genre, Author, Webtoon

class WebtoonSerializer(serializers.ModelSerializer):
	genres = serializers.StringRelatedField(many=True)
	authors = serializers.StringRelatedField(many=True)
	platform = serializers.CharField(source='get_platform_display')

	class Meta:
		model = Webtoon
		fields = (
			'id',
			'title',
			'genres',
			'authors',
			'is_finish',
			'is_adult',
			'is_pay',
			'platform',
			'thumbnail',
			'description',
		)


class ThemeSerializer(serializers.ModelSerializer):
	webtoons = WebtoonSerializer(many=True, read_only=True)

	class Meta:
		model = Theme
		fields = (
			'id',
			'title',
			'webtoons',
			'description',
		)


class GenreSerializer(serializers.ModelSerializer):
	webtoons = WebtoonSerializer(many=True, read_only=True)

	class Meta:
		model = Genre
		fields = (
			'id',
			'name',
			'webtoons',
		)



class AuthorSerializer(serializers.ModelSerializer):
	webtoons = WebtoonSerializer(many=True, read_only=True)

	class Meta:
		model = Author
		fields = (
			'id',
			'name',
			'webtoons',
		)