import { Component, computed, signal, effect } from '@angular/core';
import { AdvSignalComponent } from "../adv-signal/adv-signal.component";
import { ResourceSignalComponent } from "../resource-signal/resource-signal.component";

@Component({
  selector: 'app-signals',
  templateUrl: './signals.component.html',
  styleUrls: ['./signals.component.css'],
  imports: [AdvSignalComponent, ResourceSignalComponent]
})
export class SignalsComponent {
  name = signal('');
  mark = signal(0);

  updateName(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input && input.value !== null && input.value !== undefined) {
      this.name.set(input.value);
      console.log('Name updated:', input.value);
    } else {
      console.log('Name input is null or undefined');
    }
  }

  updateMark(event: Event) {
    const input = event.target as HTMLInputElement;
    const value = Number(input.value);
    if (!isNaN(value)) {
      this.mark.set(value);
      console.log('Mark updated:', value);
    } else {
      console.log('Invalid number input');
    }
  }

  finalOutcome = computed(() => {
    const nameValue = this.name();
    const markValue = this.mark();
    return nameValue
      ? `${nameValue} has scored ${markValue}.`
      : `Enter the details`;
  });

  finalOutcomeEffect = effect(() => {
    const outcome = this.finalOutcome();
    console.log('Effect triggered:', outcome);
  });
}
