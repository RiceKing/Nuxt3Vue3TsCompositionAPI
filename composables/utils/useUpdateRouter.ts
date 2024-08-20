export const updateQueryParams = (query: Record<string, number | number[] | string | string[]> ) => {
    const router = useRouter();
    const route = useRoute();
    
    router.push({ query: { ...route.query, ...query } });
}