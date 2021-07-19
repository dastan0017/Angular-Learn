import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentInteractionComponent } from './component-interaction/component-interaction.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContentProjectionComponent } from './content-projection/content-projection.component';
import { ParentComponent } from './component-interaction/components/parent/parent.component';
import { ChildComponent } from './component-interaction/components/child/child.component';
import { SingleSlotComponent } from './content-projection/single-slot/single-slot.component';
import { MultiSlotComponent } from './content-projection/multi-slot/multi-slot.component';

const appRoutes: Routes = [
  { path: 'components-interaction', component: ComponentInteractionComponent },
  { path: 'content-projection', component: ContentProjectionComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ComponentInteractionComponent,
    ContentProjectionComponent,
    ParentComponent,
    ChildComponent,
    SingleSlotComponent,
    MultiSlotComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
