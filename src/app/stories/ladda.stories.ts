import { moduleMetadata, storiesOf } from '@storybook/angular';
import { LaddaModule } from 'angular2-ladda';

const props = {};

storiesOf('Ladda', module)
  .addDecorator(moduleMetadata({
    imports: [LaddaModule]
  }))
  .add('Ladda', () => ({
    template: `
      <p><button [ladda]="false">Default state</button></p>
      <p><button [ladda]="true">Loading state</button></p>
    `,
    props
  }));
