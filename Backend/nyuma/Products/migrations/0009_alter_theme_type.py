# Generated by Django 5.1 on 2024-12-31 06:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Products', '0008_product_theme'),
    ]

    operations = [
        migrations.AlterField(
            model_name='theme',
            name='type',
            field=models.CharField(choices=[('RANDOM THEME', 'Random theme'), ('GIFT THEME', 'Gift theme')]),
        ),
    ]
