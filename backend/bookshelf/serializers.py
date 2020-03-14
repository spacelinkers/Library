from rest_framework import serializers
from .models import Book, Author, Catagory


class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ('id', 'title', 'bookImage', 'bookSummary',
                   'author', 'catagory', 'language')
       

class WriterRecoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Author
        fields = ('id','author', 'authorSummary', 'authorImage')

class AllSerializer(serializers.ModelSerializer):
    author = WriterRecoSerializer()

    class Meta:
        model = Book
        fields = ('id', 'title', 'bookImage', 'bookSummary',
                   'author', 'catagory', 'language')

class CatagorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Catagory
        fields = ('id','catagory_name')
