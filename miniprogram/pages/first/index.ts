//index.js
//获取应用实例
import { IMyApp } from '../../app'

const app = getApp<IMyApp>()

Page({
  onLoad() {
    console.log(this);
    console.log(app);
    this.setData!({ urlPic: '../../images/bgc.jpg' })
  }
})
