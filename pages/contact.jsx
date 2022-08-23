import Link from "next/link";
import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";

const Contact = () => {
  return (
    <div>
      <section className="text-gray-600 body-font px-20">
        <div className="container mx-auto flex py-20 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              src="https://media.istockphoto.com/vectors/young-male-character-writing-code-on-a-desktop-computer-working-from-vector-id1219473617?k=20&m=1219473617&s=612x612&w=0&h=A8e5lzJhIqWCzzY9oK0QplPYDICDnfApKpSkcBEzEhE="
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Knausgaard typewriter readymade marfa
            </h1>
            <p className="mb-8 leading-relaxed">
              Chillwave portland ugh, knausgaard fam polaroid iPhone. Man braid
              swag typewriter affogato, hella selvage wolf narwhal dreamcatcher.
            </p>
            <div className="flex gap-10 mx-10">
              <Link href={"/"}>
                <a href="">
                  <GrInstagram size={"3em"} />
                </a>
              </Link>
              <Link href={"/"}>
                <a href="">
                  <BsGithub size={"3em"} />
                </a>
              </Link>
              <Link href={"/"}>
                <a href="">
                  <BsLinkedin size={"3em"} />
                </a>
              </Link>
              <Link href={"/"}>
                <a href="">{/* <BsWhatsapp size={"3em"} /> */}</a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
