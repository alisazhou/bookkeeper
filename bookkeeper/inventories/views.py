from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet

from inventories.models import InventoryItem, InventoryList
from inventories.serializers import InventoryItemSerializer, InventoryListSerializer


class InventoryListViewSet(ModelViewSet):
    queryset = InventoryList.objects.all()
    serializer_class = InventoryListSerializer

    @action(
        detail=True,
        methods=['POST'],
        url_path='add-book',
        serializer_class=InventoryItemSerializer)
    def add_book(self, request, pk):
        inventory_list = self.get_object()
        InventoryItem.objects.create(
            book_id=request.data['book'],
            inventory_list=inventory_list,
            physical=request.data.get('physical'),
            purchased_on=request.data.get('purchased_on')
        )

        return Response(data=InventoryListSerializer(inventory_list).data)
