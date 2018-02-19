import { Component, OnInit } from '@angular/core';
import { FileUploadInputFor, MatFileUpload, MatFileUploadQueue} from 'angular-material-fileupload';
@Component({
  selector: 'app-create-review',
  templateUrl: './create-review.component.html',
  styleUrls: ['./create-review.component.css']
})
export class CreateReviewComponent implements OnInit {
  htmlContent: string;

  constructor() { }

  ngOnInit() {
  }

}
