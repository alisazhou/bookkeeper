from rest_framework import serializers

from books.models import Book
from readings.models import ReadingItem, ReadingList


class ReadingItemSerializer(serializers.ModelSerializer):
    book = serializers.PrimaryKeyRelatedField(queryset=Book.objects.all())

    class Meta:
        model = ReadingItem
        fields = ('id', 'added_on', 'book', 'finished_on', 'notes', 'reading_list',)
        extra_kwargs = {
            'added_on': {'required': False},
            'finished_on': {'required': False},
            'notes': {'required': False},
            'reading_list': {'write_only': True, 'required': False},
        }


class ReadingListSerializer(serializers.ModelSerializer):
    books = ReadingItemSerializer(many=True, read_only=True)

    class Meta:
        model = ReadingList
        fields = ('id', 'books', 'name', 'user',)
