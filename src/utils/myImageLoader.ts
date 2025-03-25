'use client';

export default function myImageLoader({
  src,
}: {
  src: string;
}) {
  return `https://monolith-frame/${src}`;
}
