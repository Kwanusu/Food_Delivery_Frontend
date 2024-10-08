import { Restaurant } from "@/type";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Dot } from "lucide-react";

type Props = {
  restaurant: Restaurant;

}

const RestaurantInfo = ({restaurant}: Props) => {

  return (
  <Card className="border-sla">
    <CardHeader>
      <CardTitle className="text-xl md:text-3xl font-bold tracking-tight">
        {restaurant.restaurantName}
      </CardTitle>
      <CardDescription className="text-sm md:text-base">
        {restaurant.city}, {restaurant.country}
      </CardDescription>
    </CardHeader>
    <CardContent className="flex flex-wrap gap-2">
      {restaurant.cuisines.map((item, index) => (
        <span className="flex items-center" key={index}>
          <span>{item}</span>
          {index < restaurant.cuisines.length - 1 && <Dot />}
        </span>
      ))}
    </CardContent>
  </Card>
);
}
export default RestaurantInfo