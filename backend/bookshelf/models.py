from django.db import models
from ckeditor.fields import RichTextField

class Author(models.Model):
    author = models.CharField(max_length = 200)
    authorSummary = RichTextField()
    authorImage = models.ImageField(upload_to = 'author_images', null = False, blank = False)
    
    def __str__(self):
        return self.author
    
    class Meta:
        ordering = ['author']

class Catagory(models.Model):
    catagory_name = models.CharField(max_length = 200)

    def __str__(self):
        return self.catagory_name
    
    class Meta:
        ordering = ['catagory_name']

class Language(models.Model):
    language_name = models.CharField(max_length = 200)

    def __str__(self):
        return self.language_name
    
    class Meta:
        ordering = ['language_name']

class Book(models.Model):
    title =  models.CharField(max_length = 200)
    bookImage = models.ImageField(upload_to = 'book_images', null = False, blank = False)
    bookSummary = RichTextField()
    release_date = models.DateField(auto_now = False, auto_now_add = False)
    
    author = models.ForeignKey(Author, on_delete = models.CASCADE)
    catagory = models.ForeignKey(Catagory, on_delete = models.CASCADE)
    language = models.ForeignKey(Language, on_delete = models.CASCADE)
    
    #//comment = models.ForeignKey(Comment, on_delete = models.CASCADE)
    #//bookstore = models.ManyToManyField()

    def __str__(self):
        return self.title
    
    class Meta:
        ordering = ['-release_date']
    
    def get_books_list(self):
        queryset = Book.objects.filter(author=self.author).value_list('name', flat=True)

class Bookstore(models.Model):
    bookstore_name = models.CharField(max_length = 200)
    url = models.URLField(max_length = 200, blank = False)
    book = models.ForeignKey(Book, on_delete = models.CASCADE)

    def __str__(self):
        return self.bookstore_name
    
    class Meta:
        ordering = ['bookstore_name']

class Comment(models.Model):
    book = models.ForeignKey(Book, on_delete = models.CASCADE)
    comment_date = models.DateTimeField(auto_now_add=True)
    comment_content = RichTextField()

    def __str__(self):
        return self.comment_content 
    
    class Meta:
        ordering = ['comment_date']





    