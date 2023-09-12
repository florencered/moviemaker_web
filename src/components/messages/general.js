import React from 'react';

function General() {
    return (
        <div className="flex flex-row mt-3">
            <ul class="flex flex-col space-y-2 ml-5">
            <p className="font-semibold text-[19px] tracking-normal text-green-500">GENERAL</p>
                <li class="flex flex-row">
                    <div class="relative bg-gradient-to-br from-rose-600 via-yellow-400 to-transparent p-0.5 rounded-full">
                        <a href="#" class="block bg-white p-1 rounded-full transform transition hover:-rotate-6">
                            <img class="w-16 h-16 rounded-full" src="https://placekitten.com/200/200" alt="cute kitty" />
                        </a>
                    </div>
                    <div className="ml-5 mt-2">
                        <p className="font-bold text-[21px] tracking-normal text-green-600">Killan James</p>
                        <p className="font-semibold text-[12px] tracking-normal text-black">Thankyou</p>
                    </div>
                </li>

                <li class="flex flex-row">
                    <div class="relative bg-gradient-to-br from-rose-600 via-yellow-400 to-transparent p-0.5 rounded-full">
                        <a href="#" class="block bg-white p-1 rounded-full transform transition hover:-rotate-6">
                            <img class="w-16 h-16 rounded-full" src="https://placekitten.com/200/200" alt="cute kitty" />
                        </a>
                        </div>
                        <div className="ml-5 mt-2">
                        <p className="font-bold text-[21px] tracking-normal text-green-600">Killan James</p>
                        <p className="font-semibold text-[12px] tracking-normal text-black">2 new messages</p>
                    </div>
                </li>

                <li class="flex flex-row">
                    <div class="relative bg-gradient-to-br from-rose-600 via-yellow-400 to-transparent p-0.5 rounded-full">
                        <a href="#" class="block bg-white p-1 rounded-full transform transition hover:-rotate-6">
                            <img class="w-16 h-16 rounded-full" src="https://placekitten.com/200/200" alt="cute kitty" />
                        </a>
                    </div>
                    <div className="ml-5 mt-2">
                        <p className="font-bold text-[21px] tracking-normal text-green-600">Killan James</p>
                        <p className="font-semibold text-[12px] tracking-normal text-black">Bye</p>
                    </div>
                </li>

            </ul>
        </div>
    );
}

export default General;