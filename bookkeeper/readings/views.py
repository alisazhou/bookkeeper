from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet

from readings.models import ReadingList
from readings.serializers import ReadingItemSerializer, ReadingListSerializer


class ReadingListViewSet(ModelViewSet):
    queryset = ReadingList.objects.all()
    serializer_class = ReadingListSerializer

    @action(
        detail=True,
        methods=['POST'],
        url_path='add-book',
        serializer_class=ReadingItemSerializer)
    def add_book(self, request, pk):
        reading_list = self.get_object()

        item_serializer = ReadingItemSerializer(data=request.data)
        item_serializer.is_valid(raise_exception=True)
        item_serializer.save(reading_list=reading_list)

        return Response(data=ReadingListSerializer(reading_list).data)
