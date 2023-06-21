import services  from "../../data/services"

export default defineEventHandler((event) => services.find(service => service.slug === event.context.params.slug))