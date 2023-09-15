export default async (slug: string) => {
    return await useFetch(`/api/events/${slug}`)
}
