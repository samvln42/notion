# Generated by Django 5.0 on 2024-01-11 03:08

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('notes', '0004_delete_notes_alter_note_table'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Note',
            new_name='Notes',
        ),
    ]
