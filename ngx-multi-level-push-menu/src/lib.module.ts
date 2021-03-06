import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiLevelPushMenuComponent } from './multi-level-push-menu/multi-level-push-menu.component';
import { MultiLevelPushMenuService } from './multi-level-push-menu/multi-level-push-menu.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MultiLevelPushMenuComponent
  ],
  exports: [
    MultiLevelPushMenuComponent
  ]
})
export class MultiLevelPushMenuModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: MultiLevelPushMenuModule,
      providers: [
        MultiLevelPushMenuService
      ]
    };
  }
}
