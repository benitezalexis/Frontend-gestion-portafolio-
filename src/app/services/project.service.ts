import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Project} from '../models/projects';
import { Global } from './global';

@Injectable()
export class Project Service{
	public url: String;

	constructor(
			private _http: HttpClient
		){
			this.url = Global.url;

		}

		testService(){
			return "PRobando el servcio de angular";
		}
}
