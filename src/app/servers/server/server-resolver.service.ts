import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/index";
import {ServersService} from "../servers.service";
import {Injectable} from "@angular/core";

interface Server {
  id: number;
  name: string;
  status: string;
}

@Injectable()
export class ServerResolverService implements Resolve<Server> {

    constructor(private serversService: ServersService) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Server> | Promise<Server> | Server {
      return this.serversService.getServer(route.params['id']);

    }
}
