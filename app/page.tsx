import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="h-[520px] flex gap-[3rem] w-[90%]">
        <div className=" w-[40rem] h-[25rem]  mt-8"></div>
        <div className="mt-8">
          <div>
            <h1 className="text-4xl font-bold font-montserrat tracking-wide uppercase bg-gradient-to-r from-[#f9572a] to-[#ffc905] bg-clip-text text-transparent">
              NextLevel Food for NextLevel Foodies
            </h1>
            <p className="mt-8 mb-10 text-2xl tracking-wide">
              Taste & share food from all over the world.
            </p>
          </div>
          <div className="">
            <Link href="/community" className="">
              Join the Community
            </Link>
            <Link href="/meals">Explore Meals</Link>
          </div>
        </div>
      </header>
      <main>
        <section className="">
          <h2>How it works</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>

        <section className="">
          <h2>Why NextLevel Food?</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
      </main>
    </>
  );
}
