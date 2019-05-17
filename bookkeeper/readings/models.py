from django.db import models
from django.utils import timezone

from books.models import Book
from profiles.models import Profile


class ReadingList(models.Model):
    user = models.ForeignKey(Profile, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    started_on = models.DateField(default=timezone.datetime.today)


class ReadingItem(models.Model):
    book = models.ForeignKey(Book, on_delete=models.CASCADE)
    reading_list = models.ForeignKey(ReadingList, on_delete=models.CASCADE)
    added_on = models.DateTimeField(default=timezone.now)
    finished_on = models.DateTimeField(blank=True, null=True)
    notes = models.TextField(blank=True)
