from django_elasticsearch_dsl import Document
from django_elasticsearch_dsl import fields
from mainApp.models import Project
from django_elasticsearch_dsl.registries import registry
from elasticsearch import Elasticsearch


@registry.register_document
class ProjectDocument(Document):
    class Index:
        # Name of the Elasticsearch index
        name = 'projects'
        # See Elasticsearch Indices API reference for available settings
        settings = {'number_of_shards': 1,
                    'number_of_replicas': 0}

    class Django:
        model = Project # The model associated with this Document
        fields=['project_topic']
