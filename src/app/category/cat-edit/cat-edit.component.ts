import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-cat-edit',
  templateUrl: './cat-edit.component.html',
  styleUrls: ['./cat-edit.component.css']
})
export class CatEditComponent implements OnInit {
  id;

  constructor(
    public categoryService: CategoryService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
      }
    );
  }

}
