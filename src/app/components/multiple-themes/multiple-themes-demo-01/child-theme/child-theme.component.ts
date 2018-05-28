import { Component, OnInit } from '@angular/core';
import { LyTheme2 } from '@alyle/ui';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-child-theme',
  templateUrl: './child-theme.component.html',
  styleUrls: ['./child-theme.component.scss']
})
export class ChildThemeComponent implements OnInit {

  constructor(
    public theme: LyTheme2
  ) { }

  ngOnInit() {
  }

}
