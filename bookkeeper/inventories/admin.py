from django.contrib import admin

from inventories.models import InventoryItem, InventoryList


@admin.register(InventoryItem)
class InventoryItemAdmin(admin.ModelAdmin):
    pass


@admin.register(InventoryList)
class InventoryListAdmin(admin.ModelAdmin):
    pass
