from rest_framework import serializers

from books.models import Book


class BookSerializer(serializers.ModelSerializer):
    authors = serializers.SerializerMethodField()

    class Meta:
        model = Book
        fields = ('authors', 'isbn', 'title', 'year_published',)

    def get_authors(self, obj):
        return obj.authors.values_list('name', flat=True)
