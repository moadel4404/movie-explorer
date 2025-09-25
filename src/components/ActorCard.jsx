function ActorCard({ act }) {
  return (
    <>
      <div className="flex flex-col gap-3">
        <div
          className="w-full bg-center bg-no-repeat aspect-[2/3] bg-cover rounded-md flex flex-col transition-transform duration-300 hover:scale-105"
          style={{
            backgroundImage:
              `url("${`https://image.tmdb.org/t/p/w500${act?.profile_path}`}")`,
          }}
        />
        <div>
          <p className="text-white text-base font-medium leading-normal">
            {act?.name}
          </p>
          <p className="text-gray-300 text-sm font-normal leading-normal">
            {act?.character}
          </p>
        </div>
      </div>
    </>
  );
}

export default ActorCard;
