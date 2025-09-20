
const FooterBottom = () => {

    return (
        <div className="py-4 px-6 w-full">
            <div className="flex items-center justify-center gap-4 flex-wrap">
                <div className="flex gap-2">
                    <span className="font-bold">GO-MAKKAH France</span>
                    <img  src="/flag-france.svg"/>
                </div>
                <div className="flex gap-2">
                    <span className="font-bold">GO-MAKKAH Algerie</span>
                    <img  src="/flag-alger.svg"/>
                </div>
                 <div className="flex gap-2">
                    <span className="font-bold">GO-MAKKAH Maroc</span>
                    <img  src="/flag-maroc.svg"/>
                </div>
                <div className="flex gap-2">
                    <span className="font-bold">GO-MAKKAH Saudi</span>
                    <img  src="/flag-saoudi.svg"/>
                </div>
                <div className="flex gap-2">
                    <span className="font-bold">GO-MAKKAH Tunisie</span>
                    <img  src="/flag-tunisie.svg"/>
                </div>
            </div>
        </div>
    )
}
export default FooterBottom;