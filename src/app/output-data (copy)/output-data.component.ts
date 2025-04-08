import { Component } from '@angular/core';
import { InputDataDecoratorComponent } from "../input-data-decorator/input-data-decorator.component";

@Component({
  selector: 'app-output-data',
  imports: [InputDataDecoratorComponent],
  templateUrl: './output-data.component.html',
  styleUrls: ['./output-data.component.css']
})
export class OutputDataComponent {
  onToggle(state: boolean): void {
    console.log(`ToggleSwitch toggled. Current state: ${state ? 'ON' : 'OFF'}`);
  }

  onStateChange(state: boolean): void {
    console.log(`ToggleSwitch state changed via alias. Current state: ${state ? 'ON' : 'OFF'}`);
  }
}
