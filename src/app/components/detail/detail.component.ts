import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService} from '../../services/project.service';
import { Global } from '../../services/global';
import { Router, ActivatedRoute, Params} from '@angular/router'


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
    providers: [ProjectService]
})
export class DetailComponent implements OnInit {
  public url:string;
  public project!:Project;


  constructor(
    private _projectService:ProjectService,
    private _router: Router,
    private _route: ActivatedRoute

    ) {
      this.url=Global.url;

     }

  ngOnInit() {
    this._route.params.subscribe(params=>{
      let id:any=params.id;
      this.getProject(id);
    });
  }

  getProject(id:any){
    this._projectService.getProject(id).subscribe(
      response=>{
      console.log(response.projects);
      this.project=response.projects;
      console.log(this.project.image)
    },
    error=>{
      console.log(<any>error);
    })
  }


  deleteProject(id:any){
    this._projectService.deleteProject(id).subscribe(
      response=>{
         console.log(response.project)
        if(response.project){
         
          this._router.navigate(['/proyectos']);
        }
      },
      error=>{
        console.log(<any> error)
        console.log("dfsdsdsd")
      }
      )
  }
}
