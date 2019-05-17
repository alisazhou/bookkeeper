from django.contrib import admin

from readings.models import ReadingItem, ReadingList


@admin.register(ReadingItem)
class ReadingItemAdmin(admin.ModelAdmin):
    pass


@admin.register(ReadingList)
class ReadingListAdmin(admin.ModelAdmin):
    pass
