import { Component, OnInit } from '@angular/core';
import { CommonService} from '../../services/common.service';
import { ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-pcontent',
  templateUrl: './pcontent.component.html',
  styleUrls: ['./pcontent.component.scss']
})
export class PcontentComponent implements OnInit {
  public domain:string = '';
  public list:any[] = [];
  constructor(
    public common:CommonService,
    public route:ActivatedRoute
  ) { this.domain = this.common.domin;
  }

  ngOnInit() {
    // 获取home页面传过来的值
    this.route.params.subscribe((value:any) => {
      console.log(value);
      this.requestComment(value.id);
    })
  }

  requestComment(id) {
    // 请求数据
    var api = 'api/productcontent?id='+id;
    this.common.get(api).then((response:any) => {
      console.log(response);
      this.list = response.result[0];
    })
  }
}
