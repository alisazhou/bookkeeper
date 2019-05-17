from django.contrib.auth.models import User
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet

from profiles.models import Profile
from profiles.serializers import ProfileSerializer


class ProfileViewSet(ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer

    def create(self, request, *args, **kwargs):
        data = request.data

        user = User(username=data['email'])
        user.set_password(data['password'])
        user.save()

        profile = Profile.objects.create(email=data['email'], name=data['name'], user_id=user.id)
        return Response(self.get_serializer(profile).data)
