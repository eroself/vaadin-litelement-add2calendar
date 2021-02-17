import { html, LitElement } from "lit-element";
import * as Add2Calendar from "add2calendar"

class VaadinAdd2calendar extends LitElement {

    constructor() {
        super();
        this.calendarEventOptions = { lang: 'cn',  buttonText: 'Custom button text' };
        this.calendarEvents = [
            {
                title       : 'Add2Calendar plugin event 1',
                start       : 'July 27, 2016 10:30',
                end         : 'July 27, 2016 19:30',
                location    : 'Bangkok, Thailand',
                description : 'Event description 1'
            },
            {
                title       : 'Add2Calendar plugin event 2',
                start       : 'July 28, 2016 10:30',
                end         : 'July 29, 2016 19:20',
                location    : 'Bangkok, Thailand',
                description : 'Event description 2'
            }
        ];
    }

    static get properties() {
        return { id: String,
                 width: String,
                 height: String,
                 calendarEventOptions: Object,
                 calendarEvents: Array
                };
    }

    createRenderRoot() {
        return this;
    }

    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);
        this.add2CalendarEvents = new Add2Calendar(this.calendarEvents);
        this.add2CalendarEvents.resetOption();
        this.add2CalendarEvents.setOption(this.calendarEventOptions);
        this.add2CalendarEvents.createWidget("#" + this.id, function() {
            console.log('#multi-normal widget has been created');
        });
    }

    render() {
        return html`<div class="event-box" id="${this.id}"></div>`;
    }

}

customElements.get('vaadin-add2calendar') || customElements.define('vaadin-add2calendar', VaadinAdd2calendar);
