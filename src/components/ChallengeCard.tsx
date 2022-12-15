type ChallengeCardProps = {
  image: string;
  title: string;
  description: string;
  xp: number;
  locked: boolean;
  completed: boolean;
};

export const ChallengeCard = ({
  image,
  title,
  description,
  xp,
  locked = false,
  completed = true,
}: ChallengeCardProps) => {
  return (
    <div className="">
      <div className="relative flex flex-col items-center w-full">
        {locked ? (
          <>
            <img
              src="challenge-lock.svg"
              alt=""
              className="absolute z-10 w-[8rem] md:w-full"
            />
            <img
              src="gpu.png"
              alt=""
              className="w-[8rem] md:w-full grayscale"
            />
          </>
        ) : completed ? (
          <div className="relative">
            <img
              src="crow-icon.svg"
              alt=""
              className="absolute -top-8 -right-6"
            />
            <div className="relative">
              <img
                src="challenge-completed.svg"
                alt=""
                className="absolute z-10 w-[8rem] md:w-full"
              />
              <img
                src="gpu.png"
                alt=""
                className="w-[8rem] md:w-full brightness-110"
              />
            </div>
          </div>
        ) : (
          <img src="gpu.png" alt="" className="w-[8rem] md:w-full" />
        )}

        <div className="max-w-[150px] text-center">
          <p
            className={`text-center text-[11px] mt-4 ${
              completed
                ? 'text-yellow-300 font-semibold'
                : locked
                ? 'text-gray-500'
                : 'text-gray-300'
            } md:text-[15px]`}
          >
            {title}
          </p>
          <span
            className={`inline-block mt-4 ${
              completed ? 'text-yellow-300' : 'text-gray-600'
            } font-semibold text-lg md:text-x lg:pb-0`}
          >
            +{xp}
          </span>
        </div>
      </div>
    </div>
  );
};
