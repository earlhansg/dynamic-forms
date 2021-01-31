import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class TableComponent implements OnInit {

  @Input()
  dataSource: any;

  @Input()
  displayedColumns: string[];

  translation: any = {
    place: 'Lugar de educación',
    language: 'Lenguaje',
    level: 'Nivel logrado',
    duration: 'Tiempo',
    action: 'Acciones'
  };


  constructor() { }

  ngOnInit(): void { }
}


