import { site } from "@/content/site";
import { icons } from "./ui";

/**
 * Privacy-friendly YouTube embed (youtube-nocookie). When no video id is
 * set yet, renders a styled placeholder that links to the channel so the
 * page never looks broken.
 */
export function YouTube({ id, title, className = "" }: { id?: string; title: string; className?: string }) {
  if (!id) {
    return (
      <a
        href={site.youtube.channelUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`group relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-2xl bg-ocean-900 text-white ${className}`}
      >
        <div
          className="absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(60% 80% at 20% 20%, #1b7a97 0%, transparent 60%), radial-gradient(50% 70% at 85% 80%, #c9a24a 0%, transparent 60%)",
          }}
        />
        <div className="relative flex flex-col items-center gap-3 px-6 text-center">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/30 transition group-hover:bg-white/25">
            {icons.play}
          </span>
          <p className="font-display text-xl">{title}</p>
          <p className="text-xs text-sand-200">Watch on YouTube · @trainingleadershawaii</p>
        </div>
      </a>
    );
  }
  return (
    <div className={`aspect-video w-full overflow-hidden rounded-2xl bg-black shadow-soft ${className}`}>
      <iframe
        className="h-full w-full"
        src={`https://www.youtube-nocookie.com/embed/${id}?rel=0&modestbranding=1`}
        title={title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}
