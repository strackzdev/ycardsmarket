from django.urls import path

from . import views

urlpatterns = [
    path("", views.get),
    path("<int:card_number>/seasons/<int:set_num>", views.get_by_card_number_and_set_number),
]