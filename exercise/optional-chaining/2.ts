// You are building a system for managing book reviews in an online bookstore.
// Each book has a review section that may contain nested data about reviewer
// comments, ratings, and review details. Implement a way to safely access
// these nested properties using optional chaining.
//
// Requirements:
// - Use optional chaining to access various properties of the `bookReview` object.
//
// Notes:
// - The property to access is detailed in the code comments.

import { strict as assert } from "assert";

interface Review {
  reviewer?: {
    name?: string;
    age?: number;
  };
  rating?: number;
  details?: {
    comment?: string;
    date?: string;
  };
}

interface BookReview {
  title: string;
  reviews?: Review[];
}

const bookReview: BookReview = {
  title: "The Great Adventure",
  reviews: [
    {
      reviewer: {
        name: "John Doe",
        age: 30
      },
      rating: 4,
      details: {
        comment: "An amazing book!",
        date: "2024-08-10"
      }
    },
    {
      reviewer: {
        name: "Jane Smith"
      },
      rating: 5
    }
  ]
};

// Access the first reviewer's name
assert.equal(firstReviewerName, "John Doe");

// Access the first reviewer's age
assert.equal(firstReviewerAge, 30);

// Access the rating of the second review
assert.equal(secondReviewRating, 5);

// Access the comment of the second review (does not exist)
assert.equal(secondReviewComment, undefined);

// Access the date of the first review
assert.equal(firstReviewDate, "2024-08-10");