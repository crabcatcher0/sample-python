from ninja import NinjaAPI
from .models import HomeWork, Subject, ExtraBooks
from .schema import HomeworkSchema, HomeworkModelSchema, AllSummary
from django.http import HttpRequest


app = NinjaAPI(docs_url="/docs/", openapi_url="/openapi.json")


@app.get("/homeworks/", response=list[HomeworkSchema])
def list_homeworks(request: HttpRequest):
    return HomeWork.objects.all()


@app.get("/homeworks/summary/", response=AllSummary)
def list_summary(request: HttpRequest):
    total_homework = HomeWork.objects.all().count
    available_subject = Subject.objects.filter(is_available=True).count()
    collective_books = ExtraBooks.objects.filter(is_collective=True).count()

    summary = AllSummary(
        total_homework=total_homework, 
        available_subject=available_subject, 
        collective_books=collective_books
    )
    return summary