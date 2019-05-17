from rest_framework import serializers

from books.models import Book
from inventories.models import InventoryItem, InventoryList


class InventoryItemSerializer(serializers.ModelSerializer):
    book = serializers.PrimaryKeyRelatedField(queryset=Book.objects.all())

    class Meta:
        model = InventoryItem
        fields = ('id', 'book', 'inventory_list', 'physical', 'purchased_on',)
        extra_kwargs = {
            'inventory_list': {'required': False, 'write_only': True},
            'purchased_on': {'required': False},
        }


class InventoryListSerializer(serializers.ModelSerializer):
    books = InventoryItemSerializer(many=True, read_only=True)

    class Meta:
        model = InventoryList
        fields = ('id', 'books', 'name', 'user',)
