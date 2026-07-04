import { Injectable, NotFoundException } from '@nestjs/common';
import { formatCatNames } from './domain/cats';
import { calculateOrderTotal, qualifiesForFreeGift } from './domain/orders';
import { YourNextDeliveryResponse } from './types';
import { UserService } from './user.service';

@Injectable()
export class CommsService {
  constructor(private readonly userService: UserService) {}

  getYourNextDelivery(userId: string): YourNextDeliveryResponse {
    const user = this.userService.findById(userId);

    if (!user) {
      throw new NotFoundException(`User ${userId} not found`);
    }

    const activeCats = user.cats.filter((cat) => cat.subscriptionActive);
    const formattedCatNames = formatCatNames(activeCats);
    const totalPrice = calculateOrderTotal(activeCats);

    return {
      title: `Your next delivery for ${formattedCatNames}`,
      message: `Hey ${user.firstName}! In two days' time, we'll be charging you for your next order for ${formattedCatNames}'s fresh food.`,
      totalPrice,
      freeGift: qualifiesForFreeGift(totalPrice),
    };
  }
}
