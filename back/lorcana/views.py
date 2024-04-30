from django.core.serializers import serialize
from django.http import HttpResponse, JsonResponse
from django.shortcuts import get_object_or_404
import json

from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import LorcanaCard, LorcanaCardSerializer


# GET ALL LORCANA CARDS (ALL SETS)
@api_view(['GET'])
def get(request):
    lorcana_cards = LorcanaCard.objects.all()
    serializer = LorcanaCardSerializer(lorcana_cards)
    return Response(serializer.data)


# GET SPECIFIC CARD NUMBER AND SET NUMBER
@api_view(['GET'])
def get_by_card_number_and_set_number(request, card_number, set_num):
    lorcana_card = get_object_or_404(
        LorcanaCard,
        card_number=int(card_number), set_num=int(set_num)
    )
    serializer = LorcanaCardSerializer(lorcana_card)
    return Response(serializer.data)
