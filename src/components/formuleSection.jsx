
const FormuleSection = () => {

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold text-left text-[#2163AE]">⁠Deux formules adaptées à vos besoins</h1>
            <div className="grid md:grid-cols-10 gap-12 mt-10 mx-auto place-items-center">
                <div className="md:col-span-5 md:px-16 md:px-8">
                    <div className="border-2 border-solid border-[#2163AE] bg-white max-w-[500px] rounded-lg">
                        <div className="px-4 flex items-center mt-[-3px]">
                            <div className="bg-cover flex justify-center bg-center bg-no-repeat bg-[url('/bookmark.svg')] w-[113px] h-[113px] py-2">
                                <div className="w-[70px] flex justify-center">
                                    <span className="text-white font-bold text-lg">Pack Gratuit</span>
                                </div>
                            </div>
                            <span className="text-2xl font-bold text-[#2163AE]">Hajj Assistance <span className="text-black">GO-Makkah</span> </span>
                        </div>
                        <div className="w-full bg-[#4DA25A] mt-4 p-4">
                            <span className="text-white font-medium">7% de nos client ont le choisis</span>
                        </div>
                        <div className="flex flex-col text-left p-8 gap-3">
                            <p>Nous vous inscrivons sur notre groupe whatsup d’information & assistance</p>
                            <hr className="border-gray-300" />
                            <p>Nous vous envoyons nos formules Hajj 2026</p>
                            <hr className="border-gray-300" />
                            <p>Vous créez par vous-même votre compte Nusuk</p>
                            <hr className="border-gray-300" />
                            <p>Vous réservez une de nos formules</p>
                            <hr className="border-gray-300" />
                            <p>Vous nous envoyez votre passeport et la formule confirmée</p>
                        </div>
                        <div className="px-12 md:mt-24 mb-4">
                            <button className="bg-[#2163AE] w-full px-8 py-2 text-white">
                                 Inscrivez-vous vite !
                            </button>
                        </div>
                    </div>
                </div>
                <div className="md:col-span-5 md:px-16 md:px-8">
                    <div className="border-2 border-solid border-gold bg-[#FFFDF8] max-w-[500px] rounded-lg">
                        <div className="px-4 flex items-center mt-[-3px]">
                            <div className="bg-cover flex justify-center bg-center bg-no-repeat bg-[url('/bookmark2.svg')] w-[113px] h-[113px] py-2">
                                <div className="w-[70px] flex flex-col items-end">
                                    <span className="text-white font-bold text-4xl">250</span>
                                    <span className="text-white font-bold text-md">EUR</span>
                                </div>
                            </div>
                            <span className="text-2xl font-bold text-gold">Hajj Sérinité <span className="text-black">GO-Makkah</span> </span>
                        </div>
                        <div className="w-full bg-gold mt-4 p-4">
                            <span className="text-white font-medium">80% de nos client ont le choisis</span>
                        </div>
                        <div className="flex flex-col text-left p-8 gap-3">
                            <p>Nous vous inscrivons sur notre groupe whatsup d’information & assistance</p>
                            <hr className="border-gray-300" />
                            <p>Nous créons et gérons pour vous votre compte NUSUK</p>
                            <hr className="border-gray-300" />
                            <p>Nous payons votre hajj pour vous si vous le demander. Vos payez votre hajj chez nous</p>
                            <hr className="border-gray-300" />
                            <p> Nous vous envoyons nos formules Hajj 2026</p>
                            <hr className="border-gray-300" />
                            <p>Nous gérons la réservation de votre hajj jusqu’au bout </p>
                            <hr className="border-gray-300" />
                            <p>Et  Vous partez au hajj avec nos équipes accompagnateurs très expérimentés </p>
                        </div>
                         <div className="px-12 mb-4">
                            <button className="bg-gold w-full px-8 py-2 text-white">
                                 Inscrivez-vous vite !
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FormuleSection;