from django.urls import path

from . import views


class View:
    def __init__(self, viewSet):
        self.viewSet = viewSet


    def get_list(self):
        return self.viewSet.as_view({ 'get': 'list' })

    
    def get_detail(self):
        return self.viewSet.as_view({ 'get': 'retrieve' })


# webtoon
webtoonView = View(views.WebtoonViewSet)

# theme
themeView = View(views.ThemeViewSet)

# genre
genreView = View(views.GenreViewSet)

# author
authorView = View(views.AuthorViewSet)

urlpatterns = [
    path('webtoons/', webtoonView.get_list()),
    path('webtoon/<int:pk>/', webtoonView.get_detail()),
    path('themes/', themeView.get_list()),
    path('theme/<int:pk>/', themeView.get_detail()),
    path('genres/', genreView.get_list()),
    path('genre/<int:pk>/', genreView.get_detail()),
    path('authors/', authorView.get_list()),
    path('author/<int:pk>/', authorView.get_detail()),
]
