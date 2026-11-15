import Image from "next/image";

// Real moments from our most-loved Instagram posts (@oslogirlsocial).
const photos = [
  {
    src: "/community/sunday-walk-crew.webp",
    alt: "A big group of Oslo Girl Social members smiling together on a Sunday walk",
  },
  {
    src: "/community/forest-walk.webp",
    alt: "Members walking together along a forest trail outside Oslo",
  },
  {
    src: "/community/yoga-in-the-park.webp",
    alt: "Women stretching together during yoga in the park",
  },
  {
    src: "/community/walk-with-dog.webp",
    alt: "A group of members gathered for a walk on a sunny day, with a dog in front",
  },
  {
    src: "/community/workshop.webp",
    alt: "Members working side by side at a creative workshop",
  },
  {
    src: "/community/autumn-walk.webp",
    alt: "Members walking down a leafy avenue in autumn",
  },
];

export default function CommunityPhotos() {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-24 sm:pb-32">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
        {photos.map((photo) => (
          <div
            key={photo.src}
            className="relative aspect-[4/5] overflow-hidden rounded-xl bg-card"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 330px"
              className="object-cover"
            />
          </div>
        ))}
      </div>
      <p className="mt-6 text-center text-sm text-muted">
        Real moments from our walks and events.{" "}
        <a
          href="https://www.instagram.com/oslogirlsocial/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-border underline-offset-4 hover:text-accent"
        >
          See more on Instagram
        </a>
      </p>
    </section>
  );
}
