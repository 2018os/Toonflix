from django.db import models

# Create your models here.

class Webtoon(models.Model):
	PLATFORM_CHOICES = (
		# ('db', 'form')
		('N', 'Naver'),
		('D', 'Daum'),
		('L', 'Lezhin')
	)
	title = models.CharField(max_length=100)
	genre = models.CharField(max_length=50) # n:n
	author = models.CharField(max_length=100) # n:n
	is_finish = models.BooleanField()
	is_adult = models.BooleanField()
	is_free = models.BooleanField()
	theme = models.CharField(max_length=200, null=True) # n:n
	platform = models.CharField(max_length=1, choices=PLATFORM_CHOICES) # choice
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