from django.urls import path
from api.views import product_views as views

urlpatterns = [
    path('', views.get_products, name='get-products'),
    path('<str:pk>/', views.get_product, name='product-detail'),
    path('<str:pk>/reviews/', views.create_product_review, name='create-review'),
]