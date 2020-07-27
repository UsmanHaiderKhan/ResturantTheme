import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroComponent } from "./hero/hero.component";
import { StoryComponent } from "./story/story.component";
import { DishesComponent } from "./dishes/dishes.component";
import { from } from 'rxjs';


const routes: Routes = [
  // {
  //   path: 'hero',
  //   component: HeroComponent
  // },
  // {
  //   path: 'story',
  //   component: StoryComponent
  // },
  // {
  //   path: 'dishes',
  //   component: DishesComponent
  // }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
