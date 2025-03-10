# Generated by Django 5.1 on 2025-01-01 09:50

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Products', '0011_rename_product_themedproduct'),
    ]

    operations = [
        migrations.CreateModel(
            name='AvailableProducts',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200, null=True)),
            ],
        ),
        migrations.AddField(
            model_name='themedproduct',
            name='base_product',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.PROTECT, related_name='themed_products', to='Products.availableproducts'),
        ),
    ]
