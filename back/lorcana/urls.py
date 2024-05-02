from django.urls import path

from . import views

urlpatterns = [
    path("", views.get, name="lorcana-cards"),
    path("<int:card_number>/seasons/<int:set_num>", views.get_by_card_number_and_set_number, name='lorcana-card'),
    path("collections", views.create_lorcana_collection, name='lorcana-collection'),
    path("collections/<int:collection_id>", views.handle_collection_by_id, name='handle-collection-by-id'),
]