from django.contrib import admin

from bookshelf.models import Book
from bookshelf.models import Author
from bookshelf.models import Catagory
from bookshelf.models import Language
from bookshelf.models import Bookstore
from bookshelf.models import Comment


admin.site.register(Book)
admin.site.register(Author)
admin.site.register(Catagory)
admin.site.register(Language)
admin.site.register(Bookstore)
admin.site.register(Comment)