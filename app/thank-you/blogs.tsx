`use client`

export function Blogs()  {
  return (
    <section className="relative overflow-hidden bg-white mt-10">
      <div className="relative mx-10 px-2 py-16 md:py-5"> 
        <h2 className="font-sans mb-10 text-3xl font-bold text-gray-900">
          Recent Blogs
        </h2>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">

          <article className="flex flex-col gap-4">
            <div className="group relative overflow-hidden rounded-3xl">
              <img
                src="/frame7.png"
                alt="Digital Twin"
                className="
                  h-102.75
                  w-full
                  object-cover
                  transition-transform
                  duration-500
                  ease-out
                  group-hover:scale-130
                "
              />

              {/* Tag */}
              <span className=" absolute left-4 top-4 rounded-full bg-black/30 px-3 py-1 text-s font-medium text-white backdrop-blur">
                Digital Twin
              </span>
            </div>

            <h3 className="text-3xl font-medium leading-snug text-[#3D3D3D]">
              What Is a Digital Twin in 
              <br />Agriculture? Benefits & Uses 
              <br />Explained
            </h3>
          </article>

          {/* Blog Card 2 */}
          <article className="flex flex-col gap-4">
            <div className="group relative overflow-hidden rounded-3xl">
              <img
                src="/frame8.png"
                alt="Game Art"
                className="
                  h-102.75
                  w-full
                  object-cover
                  transition-transform
                  duration-500
                  ease-out
                  group-hover:scale-130
                "
              />

              {/* Tag */}
              <span className=" absolute left-4 top-4 rounded-full bg-black/30 px-3 py-1 text-s font-medium text-white backdrop-blur">
                Game Art
              </span>
            </div>

            <h3 className="text-3xl font-medium leading-snug text-[#3D3D3D]">
              Revolution in Game Art styles <br />with the increase usage of AI <br /> and other tools.
            </h3>
          </article>

          {/* Blog Card 3 */}
          <article className="flex flex-col gap-4">
            <div className="group relative overflow-hidden rounded-3xl">
              <img
                src="/frame9.png"
                alt="Digital Marketing"
                className="
                  h-102.75
                  w-full
                  object-cover
                  transition-transform
                  duration-500
                  ease-out
                  group-hover:scale-130
                "
              />

              {/* Tag */}
              <span className=" absolute left-4 top-4 rounded-full bg-black/30 px-3 py-1 text-s font-medium text-white backdrop-blur">
                Digital Marketing
              </span>
            </div>

            <h3 className="text-3xl font-medium leading-snug text-[#3D3D3D]">
              How to choose the best digital <br /> marketing agency for your <br />social media branding?
            </h3>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
