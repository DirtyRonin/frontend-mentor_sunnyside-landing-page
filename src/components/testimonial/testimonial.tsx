interface TestimonialProps {
  avatarUrl: string;
  recommendation: string;
  name: string;
  profession: string;
}

export function Testimonial({ avatarUrl, recommendation, name, profession }: TestimonialProps) {
  return (
    <div className="flex flex-col text-center gap-[2rem]">
      <div className="flex justify-center ">
        <img className="rounded-full w-[22.5%]" alt="" src={avatarUrl} />
      </div>
      <div>
        <p className="font-[Barlow] text-very-dark-grayish-blue text-[.99rem] leading-[1.65rem] font-bold">{recommendation}</p>
      </div>
      <div className="flex flex-col gap-2">
        <h4 className="font-black">{name}</h4>
        <p className="font-[Barlow] text-grayish-blue text-[.775rem] ">{profession}</p>
      </div>
    </div>
  );
}
