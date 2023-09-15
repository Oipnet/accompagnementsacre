import events  from "../../data/events"

export default defineEventHandler((event) => events.find(evenement => evenement.slug === event.context.params.slug))