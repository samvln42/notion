from django.db import models

class Goodsnote(models.Model):
    storeid = models.IntegerField()
    goodsid = models.IntegerField()
    userid = models.IntegerField()
    commend = models.TextField()

    def __str__(self):
        return f'{self.storeid} - {self.goodsid} - {self.userid}'
    
    class Meta:
        db_table = "GoodsNote"