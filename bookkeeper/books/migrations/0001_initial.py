# Generated by Django 2.2.1 on 2019-05-17 20:50

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Author',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Book',
            fields=[
                ('isbn', models.CharField(max_length=20, primary_key=True, serialize=False)),
                ('title', models.CharField(max_length=100)),
                ('year_published', models.IntegerField()),
                ('authors', models.ManyToManyField(to='books.Author')),
            ],
        ),
    ]
