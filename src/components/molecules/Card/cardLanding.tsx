interface CardLandingProps {
  title: string;
  description: string;
}

const CardLanding = ({ title, description }: CardLandingProps) => {
  return (
    <div className="card-landing">
      <div className="text-placeholder text-lg text-whiteSolid leading-[27px]">{title}</div>
      <div className="mt-2 text-placeholder text-base text-whiteSolid/[0.8]">{description}</div>
    </div>
  );
};

export default CardLanding;
