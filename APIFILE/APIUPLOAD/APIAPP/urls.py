from django.urls import path
from .views import upload_file, upload_success, FileUploadView, UploadRawPdfView

urlpatterns = [
    path('upload/', upload_file, name='upload'),
    path('success/', upload_success, name='success'),
    path('uploadAPI/', FileUploadView.as_view(), name="file-upload"),
    path('uploadAPIRAW/', UploadRawPdfView.as_view(), name="file-upload")
]
