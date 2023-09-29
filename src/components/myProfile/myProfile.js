import Nav from "../home/sidebar/sidebar.js";
import Reels from "./reels.js";

const ProfileHome = () => {
  return (
    <div className="flex">
      <div class="rounded-lg bg-[#F7EAA9] rounded-r-2xl mb-2 pb-3 w-1/5 h-fit">
        <Nav props1="/images/logo.png"></Nav>
      </div>
      <div className="w-screen">
        <div className="pl-8 pt-4 w-fit">
          <div className="text-[#978839] font-bold text-[25px]">Samizkhan</div>
          <div className="flex justify-start py-3 h-fit">
            <div className="start-0">
              <img
                src="images/profilephoto.jpeg"
                className="rounded-full w-[8rem] mr-4 p-1 border-2 border-[#978839]"
                alt="profile phot"
              />
            </div>
            <div className="items-center">
              <div className="rounded-lg bg-[#F7EAA9] flex py-5 font-bold">
                <div className="px-7 py-3">posts<p className="font-normal">92</p></div>
                <div className="px-7 py-3">followers<p className="font-normal">153</p></div>
                <div className="px-7 py-3">following<p className="font-normal">500</p></div>
                <div className="px-7 py-3">likes<p className="font-normal">23</p></div>
              </div>
              <div className="flex py-4 justify-evenly">
                <div className="px-3 mr-2 bg-[#F7EAA9] rounded-lg">
                  Edit Profile
                </div>
                <div className="px-3 mr-2 bg-[#F7EAA9] rounded-lg">
                  Share Profile
                </div>
                <div className="px-3 mr-2 bg-[#F7EAA9] rounded-lg">
                  Other Skills
                </div>
                <div className="px-3 mr-2 bg-[#F7EAA9] rounded-lg">
                  Settings
                </div>
              </div>
            </div>
          </div>
          <div className="text-sm">
            <h1 className="font-bold text-xl">Samir Khan</h1>
            <p className="text-gray-600 font-lg">Director</p>
            <h>I didnt go to film school</h>
          </div>
          <div className="flex pt-3 border-b-2 border-[#978839]">
            <div className=" hover:border-b-4 border-b-[#FFFADD] border-b-4 hover:border-b-[#978839] ">
            <a href="/Profile/CommentPage"><img
                src="/images/images/4.png"
                className="w-6 mx-20 pb-6"
                alt=""
              /></a>
            </div>
            <div className=" hover:border-b-4 border-b-[#FFFADD] border-b-4 hover:border-b-[#978839] ">
              <a href="/Profile/CommentPage"><img src="/images/images/1.png" className="w-6 mx-20" alt="" /></a>
            </div>
            <div className=" hover:border-b-4 border-b-[#FFFADD] border-b-4 hover:border-b-[#978839] ">
              <img src="/images/images/6.png" className="w-7 mx-20" alt="" />
            </div>
            <div className=" hover:border-b-4 border-b-[#FFFADD] border-b-4 hover:border-b-[#978839] ">
              <img src="/images/images/5.png" className="w-7 mx-20" alt="" />
            </div>
            <div className=" hover:border-b-4 border-b-[#FFFADD] border-b-4 hover:border-b-[#978839] ">
              <img src="/images/images/1.png" className="w-7 mx-20" alt="" />
            </div>
            <div className=" hover:border-b-4 border-b-[#FFFADD] border-b-4 hover:border-b-[#978839] ">
              <img src="/images/images/2.png" className="w-7 mx-20" alt="" />
            </div>
            <div className="hover:border-b-4 border-b-[#FFFADD] border-b-4 hover:border-b-[#978839] ">
              <svg
                width="34"
                height="34" 

                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mx-20"
              >
                <path
                  d="M17 32.5833L12.75 28.3333H7.08334C6.30417 28.3333 5.63692 28.0556 5.08159 27.5003C4.52625 26.945 4.24906 26.2782 4.25 25.5V5.66665C4.25 4.88748 4.52767 4.22023 5.083 3.6649C5.63834 3.10957 6.30511 2.83237 7.08334 2.83332H26.9167C27.6958 2.83332 28.3631 3.11098 28.9184 3.66632C29.4738 4.22165 29.7509 4.88843 29.75 5.66665V25.5C29.75 26.2791 29.4723 26.9464 28.917 27.5017C28.3617 28.0571 27.6949 28.3343 26.9167 28.3333H21.25L17 32.5833ZM7.08334 23.8708C8.35834 22.6194 9.84017 21.6339 11.5288 20.9142C13.2175 20.1946 15.0412 19.8343 17 19.8333C18.9597 19.8333 20.7839 20.1936 22.4726 20.9142C24.1613 21.6348 25.6426 22.6204 26.9167 23.8708V5.66665H7.08334V23.8708ZM17 17C18.3694 17 19.5382 16.516 20.5063 15.5479C21.4743 14.5798 21.9583 13.4111 21.9583 12.0416C21.9583 10.6722 21.4743 9.50345 20.5063 8.5354C19.5382 7.56734 18.3694 7.08332 17 7.08332C15.6306 7.08332 14.4618 7.56734 13.4938 8.5354C12.5257 9.50345 12.0417 10.6722 12.0417 12.0416C12.0417 13.4111 12.5257 14.5798 13.4938 15.5479C14.4618 16.516 15.6306 17 17 17ZM17 14.1666C16.4097 14.1666 15.9078 13.9598 15.4941 13.5461C15.0804 13.1325 14.8741 12.631 14.875 12.0416C14.875 11.4514 15.0818 10.9494 15.4955 10.5357C15.9092 10.1221 16.4107 9.9157 17 9.91665C17.5903 9.91665 18.0923 10.1235 18.5059 10.5371C18.9196 10.9508 19.1259 11.4523 19.125 12.0416C19.125 12.6319 18.9182 13.1339 18.5045 13.5476C18.0908 13.9612 17.5893 14.1676 17 14.1666ZM17 28.6166L20.1167 25.5H24.0833V25.1458C23.0917 24.3194 21.9938 23.6999 20.7896 23.2871C19.5854 22.8744 18.3222 22.6676 17 22.6666C15.6778 22.6666 14.4146 22.8735 13.2104 23.2871C12.0063 23.7008 10.9083 24.3204 9.91667 25.1458V25.5H13.8833L17 28.6166Z"
                  fill="#978839"
                />
              </svg>
            </div>
          </div>
          <div className="content-center ju">
            <Reels />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHome;
