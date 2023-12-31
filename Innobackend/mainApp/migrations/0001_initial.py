# Generated by Django 5.0 on 2023-12-18 19:47

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='CustomUser',
            fields=[
                ('id', models.BigAutoField(primary_key=True, serialize=False)),
                ('username', models.CharField(max_length=50)),
                ('password', models.CharField(max_length=300)),
                ('is_student', models.BooleanField(default=False)),
                ('is_prof', models.BooleanField(default=False)),
                ('year', models.IntegerField(null=True)),
                ('degree', models.CharField(max_length=50, null=True)),
                ('dept', models.CharField(max_length=50, null=True)),
                ('position', models.CharField(max_length=30, null=True)),
                ('bio', models.TextField(blank=True)),
                ('is_superuser', models.BooleanField(default=False)),
            ],
            options={
                'db_table': 'CustomUser',
            },
        ),
        migrations.CreateModel(
            name='Fields_Project',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('field_name', models.TextField(max_length=60)),
            ],
        ),
        migrations.CreateModel(
            name='ResearchArea',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('project_topic', models.CharField(max_length=300)),
                ('project_start_date', models.DateField()),
                ('project_field', models.ManyToManyField(to='mainApp.fields_project')),
                ('project_members', models.ManyToManyField(to='mainApp.customuser')),
            ],
        ),
        migrations.CreateModel(
            name='Messages',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('content', models.TextField()),
                ('sender', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='mainApp.customuser')),
                ('pid', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='mainApp.project')),
            ],
        ),
        migrations.AddField(
            model_name='customuser',
            name='research_interests',
            field=models.ManyToManyField(blank=True, related_name='professors', to='mainApp.researcharea'),
        ),
        migrations.CreateModel(
            name='Resume',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('resume_file', models.FileField(upload_to='resume/')),
                ('sent_On', models.DateTimeField(auto_now_add=True)),
                ('reciever', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='reciever', to='mainApp.customuser')),
                ('sender', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='sender', to='mainApp.customuser')),
            ],
        ),
    ]
