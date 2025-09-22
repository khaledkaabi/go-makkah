
const WhyGomakkah = () => {

    return (
        <div className="w-full mt-8 bg-white py-8 px-8">
            <h1 className="text-2xl font-bold text-[#2163AE] text-left">Pourquoi choisir GO Makkah ?</h1>
            <div className="grid md:grid-cols-10 gap-12 mt-8 mx-auto place-items-center">
                <div className="md:col-span-2">
                    <div className="flex flex-col gap-2 bg-image-with-gradient items-center justify-end bg-center rounded-lg p-4 bg-cover bg-no-repeat bg-[url('/maskgroup.svg')] w-[230px] min-h-[290px]">
                        <span className="text-white font-bold">Une expérience de plus de 10 ans dans l’organisation de voyages spirituels.</span>
                    </div>
                </div>
                <div className="md:col-span-2">
                    <div className="flex flex-col gap-2 items-center justify-end bg-center rounded-lg p-4 bg-no-repeat bg-[url('/maskgroup1.svg')] w-[230px] min-h-[290px]">
                        <span className="text-white font-bold">Des partenariats solides et fiables avec des agences saoudiennes agréées.</span>
                    </div>
                </div>
                <div className="md:col-span-2">
                    <div className="flex flex-col gap-2 items-center justify-end bg-center rounded-lg p-4 bg-no-repeat bg-[url('/maskgroup2.svg')] w-[230px] min-h-[290px]">
                        <span className="text-white font-bold">Un taux de réussite exceptionnel pour les inscriptions Hajj.</span>
                    </div>
                </div>
                <div className="md:col-span-2">
                    <div className="flex flex-col gap-2 items-center justify-end bg-center rounded-lg p-4 bg-no-repeat bg-[url('/maskgroup3.svg')] w-[230px] min-h-[290px]">
                        <span className="text-white font-bold">Accompagnement humain et spirituel avant, pendant et après le Hajj.</span>
                    </div>
                </div>
                <div className="md:col-span-2">
                    <div className="flex flex-col gap-2 items-center justify-end bg-center rounded-lg p-4 bg-no-repeat bg-[url('/maskgroup4.svg')] w-[230px] min-h-[290px]">
                        <span className="text-white font-bold">La garantie d’un suivi premium et personnalisé.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default WhyGomakkah;