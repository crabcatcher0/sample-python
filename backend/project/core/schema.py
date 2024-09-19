from ninja.schema import Schema
from ninja import ModelSchema
from django.contrib.auth.models import User
from .models import HomeWork



###### Schema ########

class UserIdSchema(Schema):
    id: int


class HomeworkSchema(Schema):
    title: str
    assigned_by: UserIdSchema


class AllSummary(Schema):
    total_homework: int
    available_subject: int
    collective_books: int




####### Model Schema ######

class HomeworkModelSchema(ModelSchema):
    class Meta:
        model = HomeWork
        fields = "__all__"
    

