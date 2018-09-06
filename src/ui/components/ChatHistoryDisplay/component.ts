import Component, { tracked } from '@glimmer/component';

export default class ChatHistoryDisplay extends Component {
  @tracked name:string;

  webComponentElement:HTMLElement;

  didInsertElement() {
    this.webComponentElement = this.bounds.firstNode as HTMLElement;

    requestAnimationFrame(() => {
      this.name = this.webComponentElement.getAttribute('name');
    });
  }
}
