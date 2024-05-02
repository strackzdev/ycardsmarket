from rest_framework import serializers

from lorcana.models import LorcanaCard, LorcanaCollection


class LorcanaCardSerializer(serializers.ModelSerializer):
    class Meta:
        model = LorcanaCard
        fields = '__all__'


class LorcanaCollectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = LorcanaCollection
        fields = ['name', 'is_public', 'user']

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.is_public = validated_data.get('is_public', instance.is_public)
        instance.save()
        return instance
