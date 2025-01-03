# Generated by Django 5.1 on 2024-12-30 17:11

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Products', '0007_theme'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='theme',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.PROTECT, related_name='products', to='Products.theme'),
        ),
    ]