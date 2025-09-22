
const AccompagnSection = () => {

    return (
        <div className="p-8 bg-white space-y-8">
            <h1 className="text-2xl font-bold text-left text-[#2163AE]">Tout savoir sur nos formules Hajj Go-Makkah</h1>
            <p className="text-left font-medium">
                Chez GO Makkah, nous croyons que le Hajj doit se préparer avec autant de rigueur spirituelle que logistique.
                C’est pourquoi nous mettons à votre disposition, gratuitement :
            </p>
            <div className="grid md:grid-cols-12 gap-12">
                <div className="md:col-span-4 text-left space-y-2">
                    <div className="flex gap-3 items-start text-gold">
                        <img width={34} src="/learning.svg" alt="learning"/>
                        <div className="flex flex-col gap-3">
                            <span className="text-xl font-semibold">Des formations pratiques</span>
                            <p className="text-black">
                                En ligne et parfois en présentiel.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="md:col-span-4 text-left space-y-2">
                    <div className="flex gap-3 items-start text-gold">
                        <img src="/read.svg" alt="read"/>
                        <div className="flex flex-col gap-3">
                            <span className="text-xl font-semibold">Des webinars et réunions</span>
                            <p className="text-black">
                              Pour suivre l’actualité du Hajj.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="md:col-span-4 text-left space-y-2">
                    <div className="flex gap-3 items-start text-gold">
                        <img src="/whatsapp.svg" alt="whatsapp-logo"/>
                        <div className="flex flex-col gap-3">
                            <span className="text-xl font-semibold">Un group Whatsapp</span>
                            <p className="text-black">
                              Pour rester en contact permanant avec notre équipe.
                            </p>
                        </div>
                    </div>
                </div>
                 <div className="md:col-span-4 text-left space-y-2">
                    <div className="flex gap-3 items-start text-gold">
                        <img width={30} src="/request.svg" alt="whatsapp-logo"/>
                        <div className="flex flex-col gap-3">
                            <span className="text-xl font-semibold">Réponses personalisées</span>
                            <p className="text-black">
                              à toutes vos questions par télé / whatsaap.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="md:col-span-4 text-left space-y-2">
                    <div className="flex gap-3 items-start text-gold">
                        <img width={30} src="/muslim.svg" alt="whatsapp-logo"/>
                        <div className="flex flex-col gap-3">
                            <span className="text-xl font-semibold">Accompagnement religieux et médical</span>
                            <p className="text-black">
                              séminaires avec imams, médecins et experts du Hajj.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <p className="text-left font-medium">
                Cet accompagnement est inclus pour tous nos inscrits, quelle que soit l’option choisie.
            </p>
        </div>
    )
}
export default AccompagnSection;