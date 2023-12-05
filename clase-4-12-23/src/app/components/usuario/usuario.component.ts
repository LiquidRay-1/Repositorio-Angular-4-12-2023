import { Component } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent {

  usuarios:any[] = []

  constructor(private usuarioService: UsuarioService){
    this.getUsersFromService()
  }

  getUsersFromService(): void{
    this.usuarioService.getUsers().subscribe(
      res => {
        console.log(res)
        this.usuarios = res.results
      }
    )
  }
}
