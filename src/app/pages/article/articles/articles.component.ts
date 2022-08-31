import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  databaseImage: string[] = ['https://admin.eibn.org/images/menus/corporate%20service1.jpg', "https://www.orangesoft.com.my/blog/sites/default/files/2018-12/Benefits%20of%20Having%20a%20Corporate%20Website%20for%20Your%20Business.png",'https://cdn1.katadata.co.id/media/images/thumb/2022/04/20/Menara_Telkom-2022_04_20-15_05_40_49fc71d6cb0a0525cd6d960a2560f6e0_400x267_thumb.jpg','https://cdn.azeusconvene.com/wp-content/uploads/The-Three-Pillars-of-Corporate-Governance_banner.jpg'];

  image: string = '';

  id: number = 0;

  constructor(
    private readonly route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.image = this.databaseImage[this.id - 1];
    })
  }

}
