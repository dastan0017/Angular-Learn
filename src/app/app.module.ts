import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentInteractionComponent } from './component-interaction/component-interaction.component';
import { ContentProjectionComponent } from './content-projection/content-projection.component';
import { ParentComponent } from './component-interaction/components/parent/parent.component';
import { ChildComponent } from './component-interaction/components/child/child.component';
import { SingleSlotComponent } from './content-projection/single-slot/single-slot.component';
import { MultiSlotComponent } from './content-projection/multi-slot/multi-slot.component';
import { SiblingComponent } from './component-interaction/components/sibling/sibling.component';
import { ObservableComponent } from './observable/observable.component';
import { TablesComponent } from './tables/tables.component';
import { TemplateOutletComponent } from './template-outlet/template-outlet.component';

const appRoutes: Routes = [
  { path: 'components-interaction', component: ComponentInteractionComponent },
  { path: 'content-projection', component: ContentProjectionComponent },
  { path: 'observable', component: ObservableComponent },
  { path: 'table', component: TablesComponent },
  { path: 'template-outlet', component: TemplateOutletComponent },
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
    SiblingComponent,
    ObservableComponent,
    TablesComponent,
    TemplateOutletComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    MatTableModule,
    HttpClientModule,
    MatSortModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
