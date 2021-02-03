import {
  Component, OnInit, ChangeDetectionStrategy, Input,
  Output, EventEmitter
} from '@angular/core';


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

  @Output()
  update = new EventEmitter();

  @Output()
  remove = new EventEmitter();

  translation: any = {
    place: 'Lugar de educación',
    language: 'Lenguaje',
    level: 'Nivel logrado',
    duration: 'Tiempo',
    action: 'Acciones'
  };


  constructor() { }

  ngOnInit(): void { }

  clickToUpdate(value: any, id: number): void {
    value['id'] = id;
    this.update.emit(Object.assign(value, id));
  }

  clickToRemove(index: number): void {
    this.remove.emit(index);
  }

}


