import Image from "next/image";
import React from "react";

export default function page() {
    return (
        <>
            <div
                className="w-full h-96 flex justify-center  items-center"
                style={{
                    backgroundImage: "url('/logo1.png')",
                    backgroundSize: "cover",
                }}
            >
                <h1 className=" uppercase font-bold text-5xl">Principal</h1>
            </div>
            <div className="w-full  border-2 p-20 ">
                <div className=" flex  rounded-xl bg-sky-100">
                    <div className="w-1/3 flex flex-col gap-2 bg-blue-300">
                        <div className="w-full h-72 border-2 relative overflow-hidden">
                            <Image
                                src="/principal.jpeg"
                                alt="chairman"
                                width="500"
                                height="500"

                            />
                        </div>
                        <div>
                            <h1 className="py-2 px-10 font-bold text-2xl">DR.PIYUSH P. MOGHE</h1>
                            <h2 className="py-2 px-10 text-lg">Principal -Lnct</h2>
                            <h3 className="py-2 px-10 ">Associate Professor</h3>
                        </div>
                    </div>
                    <div className="w-2/3 p-10">
                        <p className="text-sm mb-3">
                            Welcome to another exciting academic year at -LNCT indore ! As the Principal, it is my honor and privilege to lead such a dynamic and vibrant community. Our college is a place where your dreams take flight, and your journey towards academic excellence and personal growth begins.

                            At -LNCT indore, we are committed to providing you with an environment that fosters learning, innovation, and holistic development. Our dedicated faculty, state-of-the-art facilities, and diverse range of programs are all designed to ensure you receive a top-notch education that prepares you for the challenges of the future.

                            Education is not just about acquiring knowledge; it is about developing the skills and character needed to navigate and succeed in a rapidly changing world. We encourage you to take full advantage of the opportunities available to you here. Engage actively in your classes, participate in extracurricular activities, and take on leadership roles. Remember, the more you invest in your education, the greater the rewards will be.

                            We are proud of the inclusive and supportive community we have built. Our college is a place where every student is valued, and every voice is heard. We strive to create a safe and welcoming environment where you can express yourself freely, develop meaningful relationships, and grow into well-rounded individuals.

                            As you embark on this academic journey, remember that success is a result of hard work, perseverance, and a positive attitude. There will be challenges along the way, but each challenge is an opportunity to learn and grow. Stay focused on your goals, seek help when needed, and never hesitate to explore new paths and possibilities.

                            I am confident that each of you has the potential to achieve great things. Together, let us make this academic year a memorable and successful one. I look forward to seeing your accomplishments and celebrating your successes.

                            Best wishes for a fruitful and inspiring year ahead.


                        </p>
                        <p>
                            <h1>

                                Warm regards,
                            </h1>
                            <h1>

                                DR.PIYUSH P. MOGHE
                            </h1>
                            <h1>

                                Principal
                            </h1>
                            <h1>

                                -Lnct Indore
                            </h1>
                        </p>


                    </div>
                </div>
            </div>
        </>
    );
}
