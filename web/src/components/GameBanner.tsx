interface GameBannerProps {
    bannerUrl: string;
    title: string;
    adsCount: number;
}

export function GameBanner(props: GameBannerProps) {
  return (
    <a href="" className="relative overflow-hidden">
      <img src={props.bannerUrl} alt=""></img>
      <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0 rounded-lg overflow-hidden">
        <strong className="font-bold text-white block">
          {props.title}
        </strong>
        <span className="text-zinc-300 text-sm block mt-1">{props.adsCount} anúncio(s)</span>
      </div>
    </a>
  );
}
