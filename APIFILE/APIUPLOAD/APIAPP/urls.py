from django.urls import path
from .views import upload_file, upload_success, FileUploadView

urlpatterns = [
    path('upload/', upload_file, name='upload'),
    path('success/', upload_success, name='success'),
    path('uploadAPI/', FileUploadView.as_view(), name="file-upload")
]
