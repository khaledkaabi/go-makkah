
const ProcessSection = () => {

    return (
        <div className="p-8 py-3">
            <div className="grid md:grid-cols-12 gap-4">
                <div className="md:col-span-9 grid md:grid-cols-3 gap-12">
                    <div className="bg-white border-t-4 border-gold p-4 flex py-8 flex-col gap-8 items-center rounded-b-lg">
                        <img src="/number-1.svg" />
                        <span className="font-bold">Choisir l’agence et le type de pack</span>
                        <p>(VIP, confort ou économique).</p>
                    </div>
                    <div className="bg-white border-t-4 border-gold p-4 flex pt-8 flex-col gap-8 items-center rounded-b-lg">
                        <img src="/number-2.svg" />
                         <span className="font-bold">Créer un compte Nusuk</span>
                        <p>soit vous-même avec notre assistance gratuite, soit nous le faisons pour vous avec notre pack Sérénité</p>
                    </div>
                    <div className="bg-white border-t-4 border-gold p-4 flex pt-8 flex-col gap-8 items-center rounded-b-lg">
                        <img src="/number-3.svg" />
                        <span className="font-bold">Découvrir les offres</span>
                        <p>officielles annoncées par les autorités saoudiennes.</p>
                    </div>
                </div>

                <div className="md:col-span-3"></div>
            </div>
            <div className="grid md:grid-cols-12 mt-8 gap-4">
                <div className="md:col-span-9 grid md:grid-cols-3 gap-12">
                    <div className="bg-white border-t-4 border-gold p-4 flex py-8 flex-col gap-8 items-center rounded-b-lg">
                        <img src="/number-4.svg" />
                        <span className="font-bold">Sélectionner votre pack Hajj</span>
                        <p>(nous vous aidons à comparer, décortiquer et vérifier chaque détail).</p>
                    </div>
                    <div className="bg-white border-t-4 border-gold p-4 flex pt-8 flex-col gap-8 items-center rounded-b-lg">
                        <img src="/number-5.svg" />
                         <span className="font-bold">Alimenter votre portefeuille client</span>
                        <p>(le paiement est bloqué sur Nusuk jusqu’à validation).</p>
                    </div>
                    <div className="bg-white border-t-4 border-gold p-4 flex pt-8 flex-col gap-8 items-center rounded-b-lg">
                        <img src="/number-6.svg" />
                        <span className="font-bold">Confirmer l’inscription dès l’ouverture</span>
                        <p>une étape cruciale où la rapidité fait toute la différence.</p>
                    </div>
                </div>

                <div className="md:col-span-3"></div>
            </div>
        </div>
    )
}
export default ProcessSection;