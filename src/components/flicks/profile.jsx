import { AiOutlineHeart } from "react-icons/ai";
import { BiMessageRounded } from "react-icons/bi";

const Profile = () => {
  return (
    <div className="grid bg-[#F7EAA9] rounded-lg m-2 w-[16rem] h-[30rem] cursor-default">
      <div className="flex justify-around">
        profile
        <div>my profile</div>
        <div>name</div>
        <div>follow</div>
        <div>my profile</div>
      </div>
      <hr className="border-1 border-black" />
      <div className="py-3">
        <p className="text-xs font-semibold">
          <span className="font-extrabold">Abhi </span>Lorem Ipsum is simply
          dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to make a type
          specimen book.
        </p>
        <br className="" />
        <p className="text-xs font-semibold">
          It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged.
        </p>
      </div>
      <hr className="border-1 border-black" />
      <div>tweets</div>
      <hr className="border-1 border-black" />
      <div className="text-xs ">
        <div className="flex cursor-pointer">
          <AiOutlineHeart className="w-6 h-5" />
          <BiMessageRounded className="w-6 h-5" />
          <svg
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
          >
            <path
              d="M15.8266 0.554766L2.23898 4.34681C1.70353 4.49723 1.23128 4.7951 0.886629 5.19982C0.541975 5.60454 0.341685 6.0964 0.313067 6.60836C0.284449 7.12031 0.428895 7.62744 0.726711 8.0606C1.02453 8.49376 1.46122 8.83187 1.97725 9.02884L6.90271 10.8898C7.01945 10.9369 7.12471 11.0048 7.21236 11.0895C7.30001 11.1743 7.3683 11.2743 7.41323 11.3836L9.17425 15.99C9.32456 16.3813 9.57936 16.7317 9.9155 17.0093C10.2516 17.287 10.6584 17.4832 11.099 17.5799C11.5395 17.6767 11.9997 17.6711 12.4379 17.5635C12.8761 17.4559 13.2782 17.2498 13.6079 16.964C13.9137 16.6934 14.1497 16.3637 14.2987 15.9992L19.1703 3.7767C19.3421 3.34224 19.3789 2.87293 19.2766 2.42115C19.1743 1.96936 18.9368 1.55286 18.5907 1.21812C18.2446 0.883376 17.8035 0.643555 17.3166 0.525412C16.8297 0.407269 16.3162 0.41545 15.8332 0.549046L15.8266 0.554766ZM17.4625 3.21356L12.5909 15.436C12.5247 15.5943 12.4072 15.7304 12.2543 15.8261C12.1014 15.9218 11.9204 15.9724 11.7355 15.9712C11.5506 15.9701 11.3706 15.9172 11.2198 15.8196C11.069 15.722 10.9544 15.5844 10.8916 15.4253L9.12396 10.8247C9.09971 10.7638 9.07159 10.7043 9.03973 10.6465L13.582 6.70576C13.7569 6.55407 13.859 6.34515 13.8658 6.12496C13.8727 5.90477 13.7838 5.69135 13.6187 5.53164C13.4536 5.37193 13.2258 5.27903 12.9854 5.27336C12.745 5.26769 12.5117 5.34973 12.3369 5.50142L7.79458 9.44213C7.73326 9.40985 7.66991 9.38089 7.60487 9.35541L2.686 7.48869C2.51598 7.42255 2.37224 7.31031 2.27408 7.16704C2.17591 7.02377 2.12801 6.85631 2.13678 6.68711C2.14556 6.51791 2.2106 6.35507 2.32318 6.22041C2.43576 6.08576 2.5905 5.98573 2.76665 5.93374L16.3543 2.14169C16.5145 2.09854 16.6846 2.09669 16.8456 2.13635C17.0066 2.17601 17.1525 2.25563 17.2671 2.36646C17.3817 2.47729 17.4605 2.61502 17.495 2.76448C17.5295 2.91394 17.5182 3.06934 17.4625 3.21356Z"
              fill="black"
            />
          </svg>
        </div>
        <p>like by xyz....</p>
        <p>1 Day ago</p>
      </div>
      <hr className="border-1 border-black" />
      <div className="max-w-max">
        <input
          type="text"
          className="w-[16rem] rounded-b-lg text-xs focus:outline-none h-[2rem] bg-[#F7EAA9]"
          placeholder=" Add Comment..."
        />
      </div>
    </div>
  );
};

export default Profile;