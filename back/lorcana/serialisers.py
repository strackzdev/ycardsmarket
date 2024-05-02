from rest_framework import serializers

from lorcana.models import LorcanaCard


class LorcanaCardSerializer(serializers.ModelSerializer):
    class Meta:
        model = LorcanaCard
        fields = '__all__'