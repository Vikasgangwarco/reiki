// components/LatestVideosSection.jsx
import Image from 'next/image';

const reels = [
  { id: 'dQw4w9WgXcQ', thumbnail: '/reel-thumb.jpg' },
  { id: 'eY52Zsg-KVI', thumbnail: '/reel-thumb.jpg' },
  { id: 'kXYiU_JCYtU', thumbnail: '/reel-thumb.jpg' },
  { id: '3JZ_D3ELwOQ', thumbnail: '/reel-thumb.jpg' },
];

const LatestVideosSection = ({ fontClass }) => {
  return (
    <section className="py-12 text-center">
      <h2 className={`text-3xl text-black font-semibold mb-10 ${fontClass}`}>
        Latest Videos
      </h2>

      <div className="flex justify-center flex-wrap gap-12 px-4">
        {reels.map((reel, i) => (
          <a
            key={i}
            href={`https://www.youtube.com/shorts/${reel.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group aspect-[9/16] w-44 sm:w-52 md:w-56 lg:w-64 rounded-2xl overflow-hidden"
          >
            <Image
              src={reel.thumbnail}
              alt="Thumbnail"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition group-hover:bg-black/40">
              <div className="bg-white p-3 rounded-full shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-black"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M6 4l10 6-10 6V4z" />
                </svg>
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className="text-base mt-10 text-blue-500 underline text-end px-10">
        <a
          className="hover:text-blue-700"
          href="https://www.youtube.com/@yourchannel/shorts"
          target="_blank"
          rel="noopener noreferrer"
        >
          YouTube Channel
        </a>
      </div>
    </section>
  );
};

export default LatestVideosSection;
