from django.urls import re_path

from bookshelf.views import (
    BookHomeView,
)

# from . import views


app_name = 'bookshelf'
urlpatterns = [
    re_path(r'^$', BookHomeView.as_view(), name='bookHome'),
    # re_path(r'^$'),
    # re_path(r'^$'),
    # re_path(r'^$'),
    # re_path(r'^$'),
    # re_path(r'^$'),
    # re_path(r'^$'),

]
