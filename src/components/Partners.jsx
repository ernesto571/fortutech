const partners = [
    { url:"https://res.cloudinary.com/dsljbxkfy/image/upload/v1782227838/sunmate-removebg-preview_o0uqmo.png" },
    { url:"https://res.cloudinary.com/dsljbxkfy/image/upload/v1782227757/deye-removebg-preview_nelzk6.png" },
    { url:"https://res.cloudinary.com/dsljbxkfy/image/upload/v1782227699/nexus-removebg-preview_yafhpm.png" },
    { url:"https://res.cloudinary.com/dsljbxkfy/image/upload/v1782227666/beve-removebg-preview_j32mnb.png" },
    { url:"https://res.cloudinary.com/dsljbxkfy/image/upload/v1782227893/itel-removebg-preview_stz6cf.png" }
]

export default function Partners () {

    return (
        <div className="bg-white py-16 px-6 flex flex-col justify-center text-center max-w-screen overflow-x-hidden">
            {/* heading */}
            <div className="flex flex-col justify-center items-center">
                <p className="purple font-inter tracking-widest text-xs font-semibold uppercase">Official Distributor Partner</p>
                <h1 className="font-bebas purple text-[2.2rem] lg:text-[3rem] mt-1 font-bold uppercase tracking-wide">Our Brand Partners</h1>
                <div className="w-[70px] h-[3px] bg-amber  mt-1"></div>
                <p className="font-inter gray-2 mt-5 text-[0.9rem]">Authorized dealer of leading Chinese & Indian solar brands.</p>
            </div>

            <div className="flex flex-wrap gap-6 md:gap-10 mt-8 justify-center items-center">
                { partners.map((p) => (
                <div key={p.url} className=" px-6 bg-off border border-gray-200 ">
                        <img src={p.url} className="w-[70px] objec-cover" />
                    </div>
                )) }
            </div>
        </div>
    )
}