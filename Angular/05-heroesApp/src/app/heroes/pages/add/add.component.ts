import { Component, OnInit } from '@angular/core';
import { Hero, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from "rxjs/operators";
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmComponent } from '../../components/confirm/confirm.component';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styles: [ 
    `
      img{
        width: 100%;
        border-radius: 5px;
      }
    `
  ]
})
export class AddComponent implements OnInit {

  publisher=[
    {
      id: 'DC Comics',
      desc: 'DC'
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel'
    }
  ]

  hero: Hero = {       
    superhero: '',       
    alter_ego:    '',    
    publisher: Publisher.DCComics,       
    first_appearance: '',
    characters:       '',
    alt_img:'',    
  }

  constructor( private heroesService:HeroesService, 
               private activatedRoute:ActivatedRoute, 
               private router:Router,
               private snackBar:MatSnackBar,
               public dialog: MatDialog) { }

  ngOnInit(): void {
    
    if(this.router.url.includes('edit'))
    {
      this.activatedRoute.params
      .pipe(
        switchMap( ({id}) => this.heroesService.getHeroById(id) )
      )
      .subscribe(hero => this.hero=hero)
    }


  }


  save()
  {
    if(this.hero.superhero.trim().length > 0)
    {
      if(this.hero.id)
      {
        this.heroesService.updateHero(this.hero)
        .subscribe(resp => {
          this.showSnackBar('Updated log');
        })
      }
      else
      {
        this.heroesService.addHero(this.hero)
        .subscribe(resp => {
          this.router.navigate(['/heroes/edit', resp.id]);
          this.showSnackBar('Created log');
        })
      }
    }
  }

  deleteHero()
  {
    const dialog = this.dialog.open(ConfirmComponent,
      {
        width: '75%',
        data: {... this.hero}
      });

    dialog.afterClosed().subscribe(
      (result) => {
        if(result)
        {
          this.heroesService.deleteHero(this.hero.id!)
          .subscribe(resp => {
            this.router.navigate(['/heroes']);
          })
        }
      }
    )
  }

  showSnackBar(message:string)
  {
    this.snackBar.open(message, 'ok!', {
      duration: 2500
    })
  }
}
