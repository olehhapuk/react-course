import { useState } from 'react';

const images = [
  'https://upload.wikimedia.org/wikipedia/commons/1/15/Cat_August_2010-4.jpg',
  'https://media.4-paws.org/a/5/3/7/a537f08d227326121b80790ba54036498668c9c8/VIER%20PFOTEN_2016-07-08_011-4993x3455-1920x1329.jpg',
  'https://cdn.britannica.com/34/235834-050-C5843610/two-different-breeds-of-cats-side-by-side-outdoors-in-the-garden.jpg',
  'https://images.squarespace-cdn.com/content/v1/607f89e638219e13eee71b1e/1684821560422-SD5V37BAG28BURTLIXUQ/michael-sum-LEpfefQf4rU-unsplash.jpg',
  'https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg',
];

export default function Carousel() {
  const [index, setIndex] = useState(0);

  function increment() {
    // setIndex(Math.min(index + 1, images.length - 1));

    const newValue = index + 1;
    if (newValue > images.length - 1) {
      setIndex(0);
    } else {
      setIndex(newValue);
    }
  }

  function decrement() {
    // setIndex(Math.max(index - 1, 0));
    const newValue = index - 1;
    if (newValue < 0) {
      setIndex(images.length - 1);
    } else {
      setIndex(newValue);
    }
  }

  return (
    <div className="flex items-center gap-4">
      <button
        type="button"
        className="size-8 rounded-md bg-neutral-300"
        onClick={decrement}
      >
        {'<'}
      </button>
      <img
        src={images[index]}
        alt="Image"
        className="w-[300px] aspect-video object-cover object-center"
      />
      <span>{index}</span>
      <button
        type="button"
        className="size-8 rounded-md bg-neutral-300"
        onClick={increment}
      >
        {'>'}
      </button>
    </div>
  );
}
