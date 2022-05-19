import { Bookable } from "@trip-kaizen-sor-workspace/shared-lib";

export interface Restaurant extends Bookable {
    price: number;
    cuisine: string[];
}
