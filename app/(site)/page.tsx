import Image from "next/image";

export default function Home() {
  return (
    <div
      className="
        flex
        min-h-full
        flex-col
        justify-center
        py-12
        sm:px-6
        lg:px-8
        bg-gray-100
      "
    >
      {/* <p className="text-sky-500 text-3xl">Hello Index page!</p> */}
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Image
          alt="Logo"
          height={48}
          width={48}
          className="mx-auto w-auto"
          src={"images/logo.svg"}
        />
        <h2
          className="mt-6 text-3xl font-bold text-center tracking-tight text-gray-900"
        >
          Sign in to your account
        </h2>
      </div>
    </div>
  );
}