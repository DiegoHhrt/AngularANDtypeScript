import { Directive, ElementRef, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[errorMsg]'
})
export class ErrMsgDirective implements OnInit, OnChanges {

  private _color:string = 'red';
  private _message:string = '*Required';
  
  // @Input() color: string = 'red';
  @Input() set color (value:string) {
    this._color=value;
    this.setColor();
  }
  // @Input() message:string = '*Required';
  @Input() set message (value:string){
    this._message=value;
    this.setMsg();
  }
  @Input() set valid (value:boolean){
    if(value)
    {
      this.htmlElement.nativeElement.classList.add('hidden');
    }
    else
    {
      this.htmlElement.nativeElement.classList.remove('hidden');
    }
  }


  htmlElement: ElementRef<HTMLElement>;
  
  constructor( private el:ElementRef<HTMLElement> ) { 
    this.htmlElement = el;
  }
  ngOnChanges(changes: SimpleChanges): void {
    
  }
  ngOnInit(): void {
    this.setColor();
    this.setMsg();
    this.setStyle();
  }

  setStyle()
  {
    this.htmlElement.nativeElement.classList.add('form-text');
  }
  setColor()
  {
    this.htmlElement.nativeElement.style.color = this._color;
  }
  setMsg() 
  {
    this.htmlElement.nativeElement.innerText = this._message;
  }
}
