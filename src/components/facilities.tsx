import Image from "next/image";
import { Button } from "./ui/button";
import { ImHeart } from "react-icons/im"
import { PiShoppingBagFill } from "react-icons/pi"
import BestSellingcard from "./bestsellingprodectscard";
import Link from "next/link";

export default function Facilities() {
    // const bestsell =
    //     [
    //         {
    //             src: "/assest/Computerlab-01.jpg",
    //             alt: "m1",
    //             title: "computer lab",
    //         },
    //         {
    //             src: "/assest/library--01.jpg",
    //             alt: "m2",
    //             title: "library",
    //         },

    //     ]
    return (
        <div className="mb-[100px] mt-[100px] mx-auto">
            <div id="faci" className="text-center mb-15  ">
                <h1 className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-4xl mb-4 text-[#28737d]">
                    Our Facilities
                </h1>
                <div className="flex mt-2 justify-center ">
                    <div className="w-16 h-1 rounded-full bg-myellow inline-flex " />
                </div>
            </div>
            <section className="text-gray-600 body-font gap-y-2">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap ">
                        <div className="xl:w-1/2 md:w-1/2 ">
                            <div className="xl:w-1/2 md:w-1/2 ">
                                <div className="card w-96 bg-base-100 shadow-xl">
                                    <figure className="">
                                        <Image src="/assest/Computerlab-01.jpg" alt='w1' width={450}
                                            height={400}
                                            className="w-full h-full object-cover transform transition-transform hover:scale-110"
                                        />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 uppercase text-myheading">computer Lab</h2>
                                        <p className="leading-7 [&:not(:first-child)]:mt-6 line-clamp-2 text-gray-800 font-normal">Cutting-edge computer science education with practical learning, industry collaboration, and global perspectives.</p>
                                        <div className="card-actions justify-end ">
                                            <Link href={"/Contactus"}> <button className="btn btn-primary bg-mytext hover:bg-green-600 border-green-700 hover:border-green-700">More</button></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xl:w-1/2 md:w-1/2 ">
                            <div className="xl:w-1/2 md:w-1/2 ">
                                <div className="card w-96 bg-base-100 shadow-xl">
                                    <figure className="">
                                        <Image src="/public/library--01.jpg" alt='w1' width={450}
                                            height={400}
                                            className="w-full h-full object-cover transform transition-transform hover:scale-110"
                                        />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 uppercase text-myheading">library</h2>
                                        <p className="leading-7 [&:not(:first-child)]:mt-6 line-clamp-2 text-gray-800 font-normal">Comprehensive pre-med program with experienced faculty, clinical exposure, and global perspectives.</p>
                                        <div className="card-actions justify-end ">
                                            <Link href={"/Contactus"}> <button className="btn btn-primary bg-mytext hover:bg-green-600 border-green-700 hover:border-green-700">More</button></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>

    )
} 