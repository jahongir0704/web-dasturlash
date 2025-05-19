const courses = [
  {
    category: 'Design',
    image: 'https://i.ytimg.com/vi/Jy__4JS1ED0/hqdefault.jpg?sqp=-oaymwEmCOADEOgC8quKqQMa8AEB-AGGBYAC4AOKAgwIABABGGUgZShlMA8=&rs=AOn4CLD0cSd-LvITA8i5Xw3XGxcxbLksvg',
    rating: 5,
    reviews: 20,
    price: 500
  },
  {
    category: 'Business',
    image: 'https://i.ytimg.com/vi/Jy__4JS1ED0/hqdefault.jpg?sqp=-oaymwEmCOADEOgC8quKqQMa8AEB-AGGBYAC4AOKAgwIABABGGUgZShlMA8=&rs=AOn4CLD0cSd-LvITA8i5Xw3XGxcxbLksvg',
    rating: 4.5,
    reviews: 102,
    price: 500
  },
  {
    category: 'Business',
    image: 'https://i.ytimg.com/vi/Jy__4JS1ED0/hqdefault.jpg?sqp=-oaymwEmCOADEOgC8quKqQMa8AEB-AGGBYAC4AOKAgwIABABGGUgZShlMA8=&rs=AOn4CLD0cSd-LvITA8i5Xw3XGxcxbLksvg',
    rating: 4,
    reviews: 102,
    price: 500
  },
  // Takrorlash uchun
  {
    category: 'Design',
    image: 'https://i.ytimg.com/vi/Jy__4JS1ED0/hqdefault.jpg?sqp=-oaymwEmCOADEOgC8quKqQMa8AEB-AGGBYAC4AOKAgwIABABGGUgZShlMA8=&rs=AOn4CLD0cSd-LvITA8i5Xw3XGxcxbLksvg',
    rating: 5,
    reviews: 20,
    price: 500
  },
  {
    category: 'Business',
    image: 'https://i.ytimg.com/vi/Jy__4JS1ED0/hqdefault.jpg?sqp=-oaymwEmCOADEOgC8quKqQMa8AEB-AGGBYAC4AOKAgwIABABGGUgZShlMA8=&rs=AOn4CLD0cSd-LvITA8i5Xw3XGxcxbLksvg',
    rating: 4.5,
    reviews: 102,
    price: 500
  },
  {
    category: 'Business',
    image: 'https://i.ytimg.com/vi/Jy__4JS1ED0/hqdefault.jpg?sqp=-oaymwEmCOADEOgC8quKqQMa8AEB-AGGBYAC4AOKAgwIABABGGUgZShlMA8=&rs=AOn4CLD0cSd-LvITA8i5Xw3XGxcxbLksvg',
    rating: 4,
    reviews: 102,
    price: 500
  },
  {
    category: 'Design',
    image: 'https://i.ytimg.com/vi/Jy__4JS1ED0/hqdefault.jpg?sqp=-oaymwEmCOADEOgC8quKqQMa8AEB-AGGBYAC4AOKAgwIABABGGUgZShlMA8=&rs=AOn4CLD0cSd-LvITA8i5Xw3XGxcxbLksvg',
    rating: 5,
    reviews: 20,
    price: 500
  },
  {
    category: 'Business',
    image: 'https://i.ytimg.com/vi/Jy__4JS1ED0/hqdefault.jpg?sqp=-oaymwEmCOADEOgC8quKqQMa8AEB-AGGBYAC4AOKAgwIABABGGUgZShlMA8=&rs=AOn4CLD0cSd-LvITA8i5Xw3XGxcxbLksvg',
    rating: 4.5,
    reviews: 102,
    price: 500
  },
  {
    category: 'Business',
    image: 'https://i.ytimg.com/vi/Jy__4JS1ED0/hqdefault.jpg?sqp=-oaymwEmCOADEOgC8quKqQMa8AEB-AGGBYAC4AOKAgwIABABGGUgZShlMA8=&rs=AOn4CLD0cSd-LvITA8i5Xw3XGxcxbLksvg',
    rating: 4,
    reviews: 102,
    price: 500
  }
];

function generateStarRating(rating) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  let stars = '★'.repeat(fullStars);
  if (halfStar) stars += '☆';
  return stars;
}

const grid = document.getElementById('courseGrid');

courses.forEach(course => {
  const card = document.createElement('div');
  card.className = 'card';

  const tag = document.createElement('div');
  tag.className = 'card-tag';
  if (course.category.toLowerCase() === 'business') {
    tag.classList.add('business');
  }
  tag.textContent = course.category;

  const img = document.createElement('img');
  img.src = course.image;
  img.alt = course.category;
  img.className = 'card-img';

  const title = document.createElement('p');
  title.className = 'card-title';
  title.textContent = 'Various versions have evolved...';

  const rating = document.createElement('div');
  rating.className = 'rating';
  rating.innerHTML = `
    ${generateStarRating(course.rating)}
    <span class="reviews">(${course.reviews})</span>
  `;

  const footer = document.createElement('div');
  footer.className = 'card-footer';
  footer.innerHTML = `
    <span>$ ${course.price}</span>
    <button class="arrow-btn">↗</button>
  `;

  card.appendChild(tag);
  card.appendChild(img);
  card.appendChild(title);
  card.appendChild(rating);
  card.appendChild(footer);

  grid.appendChild(card);
});
