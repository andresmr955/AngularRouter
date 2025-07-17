from django.shortcuts import render, redirect
from .forms import UploadFileForm
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework import status
from .serializers import UploadedFileSerializer
from django.views import View
from django.http import HttpResponse
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt

def upload_file(request):
    if request.method == 'POST':
        form = UploadFileForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            return redirect('success')
    else:
        form = UploadFileForm()
    return render(request, 'upload.html', {'form': form})

def upload_success(request):
    return render(request, 'success.html')


class FileUploadView(APIView):
    parser_classes= [MultiPartParser, FormParser]
    
    def post(self, request, *args, **kwargs):
        serializer = UploadedFileSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
@method_decorator(csrf_exempt, name='dispatch')
class UploadRawPdfView(View):
    def post(self, request):
        content_type = request.META.get('CONTENT_TYPE', '')
        if content_type != 'application/pdf':
            return HttpResponse('Invalid content type', status=415)
        
        pdf_data = request.body  # Aquí tienes el archivo en bruto
        # Guarda pdf_data en archivo o base de datos
        
        return HttpResponse('PDF received', status=201)