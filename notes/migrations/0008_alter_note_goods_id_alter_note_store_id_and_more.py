# Generated by Django 5.0 on 2024-01-11 03:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('notes', '0007_note_goods_id_note_store_id_note_user_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='note',
            name='goods_id',
            field=models.CharField(max_length=50),
        ),
        migrations.AlterField(
            model_name='note',
            name='store_id',
            field=models.CharField(max_length=50),
        ),
        migrations.AlterField(
            model_name='note',
            name='user_id',
            field=models.CharField(max_length=50),
        ),
    ]