import type { User } from "@/types/user";

export const useUserCardProps = (props: {item?: User})  => {
    const item = props.item || undefined;
    return { item };
}