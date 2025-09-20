const ContextSection = () => {

    return (
        <div className="pr-4 py-3">
            <div className="grid md:grid-cols-12 gap-12">
                <div className="md:col-span-9">
                    <div className="bg-white p-8 text-left space-y-10">
                        <h1 className="text-2xl font-bold text-[#2163AE]">⁠Le contexte du Hajj aujourd’hui</h1>
                        <p className="flex flex-wrap items-center gap-2">
                            <span>
                                Depuis plusieurs années, l’Arabie Saoudite a mis
                                en place un système centralisé de gestion du Hajj appelé <strong>Nusuk</strong>.
                            </span>
                            <img alt="Nusuk Hajj Logo" src="/NusukHajj-Logo 1.png" />
                            <span>
                                Toutes les inscriptions et tous les packages Hajj passent par ce portail officiel.
                                Les agences saoudiennes agréées y proposent leurs</span>
                            <span>offres, souvent en partenariat
                                avec des agences françaises de confiance comme <strong>GO-MAKKAH</strong>.
                            </span>
                            <img className="h-6" alt="go-makkah Logo" src="/go-makkah 1.png" />
                        </p>
                        <p>
                            Notre rôle est de vous aider à naviguer dans <strong>ce système complexe</strong>,
                            à choisir le pack qui correspond le mieux à vos attentes, et à <strong>sécuriser</strong> votre
                            inscription dans les meilleures conditions.
                        </p>
                    </div>
                </div>
                <div className="md:col-span-3 bg-gold rounded-lg p-6">
                    <div className="text-white space-y-4">
                        <div className="flex gap-3 justify-center items-center">
                            <img className="h-8" alt="service client" src="customer-service 1.png" />
                            <label className="text-2xl font-semibold">Support téléphonique</label>
                        </div>
                        <p className="text-lg font-medium text-left">
                            GO-MAKKAH vous offre hotline support NUSUK
                        </p>
                        <hr className="border-[#DAB86C]" />
                        <p className="text-4xl font-bold">01 49 87 70 21</p>
                        <hr className="border-[#DAB86C]" />
                        <p className="text-left">Ligne ouvert 24h/2h</p>
                        <p className="text-left">Avec la langue Arabe et Français</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ContextSection;