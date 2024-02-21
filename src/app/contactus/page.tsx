import Link from "next/link";

export default function Contactus() {
    return (
        <div><div id="contact" className="pl-18  ">
            <section className=" body-font relative">
                <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                    <div className="lg:w-3/3 md:w-2/2= rounded-xl overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative border-solid border-2 border-black text-mysubheading pb-8">
                        <iframe
                            width="100%"
                            height="100%"
                            className="absolute inset-0"
                            frameBorder={0}
                            title="map"
                            marginHeight={0}
                            marginWidth={0}
                            scrolling="no"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14477.544178695673!2d67.11063076322127!3d24.884810331374172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb339e997d5c57b%3A0x5335034636f56b91!2sCantt.%20Public%20Degree%20College%20(Cantonment%20Board%20Faisal)!5e0!3m2!1sen!2s!4v1703876992954!5m2!1sen!2s"
                            style={{ filter: " contrast(1.2) opacity(0.4)" }}
                        />
                        <div className="bg-mybg/60 relative flex flex-wrap py-6 rounded shadow-md border-solid border-2 border-black bg-opacity-color-20">
                            <div className="lg:w-1/2 px-6">
                                <h2 className="title-font font-extrabold text-myheading tracking-widest text-lg">
                                    ADDRESS
                                </h2>
                                <p className="mt-1 text-white">
                                    Drigh Road Cantt Bazar, Near Meezan Bank, Karachi.
                                </p>
                            </div>
                            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                                <h2 className="title-font font-extrabold text-myheading tracking-widest text-lg">
                                    EMAIL
                                </h2>
                                <Link href={"#"} className="text-white p-500 leading-relaxed">cpdcfaisalcantt18@gmail.com</Link>
                                
                                <h2 className="title-font font-extrabold text-myheading tracking-widest text-lg mt-4">
                                    PHONE
                                </h2>
                                <p className="leading-relaxed text-white ">0330 2463589</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/3 md:w-1/2 bg-mybg flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 border-solid border-2 rounded-xl border-black text-mysubheading pl-3 pr-3 ">
                        <h2 className="title-font sm:text-3xl text-3xl mb-4 font-bold text-myheading">
                            Contact
                        </h2>
                        <p className="leading-relaxed mb-5 text-mysubheading p-600">
                            feel free to Contact
                        </p>
                        
                        <form action="https://formspree.io/f/xdorpeav"
                            method="POST">
                            <div className="relative mb-4">
                                <label htmlFor="name" className="leading-7 text-sm text-myred p-600  hover:text-mylogo">
                                    Name
                                </label >
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full bg-mylogo rounded border border-myredDark focus:border-myredDark focus:ring-2 focus:ring-myred text-base outline-none text-myblue p-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out hover:text-myblueDark"
                                    required
                                />
                            </div>
                            <div className="relative mb-4">
                                <label htmlFor="email" className="leading-7 text-sm text-myred p-600  hover:text-mylogo">
                                    Email
                                </label >
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full bg-mylogo rounded border border-myredDark focus:border-myredDark focus:ring-2 focus:ring-myred text-base outline-none text-myblue p-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out hover:text-myblueDark"
                                    required
                                />
                            </div>
                            <div className="relative mb-4">
                                <label htmlFor="subject" className="leading-7 text-sm text-myred p-600  hover:text-mylogo">
                                    Subject
                                </label >
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    className="w-full bg-mylogo rounded border border-myredDark focus:border-myredDark focus:ring-2 focus:ring-myred text-base outline-none text-myblue p-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out hover:text-myblueDark"
                                    required
                                />
                            </div>
                            <div className="relative mb-4">
                                <label htmlFor="message" className="leading-7 text-sm text-myred p-600 hover:text-mylogo">
                                    Message
                                </label >
                                <textarea
                                    id="message"
                                    name="message"
                                    className="w-full bg-mylogo rounded border border-myredDark focus:border-myredDark focus:ring-2 focus:ring-myred text-base outline-none text-myblue p-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out hover:text-myblueDark"
                                    defaultValue={""}
                                    required
                                />

                            </div>

                            <button className="text-mytext bg-white border-0 py-2 px-6 focus:outline-none hover:bg-white rounded text-lg font-bold w-full">
                                Send Message
                            </button>
                        </form>

                        


                    </div>
                </div>
            </section>

        </div>
        </div>

    )
}