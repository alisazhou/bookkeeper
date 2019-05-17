from django.contrib import admin
from django.urls import include, path
from django.views.generic import TemplateView
from rest_framework.routers import SimpleRouter

from books.views import BookViewSet
from inventories.views import InventoryListViewSet
from profiles.views import ProfileViewSet
from readings.views import ReadingListViewSet


router = SimpleRouter()
router.register('books', BookViewSet)
router.register('inventories', InventoryListViewSet)
router.register('profiles', ProfileViewSet)
router.register('readings', ReadingListViewSet)


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('api/', include(router.urls)),
    path('', TemplateView.as_view(template_name='index.html')),
]
