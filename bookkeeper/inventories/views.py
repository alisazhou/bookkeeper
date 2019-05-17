from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet

from inventories.models import InventoryList
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

        item_serializer = InventoryItemSerializer(data=request.data)
        item_serializer.is_valid(raise_exception=True)
        item_serializer.save(inventory_list=inventory_list)

        return Response(data=InventoryListSerializer(inventory_list).data)
