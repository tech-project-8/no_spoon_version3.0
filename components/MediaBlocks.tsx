import Image from "next/image";


export type MediaBlockProps = {
variant: "image" | "video";
src: string; // /public path e.g. /media/hero.mp4 or /media/shot.jpg
alt?: string; // for images
poster?: string; // for videos
className?: string; // width + aspect
rounded?: boolean; // rounded corners
autoplay?: boolean; // videos
controls?: boolean; // videos
loop?: boolean; // videos
muted?: boolean; // videos
};


export default function MediaBlock({
variant,
src,
alt = "",
poster,
className = "",
rounded = true,
autoplay = true,
controls = false,
loop = true,
muted = true,
}: MediaBlockProps) {
const radius = rounded ? "rounded-2xl" : "";
if (variant === "image") {
return (
<div className={`relative bg-black ${radius} overflow-hidden ${className}`}>
<Image src={src} alt={alt} fill className="object-cover" sizes="100vw" />
</div>
);
}
return (
<div className={`relative bg-black ${radius} overflow-hidden ${className}`}>
<video
className="h-full w-full object-cover"
src={src}
poster={poster}
autoPlay={autoplay}
muted={muted}
loop={loop}
playsInline
controls={controls}
/>
</div>
);
}