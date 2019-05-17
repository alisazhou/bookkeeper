from django.db import models

from books.models import Book
from profiles.models import Profile


class InventoryList(models.Model):
    user = models.ForeignKey(Profile, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)


class InventoryItem(models.Model):
    book = models.ForeignKey(Book, on_delete=models.CASCADE)
    inventory_list = models.ForeignKey(InventoryList, on_delete=models.CASCADE)
    physical = models.BooleanField(default=False)
    purchased_on = models.DateField(blank=True, null=True)
