import Image from "next/image";
import Link from "next/link";

export default function Programs() {
    return (
        <div id="programs" className="mb-[100px] mt-[100px] mx-auto">
            <div className="text-center mb-15  ">
                <h1 className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-4xl mb-4 text-[#28737d]">
                    Our Programs
                </h1>
                <div className="flex mt-2 justify-center">
                    <div className="w-16 h-1 rounded-full bg-myellow inline-flex" />
                </div>
            </div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap ">
                        <div className="xl:w-1/3 md:w-1/2 ">
                            <div className="xl:w-1/3 md:w-1/2 ">
                                <div className="card w-96 bg-base-100 shadow-xl">
                                    <figure className="">
                                        <Image src={require("../../public/assest/CS1-01.jpg")} alt='w1' width={450}
                                            height={400}
                                            className="w-full h-full object-cover transform transition-transform hover:scale-110"
                                        />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 uppercase text-myheading">computer sci</h2>
                                        <p className="leading-7 [&:not(:first-child)]:mt-6 line-clamp-2 text-gray-800 font-normal">Cutting-edge computer science education with practical learning, industry collaboration, and global perspectives.</p>
                                        <div className="card-actions justify-end ">
                                            <Link href={"/Contactus"}> <button className="btn btn-primary  bg-mytext hover:bg-green-600 border-green-700 hover:border-green-700">More</button></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xl:w-1/3 md:w-1/2 ">
                            <div className="xl:w-1/3 md:w-1/2 ">
                                <div className="card w-96 bg-base-100 shadow-xl">
                                    <figure className="">
                                        <Image src={require("../../public/assest/PM-1-01.jpg")} alt='w1' width={450}
                                            height={400}
                                            className="w-full h-full object-cover transform transition-transform hover:scale-110"
                                        />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 uppercase text-myheading">Pre-medical</h2>
                                        <p className="leading-7 [&:not(:first-child)]:mt-6 line-clamp-2 text-gray-800 font-normal">Comprehensive pre-med program with experienced faculty, clinical exposure, and global perspectives.</p>
                                        <div className="card-actions justify-end ">
                                            <Link href={"/Contactus"}> <button className="btn btn-primary bg-mytext hover:bg-green-600 border-green-700 hover:border-green-700">More</button></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xl:w-1/3 md:w-1/2 ">
                            <div className="xl:w-1/3 md:w-1/2 ">
                                <div className="card w-96 bg-base-100 shadow-xl">
                                    <figure className="">
                                        <Image src={require("../../public/assest/PE-1-01.jpg")} alt='w1' width={450}
                                            height={400}
                                            className="w-full h-full object-cover transform transition-transform hover:scale-110"
                                        />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 uppercase text-myheading">Pre-Engineering</h2>
                                        <p className="leading-7 [&:not(:first-child)]:mt-6 line-clamp-2 text-gray-800 font-normal">Pre-engineering program with expert faculty, labs, projects, industry connections, and global perspectives.</p>
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