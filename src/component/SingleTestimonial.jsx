import DotShape from "./DotShape";

const SingleTestimonial = ({
  image,
  reviewImg,
  reviewAlt,
  details,
  name,
  position,
}) => {
  return (
    <div className="relative flex justify-center">
      <div className="relative w-full pb-16 md:w-11/12 lg:w-10/12 xl:w-8/12 xl:pb-0">
        <div className="w-full items-center md:flex">
          <div className="relative mb-12 w-full max-w-[310px] md:mr-12 md:mb-0 md:max-w-[250px] lg:mr-14 lg:max-w-[280px] 2xl:mr-16">
            <img src={image} alt="image" className="w-full rounded-full" />
            <span className="absolute -top-6 left-3 z-[-1] hidden sm:block">
              <DotShape />
            </span>
            <span className="absolute -bottom-0 -right-0 z-[-1]">
              <svg
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 32C3 15.9837 15.9837 3 32 3C48.0163 2.99999 61 15.9837 61 32C61 48.0163 48.0163 61 32 61C15.9837 61 3 48.0163 3 32Z"
                  stroke="#13C296"
                  strokeWidth="6"
                />
              </svg>
            </span>
          </div>
          <div className="w-full">
            <div>
              <div className="mb-7">
                <img src={reviewImg} alt={reviewAlt} />
              </div>
              <p className="text-body-color mb-11 text-base font-medium italic sm:text-lg">
                {details}
              </p>
              <h4 className="text-dark text-xl font-semibold">{name}</h4>
              <p className="text-body-color text-base">{position}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTestimonial;
