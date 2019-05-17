from django.contrib import admin
from django.urls import include, path
from rest_framework.routers import SimpleRouter

from books.views import BookViewSet


router = SimpleRouter()
router.register('books', BookViewSet)


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('api/', include(router.urls)),
]
