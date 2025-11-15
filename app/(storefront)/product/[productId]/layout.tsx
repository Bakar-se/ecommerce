import Image from "next/image";

export default function ProductDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}
  <section className="w-full bg-white py-20 md:py-32 flex items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-2 md:gap-4 px-4 w-[80%]">
        {/* Top heading */}
        {/* <h1 className="text-6xl md:text-[12rem] font-bold tracking-widest font-serif text-black leading-none text-balance">
          EXSURION
        </h1> */}
<Image src="/logo-cropped.svg" alt="Logo" width={100} height={100} className='h-64 w-full object-cover' />
        {/* Bottom subheading */}
        {/* <p className="text-3xl md:text-8xl font-bold font-serif tracking-widest text-black/90 mt-4 md:mt-6">Instruments</p> */}
      </div>
    </section></>;
}