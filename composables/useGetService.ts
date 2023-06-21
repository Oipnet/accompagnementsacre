export default async (slug: string) => {
    console.log(slug)
    return await useFetch(`/api/services/${slug}`)
}
