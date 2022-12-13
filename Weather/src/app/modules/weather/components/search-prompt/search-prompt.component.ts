import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-prompt',
  templateUrl: './search-prompt.component.html',
  styleUrls: ['./search-prompt.component.css']
})
export class SearchPromptComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  inputValue: string = ""
  inputInstructions: string = "";
  loading = false;

  inputInfo:string = "asd";

  onClickSearch(){
    this.loading=!this.loading;
  }

}
