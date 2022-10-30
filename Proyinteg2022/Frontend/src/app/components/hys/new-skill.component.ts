import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
/*import { ImageService } from 'src/app/service/image.service';*/
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css']
})
export class NewSkillComponent implements OnInit {
  nombre: string;
  porcentaje: number;
  /*img: string;*/
  

  constructor(
    private skillS: SkillService, 
    private router: Router,
     
    /*public imageService: ImageService*/ ){ }

  ngOnInit(): void {
  }

  onCreate(): void{
    const skill = new Skill(this.nombre, this.porcentaje/* ,this.img*/);
    /*this.skill.img = this.imageService.url*/
    this.skillS.save(skill).subscribe(
      data => {
        alert("Skill creada correctamente");
        this.router.navigate(['']);
      }, err =>{
        alert("Fallo al añadir la skill");
        this.router.navigate(['']);
      }
    )
  }

 /* uploadImage($event:any){
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "skill_" + id;
    this.imageService.uploadImage($event, name)
  }*/
}