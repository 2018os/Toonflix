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


class Webtoon(models.Model):
	PLATFORM_CHOICES = (
		# ('db', 'form')
		('N', 'Naver'),
		('D', 'Daum'),
		('L', 'Lezhin')
	)
	title = models.CharField(max_length=100)
	genre = models.ManyToManyField(Genre)
	author = models.ManyToManyField('Author')
	is_finish = models.BooleanField()
	is_adult = models.BooleanField()
	is_free = models.BooleanField()
	theme = models.ManyToManyField(Theme, null=True)
	platform = models.CharField(max_length=1, choices=PLATFORM_CHOICES)
	thumbnail = models.URLField(max_length=300)

	# need testing
	class Meta:
		ordering = ["genre"]

	def __str__(self):
		return self.title


class Author(models.Model):
	name = models.CharField(max_length=100)
	webtoons = models.ManyToManyField(Webtoon)

	class Meta:
		ordering = ["name"]

	def __str__(self):
		return self.name