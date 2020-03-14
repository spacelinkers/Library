import requests
from django import http
from django.conf import settings
from django.template import engines
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response

from django.shortcuts import render, redirect
from django.views.generic import TemplateView, DetailView

from .serializers import BookSerializer,WriterRecoSerializer, AllSerializer, CatagorySerializer

from .models import Book, Author, Catagory

# class BookHomeView(TemplateView):
#     template_name = 'bookshelf/home.html'
#     #template_name = 'index.html'


class BookHomeView(viewsets.ModelViewSet):
    serializer_class = BookSerializer
    queryset = Book.objects.all() [:6]

class WriterRecoView(viewsets.ModelViewSet):
    serializer_class = WriterRecoSerializer
    queryset = Author.objects.order_by('author') [:4]

class AllBooksView(viewsets.ModelViewSet):
    serializer_class = BookSerializer
    queryset = Book.objects.all()

class AllAuthorsView(viewsets.ModelViewSet):
    serializer_class = WriterRecoSerializer
    queryset = Author.objects.all()

class AllView(viewsets.ModelViewSet):
    serializer_class = AllSerializer
    queryset = Book.objects.order_by('author_id').distinct('author_id').all()

    # def get(self, format=None):
    #     all = Book.objects.all()
    #     serializer = AllSerializer(all, many=True)
    #     return Response(serializer.data)
    
class BooksbyAythorView(viewsets.ModelViewSet):
    serializer_class = BookSerializer
    queryset = Book.objects.all()  
    lookup_field = 'author'

    def retrieve(self, *args, **kwargs):
        serializer = self.get_serializer(self.get_queryset(), many=True)
        return Response(data=serializer.data)

    def get_queryset(self):
        pk = self.kwargs['author']
        queryset = Book.objects.filter(author=pk)
        return queryset

    # def get_object(self, queryset=queryset):
    #     pk = self.kwargs['pk']
    #     if pk is not None:
    #         queryset = queryset.filter(author=pk)
    #     return queryset.get()    

class AllCatagoriesView(viewsets.ModelViewSet):
    serializer_class = CatagorySerializer
    queryset = Catagory.objects.all()