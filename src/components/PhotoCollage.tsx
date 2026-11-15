import Image from "next/image";

const photos = [
  {
    src: "/home/community.webp",
    alt: "A big group of Oslo Girl Social members together on the grass in an autumn park",
    caption: "the crew",
    width: 870,
    height: 572,
    tilt: "-rotate-3",
  },
  {
    src: "/home/garden-walk.jpg",
    alt: "Members chatting and taking photos on a sunny garden walk in Oslo",
    caption: "out and about",
    width: 640,
    height: 402,
    tilt: "rotate-2",
  },
  {
    src: "/home/oslo-dusk.jpg",
    alt: "Lanterns glowing at dusk over a park in Oslo",
    caption: "Oslo after dark",
    width: 480,
    height: 640,
    tilt: "-rotate-2",
  },
  {
    src: "/home/waving-mountain.jpg",
    alt: "A woman in a yellow sweater and cream scarf waving in front of a snowy mountain and lake",
    caption: "say hi first",
    width: 882,
    height: 1100,
    tilt: "rotate-3",
  },
];

// To swap in more event photos: drop files in public/home and edit this list.
export default function PhotoCollage() {
  return (
    <div className="mx-auto max-w-5xl px-6">
      <div className="text-center">
        <span className="tag">Come as you are</span>
        <h2 className="mt-6 font-serif text-4xl font-normal leading-tight tracking-[-0.015em] sm:text-5xl">
          Come alone. Leave with friends.
        </h2>
        <p className="mx-auto mt-5 max-w-md text-muted">
          A peek at what our meetups look like.
        </p>
      </div>
      <div className="mt-14 grid grid-cols-2 items-center gap-x-5 gap-y-10 sm:grid-cols-4">
        {photos.map((photo) => (
          <figure key={photo.src} className={`polaroid ${photo.tilt}`}>
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-card">
              <Image
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                sizes="(min-width: 640px) 22vw, 45vw"
                className="h-full w-full object-cover"
              />
            </div>
            <figcaption className="px-1 pb-2 pt-3 text-center font-serif text-base italic text-muted">
              {photo.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
