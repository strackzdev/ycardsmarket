from django.core.serializers import serialize
from django.http import HttpResponse, JsonResponse
from django.shortcuts import get_object_or_404
import json

from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from .models import LorcanaCard, LorcanaCollection
from .serialisers import LorcanaCardSerializer, LorcanaCollectionSerializer


# GET ALL LORCANA CARDS (ALL SETS)
@api_view(['GET'])
def get(request):
    lorcana_cards = LorcanaCard.objects.all()
    serializer = LorcanaCardSerializer(lorcana_cards, many=True)
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


# CREATE USER LORCANA COLLECTION
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def create_lorcana_collection(request):
    request.data['user'] = request.user.id
    serializer = LorcanaCollectionSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def handle_collection_by_id(request, collection_id):
    if request.method == 'GET':
        return get_collection_by_id(request, collection_id)
    elif request.method == 'POST':
        return add_lorcana_cards_to_collection(request, collection_id)


# CREATE USER LORCANA COLLECTION
def add_lorcana_cards_to_collection(request, collection_id):
    try:
        collection = get_object_or_404(LorcanaCollection, id=collection_id, user=request.user)
        cards = LorcanaCard.objects.filter(id__in=request.data)
        collection.cards.add(*cards)
        collection_serializer = LorcanaCollectionSerializer(collection)
        return Response(collection_serializer.data, status=status.HTTP_200_OK)
    except LorcanaCollection.DoesNotExist:
        return Response({'error': 'Collection not found'}, status=status.HTTP_404_NOT_FOUND)
    except LorcanaCard.DoesNotExist:
        return Response({'error': 'One or more card IDs not found'}, status=status.HTTP_404_NOT_FOUND)
    except Exception as e:
        return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


# CREATE USER LORCANA COLLECTION
def get_collection_by_id(request, collection_id):
    try:
        collection = get_object_or_404(LorcanaCollection, id=collection_id, user=request.user)
        cards = collection.cards.all()
        serializer = LorcanaCardSerializer(cards, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    except LorcanaCollection.DoesNotExist:
        return Response({'error': 'Collection not found'}, status=status.HTTP_404_NOT_FOUND)
    except Exception as e:
        return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
