import { NotFoundException } from '@nestjs/common';
import { describe, expect, it, jest } from '@jest/globals';
import { CommsService } from './comms.service';
import { User } from './customer-data.schema';
import { UserService } from './user.service';

const makeUser = (user: Partial<User>): User => ({
  id: 'user-id',
  firstName: 'Sam',
  lastName: 'Example',
  email: 'sam@example.com',
  cats: [],
  ...user,
});

const createServiceWithDataSource = (): CommsService => {
  return new CommsService(new UserService());
};

const createServiceWithUser = (user?: User): CommsService => {
  const userService = new UserService();

  jest.spyOn(userService, 'findById').mockReturnValue(user);

  return new CommsService(userService);
};

describe('CommsService', () => {
  it('returns the README example response from the JSON data source', () => {
    const service = createServiceWithDataSource();

    expect(
      service.getYourNextDelivery('ff535484-6880-4653-b06e-89983ecf4ed5'),
    ).toEqual({
      title: 'Your next delivery for Dorian and Ocie',
      message:
        "Hey Kayleigh! In two days' time, we'll be charging you for your next order for Dorian and Ocie's fresh food.",
      totalPrice: 134,
      freeGift: true,
    });
  });

  it('excludes inactive cats from the response copy and total price', () => {
    const service = createServiceWithUser(
      makeUser({
        firstName: 'Alex',
        cats: [
          {
            name: 'Active',
            subscriptionActive: true,
            breed: 'Savannah',
            pouchSize: 'A',
          },
          {
            name: 'Inactive',
            subscriptionActive: false,
            breed: 'Siamese',
            pouchSize: 'F',
          },
        ],
      }),
    );

    expect(service.getYourNextDelivery('user-id')).toEqual({
      title: 'Your next delivery for Active',
      message:
        "Hey Alex! In two days' time, we'll be charging you for your next order for Active's fresh food.",
      totalPrice: 55.5,
      freeGift: false,
    });
  });

  it('returns freeGift false when the order total does not exceed the threshold', () => {
    const service = createServiceWithUser(
      makeUser({
        cats: [
          {
            name: 'Betsy',
            subscriptionActive: true,
            breed: 'Savannah',
            pouchSize: 'A',
          },
          {
            name: 'Felix',
            subscriptionActive: true,
            breed: 'Siamese',
            pouchSize: 'B',
          },
        ],
      }),
    );

    expect(service.getYourNextDelivery('user-id')).toMatchObject({
      title: 'Your next delivery for Betsy and Felix',
      totalPrice: 115,
      freeGift: false,
    });
  });

  it('returns freeGift true when the order total exceeds the threshold', () => {
    const service = createServiceWithUser(
      makeUser({
        cats: [
          {
            name: 'Dorian',
            subscriptionActive: true,
            breed: 'Thai',
            pouchSize: 'C',
          },
          {
            name: 'Ocie',
            subscriptionActive: true,
            breed: 'Somali',
            pouchSize: 'F',
          },
        ],
      }),
    );

    expect(service.getYourNextDelivery('user-id')).toMatchObject({
      title: 'Your next delivery for Dorian and Ocie',
      totalPrice: 134,
      freeGift: true,
    });
  });

  it('throws a NotFoundException when the user does not exist', () => {
    const service = createServiceWithUser();

    expect(() => service.getYourNextDelivery('missing-user')).toThrow(
      NotFoundException,
    );
  });
});
