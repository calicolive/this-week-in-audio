interface HeroProps {
  children: React.ReactNode;
}

interface HeroElementProps {
  children: React.ReactNode;
}

export const HeroTitle = ({ children }: HeroElementProps) => {
  return <h1 className='text-5xl font-bold md:text-7xl'>{children}</h1>;
};
export const HeroSubtitle = ({ children }: HeroElementProps) => {
  return <p className='text-xl font-medium mt-4 text-slate-900'>{children}</p>;
};
export default function Hero({ children }: HeroProps) {
  return <div className='text-center text-slate-950'>{children}</div>;
}
