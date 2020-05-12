from django.contrib import admin

from .models import Theme, Genre, Webtoon, Author

admin.site.register(Webtoon)
admin.site.register(Author)
admin.site.register(Theme)
admin.site.register(Genre)