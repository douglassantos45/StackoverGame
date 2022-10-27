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
    <div
      className={`relative max-h-[103px] max-w-[100px] md:max-h-[133px] md:max-w-[130px] w-full h-full ${
        locked && 'grayscale'
      } ${
        completed && 'brightness-150'
      } bg-cover bg-no-repeat cursor-pointer hover:brightness-150 transition`}
      style={{backgroundImage: `url('${image}')`}}
    >
      <div>
        {locked ? (
          <img
            src="challenge-lock.svg"
            alt=""
            className="max-h-[103px] max-w-[100px] md:max-h-[133px] md:max-w-[130px] w-full h-full"
          />
        ) : completed ? (
          <>
            <img
              src="crow-icon.svg"
              alt=""
              className="absolute -top-8 -right-6"
            />
            <img
              src='challenge-completed.svg'
              alt=""
              className="max-h-[133px] max-w-[130px] md:max-h-[133px] md:max-w-[130px] w-full h-full"
            />
          </>
        ) : (
          <img
            src={image}
            alt=""
            className="max-h-[103px] max-w-[100px] md:max-h-[133px] md:max-w-[130px] w-full h-full"
          />
        )}
        <p
          className={`text-center text-[11px] mt-4 ${
            completed
              ? 'text-yellow-300 font-semibold'
              : locked
              ? 'text-gray-500'
              : 'text-gray-300'
          } md:text-[15px]`}
        >
          Classificação do Brasileirão
        </p>
        <span
          className={`flex justify-center items-center mt-4 ${
            completed ? 'text-yellow-300' : 'text-gray-600'
          } font-semibold text-lg md:text-xl pb-40 lg:pb-0`}
        >
          +{xp}
        </span>
      </div>
    </div>
  );
};
