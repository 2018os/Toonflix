from django.db import models

# Create your models here.

class Genre(models.Model):
	name = models.CharField(max_length=50)

	def __str__(self):
		return self.name


class Theme(models.Model):
	title = models.CharField(max_length=200)

	def __str__(self):
		return self.title


class Author(models.Model):
	name = models.CharField(max_length=100)

	def __str__(self):
		return self.name


class Webtoon(models.Model):
	PLATFORM_CHOICES = (
		# ('db', 'form')
		('N', 'Naver'),
		('D', 'Daum'),
		('L', 'Lezhin')
	)
	title = models.CharField(max_length=100)
	genre = models.ManyToManyField(Genre, related_name='webtoons')
	author = models.ManyToManyField(Author, related_name='webtoons')
	is_finish = models.BooleanField()
	is_adult = models.BooleanField()
	is_free = models.BooleanField()
	theme = models.ManyToManyField(Theme, related_name='webtoons', blank=True)
	platform = models.CharField(max_length=1, choices=PLATFORM_CHOICES)
	thumbnail = models.URLField(max_length=300)

	def __str__(self):
		return self.title