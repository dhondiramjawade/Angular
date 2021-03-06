import { Injectable, NgModuleFactoryLoader, NgModuleFactory , Injector, Compiler } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CFrameService {

  constructor(
    private ngModuleLoader : NgModuleFactoryLoader,
    private injector : Injector,
    private ngCompiler : Compiler
    ) { }

  loadLazyModule(modulePath : string){
    return this.ngModuleLoader.load(modulePath).then()
  }

  getComponentFromLazyModule(modulePath: string, componentName : string){
    return this.loadLazyModule(modulePath).then((moduleFactory)=> this.getComponentFromModuleFactory(moduleFactory));
  }

  getComponentFromModuleFactory(moduleFactory : NgModuleFactory<any>){
    const moduleRef=   moduleFactory.create(this.injector);
    // const mf = this.ngCompiler.compileModuleAndAllComponentsSync(moduleFactory.moduleType);
    const entryComponent = (<any>moduleFactory.moduleType).entry;
    return moduleRef.componentFactoryResolver.resolveComponentFactory(entryComponent);
  }
}
